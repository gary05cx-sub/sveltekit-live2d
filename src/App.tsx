import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    console.log('🚀 開始初始化 (Pixi v7 穩定版)...');

    // 載入 Core
    const loadCore = async () => {
      if ((window as any).live2dcubismcore) return;
      await new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.src = '/live2d/live2dcubismcore.min.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    loadCore().then(async () => {
      (window as any).PIXI = PIXI;

      // Pixi v7 正確寫法：選項直接傳給 constructor
      const app = new PIXI.Application({
        background: '#1a1a2e',
        resizeTo: container,
        antialias: true,
      });

      // v7 用 app.view（自動產生的 canvas）
      container.appendChild(app.view as HTMLCanvasElement);

      console.log('✅ Pixi App 建立完成');

      // 載入模型
      const model = await Live2DModel.from('/models/Hiyori/Hiyori.model3.json', {
        autoInteract: false,
      });
      
      model.scale.set(0.175);
      model.anchor.set(0.5, 1);
      model.x = app.screen.width / 2;
      model.y = app.screen.height * 1.5;
      
      model.eventMode = 'static';
      model.on('pointertap', () => {
        model.motion('TapBody');
        console.log('點擊 → 播放 TapBody');
      });
      
      app.stage.addChild(model);
      console.log('✅ 模型已加入舞台！');

      // 自動播放 Idle
      model.motion('Idle');

      // 眼睛跟隨滑鼠
      const onMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        model.focus(x, y);
      };
      container.addEventListener('pointermove', onMove);
    }).catch(err => {
      console.error('初始化失敗:', err);
    });

    return () => {};
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default App;