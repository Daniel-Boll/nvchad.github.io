import{d as n,$ as o,v as r}from"./index-48adef73.js";function t(i){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",a:"a"},i.components);return o(r,{children:[n(e.h2,{children:"If you're new to Neovim/Vim"}),`
`,n(e.p,{children:"We strongly encourage you to learn how to use Neovim/Vim. If you are totally new to Vim then you cannot use NvChad until you gain some basic knowledge about Vim's modes, default editor commands, and key bindings."}),`
`,n(e.p,{children:"These are highly recommended and a must do for any new Vimmer:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"Vim tutor"}),`
`]}),`
`,n(e.h2,{children:"Setup your custom config"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["NvChad updates won't overwite the ",n(e.code,{children:"lua/custom"})," dir as it's gitignored and all of the user changes must be done in this dir only."]}),`
`,o(e.li,{children:[n(e.a,{href:"https://github.com/NvChad/example_config",children:"Minimal custom config"})," : This is a good starting point and can be taken as an example."]}),`
`,n(e.li,{children:"Go through it and setup treesitter parsers, mason binaries, lspconfig etc."}),`
`,o(e.li,{children:["Chadrc is just meant to override ",n(e.code,{children:"core/default_config.lua"})," file, check what all options are available!"]}),`
`]}),`
`,n(e.h2,{children:"Nvim lua"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"You should know how to convert a vimscript code into lua for your config."}),`
`,o(e.li,{children:["Read the official ",n(e.a,{href:"https://neovim.io/doc/user/lua-guide.html#lua-guide",children:"documentation"})," for this."]}),`
`]}),`
`,n(e.h2,{children:"Read NvChad docs"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:"Now you have to read nvchad docs in order ( from here ) in order to use nvchad properly, I'll try to keep it as short as possible."}),`
`]})]})}function l(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(t,i)})):t(i)}export{l as default};
