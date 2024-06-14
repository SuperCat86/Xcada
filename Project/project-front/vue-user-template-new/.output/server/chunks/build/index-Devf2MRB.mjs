import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = {
  data() {
    return {
      items: [
        /* banner 轮播图 */
        {
          imgSrc: "/img/banner1.png",
          category: "course",
          title: "Slider 01",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
        },
        // Add more items as needed...
        {
          imgSrc: "/img/banner2.jpg",
          category: "course",
          title: "Slider 02",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
        },
        {
          imgSrc: "/img/banner3.jpg",
          category: "course",
          title: "Slider 03",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
        },
        {
          imgSrc: "/img/banner4.jpg",
          category: "course",
          title: "Slider 04",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
        },
        {
          imgSrc: "/img/banner5.jpg",
          category: "course",
          title: "Slider 05",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."
        }
      ],
      thumbnails: [
        /* banner缩略图 */
        {
          imgSrc: "/img/banner1.png",
          name: "Name Slider"
        },
        {
          imgSrc: "/img/banner2.jpg",
          name: "Name Slider"
        },
        {
          imgSrc: "/img/banner3.jpg",
          name: "Name Slider"
        },
        {
          imgSrc: "/img/banner4.jpg",
          name: "Name Slider"
        },
        {
          imgSrc: "/img/banner5.jpg",
          name: "Name Slider"
        }
      ],
      countItem: 0,
      itemActive: 0,
      refreshInterval: null,
      next: null,
      prev: null,
      categorys: [
        /* 课程分类 */
        { text: "Home", href: "#" },
        { text: "About", href: "#" },
        { text: "Portfolio", href: "#" },
        { text: "Advice", href: "#" },
        { text: "Slider", href: "#" }
      ],
      cards: [
        {
          imgSrc: "/img/banner1.png",
          title: "Course1",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
          href: "#"
        },
        {
          imgSrc: "/img/banner2.jpg",
          title: "Course2",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
          href: "#"
        },
        {
          imgSrc: "/img/banner3.jpg",
          title: "Course3",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
          href: "#"
        },
        {
          imgSrc: "/img/banner4.jpg",
          title: "Course4",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
          href: "#"
        },
        {
          imgSrc: "/img/banner5.jpg",
          title: "Course5",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
          href: "#"
        }
      ]
    };
  },
  mounted() {
    this.next = (void 0).getElementById("next");
    this.prev = (void 0).getElementById("prev");
    this.countItem = this.items.length;
    this.refreshInterval = setInterval(this.nextSlide);
  },
  methods: {
    //下一张轮播图
    nextSlide() {
      this.itemActive = (this.itemActive + 1) % this.countItem;
      this.showSlider();
    },
    //上一张轮播图
    prevSlide() {
      this.itemActive = (this.itemActive - 1 + this.countItem) % this.countItem;
      this.showSlider();
    },
    //显示当前轮播图
    showSlider() {
      const itemActiveOld = (void 0).querySelector(
        ".slider .list .item.active"
      );
      const thumbnailActiveOld = (void 0).querySelector(
        ".thumbnail .item.active"
      );
      itemActiveOld.classList.remove("active");
      thumbnailActiveOld.classList.remove("active");
      const itemActiveNew = (void 0).querySelectorAll(".slider .list .item")[this.itemActive];
      const thumbnailActiveNew = (void 0).querySelectorAll(".thumbnail .item")[this.itemActive];
      itemActiveNew.classList.add("active");
      thumbnailActiveNew.classList.add("active");
      clearInterval(this.refreshInterval);
      this.refreshInterval = setInterval(this.nextSlide);
    },
    //切换轮播图
    selectThumbnail(index2) {
      this.itemActive = index2;
      this.showSlider();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "course" }, _attrs))}><div class="title1"><p>\u70ED\u95E8\u8BFE\u7A0B</p></div><div class="slider"><div class="list"><!--[-->`);
  ssrRenderList($data.items, (item, index2) => {
    _push(`<div class="${ssrRenderClass([{ active: index2 === $data.itemActive }, "item"])}"><img${ssrRenderAttr("src", item.imgSrc)}><div class="content"><p>${ssrInterpolate(item.category)}</p><h2>${ssrInterpolate(item.title)}</h2><p>${ssrInterpolate(item.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></div><div class="arrows"><button id="prev">&lt;</button><button id="next">&gt;</button></div><div class="thumbnail"><!--[-->`);
  ssrRenderList($data.thumbnails, (thumbnail, index2) => {
    _push(`<div class="${ssrRenderClass([{ active: index2 === $data.itemActive }, "item"])}"><img${ssrRenderAttr("src", thumbnail.imgSrc)}><div class="content">${ssrInterpolate(thumbnail.name)}</div></div>`);
  });
  _push(`<!--]--></div><hr><div class="title2"><p>\u8BFE\u7A0B\u5206\u7C7B</p></div><div class="nav"><!--[-->`);
  ssrRenderList($data.categorys, (category, index2) => {
    _push(`<a${ssrRenderAttr("href", category.href)}>${ssrInterpolate(category.text)}</a>`);
  });
  _push(`<!--]--></div><div class="container"><!--[-->`);
  ssrRenderList($data.cards, (card, index2) => {
    _push(`<div class="card"><div class="imgBx"><img${ssrRenderAttr("src", card.imgSrc)}></div><div class="content"><h2>${ssrInterpolate(card.title)}</h2><p>${ssrInterpolate(card.description)}</p><a${ssrRenderAttr("href", card.href)}>Learn</a></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Devf2MRB.mjs.map
