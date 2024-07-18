"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(n),c=l,N=k["".concat(p,".").concat(c)]||k[c]||u[c]||r;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:8},i="MySQL \u9ad8\u7ea7\u7b2c\u516b\u7bc7",o={unversionedId:"MySql/advanced/mysql-advance-8",id:"MySql/advanced/mysql-advance-8",title:"MySQL \u9ad8\u7ea7\u7b2c\u516b\u7bc7",description:"MySQL\u6570\u636e\u5e93\u65e5\u5fd7",source:"@site/docs/MySql/advanced/mysql-advance-8.md",sourceDirName:"MySql/advanced",slug:"/MySql/advanced/mysql-advance-8",permalink:"/docs/MySql/advanced/mysql-advance-8",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"MySQL \u9ad8\u7ea7\u7b2c\u4e03\u7bc7",permalink:"/docs/MySql/advanced/mysql-advance-7"},next:{title:"Linux",permalink:"/docs/category/linux"}},p={},m=[{value:"MySQL\u6570\u636e\u5e93\u65e5\u5fd7",id:"mysql\u6570\u636e\u5e93\u65e5\u5fd7",level:2},{value:"1.\u516d\u5927\u6570\u636e\u5e93\u65e5\u5fd7",id:"1\u516d\u5927\u6570\u636e\u5e93\u65e5\u5fd7",level:3},{value:"2.\u65e5\u5fd7\u7684\u5f0a\u7aef",id:"2\u65e5\u5fd7\u7684\u5f0a\u7aef",level:3},{value:"3. \u901a\u7528\u67e5\u8be2\u65e5\u5fd7",id:"3-\u901a\u7528\u67e5\u8be2\u65e5\u5fd7",level:3},{value:"4.\u9519\u8bef\u65e5\u5fd7",id:"4\u9519\u8bef\u65e5\u5fd7",level:3},{value:"5.bin log\u65e5\u5fd7",id:"5bin-log\u65e5\u5fd7",level:3},{value:"\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884c(MySQL 5.6\u7684\u9ed8\u8ba4\u503c\u4e3a2)\u3002",id:"\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884cmysql-56\u7684\u9ed8\u8ba4\u503c\u4e3a2",level:5}],s={toc:m};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-\u9ad8\u7ea7\u7b2c\u516b\u7bc7"},"MySQL \u9ad8\u7ea7\u7b2c\u516b\u7bc7"),(0,l.kt)("h2",{id:"mysql\u6570\u636e\u5e93\u65e5\u5fd7"},"MySQL\u6570\u636e\u5e93\u65e5\u5fd7"),(0,l.kt)("h3",{id:"1\u516d\u5927\u6570\u636e\u5e93\u65e5\u5fd7"},"1.\u516d\u5927\u6570\u636e\u5e93\u65e5\u5fd7"),(0,l.kt)("p",null,"6\u7c7b\u65e5\u5fd7\u5206\u522b\u4e3a:"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6162\u67e5\u8be2\u65e5\u5fd7"),":\u8bb0\u5f55\u6240\u6709\u6267\u884c\u65f6\u95f4\u8d85\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"long_query_time"),"\u7684\u6240\u6709\u67e5\u8be2\uff0c\u65b9\u4fbf\u6211\u4eec\u5bf9\u67e5\u8be2\u8fdb\u884c\u4f18\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u901a\u7528\u67e5\u8be2\u65e5\u5fd7"),":\u8bb0\u5f55\u6240\u6709\u8fde\u63a5\u7684\u8d77\u59cb\u65f6\u95f4\u548c\u7ec8\u6b62\u65f6\u95f4\uff0c\u4ee5\u53ca\u8fde\u63a5\u53d1\u9001\u7ed9\u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u6240\u6709\u6307\u4ee4\uff0c\u5bf9\u6211\u4eec\u590d\u539f\u64cd\u4f5c\u7684\u5b9e\u9645\u573a\u666f\u3001\u53d1\u73b0\u95ee\u9898\uff0c\u751a\u81f3\u662f\u5bf9\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5ba1\u8ba1\u90fd\u6709\u5f88\u5927\u7684\u5e2e\u52a9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u9519\u8bef\u65e5\u5fd7"),":\u8bb0\u5f55MySQL\u670d\u52a1\u7684\u542f\u52a8\u3001\u8fd0\u884c\u6216\u505c\u6b62MySQL\u670d\u52a1\u65f6\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u65b9\u4fbf\u6211\u4eec\u4e86\u89e3\u670d\u52a1\u5668\u7684\u72b6\u6001\uff0c\u4ece\u800c\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u7ef4\u62a4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e8c\u8fdb\u5236\u65e5\u5fd7"),":\u8bb0\u5f55\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"\u66f4\u6539\u6570\u636e"),"\u7684\u8bed\u53e5\uff0c\u53ef\u4ee5\u7528\u4e8e\u4e3b\u4ece\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\uff0c\u4ee5\u53ca\u670d\u52a1\u5668\u9047\u5230\u6545\u969c\u65f6\u6570\u636e\u7684\u65e0\u635f\u5931\u6062\u590d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u4e2d\u7ee7\u65e5\u5fd7"),":",(0,l.kt)("inlineCode",{parentName:"li"},"\u7528\u4e8e\u4e3b\u4ece\u670d\u52a1\u5668\u67b6\u6784"),"\u4e2d\uff0c\u4ece\u670d\u52a1\u5668\u7528\u6765\u5b58\u653e\u4e3b\u670d\u52a1\u5668\u4e8c\u8fdb\u5236\u65e5\u5fd7\u5185\u5bb9\u7684\u4e00\u4e2a\u4e2d\u95f4\u6587\u4ef6\u3002\u4ece\u670d\u52a1\u5668\u901a\u8fc7\u8bfb\u53d6\u4e2d\u7ee7\u65e5\u5fd7\u7684\u5185\u5bb9\uff0c\u6765\u540c\u6b65\u4e3b\u670d\u52a1\u5668\u4e0a\u7684\u64cd\u4f5c\u3002 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6570\u636e\u5b9a\u4e49\u8bed\u53e5\u65e5\u5fd7"),":\u8bb0\u5f55\u6570\u636e\u5b9a\u4e49\u8bed\u53e5\u6267\u884c\u7684\u5143\u6570\u636e\u64cd\u4f5c\u3002")),(0,l.kt)("p",{parentName:"blockquote"},"\u9664\u4e8c\u8fdb\u5236\u65e5\u5fd7\u5916\uff0c\u5176\u4ed6\u65e5\u5fd7\u90fd\u662f\u6587\u672c\u6587\u4ef6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u65e5\u5fd7\u521b\u5efa\u4e8eMySQL\u6570\u636e\u76ee\u5f55\u4e2d\u3002")),(0,l.kt)("h3",{id:"2\u65e5\u5fd7\u7684\u5f0a\u7aef"},"2.\u65e5\u5fd7\u7684\u5f0a\u7aef"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u529f\u80fd\u4f1a",(0,l.kt)("inlineCode",{parentName:"li"},"\u964d\u4f4eMySQL\u6570\u636e\u5e93\u7684\u6027\u80fd"),"\u3002\u4f8b\u5982\uff0c\u5728\u67e5\u8be2\u975e\u5e38\u9891\u7e41\u7684MySQL\u6570\u636e\u5e93\u7cfb\u7edf\u4e2d\uff0c\u5982\u679c\u5f00\u542f\u4e86\u901a\u7528\u67e5\u8be2\u65e5\u5fd7\u548c\u6162\u67e5\u8be2\u65e5\u5fd7\uff0cMySQL\u6570\u636e\u5e93\u4f1a\u82b1\u8d39\u5f88\u591a\u65f6\u95f4\u8bb0\u5f55\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u4f1a",(0,l.kt)("inlineCode",{parentName:"li"},"\u5360\u7528\u5927\u91cf\u7684\u78c1\u76d8\u7a7a\u95f4"),"\u3002\u5bf9\u4e8e\u7528\u6237\u91cf\u975e\u5e38\u5927\u3001\u64cd\u4f5c\u975e\u5e38\u9891\u7e41\u7684\u6570\u636e\u5e93\uff0c\u65e5\u5fd7\u6587\u4ef6\u9700\u8981\u7684\u5b58\u50a8\u7a7a\u95f4\u8bbe\u7f6e\u6bd4\u6570\u636e\u5e93\u6587\u4ef6\u9700\u8981\u7684\u5b58\u50a8\u7a7a\u95f4\u8fd8\u8981\u5927\u3002"))),(0,l.kt)("h3",{id:"3-\u901a\u7528\u67e5\u8be2\u65e5\u5fd7"},"3. \u901a\u7528\u67e5\u8be2\u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u901a\u7528\u67e5\u8be2\u65e5\u5fd7\u7528\u6765\u8bb0\u5f55\u7528\u6237\u7684\u6240\u6709\u64cd\u4f5c,\u5305\u62ec\u542f\u52a8\u548c\u5173\u95edMySQL\u670d\u52a1\u3001\u6240\u6709\u7528\u6237\u7684\u8fde\u63a5\u5f00\u59cb\u65f6\u95f4\u548c\u622a\u6b62\u65f6\u95f4\u3001\u53d1\u7ed9MySQL\u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u6240\u6709SQL\u6307\u4ee4\u7b49\u3002\u5f53\u6211\u4eec\u7684\u6570\u636e\u53d1\u751f\u5f02\u5e38\u65f6\uff0c\u67e5\u770b\u901a\u7528\u67e5\u8be2\u65e5\u5fd7\uff0c\u8fd8\u539f\u64cd\u4f5c\u65f6\u7684\u5177\u4f53 \u573a\u666f\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u51c6\u786e\u5b9a\u4f4d\u95ee\u9898\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u901a\u7528\u67e5\u8be2\u65e5\u5fd7\u72b6\u6001"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like '%general%';\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u65e5\u5fd7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# \u4fee\u6539my.cnf\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\n[mysqld]\ngeneral_log=on\ngeneral_log_file=[path[filename]] #path:\u6587\u4ef6\u7684\u8def\u5f84  filename:\u6587\u4ef6\u540d\n\n# \u4e34\u65f6\u4fee\u6539\nset global general_log=on;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5173\u95ed\u65e5\u5fd7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# \u4fee\u6539my.cnf\u914d\u7f6e\u6587\u4ef6\u542f\u52a8\n[mysqld]\ngeneral_log=off\n\n# \u4e34\u65f6\u4fee\u6539\nset global general_log=off;\n")))),(0,l.kt)("h3",{id:"4\u9519\u8bef\u65e5\u5fd7"},"4.\u9519\u8bef\u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u9519\u8bef\u65e5\u5fd7\u8bb0\u5f55\u4e86MySQL\u670d\u52a1\u5668\u542f\u52a8\u3001\u505c\u6b62\u8fd0\u884c\u7684\u65f6\u95f4\uff0c\u4ee5\u53ca\u7cfb\u7edf\u542f\u52a8\u3001\u8fd0\u884c\u548c\u505c\u6b62\u8fc7\u7a0b\u4e2d\u7684\u8bca\u65ad\u4fe1\u606f,\u5305\u62ec\u9519 \u8bef\u3001\u8b66\u544a\u548c\u63d0\u793a\u7b49\u3002\n\u901a\u8fc7\u9519\u8bef\u65e5\u5fd7\u53ef\u4ee5\u67e5\u770b\u7cfb\u7edf\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u4fbf\u4e8e\u5373\u65f6\u53d1\u73b0\u6545\u969c\u3001\u4fee\u590d\u6545\u969c\u3002\u5982\u679cMySQL\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\uff0c\u9519\u8bef\u65e5\u5fd7\u662f\u53d1\u73b0\u95ee\u9898\u3001\u89e3\u51b3\u6545\u969c\u7684\u9996\u9009\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u65e5\u5fd7"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u9519\u8bef\u65e5\u5fd7\u529f\u80fd\u9ed8\u8ba4\u5f00\u542f\uff0c\u4e14\u65e0\u6cd5\u7981\u6b62")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# \u4fee\u6539my.cnf\u914d\u7f6e\u6587\u4ef6\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u548c\u6587\u4ef6\u540d\n[mysqld]\nlog_error=[path[filename]] #path:\u6587\u4ef6\u7684\u8def\u5f84  filename:\u6587\u4ef6\u540d\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u9519\u8bef\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like 'log_error%';\n")))),(0,l.kt)("h3",{id:"5bin-log\u65e5\u5fd7"},"5.bin log\u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"bin log \u5373 Bbinary log\uff0c\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\uff0c\u4e5f\u53eb\u4f5c\u53d8\u66f4\u65e5\u5fd7(update log)\u3002\u5b83\u8bb0\u5f55\u4e86\u6570\u636e\u5e93\u6240\u6709\u6267\u884c\u7684DDL\u548cDML\u7b49",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u66f4\u65b0\u4e8b\u4ef6"),"\u7684\u8bed\u53e5\uff0c\u4f46\u662f\u4e0d\u5305\u542b\u6ca1\u6709\u4fee\u6539\u4efb\u4f55\u6570\u636e\u7684\u8bed\u53e5(\u5982\u6570\u636e\u67e5\u8be2\u8bed\u53e5select\uff0cshow\u7b49) \u3002\n\u5b83\u4ee5\u4e8b\u4ef6\u5f62\u5f0f\u8bb0\u5f55\u5e76\u4fdd\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e8c\u8fdb\u5236\u6587\u4ef6"),"\u4e2d\u3002\u901a\u8fc7\u8fd9\u4e9b\u4fe1\u606f\uff0c\u6211\u4eec\u53ef\u4ee5\u518d\u73b0\u6570\u636e\u66f4\u65b0\u64cd\u4f5c\u7684\u5168\u8fc7\u7a0b\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u4f5c\u7528\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u662f\u7528\u4e8e\u6570\u636e\u6062\u590d"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u662f\u7528\u4e8e\u6570\u636e\u590d\u5236"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b bin log \u7684\u76f8\u5173\u72b6\u6001"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like '%log_bin%';\n")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("img",{alt:"log_bin",src:n(85969).Z,width:"639",height:"223"})),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log_bin_basename")," :\u662fbinlog\u65e5\u5fd7\u7684\u57fa\u672c\u6587\u4ef6\u540d\uff0c\u540e\u9762\u4f1a\u8ffd\u52a0\u6807\u8bc6\u6765\u8868\u793a\u6bcf\u4e00\u4e2a\u6587\u4ef6 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log_bin_index"),":\u662fbinlog\u6587\u4ef6\u7684\u7d22\u5f15\u6587\u4ef6\uff0c \u8fd9\u4e2a\u6587\u4ef6\u7ba1\u7406\u4e86\u6240\u6709\u7684binlog\u6587\u4ef6\u7684\u76ee\u5f55 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log_bin_trust_function_creators"),":\u9650\u5236\u5b58\u50a8\u8fc7\u7a0b\uff0c\u524d\u9762\u6211\u4eec\u5df2\u7ecf\u8bb2\u8fc7\u4e86\uff0c\u8fd9\u662f\u56e0\u4e3a\u4e8c\u8fdb\u5236\u65e5\u5fd7\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u662f\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e3b\u4ece\u590d\u5236"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"\u800c\u5b58\u50a8\u51fd\u6570\u6709\u53ef\u80fd\u5bfc\u81f4\u4e3b\u4ece\u7684\u6570\u636e\u4e0d\u4e00\u81f4"),"\u3002\u6240\u4ee5\u5f53\u5f00\u542f\u4e8c\u8fdb\u5236\u65e5\u5fd7\u540e\uff0c\u9700\u8981\u9650\u5236\u5b58\u50a8\u51fd\u6570\u7684\u521b\u5efa\u3001\u4fee\u6539\u3001\u8c03\u7528 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log_bin_use_v1_row_events")," :\u6b64\u53ea\u8bfb\u7cfb\u7edf\u53d8\u663e\u5df2\u5f03\u7528\u3002ON \u8868\u793a\u4f7f\u7528\u7248\u672c1\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884c\uff0c0FF \u8868\u793a\u4f7f\u7528\u7248\u672c2\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884c(MySQL5.6\u9ed8\u8ba4\u503c\u4e3a\u7248\u672c2)"))))),(0,l.kt)("h5",{id:"\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884cmysql-56\u7684\u9ed8\u8ba4\u503c\u4e3a2"},"\u4e8c\u8fdb\u5236\u65e5\u5fd7\u884c(MySQL 5.6\u7684\u9ed8\u8ba4\u503c\u4e3a2)\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u6bcf\u6b21\u91cd\u542fmysql\u670d\u52a1\u90fd\u4f1a\u65b0\u5efa\u4e00\u4e2abinlog\u6587\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u53c2\u6570\u8bbe\u7f6e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# \u5728/etc/my.cnf\u4e2d\u8bbe\u7f6e\u76f8\u5173\u53c2\u6570\uff0c\u91cd\u542fmysql\u670d\u52a1\u751f\u6548\uff1asystemctl restart mysqld\n[mysqld]\nlog-bin=lhk-bin #\u914d\u7f6ebin log\u7684\u6587\u4ef6\u540d\nbinlog_expire_logs_seconds=600 #\u914d\u7f6e\u4e8c\u8fdb\u5236\u6587\u4ef6\u53ef\u4ee5\u4fdd\u5b58600\u79d2\nmax_binlog_size=100M #\u63a7\u5236\u5355\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a1GB\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u4e8c\u8fdb\u5236\u65e5\u5fd7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"#\u67e5\u770bbinlog\u6587\u4ef6\nshow binary logs;\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#\u4f7f\u7528mysqlbinlog\u547d\u4ee4\u5de5\u5177\u67e5\u770b\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\u5185\u5bb9\nmysqlbinlog "/var/lib/mysql/binlog.000003"\n\n# \u67e5\u770b\u4e8c\u8fdb\u5236\u65e5\u5fd7\u4f2a\u4ee3\u7801\nmysqlbinlog -v "/var/lib/mysql/binlog.000003"\n')),(0,l.kt)("p",{parentName:"li"},"\u4e0a\u9762\u8fd9\u79cd\u529e\u6cd5\u8bfb\u53d6\u51fabinlog\u65e5\u5fd7\u7684\u5168\u6587\u5185\u5bb9\u6bd4\u8f83\u591a\uff0c\u4e0d\u5bb9\u6613\u5206\u8fa9\u67e5\u770b\u5230pos\u70b9\u4fe1\u606f\uff0c\u4e0b\u9762\u8fd9\u4e00\u79cd\u67e5\u8be2\u66f4\u4e3a\u65b9\u4fbf"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"#\u547d\u4ee4:\nshow binlog events [IN 'log_name'] [FROM pos] [LIMIT [offset,] row count];\n#\u4f8b\u5982\nshow binlog events in 'binlog.000003' from 236 limit 5 ;\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IN 'log_name'"),":\u6307\u5b9a\u8981\u67e5\u8be2\u7684binlog\u6587\u4ef6\u540d(\u4e0d\u6307\u5b9a\u5c31\u662f\u7b2c\u4e00\u4e2abinlog\u6587\u4ef6) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FROM pos"),":\u6307\u5b9a\u4ece\u54ea\u4e2apos\u8d77\u59cb\u70b9\u5f00\u59cb\u67e5\u8d77(\u4e0d\u6307\u5b9a\u5c31\u662f\u4ece\u6574\u4e2a\u6587\u4ef6\u9996\u4e2apos\u70b9\u5f00\u59cb\u7b97) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT [offset]")," :\u504f\u79fb\u91cf(\u4e0d\u6307\u5b9a\u5c31\u662f0) "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"row_count")," :\u67e5\u8be2\u603b\u6761\u6570(\u4e0d\u6307\u5b9a\u5c31\u662f\u6240\u6709\u884c)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u683c\u5f0f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show variables like 'binlog_format';\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e09\u79cd\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u683c\u5f0f\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Statement"),"\uff1a\u6bcf\u4e00\u6761\u4f1a\u4fee\u6539\u6570\u636e\u7684sql\u90fd\u4f1a\u8bb0\u5f55\u5728binlog\u4e2d\u3002\n\u4f18\u70b9:\u4e0d\u9700\u8981\u8bb0\u5f55\u6bcf\u4e00-\u884c\u7684\u53d8\u5316\uff0c\u51cf\u5c11\u4e86binlog\u65e5\u5fd7\u7f6e\uff0c\u8282\u7ea6\u4e86I0\u63d0\u9ad8\u6027\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Row"),"\uff1a5.1.5\u7248\u672c\u7684MySQL\u624d\u5f00\u59cb\u652f\u6301row level\u7684\u590d\u5236\uff0c\u5b83\u4e0d\u8bb0\u5f55sq|\u8bed\u53e5\u4e0a\u4e0b\u6587\u76f8\u5173\u4fe1\u606f,\u4ec5\u4fdd\u5b58\u54ea\u6761\u8bb0\u5f55\u88ab\u4fee\u6539\u3002\n\u4f18\u70b9: row level\u7684\u65e5\u5fd7\u5185\u5bb9\u4f1a\u975e\u5e38\u6e05\u695a\u7684\u8bb0\u5f55\u4e0b\u6bcf\u4e00\u884c\u6570\u636e\u4fee\u6539\u7684\u7ec6\u8282\u3002\u800c\u4e14\u4e0d\u4f1a\u51fa\u73b0\u67d0\u4e9b\u7279\u5b9a\u60c5\u51b5\u4e0b\u7684\u5b58\u50a8\u8fc7\u7a0b\uff0c\u6216function\uff0c\u4ee5\u53catrigger\u7684\u8c03\u7528\u548c\u89e6\u53d1\u65e0\u6cd5\u88ab\u6b63\u786e\u590d\u5236\u7684\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Mixed"),"\uff1a\u4ece5.1.8\u7248\u672c\u5f00\u59cb\uff0cMySQL\u63d0\u4f9b\u4e86Mixed\u683c\u5f0f\uff0c\u5b9e\u9645\u4e0a\u5c31\u662fStatement\u4e0eRow\u7684\u7ed3\u5408\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6062\u590d\u6570\u636e",(0,l.kt)("inlineCode",{parentName:"p"},"mysqlbinlog")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6062\u590d\u6570\u636e\u7684\u8bed\u6cd5\u5982\u4e0b:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysq1bin1og [option] f1lename | mysql -uuser -ppa88 ; \n#\u4f8b\u5982\nmysqlbinlog --start-position=236 --stop-position=450 --database=dbtest1 /var/lib/mysql/binlog.000003 | mysql -uroot -p -v dbtest1\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3:\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqlbinlog")," \u547d\u4ee4\u6765\u8bfb\u53d6filename\u4e2d\u7684\u5185\u5bb9\uff0c\u7136\u540e\u4f7f\u7528mysql\u547d\u4ee4\u5c06\u8fd9\u4e9b\u5185\u5bb9\u6062\u590d\u5230\u6570\u636e\u5e93\u4e2d\u3002"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filename"),": \u662f\u65e5\u5fd7\u6587\u4ef6\u540d\u3002 "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"option"),": \u53ef\u9009\u9879\uff0c\u6bd4\u8f83\u91cd\u8981\u7684\u4e24\u5bf9option\u53c2\u6570\u662f--start-date\u3001--stop-date\u548c--start-position\u3001--stop-position. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--start-date")," \u548c",(0,l.kt)("inlineCode",{parentName:"li"},"--stop-date"),": \u53ef\u4ee5\u6307\u5b9a\u6062\u590d\u6570\u636e\u5e93\u7684\u8d77\u59cb\u65f6\u95f4\u70b9\u548c\u7ed3\u675f\u65f6\u95f4\u70b9\u3002 \u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--start-position"),"\u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"--stop-position"),":\u53ef\u4ee5\u6307\u5b9a\u6062\u590d\u6570\u636e\u7684\u5f00\u59cb\u4f4d\u7f6e\u548c\u7ed3\u675f\u4f4d\u7f6e\u3002")))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5220\u9664\u4e8c\u8fdb\u5236\u65e5\u5fd7"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"purge {master | binary} logs to '\u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u540d';  #\u5220\u9664\u6307\u5b9a\u65e5\u5fd7\u6587\u4ef6\u4e4b\u524d\u7684\u65e5\u5fd7\u6587\u4ef6\n#\u6216\npurge {master | binary} logs before '\u6307\u5b9a\u65e5\u671f';  #\u5220\u9664\u6307\u5b9a\u65e5\u671f\u4e4b\u524d\u7684\u65e5\u5fd7\u6587\u4ef6\n\n# \u5220\u9664\u6240\u6709\u7684\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\nreset master;\n")))))}k.isMDXComponent=!0},85969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/log_bin-913a6612c52110cb2cb540b03c16856a.png"}}]);