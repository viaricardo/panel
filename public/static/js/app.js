webpackJsonp([0],{"+586":function(t,a){},"+KYZ":function(t,a,e){"use strict";var s=e("WEHx"),n=(e.n(s),{install:function(t){t.directive("click-outside",s.directive)}});a.a=n},"/4dZ":function(t,a){},"/Zdx":function(t,a,e){"use strict";function s(t){e("v3Yq")}var n=e("2RsT"),i=e("93Sd"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"/h0c":function(t,a){},"/x95":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:{"nav-open":t.$sidebar.showSidebar}},[e("notifications"),t._v(" "),e("router-view")],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},"0AsC":function(t,a,e){"use strict";function s(t){e("KpYk")}var n=e("MDnB"),i=e("ve5i"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"0FOK":function(t,a,e){"use strict";a.a={}},"0XqQ":function(t,a,e){"use strict";var s=e("jEp+");a.a={name:"stats-card",components:{Card:s.a}}},"1gfG":function(t,a){},"1lSy":function(t,a,e){"use strict";var s=e("Ond/"),n=e("ZQf1"),i={install:function(t){t.component("fg-input",s.a),t.component("drop-down",n.a)}};a.a=i},"28ys":function(t,a,e){"use strict";var s=e("VN6J"),n=e("1SRG"),i=e.n(n),r=e("1lSy"),o=e("+KYZ"),c=e("Crv8"),l=e("Jmt5"),d=(e.n(l),e("Sczw")),u=(e.n(d),e("/4dZ")),v=(e.n(u),e("947H")),p=(e.n(v),e("MU8w"));e.n(p);a.a={install:function(t){t.use(r.a),t.use(o.a),t.use(c.a),t.use(i.a),t.use(s.a)}}},"2Bqr":function(t,a){},"2RsT":function(t,a,e){"use strict";var s=e("vNb6");a.a={components:{StatsCard:s.a},mounted:function(){var t=this;this.axios.get("/stats").then(function(a){t.stats=a.data})},data:function(){return{stats:{streams:0,liveStreams:0,users:0,endpoints:0}}}}},"2aTV":function(t,a,e){"use strict";function s(t){e("/h0c")}var n=e("zTLC"),i=e("NWuw"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"3/TK":function(t,a){},"3LD9":function(t,a,e){"use strict";var s=e("kVx9"),n=e("jEp+");a.a={components:{PCheckbox:s.a,Card:n.a},data:function(){return{stream:{active:!1,name:""},endpoints:[]}},mounted:function(){var t=this;"add"!==this.$route.params.id&&(this.axios.get("/streams/one?id="+this.$route.params.id).then(function(a){t.stream=a.data}),this.axios.get("/streams/"+this.$route.params.id+"/endpoints/").then(function(a){t.endpoints=a.data}))},methods:{save:function(){var t=this;this.axios.post("/streams/update",this.stream).then(function(){t.$router.push("/ucp/streams/")}).catch(function(a){var e={template:"<span>"+a.response.data.message+"</span>"};t.$notify({component:e,icon:"fa fa-exclamation-triangle",horizontalAlign:"right",verticalAlign:"top",type:"danger"})})},deleteEndpoint:function(t){this.endpoints.splice(this.endpoints.indexOf(t),1),this.axios.post("/streams/deleteEndpoint",{id:t.id})},toggleEndpoint:function(t){var a=this;this.axios.post("/streams/toggleEndpoint",{id:t.id}).then(function(t){a.axios.get("/streams/"+a.$route.params.id+"/endpoints/").then(function(t){a.endpoints=t.data})})}}}},"3Q3N":function(t,a,e){"use strict";a.a={inheritAttrs:!1,inject:{autoClose:{default:!0}},props:{link:{type:[String,Object],default:function(){return{name:"",path:"",icon:""}}},tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar&&!0===this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}}},"5C79":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},["add"==t.$route.params.id?e("h4",[t._v("Create a new Stream")]):t._e(),t._v(" "),"add"!=t.$route.params.id?e("h4",[t._v('Edit "'+t._s(t.stream.name)+'"')]):t._e(),t._v(" "),e("card",[e("fg-input",{attrs:{label:"Name"},model:{value:t.stream.name,callback:function(a){t.$set(t.stream,"name",a)},expression:"stream.name"}}),t._v(" "),e("div",{staticClass:"form-group"},[e("p-checkbox",{model:{value:t.stream.active,callback:function(a){t.$set(t.stream,"active",a)},expression:"stream.active"}},[t._v("Active")])],1),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])],1),t._v(" "),"add"!==this.$route.params.id?e("div",[e("h4",[t._v("Endpoints")]),t._v(" "),e("div",{staticClass:"bg-white p-3"},[e("a",{staticClass:"btn btn-primary mb-3",attrs:{href:"#/ucp/streams/"+t.$route.params.id+"/endpoints/add"}},[t._v("Add a new Endpoint")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.endpoints,function(a){return e("tr",[e("td",[e("i",{staticClass:"fa fa-circle",class:a.active?"text-success":"text-danger",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.type))]),t._v(" "),e("td",[t._v(t._s(a.server))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-secondary",attrs:{href:"#/ucp/streams/"+t.$route.params.id+"/endpoints/"+a.id}},[t._v("Edit")]),t._v(" "),e("a",{staticClass:"btn btn-info",on:{click:function(e){t.toggleEndpoint(a)}}},[t._v(t._s(a.active?"Disable":"Enable"))]),t._v(" "),e("a",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteEndpoint(a)}}},[t._v("Delete")])])])}))])])]):t._e()],1)])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",[t._v("Active")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Service")]),t._v(" "),e("th",[t._v("Location")]),t._v(" "),e("th",[t._v("Action")])])])}],i={render:s,staticRenderFns:n};a.a=i},"5FAv":function(t,a,e){"use strict";var s=e("eAxr"),n=e("pZsM"),i=e("VU/8"),r=i(s.a,n.a,!1,null,null,null);a.a=r.exports},"69r5":function(t,a,e){"use strict";var s=e("fZjL"),n=e.n(s),i=e("kVx9"),r=e("jEp+");a.a={components:{PCheckbox:i.a,Card:r.a},data:function(){return{endpoint:{name:"",active:!1,type:"Mixer",server:"",streamKey:""},services:{},serviceNames:[]}},mounted:function(){var t=this;this.axios.get("/streams/services").then(function(a){t.serviceNames=n()(a.data),t.services=a.data}),"add"!==this.$route.params.id&&this.axios.get("/streams/endpoint/"+this.$route.params.id).then(function(a){t.endpoint=a.data})},methods:{save:function(){var t=this;this.axios.post("/streams/"+this.$route.params.streamId+"/endpoints/update",this.endpoint).then(function(){t.$router.push("/ucp/streams/"+t.$route.params.streamId+"/")}).catch(function(a){var e={template:"<span>"+a.response.data.message+"</span>"};t.$notify({component:e,icon:"fa fa-exclamation-triangle",horizontalAlign:"right",verticalAlign:"top",type:"danger"})})}},computed:{serverData:function(){var t=this,a=[];if(this.endpoint.type.length&&this.services[this.endpoint.type]){n()(this.services[this.endpoint.type]).forEach(function(e){a.push({name:e,value:t.services[t.endpoint.type][e]})})}return a}}}},"7SdG":function(t,a,e){"use strict";function s(t){e("B6fM")}var n=e("3Q3N"),i=e("sbTa"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"90Q8":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[t.$slots.image?e("div",{staticClass:"card-image"},[t._t("image")],2):t._e(),t._v(" "),t.$slots.header?e("div",{staticClass:"card-header"},[t._t("header")],2):t._e(),t._v(" "),e("div",{staticClass:"card-body"},[t._t("default")],2),t._v(" "),t.$slots.footer?e("div",{staticClass:"card-footer"},[e("hr"),t._v(" "),t._t("footer")],2):t._e()])},n=[],i={render:s,staticRenderFns:n};a.a=i},"93Sd":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",[e("div",{staticClass:"icon-warning",attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-signal text-warning"})]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"card-category"},[t._v("Created streams")]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(t.stats.streams))])]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("i",{staticClass:"fa fa-refresh"}),t._v(" Updated now\n                    ")])])],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",[e("div",{staticClass:"icon-success",attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-signal text-success"})]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"card-category"},[t._v("Live streams")]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(t.stats.liveStreams))])]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("i",{staticClass:"fa fa-refresh"}),t._v(" Updated now\n                    ")])])],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",[e("div",{staticClass:"icon-danger",attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-user text-danger"})]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"card-category"},[t._v("Registered users")]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(t.stats.users))])]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("i",{staticClass:"fa fa-refresh"}),t._v(" Updated now\n                    ")])])],1),t._v(" "),e("div",{staticClass:"col-xl-3 col-md-6"},[e("stats-card",[e("div",{staticClass:"icon-info",attrs:{slot:"header"},slot:"header"},[e("i",{staticClass:"fa fa-server text-primary"})]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",{staticClass:"card-category"},[t._v("Supported endpoints")]),t._v(" "),e("h4",{staticClass:"card-title"},[t._v(t._s(t.stats.endpoints))])]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("i",{staticClass:"fa fa-refresh"}),t._v(" Updated now\n                    ")])])],1)])])])},n=[],i={render:s,staticRenderFns:n};a.a=i},"947H":function(t,a){},"9uBz":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container-fluid"},[e("nav",[e("ul",{staticClass:"footer-menu"})]),t._v(" "),e("div",{staticClass:"copyright text-center"},[t._v("\n      © Coded with\n      "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by\n      "),e("a",{attrs:{href:"https://github.com/shyim",target:"_blank"}},[t._v("Shyim")])])])])}],i={render:s,staticRenderFns:n};a.a=i},AUmh:function(t,a){},B6fM:function(t,a){},BsYP:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("side-bar",[e("mobile-menu",{attrs:{slot:"content"},slot:"content"}),t._v(" "),e("sidebar-link",{attrs:{to:"/ucp/overview"}},[e("i",{staticClass:"fa fa-line-chart"}),t._v(" "),e("p",[t._v("Dashboard")])]),t._v(" "),e("sidebar-link",{attrs:{to:"/ucp/streams"}},[e("i",{staticClass:"fa fa-signal"}),t._v(" "),e("p",[t._v("My Streams")])])],1),t._v(" "),e("div",{staticClass:"main-panel"},[e("top-navbar"),t._v(" "),e("dashboard-content",{on:{click:t.toggleSidebar}}),t._v(" "),e("content-footer")],1)],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},Crv8:function(t,a,e){"use strict";var s=e("R5Ta"),n=e("7SdG"),i={showSidebar:!1,sidebarLinks:[{name:"Dashboard",icon:"ti-panel",path:"/admin/overview"}],displaySidebar:function(t){this.showSidebar=t}},r={install:function(t){t.mixin({data:function(){return{sidebarStore:i}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",s.a),t.component("sidebar-link",n.a)}};a.a=r},"D+5F":function(t,a){},D12h:function(t,a){},F2bN:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loginWrapper"},[e("div",{staticClass:"sidebarBanner"}),t._v(" "),e("div",{staticClass:"loginForm"},[e("h4",[t._v("Login")]),t._v(" "),t.authFailed?e("div",{staticClass:"alert alert-danger"},[t._v("Bad credentials")]):t._e(),t._v(" "),e("fg-input",{attrs:{type:"text",label:"Username",placeholder:"Username"},model:{value:t.login._username,callback:function(a){t.$set(t.login,"_username",a)},expression:"login._username"}}),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.login._password,expression:"login._password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.login._password},on:{input:function(a){a.target.composing||t.$set(t.login,"_password",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("p-checkbox",{model:{value:t.rememberMe,callback:function(a){t.rememberMe=a},expression:"rememberMe"}},[t._v("Remember Me")])],1),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.onLogin}},[t._v("Login")])],1)])},n=[],i={render:s,staticRenderFns:n};a.a=i},JMTP:function(t,a,e){"use strict";a.a={data:function(){return{stream:{}}},mounted:function(){var t=this;this.axios.get("/streams/one?id="+this.$route.params.id).then(function(a){t.stream=a.data})}}},Jmt5:function(t,a){},KpYk:function(t,a){},LHU7:function(t,a){},M93x:function(t,a,e){"use strict";function s(t){e("+586")}var n=e("xJD8"),i=e("/x95"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},MDnB:function(t,a,e){"use strict";var s=e("ZQf1");a.a={components:{DropDown:s.a}}},MDtD:function(t,a){},MZ8R:function(t,a,e){"use strict";function s(t){e("o5jG")}var n=e("0FOK"),i=e("9uBz"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},Mca5:function(t,a,e){"use strict";var s=e("7SdG");a.a={components:{SidebarLink:s.a},props:{title:{type:String,default:"ReCast"},backgroundColor:{type:String,default:"purple",validator:function(t){return-1!==["","blue","azure","green","orange","red","purple","black"].indexOf(t)}},backgroundImage:{type:String,default:"static/img/sidebar-5.jpg"},activeColor:{type:String,default:"success",validator:function(t){return-1!==["primary","info","success","warning","danger"].indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose}},computed:{sidebarStyle:function(){return{backgroundImage:"url("+this.backgroundImage+")"}}}}},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("I3G/"),n=e.n(s),i=e("/ocq"),r=e("M93x"),o=e("mtWM"),c=e.n(o),l=e("Rf8U"),d=e.n(l),u=e("MLZB"),v=e.n(u),p=e("1SRG"),f=e.n(p),m=e("p4sG"),_=(e.n(m),e("28ys")),h=e("T1vP");n.a.use(i.a),n.a.use(_.a);var g=new i.a({routes:h.a,linkActiveClass:"nav-item active"});n.a.router=g,c.a.defaults.baseURL="undefined"==typeof appUrl?"http://streamer.miku/api":appUrl,n.a.use(d.a,c.a),n.a.use(f.a),n.a.use(v.a,{auth:{request:function(t,a){this.options.http._setHeaders.call(this,t,{Authorization:"Bearer "+localStorage.getItem("token")})},response:function(t){if(t.data.token)return localStorage.setItem("token",t.data.token),t.data.token}},http:e("E/+Z"),router:e("LFDJ")}),new n.a({el:"#app",render:function(t){return t(r.a)},router:g})},NWuw:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}}),t._v(" "),e("button",{staticClass:"navbar-toggler navbar-toggler-right",class:{toggled:t.$sidebar.showSidebar},attrs:{type:"button","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.toggleSidebar}},[e("span",{staticClass:"navbar-toggler-bar burger-lines"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar burger-lines"}),t._v(" "),e("span",{staticClass:"navbar-toggler-bar burger-lines"})]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse justify-content-end"},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#/ucp/settings"}},[t._v("\n                        Account Settings\n                    ")]),t._v(" "),e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.logout}},[t._v("\n                        Log out\n                    ")])])])])])])},n=[],i={render:s,staticRenderFns:n};a.a=i},OJ7e:function(t,a,e){"use strict";function s(t){e("3/TK")}var n=e("k+ET"),i=e("F2bN"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},Ofcx:function(t,a,e){"use strict";function s(t){e("LHU7")}var n=e("oQcq"),i=e("gX7m"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"Ond/":function(t,a,e){"use strict";function s(t){e("D+5F")}var n=e("eU1q"),i=e("WA7w"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},QDyf:function(t,a,e){"use strict";a.a={name:"card"}},R5Ta:function(t,a,e){"use strict";function s(t){e("nblu")}var n=e("Mca5"),i=e("poRU"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},RJyU:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card",{staticClass:"card-stats"},[e("div",{staticClass:"row"},[t.$slots.header?e("div",{staticClass:"col-5"},[e("div",{staticClass:"icon-big text-center"},[t._t("header")],2)]):t._e(),t._v(" "),t.$slots.content?e("div",{staticClass:"col-7"},[e("div",{staticClass:"numbers"},[t._t("content")],2)]):t._e()]),t._v(" "),t.$slots.footer?e("div",{staticClass:"stats",attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2):t._e()])},n=[],i={render:s,staticRenderFns:n};a.a=i},RdIe:function(t,a,e){"use strict";function s(t){e("1gfG")}var n=e("tQko"),i=e("iGQM"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},Sczw:function(t,a){},T1vP:function(t,a,e){"use strict";var s=e("OJ7e"),n=e("eCSI"),i=e("5FAv"),r=e("/Zdx"),o=e("Ofcx"),c=e("qttZ"),l=e("bqJ/"),d=e("z/GT"),u=e("RdIe"),v=[{path:"/",redirect:"/ucp/overview"},{name:"login",path:"/login",component:s.a},{path:"/ucp",component:n.a,redirect:"/ucp/overview",meta:{auth:!0},children:[{path:"overview",name:"Overview",component:r.a,meta:{auth:!0}},{path:"settings",component:u.a,meta:{auth:!0}},{path:"streams",name:"My Streams",component:o.a,meta:{auth:!0}},{path:"streams/:id/",component:c.a,meta:{auth:!0}},{path:"streams/:id/setup",component:l.a,meta:{auth:!0}},{path:"streams/:streamId/endpoints/:id",component:d.a,meta:{auth:!0}}]},{path:"*",component:i.a}];a.a=v},TQ5B:function(t,a,e){"use strict";var s=e("2aTV"),n=e("MZ8R"),i=e("bwpC"),r=e("0AsC");a.a={components:{TopNavbar:s.a,ContentFooter:n.a,DashboardContent:i.a,MobileMenu:r.a},methods:{toggleSidebar:function(){this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}}},UJsn:function(t,a){},VnhA:function(t,a,e){"use strict";a.a={}},WA7w:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group",class:{"input-group":t.hasIcon}},[t._t("label",[t.label?e("label",{staticClass:"control-label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e()]),t._v(" "),t._t("addonLeft",[t.addonLeftIcon?e("span",{staticClass:"input-group-addon"},[e("i",{class:t.addonLeftIcon})]):t._e()]),t._v(" "),e("input",t._b({staticClass:"form-control",attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value},on:{input:function(a){t.$emit("input",a.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t._t("default"),t._v(" "),t._t("addonRight",[t.addonRightIcon?e("span",{staticClass:"input-group-addon"},[e("i",{class:t.addonRightIcon})]):t._e()])],2)},n=[],i={render:s,staticRenderFns:n};a.a=i},ZQf1:function(t,a,e){"use strict";function s(t){e("dCs8")}var n=e("sQGm"),i=e("l4gp"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,"data-v-22c919e6",null);a.a=c.exports},bp9v:function(t,a){},"bqJ/":function(t,a,e){"use strict";function s(t){e("D12h")}var n=e("JMTP"),i=e("zTI+"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},bwpC:function(t,a,e){"use strict";function s(t){e("UJsn")}var n=e("VnhA"),i=e("of1H"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},dCs8:function(t,a){},eAxr:function(t,a,e){"use strict";a.a={}},eCSI:function(t,a,e){"use strict";function s(t){e("bp9v")}var n=e("TQ5B"),i=e("BsYP"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},eU1q:function(t,a,e){"use strict";a.a={inheritAttrs:!1,name:"fg-input",props:{label:String,value:[String,Number],addonRightIcon:String,addonLeftIcon:String},computed:{hasIcon:function(){var t=this.$slots,a=t.addonRight,e=t.addonLeft;return void 0!==a||void 0!==e||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}}}},gX7m:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"bg-white p-3"},[e("a",{staticClass:"btn btn-primary mb-3",attrs:{href:"#/ucp/streams/add"}},[t._v("Add a new Stream")]),t._v(" "),e("table",{staticClass:"table"},[t._m(0),t._v(" "),e("tbody",t._l(t.streams,function(a){return e("tr",[e("td",[e("i",{staticClass:"fa fa-circle",class:a.live?"text-success":"text-danger",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("td",[e("i",{staticClass:"fa fa-circle",class:a.active?"text-success":"text-danger",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(t.getProviders(a)))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-info",attrs:{href:"#/ucp/streams/"+a.id+"/setup"}},[t._v("Setup")]),t._v(" "),e("a",{staticClass:"btn btn-secondary",attrs:{href:"#/ucp/streams/"+a.id+"/"}},[t._v("Edit")]),t._v(" "),e("a",{staticClass:"btn btn-danger",on:{click:function(e){t.regenerateKey(a)}}},[t._v("Regenerate Stream Key")]),t._v(" "),e("a",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteStream(a)}}},[t._v("Delete")])])])}))])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",[t._v("Live")]),t._v(" "),e("th",[t._v("Active")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Endpoints")]),t._v(" "),e("th",[t._v("Action")])])])}],i={render:s,staticRenderFns:n};a.a=i},iGQM:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("card",[e("h4",[t._v("Change Password")]),t._v(" "),e("form",{on:{submit:t.changePassword}},[e("fg-input",{attrs:{label:"Current Password",type:"password",required:"required"},model:{value:t.resetPassword.currentPassword,callback:function(a){t.$set(t.resetPassword,"currentPassword",a)},expression:"resetPassword.currentPassword"}}),t._v(" "),e("fg-input",{attrs:{label:"New Password",pattern:".{6,}",type:"password",required:"required"},model:{value:t.resetPassword.newPassword,callback:function(a){t.$set(t.resetPassword,"newPassword",a)},expression:"resetPassword.newPassword"}}),t._v(" "),e("small",[t._v("Passwords must have at minimum 6 characters")]),t._v(" "),e("fg-input",{attrs:{label:"New Password Repeat",pattern:".{6,}",type:"password",required:"required"},model:{value:t.resetPassword.newPassword2,callback:function(a){t.$set(t.resetPassword,"newPassword2",a)},expression:"resetPassword.newPassword2"}}),t._v(" "),e("button",{staticClass:"btn btn-primary"},[t._v("Change Password")])],1)])],1)])},n=[],i={render:s,staticRenderFns:n};a.a=i},"jEp+":function(t,a,e){"use strict";function s(t){e("kYOY")}var n=e("QDyf"),i=e("90Q8"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"k+ET":function(t,a,e){"use strict";var s=e("kVx9"),n=e("jEp+");a.a={components:{Card:n.a,PCheckbox:s.a},data:function(){return{login:{_username:"",_password:""},rememberMe:!1,authFailed:!1}},methods:{onLogin:function(){var t=this,a=new FormData;a.set("_username",this.login._username),a.set("_password",this.login._password),this.$auth.login({data:a,rememberMe:this.rememberMe,redirect:{name:"Overview"},error:function(){var a={template:"<span>Login failed</span>"};t.$notify({component:a,icon:"fa fa-exclamation-triangle",horizontalAlign:"right",verticalAlign:"top",type:"danger"})}})}}}},kVx9:function(t,a,e){"use strict";function s(t){e("MDtD")}var n=e("uEKC"),i=e("mLyp"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},kYOY:function(t,a){},l4gp:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(t.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],tag:"li",staticClass:"dropdown nav-item",class:{show:t.isOpen},attrs:{"aria-haspopup":"true","aria-expanded":t.isOpen},on:{click:t.toggleDropDown}},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._t("title",[e("i",{class:t.icon}),t._v(" "),e("span",{staticClass:"no-icon"},[t._v(t._s(t.title))]),t._v(" "),e("b",{staticClass:"caret"})])],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dropdown-menu"},[t._t("default")],2)])},n=[],i={render:s,staticRenderFns:n};a.a=i},mLyp:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-check",class:{disabled:t.disabled}},[e("label",{staticClass:"form-check-label",attrs:{for:t.cbId}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-check-input",attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(a){var e=t.model,s=a.target,n=!!s.checked;if(Array.isArray(e)){var i=t._i(e,null);s.checked?i<0&&(t.model=e.concat([null])):i>-1&&(t.model=e.slice(0,i).concat(e.slice(i+1)))}else t.model=n}}}),t._v(" "),e("span",{staticClass:"form-check-sign"})]),t._v(" "),e("span",[t._t("default")],2)])},n=[],i={render:s,staticRenderFns:n};a.a=i},nblu:function(t,a){},o5jG:function(t,a){},oQcq:function(t,a,e){"use strict";a.a={data:function(){return{streams:[]}},mounted:function(){var t=this;this.axios.get("/streams/list").then(function(a){t.streams=a.data})},methods:{deleteStream:function(t){this.streams.splice(this.streams.indexOf(t),1),this.axios.post("/streams/delete",{id:t.id})},regenerateKey:function(t){this.axios.post("/streams/regenerate",{id:t.id}).then(function(t){window.location.reload()})},getProviders:function(t){var a="";return t.endpoints.forEach(function(t){a+=t.type+", "}),a.length&&(a=a.substr(0,a.length-2)),a}}}},of1H:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)},n=[],i={render:s,staticRenderFns:n};a.a=i},p4sG:function(t,a){},pZsM:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-us full-screen"},[e("nav",{staticClass:"navbar navbar-ct-default",attrs:{role:"navigation-demo"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[t._v("Site title")])],1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navigation-example-2"}},[e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1)])])])]),t._v(" "),t._m(1),t._v(" "),e("footer",{staticClass:"footer-demo"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"pull-left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{path:"/register"}}},[t._v("Register")])],1)])]),t._v(" "),t._m(2)])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation-example-2"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"}),t._v(" "),e("span",{staticClass:"icon-bar"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper wrapper-full-page section content"},[e("div",{},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2 text-center"},[e("h2",{staticClass:"title text-danger"},[t._v("404 Not Found")]),t._v(" "),e("h2",{staticClass:"title"},[t._v("Oops! It seems that this page does not exist.")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"copyright pull-right"},[t._v("\n        © 2017, made with\n        "),e("i",{staticClass:"fa fa-heart heart"}),t._v(" by Paper admin\n      ")])}],i={render:s,staticRenderFns:n};a.a=i},poRU:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sidebar",style:t.sidebarStyle,attrs:{"data-color":t.backgroundColor,"data-image":t.backgroundImage}},[e("div",{staticClass:"sidebar-wrapper"},[e("div",{staticClass:"logo"},[e("a",{staticClass:"simple-text",attrs:{href:"#"}},[e("img",{attrs:{src:"static/img/logo.png",alt:""}}),t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),t._t("content"),t._v(" "),e("ul",{staticClass:"nav"},[t._t("default",t._l(t.sidebarLinks,function(a,s){return e("sidebar-link",{key:a.name+s,attrs:{to:a.path,link:a},on:{click:t.closeNavbar}},[e("i",{class:a.icon}),t._v(" "),e("p",[t._v(t._s(a.name))])])}))],2)],2)])},n=[],i={render:s,staticRenderFns:n};a.a=i},qttZ:function(t,a,e){"use strict";function s(t){e("2Bqr")}var n=e("3LD9"),i=e("5C79"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},sQGm:function(t,a,e){"use strict";a.a={name:"drop-down",props:{title:String,icon:String,tag:{type:String,default:"li"}},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},closeDropDown:function(){this.isOpen=!1,this.$emit("change",this.isOpen)}}}},sbTa:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e(t.tag,t._b({tag:"component",attrs:{tag:"li"},nativeOn:{click:function(a){return t.hideSidebar(a)}}},"component",t.$attrs,!1),[e("a",{staticClass:"nav-link"},[t._t("default",[t.link.icon?e("i",{class:t.link.icon}):t._e(),t._v(" "),e("p",[t._v(t._s(t.link.name))])])],2)])},n=[],i={render:s,staticRenderFns:n};a.a=i},tQko:function(t,a,e){"use strict";var s=e("jEp+");a.a={components:{Card:s.a},data:function(){return{resetPassword:{currentPassword:"",newPassword:"",newPassword2:""}}},methods:{changePassword:function(t){var a=this;if(t.preventDefault(),this.resetPassword.newPassword!==this.resetPassword.newPassword2){var e={template:"<span>New Passwords are not equal</span>"};this.$notify({component:e,icon:"fa fa-exclamation-triangle",horizontalAlign:"right",verticalAlign:"top",type:"danger"})}else this.axios.post("/auth/changePassword",{currentPassword:this.resetPassword.currentPassword,newPassword:this.resetPassword.newPassword}).then(function(t){a.$auth.logout({redirect:{name:"login"}})}).catch(function(t){var e={template:"<span>"+t.response.data.message+"</span>"};a.$notify({component:e,icon:"fa fa-exclamation-triangle",horizontalAlign:"right",verticalAlign:"top",type:"danger"})})}}}},uEKC:function(t,a,e){"use strict";a.a={name:"p-checkbox",model:{prop:"checked"},props:{checked:[Array,Boolean],disabled:[Boolean,String],inline:Boolean},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.checked},set:function(t){this.$emit("input",t)}},inlineClass:function(){if(this.inline)return"checkbox-inline"}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}},v3Yq:function(t,a){},vNb6:function(t,a,e){"use strict";function s(t){e("AUmh")}var n=e("0XqQ"),i=e("RJyU"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},ve5i:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"nav nav-mobile-menu"},[e("drop-down",[e("template",{slot:"title"},[e("i",{staticClass:"fa fa-globe"}),t._v(" "),e("b",{staticClass:"caret"}),t._v(" "),e("span",{staticClass:"notification"},[t._v("5 Notifications")])]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Notification 1")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Notification 2")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Notification 3")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Notification 4")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another notification")])],2),t._v(" "),t._m(0),t._v(" "),e("drop-down",{attrs:{title:"Dropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Separated link")])]),t._v(" "),t._m(1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("i",{staticClass:"nc-icon nc-zoom-split hidden-lg-up"}),t._v(" "),e("span",{staticClass:"d-lg-none"},[t._v("Search")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#pablo"}},[e("span",{staticClass:"no-icon"},[t._v("Log out")])])])}],i={render:s,staticRenderFns:n};a.a=i},xJD8:function(t,a,e){"use strict";a.a={}},ytzF:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},["add"==t.$route.params.id?e("h4",[t._v("Create a new Endpoint")]):t._e(),t._v(" "),"add"!=t.$route.params.id?e("h4",[t._v('Edit "'+t._s(t.endpoint.name)+'"')]):t._e(),t._v(" "),e("card",[e("fg-input",{attrs:{label:"Name"},model:{value:t.endpoint.name,callback:function(a){t.$set(t.endpoint,"name",a)},expression:"endpoint.name"}}),t._v(" "),e("div",{staticClass:"form-group"},[e("p-checkbox",{model:{value:t.endpoint.active,callback:function(a){t.$set(t.endpoint,"active",a)},expression:"endpoint.active"}},[t._v("Active")])],1),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("\n                            Type\n                        ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.type,expression:"endpoint.type"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.endpoint,"type",a.target.multiple?e:e[0])}}},t._l(t.serviceNames,function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a))])}))]),t._v(" "),t.serverData.length?e("div",{staticClass:"form-group"},[e("label",{staticClass:"control-label"},[t._v("\n                            Server\n                        ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.endpoint.server,expression:"endpoint.server"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.endpoint,"server",a.target.multiple?e:e[0])}}},t._l(t.serverData,function(a){return e("option",{domProps:{value:a.value}},[t._v(t._s(a.name))])}))]):t._e(),t._v(" "),t.serverData.length?t._e():e("fg-input",{attrs:{label:"Server"},model:{value:t.endpoint.server,callback:function(a){t.$set(t.endpoint,"server",a)},expression:"endpoint.server"}}),t._v(" "),e("fg-input",{attrs:{label:"Stream-Key"},model:{value:t.endpoint.streamKey,callback:function(a){t.$set(t.endpoint,"streamKey",a)},expression:"endpoint.streamKey"}}),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.save}},[t._v("Save")])],1)],1)])])])},n=[],i={render:s,staticRenderFns:n};a.a=i},"z/GT":function(t,a,e){"use strict";function s(t){e("zW5y")}var n=e("69r5"),i=e("ytzF"),r=e("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);a.a=c.exports},"zTI+":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h3",[t._v("Setup")]),t._v(" "),e("fg-input",{attrs:{label:"URL",disabled:"true"},model:{value:t.stream.streamUrl,callback:function(a){t.$set(t.stream,"streamUrl",a)},expression:"stream.streamUrl"}}),t._v(" "),e("fg-input",{attrs:{label:"Stream Key",disabled:"true"},model:{value:t.stream.streamKey,callback:function(a){t.$set(t.stream,"streamKey",a)},expression:"stream.streamKey"}}),t._v(" "),e("h4",[t._v("OBS")]),t._v(" "),t._m(0),t._v(" "),e("img",{attrs:{src:"https://i.imgur.com/ltaKXiy.png"}})],1)])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[t._v('Go to File, Settings, Stream and choose as Stream Type "Custom Streaming Server"')]),t._v(" "),e("li",[t._v("Fill the Server and Stream Key in")])])}],i={render:s,staticRenderFns:n};a.a=i},zTLC:function(t,a,e){"use strict";a.a={computed:{routeName:function(){var t=this.$route.name;return this.capitalizeFirstLetter(t)}},data:function(){return{activeNotifications:!1}},methods:{capitalizeFirstLetter:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},toggleNotificationDropDown:function(){this.activeNotifications=!this.activeNotifications},closeDropDown:function(){this.activeNotifications=!1},toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)},hideSidebar:function(){this.$sidebar.displaySidebar(!1)},logout:function(){localStorage.removeItem("token"),this.$auth.logout({redirect:{name:"login"}})}}}},zW5y:function(t,a){}},["NHnr"]);