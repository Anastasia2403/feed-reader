(this["webpackJsonpfeed-reader"]=this["webpackJsonpfeed-reader"]||[]).push([[0],{168:function(e,t,a){},173:function(e,t,a){},177:function(e,t){},179:function(e,t){},201:function(e,t){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(137),s=a.n(r),i=a(52),d=a(10),o=a(28),l=a(277),j=a(290),b=a(291),h=a(283),u=a(142),m=a.n(u),O=a(143),x=a.n(O),p=a(278);a(168);var f=a(2);const g=()=>{const[e,t]=Object(c.useState)(!1),[a,n]=Object(c.useState)(""),[r,s]=Object(c.useState)(""),i=Object(d.o)();return Object(f.jsxs)("div",{className:"authContainer",children:[Object(f.jsx)("h1",{children:"Login Page"}),Object(f.jsx)("h2",{children:"Please login to read a feed"}),Object(f.jsxs)("form",{className:"loginForm",onSubmit:async e=>{e.preventDefault(),0!==a.trim().length&&0!==r.trim().length?(async()=>{const{data:e}=await p.a.get("".concat("https://jsonplaceholder.typicode.com","/users/1"));return e})().then((e=>{localStorage.setItem("userId",e.id),i("/")})).catch((()=>{o.b.error("Something went wrong. Please try again,later!")})):o.b.error("Login or password can not be empty")},children:[Object(f.jsx)(l.a,{id:"username",label:"Username",variant:"outlined",type:"text",required:!0,value:a,onChange:e=>{n(e.target.value)}}),Object(f.jsx)(l.a,{id:"password",label:"Password",variant:"outlined",type:e?"text":"password",required:!0,value:r,onChange:e=>{s(e.target.value)},InputProps:{endAdornment:Object(f.jsx)(j.a,{position:"end",children:Object(f.jsx)(b.a,{edge:"end",onClick:()=>{t(!e)},"aria-label":"toggle password visibility",children:e?Object(f.jsx)(m.a,{}):Object(f.jsx)(x.a,{})})})}}),Object(f.jsx)(h.a,{variant:"contained",type:"submit",children:"LOGIN"})]})]})};var v=a(292),w=a(293),y=a(294),S=a(242),N=a(295),I=a(296),C=a(276),k=a(297),L=a(298),A=a(299),F=a(144),E=a.n(F);const D="https://jsonplaceholder.typicode.com";a(173);const P=[{id:11,title:"NASA Breaking release news",body:"https://www.nasa.gov/news-release/feed/"},{id:12,title:"Reddit front page",body:"https://www.reddit.com/.rss"},{id:13,title:"Mobile World Live",body:"https://www.mobileworldlive.com/feed/"}],U=()=>{const[e,t]=Object(c.useState)((()=>{const e=localStorage.getItem("feeds");return e?JSON.parse(e):P})),[a,n]=Object(c.useState)(!1),r=Object(d.o)(),s=localStorage.getItem("userId");Object(c.useEffect)((()=>{i()}),[]),Object(c.useEffect)((()=>{localStorage.setItem("feeds",JSON.stringify(e))}),[e]);const i=()=>{(async e=>{const{data:t}=await p.a.get("".concat(D,"/posts?userId=").concat(e));return t})(Number(s)).then((a=>{a.map((a=>{a.id&&a.id>10&&t([...e,a])}))})).catch((()=>{o.b.error("Error fetching feeds")}))},j=()=>n(!1),b=a=>{(async e=>{const{data:t}=await p.a.delete("".concat(D,"/posts/").concat(e));return t})(a).then((()=>{t(e.filter((e=>e.id!==a))),o.b.success("Success deleting feed")})).catch((()=>{o.b.error("Error deleting feed")}))};return Object(f.jsxs)("div",{className:"homeContainer",children:[Object(f.jsxs)("div",{className:"feedHeader",children:[Object(f.jsx)("h1",{className:"feedTitle",children:"All feeds"}),Object(f.jsx)(v.a,{color:"primary","aria-label":"add",size:"small",onClick:()=>n(!0),children:Object(f.jsx)(E.a,{})})]}),Object(f.jsx)("div",{className:"list",children:e.map((e=>Object(f.jsxs)(w.a,{className:"feedItem",children:[Object(f.jsx)(y.a,{children:Object(f.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title})}),Object(f.jsxs)(N.a,{children:[Object(f.jsx)(h.a,{size:"small",onClick:()=>b(e.id),children:"Delete"}),Object(f.jsx)(h.a,{size:"small",onClick:()=>{return t=e.body,void r("/feed/".concat(encodeURIComponent(t)));var t},children:"Learn More"})]})]},e.id)))}),Object(f.jsxs)(I.a,{open:a,onClose:j,PaperProps:{component:"form",onSubmit:a=>{a.preventDefault();const c=a.target,n=new FormData(c),r=n.get("name"),i=n.get("url"),d={userId:Number(s),title:r,body:i},l=(e.map((e=>null===e||void 0===e?void 0:e.id)).filter((e=>void 0!==e)).reduce(((e,t)=>Math.max(e,t)),0)||0)+1;(async e=>{const{data:t}=await p.a.post("".concat(D,"/posts"),e);return t})(d).then((()=>{t([...e,{...d,id:l}]),o.b.success("Success adding feed")})).catch((()=>{o.b.error("Error adding feed")})),j()}},children:[Object(f.jsx)(C.a,{children:"Add new feed"}),Object(f.jsxs)(k.a,{children:[Object(f.jsx)(L.a,{children:"To add a new feed, please enter the name and URL below."}),Object(f.jsx)(l.a,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"name",label:"Feed Name",type:"text",fullWidth:!0,variant:"standard"}),Object(f.jsx)(l.a,{required:!0,margin:"dense",id:"url",name:"url",label:"Feed URL",type:"url",fullWidth:!0,variant:"standard"})]}),Object(f.jsxs)(A.a,{children:[Object(f.jsx)(h.a,{onClick:j,children:"Cancel"}),Object(f.jsx)(h.a,{type:"submit",children:"Add feed"})]})]})]})};var M=a(287),R=a(300),q=a(301);const z=()=>{const e=Object(d.o)(),t=localStorage.getItem("userId");return Object(f.jsx)(f.Fragment,{children:t&&Object(f.jsx)(M.a,{sx:{flexGrow:1},children:Object(f.jsx)(R.a,{position:"static",children:Object(f.jsxs)(q.a,{children:[Object(f.jsx)(S.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Feed reader"}),Object(f.jsx)(h.a,{color:"inherit",onClick:()=>{localStorage.removeItem("userId"),e("/login")},children:"Logout"})]})})})})};var B=a(145),J=a.n(B),G=a(284),W=a(288),T=a(302),H=a(279);a(227);const _=()=>{const{feedUrl:e}=Object(d.q)(),t=new J.a,[a,n]=Object(c.useState)([]),[r,s]=Object(c.useState)(!0),[i,l]=Object(c.useState)(1),j=9*i,b=j-9,u=a.slice(b,j);Object(c.useEffect)((()=>{(async()=>{try{const a="https://cors-anywhere.herokuapp.com/",c=(await t.parseURL(a+e)).items.map((e=>({id:e.guid,title:e.title,link:e.link,pubDate:e.pubDate})));n(c)}catch(a){o.b.error("Error fetching feed articles")}finally{s(!1)}})()}),[e]);return Object(f.jsxs)("div",{className:"homeContainer",children:[Object(f.jsxs)(G.a,{"aria-label":"breadcrumb",sx:{mb:2},children:[Object(f.jsx)(W.a,{underline:"hover",color:"inherit",href:"/",children:"Feeds"}),Object(f.jsx)(S.a,{color:"text.primary",children:"Articles"})]}),Object(f.jsx)("h1",{children:"Feed Articles"}),Object(f.jsx)("div",{className:"centeredContainer",children:r?Object(f.jsx)(T.a,{}):Object(f.jsx)("div",{className:"list",children:u.map((e=>Object(f.jsxs)(w.a,{className:"feedItem",children:[Object(f.jsxs)(y.a,{children:[Object(f.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),Object(f.jsx)(S.a,{variant:"body2",color:"text.secondary",children:e.pubDate})]}),Object(f.jsx)(N.a,{children:Object(f.jsx)(h.a,{size:"small",onClick:()=>{return t=e.link,void window.open(t,"_blank");var t},children:"Learn More"})})]},e.id)))})}),Object(f.jsx)(H.a,{className:"pagination",count:Math.ceil(a.length/9),page:i,onChange:(e,t)=>{l(t)}})]})};a(228);var K=function(){return Object(f.jsx)(i.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(z,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:"/login",element:Object(f.jsx)(g,{})}),Object(f.jsx)(d.a,{path:"/",element:Object(f.jsx)(U,{})}),Object(f.jsx)(d.a,{path:"/feed/:feedUrl",element:Object(f.jsx)(_,{})})]})]})})};a(229),a(230);s.a.createRoot(document.getElementById("root")).render(Object(f.jsxs)(n.a.StrictMode,{children:[Object(f.jsx)(K,{}),Object(f.jsx)(o.a,{})]}))}},[[232,1,2]]]);
//# sourceMappingURL=main.d2248438.chunk.js.map