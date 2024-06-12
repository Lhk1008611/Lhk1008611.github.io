"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9489],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},o="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),o=u(a),s=r,d=o["".concat(m,".").concat(s)]||o[s]||N[s]||l;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p[o]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:15},i="\u6b63\u5219\u8868\u8fbe\u5f0f",p={unversionedId:"Java/Regex",id:"Java/Regex",title:"\u6b63\u5219\u8868\u8fbe\u5f0f",description:"\u4ecb\u7ecd",source:"@site/docs/Java/Regex.md",sourceDirName:"Java",slug:"/Java/Regex",permalink:"/docs/Java/Regex",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Java \u5bb9\u5668",permalink:"/docs/Java/Collection"},next:{title:"Java IO \u6d41",permalink:"/docs/Java/IO"}},m={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4f7f\u7528",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4f7f\u7528",level:2},{value:"\u5185\u5bb9\u9650\u5b9a",id:"\u5185\u5bb9\u9650\u5b9a",level:3},{value:"\u957f\u5ea6\u9650\u5b9a",id:"\u957f\u5ea6\u9650\u5b9a",level:3},{value:"\u9884\u5b9a\u4e49\u5b57\u7b26",id:"\u9884\u5b9a\u4e49\u5b57\u7b26",level:3},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7ec4\u5408\u5b9a\u4e49",id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7ec4\u5408\u5b9a\u4e49",level:3},{value:"\u5e38\u89c1\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u5e38\u89c1\u6b63\u5219\u8868\u8fbe\u5f0f",level:3}],k={toc:u};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u53c8\u79f0\u89c4\u5219\u8868\u8fbe\u5f0f\u3002(\u82f1\u8bed:RegularExpression\uff0c\u5728\u4ee3\u7801\u4e2d\u5e38\u7b80\u5199\u4e3aregex\u3001regexp \u6216 RE)\uff0c\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u4e00\u4e2a\u6982\u5ff5"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u901a\u5e38\u88ab\u7528\u6765\u68c0\u7d22\u3001\u66ff\u6362\u90a3\u4e9b\u7b26\u5408\u67d0\u4e2a\u6a21\u5f0f(\u89c4\u5219)\u7684\u6587\u672c"),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u5e76\u4e0d\u4ec5\u9650\u4e8e\u67d0\u4e00\u79cd\u8bed\u8a00\uff0c\u4f46\u662f\u5728\u6bcf\u79cd\u8bed\u8a00\u4e2d\u6709\u7ec6\u5fae\u7684\u5dee\u522b")),(0,r.kt)("h2",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u5bf9\u5b57\u7b26\u4e32\u64cd\u4f5c\u7684\u4e00\u79cd\u903b\u8f91\u516c\u5f0f\uff0c\u5c31\u662f\u7528\u4e8b\u5148\u5b9a\u4e49\u597d\u7684\u4e00\u4e9b\u7279\u5b9a\u5b57\u7b26\u3001\u53ca\u8fd9\u4e9b\u7279\u5b9a\u5b57\u7b26\u7684\u7ec4\u5408\uff0c\u7ec4\u6210\u4e00\u4e2a\u201c\u89c4\u5219\u5b57\u7b26\u4e32\u201d\uff0c\u8fd9\u4e2a\u201c\u89c4\u5219\u5b57\u7b26\u4e32\u201d\u7528\u6765\u8868\u8fbe\u5bf9\u5b57\u7b26\u4e32\u7684\u4e00\u79cd\u8fc7\u6ee4\u903b\u8f91\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7279\u6b8a\u8bed\u6cd5\u6765\u8868\u793a\u5b57\u7b26\u7c7b\u3001\u6570\u91cf\u9650\u5b9a\u7b26\u548c\u4f4d\u7f6e\u5173\u7cfb,\u7136\u540e\u7528\u8fd9\u4e9b\u7279\u6b8a\u8bed\u6cd5\u548c\u666e\u901a\u5b57\u7b26\u4e00\u8d77\u8868\u793a\u4e00\u4e2a\u6a21\u5f0f")),(0,r.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u6027\u3001\u903b\u8f91\u6027\u548c\u529f\u80fd\u6027\u975e\u5e38\u7684\u5f3a"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8fc5\u901f\u5730\u7528\u6781\u7b80\u5355\u7684\u65b9\u5f0f\u8fbe\u5230\u5b57\u7b26\u4e32\u7684\u590d\u6742\u63a7\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u521a\u63a5\u89e6\u7684\u4eba\u6765\u8bf4\uff0c\u6bd4\u8f83\u6666\u6da9\u96be\u61c2")),(0,r.kt)("h2",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4f7f\u7528"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 Java \u4e2d\u6b63\u5219\u8868\u8fbe\u5f0f\u4e3a string \u7c7b\u578b\uff0c\u88ab\u9a8c\u8bc1\u7684\u5185\u5bb9\u540c\u6837\u4e3a String \u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 string \u7c7b\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"matches")," \u65b9\u6cd5\u5b9e\u73b0\u5185\u5bb9\u7684\u5339\u914d\u6821\u9a8c\u3002\u5982:",(0,r.kt)("inlineCode",{parentName:"li"},"\u88ab\u9a8c\u8bc1\u5185\u5bb9.matches(\u6b63\u5219\u8868\u8fbe\u5f0f)")))),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u8bed\u6cd5\u89c4\u5219:",(0,r.kt)("inlineCode",{parentName:"li"},"[\u5185\u5bb9\u9650\u5b9a]{\u957f\u5ea6\u9650\u5b9a}"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b9a\u4e49\u9650\u5b9a\u5185\u5bb9\u89c4\u5219\u65f6\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u957f\u5ea6\u9650\u5b9a\uff0c\u90a3\u4e48\u9ed8\u8ba4\u957f\u5ea6\u4e3a1")))),(0,r.kt)("h3",{id:"\u5185\u5bb9\u9650\u5b9a"},"\u5185\u5bb9\u9650\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u4e2a\u5b57\u7b26\u9650\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[a]"),": \u8868\u793a\u5f53\u524d\u5185\u5bb9\u5fc5\u987b\u662f\u5b57\u6bcd a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RegexTest {\n    public static void main(String[] args) {\n        String regex="[a]";\n        String str1="a";\n        String str2="b";\n        System.out.println(str1.matches(regex));\n        System.out.println(str2.matches(regex));\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8303\u56f4\u5b57\u7b26\u9650\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9]"),": \u8868\u793a\u5185\u5bb9\u53ef\u4ee5\u662f a-z \u4e4b\u95f4\u7684\u4efb\u610f\u5b57\u6bcd\u6216\u8005 0-9 \u4e4b\u95f4\u7684\u4efb\u610f\u6570\u5b57\uff0c\u4e0d\u5206\u5148\u540e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RegexTest {\n    public static void main(String[] args) {\n        String regex="[a-zA-B]";\n        String str1="a";\n        String str2="A";\n        System.out.println(str1.matches(regex));\n        System.out.println(str2.matches(regex));\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d6\u53cd\u9650\u5b9a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[^abc]"),":\u8868\u793a\u5185\u5bb9\u4e0d\u80fd\u662f a \u6216 b \u6216 c",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RegexTest {\n    public static void main(String[] args) {\n        String regex="[^aA]";\n        String str1="a";\n        String str2="b";\n        System.out.println(str1.matches(regex));\n        System.out.println(str2.matches(regex));\n    }\n}\n')))))),(0,r.kt)("h3",{id:"\u957f\u5ea6\u9650\u5b9a"},"\u957f\u5ea6\u9650\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"\u6765\u9650\u5b9a\u5185\u5bb9\u957f\u5ea6"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56fa\u5b9a\u957f\u5ea6:",(0,r.kt)("inlineCode",{parentName:"p"},"{\u56fa\u5b9a\u957f\u5ea6\u503c}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8303\u56f4\u957f\u5ea6:",(0,r.kt)("inlineCode",{parentName:"p"},"{\u6700\u5c0f\u957f\u5ea6\u503c\uff0c\u6700\u5927\u957f\u5ea6\u503c}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f8b\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[a-z]{5}"),":\u8868\u793a\u5185\u5bb9\u8303\u56f4\u4e3a\u5c0f\u5199\u5b57\u6bcda\u5230z\u4e14\u957f\u5ea6\u5fc5\u987b\u4e3a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[a-z]{2,8}"),":\u8868\u793a\u5185\u5bb9\u8303\u56f4\u4e3a\u5c0f\u5199\u5b57\u6bcda\u5230z\u4e14\u957f\u5ea6\u57282\u52308\u4e4b\u95f4\uff0c\u5305\u542b2\u4e0e8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[a-z]{2,}"),":\u8868\u793a\u5185\u5bb9\u8303\u56f4\u4e3a\u5c0f\u5199\u5b57\u6bcda\u5230z\u4e14\u6700\u5c0f\u957f\u5ea6\u4e3a2\uff0c\u6700\u5927\u957f\u5ea6\u65e0\u9650\u5236"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[a-z]{0,2}"),":\u8868\u793a\u5185\u5bb9\u8303\u56f4\u4e3a\u5c0f\u5199\u5b57\u6bcda\u5230z\u4e14\u6700\u5c0f\u957f\u5ea6\u4e3ao\uff0c\u6700\u5927\u957f\u5ea6\u4e3a2")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RegexTest {\n    public static void main(String[] args) {\n        String regex="[^aA]{2}";\n        String str1="bb";\n        String str2="b";\n        System.out.println(str1.matches(regex));\n        System.out.println(str2.matches(regex));\n    }\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u957f\u5ea6\u9650\u5b9a\u7b26\u53f7"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u957f\u5ea6\u9650\u5b9a\u7b26\u53f7\u662f\u6307\u901a\u8fc7\u9884\u5b9a\u4e49\u7b26\u53f7\u6765\u5b8c\u6210\u957f\u5ea6\u9650\u5b9a\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"?"),":\u96f6\u6b21\u6216\u4e00\u6b21\u3002\u7b49\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"{0,1}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+"),":\u4e00\u6b21\u6216\u591a\u6b21\u3002\u7b49\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"{1,}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"*"),":\u96f6\u6b21\u6216\u591a\u6b21\u3002\u7b49\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"{0,}"))))))),(0,r.kt)("h3",{id:"\u9884\u5b9a\u4e49\u5b57\u7b26"},"\u9884\u5b9a\u4e49\u5b57\u7b26"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u9884\u5b9a\u4e49\u5b57\u7b26\u6765\u8868\u793a\u5185\u5bb9\u9650\u5b9a\u3002\u76ee\u7684\u662f\u4e3a\u4e86\u7b80\u5316\u5185\u5bb9\u9650\u5b9a\u7684\u5b9a\u4e49"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5e38\u89c1\u9884\u5b9a\u4e49\u5b57\u7b26"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u7b26"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u6570\u5b57\u5b57\u7b26\uff0c\u7b49\u4ef7\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"[0-9]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\D"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u975e\u6570\u5b57\u5b57\u7b26\uff0c\u7b49\u4ef7\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"[^0-9]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\n"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u6362\u884c\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\r"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u56de\u8f66\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\s"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u4f55\u7a7a\u767d\u5b57\u7b26\u5305\u62ec\u7a7a\u683c\u3001\u5236\u8868\u7b26\u3001\u6362\u9875\u7b26\u7b49\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\S"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u4f55\u975e\u7a7a\u767d\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\t"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u5236\u8868\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\w"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u5305\u62ec\u4e0b\u5212\u7ebf\u7684\u4efb\u4f55\u5355\u8bcd\u5b57\u7b26\u7b49\u4ef7\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"[A-Za-z0-9_]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\\W"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u4f55\u975e\u5355\u8bcd\u5b57\u7b26\u3002\u7b49\u4ef7\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"[^A-Za-20-9_]"))))))))),(0,r.kt)("h3",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7ec4\u5408\u5b9a\u4e49"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u7ec4\u5408\u5b9a\u4e49"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u53ef\u4ee5\u901a\u8fc7\u591a\u4e2a\u5185\u5bb9\u9650\u5b9a\u4e0e\u957f\u5ea6\u9650\u5b9a\u6765\u7ec4\u5408\u5b9a\u4e49\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u662f\u4ee5\u5b57\u6bcd\u5f00\u5934\uff0c\u6700\u5c11\u957f\u5ea6\u4e3a 4,\u6700\u5927\u957f\u5ea6\u4e3a 8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[a-z]{1}\\\\w{3,8}")))),(0,r.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u5e26\u6709\u533a\u53f7\u7684\u7535\u8bdd\u53f7\u7801\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\\\\d{3,4}-\\\\d{7,8}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"(\\\\d{3,4})-(\\\\d{7,8})"))))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class RegexTest {\n    public static void main(String[] args) {\n        String regex="[a-z]{1}\\\\w{3,7}";\n        String str1="a123123b";\n        String str2="12312312";\n        System.out.println(str1.matches(regex));\n        System.out.println(str2.matches(regex));\n    }\n}\n')))))),(0,r.kt)("h3",{id:"\u5e38\u89c1\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u5e38\u89c1\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u90ae\u7bb1\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\\\.)+[a-zA-Z]{2,}")),(0,r.kt)("li",{parentName:"ul"},"IP \u5730\u5740\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"(25[0-5]12[0-4]\\\\d|[0-1]\\\\d{2}|[1-9]?\\\\d)")),(0,r.kt)("li",{parentName:"ul"},"URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"http(s)?://([\\\\w-]+\\1.)+[\\\\w-]+U[\\lw- ./?%&=]*)?")),(0,r.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u8bc1\u53f7\u7801\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"(^\\d{18}$)1(^\\\\d{15}s)"))))}o.isMDXComponent=!0}}]);