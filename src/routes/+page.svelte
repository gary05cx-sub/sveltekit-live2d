<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as PIXI from 'pixi.js';
	import { Live2DModel } from 'pixi-live2d-display';

	let container: HTMLDivElement;
	let app: PIXI.Application | null = null;
	let model: any = null;
	let ws: WebSocket | null = null;

	onMount(async () => {
		// 1. 載入 Core + 註冊 Ticker（跟之前一樣）
		await new Promise<void>((resolve) => {
			if ((window as any).live2dcubismcore) return resolve();
			const script = document.createElement('script');
			script.src = '/live2d/live2dcubismcore.min.js';
			script.onload = () => resolve();
			document.head.appendChild(script);
		});

		(window as any).PIXI = PIXI;
		Live2DModel.registerTicker(PIXI.Ticker as any);

		// 2. 建立 Pixi App + 載入模型（跟之前一樣）
		app = new PIXI.Application({ background: '#1a1a2e', resizeTo: container, antialias: true });
		container.appendChild(app.canvas as HTMLCanvasElement);

		model = await Live2DModel.from('/models/Hiyori/Hiyori.model3.json');
		model.scale.set(0.28);
		model.x = app.screen.width / 2;
		model.y = app.screen.height * 0.85;
		app.stage.addChild(model);

		// 3. === 新增 WebSocket 連線 ===
		connectWebSocket();

		// 4. 原本的互動功能（保留）
		model.interactive = true;
		model.on('pointertap', () => model.motion('TapBody'));

		const onPointerMove = (e: PointerEvent) => {
			const rect = container.getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
			model.focus(x, y);
		};
		container.addEventListener('pointermove', onPointerMove);

		const handleResize = () => {
			if (model && app) {
				model.x = app.screen.width / 2;
				model.y = app.screen.height * 0.85;
			}
		};
		window.addEventListener('resize', handleResize);
	});

	// ==================== WebSocket 控制核心 ====================
	function connectWebSocket() {
		// 改成你的後端網址（開發時用 ws://localhost:8080，正式用 wss://）
		ws = new WebSocket('ws://localhost:8080/live2d');   // ←←← 改這裡

		ws.onopen = () => {
			console.log('✅ WebSocket 已連線到後端');
			// 可選：送心跳或告知前端已準備好
			ws?.send(JSON.stringify({ type: 'ready' }));
		};

		ws.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				console.log('後端指令:', data);

				if (!model) return;

				switch (data.type) {
					case 'motion':        // 播放動作
						model.motion(data.name, { loop: data.loop ?? false });
						break;

					case 'expression':    // 切換表情（Cubism 4 才支援）
						model.expression(data.name);
						break;

					case 'parameter':     // 直接控制參數（眼睛、嘴巴、角度等）
						model.parameters.set(data.key, data.value);
						break;

					case 'focus':         // 讓模型看某個方向
						model.focus(data.x ?? 0, data.y ?? 0);
						break;

					case 'shake':         // 抖動（內建）
						model.motion('Shake');
						break;
				}
			} catch (e) {
				console.error('WebSocket 訊息解析失敗', e);
			}
		};

		ws.onclose = () => {
			console.log('❌ WebSocket 斷線，5秒後重連...');
			setTimeout(connectWebSocket, 5000);
		};

		ws.onerror = (err) => console.error('WebSocket 錯誤', err);
	}

	onDestroy(() => {
		ws?.close();
		if (app) app.destroy(true);
	});
</script>

<div bind:this={container} style="width: 100%; height: 640px; overflow: hidden;"></div>