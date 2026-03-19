export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["model/Hiyori/Hiyori.2048/texture_00.png","model/Hiyori/Hiyori.2048/texture_01.png","model/Hiyori/Hiyori.cdi3.json","model/Hiyori/Hiyori.moc3","model/Hiyori/Hiyori.model3.json","model/Hiyori/Hiyori.physics3.json","model/Hiyori/Hiyori.pose3.json","model/Hiyori/Hiyori.userdata3.json","model/Hiyori/motions/Hiyori_m01.motion3.json","model/Hiyori/motions/Hiyori_m02.motion3.json","model/Hiyori/motions/Hiyori_m03.motion3.json","model/Hiyori/motions/Hiyori_m04.motion3.json","model/Hiyori/motions/Hiyori_m05.motion3.json","model/Hiyori/motions/Hiyori_m06.motion3.json","model/Hiyori/motions/Hiyori_m07.motion3.json","model/Hiyori/motions/Hiyori_m08.motion3.json","model/Hiyori/motions/Hiyori_m09.motion3.json","model/Hiyori/motions/Hiyori_m10.motion3.json","robots.txt"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DuaE_xz7.js",app:"_app/immutable/entry/app.r8UhrcBT.js",imports:["_app/immutable/entry/start.DuaE_xz7.js","_app/immutable/chunks/B_aOLCdU.js","_app/immutable/chunks/dyDNgvtu.js","_app/immutable/chunks/tjnhiIan.js","_app/immutable/entry/app.r8UhrcBT.js","_app/immutable/chunks/C7uGGIoS.js","_app/immutable/chunks/dyDNgvtu.js","_app/immutable/chunks/CmdBtnsF.js","_app/immutable/chunks/YbTT0PXA.js","_app/immutable/chunks/tjnhiIan.js","_app/immutable/chunks/DPEYgV4X.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
