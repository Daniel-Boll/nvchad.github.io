import{d as s,$ as e,v as i}from"./index-58cc0a3f.js";function a(l){const n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},l.components);return e(i,{children:[s(n.h2,{children:"Overview"}),`
`,e(n.ul,{children:[`
`,e(n.li,{children:["C = ",s("kbd",{children:" Ctrl "})]}),`
`,e(n.li,{children:["leader = ",s("kbd",{children:" Space "})]}),`
`,e(n.li,{children:["A = ",s("kbd",{children:" alt "})]}),`
`,e(n.li,{children:["S = ",s("kbd",{children:" shift "})]}),`
`,e(n.li,{children:["Defaults are defined in ",s(n.code,{children:"core.mappings"}),"."]}),`
`,e(n.li,{children:[s(n.code,{children:"NvCheatsheet"})," or ",s(n.code,{children:"Telescope keymaps"})," to list all mappings (leader + tk)."]}),`
`]}),`
`,s(n.h2,{children:"Mapping format"}),`
`,e(n.ul,{children:[`
`,s(n.li,{children:"opts here is completely optional"}),`
`,s(n.li,{children:"Mapping description makes your keybind listed in NvCheatsheet window"}),`
`]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:["[",s(n.span,{className:"hljs-string",children:'"keys"'}),"] = {",s(n.span,{className:"hljs-string",children:'"action"'}),", ",s(n.span,{className:"hljs-string",children:'"description"'}),`, opts = {}},

[`,s(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",s(n.span,{className:"hljs-string",children:'"<cmd> NvimTreeToggle <CR>"'}),", ",s(n.span,{className:"hljs-string",children:'"Toggle nvimtree"'}),`},
[`,s(n.span,{className:"hljs-string",children:'"<leader>ff"'}),"] = {",s(n.span,{className:"hljs-string",children:'":Telescope <CR>"'}),", ",s(n.span,{className:"hljs-string",children:'"Telescope"'}),"},  ",s(n.span,{className:"hljs-comment",children:"-- can : instead of <cmd> "}),`

`,s(n.span,{className:"hljs-comment",children:"-- opts can have : buffer, silent, noremap, nowait etc"}),`
`,s(n.span,{className:"hljs-comment",children:"-- all standard key binding opts are supported. "}),`
[`,s(n.span,{className:"hljs-string",children:'";"'}),"] = { ",s(n.span,{className:"hljs-string",children:'":"'}),", ",s(n.span,{className:"hljs-string",children:'"enter cmdline"'}),", opts = { nowait = ",s(n.span,{className:"hljs-literal",children:"true"}),` } },

[`,s(n.span,{className:"hljs-string",children:'"<leader>tt"'}),`] = {
  `,e(n.span,{className:"hljs-function",children:[s(n.span,{className:"hljs-keyword",children:"function"}),s(n.span,{className:"hljs-params",children:"()"})]}),`
     `,s(n.span,{className:"hljs-built_in",children:"require"}),"(",s(n.span,{className:"hljs-string",children:'"base46"'}),`).toggle_transparency()
  `,s(n.span,{className:"hljs-keyword",children:"end"}),`,
  `,s(n.span,{className:"hljs-string",children:'"toggle transparency"'}),`,
},
`]})}),`
`,s(n.h2,{children:"Add new mappings"}),`
`,e(n.ul,{children:[`
`,s(n.li,{children:"This is the mappings structure of core.mappings and your custom mappings."}),`
`,e(n.li,{children:["You need to put your mappings into ",s(n.code,{children:"modes"})," like n, v, i, t, etc."]}),`
`,s(n.li,{children:"n = normal, i = insert and so on."}),`
`]}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:["M.mappings = ",s(n.span,{className:"hljs-built_in",children:"require"})," ",s(n.span,{className:"hljs-string",children:'"custom.mappings"'})," ",s(n.span,{className:"hljs-comment",children:"-- chadrc file"}),`
`]})}),`
`,s("div",{"pb-2":""}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:[s(n.span,{className:"hljs-comment",children:"-- lua/custom/mappings "}),`
`,s(n.span,{className:"hljs-keyword",children:"local"}),` M = {}

`,s(n.span,{className:"hljs-comment",children:"-- add this table only when you want to disable default keys"}),`
M.disabled = {
  n = {
      [`,s(n.span,{className:"hljs-string",children:'"<leader>h"'}),"] = ",s(n.span,{className:"hljs-string",children:'""'}),`,
      [`,s(n.span,{className:"hljs-string",children:'"<C-a>"'}),"] = ",s(n.span,{className:"hljs-string",children:'""'}),`
  }
}

M.abc = {
  n = {
     [`,s(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",s(n.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",s(n.span,{className:"hljs-string",children:'"Telescope"'}),`}
     [`,s(n.span,{className:"hljs-string",children:'"<C-s>"'}),"] = {",s(n.span,{className:"hljs-string",children:'":Telescope Files <CR>"'}),", ",s(n.span,{className:"hljs-string",children:'"Telescope Files"'}),`} 
  }

  i = {
     [`,s(n.span,{className:"hljs-string",children:'"jk"'}),"] = { ",s(n.span,{className:"hljs-string",children:'"<ESC>"'}),", ",s(n.span,{className:"hljs-string",children:'"escape insert mode"'})," , opts = { nowait = ",s(n.span,{className:"hljs-literal",children:"true"}),` }},
    `,s(n.span,{className:"hljs-comment",children:"-- more keys!"}),`
  }
}

M.xyz = {
  `,s(n.span,{className:"hljs-comment",children:"-- stuff"}),`
}

`,s(n.span,{className:"hljs-keyword",children:"return"}),` M
`]})}),`
`,s("br",{}),`
`,e(n.ul,{children:[`
`,s(n.li,{children:"Be sure to maintain a table structure similar to core.mappings."}),`
`,s(n.li,{children:"Mappings will be automatically loaded. You don't need to load them manually."}),`
`]}),`
`,s(n.h2,{children:"Manually load mappings"}),`
`,s(n.pre,{children:e(n.code,{className:"hljs language-lua",children:[s(n.span,{className:"hljs-comment",children:"-- your mappings table"}),`
M.someplugin = {
  plugin = `,s(n.span,{className:"hljs-literal",children:"true"}),`,

  n = {
     [`,s(n.span,{className:"hljs-string",children:'"<C-n>"'}),"] = {",s(n.span,{className:"hljs-string",children:'"<cmd> Telescope <CR>"'}),", ",s(n.span,{className:"hljs-string",children:'"Telescope"'}),`}
  }
}

`,s(n.span,{className:"hljs-comment",children:"-- Now to load it "}),`
`,s(n.span,{className:"hljs-built_in",children:"require"}),"(",s(n.span,{className:"hljs-string",children:'"core.utils"'}),").load_mappings(",s(n.span,{className:"hljs-string",children:'"someplugin"'}),`)
`]})})]})}function r(l={}){const{wrapper:n}=l.components||{};return n?s(n,Object.assign({},l,{children:s(a,l)})):a(l)}export{r as default};
