(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e941f"],{"8d85":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-window",{ref:"window1",attrs:{title:"QWindow Modify Menu 1","start-x":50,"start-y":50,height:300,width:400,"menu-func":e.updateMenu1,actions:["embedded","pin","maximize","fullscreen"],embedded:"","content-class":"bg-grey-1"},model:{value:e.visible1,callback:function(t){e.visible1=t},expression:"visible1"}},[n("div",{staticClass:"q-pa-md fit scroll"},[n("q-scroll-area",{staticStyle:{width:"100%",height:"100%"}},[n("div",{staticClass:"text-h4"},[e._v("Quasar Framework")]),n("div",{staticClass:"quasar"},[n("img",{staticStyle:{float:"left"},attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg",alt:"Quasar Framework",height:"150",width:"150"}})]),n("p",[e._v("Quasar Framework is an MIT-licensed open-source project maintained by Razvan Stoenescu along with his Team and a community of open source contributors. We work on behalf of the community to create new features, fix bugs, and maintain Quasar so you can get on with your own development projects. We’re working to shape the future of the Vue.js ecosystem to write code once and simultaneously deploy it as a website (SPA/PWA/SSR), a Mobile App and/or an Electron App.")]),n("p",[e._v("Like most open source products, Quasar can’t do it alone. We rely on sponsors, backers and supporters to keep things going. When Quasar starts to bring you some financial stability, please be considerate of the tens of thousands of hours that went into its creation and send some money back to the team that made it possible. And finally, if your company relies on Quasar, the best way to guarantee that Quasar continues to be there for you is to invest in its maintenance!")])])],1)]),n("q-window",{ref:"window2",attrs:{title:"QWindow Modify Menu 2","start-x":100,"start-y":100,height:300,width:400,"menu-func":e.updateMenu2,actions:["embedded","pin","maximize","fullscreen"],embedded:"","content-class":"bg-grey-1"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[n("div",{staticClass:"q-pa-md fit scroll"},[n("q-scroll-area",{staticStyle:{width:"100%",height:"100%"}},[n("div",{staticClass:"text-h4"},[e._v("Quasar Framework")]),n("div",{staticClass:"quasar"},[n("img",{staticStyle:{float:"left"},attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg",alt:"Quasar Framework",height:"150",width:"150"}})]),n("p",[e._v("Quasar Framework is an MIT-licensed open-source project maintained by Razvan Stoenescu along with his Team and a community of open source contributors. We work on behalf of the community to create new features, fix bugs, and maintain Quasar so you can get on with your own development projects. We’re working to shape the future of the Vue.js ecosystem to write code once and simultaneously deploy it as a website (SPA/PWA/SSR), a Mobile App and/or an Electron App.")]),n("p",[e._v("Like most open source products, Quasar can’t do it alone. We rely on sponsors, backers and supporters to keep things going. When Quasar starts to bring you some financial stability, please be considerate of the tens of thousands of hours that went into its creation and send some money back to the team that made it possible. And finally, if your company relies on Quasar, the best way to guarantee that Quasar continues to be there for you is to invest in its maintenance!")])])],1)])],1)},s=[],i={data:function(){return{visible1:!0,visible2:!0}},methods:{updateMenu1:function(e){if(!0!==this.$refs.window1.isEmbedded&&!0!==this.$refs.window1.isFullscreen){"visible"===e[e.length-1].key&&e.splice(e.length-1,0,"separator");var t={key:"sendtoback",state:!1,on:{label:"Send to Back",icon:"",func:this.sendToBack1},off:{label:"Send to Back",icon:"",func:this.sendToBack1}},n={key:"bringtofront",state:!1,on:{label:"Bring to Front",icon:"",func:this.bringToFront1},off:{label:"Bring to Front",icon:"",func:this.bringToFront1}},o={key:"centerwindow",state:!1,on:{label:"Center Window",icon:"",func:this.centerWindow1},off:{label:"Center Window",icon:"",func:this.centerWindow1}};e.splice(e.length,0,"separator"),e.splice(e.length,0,t),e.splice(e.length,0,n),e.splice(e.length,0,"separator"),e.splice(e.length,0,o)}},bringToFront1:function(){this.$refs.window1.bringToFront()},sendToBack1:function(){this.$refs.window1.sendToBack()},centerWindow1:function(){this.$refs.window1.centerWindow()},updateMenu2:function(e){if(!0!==this.$refs.window2.isEmbedded&&!0!==this.$refs.window2.isFullscreen){"visible"===e[e.length-1].key&&e.splice(e.length-1,0,"separator");var t={key:"sendtoback",state:!1,on:{label:"Send to Back",icon:"",func:this.sendToBack2},off:{label:"Send to Back",icon:"",func:this.sendToBack2}},n={key:"bringtofront",state:!1,on:{label:"Bring to Front",icon:"",func:this.bringToFront2},off:{label:"Bring to Front",icon:"",func:this.bringToFront2}},o={key:"centerwindow",state:!1,on:{label:"Center Window",icon:"",func:this.centerWindow2},off:{label:"Center Window",icon:"",func:this.centerWindow2}};e.splice(e.length,0,"separator"),e.splice(e.length,0,t),e.splice(e.length,0,n),e.splice(e.length,0,"separator"),e.splice(e.length,0,o)}},bringToFront2:function(){this.$refs.window2.bringToFront()},sendToBack2:function(){this.$refs.window2.sendToBack()},centerWindow2:function(){this.$refs.window2.centerWindow()}}},a=i,r=n("2877"),c=Object(r["a"])(a,o,s,!1,null,null,null);t["default"]=c.exports}}]);