import{d as n,$ as l,v as r}from"./index-5e4de1a2.js";function a(s){const e=Object.assign({h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span",h3:"h3",p:"p"},s.components);return l(r,{children:[n(e.h2,{children:"Override default highlight groups"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"Make sure you use a valid highlight group!"}),`
`,n(e.li,{children:"Check your theme colors in this dir:"}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-shell",children:`~/.local/share/nvim/lazy/base46/lua/base46/integrations
`})}),`
`,n("br",{}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"In your theme file, for instance onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups."}),`
`,n(e.li,{children:"You can even use hex colors in the fg/bg field, but it's preferable to use variable names (for instance: blue, darker_black, one_bg, etc.) from your theme file as these will look better."}),`
`,n(e.li,{children:"No need to write hex colors manually!"}),`
`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-lua",children:[`M.ui = {
   hl_override = {
      Pmenu = { bg = `,n(e.span,{className:"hljs-string",children:'"white"'}),` },
      `,n(e.span,{className:"hljs-comment",children:'-- Pmenu = { bg = "#ffffff" }, this works too'}),`


      MyHighlightGroup = {
         fg = `,n(e.span,{className:"hljs-string",children:'"red"'}),`,
         bg = `,n(e.span,{className:"hljs-string",children:'"darker_black"'}),`
      }
   },
}
`]})}),`
`,n(e.h3,{children:"Add new highlight groups"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["The same method can be used as above, but instead of ",n(e.code,{children:"hl_override"}),", you add in ",n(e.code,{children:"hl_add"})," field in chadrc."]}),`
`]}),`
`,n(e.h2,{children:"Customize themes"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["You can edit theme colors from the ",n(e.code,{children:"changed_themes"})," table"]}),`
`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-lua",children:[`M.ui = {

   changed_themes = {
      onedark = {
         base_16 = {
            base00 = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
         base_30 = {
            red = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
            white = `,n(e.span,{className:"hljs-string",children:'"#mycol"'}),`,
         },
      },

      nord = {
         `,n(e.span,{className:"hljs-comment",children:"-- and so on!"}),`
      },
   },
}
`]})}),`
`,n(e.h3,{children:"Local themes"}),`
`,n(e.p,{children:"(WARNING: Do this at your own risk because you might not be able to make nvchad themes like siduck.)"}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"Default themes are in our base46 repo's themes dir."}),`
`,n(e.li,{children:"Any nvchad theme structure looks like this:"}),`
`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-lua",children:[n(e.span,{className:"hljs-comment",children:"-- theme file is custom/themes/siduck.lua"}),`

`,n(e.span,{className:"hljs-keyword",children:"local"}),` M = {}

M.base_30 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my colors"}),`
}

M.base_16 = {
    `,n(e.span,{className:"hljs-comment",children:"-- my base16 colors"}),`
}

vim.opt.bg = `,n(e.span,{className:"hljs-string",children:'"dark"'})," ",n(e.span,{className:"hljs-comment",children:"-- or light "}),`
`,n(e.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,n("br",{}),`
`,l(e.ul,{children:[`
`,n(e.li,{children:"Make sure to use the exact variable names!"}),`
`]}),`
`,n(e.pre,{children:l(e.code,{className:"hljs language-lua",children:[`M.ui = {
   theme = `,n(e.span,{className:"hljs-string",children:'"siduck"'}),`,
}
`]})})]})}function h(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(a,s)})):a(s)}export{h as default};
