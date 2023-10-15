var st=Object.defineProperty;var I=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var J=(f,o,r)=>o in f?st(f,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[o]=r,L=(f,o)=>{for(var r in o||(o={}))at.call(o,r)&&J(f,r,o[r]);if(I)for(var r of I(o))nt.call(o,r)&&J(f,r,o[r]);return f};import{d as ot,G as rt,v as lt,x as ct,o as p,e as M,g as l,h as t,w as n,f as C,j as u,m as U,b as ut,E as k,B as S,l as g,H as it,k as W,I as _,J as dt}from"./index.fe0315a0.js";import{u as ft}from"./users.99210f58.js";import{C as gt,a as d}from"./c-table.5a20eda3.js";import{_ as ht}from"./user-link.dead8c0a.js";import{_ as F}from"./cf-rating-color.5b1cbf9f.js";import"./load.b9090f49.js";const mt={class:"divide-y"},_t=C("h2",{class:"mb-4"},"Codeforces",-1),Ct={class:"font-600"},bt=["href"],pt={key:0},yt=C("div",{class:"my-4 px-3"},"\u4EBA\u634F\uFF1F",-1),vt={class:"mt-4 pt-4"},Bt={class:"text-gray-400"},Et=ot({setup(f){var N,V;const o=rt(),r=String((N=o.query.sort)!=null?N:"\u6700\u8FD1\u901A\u8FC7"),z=String((V=o.query.order)!=null?V:"desc"),b=lt(ut),y=e=>e.startsWith("codeforces"),K=e=>{const m=e.submissions.filter(({type:s})=>y(s)),v=m.length,a=m.filter(({v:s})=>s===1).length,X=m.filter(({t:s})=>s>=b.value).length,Y=m.filter(({t:s,v:c})=>s>=b.value&&c===1).length,Z=e.contests.filter(({type:s,t:c})=>c>=b.value&&y(s)).length,B=m.filter(({t:s,v:c,d:i})=>s>=b.value&&c===1&&k(i)),$=B.reduce((s,c)=>{var i;return s+((i=c.d)!=null?i:0)},0),w=Math.ceil(B.length>0?$/B.length:0),H=m.filter(({v:s})=>s===1).sort((s,c)=>c.t-s.t),tt=H.length>0?H[0].t:0,D=e.handles.filter(s=>y(s.type));let q=D.length>0?D[0].handle:"",G=!1;const et=D.reduce((s,c)=>{const i=c;return k(i.codeforces)&&(G=!0),k(i.codeforces)&&i.codeforces.rating>s?(q=i.handle,i.codeforces.rating):s},0);return L({subCount:v,okCount:a,recentSubCount:X,recentOkCount:Y,recentContest:Z,recentDiffcult:$,recentAvgDiffcult:w,lastSolveTime:tt,rating:et,isRated:G,handle:q},e)},P=ct(()=>ft.map(K)),A=_(e=>e.rating),T=_(e=>e.recentOkCount),x=_(e=>e.recentContest),E=_(e=>e.lastSolveTime),R=_(e=>e.recentAvgDiffcult),j=_(e=>e.okCount),O=_(e=>e.contests.length),Q=dt(e=>e.name);function h(e){return it(e,A,T,x,E,R,j,O,Q)}return(e,m)=>(p(),M("div",mt,[_t,l(t(gt),{data:t(P),cache:"codeforces","default-sort":t(r),"default-sort-order":t(z)},{columns:n(({index:v,row:a})=>[l(t(d),{label:"#",width:"3em",align:"center"},{default:n(()=>[C("span",Ct,u(v+1),1)]),_:2},1024),l(t(d),{label:"\u59D3\u540D"},{default:n(()=>[l(ht,{name:a.name},null,8,["name"])]),_:2},1024),l(t(d),{label:"Handle"},{default:n(()=>[C("a",{href:`https://codeforces.com/profile/${a.handle}`,target:"_blank"},[a.isRated?(p(),S(t(F),{key:0,rating:a.rating},{default:n(()=>[g(u(a.handle),1)]),_:2},1032,["rating"])):(p(),S(t(F),{key:1},{default:n(()=>[g(u(a.handle),1)]),_:2},1024))],8,bt)]),_:2},1024),l(t(d),{label:"Rating",sort:h(t(A)),align:"right"},{default:n(()=>[a.isRated?(p(),S(t(F),{key:0,rating:a.rating,"disable-legendary":""},{default:n(()=>[g(u(a.rating),1)]),_:2},1032,["rating"])):W("v-if",!0)]),_:2},1032,["sort"]),l(t(d),{label:"\u6700\u8FD1\u901A\u8FC7",width:"7em",align:"right",sort:h(t(T))},{default:n(()=>[g(u(a.recentOkCount),1)]),_:2},1032,["sort"]),l(t(d),{label:"\u6700\u8FD1\u5E73\u5747\u96BE\u5EA6",width:"10em",align:"right",sort:h(t(R))},{default:n(()=>[g(u(a.recentAvgDiffcult),1)]),_:2},1032,["sort"]),l(t(d),{label:"\u6700\u8FD1\u6BD4\u8D5B",width:"7em",align:"right",sort:h(t(x))},{default:n(()=>[g(u(a.recentContest),1)]),_:2},1032,["sort"]),l(t(d),{label:"\u6700\u65B0\u901A\u8FC7",width:"10em",align:"center",sort:h(t(E))},{default:n(()=>[a.lastSolveTime>0?(p(),M("span",pt,u(t(U)(a.lastSolveTime).value),1)):W("v-if",!0)]),_:2},1032,["sort"]),l(t(d),{label:"\u901A\u8FC7",width:"5em",align:"right",sort:h(t(j))},{default:n(()=>[g(u(a.okCount),1)]),_:2},1032,["sort"]),l(t(d),{label:"\u6BD4\u8D5B",width:"5em",align:"right",sort:h(t(O))},{default:n(()=>[g(u(a.contests.length),1)]),_:2},1032,["sort"])]),empty:n(()=>[yt]),_:1},8,["data","default-sort","default-sort-order"]),C("div",vt,[C("span",Bt,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+u(t(U)(b.value).value),1)])]))}});export{Et as default};
