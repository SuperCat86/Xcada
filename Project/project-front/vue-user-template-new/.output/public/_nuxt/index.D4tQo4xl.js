import{_ as v,c as s,a as e,F as a,u as d,o as r,v as g,t as n}from"./entry.BeHm7uQs.js";const h=window.setInterval,S={data(){return{items:[{imgSrc:"/img/banner1.png",category:"course",title:"Slider 01",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."},{imgSrc:"/img/banner2.jpg",category:"course",title:"Slider 02",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."},{imgSrc:"/img/banner3.jpg",category:"course",title:"Slider 03",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."},{imgSrc:"/img/banner4.jpg",category:"course",title:"Slider 04",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."},{imgSrc:"/img/banner5.jpg",category:"course",title:"Slider 05",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex."}],thumbnails:[{imgSrc:"/img/banner1.png",name:"Name Slider"},{imgSrc:"/img/banner2.jpg",name:"Name Slider"},{imgSrc:"/img/banner3.jpg",name:"Name Slider"},{imgSrc:"/img/banner4.jpg",name:"Name Slider"},{imgSrc:"/img/banner5.jpg",name:"Name Slider"}],countItem:0,itemActive:0,refreshInterval:null,next:null,prev:null,categorys:[{text:"Home",href:"#"},{text:"About",href:"#"},{text:"Portfolio",href:"#"},{text:"Advice",href:"#"},{text:"Slider",href:"#"}],cards:[{imgSrc:"/img/banner1.png",title:"Course1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",href:"#"},{imgSrc:"/img/banner2.jpg",title:"Course2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",href:"#"},{imgSrc:"/img/banner3.jpg",title:"Course3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",href:"#"},{imgSrc:"/img/banner4.jpg",title:"Course4",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",href:"#"},{imgSrc:"/img/banner5.jpg",title:"Course5",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",href:"#"}]}},mounted(){this.next=document.getElementById("next"),this.prev=document.getElementById("prev"),this.countItem=this.items.length,this.refreshInterval=h(this.nextSlide,5e3)},methods:{nextSlide(){this.itemActive=(this.itemActive+1)%this.countItem,this.showSlider()},prevSlide(){this.itemActive=(this.itemActive-1+this.countItem)%this.countItem,this.showSlider()},showSlider(){const m=document.querySelector(".slider .list .item.active"),o=document.querySelector(".thumbnail .item.active");m.classList.remove("active"),o.classList.remove("active");const u=document.querySelectorAll(".slider .list .item")[this.itemActive],p=document.querySelectorAll(".thumbnail .item")[this.itemActive];u.classList.add("active"),p.classList.add("active"),clearInterval(this.refreshInterval),this.refreshInterval=h(this.nextSlide,5e3)},selectThumbnail(m){this.itemActive=m,this.showSlider()}}},_={class:"course"},b=e("div",{class:"title1"},[e("p",null,"热门课程")],-1),L={class:"slider"},f={class:"list"},x=["src"],I={class:"content"},y={class:"arrows"},A={class:"thumbnail"},q=["onClick"],j=["src"],k={class:"content"},C=e("hr",null,null,-1),w=e("div",{class:"title2"},[e("p",null,"课程分类")],-1),N={class:"nav"},B=["href"],E={class:"container"},F={class:"imgBx"},O=["src"],T={class:"content"},z=["href"];function D(m,o,u,p,c,l){return r(),s("div",_,[b,e("div",L,[e("div",f,[(r(!0),s(a,null,d(c.items,(i,t)=>(r(),s("div",{key:t,class:g(["item",{active:t===c.itemActive}])},[e("img",{src:i.imgSrc},null,8,x),e("div",I,[e("p",null,n(i.category),1),e("h2",null,n(i.title),1),e("p",null,n(i.description),1)])],2))),128))])]),e("div",y,[e("button",{id:"prev",onClick:o[0]||(o[0]=(...i)=>l.prevSlide&&l.prevSlide(...i))},"<"),e("button",{id:"next",onClick:o[1]||(o[1]=(...i)=>l.nextSlide&&l.nextSlide(...i))},">")]),e("div",A,[(r(!0),s(a,null,d(c.thumbnails,(i,t)=>(r(),s("div",{key:t,class:g(["item",{active:t===c.itemActive}]),onClick:H=>l.selectThumbnail(t)},[e("img",{src:i.imgSrc},null,8,j),e("div",k,n(i.name),1)],10,q))),128))]),C,w,e("div",N,[(r(!0),s(a,null,d(c.categorys,(i,t)=>(r(),s("a",{key:t,href:i.href},n(i.text),9,B))),128))]),e("div",E,[(r(!0),s(a,null,d(c.cards,(i,t)=>(r(),s("div",{class:"card",key:t},[e("div",F,[e("img",{src:i.imgSrc},null,8,O)]),e("div",T,[e("h2",null,n(i.title),1),e("p",null,n(i.description),1),e("a",{href:i.href},"Learn",8,z)])]))),128))])])}const V=v(S,[["render",D]]);export{V as default};