(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{232:function(e,t,a){e.exports={formControl:"FormsControls_formControl__Xemx7",error:"FormsControls_error__4coLq",formSummaryError:"FormsControls_formSummaryError__1clvm"}},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(32),r=a(33),o=a(35),s=a(34),i=a(0),l=a.n(i),c=a(26),u=a(6),m=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(i,t);var a=Object(s.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login/"})}}]),i}(l.a.Component);return Object(c.b)(m)(t)}},234:function(e,t,a){e.exports={item:"MyPosts_item__2FGtP",postBlock:"MyPosts_postBlock__3Tex3",posts:"MyPosts_posts__2Wu_O"}},236:function(e,t,a){"use strict";a.d(t,"b",(function(){return j})),a.d(t,"c",(function(){return A})),a.d(t,"a",(function(){return O}));var n=a(114),r=a(115),o=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols ")}},i=a(234),l=a.n(i),c=a(232),u=a.n(c),m=a(0),f=a.n(m),p=a(237),d=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,r=e.children,o=a&&n;return f.a.createElement("div",{className:u.a.formControl+" "+(o?u.a.error:" ")},f.a.createElement("div",null,r),o&&f.a.createElement("span",null,n))},v=function(e){var t=e.input,a=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return f.a.createElement(d,e,f.a.createElement("textarea",Object.assign({},t,a)))},h=function(e){var t=e.input,a=(e.meta,e.child,Object(p.a)(e,["input","meta","child"]));return f.a.createElement(d,e,f.a.createElement("input",Object.assign({},t,a)))},E=s(10),b=s(20),g=function(e,t,a,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return f.a.createElement("div",null," ",s," ",f.a.createElement(n.a,Object.assign({placeholder:e,name:t,component:a,validate:r},o)))},j=Object(r.a)({form:"ProfileAddNewPostForm"})((function(e){var t=e.handleSubmit;return f.a.createElement("form",{onSubmit:t},f.a.createElement("div",null,f.a.createElement(n.a,{name:"newPostText",component:v,validate:[o,E]})),f.a.createElement("div",null,f.a.createElement("button",{className:l.a.button}," Add post")))})),A=Object(r.a)({form:"Login"})((function(e){var t=e.handleSubmit,a=e.error;return f.a.createElement("form",{onSubmit:t},g("Email","email",h,[o],"","Login"),g("Password","password",h,[o],{type:"password"},"Password"),g(null,"rememberMe",h,null,{type:"checkbox"},"Remember me"),a&&f.a.createElement("div",{className:u.a.formSummaryError},a),f.a.createElement("div",null,f.a.createElement("button",null,"Login")),f.a.createElement("div",null,f.a.createElement("h1",null,"Test account: Email: free@samuraijs.com Password: free")))})),O=Object(r.a)({form:"dialogAddMessageForm"})((function(e){var t=e.handleSubmit;return f.a.createElement("form",{onSubmit:t},f.a.createElement("div",null,f.a.createElement(n.a,{component:v,name:"newMessageBody",placeholder:"Enter your message",validate:[o,b]})),f.a.createElement("div",null,f.a.createElement("button",{className:l.a.button},"Send")))}))},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(59);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},302:function(e,t,a){e.exports={profileBanner:"Profileinfo_profileBanner__1uNzH",profileAva:"Profileinfo_profileAva__MfD8e",descriptionBlock:"Profileinfo_descriptionBlock__2Y3PJ"}},303:function(e,t,a){e.exports=a.p+"static/media/beachparty.d4bc48c0.jpg"},304:function(e,t){e.exports="data:image/png;base64,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"},305:function(e,t,a){e.exports={item:"Post_item__3KMQp",message:"Post_message__30c_x",itembox:"Post_itembox__3aYbF"}},308:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),o=a(35),s=a(34),i=a(0),l=a.n(i),c=a(302),u=a.n(c),m=a(303),f=a.n(m),p=a(37),d=a(244),v=function(e){var t=Object(i.useState)(!1),a=Object(d.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(e.status),s=Object(d.a)(o,2),c=s[0],u=s[1];Object(i.useEffect)((function(){u(e.status)}),[e.status]);return l.a.createElement("div",null,!n&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"Set status here")),n&&l.a.createElement("div",null,l.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})))},h=a(304),E=a.n(h),b=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto;if(!t)return l.a.createElement(p.a,null);return l.a.createElement("div",{className:u.a.profileBanner},l.a.createElement("img",{src:f.a,alt:" "}),l.a.createElement("div",{className:u.a.descriptionBlock},l.a.createElement("div",{className:u.a.profileAva},l.a.createElement("img",{src:t.photos.large||E.a,className:u.a.mainPhoto,alt:" "}),l.a.createElement("div",null,r&&l.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}))),l.a.createElement(v,{status:a,updateStatus:n})))},g=a(58),j=a(26),A=a(20),O=a(234),I=a.n(O),w=a(305),y=a.n(w),P=function(e){return l.a.createElement("div",{className:y.a.item},l.a.createElement("div",null,l.a.createElement("div",{className:y.a.itembox},l.a.createElement("p",null,l.a.createElement("img",{src:"https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg",align:"top",alt:"_"})),l.a.createElement("div",null,l.a.createElement("span",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 #")," ",e.id,l.a.createElement("div",{className:y.a.itembox},l.a.createElement("span",null," \u0422\u0435\u043a\u0441\u0442: ")," ",e.message),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("button",null,l.a.createElement("span",null,"Like")),e.likes))))))},x=a(236),z=l.a.memo((function(e){l.a.createRef();var t=Object(A.a)(e.posts).reverse().map((function(e){return l.a.createElement(P,{message:e.post,likes:e.likes,id:e.id})}));return l.a.createElement("div",{className:I.a.postBlock},l.a.createElement("div",null,l.a.createElement("h3",null,"My post")),l.a.createElement("div",null,l.a.createElement(x.b,{onSubmit:function(t){e.addPost(t.newPostText)}})),l.a.createElement("div",null,t))})),G=Object(j.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(g.a)(t))}}}))(z),M=function(e){return l.a.createElement("div",null,l.a.createElement(b,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),l.a.createElement(G,null))},R=a(233),S=a(19),Q=a(6),B=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return l.a.createElement(M,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(l.a.Component);t.default=Object(S.d)(Object(j.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.f,savePhoto:g.e}),Q.f,R.a)(B)}}]);
//# sourceMappingURL=4.88297368.chunk.js.map