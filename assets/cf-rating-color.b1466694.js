import{d as i,z as c,x as f,E as s,o as p,e as d,s as m,S as g,h as x}from"./index.aae3a783.js";const h=i({props:{rating:null,rank:null,disableLegendary:{type:Boolean}},setup(o){const l=o,{rating:n,rank:a,disableLegendary:t}=c(l),u=f(()=>{const r=a==null?void 0:a.value;if(s(r))return r.replace(/ /g,"-");const e=n==null?void 0:n.value;return s(e)?e<1200?"newbie":e<1400?"pupil":e<1600?"specialist":e<1900?"expert":e<2100?"candidate-master":e<2400?"master":e<3e3||(t==null?void 0:t.value)?"grandmaster":"legendary-grandmaster":null});return(r,e)=>(p(),d("span",{class:g(["cf-handle",x(u)])},[m(r.$slots,"default")],2))}});export{h as _};
