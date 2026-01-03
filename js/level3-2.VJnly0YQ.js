import { d as defineComponent, r as ref, o as onMounted, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, aA as isRef, i as unref } from "./index.DiKldNkq.js";
import { E as ElInput } from "./input.DmiA4-oi.js";
import { E as ElAlert } from "./alert.Ca3cwYkX.js";
import { T as ToDetail } from "./detail.BYxVfHIu.js";
import { _ as _sfc_main$1 } from "./level1.vue_vue_type_script_setup_true_lang.1j9Se5Or.js";
import { _ as _sfc_main$2 } from "./level2.vue_vue_type_script_setup_true_lang.CAUWGdx5.js";
import "./index.BHkhC2vI.js";
import "./event.BZTOGHfp.js";
import "./index.CJBGHILo.js";
import "./use-form-common-props.lTDinMtp.js";
import "./index.B0YD2i6d.js";
import "./aria.McRhojP9.js";
import "./error.BVJkE67s.js";
import "./index.D8NA7O-1.js";
import "./index.CwQv47vy.js";
import "./index.Dk-590RJ.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = {
  flex: "",
  "flex-col": "",
  "gap-20px": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MultiLevel32" },
  __name: "level3-2",
  setup(__props) {
    const value = ref("");
    onMounted(() => {
      console.log("Multilevel32 onMounted");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1),
          createVNode(_sfc_main$2),
          createVNode(_component_el_alert, {
            closable: false,
            title: "菜单三级-2",
            type: "warning"
          }),
          createVNode(_component_el_input, {
            modelValue: unref(value),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(value) ? value.value = $event : null),
            placeholder: "缓存测试"
          }, null, 8, ["modelValue"]),
          createVNode(unref(ToDetail))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
