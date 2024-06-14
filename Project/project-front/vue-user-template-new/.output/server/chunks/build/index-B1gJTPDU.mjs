import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("video/lighthouse.mp4");
const _imports_1 = "" + publicAssetsURL("img/people-meeting.jpg");
const _imports_2 = "" + publicAssetsURL("img/campus.jpg");
const _imports_3 = "" + publicAssetsURL("img/commencement.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "index" }, _attrs))}><video autoplay muted loop${ssrRenderAttr("src", _imports_0)}></video><div class="introduce">\u6B22\u8FCE\u6765\u5230Xcada\uFF1A\u5728\u7EBF\u6559\u80B2\u5E73\u53F0</div><div><h3 class="advertise1">\u65F6\u95F4\u81EA\u7531\uFF0C\u5B66\u60A8\u60F3\u5B66</h3><h3 class="advertise2">\u5B9E\u8DF5\u63A2\u7D22\uFF0C\u521B\u65B0\u601D\u7EF4</h3><h3 class="advertise3">\u4EA4\u6D41\u4E92\u52A8\uFF0C\u5171\u540C\u5B66\u4E60</h3></div><hr class="hr1"><div class="ads1"><h3>\u901A\u8FC7Xcada\u5FEB\u901F\u63D0\u5347\u4E2A\u4EBA\u6280\u80FD</h3><ul class="publicize"><li>\u591A\u5143\u6559\u5B66\u65B9\u5F0F\uFF0C\u6253\u9020\u4E2A\u6027\u5316\u5B66\u4E60\u8DEF\u5F84\uFF0C\u8BA9\u60A8\u7684\u5B66\u4E60\u4E4B\u65C5\u66F4\u52A0\u4E30\u5BCC\u591A\u5F69\u3002</li><li>\u6211\u4EEC\u81F4\u529B\u4E8E\u63D0\u4F9B\u4EA4\u4E92\u6027\u5F3A\u3001\u5185\u5BB9\u4E30\u5BCC\u7684\u5B66\u4E60\u5E73\u53F0\uFF0C\u8BA9\u60A8\u5C3D\u60C5\u4EAB\u53D7\u5B66\u4E60\u7684\u4E50\u8DA3\uFF0C\u4E0D\u65AD\u63D0\u5347\u81EA\u6211\u3002</li><li>Xcada\u4E3A\u60A8\u91CF\u8EAB\u5B9A\u5236\u5B66\u4E60\u8BA1\u5212\uFF0C\u7ED3\u5408\u4E2A\u4EBA\u5174\u8DA3\u548C\u5B66\u4E60\u76EE\u6807\uFF0C\u52A9\u60A8\u5FEB\u901F\u63D0\u5347\u6280\u80FD\u3002</li></ul><img${ssrRenderAttr("src", _imports_1)}></div><hr class="hr2"><div class="ads2"><h3>Xcada\u52A9\u60A8\u5B9E\u73B0\u76EE\u6807</h3><ul class="publicize"><li>\u591A\u5143\u5B66\u4E60\u8D44\u6E90\uFF0C\u6EE1\u8DB3\u4E0D\u540C\u9700\u6C42\uFF0C\u8BA9\u60A8\u968F\u65F6\u968F\u5730\u65E0\u9650\u5236\u8BBF\u95EEXcada\u7684\u9876\u5C16\u8BFE\u7A0B</li><li>\u5B9E\u65F6\u66F4\u65B0\u7684\u8BFE\u7A0B\u5185\u5BB9\uFF0C\u8DDF\u4E0A\u65F6\u4EE3\u6F6E\u6D41\uFF0C\u638C\u63E1\u6700\u65B0\u77E5\u8BC6\u548C\u6280\u80FD\uFF0C\u4FDD\u6301\u7ADE\u4E89\u529B\u3002</li><li>\u5168\u7403\u5316\u89C6\u91CE\uFF0C\u6253\u5F00\u56FD\u9645\u5316\u5B66\u4E60\u4E4B\u95E8\uFF0C\u4E0E\u4E16\u754C\u63A5\u8F68\uFF0C\u62D3\u5C55\u60A8\u7684\u56FD\u9645\u89C6\u91CE\u3002</li></ul><img${ssrRenderAttr("src", _imports_2)}></div><hr class="hr3"><div class="advertise4"><h3>\u6211\u4EEC\u7406\u5FF5\u662F</h3></div><div class="advertise5"><h3>\u8BA9\u6BCF\u4E00\u4E2A\u6709\u610F\u613F\u63D0\u5347\u81EA\u5DF1\u7684\u4EBA\uFF0C\u90FD\u53EF\u4EE5\u83B7\u5F97\u66F4\u4F18\u8D28\u7684\u6559\u80B2</h3></div><div class="bottom_img"><img${ssrRenderAttr("src", _imports_3)}></div><div class="advertise6"><h3>\u597D\u7684\u6559\u80B2\uFF0C\u6CA1\u6709\u56F4\u5899</h3></div><footer><ul>SuperCat \xA9 2024</ul><li>\u5907\u6848\u53F7\uFF1A\u8FBDICP\u59072023003957\u53F7</li><li>\u5730\u5740\uFF1A\u8FBD\u5B81\u7701\u6C88\u9633\u5E02\u9053\u4E49\u5357\u5927\u885737\u53F7\u6C88\u9633\u822A\u7A7A\u822A\u5929\u5927\u5B66</li><li>\u8054\u7CFB\u90AE\u7BB1\uFF1Asupercat_86@163.com</li><li></li></footer><div style="${ssrRenderStyle({ "margin-top": "-23px", "position": "absolute", "top": "4100px", "width": "100%" })}" aria-hidden="true"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "0px", "height": "23px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "1px", "height": "22px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "2px", "height": "21px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "3px", "height": "20px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "4px", "height": "19px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "5px", "height": "18px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "6px", "height": "17px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "7px", "height": "16px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "8px", "height": "15px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "9px", "height": "14px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "10px", "height": "13px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "11px", "height": "12px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "12px", "height": "11px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "13px", "height": "10px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "14px", "height": "9px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "15px", "height": "8px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "16px", "height": "7px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "17px", "height": "6px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "18px", "height": "5px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "19px", "height": "4px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "20px", "height": "3px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "21px", "height": "2px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "22px", "height": "1px" })}"><hr class="bg-primary" style="${ssrRenderStyle({ "margin-top": "23px", "height": "0px" })}"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B1gJTPDU.mjs.map
