(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{232:function(e,t,a){e.exports={formControl:"FormsControls_formControl__Xemx7",error:"FormsControls_error__4coLq",formSummaryError:"FormsControls_formSummaryError__1clvm"}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(32),r=a(33),o=a(35),l=a(34),i=a(0),s=a.n(i),u=a(26),c=a(6),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(i,t);var a=Object(l.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login/"})}}]),i}(s.a.Component);return Object(u.b)(m)(t)}},234:function(e,t,a){e.exports={item:"MyPosts_item__2FGtP",postBlock:"MyPosts_postBlock__3Tex3",posts:"MyPosts_posts__2Wu_O"}},236:function(e,t,a){"use strict";a.d(t,"b",(function(){return _})),a.d(t,"c",(function(){return j})),a.d(t,"a",(function(){return y}));var n=a(114),r=a(115),o=function(e){if(!e)return"Field is required"},l=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols ")}},i=a(234),s=a.n(i),u=a(232),c=a.n(u),m=a(0),p=a.n(m),f=a(237),d=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=a&&n;return p.a.createElement("div",{className:c.a.formControl+" "+(o?c.a.error:" ")},p.a.createElement("div",null,r),o&&p.a.createElement("span",null,n))},b=function(e){var t=e.input,a=(e.meta,e.child,Object(f.a)(e,["input","meta","child"]));return p.a.createElement(d,e,p.a.createElement("textarea",Object.assign({},t,a)))},E=function(e){var t=e.input,a=(e.meta,e.child,Object(f.a)(e,["input","meta","child"]));return p.a.createElement(d,e,p.a.createElement("input",Object.assign({},t,a)))},v=l(10),h=l(20),g=function(e,t,a,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return p.a.createElement("div",null," ",l," ",p.a.createElement(n.a,Object.assign({placeholder:e,name:t,component:a,validate:r},o)))},_=Object(r.a)({form:"ProfileAddNewPostForm"})((function(e){var t=e.handleSubmit;return p.a.createElement("form",{onSubmit:t},p.a.createElement("div",null,p.a.createElement(n.a,{name:"newPostText",component:b,validate:[o,v]})),p.a.createElement("div",null,p.a.createElement("button",{className:s.a.button}," Add post")))})),j=Object(r.a)({form:"Login"})((function(e){var t=e.handleSubmit,a=e.error;return p.a.createElement("form",{onSubmit:t},g("Email","email",E,[o],"","Login"),g("Password","password",E,[o],{type:"password"},"Password"),g(null,"rememberMe",E,null,{type:"checkbox"},"Remember me"),a&&p.a.createElement("div",{className:c.a.formSummaryError},a),p.a.createElement("div",null,p.a.createElement("button",null,"Login")),p.a.createElement("div",null,p.a.createElement("h1",null,"Test account: Email: free@samuraijs.com Password: free")))})),y=Object(r.a)({form:"dialogAddMessageForm"})((function(e){var t=e.handleSubmit;return p.a.createElement("form",{onSubmit:t},p.a.createElement("div",null,p.a.createElement(n.a,{component:b,name:"newMessageBody",placeholder:"Enter your message",validate:[o,h]})),p.a.createElement("div",null,p.a.createElement("button",{className:s.a.button},"Send")))}))},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(59);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,t,a){e.exports={profileBanner:"Profileinfo_profileBanner__1uNzH",profileAva:"Profileinfo_profileAva__MfD8e",descriptionBlock:"Profileinfo_descriptionBlock__2Y3PJ"}},303:function(e,t,a){e.exports=a.p+"static/media/beachparty.d4bc48c0.jpg"},304:function(e,t,a){e.exports={item:"Post_item__3KMQp",message:"Post_message__30c_x",itembox:"Post_itembox__3aYbF"}},307:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),o=a(35),l=a(34),i=a(0),s=a.n(i),u=a(302),c=a.n(u),m=a(303),p=a.n(m),f=a(37),d=a(244),b=function(e){var t=Object(i.useState)(!1),a=Object(d.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.status),l=Object(d.a)(o,2),u=l[0],c=l[1];Object(i.useEffect)((function(){c(e.status)}),[e.status]);return s.a.createElement("div",null,!n&&s.a.createElement("div",null,s.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"Set status here")),n&&s.a.createElement("div",null,s.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(u)},value:u})))},E=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?s.a.createElement("div",{className:c.a.profileBanner},s.a.createElement("img",{src:p.a,alt:" "}),s.a.createElement("div",{className:c.a.descriptionBlock},s.a.createElement("div",{className:c.a.profileAva},s.a.createElement("img",{src:t.photos.large,alt:" "})),s.a.createElement(b,{status:a,updateStatus:n}))):s.a.createElement(f.a,null)},v=a(58),h=a(26),g=a(20),_=a(234),j=a.n(_),y=a(304),O=a.n(y),P=function(e){return s.a.createElement("div",{className:O.a.item},s.a.createElement("div",null,s.a.createElement("div",{className:O.a.itembox},s.a.createElement("p",null,s.a.createElement("img",{src:"https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg",align:"top",alt:"_"})),s.a.createElement("div",null,s.a.createElement("span",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 #")," ",e.id,s.a.createElement("div",{className:O.a.itembox},s.a.createElement("span",null," \u0422\u0435\u043a\u0441\u0442: ")," ",e.message),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("button",null,s.a.createElement("span",null,"Like")),e.likes))))))},S=a(236),x=s.a.memo((function(e){s.a.createRef();var t=Object(g.a)(e.posts).reverse().map((function(e){return s.a.createElement(P,{message:e.post,likes:e.likes,id:e.id})}));return s.a.createElement("div",{className:j.a.postBlock},s.a.createElement("div",null,s.a.createElement("h3",null,"My post")),s.a.createElement("div",null,s.a.createElement(S.b,{onSubmit:function(t){e.addPost(t.newPostText)}})),s.a.createElement("div",null,t))})),k=Object(h.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(v.a)(t))}}}))(x),w=function(e){return s.a.createElement("div",null,s.a.createElement(E,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),s.a.createElement(k,null))},A=a(233),N=a(19),B=a(6),M=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return s.a.createElement(w,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(s.a.Component);t.default=Object(N.d)(Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:v.d,getStatus:v.c,updateStatus:v.e}),B.f,A.a)(M)}}]);
//# sourceMappingURL=4.7bf5eb4e.chunk.js.map