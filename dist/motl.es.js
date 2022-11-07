const t=/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,e=e=>!!e&&t.test(e),r={getBirthday:t=>{if(!e(t))throw new Error("参数错误");const r=t.substring(6,14);return[r.substring(0,4),r.substring(4,6),r.substring(6)].join("-")},getYear:t=>{if(!e(t))throw new Error("参数错误");const n=r.getBirthday(t);return globalThis.parseInt(n.split("-")[0])},getMonth:t=>{if(!e(t))throw new Error("参数错误");const n=r.getBirthday(t);return globalThis.parseInt(n.split("-")[1])},getDate:t=>{if(!e(t))throw new Error("参数错误");const n=r.getBirthday(t);return globalThis.parseInt(n.split("-")[2])},getAge:t=>{if(!e(t))throw new Error("参数错误");const n=r.getYear(t),i=r.getMonth(t),o=r.getDate(t),s=new Date,a=s.getFullYear(),l=s.getMonth()+1,g=s.getDate();let c=a-n;return(l<i||l===i&&g<o)&&c--,c},getSexNum:t=>{if(!e(t))throw new Error("参数错误");const r=t.charAt(16);return globalThis.parseInt(r)%2==1?1:0},getSex:t=>1===r.getSexNum(t)?"男":"女",getInfo:t=>{if(!e(t))throw new Error("参数错误");t.substring(0,2),t.substring(2,4),t.substring(4,6),t.substring(14,16),t.charAt(17);const n={};return n.birthday=r.getBirthday(t),n.year=r.getYear(t),n.month=r.getMonth(t),n.date=r.getDate(t),n.age=r.getAge(t),n.sex=r.getSex(t),n.sexNum=r.getSexNum(t),n}},n={deepCopy:t=>JSON.parse(JSON.stringify(t)),copyValue:(t,e)=>{if(!n.isObject(t)||!n.isObject(e))throw new Error("参数异常");Object.keys(t).forEach((r=>{Reflect.has(e,r)&&(t[r]=e[r])}))},isObject:t=>null!==t&&("object"==typeof t||"function"==typeof t),isEmpty:t=>{if(!n.isObject(t))throw new Error("参数异常");return 0===Object.getOwnPropertyNames(t).length}},i={format:(t,e)=>{if("string"==typeof t&&(t=new Date(t)),!(t instanceof Date))throw new Error("参数有误");const r=t.toISOString().split("T"),n=r[0].split("-"),i=r[1].split(".")[0].split(":");return e.replace(/yyyy|YYYY/,n[0]).replace(/MM/,n[1]).replace(/dd|DD/,n[2]).replace(/HH/,i[0]).replace(/mm/,i[1]).replace(/ss/,i[2])},cnWeek:t=>{if("string"==typeof t&&(t=new Date(t)),!(t instanceof Date))throw new Error("参数有误");const e=t.getDay();return new Map([[0,"日"],[1,"一"],[2,"二"],[3,"三"],[4,"四"],[5,"五"],[6,"六"]]).get(e)},realMonth:t=>{if("string"==typeof t&&(t=new Date(t)),!(t instanceof Date))throw new Error("参数有误");return t.getMonth()+1},withRealMonth:(t,e)=>{if(e<1||e>31)throw new Error("日期越界");if("string"==typeof t&&(t=new Date(t)),!(t instanceof Date))throw new Error("参数有误");let r=new Date(t.toISOString());return r.setMonth(e-1),r}},o={uuid:()=>{const t="0123456789abcdef",e=t.length;return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,(r=>t.charAt(Math.floor(Math.random()*e))))},uuid32:()=>o.uuid().replace(/-/g,"")},s=(t,e)=>{if(!t)return!1;const r=t.lastIndexOf(".");if(r<0)return!1;const n=t.substring(r);return!!e.includes(n.toLowerCase())},a={isImg:t=>{const e=s(t,[".jpg",".jpeg",".png",".gif"]);return console.log("ret ",e),e},isPdf:t=>s(t,[".pdf"])},l=(t,e,r="id",n="parentId",i="children")=>{const o=e.filter((e=>e[n]===t[r]));if(o.length&&(t[i]=o),0!==o.length)for(let t of o)l(t,e,r,n,i)},g=(t,e={childrenField:"children"},r=[])=>(t.forEach((t=>{r.push(t);const n=t[e.childrenField];n&&n.length&&g(n,e,r)})),r),c={toTree:(t,e=null,r={idField:"id",parentIdField:"parentId",childrenField:"children"})=>{const{idField:n,parentIdField:i,childrenField:o}=r;let s=t.filter((t=>t[i]===e));for(let e of s)l(e,t,n||"id",i||"parentId",o||"children");return s},toList:g},d={IDCardUtils:r,DateUtils:i,ObjectUtils:n,UUIDUtils:o,FileUtils:a,TreeUtils:c};export{i as DateUtils,a as FileUtils,r as IDCardUtils,n as ObjectUtils,c as TreeUtils,o as UUIDUtils,d as default};