"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,u(u({ref:t},d),{},{components:n})):a.createElement(f,u({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"nvchad_ui",title:"UI plugins"},u=void 0,i={unversionedId:"config/nvchad_ui",id:"config/nvchad_ui",title:"UI plugins",description:"Statusline & tabufline",source:"@site/docs/config/nvchad_ui.md",sourceDirName:"config",slug:"/config/nvchad_ui",permalink:"/config/nvchad_ui",tags:[],version:"current",frontMatter:{id:"nvchad_ui",title:"UI plugins"},sidebar:"config",previous:{title:"Mappings",permalink:"/config/Mappings"},next:{title:"Language Server Protocol",permalink:"/config/Language Server Protocol"}},o={},s=[{value:"Statusline &amp; tabufline",id:"statusline--tabufline",level:3},{value:"Override statusline modules",id:"override-statusline-modules",level:4},{value:"Tabufline",id:"tabufline",level:4}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"statusline--tabufline"},"Statusline & tabufline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use our own ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/ui"},"plugin")," for statusline & tabufline and it has some options."),(0,r.kt)("li",{parentName:"ul"},"The default config: (You must know that every plugin's default config is just a table).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  statusline = {\n      separator_style = "default", -- default/round/block/arrow\n\n     -- or \n     -- custom separators\n     -- separator_style = {\n     --    left = "\ue0c2 ",\n     --    right = "\ue0c0",\n     --  },\n\n      overriden_modules = nil,\n   },\n\n   -- lazyload it when there are 1+ buffers\n   tabufline = {\n      enabled = true,\n      lazyload = true,\n      overriden_modules = nil,\n   },\n}\n')),(0,r.kt)("h4",{id:"override-statusline-modules"},"Override statusline modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add this in your plugin overrides section:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'["NvChad/ui"] = {\n  override_options = {\n    statusline = {\n      separator_style = "round",\n      overriden_modules = function()\n        return require "custom.abc"\n      end,\n    },\n  },\n},\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/abc.lua must return a table\n\nlocal st_modules = require "nvchad_ui.statusline.modules"\n\nreturn {\n   mode = function()\n      return st_modules.mode() .. " bruh "\n   end,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, check the list of modules in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/statusline/modules.lua"},"our statusline modules file"),"."),(0,r.kt)("li",{parentName:"ul"},'In the above code, you can see that we wanted to print "bruh" next to the mode module in the statusline.'),(0,r.kt)("li",{parentName:"ul"},"The above code overrides the default mode module in our statusline so we can just use ",(0,r.kt)("inlineCode",{parentName:"li"},'return ""'),", this basically returns an empty string in the mode module which can also be thought of as disabling mode module."),(0,r.kt)("li",{parentName:"ul"},"Most of the time you want to add highlights to the text you inserted so you would have to add a highlight group to the text:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'"#BruhHl%" .. " bruh "\n\n-- so the highlight group here is BruhHl\n')),(0,r.kt)("h4",{id:"tabufline"},"Tabufline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add this in your plugin overrides section."),(0,r.kt)("li",{parentName:"ul"},"This example is for overriding the modules in tabufline:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'["NvChad/ui"] = {\n override_options = {\n   tabufline = {\n     lazyload = false, -- to show tabufline by default\n     overriden_modules = function()\n       return require "custom.xyz"\n     end,\n   },\n },\n},\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom/xyz.lua be like \n-- must return a table!\n\nlocal tabufline_modules = require "nvchad_ui.tabufline.modules"\n\nreturn {\n    buttons = function()\n       return tabufline_modules.buttons() .. " my button "\n   end,\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, check the list of modules in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/tabufline/modules.lua"},"our tabufline modules file"),"."),(0,r.kt)("li",{parentName:"ul"},"In the above code, we added a button to the tabufline's button list."),(0,r.kt)("li",{parentName:"ul"},"The above code overrides the default buttons module in our tabufline so we can just use ",(0,r.kt)("inlineCode",{parentName:"li"},'return ""'),", this basically returns an empty string in the buttons module which can also disable the buttons module.")))}p.isMDXComponent=!0}}]);