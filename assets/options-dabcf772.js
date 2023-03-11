import{d as e,$ as l,v as c}from"./index-48adef73.js";function t(i){const n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code"},i.components);return l(c,{children:[e(n.h2,{children:"Override default options"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Put the options in ",e(n.code,{children:"custom/init.lua"}),"."]}),`
`,e(n.li,{children:"New options can put in the same file as well."}),`
`]}),`
`,e(n.h2,{children:"Autocmds & Globals"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["Load these in the ",e(n.code,{children:"custom/init.lua"})," file."]}),`
`]}),`
`,e(n.h2,{children:"Snippets"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"NvChad uses luasnip for snippets."}),`
`,e(n.li,{children:"For custom snippets you can add the below global."}),`
`,e(n.li,{children:e(n.code,{children:'vim.g.luasnippets_path = "your snippets path"'})}),`
`]})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(t,i)})):t(i)}export{d as default};
