"use strict";(self.webpackChunk_fysh_fyve_source=self.webpackChunk_fysh_fyve_source||[]).push([[401],{7455:(e,t,a)=>{a.d(t,{A:()=>g});a(758);var s=a(3526),n=a(1119),i=a(5390),r=a(5817),l=a(731),o=a(9850),c=a(8840),d=a(6070);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_BDG7"};function h(){var e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_sF_F"};function b(e){var t=e.children,a=e.href,s="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:s,itemProp:"name",children:t}):a?(0,d.jsx)(l.A,{className:s,href:a,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:s,children:t})}function x(e){var t=e.children,a=e.active,n=e.index,i=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(n+1)})]}))}function g(){var e=(0,i.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(n.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,o.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map((function(t,a){var s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:a,addMicrodata:!!n,children:(0,d.jsx)(b,{href:n,isLast:s,children:t.label})},a)}))]})}):null}},1863:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var s=a(758),n=a(9103),i=a(2410),r=a(6070),l=s.createContext(null);function o(e){var t=e.children,a=function(e){return(0,s.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:a,children:t})}function c(){var e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e,t=c(),a=t.metadata,s=t.frontMatter,i=t.assets;return(0,r.jsx)(n.be,{title:a.title,description:a.description,keywords:s.keywords,image:null!=(e=i.image)?e:s.image})}var u=a(3526),m=a(3581),h=a(9869);function v(){var e=c().metadata;return(0,r.jsx)(h.A,{previous:e.previous,next:e.next})}var b=a(1668),x=a(6549),g=a(1119),p=a(9850),j=a(731);const f={tag:"tag_GDZD",tagRegular:"tagRegular_jHIE",tagWithCount:"tagWithCount_CbVz"};function _(e){var t=e.permalink,a=e.label,s=e.count,n=e.description;return(0,r.jsxs)(j.A,{href:t,title:n,className:(0,u.A)(f.tag,s?f.tagWithCount:f.tagRegular),children:[a,s&&(0,r.jsx)("span",{children:s})]})}const A={tags:"tags_zI5K",tag:"tag_GJZl"};function C(e){var t=e.tags;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(p.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,u.A)(A.tags,"padding--none","margin-left--sm"),children:t.map((function(e){return(0,r.jsx)("li",{className:A.tag,children:(0,r.jsx)(_,Object.assign({},e))},e.permalink)}))})]})}var N=a(7363);function L(){var e=c().metadata,t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,n=e.tags,i=n.length>0,l=!!(t||a||s);return i||l?(0,r.jsxs)("footer",{className:(0,u.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(C,{tags:n})})}),l&&(0,r.jsx)(N.A,{className:(0,u.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s})]}):null}var T=a(7126),k=a(3660),M=a(5045);const w={tocCollapsibleButton:"tocCollapsibleButton_Rw5a",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_PGAd"};var y=["collapsed"];function B(e){var t=e.collapsed,a=(0,M.A)(e,y);return(0,r.jsx)("button",Object.assign({type:"button"},a,{className:(0,u.A)("clean-btn",w.tocCollapsibleButton,!t&&w.tocCollapsibleButtonExpanded,a.className),children:(0,r.jsx)(p.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const I={tocCollapsible:"tocCollapsible_fb_l",tocCollapsibleContent:"tocCollapsibleContent_lVmH",tocCollapsibleExpanded:"tocCollapsibleExpanded_Qk0c"};function H(e){var t=e.toc,a=e.className,s=e.minHeadingLevel,n=e.maxHeadingLevel,i=(0,T.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(I.tocCollapsible,!l&&I.tocCollapsibleExpanded,a),children:[(0,r.jsx)(B,{collapsed:l,onClick:o}),(0,r.jsx)(T.N,{lazy:!0,className:I.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(k.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:n})})]})}const V={tocMobile:"tocMobile_xCLm"};function G(){var e=c(),t=e.toc,a=e.frontMatter;return(0,r.jsx)(H,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,u.A)(g.G.docs.docTocMobile,V.tocMobile)})}var O=a(627);function E(){var e=c(),t=e.toc,a=e.frontMatter;return(0,r.jsx)(O.A,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var P=a(4915),D=a(6127);function R(e){var t,a,s,n,i=e.children,l=(t=c(),a=t.metadata,s=t.frontMatter,n=t.contentTitle,s.hide_title||void 0!==n?null:a.title);return(0,r.jsxs)("div",{className:(0,u.A)(g.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(P.A,{as:"h1",children:l})}),(0,r.jsx)(D.A,{children:i})]})}var F=a(7455),U=a(2849);const S={docItemContainer:"docItemContainer_gsa8",docItemCol:"docItemCol_UoE9"};function z(e){var t,a,s,n,i,l,o=e.children,d=(t=c(),a=t.frontMatter,s=t.toc,n=(0,m.l)(),i=a.hide_table_of_contents,l=!i&&s.length>0,{hidden:i,mobile:l?(0,r.jsx)(G,{}):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:(0,r.jsx)(E,{})}),h=c().metadata;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&S.docItemCol),children:[(0,r.jsx)(U.A,{metadata:h}),(0,r.jsx)(b.A,{}),(0,r.jsxs)("div",{className:S.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(F.A,{}),(0,r.jsx)(x.A,{}),d.mobile,(0,r.jsx)(R,{children:o}),(0,r.jsx)(L,{})]}),(0,r.jsx)(v,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function W(e){var t="docs-doc-id-"+e.content.metadata.id,a=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(n.e3,{className:t,children:[(0,r.jsx)(d,{}),(0,r.jsx)(z,{children:(0,r.jsx)(a,{})})]})})}},9869:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var s=a(9850),n=a(3526),i=a(731),r=a(6070);function l(e){var t=e.permalink,a=e.title,s=e.subLabel,l=e.isNext;return(0,r.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}function o(e){var t=e.previous,a=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.jsx)(l,Object.assign({},t,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),a&&(0,r.jsx)(l,Object.assign({},a,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},6549:(e,t,a)=>{a.d(t,{A:()=>o});a(758);var s=a(3526),n=a(9850),i=a(1119),r=a(6534),l=a(6070);function o(e){var t=e.className,a=(0,r.r)();return a.badge?(0,l.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(n.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},1668:(e,t,a)=>{a.d(t,{A:()=>x});a(758);var s=a(3526),n=a(8979),i=a(731),r=a(9850),l=a(6908),o=a(1119),c=a(8355),d=a(6534),u=a(6070);var m={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var t=m[e.versionMetadata.banner];return(0,u.jsx)(t,Object.assign({},e))}function v(e){var t=e.versionLabel,a=e.to,s=e.onClick;return(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:a,onClick:s,children:(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var t,a=e.className,i=e.versionMetadata,r=(0,n.A)().siteConfig.title,d=(0,l.vT)({failfast:!0}).pluginId,m=(0,c.g1)(d).savePreferredVersionName,b=(0,l.HW)(d),x=b.latestDocSuggestion,g=b.latestVersionSuggestion,p=null!=x?x:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return(0,u.jsxs)("div",{className:(0,s.A)(a,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:i})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:g.label,to:p.path,onClick:function(){return m(g.name)}})})]})}function x(e){var t=e.className,a=(0,d.r)();return a.banner?(0,u.jsx)(b,{className:t,versionMetadata:a}):null}}}]);