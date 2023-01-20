import{j as n,a as e,S as m,P as h,A as x,b as g,r as o,R as p,B as f}from"./vendor.fe30858c.js";const u=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}};u();var y="/assets/coolestboy.15797da1.png";const b=()=>{const i=[{name:"logo-github",live_link:"https://github.com/Coolestboy01"},{name:"logo-linkedin",live_link:"https://www.linkedin.com/in/kayode-ojo-7663b599/"}];return n("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center bg-gradient-to-b from-teal-500 rounded-full w-auto h-auto overflow-hidden mx-7",children:e("img",{src:y,alt:"",className:" w-44 h-auto md:w-11/12"})}),e("div",{className:"flex-1",children:n("div",{className:"md:text-left text-center",children:[n("h1",{className:"md:text-5xl text-xl md:leading-normal leading-10 text-white font-bold",children:[n("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Kayode Ojo"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Frontend Developer"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:i==null?void 0:i.map(l=>e("div",{className:"text-gray-600 hover:text-white cursor-pointer ",children:e("a",{href:l.live_link,target:"_blank",children:e("ion-icon",{name:l.name})})},l))})]})})]})};var d="/assets/image11.9c83f39d.png";const v=()=>e("section",{id:"about",className:"py-10 text-white",children:n("div",{className:"text-center mt-8",children:[n("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),n("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:n("div",{className:"text-gray-300",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"I am a creative and detail-oriented Frontend Software Developer with a background in developing responsive, high-performance, reliable React-based web applications targeting both mobile devices and desktops. I have experience in testing and debugging code, and developing front-end logic. I have also been recognized by senior leadership for the passion for quality, eye for detail and always ready to dive in and tackle problems head-on."}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Years experience",count:"01"},{text:"Completed Projects",count:"10"},{text:"Companies Work",count:"01"}].map(l=>n("div",{children:[n("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[l.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:l.text})]},l.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/Ojo Kayode CV.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:d,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})}),N=()=>{const i=[{logo:"logo-html5",level:"Expert",count:90},{logo:"logo-css3",level:"Expert",count:90},{logo:"logo-javascript",level:"Intermediate",count:70},{logo:"logo-react",level:"Intermediate",count:70},{logo:"logo-figma",level:"Beginner",count:30},{logo:"logo-github",level:"Intermediate",count:80}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:n("div",{className:"mt-8 text-gray-100 text-center",children:[n("h3",{className:"text-4xl font-semibold",children:["Technical ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:i==null?void 0:i.map((l,r)=>n("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${l.count}%,#ddd ${l.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:l.logo})})}),e("p",{className:"text-xl mt-3",children:l.level})]},r))})]})})};var w="/assets/Kayode project 1.d018177c.png",k="/assets/insta-clone.74978c67.png";const j=()=>n("section",{id:"projects",className:"py-10 text-white",children:[n("div",{className:"text-center",children:[n("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),n("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(m,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[h,x],children:[{img:w,name:"Real Estate Website",github_link:"https://github.com/Coolestboy01/Real-Estate-Website",live_link:"rentup-realestate.netlify.app"},{img:k,name:"Instagram Clone",github_link:"https://github.com/Coolestboy01/Instagram-clone",live_link:"https://kay-instagram-clone.netlify.app"}].map((l,r)=>e(g,{children:n("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:l.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:l.name}),n("div",{className:"flex gap-3",children:[e("a",{href:l.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:l.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},r))})}),e("div",{className:"lg:block hidden",children:e("img",{src:d,alt:""})})]})]}),S=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 Ojo Kayode.All Rights reserved."}),O=()=>{const[i,l]=o.exports.useState(!1),[r,c]=o.exports.useState(!1),a=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"}];return o.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?l(!0):l(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${i?"bg-white/60  text-gray-900":"text-white"}`,children:n("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:n("h4",{className:"text-4xl uppercase font-bold",children:["COO",e("span",{className:"text-cyan-600",children:"LEST"}),"BOY"]})}),e("div",{className:` ${i?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:a==null?void 0:a.map((t,s)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},s))})}),e("div",{onClick:()=>c(!r),className:`z-[999]  ${r?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${r?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:a==null?void 0:a.map((t,s)=>e("li",{onClick:()=>c(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},s))})})]})})},C=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("ion-icon",{name:"chatbubble-ellipses"})}),I=()=>n("div",{children:[e(O,{}),e(C,{}),e(b,{}),e(v,{}),e(N,{}),e(j,{}),e(S,{})]});p.render(e(f,{children:e(I,{})}),document.getElementById("root"));