(this.webpackJsonpjokesapp=this.webpackJsonpjokesapp||[]).push([[0],{141:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(40),i=n.n(r),o=(n(141),n(13)),s=n(43),l=n(17),j=n.p+"static/media/home_header_emoji.428e6c38.png",d=n(257),b=n(246),u=n(245),x=n(247),h=n(248),p=n(226),O=n(1),f=function(){document.title="JokeHub - Home";var e=Object(l.f)();return Object(O.jsxs)(d.a,{children:[Object(O.jsx)(b.a,{}),Object(O.jsxs)(p.a,{direction:{xs:"column",md:"row"},justifyContent:"center",alignItems:"center",spacing:12,sx:{mt:{xs:10,md:15,lg:15},ml:{xs:5,md:10,lg:0},mr:{xs:5,md:10,lg:0}},children:[Object(O.jsxs)(u.a,{sx:{textAlign:{xs:"center",md:"left"}},children:[Object(O.jsx)(x.a,{sx:{fontWeight:"bold"},paragraph:!0,variant:"h3",component:"h1",color:"text.primary",children:"A Hub with Jokes I guess?"}),Object(O.jsxs)(x.a,{paragraph:!0,variant:"h5",component:"h3",color:"text.primary",children:["In need of some funny jokes? Look no further! ",Object(O.jsx)("br",{})," We got all the jokes you need to brighten your day!"]}),Object(O.jsx)(h.a,{onClick:function(){return e.push("/jokes")},size:"large",variant:"contained",children:"Find jokes"})]}),Object(O.jsx)(u.a,{sx:{display:"flex",width:{xs:"70%",md:"45%"}},children:Object(O.jsx)("img",{src:j,alt:"",style:{width:"100%"}})})]})]})},m=n(41),g=n.n(m),k=n(61),y=n(96),v=n.n(y),w=n(241),C=n(239),S=n(242),I=n(234),M=n(6),D=n(258),F=n(259),J=n(116),P=n.n(J),H=n(249),L=n(236),z=n(115),A=n.n(z);function B(e){var t=e.status,n=e.text,c=e.onChange,r=a.useState(t),i=Object(o.a)(r,2),s=i[0],l=i[1];a.useEffect((function(){l(t)}),[t]);var j=function(e,t){c(!1),l(!1)},d=Object(O.jsx)(a.Fragment,{children:Object(O.jsx)(H.a,{size:"small","aria-label":"close",color:"inherit",onClick:j,children:Object(O.jsx)(A.a,{fontSize:"small"})})});return Object(O.jsx)("div",{children:Object(O.jsx)(L.a,{open:s,autoHideDuration:6e3,onClose:j,message:n,action:d})})}var T=function(e){var t=e.joke,n=Object(a.useState)(!1),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),j=l[0],d=l[1],b=function(){var e=Object(k.a)(g.a.mark((function e(){var n,a,c,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="single"===t.type?t.joke:t.setup+"\r\n \r\n"+t.delivery,a="text/plain",c=new Blob([n],{type:a}),r=[new window.ClipboardItem(Object(M.a)({},a,c))],e.next=7,navigator.clipboard.write(r);case 7:i(!1),i(!0),d("Joke copied to clipboard!"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),i(!1),i(!0),d("Failed to copy joke!");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(D.a,{style:{height:"100%"},children:Object(O.jsxs)(F.a,{style:{height:"100%"},children:[Object(O.jsx)(B,{onChange:function(e){i(e)},status:r,text:j}),Object(O.jsxs)(p.a,{direction:"row",spacing:2,sx:{mb:2},children:[Object(O.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",sx:{mr:"auto"},children:t.category}),Object(O.jsx)(H.a,{onClick:b,"aria-label":"copy joke button",sx:{ml:"auto"},children:Object(O.jsx)(P.a,{})})]}),Object(O.jsx)(x.a,{paragraph:"single"!==t.type,variant:"body2",color:"text.secondary",children:"single"===t.type?t.joke:t.setup}),"single"!==t.type?Object(O.jsx)(x.a,{variant:"body2",color:"text.secondary",children:t.delivery}):null]})})},E=n(15),W=n(33),R=n(260),G=n(264),N=n(251),_=n(240),K=n(265),U=n(117),q=n.n(U),Q=n(261),V=n(262),X=n(235),Y=n(263);var Z=function(e){var t=e.children,n=e.window,c=e.onChange,r=e.filters,i=a.useState(!1),s=Object(o.a)(i,2),l=s[0],j=s[1],d=function(){j(!l)},x=function(e){c(Object(W.a)(Object(W.a)({},r),{},{category:r.category.includes(e.target.name)?r.category.filter((function(t){return t!==e.target.name})):[].concat(Object(E.a)(r.category),[e.target.name])}))},h=function(){var e=0;return r.category.map((function(t){e++})),e},p=function(e){c(Object(W.a)(Object(W.a)({},r),{},{flags:r.flags.includes(e.target.name)?r.flags.filter((function(t){return t!==e.target.name})):[].concat(Object(E.a)(r.flags),[e.target.name])}))},f=function(){var e=0;return r.flags.map((function(t){e++})),e},m=Object(O.jsxs)("div",{children:[Object(O.jsx)(b.a,{}),Object(O.jsx)(R.a,{}),Object(O.jsx)(N.a,{children:Object(O.jsx)(_.a,{children:Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(V.a,{label:"Categories",control:Object(O.jsx)(X.a,{checked:6===h(),indeterminate:h()>0&&h()<6,onChange:function(e){c(Object(W.a)(Object(W.a)({},r),{},{category:e.target.checked?["Programming","Misc","Dark","Pun","Spooky","Christmas"]:[]}))}})}),Object(O.jsx)(u.a,{sx:{display:"flex",flexDirection:"column",ml:3},children:["Programming","Misc","Dark","Pun","Spooky","Christmas"].map((function(e,t){return Object(O.jsx)(V.a,{label:e,control:Object(O.jsx)(X.a,{name:e,checked:r.category.includes(e),onChange:x})},t)}))})]})},"categories")}),Object(O.jsx)(R.a,{}),Object(O.jsx)(N.a,{children:Object(O.jsx)(_.a,{children:Object(O.jsxs)(Q.a,{children:[Object(O.jsx)(Y.a,{error:6!==f(),children:"Turning off flags will display inappropriate jokes"}),Object(O.jsx)(V.a,{label:"Flags",control:Object(O.jsx)(X.a,{checked:6===f(),indeterminate:f()>0&&f()<6,onChange:function(e){c(Object(W.a)(Object(W.a)({},r),{},{flags:e.target.checked?["explicit","nsfw","political","racist","religious","sexist"]:[]}))}})}),Object(O.jsx)(u.a,{sx:{display:"flex",flexDirection:"column",ml:3},children:["explicit","nsfw","political","racist","religious","sexist"].map((function(e,t){return Object(O.jsx)(V.a,{label:e.charAt(0).toUpperCase()+e.slice(1),control:Object(O.jsx)(X.a,{name:e,checked:r.flags.includes(e),onChange:p})},t)}))})]})},"filters")})]}),g=void 0!==n?function(){return n().document.body}:void 0;return Object(O.jsxs)(u.a,{sx:{display:"flex"},children:[Object(O.jsxs)(u.a,{component:"nav",sx:{width:{md:240},flexShrink:{md:0}},"aria-label":"mailbox folders",children:[Object(O.jsx)(G.a,{container:g,variant:"temporary",open:l,onClose:d,ModalProps:{keepMounted:!0},sx:{display:{sm:"block",md:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:m}),Object(O.jsx)(G.a,{variant:"permanent",sx:{display:{xs:"none",md:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},open:!0,children:m})]}),t,Object(O.jsxs)(K.a,{onClick:d,sx:{display:{sm:"inline-flex",md:"none"},position:"fixed",bottom:{xs:"80px",sm:"20px"},right:"20px"},variant:"extended",children:[Object(O.jsx)(q.a,{sx:{mr:1}}),"Filters"]})]})},$=n(4),ee=n(80),te=n(237),ne=n(91),ae=n.n(ne),ce=Object($.a)("div")((function(e){var t=e.theme;return Object(M.a)({color:t.palette.text.primary,position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(ee.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(ee.a)(t.palette.common.white,.25)},marginLeft:0,marginBottom:"1rem",width:"100%"},t.breakpoints.up("sm"),{width:"auto"})})),re=Object($.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ie=Object($.a)(te.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(M.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"10ch","&:focus":{width:"20ch"}})}})),oe=function(e){var t=e.onChange;e.value;return Object(O.jsxs)(ce,{children:[Object(O.jsx)(re,{children:Object(O.jsx)(ae.a,{})}),Object(O.jsx)(ie,{fullWidth:!0,onBlur:function(e){""!==e.target.value&&t(e.target.value)},placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onKeyDown:function(e){13===e.keyCode&&e.target.blur()}})]})},se=n(266),le=n(270),je=n(268),de=n(269),be=n(267),ue=n(230),xe=a.forwardRef((function(e,t){return Object(O.jsx)(ue.a,Object(W.a)({direction:"up",ref:t},e))}));function he(){var e=Object(l.f)(),t=a.useState(!0),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(O.jsxs)(se.a,{open:c,TransitionComponent:xe,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[Object(O.jsx)(be.a,{children:"Disclaimer"}),Object(O.jsx)(je.a,{children:Object(O.jsx)(de.a,{id:"alert-dialog-slide-description",children:"When flags are turned off the website might display inappropriate jokes. I am not responsible for the jokes that are displayed or if you feel offended by them. The jokes come from an API and are not mine."})}),Object(O.jsxs)(le.a,{children:[Object(O.jsx)(h.a,{onClick:function(){e.push("/")},children:"Disagree"}),Object(O.jsx)(h.a,{onClick:function(){localStorage.setItem("disclaimeragreed","true"),r(!1)},children:"Agree"})]})]})}var pe=function(){document.title="JokeHub - Jokes";var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),i=Object(o.a)(r,2),s=i[0],l=i[1],j=Object(a.useState)({category:["Programming","Misc","Dark","Pun","Spooky","Christmas"],flags:["explicit","nsfw","political","racist","religious","sexist"]}),x=Object(o.a)(j,2),h=x[0],f=x[1],m=0,y=function(){var e=Object(k.a)(g.a.mark((function e(){var t,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),t=n,a=0;case 3:if(!(a<5)){e.next=11;break}return e.next=6,v.a.get("https://v2.jokeapi.dev/joke/Any?amount=10");case 6:r=e.sent,t=t.concat(r.data.jokes);case 8:a++,e.next=3;break;case 11:c(t),l(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(k.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,v.a.get("https://v2.jokeapi.dev/joke/Any?contains=".concat(t,"&amount=10"));case 3:(n=e.sent).data.error?c([]):c(n.data.jokes),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){y()}),[]);for(var D=[],F=0;F<15;F++)D.push(Object(O.jsx)(w.a,{item:!0,xs:4,sm:4,lg:4,children:Object(O.jsx)(S.a,{animation:"wave",variant:"rectangular",width:"100%",height:180})},F));return Object(O.jsxs)(a.Fragment,{children:[console.log(localStorage.getItem("disclaimeragreed")),"true"===localStorage.getItem("disclaimeragreed")?null:Object(O.jsx)(he,{}),Object(O.jsx)(Z,{onChange:function(e){f(e)},filters:h,children:Object(O.jsxs)(d.a,{fixed:!0,component:"main",sx:{flexGrow:1,p:3},children:[Object(O.jsx)(b.a,{}),Object(O.jsx)(p.a,{direction:"row",spacing:2,children:Object(O.jsx)(oe,{onChange:function(e){M(e)}})}),n.length>0?Object(O.jsxs)(a.Fragment,{children:[Object(O.jsx)(w.a,{container:!0,spacing:{xs:2},columns:{xs:4,sm:8,lg:12},alignItems:"stretch",children:n.filter((function(e){if(!h.category.includes(e.category))return!1;var t=0;for(var n in e.flags)!0===e.flags[n]&&h.flags.includes(n)&&t++;return!(t>0)&&(m++,!0)})).map((function(e,t){return Object(O.jsx)(w.a,{item:!0,xs:4,sm:4,lg:4,children:Object(O.jsx)(T,{joke:e})},t)}))}),m>0?null:Object(O.jsx)(u.a,{sx:{mt:2},children:Object(O.jsx)(I.a,{severity:"error",children:"No jokes to dipslay - ".concat(n.length," jokes are blocked by the filter.")})}),Object(O.jsx)(u.a,{sx:{width:"100%",height:100,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)(C.a,{onClick:y,loading:s,loadingIndicator:"Loading...",variant:"contained",children:"Load more"})})]}):s?Object(O.jsx)(w.a,{container:!0,spacing:{xs:2},columns:{xs:4,sm:8,lg:12},alignItems:"stretch",children:D}):Object(O.jsx)(I.a,{severity:"error",children:"There are no jokes found - please try a different searchterm."}),Object(O.jsx)(b.a,{})]})})]})},Oe=function(){return document.title="JokeHub - Info",Object(O.jsx)("div",{children:"INFO"})},fe=function(){return Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/jokes",exact:!0,component:function(){return Object(O.jsx)(pe,{})}}),Object(O.jsx)(l.a,{path:"/info",component:function(){return Object(O.jsx)(Oe,{})}}),Object(O.jsx)(l.a,{component:function(){return Object(O.jsx)(f,{})}})]})},me=n(121),ge=n(243),ke=n(252),ye=n(118),ve=n.n(ye),we=n(232),Ce=n(253),Se=n(254),Ie=n(76),Me=n.n(Ie),De=n(77),Fe=n.n(De),Je=n(78),Pe=n.n(Je),He=n(28),Le=n(120),ze=n.n(Le),Ae=n(119),Be=n.n(Ae),Te=c.a.createContext({toggleColorMode:function(){}}),Ee=function(e){var t=e.onChange,n=Object(l.f)(),r=Object(He.a)(),i=(c.a.useContext(Te),Object(a.useState)(!1)),s=Object(o.a)(i,2),j=s[0],d=s[1],p=function(e,t,a){k(t),n.push(a),d(!j)},f=Object(a.useState)(function(){switch(window.location.pathname){case"/":return 0;case"/jokes":return 1;case"/info":return 2}}()),m=Object(o.a)(f,2),g=m[0],k=m[1];return Object(O.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(O.jsx)(ke.a,{sx:{ml:"auto",mr:"auto",zIndex:1300},position:"fixed",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(H.a,{onClick:function(){d(!j)},size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2,display:{xs:"none",sm:"inline-flex",md:"none"}},children:Object(O.jsx)(ve.a,{})}),Object(O.jsx)(x.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,marginLeft:"auto"},children:"JokeHub"}),Object(O.jsx)(h.a,{onClick:function(e){return p(0,0,"/")},sx:{display:{xs:"none",md:"block"}},color:"inherit",children:"Home"}),Object(O.jsx)(h.a,{onClick:function(e){return p(0,1,"/jokes")},sx:{display:{xs:"none",md:"block"}},color:"inherit",children:"Jokes"}),Object(O.jsx)(h.a,{onClick:function(e){return p(0,2,"/info")},sx:{display:{xs:"none",md:"block"}},color:"inherit",children:"Info"}),Object(O.jsx)(u.a,{sx:{whiteSpace:"nowrap",width:"min-content",color:"text.primary",bgcolor:"background.paper",borderRadius:1,p:.5},children:Object(O.jsx)(H.a,{onClick:t,color:"inherit","aria-label":"dark mode switch",children:"dark"===r.palette.mode?Object(O.jsx)(Be.a,{}):Object(O.jsx)(ze.a,{})})})]})}),j?Object(O.jsxs)(u.a,{sx:{width:"100%",bgcolor:"background.paper",display:{xs:"none",sm:"block",md:"none",zIndex:1100}},position:"fixed",children:[Object(O.jsx)(b.a,{}),Object(O.jsxs)(N.a,{disablePadding:!0,component:"nav","aria-label":"main mailbox folders",children:[Object(O.jsxs)(we.a,{selected:0===g,onClick:function(e){return p(0,0,"/")},children:[Object(O.jsx)(Ce.a,{children:Object(O.jsx)(Me.a,{})}),Object(O.jsx)(Se.a,{sx:{color:"text.primary"},primary:"Home"})]}),Object(O.jsxs)(we.a,{selected:1===g,onClick:function(e){return p(0,1,"/jokes")},children:[Object(O.jsx)(Ce.a,{children:Object(O.jsx)(Fe.a,{})}),Object(O.jsx)(Se.a,{sx:{color:"text.primary"},primary:"Jokes"})]}),Object(O.jsxs)(we.a,{selected:2===g,onClick:function(e){return p(0,2,"/info")},children:[Object(O.jsx)(Ce.a,{children:Object(O.jsx)(Pe.a,{})}),Object(O.jsx)(Se.a,{sx:{color:"text.primary"},primary:"Info"})]})]})]}):null]})},We=n(255),Re=n(256),Ge=n(250);function Ne(){var e=Object(l.f)(),t=function(){switch(window.location.pathname){case"/":return 0;case"/jokes":return 1;case"/info":return 2}},n=Object(l.g)();Object(a.useEffect)((function(){j(t())}),[n]);var r=c.a.useState(t),i=Object(o.a)(r,2),s=i[0],j=i[1];return Object(O.jsx)(Ge.a,{sx:{position:"fixed",bottom:0,left:0,right:0,display:{xs:"block",sm:"none"}},elevation:3,children:Object(O.jsxs)(We.a,{showLabels:!0,value:s,onChange:function(e,t){j(t)},children:[Object(O.jsx)(Re.a,{onClick:function(t){return e.push("/")},label:"Home",icon:Object(O.jsx)(Me.a,{})}),Object(O.jsx)(Re.a,{onClick:function(t){return e.push("/jokes")},label:"Jokes",icon:Object(O.jsx)(Fe.a,{})}),Object(O.jsx)(Re.a,{onClick:function(t){return e.push("/info")},label:"Info",icon:Object(O.jsx)(Pe.a,{})})]})})}var _e=function(){var e=Object(a.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(me.a)({palette:{mode:"dark"}}),i=Object(me.a)({palette:{mode:"light",primary:{main:"#c2c2c2"},background:{default:"#e7e7e7",paper:"#f1f1f1"},common:{white:"#000000"}}});return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(s.a,{children:Object(O.jsx)(ge.a,{theme:n?r:i,children:Object(O.jsxs)(u.a,{sx:{bgcolor:"background.default",minHeight:"100vh"},children:[Object(O.jsx)(Ee,{onChange:function(){c(!n)}}),Object(O.jsx)(fe,{}),Object(O.jsx)(Ne,{})]})})})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(_e,{})}),document.getElementById("root")),Ke()}},[[172,1,2]]]);
//# sourceMappingURL=main.d4c68cf9.chunk.js.map