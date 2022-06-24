"use strict";(self.webpackChunkwondsn=self.webpackChunkwondsn||[]).push([[634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,title:"\ub0c4\uc0c8 3. \uae34 \ud568\uc218"},i=void 0,l={unversionedId:"development/refactoring/ch3",id:"development/refactoring/ch3",title:"\ub0c4\uc0c8 3. \uae34 \ud568\uc218",description:"\uac1c\uc694",source:"@site/docs/development/refactoring/ch3.md",sourceDirName:"development/refactoring",slug:"/development/refactoring/ch3",permalink:"/til/docs/development/refactoring/ch3",editUrl:"https://github.com/wondsn/til/edit/main/docs/development/refactoring/ch3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ub0c4\uc0c8 3. \uae34 \ud568\uc218"},sidebar:"tutorialSidebar",previous:{title:"\ub0c4\uc0c8 2. \uc911\ubcf5 \ucf54\ub4dc",permalink:"/til/docs/development/refactoring/ch2"},next:{title:"\ub0c4\uc0c8 4. \uae34 \ub9e4\uac1c\ubcc0\uc218 \ubaa9\ub85d",permalink:"/til/docs/development/refactoring/ch4"}},p={},u=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:2},{value:"\uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30",id:"\uc784\uc2dc-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30",level:2},{value:"before",id:"before",level:3},{value:"after",id:"after",level:3}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc9e7\uc740 \ud568\uc218 vs \uae34 \ud568\uc218",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218\uac00 \uae38\uc218\ub85d \uc774\ud574\ud558\uae30 \uc5b4\ub824\uc6c0 vs \ud568\uc218\uac00 \uc9e7\uc744\uc218\ub85d \ub9ce\uc740 \ubb38\ub9e5 \uc804\ud658\uc774 \ud544\uc694"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uacfc\uac70\uc5d0\ub294")," \uc791\uc740 \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ub354 \ub9ce\uc740 \uc11c\ube0c\ub8e8\ud2f4(\ud568\uc218) \ud638\ucd9c\ub85c \uc778\ud55c \uc624\ubc84\ud5e4\ub4dc \uc788\uc5c8\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uae08\uc740 \ucef4\ud30c\uc77c\ub7ec\ub2e8\uc5d0\uc11c \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ub9ce\uc740 \uc11c\ube0c\ub8e8\ud2f4 \ud638\ucd9c\uc744 \uc904\uc77c \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc740 \ud568\uc218\uc5d0 ",(0,a.kt)("strong",{parentName:"li"},"\uc88b\uc740 \uc774\ub984"),"\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74 \ud574\ub2f9 \ud568\uc218\uc758 \ucf54\ub4dc\ub97c \ubcf4\uc9c0 \uc54a\uace0\ub3c4 \uc774\ud574\ud560 \uc218 \uc788\uc5b4\uc57c \ud568"),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ucf54\ub4dc\uc5d0 ",(0,a.kt)("strong",{parentName:"li"},"\uc8fc\uc11d"),"\uc744 \ub0a8\uae30\uace0 \uc2f6\ub2e4\uba74, \uc8fc\uc11d \ub300\uc2e0 \ud568\uc218\ub97c \ub9cc\ub4e4\uace0 \ud568\uc218\uc758 \uc774\ub984\uc73c\ub85c ",(0,a.kt)("strong",{parentName:"li"},"\uc758\ub3c4"),"\ub97c \ud45c\ud604"))),(0,a.kt)("li",{parentName:"ul"},"99%\ub294 ",(0,a.kt)("strong",{parentName:"li"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30"),"\ub85c \ud574\uacb0\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\ud568\uc218\ub97c \ubd84\ub9ac\ud558\uba74\uc11c ",(0,a.kt)("strong",{parentName:"li"},"\uc804\ub2ec\ud574\uc57c\ud560 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\uc544\uc9c4\ub2e4\uba74")," \ub2e4\uc74c \ub9ac\ud329\ud1a0\ub9c1\uc744 \uace0\ub824",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,a.kt)("li",{parentName:"ul"},"\ub9e4\uac1c\ubcc0\uc218 \uac1d\uccb4 \ub9cc\ub4e4\uae30"),(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \ud1b5\uc9f8\ub85c \ub118\uae30\uae30"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\uc870\uac74\ubb38 \ubd84\ud574\ud558\uae30"),"\ub97c \uc0ac\uc6a9\ud574 \uc870\uac74\ubb38\uc744 \ubd84\ub9ac\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\uac19\uc740 \uc870\uac74\uc73c\ub85c \uc5ec\ub7ec\uac1c switch \ubb38\uc774 \uc788\ub2e4\uba74, ",(0,a.kt)("strong",{parentName:"li"},"\uc870\uac74\ubb38\uc744 \ub2e4\ud615\uc131\uc73c\ub85c \ubc14\uafb8\uae30"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\ubc18\ubcf5\ubb38 \uc548\uc5d0 \uc5ec\ub7ec \uc791\uc5c5\uc744 \ud558\uace0 \uc788\uc5b4\uc11c \ud558\ub098\uc758 \uba54\uc18c\ub4dc\ub85c \ucd94\ucd9c\ud558\uae30 \uc5b4\ub835\ub2e4\uba74, ",(0,a.kt)("strong",{parentName:"li"},"\ubc18\ubcf5\ubb38 \ucabc\uac1c\uae30"),"\ub97c \uc801\uc6a9\ud560 \uc218 \uc788\uc74c")),(0,a.kt)("h2",{id:"\uc784\uc2dc-\ubcc0\uc218\ub97c-\uc9c8\uc758-\ud568\uc218\ub85c-\ubc14\uafb8\uae30"},"\uc784\uc2dc \ubcc0\uc218\ub97c \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafb8\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 \ubc18\ubcf5\ud574\uc11c \ub3d9\uc77c\ud55c \uc2dd\uc744 \uacc4\uc0b0\ud558\ub294 \uac83\uc744 \ud53c\ud560 \uc218 \uc788\uc74c. \ub610 \uc774\ub984\uc744 \uc0ac\uc6a9\ud574 \uc758\ubbf8\ub97c \ud45c\ud604\ud560 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\uae34 \ud568\uc218\ub97c \ub9ac\ud329\ud1a0\ub9c1\ud560 \ub54c, \uadf8\ub7ec\ud55c \uc784\uc2dc \ubcc0\uc218\ub97c \ud568\uc218\ub85c \ucd94\ucd9c\ud558\uc5ec \ubd84\ub9ac -> \ubeb4\ub0b8 \ud568\uc218\ub85c \uc804\ub2ec\ud574\uc57c\ud560 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc904\uc77c \uc218 \uc788\uc74c")),(0,a.kt)("h3",{id:"before"},"before"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private void print() {\n\n    ...\n\n    participants.forEach(p -> {\n        long count = p.homework().values().stream()\n                .filter(v -> v == true)\n                .count();\n        double rate = count * 100 / totalNumberOfEvents;\n\n        String markdownForHomework = String.format("| %s %s | %.2f%% |\\n", p.username(), checkMark(p, totalNumberOfEvents), rate);\n        writer.print(markdownForHomework);\n    });\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\ud568\uc218 \ucd94\ucd9c\ud558\uae30"),"\ub97c \ud1b5\ud574 markdown\uc744 \ud504\ub9b0\ud2b8\ud558\ub294 \ubd80\ubd84\uc744 \ucd94\uce28")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private void print() {\n\n    ...\n\n    participants.forEach(p -> {\n        long count = p.homework().values().stream()\n                .filter(v -> v == true)\n                .count();\n        double rate = count * 100 / totalNumberOfEvents;\n\n        String markdownForHomework = getMarkdownForParticipant(totalNumberOfEvents, p, rate);\n        writer.print(markdownForHomework);\n    });\n}\n\nprivate String getMarkdownForParticipant(int totalNumberOfEvents, Participant p, double rate) {\n    String markdownForHomework = String.format("| %s %s | %.2f%% |\\n", p.username(), checkMark(p, totalNumberOfEvents), rate);\n    return markdownForHomework;\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5ec\uae30\uc11c ",(0,a.kt)("inlineCode",{parentName:"li"},"getMarkdownForParticipant")," \ud568\uc218\uc758 \ub9e4\uac1c\ubcc0\uc218\uc778 ",(0,a.kt)("inlineCode",{parentName:"li"},"rate"),"\ub294 \uc9c8\uc758 \ud568\uc218\ub85c \ubc14\uafc0 \uc218 \uc788\uc74c"),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub7ec\uba74 ",(0,a.kt)("inlineCode",{parentName:"li"},"getMarkdownForParticipant")," \ud568\uc218 \ub9e4\uac1c\ubcc0\uc218\ub97c 3 -> 2\uac1c\ub85c \uc904\uc77c \uc218 \uc788\uc74c")),(0,a.kt)("h3",{id:"after"},"after"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private void print() {\n\n    ...\n\n    participants.forEach(p -> {\n        String markdownForHomework = getMarkdownForParticipant(totalNumberOfEvents, p);\n        writer.print(markdownForHomework);\n    });\n}\n\nprivate String getMarkdownForParticipant(int totalNumberOfEvents, Participant p) {\n    return String.format("| %s %s | %.2f%% |\\n", p.username(), checkMark(p, totalNumberOfEvents), getRate(totalNumberOfEvents, p));\n}\n\nprivate double getRate(int totalNumberOfEvents, Participant p) {\n    long count = p.homework().values().stream()\n            .filter(v -> v == true)\n            .count();\n    return (double) (count * 100 / totalNumberOfEvents);\n}\n')))}m.isMDXComponent=!0}}]);