"use strict";(self.webpackChunkdefault=self.webpackChunkdefault||[]).push([[1974],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>m});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),p=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(c.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(t),y=n,m=g["".concat(c,".").concat(y)]||g[y]||u[y]||o;return t?r.createElement(m,i(i({ref:a},s),{},{components:t})):r.createElement(m,i({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5401:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(8168),n=(t(6540),t(5680));const o={sidebar_position:1},i="Create a Page",l={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/fa/docs/tutorial-basics/create-a-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/fa/docs/category/tutorial---basics"},next:{title:"Create a Document",permalink:"/fa/docs/tutorial-basics/create-a-document"}},c={},p=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],s={toc:p},g="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"create-a-page"},"Create a Page"),(0,n.yg)("p",null,"Add ",(0,n.yg)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.yg)("strong",{parentName:"p"},"standalone page"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.yg)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.yg)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.yg)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.yg)("p",null,"Create a file at ",(0,n.yg)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.yg)("p",null,"A new page is now available at ",(0,n.yg)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}u.isMDXComponent=!0}}]);