(function(e){function t(t){for(var s,o,i=t[0],c=t[1],m=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,m||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},n=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var l=c;n.push(["56d7","chunk-vendors"]),r()})({"1f95":function(e,t,r){"use strict";var s=r("9562"),a=r.n(s);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],o={name:"App"},i=o,c=(r("5c0b"),r("2877")),m=Object(c["a"])(i,a,n,!1,null,null,null),l=m.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container public"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"form"},[r("Logo"),r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage))]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username or email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e.$v.form.username.$dirty?r("div",{staticClass:"field-error"},[e.$v.form.username.required?e._e():r("div",{staticClass:"error"},[e._v("Username or email address is required")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e.$v.form.password.$dirty?r("div",{staticClass:"field-error"},[e.$v.form.password.required?e._e():r("div",{staticClass:"error"},[e._v("Password is required")])]):e._e()]),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("Sign in")]),e._m(0)])],1)]),r("PageFooter")],1)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"links"},[r("p",{staticClass:"sign-up text-muted"},[e._v("Don't have an account yet? "),r("a",{staticClass:"link-sign-up",attrs:{href:"/register"}},[e._v("Sign up here")])]),r("p",[r("a",{attrs:{href:"#"}},[e._v("Forgot your password?")])])])}],v=r("b5ae"),p=r("bc3a"),g=r.n(p),h={authenticate:function(e){return new Promise((function(t,r){g.a.post("/authentications",e).then((function(e){var r=e.data;t(r)})).catch((function(e){r(e)}))}))}},_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-wrapper"},[r("img",{staticClass:"logo",attrs:{src:"/static/images/logo.png"}}),r("div",{staticClass:"tagline"},[e._v("Open source task management tool")])])}],w={name:"Logo"},$=w,C=(r("c588"),Object(c["a"])($,_,b,!1,null,"a407c62a",null)),y=C.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("span",{staticClass:"copyright"},[e._v("© 2018 TaskAgile.com")]),r("ul",{staticClass:"footer-links list-inline float-right"},[r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("About")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("Terms of Service")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"#"}},[e._v("Privacy Policy")])]),r("li",{staticClass:"list-inline-item"},[r("a",{attrs:{href:"https://github.com/edkinsgael9/TaskAgile",target:"_blank"}},[e._v("GitHub")])])])])}],L={name:"PageFooter"},j=L,O=(r("1f95"),Object(c["a"])(j,x,P,!1,null,"98b20486",null)),q=O.exports,A={name:"LoginPage",data:function(){return{form:{username:"",password:""},errorMessage:""}},components:{Logo:y,PageFooter:q},validations:{form:{username:{required:v["required"]},password:{required:v["required"]}}},methods:{submitForm:function(){var e=this;this.$v.$touch(),this.$v.$invalid||h.authenticate(this.form).then((function(){e.$router.push({name:"HomePage"})})).catch((function(t){e.errorMessage=t.message}))}}},k=A,M=(r("dc30"),Object(c["a"])(k,d,f,!1,null,"58eab2dd",null)),E=M.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container public"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"form"},[r("Logo"),r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"alert alert-danger failed"},[e._v(e._s(e.errorMessage))]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),e.$v.form.username.$dirty?r("div",{staticClass:"field-error"},[e.$v.form.username.required?e._e():r("div",{staticClass:"error"},[e._v("Username is required")]),e.$v.form.username.alphaNum?e._e():r("div",{staticClass:"error"},[e._v("Username can only contain letters and numbers")]),e.$v.form.username.minLength?e._e():r("div",{staticClass:"error"},[e._v("Username must have at least "+e._s(e.$v.form.username.$params.minLength.min)+" letters.")]),e.$v.form.username.maxLength?e._e():r("div",{staticClass:"error"},[e._v("Username is too long. It can contains maximium "+e._s(e.$v.form.username.$params.maxLength.max)+" letters.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"emailAddress"}},[e._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.emailAddress,expression:"form.emailAddress"}],staticClass:"form-control",attrs:{type:"email",id:"emailAddress"},domProps:{value:e.form.emailAddress},on:{input:function(t){t.target.composing||e.$set(e.form,"emailAddress",t.target.value)}}}),e.$v.form.emailAddress.$dirty?r("div",{staticClass:"field-error"},[e.$v.form.emailAddress.required?e._e():r("div",{staticClass:"error"},[e._v("Email address is required")]),e.$v.form.emailAddress.email?e._e():r("div",{staticClass:"error"},[e._v("This is not a valid email address")]),e.$v.form.emailAddress.maxLength?e._e():r("div",{staticClass:"error"},[e._v("Email address is too long. It can contains maximium "+e._s(e.$v.form.emailAddress.$params.maxLength.max)+" letters.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e.$v.form.password.$dirty?r("div",{staticClass:"field-error"},[e.$v.form.password.required?e._e():r("div",{staticClass:"error"},[e._v("Password is required")]),e.$v.form.password.minLength?e._e():r("div",{staticClass:"error"},[e._v("Password is too short. It can contains at least "+e._s(e.$v.form.password.$params.minLength.min)+" letters.")]),e.$v.form.password.maxLength?e._e():r("div",{staticClass:"error"},[e._v("Password is too long. It can contains maximium "+e._s(e.$v.form.password.$params.maxLength.max)+" letters.")])]):e._e()]),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("Create account")]),e._m(0),e._m(1)])],1)]),r("PageFooter")],1)},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"accept-terms text-muted"},[e._v("By clicking “Create account”, you agree to our "),r("a",{attrs:{href:"#"}},[e._v("terms of service")]),e._v(" and "),r("a",{attrs:{href:"#"}},[e._v("privacy policy")]),e._v(".")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-center text-muted"},[e._v("Already have an account? "),r("a",{attrs:{href:"/login"}},[e._v("Sign in")])])}],S={register:function(e){return new Promise((function(t,r){g.a.post("/registrations",e).then((function(e){var r=e.data;t(r)})).catch((function(e){r(e)}))}))}},U={name:"RegisterPage",data:function(){return{form:{username:"",emailAddress:"",password:""},errorMessage:""}},components:{Logo:y,PageFooter:q},validations:{form:{username:{required:v["required"],minLength:Object(v["minLength"])(2),maxLength:Object(v["maxLength"])(50),alphaNum:v["alphaNum"]},emailAddress:{required:v["required"],email:v["email"],maxLength:Object(v["maxLength"])(100)},password:{required:v["required"],minLength:Object(v["minLength"])(6),maxLength:Object(v["maxLength"])(30)}}},methods:{submitForm:function(){var e=this;this.$v.$touch(),this.$v.$invalid||S.register(this.form).then((function(){e.$router.push({name:"LoginPage"})})).catch((function(t){e.errorMessage="Failed to register user. Reason: "+(t.message?t.message:"Unknown")+"."}))}}},T=U,I=(r("609d"),Object(c["a"])(T,F,N,!1,null,"1980416e",null)),R=I.exports;s["a"].use(u["a"]);var D=[{path:"/login",name:"LoginPage",component:E},{path:"/register",name:"RegisterPage",component:R}],H=new u["a"]({mode:"history",base:"/",routes:D}),J=H,B=r("2f62");s["a"].use(B["a"]);var G=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=r("1dce"),K=r.n(z);g.a.defaults.baseURL="/api",g.a.defaults.headers.common.Accept="application/json",g.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),s["a"].use(K.a),s["a"].config.productionTip=!1,new s["a"]({router:J,store:G,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),a=r.n(s);a.a},"609d":function(e,t,r){"use strict";var s=r("c9f1"),a=r.n(s);a.a},9562:function(e,t,r){},"9c0c":function(e,t,r){},c588:function(e,t,r){"use strict";var s=r("e8c2"),a=r.n(s);a.a},c9f1:function(e,t,r){},dc30:function(e,t,r){"use strict";var s=r("fd10"),a=r.n(s);a.a},e8c2:function(e,t,r){},fd10:function(e,t,r){}});
//# sourceMappingURL=app.3f907339.js.map