"use strict";(self.webpackChunk_fysh_fyve_source=self.webpackChunk_fysh_fyve_source||[]).push([[598],{1311:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=s(6070),r=s(1503);const t={},l="\ud83d\udcca Chapter 2: Data Types",i={id:"fysh/manual/data-types",title:"\ud83d\udcca Chapter 2: Data Types",description:"\ud83d\udccf Integers",source:"@site/docs/fysh/02-manual/02-data-types.md",sourceDirName:"fysh/02-manual",slug:"/fysh/manual/data-types",permalink:"/docs/fysh/manual/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/Fysh-Fyve/fysh/tree/master/pkg/website/docs/fysh/02-manual/02-data-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc20 Chapter 1: Fysh Syntax",permalink:"/docs/fysh/manual/fysh-syntax"},next:{title:"\ud83e\udde0 Chapter 3: Fysh Logic and Operations",permalink:"/docs/fysh/manual/fysh-logic-and-operations"}},c={},d=[{value:"\ud83d\udccf Integers",id:"-integers",level:2},{value:"\ud83d\udcd0 Floating Point Numbers",id:"-floating-point-numbers",level:2},{value:"\ud83d\udcdd Strings",id:"-strings",level:2},{value:"\ud83d\udce6 Arrays and Traversal",id:"-arrays-and-traversal",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"-chapter-2-data-types",children:"\ud83d\udcca Chapter 2: Data Types"}),"\n",(0,a.jsx)(n.h2,{id:"-integers",children:"\ud83d\udccf Integers"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Integer:"})," Steven is an integer represented using binary scales. They have\nscales that are either ",(0,a.jsx)(n.code,{children:"1"})," or ",(0,a.jsx)(n.code,{children:"0"}),". Steven's value is ",(0,a.jsx)(n.code,{children:"0b101"}),", which is ",(0,a.jsx)(n.code,{children:"5"})," in\ndecimal."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 ><{({\xb0> ~\n"})}),"\n",(0,a.jsx)(n.h2,{id:"-floating-point-numbers",children:"\ud83d\udcd0 Floating Point Numbers"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Floats:"})," Steven can also be a float fysh. To seperate the integer and\ndecimal parts, we use a fysh bone ",(0,a.jsx)(n.code,{children:"-"}),". Steven's value is ",(0,a.jsx)(n.code,{children:"5.5"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 ><{({-{({\xb0> ~\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Floats with multiple bones:"})," Steven can also have multiple bones to\nseperate each decimal place. Steven's value is ",(0,a.jsx)(n.code,{children:"5 + 0.2 + 0.05 = 5.25"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 ><{({-{(-{({\xb0> ~\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Floats with numbers larger than 9:"})," If a value in the decimal place is\ngreater than 9, it will occupy an extra decimal place. Steven's value is\n",(0,a.jsx)(n.code,{children:"15 + 0.15 + 0.005 15.155"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 ><{{{{-{{{{-{({\xb0> ~\n"})}),"\n",(0,a.jsx)(n.h2,{id:"-strings",children:"\ud83d\udcdd Strings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Strings:"})," Steven can also be a string fysh. They speak using bubbles.\nSteven's value is ",(0,a.jsx)(n.code,{children:'"Hello, World!"'}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 \ud83e\udee7Hello, World!\ud83e\udee7 ~\n"})}),"\n",(0,a.jsx)(n.h2,{id:"-arrays-and-traversal",children:"\ud83d\udce6 Arrays and Traversal"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Arrays:"})," A fysh tank ",(0,a.jsx)(n.code,{children:"[ ]"})," is used create an array. Each item is separated\nby fysh food -.value is ",(0,a.jsx)(n.code,{children:"[0b010, 0b010] = [2, 2]"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven> \u2248 [><({(\xb0> - ><({(\xb0>] ~\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Accessing Array Elements:"})," These fysh tanks can be traversed using a fysh\ntank ",(0,a.jsx)(n.code,{children:"[ ]"})," with a number inside it. Steven returns the element at index 1.\nArray indexes start at 0."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fysh",children:"><steven>[><(({\xb0>] ~\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1503:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(758);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);