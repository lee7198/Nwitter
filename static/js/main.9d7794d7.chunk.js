(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(59),i=n.n(c),s=n(12),o=n(89),j=n(35),l=n(7),b=n(1),u=n.n(b),d=n(147),O=n(66),x=n(36),h=n(150),p={apiKey:"AIzaSyDDvWCBINMRDY_s7gp18quPmse0zEQT8WY",authDomain:"nwitter-a4d3b.firebaseapp.com",databaseURL:"http://nwitter-a4d3b.appspot.com",projectId:"nwitter-a4d3b",storageBucket:"nwitter-a4d3b.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/Nwitter",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDDvWCBINMRDY_s7gp18quPmse0zEQT8WY",REACT_APP_AUTH_DOMAIN:"nwitter-a4d3b.firebaseapp.com",REACT_APP_DATABASE_URL:"http://nwitter-a4d3b.appspot.com",REACT_APP_PROJECT_ID:"nwitter-a4d3b",REACT_APP_STORAGE_BUCKET:"nwitter-a4d3b.appspot.com",REACT_APP_MESSAGIN_ID:"714521856796",REACT_APP_APP_ID:"1:714521856796:web:f52f3d7ab981f06d6088d9"}).REACT_APP_MESSAGE_ID,appId:"1:714521856796:web:f52f3d7ab981f06d6088d9"},f=(Object(d.a)(p),Object(O.d)()),m=Object(x.g)(),g=Object(h.a)(),v=n(322),w=n(153),y=n.n(w),k=n(154),C=n.n(k),I=n(329),S=n(318),_=n(284),D=n(304),E=n(321),A=n(307),P=n(151),N=n.n(P),R=n(152),T=n.n(R),U=n(3),F=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],j=i[1],b=Object(a.useState)(""),d=Object(s.a)(b,2),x=d[0],h=d[1],p=Object(a.useState)(!1),m=Object(s.a)(p,2),g=m[0],w=m[1],y=Object(a.useState)(""),k=Object(s.a)(y,2),C=k[0],I=k[1],P=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&j(a)},R=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!g){e.next=10;break}if(o===x){e.next=5;break}return e.abrupt("return",I("\ube44\ubc00\ubc88\ud638 \ud655\uc778\ub780\uc774 \uc798\ubabb \ub410\uc2b5\ub2c8\ub2e4."));case 5:return e.next=7,Object(O.c)(f,n,o);case 7:e.sent,e.next=13;break;case 10:return e.next=12,Object(O.e)(f,n,o);case 12:e.sent;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),I(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(_.a,{sx:{marginTop:1,paddingBottom:1,display:"flex",flexDirection:"column",alignItems:"center"},noValidate:!0,component:"form",onSubmit:R,children:Object(U.jsxs)(S.a,{width:"100%",maxWidth:"500px",children:[Object(U.jsx)(E.a,{align:"center",children:"NWITTER"}),Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:1.5},children:Object(U.jsx)(D.a,{fullWidth:!0,label:"\uc774\uba54\uc77c",name:"email",value:n,onChange:P,required:!0})}),Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:1.5},children:Object(U.jsx)(D.a,{fullWidth:!0,label:"\ube44\ubc00\ubc88\ud638",name:"password",type:"password",value:o,onChange:P,required:!0})}),g?Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:1.5},children:Object(U.jsx)(D.a,{fullWidth:!0,label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passwordConf",type:"password",helperText:"",value:x,onChange:function(e){var t=e.target,n=t.name,a=t.value;"passwordConf"===n&&h(a)},required:!0})}):"",Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:2},children:Object(U.jsx)(v.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",children:g?"\uacc4\uc815 \uc0dd\uc131":"\ub85c\uadf8\uc778"})})]})}),Object(U.jsx)(S.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(U.jsx)(v.a,{variant:"outlined",onClick:function(){w((function(e){return!e}))},startIcon:g?Object(U.jsx)(N.a,{}):Object(U.jsx)(T.a,{}),children:g?"\ub85c\uadf8\uc778":"\uacc4\uc815 \uc0dd\uc131"})}),C?Object(U.jsx)(A.a,{severity:"error",sx:{my:3},children:function(){switch(C){case"Firebase: Error (auth/invalid-email).":return"\uc774\uba54\uc77c \uc815\ubcf4\uac00 \uc798\ubabb\ub418\uc5c8\uac70\ub098 \ube48 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4..";case"Firebase: Error (auth/internal-error).":return"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uac70\ub098 \ube48 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4.";case"Firebase: Error (auth/wrong-password).":case"Firebase: Error (auth/user-not-found).":return"\uc798\ubabb\ub41c \uc774\uba54\uc77c\uc774\ub098 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc168\uc2b5\ub2c8\ub2e4.";case"Firebase: Password should be at least 6 characters (auth/weak-password).":return"\uc785\ub825\ub41c \ube44\ubc00\ubc88\ud638\uac00 \ub108\ubb34 \uc9e7\uc2b5\ub2c8\ub2e4. (6\uc790\ub9ac \uc774\uc0c1 \uad8c\uc7a5)";case"Firebase: Error (auth/email-already-in-use).":return"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc774\uba54\uc77c \uc785\ub2c8\ub2e4.";default:return null}}()}):""]})},W=function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===t?n=new O.b:"github"===t&&(n=new O.a),e.next=3,Object(O.f)(f,n);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(I.a,{children:[Object(U.jsx)(F,{}),Object(U.jsx)(_.a,{sx:{my:2,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(U.jsxs)(S.a,{width:"100%",maxWidth:"500px",children:[Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:2},children:Object(U.jsx)(v.a,{fullWidth:!0,startIcon:Object(U.jsx)(y.a,{}),variant:"contained",onClick:function(){e("google")},style:{backgroundColor:"#fff",color:"#1976d2"},children:"Google \uacc4\uc815\uc73c\ub85c \uc2dc\uc791"})}),Object(U.jsx)(S.a,{item:!0,sx:{m:1,my:2},children:Object(U.jsx)(v.a,{fullWidth:!0,startIcon:Object(U.jsx)(C.a,{}),variant:"contained",onClick:function(){e("github")},style:{backgroundColor:"#222",color:"#fff"},children:"Github \uacc4\uc815\uc73c\ub85c \uc2dc\uc791"})})]})})]})},L=n(79),H=n(306),z=n(323),B=n(324),M=n(305),Y=n(325),q=n(166),G=n(310),K=n(316),V=n(326),J=n(327),Q=n(300),X=n(334),Z=n(335),$=n(336),ee=n(156),te=n.n(ee),ne=n(64),ae=n(165),re=n(158),ce=n.n(re),ie=n(159),se=n.n(ie),oe=n(155),je=n.n(oe),le=function(e){var t=e.nweetObj,n=e.isOwner,c=e.userObj,i=Object(a.useState)(!1),j=Object(s.a)(i,2),b=(j[0],j[1]),d=Object(a.useState)(t.text),O=Object(s.a)(d,2),h=O[0],p=O[1],f=Object(a.useState)(null),w=Object(s.a)(f,2),y=w[0],k=w[1],C=(Object(ae.a)(),function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(null),!window.confirm("\uc774 Nweet\uc744 \uc0ad\uc81c \ud560\uac74\uac00\uc694?")){e.next=8;break}return e.next=5,Object(x.e)(Object(x.f)(m,"nweets/".concat(t.id)),{});case 5:if(!t.attachmentUrl){e.next=8;break}return e.next=8,Object(ne.a)(Object(ne.d)(g,t.attachmentUrl));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),I=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(x.k)(Object(x.f)(m,"nweets/".concat(t.id)),{text:h});case 3:b(!1),P(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=r.a.useState(!1),D=Object(s.a)(S,2),A=D[0],P=D[1],N=function(){return P(!1)},R=Boolean(y),T=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("Like!!!"),e.next=4,Object(x.k)(Object(x.f)(m,"nweets/".concat(t.id)),{liker_ID:Object(x.c)(c.uid)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=!1,W=!1;if(t.liker_ID){for(var L=0;L<t.liker_ID.length;L++)t.liker_ID[L]===c.uid&&(F=!0);t.liker_ID.length>0&&(W=!0)}var ee=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Like Cancel!!"),n.preventDefault(),e.next=4,Object(x.k)(Object(x.f)(m,"nweets/".concat(t.id)),{liker_ID:Object(x.b)(c.uid)});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)("div",{children:[Object(U.jsx)(U.Fragment,{children:n&&Object(U.jsx)(H.a,{open:A,onClose:N,children:Object(U.jsx)(z.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(U.jsx)(B.a,{children:Object(U.jsx)(z.a,{children:Object(U.jsxs)(Q.a,{noValidate:!0,component:"form",onSubmit:I,sx:{py:6},direction:"column",justifyContent:"center",style:{minHeight:"30vh"},children:[Object(U.jsx)(E.a,{variant:"h5",align:"center",children:"\uc218\uc815\ud558\uae30"}),Object(U.jsx)(M.a,{value:h,onChange:function(e){var t=e.target.value;p(t)},placeholder:"Nweet \uc218\uc815",label:"Nweet \uc218\uc815",multiline:!0,rows:4,inputProps:{maxLength:120},required:!0,fullWidth:!0}),Object(U.jsxs)(Q.a,{direction:"row",justifyContent:"flex-end",spacing:2,sx:{py:2},children:[Object(U.jsx)(v.a,{onClick:N,children:"\ucde8\uc18c"}),Object(U.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",children:"\uc800\uc7a5"})]})]})})})})})}),Object(U.jsxs)(X.a,{variant:"outlined",sx:{my:4,borderRadius:"10px"},xs:6,children:[Object(U.jsx)(Z.a,{action:Object(U.jsx)(U.Fragment,{children:n&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Y.a,{size:"small","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":R?"true":void 0,onClick:function(e){k(e.currentTarget)},children:Object(U.jsx)(te.a,{fontSize:"small"})}),Object(U.jsxs)(q.a,{anchorEl:y,open:R,onClose:function(){k(null)},children:[Object(U.jsx)(G.a,{onClick:function(){P(!0),k(null)},children:"\uc218\uc815"}),Object(U.jsx)(G.a,{onClick:C,children:"\uc0ad\uc81c"})]})]})}),avatar:Object(U.jsx)(K.a,{"aria-label":"nweet",src:t.creatorImg,children:t.Nickname.substr(0,1)}),title:t.Nickname?Object(U.jsx)(o.b,{style:{color:"#000",textDecoration:"none"},to:{pathname:"/UserProfile/".concat(t.creatorId),state:{nweetObj:t,userObj:c}},children:t.Nickname}):t.creatorId,titleTypographyProps:{fontSize:"17px"},subheader:je()(t.createdAt).format("YYYY.MM.DD HH:mm"),subheaderTypographyProps:{fontSize:"13px"}}),t.attachmentUrl?Object(U.jsx)(V.a,{component:"img",height:"256",image:t.attachmentUrl}):Object(U.jsx)(_.a,{sx:{height:256}}),Object(U.jsx)(J.a,{children:Object(U.jsx)(E.a,{children:t.text})}),Object(U.jsxs)($.a,{children:[F?Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(Y.a,{onClick:ee,children:Object(U.jsx)(ce.a,{style:{color:"rgb(237, 73, 86)"}})})}):Object(U.jsx)(Y.a,{onClick:T,children:Object(U.jsx)(se.a,{})}),W?Object(U.jsxs)(E.a,{variant:"caption",children:["\uc88b\uc544\uc694 ",t.liker_ID?t.liker_ID.length:"0","\uac1c"]}):Object(U.jsx)(U.Fragment,{})]})]})]},t.id)},be=n(312),ue=n(303),de=n(302),Oe=n(313),xe=n(133),he=n.n(xe),pe=function(e){var t=e.userObj,n=(e.snackbar,Object(a.useState)("")),c=Object(s.a)(n,2),i=c[0],o=c[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),d=b[0],O=b[1],h=function(){var e=Object(l.a)(u.a.mark((function e(n){var a,r,c,s,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===d){e.next=10;break}return r=Object(ne.d)(g,"".concat(t.uid,"/").concat(Object(be.a)())),e.next=6,Object(ne.e)(r,d,"data_url");case 6:return c=e.sent,e.next=9,Object(ne.b)(c.ref);case 9:a=e.sent;case 10:return s={text:i,createdAt:Date.now(),creatorId:t.uid,Nickname:t.displayName,attachmentUrl:a,creatorImg:t.photoURL,liker_ID:[]},e.prev=11,e.next=14,Object(x.a)(Object(x.d)(m,"nweets"),s);case 14:j=e.sent,console.log("Document written with ID: ",j.id),I(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.error("Error adding document: ",e.t0);case 22:o(""),O("");case 24:case"end":return e.stop()}}),e,null,[[11,19]])})));return function(t){return e.apply(this,arguments)}}(),p=r.a.useState(!1),f=Object(s.a)(p,2),w=f[0],y=f[1],k=r.a.useState([]),C=Object(s.a)(k,2),I=(C[0],C[1],function(){y(!0)}),_=function(e,t){"clickaway"!==t&&y(!1)},E=Object(U.jsx)(r.a.Fragment,{children:Object(U.jsx)(Y.a,{size:"small","aria-label":"close",color:"inherit",onClick:_,children:Object(U.jsx)(he.a,{fontSize:"small"})})});return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(de.a,{component:"form",onSubmit:h,sx:{px:5},children:[Object(U.jsx)(D.a,{value:i,label:"nweet \uc4f0\uae30",multiline:!0,rows:4,placeholder:"\ubb34\uc2a8\uc77c\uc774\uc57c?",onChange:function(e){var t=e.target.value;o(t)},fullWidth:!0,inputProps:{maxLength:20},required:!0}),Object(U.jsxs)(S.a,{py:"1",container:!0,direction:"row",justifyContent:"space-between",alignItems:"flex-end",item:!0,sx:{my:2,height:"70px"},children:[Object(U.jsx)("div",{style:{},children:d?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("img",{src:d||"https://firebasestorage.googleapis.com/v0/b/nwitter-a4d3b.appspot.com/o/default_image.png?alt=media&token=d33ee8b0-a5ed-4876-9fbc-65282d55f00b",width:"60px",height:"60px",style:{backgroundColor:"#ddd",borderRadius:"4px"}}),Object(U.jsx)(Y.a,{onClick:function(){return O("")},size:"small",style:{position:"absolute",transform:"translate(-17px, -12px)",backgroundColor:"#fbfbfb",boxShadow:"1px 2px 4px #00000054"},children:Object(U.jsx)(he.a,{})})]}):Object(U.jsxs)(v.a,{variant:"contained",component:"label",endIcon:Object(U.jsx)(ue.a,{}),children:["Photo",Object(U.jsx)("input",{accept:"image/*",type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},hidden:!0})]})}),Object(U.jsx)(v.a,{type:"submit",variant:"contained",color:"primary",children:"Nweet"})]})]}),Object(U.jsx)(Oe.a,{open:w,autoHideDuration:3e3,onClose:_,message:"\ud83d\udc4d \uc131\uacf5\uc801\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",action:E})]})},fe=n(160),me=n.n(fe),ge=(n(209),function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){Object(x.h)(Object(x.j)(Object(x.d)(m,"nweets"),Object(x.i)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(L.a)({id:e.id},e.data())}));i(t)}))}),[]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(pe,{userObj:t}),Object(U.jsx)(S.a,{container:!0,children:c.map((function(e){return Object(U.jsx)(S.a,{xs:12,md:6,lg:4,xl:4,minHeight:"50px",sx:{px:1},children:Object(U.jsx)(me.a,{animateIn:"fadeInUp",animateOut:"bounceOutLeft",animateOnce:!0,children:Object(U.jsx)(le,{userObj:t,nweetObj:e,isOwner:e.creatorId===t.uid},e.id)})})}))})]})}),ve=n(37),we=n(98),ye=n(320),ke=function(e){var t=e.refreshUser,n=e.userObj;console.log("userObj : ",n);var c=Object(j.f)(),i=Object(a.useState)(n.displayName),o=Object(s.a)(i,2),b=o[0],d=o[1],O=Object(a.useState)(n.photoURL),x=Object(s.a)(O,2),h=(x[0],x[1],Object(a.useState)([])),p=Object(s.a)(h,2),g=p[0],v=p[1],w=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(ve.k)(Object(ve.d)(m,"nweets"),Object(ve.m)("creatorId","==",n.uid)),e.next=3,Object(ve.g)(t);case 3:e.sent.forEach((function(e){}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===b){e.next=10;break}return e.t0=we.g,e.next=5,f.currentUser;case 5:return e.t1=e.sent,e.t2={displayName:b},e.next=9,(0,e.t0)(e.t1,e.t2);case 9:t();case 10:A(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w(),Object(ve.i)(Object(ve.k)(Object(ve.d)(m,"nweets"),Object(ve.j)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(L.a)({id:e.id},e.data())}));v(t)}))}),[]);var k=Object(a.useState)(null),C=Object(s.a)(k,2),I=C[0],S=(C[1],r.a.useState(!1)),_=Object(s.a)(S,2),D=_[0],A=_[1],P=function(){return A(!1)};Boolean(I);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(H.a,{open:D,onClose:P,children:Object(U.jsx)(z.a,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(U.jsx)(B.a,{children:Object(U.jsx)(z.a,{children:Object(U.jsxs)(Q.a,{noValidate:!0,component:"form",onSubmit:y,sx:{py:6},direction:"column",justifyContent:"center",style:{minHeight:"30vh"},children:[Object(U.jsx)(E.a,{variant:"h5",align:"center",children:"\ud504\ub85c\ud544 \uc218\uc815"}),Object(U.jsx)(M.a,{value:b,onChange:function(e){var t=e.target.value;d(t)},placeholder:"\ub2c9\ub124\uc784 \uc218\uc815",label:"\ub2c9\ub124\uc784 \uc218\uc815",inputProps:{maxLength:120},fullWidth:!0}),Object(U.jsxs)(Q.a,{direction:"row",justifyContent:"flex-end",spacing:2,sx:{py:2},children:[Object(U.jsx)(ye.a,{onClick:P,children:"\ucde8\uc18c"}),Object(U.jsx)(ye.a,{type:"submit",variant:"contained",color:"primary",children:"\uc800\uc7a5"})]})]})})})})}),Object(U.jsx)(ye.a,{fullWidth:!0,onClick:function(){A(!0)},children:"\ud504\ub85c\ud544 \uc218\uc815"}),Object(U.jsx)(ye.a,{fullWidth:!0,onClick:function(){f.signOut(),c.push("/"),t()},color:"error",children:"\ub85c\uadf8\uc544\uc6c3"}),Object(U.jsx)(de.a,{sx:{pt:3,pb:2,textAlign:"center"},children:Object(U.jsx)(E.a,{variant:"h3",children:"My nweets"})}),Object(U.jsx)(de.a,{minHeight:"50px",children:g.map((function(e){return Object(U.jsx)(U.Fragment,{children:e.creatorId===n.uid?Object(U.jsx)(le,{userObj:n,nweetObj:e,isOwner:e.creatorId===n.uid},e.id):""})}))})]})},Ce=function(e){var t=e.location,n=e.match.params.userUID,r=t.state.userObj,c=t.state.nweetObj,i=Object(a.useState)([]),o=Object(s.a)(i,2),j=o[0],b=o[1],d=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(ve.k)(Object(ve.d)(m,"nweets"),Object(ve.m)("creatorId","==",r.uid)),e.next=3,Object(ve.g)(t);case 3:e.sent.forEach((function(e){}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d(),Object(ve.i)(Object(ve.k)(Object(ve.d)(m,"nweets"),Object(ve.j)("createdAt","desc")),(function(e){var t=e.docs.map((function(e){return Object(L.a)({id:e.id},e.data())}));b(t)}))}),[]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(de.a,{sx:{pt:3,pb:2,textAlign:"center"},children:Object(U.jsxs)(E.a,{variant:"h3",children:[c.Nickname,"\uc758 Nweet"]})}),Object(U.jsx)(de.a,{minHeight:"50px",children:j.map((function(e){return Object(U.jsx)(U.Fragment,{children:e.creatorId===n?Object(U.jsx)(le,{userObj:r,nweetObj:e,isOwner:e.creatorId===r.uid},e.id):""})}))})]})},Ie=n(330),Se=n(161),_e=n.n(Se),De=n(162),Ee=n.n(De),Ae=function(e){var t=e.userObj;return Object(U.jsx)(de.a,{sx:{flexGrow:1},children:Object(U.jsx)(Ie.a,{position:"fixed",children:Object(U.jsx)(z.a,{children:Object(U.jsxs)(S.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(U.jsx)(S.a,{item:!0,xs:!0,children:Object(U.jsx)(Y.a,{color:"inherit","aria-label":"home",href:"/Nwitter",children:Object(U.jsx)(_e.a,{})})}),Object(U.jsx)(S.a,{item:!0,xs:6,justifyContent:"center",children:Object(U.jsx)(E.a,{style:{textAlign:"center"},children:"NWITTER!"})}),Object(U.jsx)(S.a,{item:!0,xs:!0,children:Object(U.jsx)(de.a,{children:Object(U.jsx)(S.a,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",children:Object(U.jsx)(v.a,{href:"/Nwitter/#/profile",variant:"text",style:{color:"#fff"},endIcon:t.photoURL?Object(U.jsx)("img",{src:t.photoURL,style:{width:"1em",height:"1em",fontSize:"1.5em",borderRadius:"50%"}}):Object(U.jsx)(Ee.a,{}),children:t.displayName?t.displayName.length<=6?t.displayName:t.displayName.substring(0,6)+"...":"User"})})})})]})})})})},Pe=n(75),Ne=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(U.jsxs)(o.a,{children:[n&&Object(U.jsx)(de.a,{children:Object(U.jsx)(Ae,{userObj:a})}),Object(U.jsx)(j.c,{children:n?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Pe.a,{children:Object(U.jsx)("meta",{name:"theme-color",content:"#1976d2"})}),Object(U.jsx)(j.a,{exact:!0,path:"/",children:Object(U.jsx)(ge,{userObj:a})}),Object(U.jsx)(j.a,{path:"/profile",children:Object(U.jsx)(ke,{userObj:a,refreshUser:t})}),Object(U.jsx)(j.a,{path:"/UserProfile/:userUID/",component:Ce})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Pe.a,{children:Object(U.jsx)("meta",{name:"theme-color",content:"#fff"})}),Object(U.jsx)(j.a,{exact:!0,path:"/",children:Object(U.jsx)(W,{})})]})})]})},Re=n(317),Te=n(328);n(210);var Ue=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),o=(i[0],i[1],Object(a.useState)(null)),j=Object(s.a)(o,2),l=j[0],b=j[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){b(e?{displayName:e.displayName,uid:e.uid,photoURL:e.photoURL,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(U.jsx)(z.a,{children:Object(U.jsx)(de.a,{sx:{height:"100%",minHeight:"550px"},children:n?Object(U.jsx)(de.a,{sx:{mt:12},children:Object(U.jsx)(Ne,{refreshUser:function(){var e=f.currentUser;b({displayName:e.displayName,uid:e.uid,photoURL:e.photoURL})},isLoggedIn:Boolean(l),userObj:l})}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Pe.a,{children:Object(U.jsx)("meta",{name:"theme-color",content:"#1976d2"})}),Object(U.jsx)(Re.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{justifyContent:"center",minHeight:"100vh"},children:Object(U.jsx)(Re.a,{item:!0,xs:6,children:Object(U.jsx)(Te.a,{size:80})})})]})})})};i.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(Pe.b,{children:Object(U.jsx)(Ue,{})})}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.9d7794d7.chunk.js.map