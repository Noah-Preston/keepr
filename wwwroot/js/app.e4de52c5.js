(function(t){function e(e){for(var s,r,o=e[0],n=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,o=1;o<a.length;o++){var n=a[o];0!==i[n]&&(s=!1)}s&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},l=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=n;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09e0":function(t,e,a){},"1a8a":function(t,e,a){"use strict";var s=a("b5e8"),i=a.n(s);i.a},"2b56":function(t,e,a){"use strict";var s=a("09e0"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bgc",attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light title background"},[a("router-link",{staticClass:"navbar-brand",attrs:{id:"size",to:{name:"home"}}},[t._v("Keepr")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"},id:"linkcolor"}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"dashboard"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{id:"linkcolor",to:{name:"dashboard"}}},[t._v("My-Dashboard")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v("Login")])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=a("bc3a"),c=a.n(n);c.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.commit("setUser",this.$auth.user),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=u,p=(a("1a8a"),a("2877")),v=Object(p["a"])(d,r,o,!1,null,null,null),m=v.exports,h=a("335d"),b={name:"App",async beforeCreate(){await Object(h["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:m}},f=b,C=(a("5c0b"),Object(p["a"])(f,i,l,!1,null,null,null)),g=C.exports,_=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home title container-fluid",attrs:{id:"bgc"}},[t._m(0),a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-lg btn-success",attrs:{"data-toggle":"modal","data-target":"#createModal"}},[t._v("Post A Keep!")]):t._e()])]),a("div",{staticClass:"row"},t._l(t.keeps,(function(t,e){return a("keep",{key:t.id,attrs:{keepData:t,keepIndex:e}})})),1),a("div",{staticClass:"modal fade",attrs:{id:"createModal",tabindex:"-1",role:"dialog","aria-labelledby":"createModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Name,expression:"newKeep.Name"}],staticClass:"form-control",attrs:{type:"Title"},domProps:{value:t.newKeep.Name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Name",e.target.value)}}}),a("label",[t._v("Image Url")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Img,expression:"newKeep.Img"}],staticClass:"form-control",attrs:{type:"imageUrl"},domProps:{value:t.newKeep.Img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Img",e.target.value)}}}),a("label",[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.Description,expression:"newKeep.Description"}],staticClass:"form-control",attrs:{type:"Description"},domProps:{value:t.newKeep.Description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"Description",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.makeKeep}},[t._v("Post")])])]),t._m(2)])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col-12"},[a("h4",{staticClass:"main-font"},[t._v("Keepr is a place where you can create your own keeps or store others' keeps to your vault!")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"createModalLabel"}},[t._v("New Keep")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"},on:{click:t.viewKeep}},[a("img",{staticClass:"card-img-top",attrs:{src:t.keepData.img,alt:"Card image cap",width:"1rem"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.keepData.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.keepData.description))]),this.$auth.isAuthenticated?a("button",{staticClass:"btn btn-sm btn-success"},[t._v("Keep")]):t._e(),t.keepData.userId==this.$store.state.user.sub?a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.deleteKeep}},[t._v("delete")]):t._e(),this.keepData.isPrivate?a("button",{staticClass:"btn btn-sm btn-warning",on:{click:t.remove}},[t._v("Remove from Vault")]):t._e()])])])},K=[],V={name:"Keep",props:["keepData","keepIndex"],computed:{keeps(){return this.$store.state.keeps}},methods:{viewKeep(){this.$store.commit("setActiveKeep",this.keepData),this.$router.push({name:"activekeep"})},deleteKeep(){this.$store.dispatch("deleteKeep",this.keepData.id),this.$router.push({name:"home"})},remove(){this.keepData.id,this.$store.state.activeVault.id;this.$store.dispatch("removeKeepFromVault")}}},x=V,D=Object(p["a"])(x,k,K,!1,null,null,null),M=D.exports,E={name:"home",components:{Keep:M},data(){return{newKeep:{UserId:this.$store.state.user.sub}}},mounted(){this.$store.dispatch("getKeeps")},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps}},methods:{logout(){this.$store.dispatch("logout")},makeKeep(){this.$store.dispatch("makeKeep",this.newKeep),$("#createModal").modal("hide")}}},I=E,O=(a("cccb"),Object(p["a"])(I,w,y,!1,null,null,null)),j=O.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard bgc main-font container-fluid"},[t._m(0),a("div",{staticClass:"row"},t._l(t.myKeeps,(function(t,e){return a("keep",{key:t.id,attrs:{keepData:t,keepIndex:e}})})),1),a("div",{staticClass:"row"},t._l(t.vaults,(function(t,e){return a("vault",{key:t.id,attrs:{vaultData:t,vaultIndex:e}})})),1),t._m(1),a("div",{staticClass:"modal fade",attrs:{id:"vaultModal",tabindex:"-1",role:"dialog","aria-labelledby":"vaultModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"Title"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),a("label",[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"Description"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.makeVault}},[t._v("Post")])])]),t._m(3)])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-center pt-3"},[a("div",{staticClass:"col"},[a("h1",[t._v("Your DashBoard")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-success",attrs:{"data-toggle":"modal","data-target":"#vaultModal"}},[t._v("New Vault")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"vaultModalLabel"}},[t._v("New Vault")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3"},[a("div",{staticClass:"card",staticStyle:{width:"18rem"},on:{click:t.viewVault}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-dark"},[t._v(t._s(t.vaultData.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.vaultData.description))])])])])},T=[],U={name:"Vault",props:["vaultData","vaultIndex"],computed:{vaults(){return this.$store.state.vaults}},methods:{viewVault(){this.$store.commit("setActiveVault",this.vaultData),this.$router.push({name:"activevault"})}}},B=U,L=Object(p["a"])(B,A,T,!1,null,null,null),S=L.exports,F={mounted(){this.$store.dispatch("getMyKeeps",this.$store.state.user.id),console.log(this.$store.state.user),this.$store.dispatch("getVaults")},computed:{myKeeps(){return this.$store.state.myKeeps},vaults(){return this.$store.state.vaults}},methods:{makeVault(){this.$store.dispatch("makeVault",this.newVault),$("#vaultModal").modal("hide")}},data(){return{newVault:{UserId:this.$store.state.user.id}}},components:{Keep:M,Vault:S}},R=F,z=(a("2b56"),Object(p["a"])(R,N,P,!1,null,null,null)),J=z.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-12"},[t._v(t._s(t.active.name))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"}),a("div",{staticClass:"col-6 d-flex justify-content-center"},[a("img",{attrs:{src:t.active.img,alt:""}})]),a("div",{staticClass:"col-3"})]),a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col-12"},[t._v(t._s(t.active.description))])]),t._m(0),a("div",{staticClass:"modal fade",attrs:{id:"vaultModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},t._l(t.vaults,(function(t,e){return a("vaultname",{key:t.id,attrs:{vaultData:t,vaultIndex:e}})})),1),t._m(2)])])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-success",attrs:{"data-toggle":"modal","data-target":"#vaultModal"}},[t._v("Add To Vault")])]),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-danger"},[t._v("Go Back")])]),a("div",{staticClass:"col-2"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Your Vaults")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",on:{click:t.addKeep}},[t._v(t._s(t.vaultData.name))])},H=[],Q={name:"vaultname",props:["vaultData","vaultIndex"],methods:{addKeep(){let t=this.vaultData,e={vaultId:t.id,keepId:this.$store.state.activeKeep.id};console.log(e),this.$store.dispatch("createVaultKeep",e),$("#vaultModal").modal("hide")}}},q=Q,X=Object(p["a"])(q,G,H,!1,null,null,null),Z=X.exports,tt={name:"activekeep",components:{vaultname:Z},mounted(){this.$store.dispatch("getVaults"),this.$store.dispatch("getMyKeeps",this.$store.state.user.sub)},computed:{active(){return this.$store.state.activeKeep},vaults(){return this.$store.state.vaults}},methods:{}},et=tt,at=Object(p["a"])(et,W,Y,!1,null,null,null),st=at.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bgc main-font container-fluid"},[a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col"},[t._v(t._s(t.activeVault.name))])]),a("div",{staticClass:"row text-center"},[a("div",{staticClass:"col"},[t._v(t._s(t.activeVault.description))])]),a("div",{staticClass:"row"},t._l(t.vaultKeeps,(function(t,e){return a("keep",{key:t.id,attrs:{keepData:t,keepIndex:e}})})),1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"}),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn-danger btn",on:{click:t.deleteVault}},[t._v("Delete Vault")])])])])},lt=[],rt={name:"Vault",components:{Keep:M},computed:{activeVault(){return this.$store.state.activeVault},vaultKeeps(){return this.$store.state.activeVault.keeps}},mounted(){this.$store.dispatch("getVaultKeeps",this.$store.state.activeVault.id)},methods:{deleteVault(){this.$store.dispatch("deleteVault",this.$store.state.activeVault.id),this.$router.push({name:"dashboard"})}}},ot=rt,nt=(a("eb97"),Object(p["a"])(ot,it,lt,!1,null,null,null)),ct=nt.exports;s["a"].use(_["a"]);var ut=new _["a"]({routes:[{path:"/",name:"home",component:j},{path:"/dashboard",name:"dashboard",component:J,beforeEnter:h["b"]},{path:"/activekeep",name:"activekeep",component:st,beforeEnter:h["b"]},{path:"/activevault",name:"activevault",component:ct,beforeEnter:h["b"]}]}),dt=a("2f62");s["a"].use(dt["a"]);let pt=location.host.includes("localhost")?"https://localhost:5001/":"/",vt=c.a.create({baseURL:pt+"api/",timeout:3e3,withCredentials:!0});var mt=new dt["a"].Store({state:{keeps:[],user:{},vaults:[],activeVault:{keeps:[]},vaultKeeps:[],activeKeep:{},myKeeps:[]},mutations:{setUser(t,e){t.user=e},addKeep(t,e){t.keeps.push(e)},addVault(t,e){t.vaults.push(e)},addVaultKeep(t,e){t.vaultKeeps.push(e)},setKeeps(t,e){t.keeps=e},setVaults(t,e){t.vaults=e},addKeepToVault(t,e){t.activeVault.keeps.push(e)},removeKeepFromVault(t,e){t.activeVault.keeps.filter(t=>t.id!=e)},setActiveVault(t,e){t.activeVault=e},setActiveKeep(t,e){t.activeKeep=e},deleteKeep(t,e){t.keeps=t.keeps.filter(t=>t.id!=e)},deleteVault(t,e){t.vaults=t.vaults.filter(t=>t.id!=e)},NewKeep(t,e){t.keeps=t.keeps.map(t=>t.id==e.id?e:t)},setMyKeeps(t,e){t.myKeeps=e},setVaultKeeps(t,e){t.activeVault.keeps=e}},actions:{setBearer({},t){vt.defaults.headers.authorization=t},resetBearer(){vt.defaults.headers.authorization=""},async getKeeps({commit:t,dispatch:e}){try{let e=await vt.get("keeps");t("setKeeps",e.data)}catch(a){console.error(a)}},async getMyKeeps({commit:t,dispatch:e},a){try{let e=await vt.get("keeps/mykeeps",a);t("setKeeps",e.data)}catch(s){console.error(s)}},async getVaults({commit:t,dispatch:e}){try{let e=await vt.get("vaults");t("setVaults",e.data)}catch(a){console.error(a)}},async getKeepById({commit:t,dispatch:e},a){try{let e=await vt.get("keeps/"+a);t("setActiveKeep",e.data)}catch(s){console.error(s)}},async getVaultKeeps({commit:t,dispatch:e},a){try{let e=await vt.get("vaults/"+a+"/keeps");t("setVaultKeeps",e.data)}catch(s){console.error(s)}},async getVaultById({commit:t,dispatch:e},a){try{let e=await vt.get("vaults/"+a);t("setActiveVault",e.data)}catch(s){console.error(s)}},async makeKeep({commit:t,dispatch:e},a){try{let e=await vt.post("keeps",a);t("addKeep",e.data)}catch(s){console.error(s)}},async makeVault({commit:t,dispatch:e},a){try{let e=await vt.post("vaults",a);t("addVault",e.data)}catch(s){console.error(s)}},async deleteKeep({commit:t,dispatch:e},a){try{await vt.delete("keeps/"+a);t("deleteKeep",a)}catch(s){console.error(s)}},async deleteVault({commit:t,dispatch:e},a){try{await vt.delete("vaults/"+a);t("deleteVault",a)}catch(s){console.error(s)}},async removeKeepFromVault({dispatch:t,commit:e},a){try{await vt.put("vaultkeeps/vaultkeep"+a);e("removeKeepFromVault",a.keepId)}catch(s){console.error(s)}},async createVaultKeep({commit:t,dispatch:e},a){try{let e=await vt.post("vaultkeeps",a);t("addVaultKeep",e.data)}catch(s){console.error(s)}},async editKeeps({commit:t,dispatch:e},a){try{let e=await vt.put("keeps/"+a+"/keepcount");t("NewKeep",e.data)}catch(s){console.error(s)}}}});const ht="noah-preston.auth0.com",bt="https://keepr/api",ft="RhgAVod49hfyJB2yUbFCDI3h3Q6WNF2x";s["a"].use(h["a"],{domain:ht,clientId:ft,audience:bt,onRedirectCallback:t=>{ut.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:ut,store:mt,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"5ced":function(t,e,a){},"7e79":function(t,e,a){},"9c0c":function(t,e,a){},b5e8:function(t,e,a){},cccb:function(t,e,a){"use strict";var s=a("5ced"),i=a.n(s);i.a},eb97:function(t,e,a){"use strict";var s=a("7e79"),i=a.n(s);i.a}});