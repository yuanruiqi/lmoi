import{o as n,e as a,f as r,d as B,z as I,x as F,h as e,E as C,S as T,j as c,F as g,C as E,B as w,g as h,w as y,l as j,V as R,k,T as L,R as S,U as Y,m as V,W as J}from"./index.67eb15ce.js";import{a as U,C as G}from"./c-table.6e0b98ba.js";import{_ as D}from"./user-link.444a444a.js";import{_ as H}from"./cf-rating-color.414e072d.js";import{l as P}from"./load.b9090f49.js";import{_ as X}from"./at-rating-color.2e6a2307.js";const q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Q=r("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",fill:"currentColor"},null,-1),Z=[Q];function tt(t,d){return n(),a("svg",q,Z)}var et={name:"mdi-refresh",render:tt};const nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},st=r("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z",fill:"currentColor"},null,-1),at=[st];function rt(t,d){return n(),a("svg",nt,at)}var ot={name:"mdi-star",render:rt};const lt={class:"space-left"},it={key:1},ct=B({props:{author:null},setup(t){const d=t,{author:s}=I(d),o=F(()=>{var x,u;return(u=(x=s==null?void 0:s.value)==null?void 0:x.teamUrl)!=null?u:""}),m=()=>{o.value!==""&&window.open(o.value,"_blank")};return(x,u)=>e(C)(e(s).teamName)?(n(),a(g,{key:0},[r("div",null,[r("span",{class:T(e(o)!==""&&"cursor-pointer"),onClick:m},c(e(s).teamName),3)]),r("div",lt,[(n(!0),a(g,null,E(e(s).members,(p,A)=>(n(),w(D,{class:T(A>0&&"ml-2"),key:p,name:p},null,8,["class","name"]))),128))])],64)):(n(),a("span",it,c(e(s).members[0]),1))}});var ut=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"]],"data":[{"n":"a","h":"a","r":3803},{"n":"\u7136\u7136","h":"whywhy666","r":2020},{"n":"\u9648\u9646\u6D0B","h":"_XL4453_","r":1822},{"n":"Primo Pan","h":"primojaypan","r":2151},{"n":"\u6D2A\u5929\u50B2","h":"RED_SKY","r":777},{"n":"\u9646\u91CD\u7FBD","h":"lcy921","r":0},{"n":"\u90ED\u632F\u8F69","h":"gzx20210226","r":753},{"n":"\u9648\u5316\u4E4B","h":"little_bird","r":0}]}');const z=P(ut),dt=new Map(z.map(t=>[t.h,t.n])),mt=new Map(z.map(t=>[t.h,t.r]));function Xt(t){var d;return(d=dt.get(t))!=null?d:t}function K(t){return mt.get(t)}const ht={class:"space-left"},ft=["href"],pt={class:"space-left"},_t=["href"],vt={key:2},gt=B({props:{author:null},setup(t){return(d,s)=>e(C)(t.author.teamName)&&t.author.members.length<=1?(n(),a(g,{key:0},[h(D,{name:t.author.teamName},null,8,["name"]),r("span",ht,[(n(!0),a(g,null,E(t.author.members,(o,m)=>(n(),a("a",{key:m,class:"ml-2",href:`https://codeforces.com/profile/${o}`,target:"_blank"},[h(e(H),{rating:e(K)(o)},{default:y(()=>[j(c(o),1)]),_:2},1032,["rating"])],8,ft))),128))])],64)):e(C)(t.author.teamName)?(n(),a(g,{key:1},[r("div",null,[h(D,{name:t.author.teamName},null,8,["name"])]),r("div",pt,[(n(!0),a(g,null,E(t.author.members,(o,m)=>(n(),a("a",{key:m,class:T(m>0&&"ml-2"),href:`https://codeforces.com/profile/${o}`,target:"_blank"},[h(e(H),{rating:e(K)(o)},{default:y(()=>[j(c(o),1)]),_:2},1032,["rating"])],10,_t))),128))])],64)):(n(),a("span",vt,c(t.author.members[0]),1))}});var bt=JSON.parse('{"keyMaps":[],"stringMaps":[["tourist","a"]],"data":[{"n":"a","h":"a","r":4023}]}');const W=P(bt);new Map(W.map(t=>[t.h,t.n]));const yt=new Map(W.map(t=>[t.h,t.r]));function kt(t){return yt.get(t)}const $t={class:"space-left"},xt=["href"],Ct={key:1},wt=B({props:{author:null},setup(t){return(d,s)=>e(C)(t.author.teamName)?(n(),a(g,{key:0},[h(D,{name:t.author.teamName},null,8,["name"]),r("span",$t,[(n(!0),a(g,null,E(t.author.members,(o,m)=>(n(),a("a",{key:m,class:"ml-2 font-bold",href:`https://atcoder.jp/users/${o}`,target:"_blank"},[h(e(X),{rating:e(kt)(o)},{default:y(()=>[j(c(o),1)]),_:2},1032,["rating"])],8,xt))),128))])],64)):(n(),a("span",Ct,c(t.author.members[0]),1))}}),Nt=r("span",null,"+",-1),Bt={key:0},Ft={key:0,class:"text-sm text-gray-400"},Tt={key:1},At={class:"text-center font-bold text-red-500"},Mt=r("span",null,"-",-1),Et=B({props:{result:null,practice:{type:Boolean}},setup(t){const d=t,{result:s}=I(d),o=F(()=>{var u,p;return(p=(u=s==null?void 0:s.value)==null?void 0:u.submissionUrl)!=null?p:""}),m=()=>{o.value!==""&&window.open(o.value,"_blank")};function x(u){function p(i){return(i<10?"0":"")+i}const A=Math.floor(u/3600),M=Math.floor(u%3600/60);return`${A}:${p(M)}`}return(u,p)=>e(s)?(n(),a(g,{key:0},[e(s).verdict===e(R).OK?(n(),a("div",{key:0,class:T(e(o)!==""&&"cursor-pointer"),onClick:m},[r("div",{class:T(["text-center","font-bold",t.practice?"text-blue-500":"text-green-500"])},[Nt,e(s).dirty?(n(),a("span",Bt,c(e(s).dirty),1)):k("v-if",!0)],2),t.practice?k("v-if",!0):(n(),a("div",Ft,[r("span",null,c(x(e(s).relativeTime)),1)]))],2)):e(s).dirty?(n(),a("div",Tt,[r("div",At,[Mt,r("span",null,c(e(s).dirty),1)])])):k("v-if",!0)],2112)):k("v-if",!0)}}),Rt={key:0,class:"mt-4 box"},Ut={key:0,class:"font-600"},Ot={key:1,class:"font-600"},Lt={class:"flex items-center"},Dt={key:0},It=B({props:{contest:null},setup(t){const d=t,{contest:s}=I(d),o=F(()=>s.value.type.startsWith("codeforces")),m=F(()=>s.value.type.startsWith("atcoder")),x=i=>i.author.participantType===S.OUT_OF_COMPETITION,u=i=>i.author.participantType===S.PRACTICE,p=i=>typeof i=="string"?i:String.fromCharCode(65+i),A=F(()=>{var i,N;return(N=(i=s.value.problems)==null?void 0:i.sort((l,b)=>{const f=typeof l.index=="string"?l.index.charCodeAt(0)-65:l.index,_=typeof b.index=="string"?b.index.charCodeAt(0)-65:b.index;return f-_}))!=null?N:[]}),M=F(()=>{var N,l,b;if(L(s.value.problems))return{standings:[],firstBlood:[]};if(L(s.value.standings))return{standings:[],firstBlood:[]};const i=Array((N=s.value.problems)==null?void 0:N.length);for(const f of s.value.standings){const _=Array((l=s.value.problems)==null?void 0:l.length);for(const v of f.submissions){const $=v.problemIndex;if(v.verdict===R.OK&&!u(f)&&(L(i[$])||i[$].relativeTime>v.relativeTime)&&(i[$]=v),L(_[$]))_[$]=v;else{const O=_[$];((b=O==null?void 0:O.verdict)!=null?b:R.FAILED)!==R.OK&&(_[$]=v)}}Reflect.set(f,"result",_)}return{standings:s.value.standings,firstBlood:i}});return(i,N)=>e(s).standings?(n(),a("div",Rt,[h(e(G),{data:e(M).standings,mobile:1023},{columns:y(({row:l})=>[h(e(U),{label:"#",align:"center",width:"4em"},{default:y(()=>[u(l)?(n(),a("span",Ot,"-")):(n(),a("span",Ut,c(l.rank),1))]),_:2},1024),h(e(U),{label:e(o)?"Handle":""},{default:y(()=>[r("div",Lt,[x(l)?(n(),w(e(ot),{key:0,class:"mr-1 text-sm text-yellow-300 inline-block"})):k("v-if",!0),r("div",null,[e(o)?(n(),w(gt,{key:0,author:l.author},null,8,["author"])):e(m)?(n(),w(wt,{key:1,author:l.author},null,8,["author"])):(n(),w(ct,{key:2,author:l.author},null,8,["author"]))])])]),_:2},1032,["label"]),h(e(U),{label:"\u89E3\u51B3",align:"center",width:"4em"},{default:y(()=>[r("span",null,c(l.solved),1)]),_:2},1024),h(e(U),{label:"\u7F5A\u65F6",align:"center",width:"4em"},{default:y(()=>[u(l)?k("v-if",!0):(n(),a("span",Dt,c(e(Y)(l.penalty).value),1))]),_:2},1024),(n(!0),a(g,null,E(e(A),(b,f)=>{var _,v;return n(),w(e(U),{key:b.index,label:p(b.index),center:"",class:T(e(C)(l)&&e(C)(e(M).firstBlood[f])&&e(C)(l.result[f])&&l.result[f].verdict===e(R).OK&&l.result[f].relativeTime<=((v=(_=e(M).firstBlood[f])==null?void 0:_.relativeTime)!=null?v:Number.MIN_SAFE_INTEGER)&&"bg-[#E0FFE4]")},{default:y(()=>[h(Et,{result:l.result[f],practice:u(l)},null,8,["result","practice"])]),_:2},1032,["label","class"])}),128))]),_:1},8,["data"])])):k("v-if",!0)}}),jt={class:"mb-4 flex items-center"},St={class:"info-box border-left"},Vt={key:0},Ht=["href"],Pt=["href"],qt=B({props:{contest:null,dynamic:{type:Boolean}},emits:["refresh"],setup(t,{emit:d}){return(s,o)=>(n(),a("div",null,[r("h2",jt,[r("span",null,c(t.contest.name),1),t.dynamic?(n(),w(e(et),{key:0,class:"ml-4 h-8 w-8 p-1 border rounded-full cursor-pointer hover:bg-light-700",onClick:o[0]||(o[0]=m=>d("refresh"))})):k("v-if",!0)]),r("div",St,[r("p",null," \u65F6\u95F4\uFF1A"+c(e(V)(t.contest.startTime).value)+" \u81F3 "+c(e(V)(t.contest.startTime+t.contest.duration).value),1),r("p",null,"\u65F6\u957F\uFF1A"+c(e(J)(t.contest.duration).value),1),r("p",null,"\u4EBA\u6570\uFF1A"+c(t.contest.participantNumber)+" \u4EBA",1),t.contest.contestUrl||t.contest.standingsUrl?(n(),a("p",Vt,[r("a",{href:t.contest.contestUrl,target:"_blank"},"\u6BD4\u8D5B\u4E3B\u9875",8,Ht),r("a",{href:t.contest.standingsUrl,target:"_blank",class:"ml-2"},"\u5B8C\u6574\u699C\u5355",8,Pt)])):k("v-if",!0)]),h(It,{contest:t.contest},null,8,["contest"])]))}});export{qt as _,Xt as f,z as h};