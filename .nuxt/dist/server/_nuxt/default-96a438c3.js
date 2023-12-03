import { _ as __nuxt_component_0$4 } from "./nuxt-link-691e5b50.js";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "defu";
import "klona";
import "devalue";
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_Icon = resolveComponent("Icon");
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/boards",
    class: "flex items-center justify-start gap-2 h-full transition-all hover:scale-105"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "streamline:interface-edit-color-palette-color-palette-company-office-supplies-work",
          class: "text-lg"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-md font-medium uppercase"${_scopeId}>Worker</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "streamline:interface-edit-color-palette-color-palette-company-office-supplies-work",
            class: "text-lg"
          }),
          createVNode("span", { class: "text-md font-medium uppercase" }, "Worker")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Logo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-center items-center w-10 h-10 text-red-400 rounded-full bg-red-200 transition-all cursor-pointer hover:ring-4 hover:ring-slate-300"> M </div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Account.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_HeaderLogo = __nuxt_component_0$3;
  const _component_HeaderAccount = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed z-20 h-[58px] w-full grid items-center px-4 bg-white border-b border-slate-300"><div class="flex justify-between"><div>`);
  _push(ssrRenderComponent(_component_HeaderLogo, null, null, _parent));
  _push(`</div><div class="flex gap-4">`);
  _push(ssrRenderComponent(_component_HeaderAccount, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  const _component_Icon = resolveComponent("Icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><ul class="grid gap-2"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/boards",
    activeClass: "text-slate-500 bg-slate-200",
    class: "flex justify-start items-center gap-2 py-3 px-4 text-slate-600 rounded-md transition-all hover:bg-slate-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "streamline:dashboard-3-solid",
          class: "text-sm"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-sm font-medium"${_scopeId}>Boards</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "streamline:dashboard-3-solid",
            class: "text-sm"
          }),
          createVNode("span", { class: "text-sm font-medium" }, "Boards")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    activeClass: "text-slate-500 bg-slate-200",
    class: "flex justify-start items-center gap-2 py-3 px-4 text-slate-600 rounded-md transition-all hover:bg-slate-200"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "streamline:home-4-solid",
          class: "text-sm"
        }, null, _parent2, _scopeId));
        _push2(`<span class="text-sm font-medium"${_scopeId}>Home page</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "streamline:home-4-solid",
            class: "text-sm"
          }),
          createVNode("span", { class: "text-sm font-medium" }, "Home page")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/Menu.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-px my-4 bg-slate-300" }, _attrs))}></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/separator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Icon = resolveComponent("Icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Icon, { name: "streamline:add-1-solid" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Plus.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_IconsPlus = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><p class="text-sm text-slate-500">Workspaces</p><button>`);
  _push(ssrRenderComponent(_component_IconsPlus, { class: "flex justify-center items-center w-6 h-6 text-xs text-slate-500 rounded-md transition-all duration-300 hover:bg-slate-200" }, null, _parent));
  _push(`</button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/Workspaces.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SidebarMenu = __nuxt_component_0$1;
  const _component_Separator = __nuxt_component_1$1;
  const _component_SidebarWorkspaces = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed z-10 w-[260px] h-full p-4 bg-white border-r border-slate-300" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SidebarMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_SidebarWorkspaces, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sidebar/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0$2;
  const _component_Sidebar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[100vh] bg-slate-200" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="p-4 pt-[74px] pl-[276px]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-96a438c3.js.map
