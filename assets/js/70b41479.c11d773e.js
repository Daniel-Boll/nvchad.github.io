"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={},l="Mappings",p={unversionedId:"config/Mappings",id:"config/Mappings",title:"Mappings",description:"Overview",source:"@site/docs/config/Mappings.md",sourceDirName:"config",slug:"/config/Mappings",permalink:"/config/Mappings",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"Plugins",permalink:"/config/plugins"},next:{title:"UI plugins",permalink:"/config/nvchad_ui"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"Mapping format",id:"mapping-format",level:2},{value:"Default opts values",id:"default-opts-values",level:3},{value:"Add new mappings",id:"add-new-mappings",level:2},{value:"Override default mappings",id:"override-default-mappings",level:2}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mappings"},"Mappings"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C = Ctrl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Space = leader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A = alt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"S = shift")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Defaults are defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"core.mappings")," (core/mappings.lua). "))),(0,r.kt)("h2",{id:"mapping-format"},"Mapping format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- opts here is completely optional\n\n ["keys"] = {"action", "icon  mapping description", opts = {}},\n\n -- more examples\n ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree", opts = {}},\n\n ["<leader>uu"] = { "<cmd> NvChadUpdate <CR>", "update nvchad" },\n ["<leader>uu"] = { ":NvChadUpdate <CR>", "update nvchad" }, -- this will work too, either use <cmd> or : before command\n\n [";"] = { ":", "enter cmdline", opts = { nowait = true } },\n ["jk"] = { "<ESC>", "escape insert mode" , opts = { nowait = true }},\n\n -- example with lua function\n ["<leader>tt"] = {\n     function()\n        require("base46").toggle_theme()\n     end,\n        "toggle theme",\n   },\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The mapping description is required for ",(0,r.kt)("inlineCode",{parentName:"li"},"WhichKey"),", so non-whichkey users can skip that.")),(0,r.kt)("h3",{id:"default-opts-values"},"Default opts values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"{\n  buffer = nil, -- Global mappings. Specify a buffer number for buffer local mappings\n  silent = true, \n  noremap = true,\n  nowait = false,\n\n  -- all standard key binding opts are supported \n}\n")),(0,r.kt)("h2",{id:"add-new-mappings"},"Add new mappings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is the mappings structure of core.mappings and your custom mappings."),(0,r.kt)("li",{parentName:"ul"},"You need to put your mappings into ",(0,r.kt)("inlineCode",{parentName:"li"},"modes")," like n, v, i, t, etc.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc\nM.mappings = require "custom.mappings"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"n = normal, i = insert and so on.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- lua/custom/mappings \nlocal M = {}\n\n-- add this table only when you want to disable default keys\nM.disabled = {\n  n = {\n      ["<leader>h"] = "",\n      ["<C-s>"] = ""\n  }\n}\n\nM.abc = {\n\n  n = {\n     ["<C-n>"] = {"<cmd> Telescope <CR>", "Open Telescope"}\n  }\n\n  i = {\n    -- more keys!\n  }\n}\n\nM.xyz = {\n  -- stuff\n}\n\nreturn M\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"abc")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"xyz")," above are arbitrary; they could, for example, be a plugin's name."),(0,r.kt)("li",{parentName:"ul"},"Be sure to maintain a table structure similar to core.mappings."),(0,r.kt)("li",{parentName:"ul"},"Mappings will be automatically loaded. You don't need to load them manually.")),(0,r.kt)("h2",{id:"override-default-mappings"},"Override default mappings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Let\'s override nvimtree\'s mappings\n\nM.nvimtree = {\n   n = {\n      ["<leader>ff"] = { "<cmd> NvimTreeToggle <CR>", "\uf413   toggle nvimtree" },\n      ["<C-n>"] = { "<cmd> Telescope <CR>", "open telescope" },\n   },\n}\n')))}m.isMDXComponent=!0}}]);