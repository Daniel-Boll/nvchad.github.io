"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[458],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return t?i.createElement(f,l(l({ref:n},s),{},{components:t})):i.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6230:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],o={},u="Extras",c={unversionedId:"Extras",id:"Extras",title:"Extras",description:"- Plugins which seem awesome and cool , which enhance the experience while working in neovim and aren't added by default in nvchad will be added here.",source:"@site/docs/Extras.md",sourceDirName:".",slug:"/Extras",permalink:"/Extras",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Features",permalink:"/features"},next:{title:"FAQ",permalink:"/faq"}},s={},p=[{value:"neoscroll.nvim",id:"neoscrollnvim",level:2},{value:"AutoSave.nvim",id:"autosavenvim",level:2},{value:"TrueZen.nvim",id:"truezennvim",level:2},{value:"stabilize.nvim",id:"stabilizenvim",level:2},{value:"telescope-media-files.nvim",id:"telescope-media-filesnvim",level:2}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extras"},"Extras"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugins which seem awesome and cool , which enhance the experience while working in neovim and aren't added by default in nvchad will be added here.")),(0,a.kt)("h2",{id:"neoscrollnvim"},"neoscroll.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Smooth scrolling neovim plugin written in lua"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/karb94/neoscroll.nvim"},"repo")),(0,a.kt)("li",{parentName:"ul"},"config :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'  ["karb94/neoscroll.nvim"] = {\n       config = function()\n          require("neoscroll").setup()\n       end,\n\n       -- lazy loading\n       setup = function()\n         nvchad.packer_lazy_load "neoscroll.nvim"\n       end,\n}\n')),(0,a.kt)("h2",{id:"autosavenvim"},"AutoSave.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Auto save files plugin written in lua"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Pocco81/AutoSave.nvim"},"repo")),(0,a.kt)("li",{parentName:"ul"},"config :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["Pocco81/AutoSave.nvim"] = {\n   config = function()\n      local autosave = require "autosave"\n\n      autosave.setup {\n         enabled = true,\n         execution_message = "autosaved at : " .. vim.fn.strftime "%H:%M:%S",\n         events = { "InsertLeave", "TextChanged" },\n         conditions = {\n            exists = true,\n            filetype_is_not = {},\n            modifiable = true,\n         },\n         clean_command_line_interval = 2500,\n         on_off_commands = true,\n         write_all_buffers = false,\n      }\n   end,\n}\n')),(0,a.kt)("h2",{id:"truezennvim"},"TrueZen.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clean and elegant distraction-free writing for NeoVim."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Pocco81/TrueZen.nvim"},"repo")),(0,a.kt)("li",{parentName:"ul"},"config :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'["Pocco81/TrueZen.nvim"] = {\n      cmd = {\n         "TZAtaraxis",\n         "TZMinimalist",\n         "TZFocus",\n      },\n      config = function()\n          -- check https://github.com/Pocco81/TrueZen.nvim#setup-configuration (init.lua version)\n      end\n   }\n')),(0,a.kt)("h2",{id:"stabilizenvim"},"stabilize.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NeoVim plugin to stabilize window open/close events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/luukvbaal/stabilize.nvim"},"repo")),(0,a.kt)("li",{parentName:"ul"},"config : ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["luukvbaal/stabilize.nvim"] = {\n    config = function() \n            require("stabilize").setup()\n        end\n  }\n')),(0,a.kt)("h2",{id:"telescope-media-filesnvim"},"telescope-media-files.nvim"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Telescope extension to preview media files using Ueberzug"),(0,a.kt)("li",{parentName:"ul"},"Dependencies : ",(0,a.kt)("inlineCode",{parentName:"li"},"ueberzug")," , ",(0,a.kt)("inlineCode",{parentName:"li"},"ripgrep")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"fd")),(0,a.kt)("li",{parentName:"ul"},"config : ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["nvim-telescope/telescope-media-files.nvim"] = {\n      after = "telescope.nvim",\n      config = function()\n         require("telescope").setup {\n            extensions = {\n               media_files = {\n                  filetypes = { "png", "webp", "jpg", "jpeg" },\n                  find_cmd = "rg", -- find command (defaults to `fd`)\n               },\n            },\n         }\n         require("telescope").load_extension "media_files"\n      end,\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"command : ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vim"},":Telescope media_files \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note: This works only on linux and that too mostly xorg since ueberzug depends on xorg, if you use wayland then its not going to work mostly but it works with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/siduck/st"},"st")," (knowing that xwayland is running in the bg) ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"screenshot: "))),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/telmedia.png"}))}d.isMDXComponent=!0}}]);