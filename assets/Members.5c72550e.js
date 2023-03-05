var U=Object.defineProperty;var R=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var O=(i,s,o)=>s in i?U(i,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[s]=o,j=(i,s)=>{for(var o in s||(s={}))z.call(s,o)&&O(i,o,s[o]);if(R)for(var o of R(s))K.call(s,o)&&O(i,o,s[o]);return i};import{d as M,G as P,v as Q,x as W,o as E,e as N,g as a,h as e,w as u,f as h,j as l,m as V,b as X,H as Y,l as f,k as Z,I as m,J as tt}from"./index.ce1f8ff6.js";import{u as et}from"./users.99210f58.js";import{C as st,a as c}from"./c-table.6a04a6e4.js";import{_ as ot}from"./user-link.ba375aed.js";import"./load.b9090f49.js";const nt={class:"divide-y"},at=h("h2",{class:"mb-4"},"\u6210\u5458",-1),ut={class:"font-600"},rt={key:0},lt=h("div",{class:"my-4 px-3"},"\u4EBA\u634F\uFF1F",-1),ct={class:"mt-4 pt-4"},it={class:"text-gray-400"},Ct=M({setup(i){var x,T;const s=P(),o=String((x=s.query.sort)!=null?x:"\u6700\u8FD1\u901A\u8FC7"),q=String((T=s.query.order)!=null?T:"desc"),b=Q(X),w=t=>{const _=t.submissions.length,C=t.submissions.filter(({v:r})=>r!==0).length,n=(_!==0?(100*C/_).toFixed(1):"0.0")+" %",H=t.submissions.filter(({t:r})=>r>=b.value).length,I=t.submissions.filter(({t:r,v:g})=>r>=b.value&&g!==0).length,J=t.contests.filter(({t:r})=>r>=b.value).length,A=t.submissions.filter(({v:r})=>r===1).sort((r,g)=>g.t-r.t),L=A.length>0?A[0].t:0;return j({subCount:_,okCount:C,okRate:n,recentSubCount:H,recentOkCount:I,recentContest:J,lastSolveTime:L},t)},$=W(()=>et.map(w)),p=m(t=>t.recentOkCount),B=m(t=>t.recentContest),S=m(t=>t.lastSolveTime),y=m(t=>t.recentSubCount),v=m(t=>t.okCount),F=m(t=>t.contests.length),k=m(t=>t.subCount),D=m(t=>Number.parseFloat(t.okRate)),G=tt(t=>t.name);function d(t){return Y(t,p,B,S,y,v,F,k,D,G)}return(t,_)=>(E(),N("div",nt,[at,a(e(st),{data:e($),cache:"members","default-sort":e(o),"default-sort-order":e(q)},{columns:u(({index:C,row:n})=>[a(e(c),{label:"#",width:"3em",align:"center"},{default:u(()=>[h("span",ut,l(C+1),1)]),_:2},1024),a(e(c),{label:"\u59D3\u540D"},{default:u(()=>[a(ot,{name:n.name},null,8,["name"])]),_:2},1024),a(e(c),{label:"\u6700\u8FD1\u901A\u8FC7",width:"7em",align:"right",sort:d(e(p))},{default:u(()=>[f(l(n.recentOkCount),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u6700\u8FD1\u63D0\u4EA4",width:"7em",align:"right",sort:d(e(y))},{default:u(()=>[f(l(n.recentSubCount),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u6700\u8FD1\u6BD4\u8D5B",width:"7em",align:"right",sort:d(e(B))},{default:u(()=>[f(l(n.recentContest),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u6700\u65B0\u901A\u8FC7",width:"10em",align:"center",sort:d(e(S))},{default:u(()=>[n.lastSolveTime>0?(E(),N("span",rt,l(e(V)(n.lastSolveTime).value),1)):Z("v-if",!0)]),_:2},1032,["sort"]),a(e(c),{label:"\u901A\u8FC7",width:"5em",align:"right",sort:d(e(v))},{default:u(()=>[f(l(n.okCount),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u63D0\u4EA4",width:"5em",align:"right",sort:d(e(k))},{default:u(()=>[f(l(n.subCount),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u901A\u8FC7\u7387",width:"6em",align:"right",sort:d(e(D))},{default:u(()=>[f(l(n.okRate),1)]),_:2},1032,["sort"]),a(e(c),{label:"\u6BD4\u8D5B",width:"5em",align:"right",sort:d(e(F))},{default:u(()=>[f(l(n.contests.length),1)]),_:2},1032,["sort"])]),empty:u(()=>[lt]),_:1},8,["data","default-sort","default-sort-order"]),h("div",ct,[h("span",it,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+l(e(V)(b.value).value),1)])]))}});export{Ct as default};
