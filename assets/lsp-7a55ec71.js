import{d as s,$ as e,v as i}from"./index-58cc0a3f.js";function a(l){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span"},l.components);return e(i,{children:[s(n.h2,{children:"Setup lsp server"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Skim through ",s(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"lspconfig repo"})," to get a general overview of how the config works."]}),`
`,e(n.li,{children:["Then check ",s(n.a,{href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md",children:"server_configurations.md"})," to make sure your language's lsp server is present there."]}),`
`]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:[s(n.span,{className:"hljs-comment",children:"-- We are just modifying lspconfig's config spec"}),`
{
  `,s(n.span,{className:"hljs-string",children:'"neovim/nvim-lspconfig"'}),`,
   `,s(n.span,{className:"hljs-built_in",children:"config"})," = ",e(n.span,{className:"hljs-function",children:[s(n.span,{className:"hljs-keyword",children:"function"}),s(n.span,{className:"hljs-params",children:"()"})]}),`
      `,s(n.span,{className:"hljs-built_in",children:"require"})," ",s(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`
      `,s(n.span,{className:"hljs-built_in",children:"require"})," ",s(n.span,{className:"hljs-string",children:'"custom.plugins.lspconfig"'}),`
   `,s(n.span,{className:"hljs-keyword",children:"end"}),`,
},
`]})}),`
`,s("br",{}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:[s(n.span,{className:"hljs-comment",children:"-- custom.configs.lspconfig"}),`
`,s(n.span,{className:"hljs-keyword",children:"local"})," on_attach = ",s(n.span,{className:"hljs-built_in",children:"require"}),"(",s(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).on_attach
`,s(n.span,{className:"hljs-keyword",children:"local"})," capabilities = ",s(n.span,{className:"hljs-built_in",children:"require"}),"(",s(n.span,{className:"hljs-string",children:'"plugins.configs.lspconfig"'}),`).capabilities

`,s(n.span,{className:"hljs-keyword",children:"local"})," lspconfig = ",s(n.span,{className:"hljs-built_in",children:"require"})," ",s(n.span,{className:"hljs-string",children:'"lspconfig"'}),`
`,s(n.span,{className:"hljs-keyword",children:"local"})," servers = { ",s(n.span,{className:"hljs-string",children:'"html"'}),", ",s(n.span,{className:"hljs-string",children:'"cssls"'}),", ",s(n.span,{className:"hljs-string",children:'"clangd"'}),`}

`,s(n.span,{className:"hljs-keyword",children:"for"})," _, lsp ",s(n.span,{className:"hljs-keyword",children:"in"})," ",s(n.span,{className:"hljs-built_in",children:"ipairs"}),"(servers) ",s(n.span,{className:"hljs-keyword",children:"do"}),`
  lspconfig[lsp].setup {
    on_attach = on_attach,
    capabilities = capabilities,
  }
`,s(n.span,{className:"hljs-keyword",children:"end"}),`
`]})}),`
`,s(n.h2,{children:"Mason.nvim"}),`
`,e(n.ul,{children:[`
`,s(n.li,{children:"The Mason.nvim plugin is used to install lspservers, formatters, linters, and debug adapters."}),`
`,s(n.li,{children:"It's better to list all your required packages and put them into your Mason override config."}),`
`,e(n.li,{children:["Find the exact name of your packages from the ",s(n.code,{children:":Mason"})," window"]}),`
`]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:[" [",s(n.span,{className:"hljs-string",children:'"williamboman/mason.nvim"'}),`] = {
   override_options = {
      ensure_installed = {
        `,s(n.span,{className:"hljs-string",children:'"lua-language-server"'}),`,
        `,s(n.span,{className:"hljs-string",children:'"css-lsp"'}),`,
        `,s(n.span,{className:"hljs-string",children:'"html-lsp"'}),`,
        `,s(n.span,{className:"hljs-string",children:'"clangd"'}),`,
        `,s(n.span,{className:"hljs-string",children:'"prettier"'}),`
      },
    },
  }
`]})}),`
`,s("br",{}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["Reopen nvim & run the ",s(n.code,{children:":MasonInstallAll"})," command. This will install the listed binaries in the ",s(n.code,{children:"ensure_installed"})," table."]}),`
`,s(n.li,{children:"This only downloads the binaries. The lsp server/formatters won't run automatically. You need to configure a custom lspconfig and possibly some plugin like null-ls/neoformat etc for the formatters to work."}),`
`]})]})}function r(l={}){const{wrapper:n}=l.components||{};return n?s(n,Object.assign({},l,{children:s(a,l)})):a(l)}export{r as default};
