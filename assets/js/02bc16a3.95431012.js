"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[719],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},l=void 0,o={unversionedId:"config/Lsp stuff",id:"config/Lsp stuff",title:"Lsp stuff",description:"Setup lsp server",source:"@site/docs/config/Lsp stuff.md",sourceDirName:"config",slug:"/config/Lsp stuff",permalink:"/config/Lsp stuff",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"UI plugins",permalink:"/config/nvchad_ui"},next:{title:"Format & lint",permalink:"/config/Format & lint"}},s={},c=[{value:"Setup lsp server",id:"setup-lsp-server",level:2},{value:"Mason.nvim",id:"masonnvim",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup-lsp-server"},"Setup lsp server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Skim through ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"lspconfig repo")," to get a general overview of how the config looks/works."),(0,a.kt)("li",{parentName:"ul"},"Then check ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md"},"server_configurations.md")," to make sure your language's lsp server is present there.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- we are just modifying lspconfig\'s packer definition table\n-- put this in your custom plugins section i.e M.plugins.user field \n\n["neovim/nvim-lspconfig"] = {\n    config = function()\n      require "plugins.configs.lspconfig"\n      require "custom.plugins.lspconfig"\n    end,\n},\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom.plugins.lspconfig\nlocal on_attach = require("plugins.configs.lspconfig").on_attach\nlocal capabilities = require("plugins.configs.lspconfig").capabilities\n\nlocal lspconfig = require "lspconfig"\nlocal servers = { "html", "cssls", "clangd"}\n\nfor _, lsp in ipairs(servers) do\n  lspconfig[lsp].setup {\n    on_attach = on_attach,\n    capabilities = capabilities,\n  }\nend\n')),(0,a.kt)("h2",{id:"masonnvim"},"Mason.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mason.nvim plugin in nvchad is mainly used to install lspservers, formatters, linters, debug adapters. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":MasonInstall html-lsp \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},":Mason")," command to open Mason.nvim's floating window and there you can install, update, uninstall etc the available packages ( i.e lspservers, linters, formatters etc)"),(0,a.kt)("li",{parentName:"ul"},"Press i on the package name in the list to install it."),(0,a.kt)("li",{parentName:"ul"},"Its better to list all your requireed packages and put them into your mason override config."),(0,a.kt)("li",{parentName:"ul"},"Find exact names of your package from ",(0,a.kt)("inlineCode",{parentName:"li"},":Mason")," window"),(0,a.kt)("li",{parentName:"ul"},"This is an example of siduck's config :D")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["williamboman/mason.nvim"] = {\n      ensure_installed = {\n        -- lua stuff\n        "lua-language-server",\n        "stylua",\n\n        -- web dev\n        "css-lsp",\n        "html-lsp",\n        "typescript-language-server",\n        "deno",\n        "emmet-ls",\n        "json-lsp",\n\n        -- shell\n        "shfmt",\n        "shellcheck",\n      },\n    },\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once this is done, then reopen nvim and run ",(0,a.kt)("inlineCode",{parentName:"li"},":MasonInstallAll")," command. This will install the listed packages in ",(0,a.kt)("inlineCode",{parentName:"li"},"ensure_installed")," field of mason.nvim config."),(0,a.kt)("li",{parentName:"ul"},"Btw that ",(0,a.kt)("inlineCode",{parentName:"li"},"MasonInstallAll")," command is a custom nvchad command and not really from any of mason.nvim's original commands.")))}u.isMDXComponent=!0}}]);