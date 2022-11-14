import { defineComponent as s, openBlock as a, createElementBlock as r, createElementVNode as o, renderSlot as u, mergeProps as i } from "vue";
const _ = { class: "input-container" }, d = ["for"], p = ["id", "name"], f = /* @__PURE__ */ s({
  __name: "Input",
  props: {
    label: null,
    inputAttributes: { default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (a(), r("div", _, [
      o("label", {
        class: "input-label",
        for: e.label
      }, [
        u(t.$slots, "default", {}, void 0, !0)
      ], 8, d),
      o("input", i({
        id: e.label,
        class: "input",
        name: e.label
      }, e.inputAttributes), null, 16, p)
    ]));
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, c] of t)
    n[l] = c;
  return n;
}, v = /* @__PURE__ */ m(f, [["__scopeId", "data-v-f3d492cc"]]);
export {
  v as Input
};
