(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(61)},38:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),c=a.n(i),s=a(13),l=(a(38),a(4)),o=a.n(l),m=a(21),p=a(14),u=a(7),d=a(8),b=a(10),h=a(9),g=a(11),f=a(15),v=a(18),w=a.n(v),k=(a(40),a(43),function(){var e=Object(p.a)(o.a.mark(function e(t,a){var n,r,i,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,c=new Date,e.prev=9,e.next=12,n.set(Object(m.a)({displayName:r,email:i,createdAt:c},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,a){return e.apply(this,arguments)}}());w.a.initializeApp({apiKey:"AIzaSyCu_LP4VKX1kJ2XIZPkYlfVcS2w9bTiAo8",authDomain:"crwn-shop-db.firebaseapp.com",databaseURL:"https://crwn-shop-db.firebaseio.com",projectId:"crwn-shop-db",storageBucket:"",messagingSenderId:"839079692585",appId:"1:839079692585:web:5e9dcde5765837b8"});var E=w.a.auth(),y=w.a.firestore(),O=new w.a.auth.GoogleAuthProvider;O.setCustomParameters({prompt:"select_account"});var N=function(){return E.signInWithPopup(O)};w.a;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C=r.a.createElement("title",null,"Group"),S=r.a.createElement("desc",null,"Created with Sketch."),x=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),B=function(e){var t=e.svgRef,a=U(e,["svgRef"]);return r.a.createElement("svg",j({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),C,S,x)},P=r.a.forwardRef(function(e,t){return r.a.createElement(B,j({svgRef:t},e))}),I=(a.p,a(45),function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(s.b,{to:"/",className:"logo-container"},r.a.createElement(P,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(s.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(s.b,{to:"/contact",className:"option"},"CONTACT"),t?r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{className:"option",onClick:function(){return E.signOut()}},"SIGN OUT"),r.a.createElement("div",null,"Hi, ",t.displayName)):r.a.createElement(s.b,{to:"/signin",className:"option"},"SIGN IN")))}),T=a(12),W=(a(50),Object(f.f)(function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,c=e.linkUrl,s=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),A=(a(51),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"directory-menu"},this.state.sections.map(function(e){var t=e.id,a=Object(T.a)(e,["id"]);return r.a.createElement(W,Object.assign({key:t},a))}))}}]),t}(r.a.Component)),J=(a(52),function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(A,null))}),G=(a(53),function(e){e.id;var t=e.name,a=e.price,n=e.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t),r.a.createElement("span",{className:"price"},a)))}),R=(a(54),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter(function(e,t){return t<4}).map(function(e){var t=e.id,a=Object(T.a)(e,["id"]);return r.a.createElement(G,Object.assign({key:t},a))})))}),D=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={collections:D},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",{className:"shop-page"},e.map(function(e){var t=e.id,a=Object(T.a)(e,["id"]);return r.a.createElement(R,Object.assign({key:t},a))}))}}]),t}(r.a.Component),z=a(16),F=(a(55),function(e){var t=e.handleChange,a=e.label,n=e.value,i=Object(T.a)(e,["handleChange","label","value"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},i)),a?r.a.createElement("label",{className:"".concat(n.length?"shrink":""," form-input-label")},a):null)}),L=(a(56),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(T.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),V=(a(57),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(){var t=Object(p.a)(o.a.mark(function t(a){var n,r,i,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target,r=e.state,i=r.email,c=r.password,t.prev=3,t.next=6,E.signInWithEmailAndPassword(i,c);case 6:n.reset(),e.setState({email:"",password:""}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.error(t.t0),e.setState({error:t.t0.message});case 14:case"end":return t.stop()}},t,null,[[3,10]])}));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.state={email:"",password:""},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your emai and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(F,{name:"email",type:"email",label:"Email",value:this.state.email,handleChange:this.handleChange,autoComplete:"username",required:!0}),r.a.createElement(F,{name:"password",type:"password",label:"Password",value:this.state.password,handleChange:this.handleChange,autoComplete:"current-password",required:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(L,{type:"submit"},"Sign in"),r.a.createElement(L,{onClick:N,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(r.a.Component)),q=(a(58),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(z.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(p.a)(o.a.mark(function t(a){var n,r,i,c,s,l,m;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,i=n.email,c=n.password,s=n.confirmPassword,c===s){t.next=5;break}return alert("Password don't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,E.createUserWithEmailAndPassword(i,c);case 8:l=t.sent,m=l.user,k(m,{displayName:r}),a.target.reset(),e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}},t,null,[[5,15]])}));return function(e){return t.apply(this,arguments)}}(),e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not account"),r.a.createElement("span",null,"Sign up with your email"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(F,{type:"text",name:"displayName",label:"Display Name",value:t,handleChange:this.handleChange,autoComplete:"username",required:!0}),r.a.createElement(F,{type:"text",name:"email",label:"Email",value:a,handleChange:this.handleChange,autoComplete:"username",required:!0}),r.a.createElement(F,{type:"password",name:"password",label:"Password",value:n,handleChange:this.handleChange,autoComplete:"new-password",required:!0}),r.a.createElement(F,{type:"password",name:"confirmPassword",label:"Confirm Password",value:i,handleChange:this.handleChange,autoComplete:"new-password",required:!0}),r.a.createElement(L,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),H=(a(59),function(){return r.a.createElement("div",{className:"sign-in-sign-up"},r.a.createElement(V,null),r.a.createElement(q,null))}),K=(a(60),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(b.a)(this,Object(h.a)(t).call(this))).unsubcribeFromAuth=null,e.state={currentUser:null},e}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubcribeFromAuth=E.onAuthStateChanged(function(){var t=Object(p.a)(o.a.mark(function t(a){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,k(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(m.a)({id:t.id},t.data())})}),t.next=8;break;case 7:e.setState({currentUser:a});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubcribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{currentUser:this.state.currentUser}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:J}),r.a.createElement(f.a,{exact:!0,path:"/shop",component:M}),r.a.createElement(f.a,{exact:!0,path:"/signin",component:H})))}}]),t}(r.a.Component));c.a.render(r.a.createElement(s.a,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.70cf67cf.chunk.js.map