"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[177],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return t?a.createElement(k,r(r({ref:n},m),{},{components:t})):a.createElement(k,r({ref:n},m))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},680:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={},p="Mappings",u={unversionedId:"config/Mappings",id:"config/Mappings",title:"Mappings",description:"- list of some important mappings!",source:"@site/docs/config/Mappings.md",sourceDirName:"config",slug:"/config/Mappings",permalink:"/config/Mappings",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Custom config",permalink:"/config/Custom config"},next:{title:"Lsp stuff",permalink:"/config/Lsp stuff"}},m={},s=[{value:"Navigate in insert mode",id:"navigate-in-insert-mode",level:2},{value:"Switch windows",id:"switch-windows",level:2},{value:"Misc",id:"misc",level:2},{value:"NvChad",id:"nvchad",level:2},{value:"Terminal",id:"terminal",level:2},{value:"NvimTree",id:"nvimtree",level:2},{value:"Mapping format",id:"mapping-format",level:2},{value:"Mappings table structure",id:"mappings-table-structure",level:2},{value:"Override default mappings",id:"override-default-mappings",level:2},{value:"Mapping with which-key disabled",id:"mapping-with-which-key-disabled",level:2}],d={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mappings"},"Mappings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"list of some important mappings!"),(0,l.kt)("li",{parentName:"ul"},"C = Ctrl"),(0,l.kt)("li",{parentName:"ul"},"leader = space"),(0,l.kt)("li",{parentName:"ul"},"A = alt"),(0,l.kt)("li",{parentName:"ul"},"S = shift")),(0,l.kt)("h2",{id:"navigate-in-insert-mode"},"Navigate in insert mode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + h/j/k/l")," - move cursor"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + a")," - beginning of the line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + e")," -  end of the line")),(0,l.kt)("h2",{id:"switch-windows"},"Switch windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + h")," - switch left window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + j")," - switch bottom window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + k")," - switch top window"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + l")," - switch right window")),(0,l.kt)("h2",{id:"misc"},"Misc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + s")," - save"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"S + b")," - new buffer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + n")," - toggle number line"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + rn")," - toggle relative number line")),(0,l.kt)("h2",{id:"nvchad"},"NvChad"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + uu")," - update nvchad"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + th")," - change themes")),(0,l.kt)("h2",{id:"terminal"},"Terminal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A + i")," - toggle floating terminal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A + h")," - toggle horizontal terminal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A + v")," - toggle vertical terminal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + h")," - new horizontal terminal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leader + v")," - new vertical terminal")),(0,l.kt)("h2",{id:"nvimtree"},"NvimTree"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"C + n")," - toggle NvimTree")),(0,l.kt)("p",null,"(Note check the rest of the mappings by running :Telescope keymaps)"),(0,l.kt)("h1",{id:"customization"},"Customization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Defaults are defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"core.mappings")," (core/mappings.lua), which you should familiarize yourself with"),(0,l.kt)("li",{parentName:"ul"},"User mappings should be defined in the ",(0,l.kt)("inlineCode",{parentName:"li"},"mappings")," field of the table returned by ",(0,l.kt)("inlineCode",{parentName:"li"},"custom.chadrc")," (these can be required from another file, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},'M.mappings = require "custom.mappings"'),")")),(0,l.kt)("h2",{id:"mapping-format"},"Mapping format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- general format\n\n ["keys"] = {"action", "icon  mapping description"}\n\n -- examples\n\n ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree"}\n\n ["<C-s>"] = { "<cmd> w <CR>", "\ufb1a  save file" },\n\n ["<leader>uu"] = { "<cmd> :NvChadUpdate <CR>", "\uf135  update nvchad" },\n\n -- example with lua function\n ["<leader>tt"] = {\n     function()\n        require("base46").toggle_theme()\n     end,\n        "\uf205   toggle theme",\n   },\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The mapping description is required for ",(0,l.kt)("inlineCode",{parentName:"li"},"WhichKey")," ",(0,l.kt)("a",{parentName:"li",href:"#mapping-with-which-key-disabled"},"but this can be disabled")),(0,l.kt)("li",{parentName:"ul"},"As shown above, you can use lua functions in the mappings (e.g., to call lua modules)"),(0,l.kt)("li",{parentName:"ul"},"Icons are visually appealing and help readability, but they are optional",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Best practice: place icons before the textual description, separated by 2-3 spaces"),(0,l.kt)("li",{parentName:"ul"},"Tip: ",(0,l.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/cheat-sheet"},"Find icons to copy/paste at https://www.nerdfonts.com/cheat-sheet"))))),(0,l.kt)("h2",{id:"mappings-table-structure"},"Mappings table structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is the mappings structure of core.mappings and your mappings file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\n-- add this table only when you want to disable default keys\nM.disabled = {\n  n = {\n      ["<leader>h"] = "",\n      ["<C-s>"] = ""\n  }\n}\n\nM.abc = {\n\n  n = {\n     ["<C-n>"] = {"<cmd> NvimTreeToggle <CR>", "Toggle nvimtree"}\n  }\n\n  i = {\n    -- more keys!\n  }\n}\n\nM.xyz = {\n  -- stuff\n}\n\nreturn M\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"abc")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"xyz")," above are arbitrary; they could, for example, be a plugin's name"),(0,l.kt)("li",{parentName:"ul"},"n, i, v, are the mode names, i.e., normal, insert, visual"),(0,l.kt)("li",{parentName:"ul"},"Be sure to maintain a table structure similar to core.mappings ")),(0,l.kt)("h2",{id:"override-default-mappings"},"Override default mappings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"lets override nvimtree's mappings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc\nM.mappings = require "custom.mappings"\n\n-- the above path can be any file in custom dir, just an example!\n')),(0,l.kt)("p",null,"You can also define custom ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_opts")," for each mapping block. These are the default values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- IMPORTANT: `mode_opts` will apply to all key mappings in `M.<PLUGIN>`\n{\n  buffer = nil, -- Global mappings. Specify a buffer number for buffer local mappings\n  silent = true, -- use `silent` when creating keymaps\n  noremap = true, -- use `noremap` when creating keymaps\n  nowait = false, -- use `nowait` when creating keymaps\n\n  -- all standard key binding opts are supported \n}\n")),(0,l.kt)("p",null,"You only need to add values to ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_opts")," that you want to add or change from the default. If\nyou don't want to alter the default values you don't have to add ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_opts")," to the table at\nall."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE:")," If you only want some key maps for an extension to have a specified set of ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_opts"),",\nsimply create another ",(0,l.kt)("inlineCode",{parentName:"p"},"M.<PLUGIN>")," block for the same extension (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"M.nvimtree_2"),") and define\nthe new ",(0,l.kt)("inlineCode",{parentName:"p"},"mode_opts"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom.mappings\n\nlocal M = {}\n\nM.nvimtree = {\n   mode_opts = { silent = false }, -- this is completely optional\n   n = {\n      ["<leader>ah"] = { "<cmd> NvimTreeToggle <CR>", "\uf413   toggle nvimtree" },\n      ["<C-n>"] = { "<cmd> Telescope <CR>", "open telescope" },\n   },\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/siduck/dotfiles/blob/master/nvchad/custom/mappings.lua"},"siduck's config")," for reference"),(0,l.kt)("li",{parentName:"ul"},"The same way you can add your mappings :)")),(0,l.kt)("h2",{id:"mapping-with-which-key-disabled"},"Mapping with which-key disabled"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The method's just the same but in this you dont have to write the mappings description!"),(0,l.kt)("li",{parentName:"ul"},"Also put this into your custom.init.lua file l")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"}," nvchad.no_WhichKey_map()\n")))}c.isMDXComponent=!0}}]);