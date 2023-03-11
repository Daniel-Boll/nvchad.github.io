import{d as e,$ as l,v as i}from"./index-5e4de1a2.js";function a(s){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",h3:"h3"},s.components);return l(i,{children:[e(n.h2,{children:"Statusline & tabufline"}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["We use our own ",e(n.a,{href:"https://github.com/NvChad/ui",children:"plugin"})," for statusline & tabufline and it has some options."]}),`
`,e(n.li,{children:"The default config: (You must know that every plugin's default config is just a table)."}),`
`]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-lua",children:[`M.ui = {
  ... some options

  statusline = {
    theme = `,e(n.span,{className:"hljs-string",children:'"default"'}),", ",e(n.span,{className:"hljs-comment",children:"-- default/vscode/vscode_colored/minimal"}),`

    `,e(n.span,{className:"hljs-comment",children:"-- default/round/block/arrow separators work only for default statusline theme"}),`
    `,e(n.span,{className:"hljs-comment",children:"-- round and block will work for minimal theme only"}),`
    separator_style = `,e(n.span,{className:"hljs-string",children:'"default"'}),`,
    overriden_modules = `,e(n.span,{className:"hljs-literal",children:"nil"}),`,
  },

  tabufline = {
    lazyload = `,e(n.span,{className:"hljs-literal",children:"true"}),`,
    overriden_modules = `,e(n.span,{className:"hljs-literal",children:"nil"}),`,
  },

  ... some options
}
`]})}),`
`,e(n.h3,{children:"Override statusline modules"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Add this in your plugin overrides section:"}),`
`]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-lua",children:[`statusline = {
  overriden_modules = `,l(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
    `,e(n.span,{className:"hljs-keyword",children:"local"})," st_modules = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"nvchad_ui.statusline.default"'}),`
    `,e(n.span,{className:"hljs-comment",children:"-- this is just default table of statusline modules"}),`

    `,e(n.span,{className:"hljs-keyword",children:"return"}),` {
      mode = `,l(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
        `,e(n.span,{className:"hljs-keyword",children:"return"})," st_modules.mode() .. ",e(n.span,{className:"hljs-string",children:'" bruh "'}),`
      `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
    }
  `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
},

`]})}),`
`,e("br",{}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["First, check the list of modules in ",e(n.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/statusline/modules.lua",children:"our statusline modules file"}),"."]}),`
`,e(n.li,{children:'In the above code, you can see that we wanted to print "bruh" next to the mode module in the statusline.'}),`
`,e(n.li,{children:"To add highlight group to your text"}),`
`]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-lua",children:[e(n.span,{className:"hljs-string",children:'"#BruhHl%"'})," .. ",e(n.span,{className:"hljs-string",children:'" bruh "'}),`
`,e(n.span,{className:"hljs-comment",children:"-- so the highlight group here is BruhHl"}),`
`]})}),`
`,e(n.h3,{children:"Override tabufline modules"}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:"Overriding tabufline modules is the same as statusline"}),`
`,e(n.li,{children:"This example is for overriding the modules in tabufline:"}),`
`]}),`
`,e(n.pre,{children:l(n.code,{className:"hljs language-lua",children:[`tabufline = {
   overriden_modules = `,l(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
     `,e(n.span,{className:"hljs-keyword",children:"local"})," modules = ",e(n.span,{className:"hljs-built_in",children:"require"})," ",e(n.span,{className:"hljs-string",children:'"nvchad_ui.tabufline.modules"'}),`

     `,e(n.span,{className:"hljs-keyword",children:"return"}),` {
       buttons = `,l(n.span,{className:"hljs-function",children:[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}),`
         `,e(n.span,{className:"hljs-keyword",children:"return"})," modules.buttons() .. ",e(n.span,{className:"hljs-string",children:'" my button "'}),`
       `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
       `,e(n.span,{className:"hljs-comment",children:'-- or buttons = "" , this will disable the buttons'}),`
     }
   `,e(n.span,{className:"hljs-keyword",children:"end"}),`,
 },
`]})}),`
`,e("br",{}),`
`,l(n.ul,{children:[`
`,l(n.li,{children:["First, check the list of modules in ",e(n.a,{href:"https://github.com/NvChad/ui/blob/main/lua/nvchad_ui/tabufline/modules.lua",children:"our tabufline modules file"}),"."]}),`
`]})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e(n,Object.assign({},s,{children:e(a,s)})):a(s)}export{h as default};
