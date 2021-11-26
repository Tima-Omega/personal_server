(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],{14:function(e,t,a){},31:function(e,t,a){e.exports=a(95)},36:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(25),c=a.n(s),o=(a(14),a(10)),r=a(29),l=(a(36),[{id:Math.random().toString(16),img:"/img/works/starbase.jpg",title:"Starbase",href:"https://star-base.surge.sh/"},{id:Math.random().toString(16),img:"/img/works/megustro.jpg",title:"Megustro",href:"https://megustro.surge.sh/"},{id:Math.random().toString(16),img:"/img/works/hell.jpg",title:"HellCoin",href:"https://hell-coin.surge.sh/"},{id:Math.random().toString(16),img:"/img/works/storage.jpg",title:"OnlineStorage",href:"https://onlinestorage.surge.sh/"},{id:Math.random().toString(16),img:"/img/works/hunger.jpg",title:"Hungry People",href:"https://hungry-people.surge.sh"},{id:Math.random().toString(16),img:"/img/works/dom-ru.jpg",title:"DOM.RU",href:"https://dom-ru-land.surge.sh/"}]);function m(){return i.a.createElement("div",{className:"works"},i.a.createElement("div",{className:"works__content"},l.map((function(e){return i.a.createElement("a",{href:e.href,key:e.id,className:"works__link",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.img,alt:""}),i.a.createElement("span",{className:"works__name"},e.title))}))))}var d=[{id:"git",icon:"/img/git.svg",href:"https://github.com/Tima-Omega"},{id:"tg",icon:"/img/tg.svg",href:"https://t.me/TimaOmega"},{id:"mail",icon:"/img/mail.svg",href:"mailto:tima_omega@outlook.com"},{id:"vk",icon:"/img/vk.svg",href:"https://vk.com/tima_omega"},{id:"inst",icon:"/img/inst.svg",href:"https://www.instagram.com/tima.omega/"}];function u(){return i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"about__top"},i.a.createElement("div",{className:"about__profile"},i.a.createElement("img",{src:"/img/profile.jpg",alt:""})),i.a.createElement("div",{className:"about__name"},"Timur Rustamov"),i.a.createElement("div",{className:"about__contacts"},d.map((function(e){return i.a.createElement("a",{key:e.id,href:e.href,className:"about__link"},i.a.createElement("img",{src:e.icon,alt:""}))})))),i.a.createElement("div",{className:"about__main"},i.a.createElement("div",{className:"about__desc"},"I'm Frontend Developer located in Saint-Petersburg, Russia. ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"Freelancer.",i.a.createElement("br",null)," ",i.a.createElement("br",null),"I have done over 20 projects of varying complexity. ",i.a.createElement("br",null)," ",i.a.createElement("br",null),"I create successful websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, animations, web pages with adaptive, responsive, cross-browser layout using modern web technologies."),i.a.createElement("div",{className:"about__title"},"Here are a technologies I\u2019ve been working with:"),i.a.createElement("div",{className:"about__stack"},i.a.createElement("img",{src:"/img/stack/html.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/css.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/sass.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/jquery.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/js.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/react.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/bootstrap.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/tailwind.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/gulp.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/webpack.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/node.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/git.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/gitlab.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/vscode.svg",alt:"",className:"about__tech"}),i.a.createElement("img",{src:"/img/stack/figma.svg",alt:"",className:"about__tech"}))))}var g=[{id:"about",icon:"/img/about.svg",title:"About me",resizable:!0,opened:!1,hidden:!1,expanded:!1,children:i.a.createElement(u,null),width:860,height:600,desc:"About"},{id:"works",icon:"/img/works.svg",title:"Works",resizable:!0,opened:!1,hidden:!1,expanded:!1,children:i.a.createElement(m,null),width:1300,height:800,desc:"Works"}];function h(e){var t=e.onShortcutClick;return i.a.createElement("div",{className:"dock"},i.a.createElement("nav",{className:"dock__nav"},g.map((function(e){return i.a.createElement("div",{key:e.id,className:"dock__shortcut"+(e.opened?" opened":""),onClick:function(){return null===t||void 0===t?void 0:t(e)}},i.a.createElement("div",{className:"dock__hint"},e.desc),i.a.createElement("img",{src:e.icon,alt:e.title}))}))))}var v=a(2),p=a(26),_=a(27),b=a(30),E=a(28),w=function(e){Object(b.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={movable:!1,left:0,top:0},e.onMouseUp=function(){e.setState(Object(v.a)(Object(v.a)({},e.state),{},{movable:!1}))},e.onMouseDown=function(){e.setState(Object(v.a)(Object(v.a)({},e.state),{},{movable:!0}))},e.onMouseMove=function(t){if(e.state.movable){var a=e.state,n=a.left,i=a.top;e.setState(Object(v.a)(Object(v.a)({},e.state),{},{left:n+t.movementX,top:i+t.movementY}))}},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.count,s=void 0===n?0:n,c=e.index,o=void 0===c?0:c,r=e.onClose,l=e.onHide,m=e.onExpand,d=e.onActive,u=e.hidden,g=e.expanded,h=e.width,v=e.height,p=this.state,_=p.left,b=p.top;return i.a.createElement("div",{className:"window"+(0===o?" active":"")+(u?" hidden":"")+(g?" expanded":""),style:{left:_,top:b,zIndex:10*(s-o),width:h,height:v}},i.a.createElement("div",{className:"window__head",onMouseUp:this.onMouseUp,onMouseDown:this.onMouseDown,onClick:function(){0!==o&&d()}},i.a.createElement("div",{className:"window__btns"},i.a.createElement("div",{className:"window__btn window__btn--red",onClick:r}),i.a.createElement("div",{className:"window__btn window__btn--yellow",onClick:l}),i.a.createElement("div",{className:"window__btn window__btn--green",onClick:m})),i.a.createElement("div",{className:"window__title"},t)),i.a.createElement("div",{className:"window__content"},a))}}]),a}(n.Component),f=a(9);function k(){return i.a.createElement("div",{className:"intro"},i.a.createElement("div",{className:"intro__inner"},i.a.createElement(f.Animated,{animationIn:"fadeIn",animationInDuration:800,animationInDelay:800},i.a.createElement("div",{className:"intro__title"},"Frontend Developer",i.a.createElement("br",null),i.a.createElement(f.Animated,{animationIn:"fadeIn",animationInDuration:800,animationInDelay:1600},i.a.createElement("span",null,"Timur Rustamov")))),i.a.createElement(f.Animated,{animationIn:"fadeIn",animationInDuration:800,animationInDelay:2400},i.a.createElement("div",{className:"intro__arrow"},i.a.createElement("img",{src:"/img/arrow.svg",alt:""}),i.a.createElement("img",{src:"/img/arrow.svg",alt:""}),i.a.createElement("img",{src:"/img/arrow.svg",alt:""})))))}var N=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1];return i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement(h,{onShortcutClick:function(e){var t=a.findIndex((function(t){return t.id===e.id}));if(-1===t)s([e].concat(Object(o.a)(a)));else{e.hidden=!1;var n=a.concat();n.unshift.apply(n,Object(o.a)(n.splice(t,1))),s(n)}}}),i.a.createElement("div",{className:"windows"},a.map((function(e,t,n){return i.a.createElement(w,{key:e.id,count:n.length,index:t,title:e.title,hidden:e.hidden,expanded:e.expanded,width:e.width,height:e.height,onClose:function(){e.opened=!1;var n=a.concat();n.splice(t,1),s(n),e.expanded=!1},onHide:function(){e.hidden=!e.hidden,s(a.concat())},onExpand:function(){e.expanded=!e.expanded,s(a.concat())},onActive:function(){var e=a.concat();e.unshift.apply(e,Object(o.a)(e.splice(t,1))),s(e)}},e.children)}))))},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),j()}},[[31,1,2]]]);
//# sourceMappingURL=main.64cf761b.chunk.js.map