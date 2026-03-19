

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CwY6Akxw.js","_app/immutable/chunks/C0hS2IYY.js","_app/immutable/chunks/YbTT0PXA.js","_app/immutable/chunks/dyDNgvtu.js","_app/immutable/chunks/tjnhiIan.js","_app/immutable/chunks/C7uGGIoS.js"];
export const stylesheets = [];
export const fonts = [];
