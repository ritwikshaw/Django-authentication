(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(93),i=a.n(c),o=(a(104),a(105),a(27)),l=a.n(o),r=a(25),d=a(5),h=a(42),u=a(2),j=a(3),b=a(8),m=a(9),p=(a(50),"http://localhost:8000"),O=a(1),g=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:"",name:"",email:"",address:"",old_password:"",new_password:"",show1:!1,show2:!1,show3:!1,show4:!1},e.handleFetchUser=function(){_.get("".concat(p,"/api/getuser/").concat(localStorage.getItem("id"))).then((function(t){console.log(t.data),e.setState({user:t.data})})).catch((function(e){console.log(e)}))},e.handleSubmit=function(t){t.preventDefault();var a={first_name:e.state.name};_.put("".concat(p,"/api/user-name-update/").concat(localStorage.getItem("id")),a).then((function(t){e.setState({name:""}),e.setState({show1:!1}),e.handleFetchUser()})).catch((function(e){console.log(e)}))},e.handleSubmit2=function(t){t.preventDefault();var a={email:e.state.email};_.put("".concat(p,"/api/user-email-update/").concat(localStorage.getItem("id")),a).then((function(t){e.setState({email:""}),e.setState({show2:!1}),e.handleFetchUser()})).catch((function(e){console.log(e)}))},e.handleSubmit3=function(t){t.preventDefault();var a={address:e.state.address};_.put("".concat(p,"/api/user-update/").concat(localStorage.getItem("id")),a).then((function(t){e.setState({address:""}),e.setState({show3:!1}),e.handleFetchUser()})).catch((function(e){console.log(e)}))},e.handleSubmit4=function(t){t.preventDefault();var a={old_password:e.state.old_password,new_password:e.state.new_password};_.put("".concat(p,"/api/change-password/"),a).then((function(t){e.setState({old_password:"",new_password:""}),e.setState({show4:!1}),e.handleFetchUser()})).catch((function(e){console.log(e)}))},e.handleLogout=function(){localStorage.removeItem("access"),localStorage.removeItem("id"),window.location.reload()},e.handleDelete=function(){_.delete("".concat(p,"/api/user-delete/").concat(localStorage.getItem("id"))).then((function(e){localStorage.removeItem("access"),localStorage.removeItem("id"),window.location.reload()})).catch((function(e){console.log(e)}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.handleFetchUser()}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return null===localStorage.getItem("access")?Object(O.jsx)(d.a,{to:"/login"}):Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"landing-main",children:[Object(O.jsx)("h1",{children:"Profile Details"}),Object(O.jsxs)("div",{className:"landing-content",children:[Object(O.jsx)("h2",{children:"Name:"}),Object(O.jsxs)("h2",{children:[" ",this.state.user.first_name,"\xa0\xa0",Object(O.jsx)("button",{onClick:function(){return e.setState({show1:!0})},children:"edit"})]})]}),this.state.show1&&Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:["Name",Object(O.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange.bind(this)})]}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsxs)("div",{className:"landing-content",children:[Object(O.jsx)("h2",{children:"Email:"}),Object(O.jsxs)("h2",{children:[this.state.user.email,"\xa0\xa0",Object(O.jsx)("button",{onClick:function(){return e.setState({show2:!0})},children:"edit"})]})]}),this.state.show2&&Object(O.jsxs)("form",{onSubmit:this.handleSubmit2,children:[Object(O.jsxs)("label",{children:["Email",Object(O.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange.bind(this)})]}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsxs)("div",{className:"landing-content",children:[Object(O.jsx)("h2",{children:"Address:"}),Object(O.jsxs)("h2",{children:[" ",this.state.user.address,"\xa0\xa0",Object(O.jsx)("button",{onClick:function(){return e.setState({show3:!0})},children:"edit"})]})]}),this.state.show3&&Object(O.jsxs)("form",{onSubmit:this.handleSubmit3,children:[Object(O.jsxs)("label",{children:["Address",Object(O.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.handleChange.bind(this)})]}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsx)("div",{className:"landing-content",children:Object(O.jsx)("button",{onClick:function(){return e.setState({show4:!0})},children:"Reset Password"})}),this.state.show4&&Object(O.jsxs)("form",{onSubmit:this.handleSubmit4,children:[Object(O.jsxs)("label",{children:["Old password",Object(O.jsx)("input",{type:"password",name:"old_password",value:this.state.old_password,onChange:this.handleChange.bind(this)})]}),Object(O.jsxs)("label",{children:["New password",Object(O.jsx)("input",{type:"password",name:"new_password",value:this.state.new_password,onChange:this.handleChange.bind(this)})]}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsxs)("div",{className:"landing-content",children:[Object(O.jsx)("button",{onClick:this.handleDelete,children:"Delete Account"}),Object(O.jsx)("button",{onClick:this.handleLogout,children:"logout"})]})]})})}}]),a}(s.Component),x=a(48),w=a(17),f=a(94),S=a(20),v=["label"],y=function(e){var t=e.label,a=Object(f.a)(e,v),s=Object(S.d)(a),n=Object(w.a)(s,1)[0];return Object(O.jsxs)("div",{className:"mb-2",style:{margin:"5px"},children:[Object(O.jsx)("label",{htmlFor:n.name,children:t}),Object(O.jsx)("br",{}),Object(O.jsx)("input",Object(x.a)(Object(x.a)(Object(x.a)({className:"input-field"},n),a),{},{autoComplete:"off"})),Object(O.jsx)(S.a,{component:"div",name:n.name,className:"error"})]})},C=a(14);var N=function(e){var t=C.a({email:C.c().email("Email is invalid").required("Email is required"),password:C.c().min(6,"Password must be at least 6 charaters").required("Password is required")}),a=null;return e.error&&(a=Object(O.jsx)("p",{children:e.error.message})),null!==localStorage.getItem("access")?Object(O.jsx)(d.a,{to:"/"}):Object(O.jsxs)("div",{className:"login-container",children:[a,Object(O.jsx)(S.c,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:function(e){var t={email:e.email,password:e.password};l.a.post("".concat(p,"/api/login/"),t).then((function(e){console.log(e.data),localStorage.setItem("access",e.data.access),localStorage.setItem("id",e.data.id),window.location.replace("/")})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(S.b,{className:"sign-in-form",children:[Object(O.jsx)("h2",{children:"Sign in"}),Object(O.jsx)(y,{label:"EmailID",name:"email",type:"email"}),Object(O.jsx)(y,{label:"Password",name:"password",type:"password"}),Object(O.jsx)("button",{className:"btn btn-dark mt-3",type:"submit",children:"Login"}),Object(O.jsx)(r.b,{to:"/register",children:"Sign Up"})]})})}})]})};var I=function(e){var t=Object(s.useState)(!1),a=Object(w.a)(t,2),n=a[0],c=a[1],i=C.a({name:C.c().required("Email is required"),email:C.c().email("Email is invalid").required("Email is required"),password:C.c().min(6,"Password must be at least 6 charaters").required("Password is required"),re_password:C.c().oneOf([C.b("password"),null],"Password must match").required("Confirm password is required"),address:C.c().required("Email is required")});return null!==localStorage.getItem("access")?Object(O.jsx)(d.a,{to:"/"}):n?Object(O.jsx)(d.a,{to:"/login"}):Object(O.jsx)("div",{className:"login-container",children:Object(O.jsx)(S.c,{initialValues:{name:"",email:"",password:"",re_password:"",address:""},validationSchema:i,onSubmit:function(e){console.log(e.address);var t={email:e.email,first_name:e.name,password:e.password,address:e.address};l.a.post("".concat(p,"/api/register/"),t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),c(!0)},children:function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(S.b,{className:"sign-in-form",children:[Object(O.jsx)("h2",{children:"Sign up"}),Object(O.jsx)(y,{label:"Name",name:"name",type:"name"}),Object(O.jsx)(y,{label:"Email",name:"email",type:"email"}),Object(O.jsx)(y,{label:"Password",name:"password",type:"password"}),Object(O.jsx)(y,{label:"Confirm Password",name:"re_password",type:"password"}),Object(O.jsx)(y,{label:"Address",name:"address",type:"address"}),Object(O.jsx)("button",{className:"btn btn-dark mt-3",type:"submit",children:"Register"}),Object(O.jsx)(r.b,{to:"/login",children:"Login"})]})})}})})},_=l.a.create();_.interceptors.request.use((function(e){return e.headers.authorization="JWT ".concat(localStorage.getItem("access")),e}),(function(e){return Promise.reject(e)}));var q=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",component:g}),Object(O.jsx)(d.b,{exact:!0,path:"/login",component:N}),Object(O.jsx)(d.b,{exact:!0,path:"/register",component:I})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,231)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),F()},50:function(e,t,a){}},[[230,1,2]]]);
//# sourceMappingURL=main.3547e047.chunk.js.map