(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var s=n(4),c=n(1),o=n(14),i=n.n(o),r=n(11),a=n(5),l=Object(c.createContext)(null),d=(n(51),{black:"#363636",white:"#F8F8F8",grey:"#EBEBEB",blue:"#3F87EA"}),u=n(61),j=n(2),b=function(e){return e.user?Object(j.jsxs)("div",{className:"me-3",children:[Object(j.jsx)(r.b,{to:"/user/".concat(e.user.id),children:Object(j.jsx)(u.a,{type:"button",variant:"outline-primary",size:"lg",className:"me-5 ms-5",children:e.user.username})}),Object(j.jsx)(u.a,{type:"button",variant:"outline-primary",size:"lg",onClick:function(){localStorage.removeItem("user"),e.setUser(null)},children:"Log Out"})]}):Object(j.jsxs)("div",{className:"me-3",children:[Object(j.jsx)(r.b,{to:"/login",children:Object(j.jsx)(u.a,{type:"button",variant:"outline-primary",size:"lg",className:"me-5 ms-5",children:"Log in"})}),Object(j.jsx)(r.b,{to:"/signup",children:Object(j.jsx)(u.a,{type:"button",variant:"outline-primary",size:"lg",children:"Sign Up"})})]})},h=function(e){var t=Object(c.useContext)(l),n=t.user,s=t.setUser;return Object(j.jsxs)("nav",{style:{backgroundColor:d.black},className:"navbar navbar-dark navbar-expand-lg justify-content-between align-items-center shadow",children:[Object(j.jsx)("h3",{style:{fontSize:40,color:d.white},className:"navbar-brand m-3 ms-2 ",children:Object(j.jsx)(r.b,{to:"/",className:"text-decoration-none text-white border-end  p-3",children:"Sound.io"})}),Object(j.jsx)(b,{user:n,setUser:s})]})},m=n(64),p=function(e){var t=Object(c.useState)(!0),n=Object(s.a)(t,2),o=n[0],i=n[1];return Object(j.jsx)(m.a,{className:"position-relative container opacity-75",show:o,variant:"secondary",onClose:function(){return i(!1)},dismissible:!0,children:Object(j.jsx)(m.a.Heading,{children:"".concat(e.head," ").concat(e.notif)})})},O=function(e){return e.notifs?Object(j.jsx)("div",{className:"position-absolute top-50 ms-5",children:Object.keys(e.notifs).map((function(t){return Object(j.jsx)(p,{head:t,notif:e.notifs[t][0]},t)}))}):null},f=n(27),x=n.n(f),g=n(38),y=n(45),v=function(e){var t=Object(c.useState)(e.likes),n=Object(s.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)(!1),l=Object(s.a)(a,2),d=l[0],u=l[1],b=Object(c.useState)(null),h=Object(s.a)(b,2),m=h[0],p=h[1],O=e.setLoading,f=e.song,v=e.currUser;Object(c.useEffect)((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://sound-io-backend.herokuapp.com/api/already_liked",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({id:f.id,liker_id:v.id})}).then((function(e){return e.json()})).then((function(e){e.length>0&&(u(!0),p(e[0])),O(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O,v.id,f.id]);return Object(j.jsxs)("div",{className:"px-2",style:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(j.jsx)("h2",{className:"mb-1 me-2",children:o}),Object(j.jsx)(y.a,{className:"mb-2",style:{fontSize:40,cursor:"pointer",color:d?"#087cfc":"#302c34",marginRight:60},onClick:function(){var t={like:{type:"Song",liker_id:e.currUser.id,id:e.song.id}};d?(fetch("https://sound-io-backend.herokuapp.com/likes/".concat(m.id),{method:"DELETE"}),u(!1),i((function(e){return e-1}))):(fetch("https://sound-io-backend.herokuapp.com/likes",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return p(e)})),u(!0),i((function(e){return e+1})))}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("h4",{children:Object(j.jsx)(r.b,{className:"text-secondary text-decoration-none",to:"/user/".concat(e.user.id),children:e.user.username})})]})]})},S=n(24),k=function(e){var t=Object(c.useContext)(l).user;return Object(j.jsx)("div",{className:"card container w-75 mt-4",style:{backgroundColor:d.white},children:Object(j.jsxs)("div",{className:"p-4",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(j.jsx)("div",{children:Object(j.jsx)(v,{song:e.song,title:e.song.title,user:e.song.user,currUser:t,likes:e.song.likes,setLoading:e.setLoading})}),Object(j.jsx)("audio",{controls:!0,style:{width:650},controlsList:"nodownload",children:Object(j.jsx)("source",{src:e.song.media,type:"audio/mp3"})}),t.id===e.song.user.id?Object(j.jsx)(S.b,{style:{fontSize:40,cursor:"pointer"},onClick:function(){fetch("https://sound-io-backend.herokuapp.com/songs/".concat(e.song.id),{method:"DELETE"}),e.setPosts((function(t){return t.filter((function(t){return t.id!==e.song.id}))}))}}):null]})})},N=n(62),w=n(65),C=function(e){var t=e.setSongs,n=e.setLoading;return Object(c.useLayoutEffect)((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://sound-io-backend.herokuapp.com/api/home_feed").then((function(e){return e.json()})).then((function(e){t(e),n(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)(N.a,{className:"mx-auto mt-5",style:{display:e.loading?"block":"none",width:100,height:100},animation:"grow",variant:"primary"}),Object(j.jsx)(w.a,{className:"mb-4",style:{visibility:e.loading?"hidden":"visible"},gap:4,children:e.songs.length>0?e.songs.map((function(t){return Object(j.jsx)(k,{song:t,setLoading:e.setLoading,setPosts:e.setSongs},t.id)})):Object(j.jsx)("h1",{style:{display:e.loading?"none":"block"},className:"text-center text-white mt-4",children:"No songs available."})})]})},L=function(e){return Object(j.jsx)(u.a,{type:"button",variant:"outline-primary",size:"lg",style:{position:"fixed",bottom:40,right:35},onClick:e.handleSet,children:"+ New"})},E=n(25),T=n(63),U=function(e){var t=Object(c.useState)(null),n=Object(s.a)(t,2),o=n[0],i=n[1],r=Object(c.useState)(!1),a=Object(s.a)(r,2),d=a[0],b=a[1],h=Object(c.useState)(!1),m=Object(s.a)(h,2),p=m[0],O=m[1],f=Object(c.useContext)(l).user,x=function(){e.handleSet((function(e){return!e}))};return Object(j.jsxs)(T.a,{centered:!0,show:e.show,onHide:x,children:[Object(j.jsx)(T.a.Header,{className:"p-4",closeButton:!0,children:Object(j.jsx)(T.a.Title,{children:"Upload a Song"})}),Object(j.jsx)(T.a.Body,{children:Object(j.jsxs)("form",{id:"songForm",onSubmit:function(t){if(o&&f){t.preventDefault(),O(!0);var n=t.currentTarget[0].value,s=URL.createObjectURL(o),c=new FormData;c.append("song[media]",o),c.append("song[user_id]",f.id),c.append("song[title]",n),fetch("https://sound-io-backend.herokuapp.com/songs",{method:"POST",body:c}).then((function(e){return e.json()})).then((function(t){t.user=f,t.likes=0,t.media=s,e.setSongs((function(e){return[t].concat(Object(E.a)(e))})),e.handleSet()}))}},children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"songTitle",children:"Song Title:"}),Object(j.jsx)("input",{id:"songTitle",type:"text",className:"form-control form-control-lg mt-1",required:!0})]}),Object(j.jsxs)("div",{className:"form-group mt-4",children:[Object(j.jsx)("label",{htmlFor:"songMedia",children:"Song File:"}),Object(j.jsx)("input",{id:"songMedia",type:"file",className:"form-control form-control-lg mt-1",accept:"audio/*",onChange:function(e){var t=e.currentTarget.files[0];(console.log(t),t)&&("audio"===t.type.split("/")[0]?i(t):b(!0))},required:!0,disabled:d}),Object(j.jsx)("small",{className:"mt-1",style:{display:d?"block":"none",textDecoration:"underline",cursor:"pointer"},onClick:function(){i(null),b(!1)},children:"Please select an audio file."})]})]})}),Object(j.jsxs)(T.a.Footer,{children:[Object(j.jsx)(u.a,{variant:"secondary",onClick:x,children:"Close"}),p?Object(j.jsx)(u.a,{type:"submit",variant:"primary",disabled:!0,children:"Uploading..."}):Object(j.jsx)(u.a,{type:"submit",variant:"primary",form:"songForm",children:"Upload"})]})]})},P=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),o=n[0],i=n[1],r=function(){i((function(e){return!e}))};return Object(j.jsxs)("div",{children:[o?Object(j.jsx)(U,{setSongs:e.setSongs,handleSet:r,show:o}):null,Object(j.jsx)(L,{handleSet:r})]})},_=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),o=n[0],i=n[1],r=e.setSongs;return Object(c.useEffect)((function(){o.length?fetch("https://sound-io-backend.herokuapp.com/api/song_query/?query=".concat(o)).then((function(e){return e.json()})).then((function(e){return r(e)})):fetch("https://sound-io-backend.herokuapp.com/api/home_feed").then((function(e){return e.json()})).then((function(e){r(e)}))}),[o,r]),Object(j.jsx)("div",{className:"card container mt-4",style:{width:900,display:e.loading?"none":"block"},children:Object(j.jsxs)("div",{className:"p-4 d-flex align-items-center",children:[Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg me-3",placeholder:"Search for songs...",value:o,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)(S.a,{style:{fontSize:33}})]})})},z=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),o=n[0],i=n[1],r=Object(c.useState)(!0),a=Object(s.a)(r,2),l=a[0],d=a[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(P,{setSongs:i}),Object(j.jsx)(_,{loading:l,setSongs:i}),Object(j.jsx)(C,{loading:l,setLoading:d,songs:o,setSongs:i})]})},I=function(e){var t=Object(c.useContext)(l).setUser;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"text-white w-50 text-center",style:{position:"relative",top:50},children:[Object(j.jsx)("h1",{children:Object(j.jsx)("strong",{children:"Welcome to Sound.io."})}),Object(j.jsx)("h2",{children:"Listen without limits."})]}),Object(j.jsxs)("div",{className:"card container mt-4 me-4 p-4 w-50 float-end text-center shadow-lg",children:[Object(j.jsx)("h1",{children:"Log In"}),Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s=n.currentTarget,c={user:{email:s[0].value,password:s[1].value}};fetch("https://sound-io-backend.herokuapp.com/users/sign_in",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(n){n.username?(e.setNotifs(null),localStorage.setItem("user",JSON.stringify(n)),t(n)):(e.setNotifs(null),e.setNotifs({"Error:":[n.error]}))}))},children:[Object(j.jsx)("input",{type:"email",className:"form-control form-control-lg mt-3 shadow-sm",placeholder:"Email...",required:!0}),Object(j.jsx)("input",{type:"password",className:"form-control form-control-lg mt-3 shadow-sm",placeholder:"Password...",required:!0}),Object(j.jsx)(u.a,{type:"submit",variant:"outline-primary",size:"lg",className:"me-5 ms-5 mt-4 w-50",children:"Log In"})]})]})]})},J=function(e){var t=Object(c.useContext)(l).setUser;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"text-white w-50 text-center",style:{position:"relative",top:50},children:[Object(j.jsx)("h1",{children:Object(j.jsx)("strong",{children:"Welcome to Sound.io."})}),Object(j.jsx)("h2",{children:"Listen without limits."})]}),Object(j.jsxs)("div",{className:"card container mt-4 me-4 p-4 w-50 float-end text-center shadow-lg",children:[Object(j.jsx)("h1",{children:"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s=n.currentTarget,c={user:{username:s[0].value,email:s[1].value,password:s[2].value,password_confirmation:s[3].value}};fetch("https://sound-io-backend.herokuapp.com/users",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(n){n.username?(e.setNotifs(null),localStorage.setItem("user",JSON.stringify(n)),t(n)):(e.setNotifs(null),e.setNotifs(n.errors))}))},children:[Object(j.jsx)("input",{type:"text",className:"form-control form-control-lg mt-2 shadow-sm",placeholder:"Username..."}),Object(j.jsx)("input",{type:"email",className:"form-control form-control-lg mt-3 shadow-sm",placeholder:"Email..."}),Object(j.jsx)("input",{type:"password",className:"form-control form-control-lg mt-3 shadow-sm",placeholder:"Password..."}),Object(j.jsx)("input",{type:"password",className:"form-control form-control-lg mt-3 shadow-sm",placeholder:"Password Confirmation..."}),Object(j.jsx)(u.a,{type:"submit",variant:"outline-primary",size:"lg",className:"me-5 ms-5 mt-4 w-50",children:"Sign Up"})]})]})]})},D=function(e){return Object(c.useContext)(l).user?Object(j.jsx)(e.element,{}):Object(j.jsx)(a.a,{to:"/login"})},F=function(e){return Object(c.useContext)(l).user?Object(j.jsx)(a.a,{to:"/"}):Object(j.jsx)(e.element,{setNotifs:e.setNotifs})},H=function(e){var t=Object(c.useContext)(l).user;return Object(j.jsx)("div",{className:"card container mt-4",style:{backgroundColor:d.white},children:Object(j.jsxs)("div",{className:"p-4",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(j.jsx)("div",{children:Object(j.jsx)(v,{song:e.song,title:e.song.title,user:e.song.user,currUser:t,likes:e.song.likes,setLoading:e.setLoading})}),Object(j.jsx)("audio",{controls:!0,style:{width:650},children:Object(j.jsx)("source",{src:e.song.media})}),t.id===e.song.user.id?Object(j.jsx)(S.b,{style:{fontSize:40,cursor:"pointer"},onClick:function(){fetch("https://sound-io-backend.herokuapp.com/songs/".concat(e.song.id),{method:"DELETE"}),e.setPosts((function(t){return t.filter((function(t){return t.id!==e.song.id}))}))}}):null]})})},A=function(e){var t=Object(c.useContext)(l).user;return Object(j.jsxs)("div",{className:"card container mt-4 p-4 w-75",children:[Object(j.jsx)("h1",{children:"User likes!"}),e.likedSongs.length?e.likedSongs.map((function(n){return Object(j.jsx)(H,{song:n,user:t,setLoading:e.setLoading,setPosts:e.setLiked},n.id)})):Object(j.jsx)("h2",{className:"mx-auto",children:"User has no liked posts"})]})},q=function(e){var t=Object(c.useContext)(l).user;return Object(j.jsxs)("div",{className:"card container mt-4 p-4 w-75",children:[Object(j.jsx)("h1",{children:"User posts!"}),e.createdSongs.length?e.createdSongs.map((function(n){return Object(j.jsx)(H,{song:n,user:t,setLoading:e.setLoading,setPosts:e.setCreated},n.id)})):Object(j.jsx)("h2",{className:"mx-auto",children:"User has no posts"})]})},B=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(q,{createdSongs:e.createdSongs,setCreated:e.setCreated,setLoading:e.setLoading}),Object(j.jsx)(A,{likedSongs:e.likedSongs,setLiked:e.setLiked,setLoading:e.setLoading})]})},R=n(42),M=function(e){var t=Object(a.h)().id,n=Object(c.useContext)(l).user,o=Object(c.useState)({}),i=Object(s.a)(o,2),r=i[0],d=i[1],u=Object(c.useState)(0),b=Object(s.a)(u,2),h=b[0],m=b[1],p=Object(c.useState)([]),O=Object(s.a)(p,2),f=O[0],x=O[1],g=Object(c.useState)([]),y=Object(s.a)(g,2),v=y[0],S=y[1],k=Object(c.useState)(!0),w=Object(s.a)(k,2),C=w[0],L=w[1],E=Object(c.useState)({status:!1,id:null}),T=Object(s.a)(E,2),U=T[0],P=T[1];Object(c.useEffect)((function(){fetch("https://sound-io-backend.herokuapp.com/api/fetch_user/".concat(t)).then((function(e){return e.json()})).then((function(e){d(e.user),x(e.likes),S(e.songs),m(e.follows),L(!1)})),fetch("https://sound-io-backend.herokuapp.com/api/already_following",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({followee_id:t,follower_id:n.id})}).then((function(e){return e.json()})).then((function(e){return P({status:e.status,id:e.id})}))}),[t,n]),Object(c.useEffect)((function(){console.log(U)}),[U]);var _=function(){if(U.status)fetch("https://sound-io-backend.herokuapp.com/likes/".concat(U.id),{method:"DELETE"}).then((function(e){P({status:!1,id:null}),m((function(e){return e-1}))}));else{var e={like:{id:t,liker_id:n.id,type:"User"}};fetch("https://sound-io-backend.herokuapp.com/likes",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){P({status:!0,id:e.id}),m((function(e){return e+1}))}))}};return C?Object(j.jsx)(N.a,{className:"mx-auto mt-5",style:{display:C?"block":"none",width:100,height:100},animation:"grow",variant:"primary"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"card container mt-2 p-4",children:Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(j.jsxs)("div",{children:[U.status?Object(j.jsx)(R.b,{style:{fontSize:60,cursor:"pointer"},className:"mt-2",onClick:_}):Object(j.jsx)(R.a,{style:{fontSize:60,cursor:"pointer"},className:"mt-2",onClick:_}),Object(j.jsx)("h6",{className:"m-0 ms-4",children:h})]}),Object(j.jsxs)("div",{className:"ms-3 me-5",children:[Object(j.jsxs)("h1",{className:"mb-2",children:[r.username,"'s profile!"]}),Object(j.jsxs)("small",{className:"opacity-75 ms-5",children:["Joined ",new Date(r.created_at).toDateString()]})]})]})}),Object(j.jsx)(B,{likedSongs:f,setLiked:x,createdSongs:v,setCreated:S,setLoading:L})]})},W=(n(57),n(58),function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(JSON.parse(localStorage.getItem("user"))),d=Object(s.a)(i,2),u=d[0],b=d[1];return Object(j.jsx)("div",{children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.Provider,{value:{user:u,setUser:b},children:[Object(j.jsx)(h,{}),Object(j.jsx)(O,{notifs:n,setNotifs:o}),Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.b,{exact:!0,path:"/",element:Object(j.jsx)(D,{element:z})}),Object(j.jsx)(a.b,{exact:!0,path:"/login",element:Object(j.jsx)(F,{element:I,setNotifs:o})}),Object(j.jsx)(a.b,{exact:!0,path:"/signup",element:Object(j.jsx)(F,{element:J,setNotifs:o})}),Object(j.jsx)(a.b,{exact:!0,path:"/user/:id",element:Object(j.jsx)(D,{element:M})})]})]})})})});i.a.render(Object(j.jsx)(W,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4e5413be.chunk.js.map