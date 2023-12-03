import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = resolveComponent("Icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid items-center h-[4rem] px-4 bg-white border-b border-slate-300"><div class="flex justify-between"><div class="flex items-center gap-4"><span>Project name</span>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars",
    class: "transition-all cursor-pointer hover:scale-110"
  }, null, _parent));
  _push(`</div><div class="flex gap-4"><button class="flex justify-center items-center gap-2 py-2 px-4 text-slate-500 rounded-md bg-slate-200 transition-all duration-300 hover:bg-slate-300">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user" }, null, _parent));
  _push(`<span>Share</span></button><div class="flex justify-center items-center w-10 h-10 text-red-400 rounded-full bg-red-200 transition-all cursor-pointer hover:ring-4 hover:ring-slate-300"> M</div></div></div></div><div class="p-4 h-[calc(100vh-4rem)] bg-slate-300 overflow-scroll"><div class="flex gap-4 w-max items-start"><div class="w-[320px] min-w-[320px] pt-4 pb-2 px-2 bg-slate-100 rounded-lg ring-1 ring-slate-300"><div class="flex items-center max-w-max h-7 mb-4 px-3 text-slate-500 text-md font-medium rounded-full">To do </div><div class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400"><h3 class="block text-md font-medium">Simple card title</h3></div><div class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400"><div class="flex gap-2 mb-4"><div class="flex justify-center items-center w-6 h-6 text-orange-400 text-xs rounded-full bg-orange-200">M </div><div class="flex justify-center items-center w-6 h-6 text-red-400 text-xs rounded-full bg-red-200">R </div></div><h3 class="block text-md font-medium">Card with authors</h3></div><div class="mt-2 p-4 rounded-lg bg-white shadow-sm cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-blue-400"><h3 class="block text-md font-medium">Card title with authors and labels</h3><p class="block mt-2 text-sm text-slate-500">A short description of a card.</p><div class="flex items-center gap-4 mt-4 text-sm text-slate-500">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:visible" }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:interface-text-formatting-paragraph-article-alignment-formatting-normal-paragraph-text" }, null, _parent));
  _push(`<span class="flex items-center gap-1">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:interface-validation-check-square-1-check-form-validation-checkmark-success-add-addition-box-square" }, null, _parent));
  _push(`<span class="text-xs">0/2</span></span><span class="flex items-center gap-1">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:chat-bubble-oval" }, null, _parent));
  _push(`<span class="text-xs">2</span></span></div><div class="flex flex-wrap gap-2 mt-4"><div class="text-xs px-2 py-1 rounded-md bg-green-200">Label</div><div class="text-xs px-2 py-1 rounded-md bg-blue-200">Label</div><div class="text-xs px-2 py-1 rounded-md bg-purple-200">Label</div><div class="text-xs px-2 py-1 rounded-md bg-red-200">Label</div><div class="text-xs px-2 py-1 rounded-md bg-orange-200">Label</div><div class="text-xs px-2 py-1 rounded-md bg-yellow-200">Label</div></div></div><div class="mt-2"><button class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-200">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:add-1-solid" }, null, _parent));
  _push(`<span class="font-medium">Add a card</span></button></div></div><div class="w-[320px] min-w-[320px] pt-4 pb-2 px-2 bg-slate-100 rounded-lg ring-1 ring-slate-300"><div class="flex items-center max-w-max h-7 mb-4 px-3 text-slate-500 text-md font-medium rounded-full">In progress </div><div class="mt-2"><button class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-200">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:add-1-solid" }, null, _parent));
  _push(`<span class="font-medium">Add a card</span></button></div></div><div class="w-[320px] min-w-[320px] p-2 px-2 bg-slate-200 rounded-lg ring-1 ring-slate-300"><div><button class="flex justify-start items-center gap-2 w-full py-2 px-4 text-slate-500 text-sm rounded-lg transition-all hover:bg-slate-300">`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:add-1-solid" }, null, _parent));
  _push(`<span class="font-medium">Add a new column</span></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boards/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-6f77ddfa.js.map
