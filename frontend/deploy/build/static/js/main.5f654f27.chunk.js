(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(t,a,e){},69:function(t,a,e){},94:function(t,a,e){"use strict";e.r(a);var n=e(0),r=e.n(n),c=e(16),i=e.n(c),s=(e(67),e(19)),o=e.n(s),d=e(29),u=e(12),p=(e(69),e(14)),l=e(130),b=e(131),h=e(126),j=e(11),m=e(128),g=e(129),f=e(135),O=e(33),x=e.p+"static/media/alice.fb213515.jpg",v=e(2),w=Object(h.a)((function(t){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:O.a[500]}}}));function k(){var t=w();return Object(v.jsx)(m.a,{className:t.root,children:Object(v.jsx)(g.a,{avatar:Object(v.jsx)(f.a,{"aria-label":"recipe",className:t.avatar,src:x,alt:"Alice"}),title:"Alice"})})}var C=e(133),I=e(50),y=e.n(I),D=Object(h.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}},input:{display:"none"}}}));function S(t){var a=Object(n.useState)(""),e=Object(u.a)(a,2),r=e[0],c=e[1],i=Object(n.useState)("Upload Similar Image to Search"),s=Object(u.a)(i,2),o=s[0],d=s[1],p=D();return Object(v.jsxs)("div",{className:p.root,children:[Object(v.jsx)("input",{accept:"image/*",className:p.input,id:"contained-button-file",multiple:!0,type:"file",value:t.searchImage,onChange:function(a){c("primary"),d("Image Attached"),t.callback(a.target.value)}}),Object(v.jsx)("label",{htmlFor:"contained-button-file",children:Object(v.jsx)(C.a,{variant:"contained",color:r,component:"span",startIcon:Object(v.jsx)(y.a,{}),children:o})})]})}var N=e(51),T=e.n(N),L=e(31),R=e.n(L),_=Object(h.a)((function(t){return{button:{margin:t.spacing(1)}}}));function A(t){var a=_();return Object(v.jsx)("div",{children:Object(v.jsx)(C.a,{variant:"contained",color:"default",className:a.button,startIcon:Object(v.jsx)(T.a,{}),onClick:Object(d.a)(o.a.mark((function a(){var e,n,r,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e="https://shopify-dev-challenge-f21.uc.r.appspot.com/api/searchImagesByText",n=t.searchText,a.prev=2,(r=new URLSearchParams).append("search_terms",n),a.next=7,R.a.post(e,r,{url:e,method:"post",data:r,headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 7:return c=a.sent,a.t0=t,a.next=11,c;case 11:a.t1=a.sent,a.t0.updateImageCardData.call(a.t0,a.t1),a.next=18;break;case 15:a.prev=15,a.t2=a.catch(2),alert(a.t2);case 18:case"end":return a.stop()}}),a,null,[[2,15]])}))),children:"Run Search"})})}var B=e(39),E=e.n(B),F=e(134),P=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(j.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function G(t){var a=P();return Object(v.jsxs)("div",{className:a.search,children:[Object(v.jsx)("div",{className:a.searchIcon,children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(F.a,{placeholder:"Type Search Terms",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},value:t.searchText,onChange:function(a){return t.callback(a.target.value)}})]})}var J=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(j.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function U(t){var a=Object(n.useState)(""),e=Object(u.a)(a,2),r=e[0],c=e[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),o=s[0],d=s[1],p=J();return Object(v.jsx)("div",{className:p.root,children:Object(v.jsx)(l.a,{position:"static",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(k,{}),Object(v.jsx)(G,{searchText:r,callback:function(t){return c(t)}}),Object(v.jsx)(S,{searchImage:o,callback:function(t){return d(t)}}),Object(v.jsx)(A,{searchText:r,searchImage:o,updateImageCardData:t.updateImageCardData})]})})})}e(4);var W=e(132),q=e.p+"static/media/bob.3609809a.jpg",M=(e.p,e.p,e.p,Object(h.a)((function(t){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:O.a[500]}}})));function z(t){var a=M(),e=Object(n.useState)(0),r=Object(u.a)(e,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){1==t.cardData.author_id?i(x):2==t.cardData.author_id&&i(q)})),Object(v.jsxs)(m.a,{className:a.root,children:[Object(v.jsx)(g.a,{avatar:Object(v.jsx)(f.a,{"aria-label":"recipe",className:a.avatar,src:c,alt:"Alice"}),title:t.cardData.first_name,subheader:t.cardData.datetime_upload}),Object(v.jsx)(W.a,{className:a.media,image:"data:image/png;base64,"+t.cardData.pixels})]})}var H=e(34);function K(t){return 0==t.imageCardData.data.length?Object(v.jsxs)("div",{children:[Object(v.jsx)(H.a,{variant:"h4",children:"No matching images found."}),Object(v.jsx)(H.a,{variant:"h6",children:"Please try another search query."})]}):Object(v.jsx)("div",{children:Object(v.jsx)("ul",{children:t.imageCardData.data.map((function(t){return Object(v.jsx)(z,{cardData:t},t.image_id.toString())}))})})}var Q=function(){var t=Object(n.useState)({data:[]}),a=Object(u.a)(t,2),e=a[0],r=a[1];return Object(n.useEffect)(Object(d.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://shopify-dev-challenge-f21.uc.r.appspot.com/api/",t.prev=1,t.next=4,R.a.get("https://shopify-dev-challenge-f21.uc.r.appspot.com/api/");case 4:a=t.sent,r(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(U,{updateImageCardData:function(t){return r(t)}}),Object(v.jsx)(K,{imageCardData:e})]})},V=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,137)).then((function(a){var e=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,i=a.getTTFB;e(t),n(t),r(t),c(t),i(t)}))};i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),V()}},[[94,1,2]]]);
//# sourceMappingURL=main.5f654f27.chunk.js.map