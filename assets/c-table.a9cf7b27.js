import{o as u,e as b,f as w,v as F,h as e,x as y,y as ke,d as q,z as G,A as i,c as j,g as M,w as _,k as J,B as R,F as $,C as H,j as B,l as O,_ as _e,s as Pe,D as Me,E as D}from"./index.359d17b3.js";const Se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},$e=w("path",{d:"M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4z",fill:"currentColor"},null,-1),Le=[$e];function ze(t,n){return u(),b("svg",Se,Le)}var je={name:"mdi-arrow-down",render:ze};const Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ae=w("path",{d:"M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12z",fill:"currentColor"},null,-1),Ne=[Ae];function Ve(t,n){return u(),b("svg",Be,Ne)}var De={name:"mdi-arrow-up",render:Ve};function Re(t){const n=F(window.innerWidth),p=F(n.value<=e(t)),g=()=>{n.value=window.innerWidth,p.value=n.value<=e(t)},s=()=>window.removeEventListener("resize",g);return window.addEventListener("resize",g,{passive:!0}),{width:n,isMobile:p,clean:s}}const pe=new Map;function Te(t,n,p){var I;const g=y(()=>e(n).length),s=y(()=>{var L;return Math.max(1,(L=e(t))!=null?L:g.value)}),c=y(()=>Math.ceil(g.value/s.value)),r=F(p&&(I=pe.get(p))!=null?I:0),v=y(()=>r.value*s.value),x=y(()=>Math.min(g.value,v.value+s.value));ke(r,L=>{p&&pe.set(p,L)});const h=y(()=>r.value+1<c.value&&x.value<g.value),C=()=>{h.value&&(r.value+=1)},d=y(()=>r.value>0&&v.value>0);return{current:r,pageLength:c,L:v,R:x,hasNextPage:h,nextPage:C,hasPrePage:d,prePage:()=>{d.value&&(r.value-=1)},goPage:L=>{const N=e(L);0<=N&&N<c.value&&(r.value=N)}}}var Ee=q({name:"CTableColumn",props:{label:String,width:{type:[Number,String]},align:String,center:{type:Boolean,default:!1},sort:Function,mobileHeaderClass:{type:Array,default:[]}},setup(t,{slots:n}){const{align:p,center:g}=G(t),s=["px-3","py-2",p.value==="center"||g.value?"text-center":p.value==="right"?"text-right":"text-left"];return()=>i("td",{class:s},n.default&&n.default(t))}});const Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ie=w("path",{d:"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42z",fill:"currentColor"},null,-1),He=[Ie];function Oe(t,n){return u(),b("svg",Fe,He)}var ve={name:"mdi-chevron-left",render:Oe};const Ye={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ue=w("path",{d:"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z",fill:"currentColor"},null,-1),We=[Ue];function qe(t,n){return u(),b("svg",Ye,We)}var fe={name:"mdi-chevron-right",render:qe};const Ge={key:0,class:"mb-2 grid grid-cols-2 gap-2"},Je={class:"flex justify-center"},Ke=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Qe=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Xe=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),Ze=w("span",{class:"select-none ml-2 inline-flex justify-center items-center py-2 md:px-2"},"...",-1),et=q({props:{isMobile:{type:Boolean},pageView:null,current:null,first:null,last:null,pageSize:null,nextPage:null,prePage:null,goPage:null},setup(t){const n=t,{isMobile:p,pageView:g,current:s,first:c,last:r}=G(n),v=y(()=>{var h;return(h=g==null?void 0:g.value)!=null?h:5}),x=y(()=>{var h;return(h=p==null?void 0:p.value)!=null?h:!1});return(h,C)=>{const d=j("c-button");return u(),b($,null,[e(x)?(u(),b("div",Ge,[M(d,{padding:"p-2",onClick:t.prePage,disable:e(s)<=e(c)},{default:_(()=>[M(e(ve))]),_:1},8,["onClick","disable"]),M(d,{padding:"p-2",onClick:t.nextPage,disable:e(s)+1>=e(r)},{default:_(()=>[M(e(fe))]),_:1},8,["onClick","disable"])])):J("v-if",!0),w("div",Je,[e(x)?J("v-if",!0):(u(),R(d,{key:0,padding:"p-2",onClick:t.prePage,disable:e(s)<=e(c)},{default:_(()=>[M(e(ve))]),_:1},8,["onClick","disable"])),e(r)-e(c)<=e(v)?(u(!0),b($,{key:1},H(e(r)-e(c),l=>(u(),R(d,{key:l,class:"ml-2",info:l+e(c)===e(s)+1,onClick:A=>t.goPage(l+e(c)-1)},{default:_(()=>[w("span",null,B(l+e(c)),1)]),_:2},1032,["info","onClick"]))),128)):e(s)-e(c)<e(v)?(u(),b($,{key:2},[(u(!0),b($,null,H(e(v),l=>(u(),R(d,{key:l,class:"ml-2",info:l+e(c)===e(s)+1,onClick:A=>t.goPage(l+e(c)-1)},{default:_(()=>[w("span",null,B(l+e(c)),1)]),_:2},1032,["info","onClick"]))),128)),Ke,M(d,{class:"ml-2",onClick:C[0]||(C[0]=l=>t.goPage(e(r)-1))},{default:_(()=>[O(B(e(r)),1)]),_:1})],64)):e(r)-e(s)<=e(v)?(u(),b($,{key:3},[M(d,{class:"ml-2",onClick:C[1]||(C[1]=l=>t.goPage(e(c)))},{default:_(()=>[O(B(e(c)+1),1)]),_:1}),Qe,(u(!0),b($,null,H(e(v),l=>(u(),R(d,{key:l,class:"ml-2",info:e(r)-e(v)+l===e(s)+1,onClick:A=>t.goPage(e(r)-e(v)+l-1)},{default:_(()=>[w("span",null,B(e(r)-e(v)+l),1)]),_:2},1032,["info","onClick"]))),128))],64)):(u(),b($,{key:4},[M(d,{class:"ml-2",onClick:C[2]||(C[2]=l=>t.goPage(e(c)))},{default:_(()=>[O(B(e(c)+1),1)]),_:1}),Xe,(u(!0),b($,null,H(e(v),l=>(u(),R(d,{key:l,class:"ml-2",info:e(s)-Math.floor(e(v)/2)+l===e(s)+1,onClick:A=>t.goPage(e(s)-Math.floor(e(v)/2)+l-1)},{default:_(()=>[w("span",null,B(e(s)-Math.floor(e(v)/2)+l),1)]),_:2},1032,["info","onClick"]))),128)),Ze,M(d,{class:"ml-2",onClick:C[3]||(C[3]=l=>t.goPage(e(r)-1))},{default:_(()=>[O(B(e(r)),1)]),_:1})],64)),e(x)?J("v-if",!0):(u(),R(d,{key:5,padding:"p-2",class:"ml-2",onClick:t.nextPage,disable:e(s)+1>=e(r)},{default:_(()=>[M(e(fe))]),_:1},8,["onClick","disable"]))])],64)}}}),tt={},lt={class:"select relative"},nt={class:"pl-2 pr-8 py-2 cursor-pointer block w-full outline-none rounded border border-1 border-[#dbdbdb] appearance-none"};function at(t,n){return u(),b("div",lt,[w("select",nt,[Pe(t.$slots,"default")])])}var st=_e(tt,[["render",at]]);const ge=new Map;var ot=q({name:"CTable",components:{IconDown:je,IconUp:De,CTablePage:et,CSelect:st},props:{cache:{type:String},data:{type:Array,default:[]},mobile:{type:Number,default:768},defaultSort:{type:String},defaultSortOrder:{type:String,default:"asc"},pageSize:{type:Number},mobilePageSize:{type:Number}},setup(t,{slots:n}){var ee,te;const{data:p,defaultSort:g,defaultSortOrder:s,mobile:c,pageSize:r,mobilePageSize:v}=G(t),x=y(()=>p.value.length===0),{isMobile:h,clean:C}=Re(c);Me(()=>C());const d=y(()=>{var k;return h.value&&(k=v.value)!=null?k:r.value}),l=t.cache?ge.get(t.cache):void 0,A=y(()=>D(d.value)),{current:I,pageLength:L,L:N,R:me,nextPage:he,prePage:be,goPage:we}=Te(d,p,t.cache),T=F((ee=l==null?void 0:l.field)!=null?ee:g.value),z=F((te=l==null?void 0:l.order)!=null?te:s.value),Y=()=>{t.cache&&ge.set(t.cache,{field:T.value,order:z.value})};Y();const K=k=>{T.value=k,z.value=s.value,Y()},Q=()=>{z.value==="desc"?z.value="asc":z.value="desc",Y()},U=k=>{if(!k)return[];const P=[];for(const a of k)if(a.type===$&&Array.isArray(a.children))for(const o of a.children)o!==null&&typeof o=="object"&&!Array.isArray(o)&&P.push(o);else P.push(a);return P.filter(a=>a.type===Ee)},W=U(n.columns?n.columns({}):[]),ye=y(()=>(P=>{var a,o,f;if(D(T.value)){for(const m of W)if(((o=(a=m.props)==null?void 0:a.label)!=null?o:"")===T.value){const S=P.sort((f=m.props)==null?void 0:f.sort);return z.value==="desc"?S.reverse():S}return P}else return P})(p.value)),X=y(()=>ye.value.slice(N.value,me.value)),Z=()=>i(j("c-table-page"),{current:I.value,first:0,last:L.value,pageSize:d.value,nextPage:he,prePage:be,goPage:we,pageView:h.value?3:5,isMobile:h.value}),xe=()=>{const k=()=>W.map(a=>{var E,le,ne,ae,se,re,oe,ie,ce;const o=D((E=a.props)==null?void 0:E.sort),f=o&&((ne=(le=a.props)==null?void 0:le.label)!=null?ne:"")===T.value,m={width:(ae=a.props)==null?void 0:ae.width,borderWidth:"0 0 2px 0"},V=((se=a.props)==null?void 0:se.align)==="center"||D((re=a.props)==null?void 0:re.center)&&((oe=a.props)==null?void 0:oe.center)!==!1?"justify-center":((ie=a.props)==null?void 0:ie.align)==="right"?"justify-end":"justify-start";return i("th",{style:m,class:["select-none","font-600","px-3","py-2","border-solid",f?"border-[#7a7a7a]":"border-[#dbdbdb]",o?"cursor-pointer":null,o?"hover:border-[#7a7a7a]":null]},i("div",{class:["flex","items-center",V],onClick:o?()=>{var ue,de;f?Q():K((de=(ue=a.props)==null?void 0:ue.label)!=null?de:"")}:void 0},[o?i(z.value==="desc"?j("icon-down"):j("icon-up"),{class:[!f&&"hidden"]}):"",i("span",{},(ce=a.props)==null?void 0:ce.label)]))}),P=a=>a.map((o,f)=>i("tr",{},n.columns&&U(n.columns({row:o,index:f+N.value}))));return i("div",{},[i("table",{class:["table","w-full","border-separate","table-auto","rounded"]},[i("thead",{},i("tr",{},k())),i("tbody",{},P(X.value))]),!x.value&&A.value&&Z(),x.value&&n.empty&&n.empty({})])},Ce=()=>{const k=()=>{const a=W.map(o=>{var f,m,V;if(D((f=o.props)==null?void 0:f.sort)){const S=(V=(m=o.props)==null?void 0:m.label)!=null?V:"";return i("option",{value:S},[S])}else return null}).filter(o=>D(o));return a.length>0&&i("div",{class:["my-4","flex","justify-between"]},[i(j("c-select"),{class:["w-full","mr-2"],onChange(o){var m;const f=(m=o.target)==null?void 0:m.value;D(f)&&K(f)}},a),i(j("c-button"),{info:!0,onClick:Q},[z.value==="desc"?i(j("icon-down"),{}):i(j("icon-up"),{})])])},P=()=>X.value.map((a,o)=>{const f=U(n.columns&&n.columns({row:a,index:o+N.value,mobile:!0}));return i("div",{class:["box","p-0","my-4"]},f.map(m=>{var S,E;const V=(S=m.props&&m.props["mobile-header-class"])!=null?S:[];return i("div",{class:["pl-3","border","flex","flex-shrink","justify-between","justify-items-stretch"]},[i("div",{class:["py-2","font-600","text-left","flex","items-center",...V]},(E=m.props)==null?void 0:E.label),i(m,{class:["block"]})])}))});return i("div",{class:["mobile-table"]},[!x.value&&k(),P(),!x.value&&A.value&&Z(),x.value&&n.empty&&n.empty({})])};return()=>h.value?Ce():xe()}});export{ot as C,Ee as a,st as b};
