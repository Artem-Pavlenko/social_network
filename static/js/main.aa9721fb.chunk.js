(this.webpackJsonptraining=this.webpackJsonptraining||[]).push([[0],{100:function(e,t,n){e.exports={cssload_container:"Preloader2_cssload_container__vgANh",cssload_speeding_wheel:"Preloader2_cssload_speeding_wheel__3sDaK","cssload-spin":"Preloader2_cssload-spin__1lcPY"}},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return v}));var a=n(10),r=n.n(a),c=n(16),o=n(38),s=n(2),i=n(13),u=n(6),l=n(26),p=n(27),m={post:[{id:Object(i.a)(),comm:"It's my first post",like:5},{id:Object(i.a)(),comm:"Hello World!",like:7},{id:Object(i.a)(),comm:"React it's cool!",like:25}],profile:{aboutMe:"",contacts:{facebook:"",website:"",github:"",instagram:"",mainLink:"",twitter:"",vk:"",youtube:""},fullName:"",lookingForAJob:!1,lookingForAJobDescription:"",userId:0,photos:{large:null,small:null}},isFetching:!0,profileStatusText:"",newStatusText:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(s.a)(Object(s.a)({},e),{},{post:[{id:Object(i.a)(),comm:t.post,like:0}].concat(Object(o.a)(e.post))});case"SET_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"TOGGLE_FETCHING_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetch});case"SET_PROFILE_STATUS":return Object(s.a)(Object(s.a)({},e),{},{profileStatusText:t.status,newStatusText:t.status});case"ADD_STATUS_TEXT":return Object(s.a)(Object(s.a)({},e),{},{profileStatusText:t.status});case"ADD_PHOTO":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:{small:t.smallPhoto,large:t.largePhoto}})});case"SET_PROFILE_CHANGE":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),t.profile)});default:return e}};var f=function(e){return{type:"ADD_POST",post:e}},d=function(e){return{type:"ADD_STATUS_TEXT",status:e}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.getProfile(e);case 3:a=t.sent,n({type:"TOGGLE_FETCHING_PROFILE",isFetch:!1}),n({type:"SET_PROFILE",profile:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (getProfileThunk)",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.getStatus(e);case 3:a=t.sent,n({type:"SET_PROFILE_STATUS",status:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (getProfileStatus)",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.updateStatus(e);case 3:(a=t.sent).resultCode===u.b.Success?n(d(e)):a.resultCode!==u.b.Success&&alert(a.messages),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (upbProfileStatus)",t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.updPhotos(e);case 3:(a=t.sent).resultCode===u.b.Success&&(n((r=a.data.photos.large,c=a.data.photos.small,{type:"ADD_PHOTO",largePhoto:r,smallPhoto:c})),n(Object(p.e)(a.data.photos.small))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error in save photo: ",t.t0.message);case 10:case"end":return t.stop()}var r,c}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.e.saveProfileChange(Object(s.a)(Object(s.a)({},e),{},{userId:a().profile.profile.userId}));case 3:if((c=t.sent).resultCode!==u.b.Success){t.next=8;break}n(g(a().profile.profile.userId)),t.next=12;break;case 8:if(c.resultCode===u.b.Success){t.next=12;break}return console.log(c),c.messages.length>0?n(Object(l.a)("editProfile",{_error:c.messages})):0===c.messages.length&&c.messages[0].toLowerCase().indexOf("(contacts->facebook)")&&n(Object(l.a)("editProfile",{contacts:{facebook:c.messages[0]}})),t.abrupt("return",Promise.reject(c.messages));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("error in save edit profile: ",t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}()}},104:function(e,t,n){},115:function(e,t,n){e.exports=n.p+"static/media/fsociety-mask-549635.97f0a69e.png"},116:function(e,t,n){e.exports={itemCase:"item_itemCase__2lrPm"}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(38),r=n(2),c=n(13),o="dialogs/ADD_MESS",s=function(e){return{type:o,mess:e}},i={dialog:[{id:Object(c.a)(),name:"Artem"},{id:Object(c.a)(),name:"Dima"},{id:Object(c.a)(),name:"Goga"},{id:Object(c.a)(),name:"Alex"},{id:Object(c.a)(),name:"Vlad"},{id:Object(c.a)(),name:"Yarik"}],mess:[{id:Object(c.a)(),message:"Hello"},{id:Object(c.a)(),message:"How are you ?"},{id:Object(c.a)(),message:"What are you think about React?"},{id:Object(c.a)(),message:"=)"},{id:Object(c.a)(),message:"LOL"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{mess:[].concat(Object(a.a)(e.mess),[{id:Object(c.a)(),message:t.mess}])});default:return e}}},140:function(e,t,n){e.exports={newsWrapper:"News_newsWrapper__2__L2"}},141:function(e,t,n){},145:function(e,t){e.exports="data:image/png;base64,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"},146:function(e,t,n){e.exports=n.p+"static/media/rss.fa3b73e4.png"},175:function(e,t,n){e.exports=n(300)},18:function(e,t,n){e.exports={nav:"Navbar_nav__1Eziq",item:"Navbar_item__Tjs_K",active:"Navbar_active__2NWGZ"}},180:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return g}));var a=n(10),r=n.n(a),c=n(16),o=n(2),s=n(6),i=n(26),u={data:{id:null,login:null,email:null},messages:[],resultCode:1,isAuth:!1,photo:null,captchaURL:null};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTHORIZATION":return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.data),{},{isAuth:!0});case"auth/SET_TOGGLE_HEADER":return Object(o.a)(Object(o.a)({},e),{},{data:{email:null,login:null,id:null},messages:[],isAuth:t.isFetch});case"auth/SET_PHOTO":return Object(o.a)(Object(o.a)({},e),{},{photo:t.photo});case"auth/SET_ERROR_MESS":return Object(o.a)(Object(o.a)({},e),{},{messages:[t.messages]});case"auth/SET_CAPTCHA_IMG":return Object(o.a)(Object(o.a)({},e),{},{captchaURL:t.captcha});default:return e}};var l=function(e){return{type:"auth/SET_TOGGLE_HEADER",isFetch:e}},p=function(e){return{type:"auth/SET_PHOTO",photo:e}},m=function(e){return{type:"auth/SET_CAPTCHA_IMG",captcha:e}},f=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c.authMe();case 3:if((n=e.sent).resultCode!==s.b.Success){e.next=13;break}return t(l(!1)),t({type:"auth/SET_AUTHORIZATION",data:n}),e.next=9,s.e.getProfile(n.data.id);case 9:a=e.sent,t(p(a.photos.small)),e.next=14;break;case 13:n.resultCode!==s.b.Success&&alert(n.messages);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (authMe)",e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o){var u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.c.login(e,t,n,a);case 3:if((u=r.sent).resultCode!==s.b.Success){r.next=8;break}o(f()),r.next=17;break;case 8:if(u.resultCode!==s.a.CaptchaIsRequired){r.next=16;break}return r.next=11,s.f.getCaptcha();case 11:l=r.sent,o(Object(i.a)("login",{_error:u.messages})),o(m(l)),r.next=17;break;case 16:u.resultCode!==s.b.Success&&o(Object(i.a)("login",{_error:u.messages}));case 17:r.next=23;break;case 19:r.prev=19,r.t0=r.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (login in authReducer)",r.t0.message),o(Object(i.a)("login",{_error:r.t0.message}));case 23:case"end":return r.stop()}}),c,null,[[0,19]])})));return function(e){return o.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.c.logout();case 3:e.sent===s.b.Success&&t(l(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\u043e\u0448\u0438\u0431\u043a\u0430 (logout in authReducer)",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p}));var a=n(33),r=n(0),c=n.n(r),o=n(64),s=n.n(o),i=n(96),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]);return n.error&&console.log(n.error),c.a.createElement("div",{className:"".concat(s.a.formControl," ").concat(n.error&&s.a.error)},c.a.createElement("div",null,c.a.createElement("textarea",Object.assign({},t,r))),c.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),o=n.touched&&n.error;return c.a.createElement("div",{className:o?s.a.error:""},c.a.createElement("div",null,c.a.createElement("input",Object.assign({type:"text"},t,r))),o&&c.a.createElement("span",null,n.error))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(i.a,{component:e,type:r,name:t,placeholder:n,validate:[a]}),o)}},300:function(e,t,n){"use strict";n.r(t);n(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(73),o=n.n(c),s=n(41),i=n(42),u=n(44),l=n(43),p=(n(180),n(11)),m=n(18),f=n.n(m),d=n(15),g=n(34),h=n.n(g),b=function(){return r.a.createElement("div",{className:h.a.wrapper},r.a.createElement("h4",{className:h.a.frTitle},"FRIEND'S"),r.a.createElement("div",{className:h.a.friendProfileBlock},r.a.createElement("div",{className:h.a.acc},r.a.createElement("img",{className:h.a.first,title:"Yaroslav Nazim",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUPeBwnoxS_N7Jz6STQ_b9MpfT4WMgSELY-A&usqp=CAU",alt:""}),r.a.createElement("p",null,"Martin")),r.a.createElement("div",{className:h.a.acc},r.a.createElement("img",{className:h.a.sec,title:"Aleksandr Buhay",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwxS30sCGi485rzab_QizqNnNty5c1FbYB7Q&usqp=CAU",alt:""}),r.a.createElement("p",null,"Bill"))))},E=function(){return r.a.createElement("div",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:f.a.active}," Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:f.a.active}," Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/dialog",activeClassName:f.a.active}," Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:f.a.active}," News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:f.a.active}," Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:f.a.active}," Settings")),r.a.createElement(b,null))},v=n(40),O=n(140),w=n.n(O);var j=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){c(n+2)}),10);return n>=400&&clearInterval(e),function(){return clearInterval(e)}}),[n]),r.a.createElement("div",{className:w.a.newsWrapper},r.a.createElement("span",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0432 \u043c\u0438\u0440\u0435"),r.a.createElement("ul",null,r.a.createElement("li",null,"news news news news news news news news news news"),r.a.createElement("li",null,"\u0418\u0437-\u0437\u0430 \u043a\u043e\u0440\u043e\u043d\u043e\u0432\u0438\u0440\u0443\u0441\u0430 ...."),r.a.createElement("li",null,"React ......."),r.a.createElement("li",null,"it it it it it it")),r.a.createElement("div",null,r.a.createElement("span",null,n)))},S=n(62),_=n.n(S),C=function(){return r.a.createElement("div",{className:_.a.musicWrapper},r.a.createElement("div",null,r.a.createElement("span",{className:_.a.titleSearch},"Search songs "),r.a.createElement("input",{className:_.a.input,type:"text"})),r.a.createElement("div",{className:_.a.playList},"You haven`t songs =*("))},T=n(141),N=n.n(T);var P=function(){return r.a.createElement("div",{className:N.a.settingsWrapper},"Settings",r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"My profile"),r.a.createElement("li",null,"Themes"),r.a.createElement("li",null,"Security"),r.a.createElement("li",null,"Exit"))))},A=n(14),k=n(10),x=n.n(k),I=n(16),y=n(38),L=n(2),U=n(6),F=function(e,t,n){return e.map((function(e){return e.id===t?Object(L.a)(Object(L.a)({},e),{},{followed:n}):e}))},R={items:[],pageSize:5,totalUsersCount:0,portionSize:10,currentPage:1,isFetching:!0,followingInProgress:{userID:[],isFetch:!1}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(L.a)(Object(L.a)({},e),{},{items:F(e.items,t.userID,!0)});case"UNFOLLOW":return Object(L.a)(Object(L.a)({},e),{},{items:F(e.items,t.userID,!1)});case"SET_USERS":return Object(L.a)(Object(L.a)({},e),{},{items:Object(y.a)(t.items)});case"SET_CURRENT_PAGE":return Object(L.a)(Object(L.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_COUNT":return Object(L.a)(Object(L.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_FETCHING":return Object(L.a)(Object(L.a)({},e),{},{isFetching:t.isFetch});case"SET_TOGGLE_FOLLOWING":return Object(L.a)(Object(L.a)({},e),{},{followingInProgress:Object(L.a)(Object(L.a)({},e.followingInProgress),{},{userID:t.isFetch?[].concat(Object(y.a)(e.followingInProgress.userID),[t.userID]):e.followingInProgress.userID.filter((function(e){return e!==t.userID}))})});default:return e}},G=function(e){return{type:"FOLLOW",userID:e}},z=function(e){return{type:"UNFOLLOW",userID:e}},W=function(e){return{type:"TOGGLE_FETCHING",isFetch:e}},B=function(e,t){return{type:"SET_TOGGLE_FOLLOWING",userID:e,isFetch:t}},M=function(){var e=Object(I.a)(x.a.mark((function e(t,n,a,r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(B(n,!0)),e.next=4,a(n);case 4:(c=e.sent).resultCode===U.b.Success?t(r(n)):c.resultCode!==U.b.Success&&alert(c.messages),t(B(n,!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("userReducer FOLLOW/UNFOLLOW: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),V=n(33),H=n(77),K=n.n(H),Z=n(115),X=n.n(Z);var q=function(e){return r.a.createElement("div",{key:e.user.id},r.a.createElement(d.b,{to:"/profile/"+e.user.id},r.a.createElement("img",{className:K.a.avatarIMG,src:null===e.user.photos.small?X.a:e.user.photos.small,alt:""})),r.a.createElement("span",null,e.isAuth&&r.a.createElement("div",null,e.user.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.unFollow(e.user.id)}},"unFollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(t){return t===e.user.id})),onClick:function(){e.follow(e.user.id)}},"Follow"))),r.a.createElement("div",null,e.user.name),r.a.createElement("div",null,e.user.status),r.a.createElement("div",null,"country: "),r.a.createElement("div",null,"cities: "))},Q=n(116),Y=n.n(Q),J=n(76),$=n(63),ee=n.n($),te=n(144),ne=n.n(te),ae=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],c=1;c<=t;c++)n.push(c);var o=Object(a.useState)(1),s=Object(v.a)(o,2),i=s[0],u=s[1],l=Math.ceil(t/e.portionSize),p=(i-1)*e.portionSize+1,m=i*e.portionSize;return r.a.createElement("div",{className:ee.a.HeaderUserBlock},r.a.createElement("div",{className:ee.a.paginator},i>1&&r.a.createElement("button",{onClick:function(){u(i-1)}},"prev"),n.filter((function(e){return e>=p&&e<=m})).map((function(t){return r.a.createElement("span",{key:t,onClick:function(){e.onPageChanged(t)},className:ne()(ee.a.pageNumber,Object(J.a)({},ee.a.selectedPage,e.currentPage===t))},t)})),l>i&&r.a.createElement("button",{onClick:function(){u(i+1)}}," next ")))},re=n(55),ce=function(e){var t=e.onPageChanged,n=e.totalUsersCount,a=e.pageSize,c=e.currentPage,o=Object(V.a)(e,["onPageChanged","totalUsersCount","pageSize","currentPage"]);return r.a.createElement("div",null,r.a.createElement(ae,{portionSize:o.portionSize,onPageChanged:t,totalItemsCount:n,pageSize:a,currentPage:c}),r.a.createElement("div",{className:K.a.PreloaderBlock},o.isFetching&&r.a.createElement(re.a,null)),o.users.map((function(e){return r.a.createElement("div",{key:e.id,className:Y.a.itemCase},r.a.createElement(q,{isAuth:o.isAuth,follow:function(){o.followUser(e.id)},unFollow:function(){o.unFollowUser(e.id)},user:e,followingInProgress:o.followingInProgress}))})))},oe=n(9),se=function(e){return e.user.items},ie=function(e){return e.user.pageSize},ue=function(e){return e.user.totalUsersCount},le=function(e){return e.user.currentPage},pe=function(e){return e.user.isFetching},me=function(e){return e.user.followingInProgress.userID},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(ce,{portionSize:this.props.portionSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,unFollowUser:this.props.unFollowUser,followUser:this.props.followUser,isAuth:this.props.isAuth})}}]),n}(r.a.Component),de=Object(oe.d)(Object(A.b)((function(e){return{users:se(e),pageSize:ie(e),totalUsersCount:ue(e),currentPage:le(e),isFetching:pe(e),followingInProgress:me(e),portionSize:e.user.portionSize,isAuth:e.auth.isAuth}}),{setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},getUsers:function(e,t){return function(){var n=Object(I.a)(x.a.mark((function n(a,r){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(W(!0)),n.next=3,U.g.getUsers(e,t);case 3:c=n.sent,a(W(!1)),a({type:"SET_USERS",items:c.items}),a({type:"SET_TOTAL_COUNT",totalCount:c.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},unFollowUser:function(e){return function(t){var n=U.d.unFollowing.bind(U.d);M(t,e,n,z)}},followUser:function(e){return function(t){var n=U.d.following.bind(U.d);M(t,e,n,G)}}}))(fe),ge=n(50),he=n.n(ge),be=n(145),Ee=n.n(be),ve=n(146),Oe=n.n(ve);var we=function(e){return r.a.createElement("header",{className:he.a.header},r.a.createElement("div",{className:he.a.network},r.a.createElement("img",{className:he.a.network,src:Oe.a,alt:""}),r.a.createElement("div",null,r.a.createElement("span",null,"dev. society"))),r.a.createElement("div",{className:he.a.loginBlock},e.isAuth?r.a.createElement("div",{className:he.a.profileLogin},r.a.createElement("div",null,r.a.createElement("span",null,e.login),r.a.createElement("button",{onClick:e.logout},"log out")),r.a.createElement("div",null,r.a.createElement("img",{src:null==e.photo?Ee.a:e.photo,alt:""}))):r.a.createElement(d.b,{to:"/login"},"Login")))},je=n(27),Se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(we,{isAuth:this.props.isAuth,login:this.props.login,photo:this.props.photo,logout:this.props.logout})}}]),n}(r.a.Component),_e=Object(A.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.data.login,photo:e.auth.photo}}),{logout:je.d})(Se),Ce=n(49),Te=n.n(Ce),Ne=n(138),Pe=n(28),Ae=n(54),ke=Object(Ae.a)(8),xe=Object(A.b)((function(e){return{captchaURL:e.auth.captchaURL}}))((function(e){var t=Object(a.useState)("password"),n=Object(v.a)(t,2),c=n[0],o=n[1],s=Ae.b&&ke;return r.a.createElement("form",{onSubmit:e.handleSubmit},Object(Pe.c)(Pe.a,"email","login",Ae.b),Object(Pe.c)(Pe.a,"password","password",s,c),r.a.createElement("input",{type:"checkbox",onChange:function(e){e.currentTarget.checked?o("text"):o("password")}}),"show password",Object(Pe.c)(Pe.a,"rememberMe","password",s,"checkbox","remember me"),e.error&&r.a.createElement("div",{className:Te.a.formSummeryError},e.error),e.captchaURL&&r.a.createElement("img",{src:e.captchaURL,alt:""}),e.captchaURL&&Object(Pe.c)(Pe.a,"captcha","captcha",Ae.b,"text"),r.a.createElement("div",{className:Te.a.btn},r.a.createElement("button",null,"Login")))})),Ie=Object(Ne.a)({form:"login"})(xe),ye=Object(A.b)((function(e){return{isAuth:e.auth.isAuth,error:e.auth.messages}}),{login:je.c})((function(e){var t=e.error,n=e.isAuth,a=e.login;return n?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement("div",{className:Te.a.login},r.a.createElement("div",{className:Te.a.loginBlock},r.a.createElement("h2",null,"L O G I N"),t.map((function(e){return r.a.createElement("span",{className:Te.a.errorSpan},e)})),r.a.createElement(Ie,{onSubmit:function(e){a(e.email,e.password,e.rememberMe,e.captcha)}})))})),Le={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIALIZED":return Object(L.a)(Object(L.a)({},e),{},{initialized:!0});default:return e}},Fe=r.a.lazy((function(){return n.e(4).then(n.bind(null,310))})),Re=r.a.lazy((function(){return n.e(3).then(n.bind(null,309))})),De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("some error"),console.log("error(window) :",e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors),this.props.initializeApp()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.setInitialize?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(_e,null),r.a.createElement(E,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(re.a,null)},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/dialog",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(p.b,{path:"/profile/:userID?",render:function(){return r.a.createElement(Re,null)}}),r.a.createElement(p.b,{path:"/news",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(p.b,{path:"/music",render:function(){return r.a.createElement(C,null)}}),r.a.createElement(p.b,{path:"/settings",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(de,null)}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(p.a,{from:"/",to:"/login"}),r.a.createElement(p.b,{render:function(){return r.a.createElement("div",null,"404 not found")}}))))):r.a.createElement(re.a,null)}}]),n}(r.a.Component),Ge=Object(oe.d)(Object(A.b)((function(e){return{setInitialize:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(je.a)());case 2:t({type:"app/SET_INITIALIZED"}),console.log("app initialize");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(De),ze=n(148),We=n(103),Be=n(137),Me=n(139),Ve=Object(oe.c)({profile:We.b,dialogs:Be.b,user:D,auth:je.b,app:Ue,form:Me.a}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,Ke=Object(oe.e)(Ve,He(Object(oe.a)(ze.a))),Ze=Ke;window._store_=Ke,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,null,r.a.createElement(A.a,{store:Ze},r.a.createElement(Ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={wrapper:"Friends_wrapper__yklG3",frTitle:"Friends_frTitle__3G8lK",friendProfileBlock:"Friends_friendProfileBlock__XRlXb",acc:"Friends_acc__3SykU"}},49:function(e,t,n){e.exports={login:"Login_login__3j9bL",loginBlock:"Login_loginBlock__3nu2v",errorSpan:"Login_errorSpan__TzkdO",formSummeryError:"Login_formSummeryError__35fbD",btn:"Login_btn__1rdNq"}},50:function(e,t,n){e.exports={header:"Header_header__2GAXu",network:"Header_network__2Hd5n",loginBlock:"Header_loginBlock__2Uvr-",profileLogin:"Header_profileLogin__2Ciej"}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"field is required !"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},55:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(100),o=n.n(c);t.a=function(){return r.a.createElement("div",{className:o.a.cssload_container},r.a.createElement("div",{className:o.a.cssload_speeding_wheel}))}},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return p}));var a,r,c=n(143),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3e79c344-389c-4379-912f-1ab506d5006c"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var s={getUsers:function(e,t){return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},i={authMe:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return o.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},logout:function(){return o.delete("/auth/login").then((function(e){return e.data.resultCode}))}},u={getCaptcha:function(){return o.get("/security/get-captcha-url").then((function(e){return e.data.url}))}},l={following:function(e){return o.post("follow/".concat(e),{}).then((function(e){return e.data}))},unFollowing:function(e){return o.delete("follow/".concat(e)).then((function(e){return e.data}))}},p={getProfile:function(e){return o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},updPhotos:function(e){var t=new FormData;return t.append("image",e),o.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfileChange:function(e){return o.put("profile",e).then((function(e){return e.data}))}}},62:function(e,t,n){e.exports={musicWrapper:"Music_musicWrapper__2sF4I",titleSearch:"Music_titleSearch__q3DE_",input:"Music_input__yQlPS",playList:"Music_playList__3GjAB"}},63:function(e,t,n){e.exports={paginator:"Paginator_paginator__3CK18",selectedPage:"Paginator_selectedPage__2lBWh",pageNumber:"Paginator_pageNumber__3RVKn"}},64:function(e,t,n){e.exports={formControl:"FormsControls_formControl__DwcWD",error:"FormsControls_error__3KUkj"}},77:function(e,t,n){e.exports={avatarIMG:"Users_avatarIMG__LgyBV"}}},[[175,1,2]]]);
//# sourceMappingURL=main.aa9721fb.chunk.js.map