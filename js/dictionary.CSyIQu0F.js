import { d as defineComponent, r as ref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, a4 as createTextVNode, aA as isRef, i as unref } from "./index.CFN6pFAY.js";
import { E as ElFormItem, a as ElForm } from "./form-item.DZRgFOYu.js";
import { _ as _sfc_main$1 } from "./index.vue_vue_type_script_setup_true_lang.DhCoZJnu.js";
import { E as ElLink } from "./link.BkQgm_J7.js";
import "./use-form-common-props.BWKoJ1vX.js";
import "./castArray.CZ7JEGb9.js";
import "./error.BVJkE67s.js";
import "./_baseClone.-iwnXTVG.js";
import "./checkbox.BlWaAXud.js";
import "./index.u9dBRDld.js";
import "./event.BZTOGHfp.js";
import "./index.DMVeVL49.js";
import "./omit.B-90U05E.js";
/* empty css                        */
import "./radio-group.DPTzynCE.js";
/* empty css             */
import "./select.DsV_wU6e.js";
import "./popper.D7CA1Zt7.js";
import "./index.D7Gft7oI.js";
import "./aria.McRhojP9.js";
import "./index.DrOhuSr5.js";
import "./scrollbar.C-32UdXX.js";
import "./index.dlZTum8k.js";
import "./token.BqWJQ4CJ.js";
import "./strings.fW_J_KLy.js";
import "./index.BNCCwr91.js";
import "./scroll.DUNjmxy1.js";
import "./debounce.LiipNigx.js";
import "./toNumber.BIU2DanW.js";
import "./_baseIteratee.C5qH9EGb.js";
import "./index.BmcUG62t.js";
import "./vnode.Bs3xgscZ.js";
const _hoisted_1 = { class: "app-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dictionary",
  setup(__props) {
    const stringValue = ref("1");
    const numberValue = ref(1);
    const arrayValue = ref(["1", "2"]);
    return (_ctx, _cache) => {
      const _component_el_link = ElLink;
      const _component_dict = _sfc_main$1;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_link, {
          href: "https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/views/demo/dictionary.vue",
          type: "primary",
          target: "_blank",
          class: "mb-[20px]"
        }, {
          default: withCtx(() => [..._cache[4] || (_cache[4] = [
            createTextVNode(" 示例源码 请点击>>>> ", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_el_form, null, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { label: "性别" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(stringValue),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(stringValue) ? stringValue.value = $event : null),
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "primary",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode(' 值为String: const value = ref("1"); ', -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "性别" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(numberValue),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(numberValue) ? numberValue.value = $event : null),
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[6] || (_cache[6] = [
                    createTextVNode(" 值为Number: const value = ref(1); ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "单选框字典" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(numberValue),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(numberValue) ? numberValue.value = $event : null),
                  type: "radio",
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createTextVNode(" 值为Number: const value = ref(1); ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "复选框字典" }, {
              default: withCtx(() => [
                createVNode(_component_dict, {
                  modelValue: unref(arrayValue),
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(arrayValue) ? arrayValue.value = $event : null),
                  type: "checkbox",
                  code: "gender"
                }, null, 8, ["modelValue"]),
                createVNode(_component_el_link, {
                  underline: "never",
                  type: "success",
                  class: "ml-5"
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createTextVNode(' 值为Array: const value = ref(["1", "2"]); ', -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
