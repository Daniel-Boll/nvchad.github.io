import{d as e,$ as s,v as i}from"./index-58cc0a3f.js";function a(l){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",p:"p",code:"code",pre:"pre",span:"span"},l.components);return s(i,{children:[e(n.h2,{children:"Overview"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:["NvChad uses ",e(n.a,{href:"https://github.com/folke/lazy.nvim",children:"lazy.nvim"})," for plugins management so its syntax is valid."]}),`
`,e(n.li,{children:"Basically NvChad expects a user plugin table, which then gets merged with the default plugins table."}),`
`,e(n.li,{children:"So plugins defined in the custom plugins table override the plugin specs defined in default plugins table too."}),`
`]}),`
`,e(n.h2,{children:"Lazy loading"}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"We lazy load almost 95% of the plugins, so we expect you to lazy load the plugins as well! As its efficient in reducing startuptime. We don't want users making NvChad slow just because they didn't lazy load plugins they've added!"}),`
`]}),`
`,e(n.h3,{children:"Tips"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[`
`,s(n.p,{children:[e("strong",{children:" cmd : "})," If a plugin loads on commands then use the ",e(n.code,{children:"cmd"}),` spec, For ex: trouble.nvim plugin opens when we run "Trouble" command, so now I'd just write the word "Trouble" in the cmd spec of trouble.nvim plugin definition.`]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:[e("strong",{children:" event : "}),` Use this spec if you want to load a plugin on certain vim event ( check :h events ). Cmp.nvim plugin is useful when we're in insert mode, so I lazyload it at "InsertEnter" event.`]}),`
`]}),`
`,s(n.li,{children:[`
`,s(n.p,{children:["There are more specs through which you could do lazyloading like ",e("strong",{children:" ft, cond, keys "}),"."]}),`
`]}),`
`]}),`
`,e(n.h2,{children:"Managing custom plugins"}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"In NvChad (lazy = true) is set to all plugins, so if you want a plugin to be enabled on startup, do (lazy = false)"}),`
`,e(n.li,{children:"Some examples :"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[e(n.span,{className:"hljs-comment",children:"-- custom/chadrc.lua"}),`
M.plugins = `,e(n.span,{className:"hljs-string",children:'"custom.plugins"'}),`
`]})}),`
`,e("br",{}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[e(n.span,{className:"hljs-comment",children:"-- custom/plugins.lua"}),`
`,e(n.span,{className:"hljs-keyword",children:"return"}),` {

  `,e(n.span,{className:"hljs-comment",children:"-- Install plugin"}),`
  { `,e(n.span,{className:"hljs-string",children:'"elkowar/yuck.vim"'})," , lazy = ",e(n.span,{className:"hljs-literal",children:"false"}),` },

  `,e(n.span,{className:"hljs-comment",children:"-- Using more plugin specs like cmd etc"}),`
  {
    `,e(n.span,{className:"hljs-string",children:'"Pocco81/TrueZen.nvim"'}),`,
    cmd = { `,e(n.span,{className:"hljs-string",children:'"TZAtaraxis"'}),", ",e(n.span,{className:"hljs-string",children:'"TZMinimalist"'}),` },
    `,e(n.span,{className:"hljs-built_in",children:"config"})," = ",s(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
      `,e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"custom.plugins.truezen"'}),`
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
  }

  `,e(n.span,{className:"hljs-comment",children:"-- Override plugin specs options"}),`
  { `,e(n.span,{className:"hljs-string",children:'"folke/which-key.nvim"'}),", enabled = ",e(n.span,{className:"hljs-literal",children:"true"}),` },
  
  `,e(n.span,{className:"hljs-comment",children:"-- opts overrides default plugin config's option"}),`
  {
    `,e(n.span,{className:"hljs-string",children:'"nvim-treesitter/nvim-treesitter"'}),`,
    opts = {
      ensure_installed = {`,e(n.span,{className:"hljs-string",children:'"html"'}),", ",e(n.span,{className:"hljs-string",children:'"css"'}),", ",e(n.span,{className:"hljs-string",children:'"bash"'}),`},
    },
  },

  `,e(n.span,{className:"hljs-comment",children:"-- Here we wrap opts with a function because its loading cmp module"}),`
  `,e(n.span,{className:"hljs-comment",children:"-- If we didnt wrap with function then the code will run on startup"}),`
   {
    `,e(n.span,{className:"hljs-string",children:'"hrsh7th/nvim-cmp"'}),`
    opts = `,s(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
      `,e(n.span,{className:"hljs-keyword",children:"local"})," cmp = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"cmp"'}),`

      `,e(n.span,{className:"hljs-keyword",children:"return"}),` {
        mapping = {
          [`,e(n.span,{className:"hljs-string",children:'"<C-d>"'}),"] = cmp.mapping.scroll_docs(",e(n.span,{className:"hljs-number",children:"-8"}),`),
        },
      }
    `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
   },
}
`]})})]})}function r(l={}){const{wrapper:n}=l.components||{};return n?e(n,Object.assign({},l,{children:e(a,l)})):a(l)}export{r as default};
