var g=Object.defineProperty;var E=(a,e,s)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var p=(a,e,s)=>(E(a,typeof e!="symbol"?e+"":e,s),s);import{m as w,Y as T,d as S,c as C,o as n,e as d,f as t,F as _,C as h,h as b,j as i,X as R,g as B,w as F,l as k,V as x}from"./index.c2e55f82.js";import{l as A}from"./load.b9090f49.js";var D=JSON.parse('{"keyMaps":[["name","a"],["platform","b"],["id","c"],["pid","d"],["verdict","e"],["creationTime","f"]],"stringMaps":[["codeforces","a"],["OK","b"]],"data":{"startTime":1674853750,"history":{"user":[{"a":"tourist","newSubmissions":[{"b":"a","c":191159451,"d":"1787H","a":"Codeforces Scoreboard","e":"WRONG_ANSWER","f":1675012604},{"b":"a","c":191152586,"d":"1787G","a":"Colorful Tree Again","e":"b","f":1675010639},{"b":"a","c":191147076,"d":"1787I","a":"Treasure Hunt","e":"b","f":1675009140},{"b":"a","c":191132842,"d":"1787F","a":"Inverse Transformation","e":"b","f":1675006031},{"b":"a","c":191126319,"d":"1787E","a":"The Harmonization of XOR","e":"b","f":1675004946},{"b":"a","c":191120161,"d":"1787D","a":"Game on Axis","e":"b","f":1675004119},{"b":"a","c":191113889,"d":"1787C","a":"Remove the Bracket","e":"b","f":1675003537},{"b":"a","c":191109607,"d":"1787B","a":"Number Factorization","e":"b","f":1675003217},{"b":"a","c":191106352,"d":"1787A","a":"Exponential Equation","e":"b","f":1675003021}],"newContests":[]}],"contest":[]},"commits":["da923818957f372363a9901d4b59d10c32894ce6","00e8a40008a138fd3d88dc85174b16ced6f4aab0","305b6351e17f17433cb2c8b44fc6ce52c7dbe72d","37545f3daf2b8a799a62f1bdad8ef81f94b7661c","7b39cc92576cec03d47fdcac0408b0b1d1e4642b","377711683281adb66ac25c14c8827b1c7e2eb6ff","a858c04259dd1cb92da46e9e702a59b436e88a7d","6681329cb4e32cabd1ca94a34cd2fc74283fa5f3","fc17399bcbf1a2ae57091a705e13bf14ca87798b","61bca6f58e026406fffb6dd3f547f367d040292d","06bcbf3f59c8a11aaf465aafed6008dd6f6d1c14","ef4f4ca291a0f674641450598ed73406ac39605c","0a57f196e33b12afe4688252af045d7cb4eac680","bd02486b02f15bc05ff688d850ca854da0b6c3e7","25b642b2d03ee7b2d8920ec93aefa16b5bbe48c2"]}}');const f=A(D),N=f.history;f.commits;const O=w(f.startTime);class V{constructor(){p(this,"submissions",new Map)}mergeSub(e,s){this.submissions.has(e)?this.submissions.get(e).push(s):this.submissions.set(e,[s])}list(){const e=[];for(const[s,o]of this.submissions)e.push({name:s,newSubmissions:o,newContests:[]});return e.sort((s,o)=>o.newSubmissions.length-s.newSubmissions.length)}}const u=new Map;var v;for(const a of(v=N.user)!=null?v:[])for(const e of a.newSubmissions){if(e.creationTime<f.startTime)continue;const s=T(e.creationTime).value;u.has(s)||u.set(s,new V),u.get(s).mergeSub(a.name,e)}const m=[...u.entries()].map(a=>({day:a[0],record:a[1]})).sort((a,e)=>e.day.localeCompare(a.day)).map(a=>({day:a.day.replace(/(\d+)-0?(\d+)-0?(\d+)/,"$1 \u5E74 $2 \u6708 $3 \u65E5"),record:a.record}));const H={class:"divide-y"},L=t("h2",{class:"mb-4"},"\u5386\u53F2",-1),M={class:"py-4"},$={class:"pl-[8px] relative timeline"},j={class:"font-bold pb-2"},z={class:"mt-2"},G=t("span",null," \u63D0\u4EA4\u4E86 ",-1),W={class:"font-bold"},I=t("span",null," \u6B21\u4EE3\u7801\uFF0C\u901A\u8FC7\u4E86 ",-1),K={class:"font-bold"},X=t("span",null," \u4E2A\u9898\u76EE",-1),q={class:"mt-2 pt-4"},J={class:"text-gray-400"},U=S({setup(a){const e=s=>s.filter(o=>o.verdict===x.OK);return(s,o)=>{const y=C("router-link");return n(),d("div",H,[L,t("div",M,[t("div",$,[(n(!0),d(_,null,h(b(m),(l,c)=>(n(),d("div",{key:l.day,class:"relative timeline-item pl-4"},[t("div",{class:"py-4 px-4 border rounded-md divide-y",style:R({borderTopWidth:c>0?0:void 0,borderTopLeftRadius:c>0?0:void 0,borderTopRightRadius:c>0?0:void 0,borderBottomLeftRadius:c+1<b(m).length?0:void 0,borderBottomRightRadius:c+1<b(m).length?0:void 0})},[t("div",j,i(l.day),1),t("div",null,[(n(!0),d(_,null,h(l.record.list(),r=>(n(),d("div",z,[B(y,{to:`/user/${r.name}`},{default:F(()=>[k(i(r.name),1)]),_:2},1032,["to"]),G,t("span",W,i(r.newSubmissions.length),1),I,t("span",K,i(e(r.newSubmissions).length),1),X]))),256))])],4)]))),128))])]),t("div",q,[t("span",J,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+i(b(O)),1)])])}}});export{U as default};
