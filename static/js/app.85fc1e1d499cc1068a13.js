webpackJsonp([1],{"+Gxq":function(t,a,n){"use strict";function e(t){n("50Yw")}var s=n("/Put"),i=n("VU/8"),r=e,c=i(s.a,null,!1,r,null,null);a.a=c.exports},"/Put":function(t,a,n){"use strict";var e=n("fnDg");a.a=e.a},"08me":function(t,a,n){t.exports=n.p+"static/media/AIS-Doc-v1.5-7e2b0b7.pdf"},"0EFW":function(t,a){},"50Yw":function(t,a){},"6+aJ":function(t,a,n){"use strict";function e(t){n("zEGg")}var s=n("iTc6"),i=n("wmAo"),r=n("VU/8"),c=e,o=r(s.a,i.a,!1,c,"data-v-6e1bc8e0",null);a.a=o.exports},"7Otq":function(t,a,n){t.exports=n.p+"static/img/logo.94634b6.png"},"9M+g":function(t,a){},"HUt/":function(t,a,n){"use strict";function e(t){n("0EFW")}var s=n("fcFS"),i=n("VU/8"),r=e,c=i(s.a,null,!1,r,null,null);a.a=c.exports},JCpY:function(t,a,n){"use strict";function e(t){n("k0Yb")}var s=n("aPSQ"),i=n("VU/8"),r=e,c=i(s.a,null,!1,r,null,null);a.a=c.exports},JDVb:function(t,a,n){"use strict";function e(t){n("vkIy")}var s=n("kJiG"),i=n("VU/8"),r=e,c=i(s.a,null,!1,r,null,null);a.a=c.exports},Jmt5:function(t,a){},M93x:function(t,a,n){"use strict";function e(t){n("W1yf")}var s=n("xJD8"),i=n("ltot"),r=n("VU/8"),c=e,o=r(s.a,i.a,!1,c,null,null);a.a=o.exports},MwgP:function(t,a,n){t.exports=n.p+"static/media/bgMusic.8c82dd1.ogg"},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("Jmt5"),s=(n.n(e),n("9M+g")),i=(n.n(s),n("e6fC")),r=n("7+uW"),c=n("M93x"),o=n("YaEn");r.a.config.productionTip=!1,r.a.use(i.a),new r.a({el:"#app",router:o.a,template:"<App/>",components:{App:c.a}})},S5un:function(t,a,n){t.exports=n.p+"static/img/ais.e917559.png"},W1yf:function(t,a){},YaEn:function(t,a,n){"use strict";var e=n("7+uW"),s=n("/ocq"),i=n("6+aJ"),r=n("cOEn");e.a.use(r.Navbar),e.a.use(s.a),a.a=new s.a({routes:[{path:"/",name:"main",component:i.a}]})},aPSQ:function(t,a,n){"use strict";var e=n("rKsW");a.a=e.a},fcFS:function(t,a,n){"use strict";var e=n("qRo1");a.a=e.a},iTc6:function(t,a,n){"use strict";var e=n("S5un"),s=n.n(e),i=n("MwgP"),r=n.n(i),c=n("08me"),o=n.n(c),u=n("/sUu"),l=new XMLHttpRequest,v={message:"",bgMusic:r.a,ais:s.a,doc:o.a,footer:"Copyright © 2018 shitake",sceen:"proj"};l.onreadystatechange=function(t){4===l.readyState&&200===l.status&&(v.message=l.responseText)},l.open("GET","https://sslapi.hitokoto.cn/?c=abc&encode=text",!0),l.send(),a.a={name:"el-main",data:function(){return v},components:{bCard:u.a}}},k0Yb:function(t,a){},kJiG:function(t,a,n){"use strict";var e=n("9NuQ");a.a=e.a},ltot:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={render:e,staticRenderFns:s};a.a=i},r15W:function(t,a,n){"use strict";function e(t){n("u54A")}var s=n("xKc6"),i=n("VU/8"),r=e,c=i(s.a,null,!1,r,null,null);a.a=c.exports},u54A:function(t,a){},vkIy:function(t,a){},wmAo:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{attrs:{id:"navbar"}},[e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{href:"#"},on:{click:function(a){t.sceen="proj"}}},[t._v("Kagami Neko Club")]),t._v(" "),e("b-nav-text",[t._v(t._s(t.message))]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{href:"#"},on:{click:function(a){t.sceen="about"}}},[t._v("About")]),t._v(" "),e("b-nav-item",{attrs:{href:"https://github.com/kagamiNekoClub",target:"_blank"}},[t._v("GitHub")])],1)],1)],1),t._v(" "),e("img",{attrs:{src:n("7Otq")}})],1),t._v(" "),e("div",{attrs:{id:"body"}},[e("audio",{attrs:{src:t.bgMusic,preload:"auto",autoplay:"autoplay",loop:"true"}}),t._v(" "),"proj"==t.sceen?e("div",{staticClass:"proj"},[e("h3",{attrs:{align:"left"}},[t._v("Projects")]),t._v(" "),e("hr",{attrs:{color:"#987cb9",size:"3"}}),t._v(" "),e("b-card-group",{staticClass:"proj",attrs:{deck:""}},[e("b-card",{staticClass:"mb-3",staticStyle:{"max-width":"30rem"},attrs:{title:"雾海世界","img-src":t.ais,"img-alt":"AIS","img-top":"",tag:"article",align:"left"}},[e("p",{staticClass:"card-text"},[t._v("\n            在雾海世界中，万物万事皆由信息构成：事物的形状、颜色、气味、触感、温度、声音……\n          ")]),t._v(" "),e("b-link",{staticClass:"card-link",attrs:{href:t.doc,target:"_blank"}},[t._v("规则书")]),t._v(" "),e("b-link",{staticClass:"card-link",attrs:{href:"https://github.com/kagamiNekoClub/AllInSecretDataSchema",target:"_blank"}},[t._v("Data Schema")])],1)],1)],1):t._e(),t._v(" "),"about"==t.sceen?e("div",{staticClass:"proj"},[e("h3",{attrs:{align:"left"}},[t._v("About")]),t._v(" "),e("hr",{attrs:{color:"#987cb9",size:"3"}}),t._v(" "),e("b-container",[e("p",{staticClass:"about-text"},[t._v("\n          有小姐姐的地方，就有拜小姐姐的人；而拜小姐姐的多了，便有了拜小姐姐神教。\n        ")])])],1):t._e()]),t._v(" "),"proj"==t.sceen?e("div",{attrs:{id:"footer"}},[e("h6",{staticClass:"footer-text"},[t._v(t._s(t.footer))])]):e("div",{staticClass:"fixed-bottom"},[e("h6",{staticClass:"footer-text"},[t._v(t._s(t.footer))])])])},s=[],i={render:e,staticRenderFns:s};a.a=i},xJD8:function(t,a,n){"use strict";a.a={name:"app"}},xKc6:function(t,a,n){"use strict";var e=n("E9Zr");a.a=e.a},zEGg:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.85fc1e1d499cc1068a13.js.map