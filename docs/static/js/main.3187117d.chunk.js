(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(340)},338:function(e,t,n){},340:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(23),i=n.n(r),c=n(20),o=(n(154),n(138)),l=n.n(o),s=n(10),u=n(60),p=n.n(u),m=n(116),d=n.n(m),h=n(58),g=n.n(h),b=n(117),E=n.n(b),f=n(16),v=n.n(f),A=n(118),O=n.n(A),I=function(e){var t=e.actionItems,n=e.classes,r=e.navigationClick,i=e.navigationIcon,c=e.title;return a.createElement(d.a,{color:"default",position:"static"},a.createElement(E.a,null,a.createElement(g.a,{className:n.navigationButton,color:"inherit",onClick:r},i||a.createElement(O.a,null)),a.createElement(v.a,{className:n.title,color:"inherit",noWrap:!0,variant:"h6"},c),t&&t.length>0&&a.createElement("div",{className:n.actionItems},t.map(function(e,t){var n=e.click,r=e.icon;return a.createElement(g.a,{color:"inherit",key:t,onClick:n},r)}))))};I.defaultProps={actionItems:void 0,navigationIcon:void 0};var k=I,y=Object(s.withStyles)(function(e){return{actionItems:{flexShrink:0,marginRight:-1.5*e.spacing.unit},navigationButton:{marginLeft:-1.5*e.spacing.unit,marginRight:2.5*e.spacing.unit},title:{flexGrow:1}}})(k),C=n(59),S=n.n(C),j=n(119),P=n.n(j),F=n(62),w=n.n(F),N=n(26),R=n.n(N),B=n(63),_=n.n(B),D=n(27),T=n.n(D),x=function(e){var t=e.apiKey,n=e.authDomain,r=e.buttonIcon,i=e.buttonTitle,c=e.classes,o=e.className,l=e.databaseUrl,s=e.handleInputChange,u=e.handleSubmit,p=e.messagingSenderId,m=e.projectId,d=e.redirectRefreshTokenPlaceholder,h=e.redirectUrl,g=e.signInOptionEmail,b=e.signInOptionGithub,E=e.signInOptionGoogle,f=e.storageBucket,A=e.title;return a.createElement("form",{className:[c.root,o].join(" "),onSubmit:u},a.createElement(R.a,{className:c.paper},a.createElement(T.a,{fullWidth:!0,label:"Title",margin:"normal",name:"title",onChange:s,value:A,variant:"outlined"})),a.createElement(R.a,{className:c.paper},a.createElement(v.a,{variant:"h6"},"Redirect"),a.createElement(T.a,{fullWidth:!0,label:"URL",margin:"normal",name:"redirectUrl",onChange:s,value:h,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Refresh token placeholder",margin:"normal",name:"redirectRefreshTokenPlaceholder",onChange:s,value:d,variant:"outlined"})),a.createElement(R.a,{className:c.paper},a.createElement(v.a,{variant:"h6"},"Firebase: configuration"),a.createElement(T.a,{fullWidth:!0,label:"API key",margin:"normal",name:"apiKey",onChange:s,value:t,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Auth domain",margin:"normal",name:"authDomain",onChange:s,value:n,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Database URL",margin:"normal",name:"databaseUrl",onChange:s,value:l,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Messaging sender ID",margin:"normal",name:"messagingSenderId",onChange:s,value:p,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Project ID",margin:"normal",name:"projectId",onChange:s,value:m,variant:"outlined"}),a.createElement(T.a,{fullWidth:!0,label:"Storage bucket",margin:"normal",name:"storageBucket",onChange:s,value:f,variant:"outlined"})),a.createElement(R.a,{className:c.paper},a.createElement(v.a,{variant:"h6"},"Firebase: sign in options"),a.createElement(P.a,null,a.createElement(w.a,{control:a.createElement(_.a,{checked:g,name:"signInOptionEmail",onChange:s}),label:"Email"}),a.createElement(w.a,{control:a.createElement(_.a,{checked:b,name:"signInOptionGithub",onChange:s}),label:"GitHub"}),a.createElement(w.a,{control:a.createElement(_.a,{checked:E,name:"signInOptionGoogle",onChange:s}),label:"Google"}))),a.createElement("div",{className:c.buttonContainer},a.createElement(S.a,{color:"primary",type:"submit",variant:"extended"},r(c.buttonIcon),i)))},U=n(64),L=n(42),W=n(9),G=n(121),M=n.n(G),H=Object(W.a)(Object(W.e)(function(e){var t=e.initial;return{apiKey:t&&t.config.apiKey||"",authDomain:t&&t.config.authDomain||"",databaseUrl:t&&t.config.databaseURL||"",messagingSenderId:t&&t.config.messagingSenderId||"",projectId:t&&t.config.projectId||"",redirectRefreshTokenPlaceholder:t&&t.redirect.refreshTokenPlaceholder||"%refreshToken%",redirectUrl:t&&t.redirect.url||"",signInOptionEmail:!!t&&t.signInOptions.indexOf("email")>=0,signInOptionGithub:!!t&&t.signInOptions.indexOf("github")>=0,signInOptionGoogle:!!t&&t.signInOptions.indexOf("google")>=0,storageBucket:t&&t.config.storageBucket||"",title:t&&t.title||""}},{handleInputChange:function(){return function(e){var t=e.target,n=t.checked,a=t.name,r=t.type,i=t.value;return Object(L.a)({},a,"checkbox"===r?n:i)}}}),Object(W.c)({handleSubmit:function(e){var t=e.apiKey,n=e.authDomain,a=e.databaseUrl,r=e.messagingSenderId,i=e.onSubmit,c=e.projectId,o=e.redirectRefreshTokenPlaceholder,l=e.redirectUrl,s=e.signInOptionEmail,u=e.signInOptionGithub,p=e.signInOptionGoogle,m=e.storageBucket,d=e.title;return function(e){e.preventDefault(),i({config:{apiKey:t,authDomain:n,databaseURL:a,messagingSenderId:r,projectId:c,storageBucket:m},id:M()(),redirect:{refreshTokenPlaceholder:o,url:l},signInOptions:[].concat(Object(U.a)(s?["email"]:[]),Object(U.a)(u?["github"]:[]),Object(U.a)(p?["google"]:[])),title:d})}}})),V=Object(s.withStyles)(function(e){return{buttonContainer:{textAlign:"center"},buttonIcon:{marginRight:e.spacing.unit},paper:{marginBottom:3*e.spacing.unit,padding:3*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit},root:{maxWidth:"100%"}}})(H(x)),z=function(e){var t=e.classes,n=e.handleBackClick,r=e.onSubmit;return a.createElement(a.Fragment,null,a.createElement(y,{navigationClick:n,title:"Create Firebase app"}),a.createElement("div",{className:t.root},a.createElement(V,{className:t.form,buttonIcon:function(e){return a.createElement(p.a,{className:e})},buttonTitle:"Create app",onSubmit:r})))},K=n(33),J=function(e,t){return function(n){n({payload:{params:t,route:e},type:"NAVIGATE"})}},X=function(e){return function(t){t({payload:e,type:"FIREBASE_APP_CREATED"})}},$=function(e){return function(t){t({payload:e,type:"FIREBASE_APP_SELECTED"})}},q=n(61),Q={navigate:J},Y=function(e){return Object(W.a)(Object(c.b)(null,Q),Object(W.c)(function(){var t={};return Object.keys(e).forEach(function(n){t[n]=function(t){var a=t.navigate,r=Object(q.a)(t,["navigate"]);return function(t){var i=e[n];if("function"===typeof i){var c=i(r,t),o=c.params,l=c.route;a(l,o)}else{var s=e[n];a(s)}}}}),t}))},Z={createFirebaseApp:X,selectFirebaseApp:$},ee=Object(W.a)(Y({handleBackClick:"HOME",handleFirebaseAppNavigate:"FIREBASE_APP"}),Object(c.b)(null,Z),Object(W.c)({onSubmit:function(e){var t=e.createFirebaseApp,n=e.handleFirebaseAppNavigate,a=e.selectFirebaseApp;return function(e){t(e),a(e.id),n()}}})),te=function(e){return{alignItems:"center",display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",padding:3*e.spacing.unit}},ne=Object(s.withStyles)(function(e){return{form:{width:512},root:te(e)}})(ee(z)),ae=n(122),re=n(123),ie=n(143),ce=n(124),oe=n(144),le=n(131),se=n.n(le),ue=n(133),pe=n.n(ue),me=n(132),de=n.n(me),he=n(36),ge=n.n(he),be=(n(113),n(43)),Ee=n.n(be),fe=n(125),ve=n.n(fe),Ae=n(128),Oe=n.n(Ae),Ie=n(127),ke=n.n(Ie),ye=n(126),Ce=n.n(ye),Se=function(e){var t=e.classes,n=e.email,r=e.handleContinueClick,i=e.handleSignOutClick,c=e.name,o=e.pictureUrl;return a.createElement(ve.a,null,o&&a.createElement(Ce.a,{className:t.media,image:o,title:"User"}),a.createElement(ke.a,null,a.createElement(v.a,{gutterBottom:Boolean(c||n),variant:"h6"},"Signed in"),c&&a.createElement(v.a,null,c),n&&a.createElement(v.a,null,n)),a.createElement(Oe.a,{className:t.actions},a.createElement(Ee.a,{color:"secondary",onClick:i,size:"small"},"Sign out"),a.createElement(Ee.a,{color:"primary",onClick:r,size:"small"},"Continue")))},je=Object(W.a)(Object(W.c)({handleContinueClick:function(e){var t=e.app,n=e.appInstance;return function(){var e=n.auth().currentUser;if(!e)throw new Error("User is missing");var a,r=e.refreshToken;a=t.redirect.url.replace(t.redirect.refreshTokenPlaceholder,r),window.location=a}},handleSignOutClick:function(e){var t=e.appInstance;return function(){t.auth().signOut()}}}),Object(W.d)(function(e){var t=e.appInstance.auth().currentUser;if(!t)throw new Error("User is missing");return{email:t.email||"",name:t.displayName||"",pictureUrl:t.photoURL||""}})),Pe=Object(s.withStyles)({actions:{justifyContent:"space-between"},media:{paddingTop:"100%"}})(je(Se)),Fe=n(78),we=n.n(Fe),Ne=function(e){var t=e.classes;return a.createElement(we.a,{className:t.root},"Configured apps persisted only in this browser and nowhere else. The project is open source and available at"," ",a.createElement("a",{className:t.link,href:"https://github.com/1oginov/Firebase-Authenticator",target:"_blank",rel:"noopener noreferrer"},"GitHub"))},Re=Object(s.withStyles)(function(e){return{link:{color:e.palette.text.secondary},root:{color:e.palette.text.hint,maxWidth:52*e.spacing.unit,textAlign:"center"}}})(Ne),Be=n(129),_e=n.n(Be),De=function(e){var t=e.appInstance,n={callbacks:{signInSuccessWithAuthResult:function(){return!1}},signInOptions:e.signInOptions.map(function(e){switch(e){case"email":return ge.a.auth.EmailAuthProvider.PROVIDER_ID;case"github":return ge.a.auth.GithubAuthProvider.PROVIDER_ID;case"google":return ge.a.auth.GoogleAuthProvider.PROVIDER_ID;default:return}})};return a.createElement(_e.a,{firebaseAuth:t.auth(),uiConfig:n})},Te=Object(W.b)({componentDidCatch:function(){var e;(e=console).error.apply(e,arguments)}})(De),xe=n(130),Ue=n.n(xe),Le=function(e){var t=e.classes,n=e.text;return a.createElement("div",{className:t.root},a.createElement(Ue.a,{size:64}),a.createElement(v.a,{className:t.text,color:"textSecondary",variant:"body1"},n))},We=Object(s.withStyles)(function(e){return{root:{alignItems:"center",display:"flex",flexDirection:"column"},text:{marginTop:3*e.spacing.unit,textAlign:"center"}}})(Le),Ge=function(e){function t(){var e,n;Object(ae.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(ie.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={appInstance:void 0,isAuthenticated:void 0},n}return Object(oe.a)(t,e),Object(re.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.app,n=ge.a.initializeApp(t.config);try{this.unregisterAuthObserver=n.auth().onAuthStateChanged(function(t){e.setState({isAuthenticated:Boolean(t)})})}catch(a){console.error(a)}console.log("Firebase app initialized",t.config),this.setState({appInstance:n})}},{key:"componentWillUnmount",value:function(){var e=this.props.app,t=this.state.appInstance;this.unregisterAuthObserver&&this.unregisterAuthObserver(),t&&t.delete().then(function(){return console.log("Firebase app deleted",e.config)})}},{key:"renderAuth",value:function(){var e=this.props.app,t=this.state,n=t.appInstance,r=t.isAuthenticated;return n?!1===r?a.createElement(Te,{appInstance:n,signInOptions:e.signInOptions}):!0===r?a.createElement(Pe,{app:e,appInstance:n}):a.createElement(We,{text:"Loading authentication state..."}):a.createElement(We,{text:"Initializing Firebase app..."})}},{key:"render",value:function(){var e=this.props,t=e.app,n=e.classes,r=e.handleBackClick,i=e.handleShareClick,c=e.handleUpdateClick;return a.createElement(a.Fragment,null,a.createElement(y,{actionItems:[{click:c,icon:a.createElement(se.a,null)},{click:i,icon:a.createElement(de.a,null)}],navigationClick:r,navigationIcon:a.createElement(pe.a,null),title:t.title?t.title:t.id}),a.createElement("div",{className:n.root},a.createElement("div",{className:n.authContainer},this.renderAuth()),a.createElement(v.a,{className:n.info,variant:"body1"},a.createElement("strong",null,"Firebase auth domain:")," ",t.config.authDomain),a.createElement(v.a,{className:n.info,variant:"body1"},a.createElement("strong",null,"Redirect URL:")," ",t.redirect.url),a.createElement(Re,null)))}}]),t}(a.Component),Me=Object(W.a)(Y({handleBackClick:"HOME",handleUpdateClick:"UPDATE_FIREBASE_APP"}),Object(c.b)(function(e){var t=e.currentFirebaseApp;return{app:e.firebaseApps[t]}}),Object(W.c)({handleShareClick:function(e){var t=e.app;return function(){prompt("Share this link:",function(e){var t=new URL(window.location.href);return t.search="",t.searchParams.append("firebase-app",JSON.stringify(e)),t.toString()}(t))}}})),He=Object(s.withStyles)(function(e){return{authContainer:{marginBottom:3*e.spacing.unit},info:{marginBottom:3*e.spacing.unit,textAlign:"center"},root:te(e)}})(Me(Ge)),Ve=n(79),ze=n.n(Ve),Ke=n(134),Je=n.n(Ke),Xe=n(135),$e=n.n(Xe),qe=function(e){var t=e.app,n=e.onSelect;return a.createElement(Je.a,{button:!0,onClick:function(){return n(t.id)}},a.createElement($e.a,{primary:t.title?t.title:t.id,primaryTypographyProps:{noWrap:!0}}))},Qe=function(e){var t=e.apps,n=e.classes,r=e.className,i=e.onSelect;return 0===t.length?null:a.createElement(R.a,{className:[n.paper,r].join(" ")},a.createElement(ze.a,null,t.map(function(e,t){return a.createElement(qe,{app:e,key:t,onSelect:i})})))},Ye=Object(s.withStyles)({paper:{maxWidth:"100%"}})(Qe),Ze=function(e){var t=e.classes,n=e.className;return a.createElement(v.a,{className:[t.root,n].join(" "),variant:"h4"},"Firebase Authenticator")},et=Object(s.withStyles)({root:{textAlign:"center"}})(Ze),tt=function(e){var t=e.apps,n=e.classes,r=e.handleCreateFirebaseAppClick,i=e.onSelect;return a.createElement("div",{className:n.root},a.createElement(et,{className:n.logo}),a.createElement(Ye,{apps:t,className:n.firebaseAppsList,onSelect:i}),a.createElement("div",{className:n.fabContainer},a.createElement(S.a,{color:"secondary",onClick:r,variant:"extended"},a.createElement(p.a,{className:n.fabIcon}),"Create Firebase app")),a.createElement(Re,null))},nt={selectFirebaseApp:$},at=Object(W.a)(Y({handleCreateFirebaseAppClick:"CREATE_FIREBASE_APP",handleFirebaseAppNavigate:"FIREBASE_APP"}),Object(c.b)(function(e){var t=e.firebaseApps;return{apps:Object.keys(t).map(function(e){return t[e]})}},nt),Object(W.c)({onSelect:function(e){var t=e.handleFirebaseAppNavigate,n=e.selectFirebaseApp;return function(e){n(e),t()}}})),rt=Object(s.withStyles)(function(e){return{fabContainer:{marginBottom:3*e.spacing.unit,textAlign:"center"},fabIcon:{marginRight:e.spacing.unit},firebaseAppsList:{marginBottom:3*e.spacing.unit},logo:{marginBottom:5*e.spacing.unit,marginTop:2*e.spacing.unit},root:te(e)}})(at(tt)),it=n(137),ct=n.n(it),ot=n(136),lt=n.n(ot),st=function(e){var t=e.app,n=e.classes,r=e.handleBackClick,i=e.handleDeleteClick,c=e.onSubmit;return a.createElement(a.Fragment,null,a.createElement(y,{navigationClick:r,title:"Update Firebase app"}),a.createElement("div",{className:n.root},a.createElement(V,{className:n.form,buttonIcon:function(e){return a.createElement(lt.a,{className:e})},buttonTitle:"Save changes",initial:t,onSubmit:c}),a.createElement("div",null,a.createElement(ct.a,{className:n.deleteDivider}),a.createElement("div",{className:n.deleteContainer},a.createElement(Ee.a,{className:n.deleteButton,onClick:i,variant:"outlined"},"Delete"),a.createElement(v.a,null,"This action cannot be undone!")))))},ut={deleteFirebaseApp:function(e){return function(t){t({payload:e,type:"FIREBASE_APP_DELETED"})}},updateFirebaseApp:function(e,t){return function(n){n({payload:Object(K.a)({},t,{id:e}),type:"FIREBASE_APP_UPDATED"})}}},pt=Object(W.a)(Y({handleBackClick:"FIREBASE_APP",handleHomeClick:"HOME"}),Object(c.b)(function(e){var t=e.currentFirebaseApp;return{app:e.firebaseApps[t]}},ut),Object(W.c)({handleDeleteClick:function(e){var t=e.app,n=e.deleteFirebaseApp,a=e.handleHomeClick;return function(){a(),n(t.id)}},onSubmit:function(e){var t=e.app,n=e.handleBackClick,a=e.updateFirebaseApp;return function(e){a(t.id,e),n()}}})),mt=Object(s.withStyles)(function(e){return{deleteButton:{color:e.palette.error.main,marginRight:2*e.spacing.unit},deleteContainer:{alignItems:"center",display:"flex"},deleteDivider:{marginBottom:2*e.spacing.unit,marginTop:3*e.spacing.unit},form:{width:512},root:te(e)}})(pt(st)),dt=function(e){var t,n=e.route,r=e.theme;switch(n){case"CREATE_FIREBASE_APP":t=a.createElement(ne,null);break;case"FIREBASE_APP":t=a.createElement(He,null);break;case"UPDATE_FIREBASE_APP":t=a.createElement(mt,null);break;default:t=a.createElement(rt,null)}return a.createElement(s.MuiThemeProvider,{theme:r},a.createElement(l.a,null),t)},ht=n(139),gt=n.n(ht),bt=n(140),Et=n.n(bt),ft={palette:{primary:gt.a,secondary:Et.a},typography:{useNextVariants:!0}},vt={createFirebaseApp:X,navigate:J,selectFirebaseApp:$},At=Object(W.a)(Object(W.d)(function(){return{theme:Object(s.createMuiTheme)(ft)}}),Object(c.b)(function(e){return{currentFirebaseApp:e.currentFirebaseApp,firebaseApps:e.firebaseApps,route:e.route}},vt),Object(W.b)({componentDidMount:function(){var e=this.props,t=e.createFirebaseApp,n=e.currentFirebaseApp,a=e.firebaseApps,r=e.navigate,i=e.selectFirebaseApp,c=function(e){var t=new URL(e).searchParams.get("firebase-app");if(t)try{return JSON.parse(t)}catch(n){console.error(n)}}(window.location.href);c&&!a[c.id]?(t(c),i(c.id),r("FIREBASE_APP")):n&&a[n]&&r("FIREBASE_APP")}}))(dt),Ot=n(44),It=n(141),kt=n.n(It),yt=n(142),Ct={currentFirebaseApp:"",firebaseApps:{},route:"HOME",routeParams:{}},St=["currentFirebaseApp","firebaseApps"];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(338);var jt=document.getElementById("container"),Pt=function(e){var t=[yt.a],n=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Ot.c)(Ot.a.apply(void 0,t),kt()(St));return Object(Ot.d)(e,n)}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAVIGATE":return Object(K.a)({},e,{route:t.payload.route,routeParams:t.payload.params?t.payload.params:{}});case"FIREBASE_APP_CREATED":case"FIREBASE_APP_UPDATED":return Object(K.a)({},e,{firebaseApps:Object(K.a)({},e.firebaseApps,Object(L.a)({},t.payload.id,t.payload))});case"FIREBASE_APP_DELETED":var n=e.firebaseApps,a=(n[t.payload],Object(q.a)(n,[t.payload]));return Object(K.a)({},e,{currentFirebaseApp:t.payload===e.currentFirebaseApp?"":e.currentFirebaseApp,firebaseApps:a});case"FIREBASE_APP_SELECTED":return Object(K.a)({},e,{currentFirebaseApp:t.payload});default:return e}});if(!jt)throw new Error("Container is missing");i.a.render(a.createElement(c.a,{store:Pt},a.createElement(At,null)),jt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,2,1]]]);
//# sourceMappingURL=main.3187117d.chunk.js.map