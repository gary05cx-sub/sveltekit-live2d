import "clsx";
import { b as ssr_context } from "../../chunks/context.js";
import "pixi.js";
import "pixi-live2d-display";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    $$renderer2.push(`<div style="width: 100%; height: 640px; overflow: hidden;"></div>`);
  });
}
export {
  _page as default
};
