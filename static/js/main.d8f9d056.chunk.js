(this["webpackJsonpresume-portfolio"]=this["webpackJsonpresume-portfolio"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"title":"Hello, I\'m Reihan!","subtitle":"Front-end developer | Translator","links":{"github":"https://github.com/reihan97","linkedin":"https://www.linkedin.com/in/reihanehsadatzahraee/","codepen":"https://codepen.io/reihan"},"sections":[{"title":"About Me","items":[{"type":"p","content":"I love creating and learning! I started my journey to programming since winter of 2019 and I decided to go on, no matter what, no matter how difficult it may seem like to me, I am passionate about it and won\'t let it go!","image":"https://img.icons8.com/pastel-glyph/50/000000/user-female--v1.png"}]},{"title":"Skills","items":[{"type":"card","content":{"image":"https://img.icons8.com/ios/50/000000/javascript.png","title":"JavaScript"}},{"type":"card","content":{"image":"https://img.icons8.com/carbon-copy/100/000000/react.png","title":"ReactJs"}},{"type":"card","content":{"image":"https://img.icons8.com/ios/50/000000/css.png","title":"CSS"}},{"type":"card","content":{"image":"https://img.icons8.com/ios/50/000000/html.png","title":"HTML"}}]}],"icon":{"src":"https://img.icons8.com/ios/50/000000/circled-down-2.png","src2":"https://img.icons8.com/ios/50/000000/circled-up-2.png"}}')},,,,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),l=a.n(o),s=(a(20),a(2)),r=a(3),i=a(5),m=a(4),u=(a(21),a(6)),d=(a(22),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullpage ".concat(this.props.className||""),style:{backgroundColor:this.props.style}},e,c.a.createElement("div",null,c.a.createElement("div",{className:"snowflakes","aria-hidden":"true"},c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"),c.a.createElement("div",{className:"snowflake"},"\u2022"))))}}]),a}(n.Component)),h=a(1),p=(a(23),a(24),a(14)),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).layer=c.a.createRef(),n.closeIt=c.a.createRef(),n.closeContact=n.closeContact.bind(Object(u.a)(n)),n.openContact=n.openContact.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"openContact",value:function(){this.layer.current.style.width="100vw"}},{key:"closeContact",value:function(){this.layer.current.style.width="0vw"}},{key:"render",value:function(){return c.a.createElement("div",{className:"navSection",id:"navSec"},c.a.createElement("div",{className:"colorful",onClick:this.props.onClick},c.a.createElement("img",{src:"https://img.icons8.com/ios/50/000000/border-color.png",alt:"change the pallet"})),c.a.createElement("div",{className:"goToSections"},c.a.createElement("a",{href:"#about"},"About"),c.a.createElement("a",{href:"#skills"},"Skills"),c.a.createElement("a",{href:"#navSec",onClick:this.openContact},"Contact")),c.a.createElement("div",{id:"myContact",className:"overlay",ref:this.layer},c.a.createElement("button",{className:"colesbtn",onClick:this.closeContact,ref:this.closeIt}," ","Close"),c.a.createElement("div",{className:"overlay-content"},c.a.createElement("div",{className:"socialIcons"},Object.keys(h.links).map((function(e){return c.a.createElement(p.SocialIcon,{url:h.links[e],key:h.links[e]})}))))))}}]),a}(c.a.Component),v=(a(11),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.yCoord;return c.a.createElement("div",null,c.a.createElement("div",{onClick:function(){window.scrollTo(0,e)}},c.a.createElement("img",{style:{animation:"danceScroll 1s infinite alternate",alignSelf:"center",cursor:"pointer",alignContent:"flex-end",marginBottom:this.props.marginBottom},className:"scrollIcon",src:this.props.icon,alt:"scroll icon"})))}}]),a}(c.a.Component)),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={colorBack1:"#39c18f63"},n.changeStyle=n.changeStyle.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"changeStyle",value:function(){var e=["#39c18f63","#fabea7","#fddb3a","#f7e7bd"];this.state.colorBack1===e[0]?this.setState({colorBack1:e[1]}):this.state.colorBack1===e[1]?this.setState({colorBack1:e[2]}):this.state.colorBack1===e[2]?this.setState({colorBack1:e[3]}):this.state.colorBack1===e[3]&&this.setState({colorBack1:e[0]})}},{key:"render",value:function(){return c.a.createElement(d,{className:"first",style:this.state.colorBack1},c.a.createElement(f,{className:"firstPart",onClick:this.changeStyle}),c.a.createElement("div",{className:"secondPart"},c.a.createElement("h1",{className:"title"},h.title),c.a.createElement("h2",null,h.subtitle),c.a.createElement(v,{icon:h.icon.src,marginBottom:"-163px",yCoord:725})))}}]),a}(n.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{id:"about"},c.a.createElement(d,{className:"second",style:{backgroundColor:this.props.style}},c.a.createElement("h3",null," ",c.a.createElement("img",{className:"userPng",src:h.sections[0].items[0].image,alt:"female user"}),h.sections[0].title),c.a.createElement("p",null,h.sections[0].items[0].content)),c.a.createElement(v,{icon:h.icon.src,marginBottom:"70px",yCoord:1450}))}}]),a}(n.Component),g=(a(12),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:e.content.image,alt:e.content.title,className:"imgCard"})),c.a.createElement("div",{className:"skill-title-wrapper"},c.a.createElement("h4",null," ",e.content.title," ")))}}]),a}(n.Component)),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={colorBack2:"#f5f1da"},n.changeColor=n.changeColor.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"changeColor",value:function(){var e=["#f5f1da","#dbe3e5","#f7f2e7"];this.state.colorBack2===e[0]?this.setState({colorBack2:e[1]}):this.state.colorBack2===e[1]?this.setState({colorBack2:e[2]}):this.state.colorBack2===e[2]&&this.setState({colorBack2:e[0]}),console.log(this.state.colorBack2)}},{key:"render",value:function(){return c.a.createElement(d,{className:"third",style:this.state.colorBack2},c.a.createElement("div",{id:"skills"},c.a.createElement("h3",{className:"skillsH"},h.sections[1].title),c.a.createElement("div",{className:"cards-wrapper"},h.sections[1].items.map((function(e){return c.a.createElement(g,{skill:e,key:e.content.title})})))),c.a.createElement(v,{marginBottom:"50px0",yCoord:0,icon:h.icon.src2}))}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"navigation"}),c.a.createElement(k,null),c.a.createElement(E,null),c.a.createElement(b,null))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.d8f9d056.chunk.js.map