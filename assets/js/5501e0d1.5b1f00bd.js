"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[286],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,g=u["".concat(s,".").concat(f)]||u[f]||m[f]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={},o=void 0,i={unversionedId:"config/Language Server Protocol",id:"config/Language Server Protocol",title:"Language Server Protocol",description:"Setup lsp server",source:"@site/docs/config/Language Server Protocol.md",sourceDirName:"config",slug:"/config/Language Server Protocol",permalink:"/config/Language Server Protocol",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"UI plugins",permalink:"/config/nvchad_ui"},next:{title:"Format & lint",permalink:"/config/Format & lint"}},s={},c=[{value:"Setup lsp server",id:"setup-lsp-server",level:2},{value:"Mason.nvim",id:"masonnvim",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup-lsp-server"},"Setup lsp server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Skim through ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"lspconfig repo")," to get a general overview of how the config works."),(0,a.kt)("li",{parentName:"ul"},"Then check ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md"},"server_configurations.md")," to make sure your language's lsp server is present there.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- We are just modifying lspconfig\'s packer definition table\n-- Put this in your custom plugins section i.e M.plugins field \n\n["neovim/nvim-lspconfig"] = {\n    config = function()\n      require "plugins.configs.lspconfig"\n      require "custom.plugins.lspconfig"\n    end,\n},\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom.plugins.lspconfig\nlocal on_attach = require("plugins.configs.lspconfig").on_attach\nlocal capabilities = require("plugins.configs.lspconfig").capabilities\n\nlocal lspconfig = require "lspconfig"\nlocal servers = { "html", "cssls", "clangd"}\n\nfor _, lsp in ipairs(servers) do\n  lspconfig[lsp].setup {\n    on_attach = on_attach,\n    capabilities = capabilities,\n  }\nend\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open nvim and run ",(0,a.kt)("inlineCode",{parentName:"li"},":PackerCompile"))),(0,a.kt)("h2",{id:"masonnvim"},"Mason.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Mason.nvim plugin in NvChad is mainly used to install lspservers, formatters, linters, and debug adapters. ")),(0,a.kt)("p",null,"(NOTE: This only downloads the binaries. The lsp server/formatters won't run automatically. You need to configure a custom lspconfig and possibly some plugin like null-ls/neoformat or others for the formatters to work.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":MasonInstall html-lsp \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},":Mason")," command to open Mason.nvim's floating window and there you can install, update, or uninstall the available packages (i.e. lspservers, linters, formatters, etc.)"),(0,a.kt)("li",{parentName:"ul"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," on the package name in the list to install it."),(0,a.kt)("li",{parentName:"ul"},"It's better to list all your required packages and put them into your Mason override config."),(0,a.kt)("li",{parentName:"ul"},"Find the exact name of your packages from the ",(0,a.kt)("inlineCode",{parentName:"li"},":Mason")," window"),(0,a.kt)("li",{parentName:"ul"},"This is an example of siduck's config:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["williamboman/mason.nvim"] = {\n   override_options = {\n      ensure_installed = {\n        -- lua stuff\n        "lua-language-server",\n        "stylua",\n\n        -- web dev\n        "css-lsp",\n        "html-lsp",\n        "typescript-language-server",\n        "deno",\n        "emmet-ls",\n        "json-lsp",\n\n        -- shell\n        "shfmt",\n        "shellcheck",\n      },\n    },\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once this is done, reopen nvim and run the ",(0,a.kt)("inlineCode",{parentName:"li"},":MasonInstallAll")," command. This will install the listed packages in the ",(0,a.kt)("inlineCode",{parentName:"li"},"ensure_installed")," field of the mason.nvim config."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"MasonInstallAll")," command is a custom NvChad command and not from the original set of mason.nvim commands.")))}m.isMDXComponent=!0}}]);