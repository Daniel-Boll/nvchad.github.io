import{d as l,$ as s,v as i}from"./index-5e4de1a2.js";function a(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",a:"a"},e.components);return s(i,{children:[l(n.h2,{children:"Install null-ls.nvim"}),`
`,s(n.ul,{children:[`
`,l(n.li,{children:"Dependencies load after the original plugin ( lspconfig in our case )."}),`
`,l(n.li,{children:"Null-ls is loaded after lspconfig as lspconfig is lazyloaded."}),`
`]}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[`{
 `,l(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
  dependencies = {
    `,l(n.span,{className:"hljs-string",children:'"jose-elias-alvarez/null-ls.nvim"'}),`,
    `,l(n.span,{className:"hljs-built_in",children:"config"})," = ",s(n.span,{className:"hljs-function",children:[l(n.span,{className:"hljs-keyword",children:"function"}),l(n.span,{className:"hljs-params",children:"()"})]}),`
      `,l(n.span,{className:"hljs-built_in",children:"require"})," ",l(n.span,{className:"hljs-string",children:'"custom.configs.null-ls"'}),`
    `,l(n.span,{className:"hljs-keyword",children:"end"}),`,
  },

  `,l(n.span,{className:"hljs-built_in",children:"config"})," = ",s(n.span,{className:"hljs-function",children:[l(n.span,{className:"hljs-keyword",children:"function"}),l(n.span,{className:"hljs-params",children:"()"})]}),`
    `,l(n.span,{className:"hljs-built_in",children:"require"})," ",l(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
    `,l(n.span,{className:"hljs-built_in",children:"require"})," ",l(n.span,{className:"hljs-string",children:'"custom.configs.lspconfig"'}),`
  `,l(n.span,{className:"hljs-keyword",children:"end"}),`,
}
`]})}),`
`,l(n.h2,{children:"Null-ls config"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:["Check ",l(n.a,{href:"https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md",children:"null-ls builtins"})," to get exact names for formatters, linters etc."]}),`
`]}),`
`,l(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[l(n.span,{className:"hljs-comment",children:'--  "custom.configs.null-ls.lua"'}),`

`,l(n.span,{className:"hljs-keyword",children:"local"})," null_ls = ",l(n.span,{className:"hljs-built_in",children:"require"})," ",l(n.span,{className:"hljs-string",children:'"null-ls"'}),`
`,l(n.span,{className:"hljs-keyword",children:"local"}),` b = null_ls.builtins

`,l(n.span,{className:"hljs-keyword",children:"local"}),` sources = {
   b.formatting.prettier,
   b.formatting.stylua,
}

null_ls.setup {
   `,l(n.span,{className:"hljs-built_in",children:"debug"})," = ",l(n.span,{className:"hljs-literal",children:"true"}),`,
   sources = sources,
}
`]})}),`
`,l("br",{}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:["Format code : ",l(n.code,{children:"<leader> + fm"})]}),`
`,l(n.li,{children:"linter/formatter/debugger listed in your null-ls config must be downloaded via mason or system wide."}),`
`]})]})}function r(e={}){const{wrapper:n}=e.components||{};return n?l(n,Object.assign({},e,{children:l(a,e)})):a(e)}export{r as default};
