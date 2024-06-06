"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[783],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),o=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=o(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},v=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),c=o(t),v=a,d=c["".concat(s,".").concat(v)]||c[v]||m[v]||l;return t?r.createElement(d,i(i({ref:e},p),{},{components:t})):r.createElement(d,i({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,i=new Array(l);i[0]=v;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u[c]="string"==typeof n?n:a,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5384:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:4},i="Java \u5185\u90e8\u7c7b",u={unversionedId:"Java/InnerClass",id:"Java/InnerClass",title:"Java \u5185\u90e8\u7c7b",description:"1. \u5185\u90e8\u7c7b\u4ecb\u7ecd",source:"@site/docs/Java/InnerClass.md",sourceDirName:"Java",slug:"/Java/InnerClass",permalink:"/docs/Java/InnerClass",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"String \u7c7b",permalink:"/docs/Java/String"},next:{title:"Java \u6570\u7ec4",permalink:"/docs/Java/Array"}},s={},o=[{value:"\u975e\u9759\u6001\u5185\u90e8\u7c7b",id:"\u975e\u9759\u6001\u5185\u90e8\u7c7b",level:2},{value:"\u9759\u6001\u5185\u90e8\u7c7b",id:"\u9759\u6001\u5185\u90e8\u7c7b",level:2},{value:"\u533f\u540d\u5185\u90e8\u7c7b",id:"\u533f\u540d\u5185\u90e8\u7c7b",level:2},{value:"\u5c40\u90e8\u5185\u90e8\u7c7b",id:"\u5c40\u90e8\u5185\u90e8\u7c7b",level:2}],p={toc:o};function c(n){let{components:e,...l}=n;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-\u5185\u90e8\u7c7b"},"Java \u5185\u90e8\u7c7b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5185\u90e8\u7c7b\u4ecb\u7ecd\n",(0,a.kt)("img",{alt:"\u5185\u90e8\u7c7b\u4ecb\u7ecd",src:t(49).Z,width:"988",height:"386"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b\u53ef\u4ee5\u4f7f\u7528 public\u3001private\u3001protected\u3001default\u3001static \u4fee\u9970\u7b26\u4fee\u9970\uff0c\u800c\u5916\u90e8\u9876\u7ea7\u7c7b\u53ea\u80fd\u4f7f\u7528 public\u3001default \u4fee\u9970\u7b26\u4fee\u9970"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b\u53ea\u662f\u4e00\u4e2a\u7f16\u8bd1\u65f6\u7684\u6982\u5ff5\uff0c\u7f16\u8bd1\u6210\u529f\u540e\uff0c\u5c31\u4f1a\u6210\u4e3a\u4e24\u4e2a\u4e0d\u540c\u7684\u7c7b\uff0c\u5185\u90e8\u7c7b\u4f1a\u6210\u4e3a\u5916\u90e8\u7c7b\u7684\u6210\u5458\uff0c\u5e76\u4e14\u4f1a\u751f\u6210\u4e00\u4e2a\u5916\u90e8\u7c7b\u5bf9\u8c61\uff0c\u901a\u8fc7\u5916\u90e8\u7c7b\u5bf9\u8c61\u8c03\u7528\u5185\u90e8\u7c7b\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u4e00\u4e2a\u540d\u4e3a Outer \u7684\u5916\u90e8\u7c7b\u548c\u5176\u5185\u90e8\u5b9a\u4e49\u7684\u5185\u90e8\u7c7b Inner\uff0c\u7f16\u8bd1\u540e\uff0c\u4f1a\u751f\u6210\u4e24\u4e2a\u7c7b\uff0c\u4e00\u4e2a\u662f Outter.class\uff0c\u4e00\u4e2a\u662f Outter$Inner.class"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5185\u90e8\u7c7b\u7684\u4f5c\u7528"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b\u901a\u8fc7\u4e86\u66f4\u597d\u7684\u5c01\u88c5\uff0c\u53ea\u80fd\u8ba9\u5916\u90e8\u7c7b\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e0d\u5141\u8bb8\u540c\u4e00\u4e2a\u5305\u4e2d\u7684\u5176\u4ed6\u5176\u4ed6\u7c7b\u76f4\u63a5\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5916\u90e8\u7c7b\u7684\u79c1\u6709\u5c5e\u6027\uff0c\u5185\u90e8\u4e86\u88ab\u5f53\u6210\u5176\u5916\u90e8\u7c7b\u7684\u6210\u5458\uff0c\u4f46\u5916\u90e8\u4e86\u4e0d\u80fd\u8bbf\u95ee\u5185\u90e8\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5")))),(0,a.kt)("h2",{id:"\u975e\u9759\u6001\u5185\u90e8\u7c7b"},"\u975e\u9759\u6001\u5185\u90e8\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975e\u9759\u6001\u5185\u90e8\u7c7b\u5fc5\u987b\u5bc4\u5b58\u5728\u4e00\u4e2a\u5916\u90e8\u7c7b\u4e2d\uff0c\u5e76\u4e14\u5185\u90e8\u7c7b\u4e0d\u80fd\u58f0\u660e\u4e3a static",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u975e\u9759\u6001\u5185\u90e8\u7c7b\u5bf9\u8c61\uff0c\u90a3\u4e48\u4e00\u5b9a\u5b58\u5728\u5bf9\u5e94\u7684\u5916\u90e8\u7c7b\u5bf9\u8c61\uff0c\u975e\u9759\u6001\u5185\u90e8\u7c7b\u5bf9\u8c61\u5355\u72ec\u5c5e\u4e8e\u5916\u90e8\u7c7b\u5bf9\u8c61\uff0c\u5e76\u4e14\u53ea\u80fd\u901a\u8fc7\u5916\u90e8\u7c7b\u5bf9\u8c61\u8bbf\u95ee"))),(0,a.kt)("li",{parentName:"ul"},"\u975e\u9759\u6001\u5185\u90e8\u7c7b\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5916\u90e8\u7c7b\u7684\u6210\u5458\uff0c\u4f46\u5916\u90e8\u7c7b\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u975e\u9759\u6001\u5185\u90e8\u7c7b\u7684\u6210\u5458"),(0,a.kt)("li",{parentName:"ul"},"\u975e\u9759\u6001\u5185\u90e8\u7c7b\u4e0d\u80fd\u6709\u9759\u6001\u6210\u5458\u53d8\u91cf\u3001\u9759\u6001\u65b9\u6cd5\u548c\u9759\u6001\u4ee3\u7801\u5757"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7c7b\u8bbf\u95ee\u6210\u5458\u53d8\u91cf\u8981\u70b9\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u5916\u90e8\u7c7b\u6210\u5458\u53d8\u91cf\uff1a\u5916\u90e8\u7c7b.this.\u6210\u5458\u53d8\u91cf\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u5916\u90e8\u7c7b\u6210\u5458\u65b9\u6cd5\uff1a\u5916\u90e8\u7c7b.this.\u6210\u5458\u65b9\u6cd5\u540d()"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u5185\u90e8\u7c7b\u6210\u5458\u53d8\u91cf\uff1athis.\u6210\u5458\u53d8\u91cf\u540d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u5185\u90e8\u7c7b\u6d4b\u8bd5\n * @author The Mutens\n *\n */\n//\u5916\u90e8\u7c7b\npublic class Outter {\n    private int value=100;\n    \n    public void show(){\n        Inner inner2=new  Inner();   //\u5728\u5916\u90e8\u7c7b\u65b9\u6cd5\u4e2d\u521b\u5efa\u5185\u90e8\u7c7b\u5bf9\u8c61\n        System.out.println("\u6211\u662f\u5916\u90e8\u7c7b\u7684\u65b9\u6cd5\uff01");\n        inner2.showInner();\n    }\n    \n    public class Inner{\n        private String str1="\u5185\u90e8\u7c7b\u5c5e\u6027";\n        private int value=20;\n        public void showInner(){\n            System.out.println("\u6211\u662f\u5185\u90e8\u7c7b\u65b9\u6cd5\uff01");\n            System.out.println(str1);\n            System.out.println(value);\n            System.out.println(Outter.this.value);//\u901a\u8fc7Outter.this.value\u8c03\u7528\u4e0e\u5185\u90e8\u7c7b\u540c\u540d\u7684\u5916\u90e8\u7c7b\u5c5e\u6027\n            //show();   //\u5185\u90e8\u7c7b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5916\u90e8\u7c7b\u7684\u6210\u5458\u5c5e\u6027\u548c\u6210\u5458\u65b9\u6cd5\n        }           \n    }\n    \n    public static void main(String args[]){\n        Outter.Inner inner1=new Outter().new Inner();//\u7b2c\u4e00\u79cd\u521b\u5efa\u5185\u90e8\u7c7b\u5bf9\u8c61\u7684\u65b9\u5f0f\n        inner1.showInner();\n        \n        Outter outter1=new Outter();\n        Outter.Inner inner3=outter1.new Inner();  //\u7b2c\u4e8c\u79cd\u521b\u5efa\u5185\u90e8\u7c7b\u7684\u65b9\u5f0f\n        outter1.show();\n        inner3.showInner();\n    }\n}\n')))),(0,a.kt)("h2",{id:"\u9759\u6001\u5185\u90e8\u7c7b"},"\u9759\u6001\u5185\u90e8\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u5185\u90e8\u7c7b\u5fc5\u987b\u58f0\u660e\u4e3a static"),(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u5185\u90e8\u7c7b\u4e0d\u80fd\u8bbf\u95ee\u5916\u90e8\u7c7b\u7684\u975e\u9759\u6001\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5916\u90e8\u7c7b\u7684\u9759\u6001\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u9759\u6001\u5185\u90e8\u7c7b\u53ef\u4ee5\u770b\u505a\u5916\u90e8\u7c7b\u7684\u4e00\u4e2a\u9759\u6001\u6210\u5458"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n *\u6d4b\u8bd5\u9759\u6001\u5185\u90e8\u7c7b\n * @author TheMutents\n *\n */\npublic class Outter_1 {//\u5916\u90e8\u7c7b\n    private int value1=100;\n    private static int value2=200;\n    static String str="\u5916\u90e8\u7c7b\u5b57\u7b26\u4e32";\n    \n    static void outter(){\n        System.out.println(new Outter_1().value1);\n    }\n    \n    static class Inner1{//\u9759\u6001\u5185\u90e8\u7c7b\n        private int value=300;\n        \n        public void test(){\n            //System.out.println(value)\uff1b\u9759\u6001\u5185\u90e8\u7c7b\u4e0d\u80fd\u8bbf\u95ee\u5916\u90e8\u7c7b\u7684\u975e\u9759\u6001\u6210\u5458\n            outter();\n            System.out.println(value2);\n            System.out.println(str);//\u9759\u6001\u5185\u90e8\u7c7b\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5916\u90e8\u7c7b\u7684\u9759\u6001\u6210\u5458\n        }\n        \n        public static void test1(){\n            System.out.println(new Inner1().value);\n        }\n    }\n    \n    \n    public static void main(String args[]){\n        new Outter_1.Inner1().test();//\u521b\u5efa\u9759\u6001\u5185\u90e8\u7c7b\u5bf9\u8c61\u8c03\u7528\u9759\u6001\u5185\u90e8\u7c7b\u5b9e\u4f8b\u65b9\u6cd5\n        Outter_1.Inner1.test1();//\u7528\u7c7b\u540d\u6765\u8c03\u7528\u9759\u6001\u5185\u90e8\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\n    }\n\n}\n\n')))),(0,a.kt)("h2",{id:"\u533f\u540d\u5185\u90e8\u7c7b"},"\u533f\u540d\u5185\u90e8\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u533f\u540d\u5185\u90e8\u7c7b\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\uff0c\u4e0d\u80fd\u91cd\u590d\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u573a\u666f\uff1a\u952e\u76d8\u76d1\u542c\u64cd\u4f5c\u7b49\uff0c \u5728\u5b89\u5353\u5f00\u53d1\u4e2d\u3001awt\u3001swing \u5f00\u53d1\u4e2d\u5e38\u89c1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u6d4b\u8bd5\u533f\u540d\u5185\u90e8\u7c7b\n * @author TheMutents\n *\n */\npublic class AnonymousClass {\n    public void test(A11 a){\n        a.run();\n    }\n    \n    public static void main(String args[]){\n        new AnonymousClass().test(new B11());//1.\u521b\u5efaB11\u7c7b\u7684\u5bf9\u8c61\u4f5c\u4e3atest()\u65b9\u6cd5\u7684\u5b9e\u53c2\n        \n        new AnonymousClass().test(new A11(){//\u533f\u540d\u5185\u90e8\u7c7b\uff0c\u4e00\u6b21\u6027\u4f7f\u7528\n\n            @Override\n            public void run() {\n                System.out.println("\u533f\u540d\u5185\u90e8\u7c7b\u5b9e\u73b0\u63a5\u53e3A\u7684run()\u65b9\u6cd5");\n                \n            }});\n    }\n    \n}\n\n\n//\u63a5\u53e3A11\ninterface A11{\n    void run();\n}\n\n//\u5b9e\u73b0\u63a5\u53e3A11\u7684\u7c7b\uff0c\u53ef\u4ee5\u53cd\u590d\u4f7f\u7528\nclass B11 implements A11{\n\n    @Override\n    public void run() {\n        System.out.println("\u666e\u901a\u7c7b\u5b9e\u73b0\u63a5\u53e3A\u7684run()\u65b9\u6cd5");\n        \n    }\n    \n}\n'))),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u533f\u540d\u5185\u90e8\u7c7b\u6ca1\u6709\u8bbf\u95ee\u4fee\u9970\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u533f\u540d\u5185\u90e8\u7c7b\u6ca1\u6709\u540d\u5b57\uff0c\u56e0\u6b64\u6ca1\u6709\u6784\u9020\u51fd\u6570")))),(0,a.kt)("h2",{id:"\u5c40\u90e8\u5185\u90e8\u7c7b"},"\u5c40\u90e8\u5185\u90e8\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5728\u65b9\u6cd5\u4e2d\uff0c\u4f5c\u7528\u57df\u53ea\u9650\u4e8e\u65b9\u6cd5\u5185\uff0c\u79f0\u4e3a\u5c40\u90e8\u5185\u90e8\u7c7b"),(0,a.kt)("li",{parentName:"ul"},"\u5c40\u90e8\u5185\u90e8\u7c7b\u7684\u4f7f\u7528\u4e3b\u8981\u662f\u7528\u6765\u89e3\u51b3\u6bd4\u8f83\u590d\u6742\u7684\u95ee\u9898",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u5982\uff1a\u60f3\u521b\u5efa\u4e00\u4e2a\u7c7b\u6765\u8f85\u52a9\u6211\u4eec\u89e3\u51b3\u95ee\u9898\uff0c\u4f46\u662f\u8fd9\u4e2a\u7c7b\u53ea\u5728\u65b9\u6cd5\u4e2d\u7528\u5230\uff0c\u56e0\u6b64\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u7c7b\u53ea\u5728\u65b9\u6cd5\u4e2d\u521b\u5efa\uff0c\u800c\u4e0d\u662f\u5728\u7c7b\u4e2d\u521b\u5efa"))),(0,a.kt)("li",{parentName:"ul"},"\u5c40\u90e8\u5185\u90e8\u7c7b\u548c\u6210\u5458\u4e00\u6837\u88ab\u7f16\u8bd1\uff0c\u53ea\u662f\u5b83\u7684\u4f5c\u7528\u57df\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u53ea\u80fd\u5728\u65b9\u6cd5\u5185\u90e8\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5c40\u90e8\u5185\u90e8\u7c7b\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u5e94\u7528\u5f88\u5c11"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f8b\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u6d4b\u8bd5\u5c40\u90e8\u5185\u90e8\u7c7b\n * @author TheMutents\n *\n */\npublic class LocalInnerClass {\n    public void test(){\n        class LocalInnerClass_1{//\u5c40\u90e8\u5185\u90e8\u7c7b\u4f5c\u7528\u57df\u9650\u4e8e\u65b9\u6cd5\u5185\u90e8\n            public void show(){\n                System.out.println("\u5c40\u90e8\u5185\u90e8\u7c7b");\n            }\n        }\n        new LocalInnerClass_1().show();\n    }\n    \n    public static void main(String args[]){\n        new LocalInnerClass().test();//\u8c03\u7528test()\u65b9\u6cd5\n    }\n}\n')))))}c.isMDXComponent=!0},49:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/introduce-155a9b1214f99d1a0ed68c727935ec6c.png"}}]);