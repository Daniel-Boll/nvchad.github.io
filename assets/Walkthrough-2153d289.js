import{d as e,$ as s,v as i}from"./index-58cc0a3f.js";function a(l){const n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",p:"p",strong:"strong",img:"img"},l.components);return s(i,{children:[e(n.h2,{children:"How does NvChad work?"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:["To continue this topic, first you should understand ",e(n.code,{children:"vim.tbl_deep_extend"})," function which we use for merging tables and their values recursively."]}),`
`,s(n.li,{children:["We use ",e(n.code,{children:"vim.tbl_deep_extend"})," to merge 2 tables usually, the syntax looks like this :"]}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[e(n.span,{className:"hljs-comment",children:"-- table 1"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,e(n.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,e(n.span,{className:"hljs-number",children:"19"}),`,
}

`,e(n.span,{className:"hljs-comment",children:"-- table 2"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"}),` someone = {
    name = `,e(n.span,{className:"hljs-string",children:'"siduck"'}),`,
}

`,e(n.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",e(n.span,{className:"hljs-string",children:'"force"'}),`, person, someone)

`,e(n.span,{className:"hljs-comment",children:'-- "force" will use values from someone table to override them on person table'}),`
`,e(n.span,{className:"hljs-comment",children:"-- result : "}),`

{
    name = `,e(n.span,{className:"hljs-string",children:'"siduck"'}),`,
    age = `,e(n.span,{className:"hljs-number",children:"19"}),`,
}
`]})}),`
`,e("br",{}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"Lets look at some complex tables :"}),`
`]}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[e(n.span,{className:"hljs-keyword",children:"local"}),` person = {
    name = `,e(n.span,{className:"hljs-string",children:'"joe"'}),`,
    age = `,e(n.span,{className:"hljs-number",children:"19"}),`,
    skills = {`,e(n.span,{className:"hljs-string",children:'"python"'}),", ",e(n.span,{className:"hljs-string",children:'"java"'}),", ",e(n.span,{className:"hljs-string",children:'"c++"'}),`}

    distros_used = {
        ubuntu = `,e(n.span,{className:"hljs-string",children:'"5 years"'}),`,
        arch = `,e(n.span,{className:"hljs-string",children:'"10 minutes"'}),`,
        manjaro = `,e(n.span,{className:"hljs-string",children:'"10 years"'}),`,
    }
}

`,e(n.span,{className:"hljs-keyword",children:"local"}),` somone = {
    name = `,e(n.span,{className:"hljs-string",children:'"siduck"'}),`,
    skills = {`,e(n.span,{className:"hljs-string",children:'"js"'}),", ",e(n.span,{className:"hljs-string",children:'"lua"'}),`},

    distros_used = {
       ubuntu = `,e(n.span,{className:"hljs-string",children:'"1 month"'}),`,
       artix = `,e(n.span,{className:"hljs-string",children:'"2 years"'}),`
    }
}

`,e(n.span,{className:"hljs-keyword",children:"local"})," result = vim.tbl_deep_extend(",e(n.span,{className:"hljs-string",children:'"force"'}),`, person, someone)
`]})}),`
`,e("br",{}),`
`,e(n.p,{children:"And the result is :"}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[`{
   name = `,e(n.span,{className:"hljs-string",children:'"siduck"'}),`,
   age = `,e(n.span,{className:"hljs-number",children:"19"}),`

   skills = {`,e(n.span,{className:"hljs-string",children:'"js"'}),", ",e(n.span,{className:"hljs-string",children:'"lua"'}),`},

   distros_used = {
       ubuntu = `,e(n.span,{className:"hljs-string",children:'"1 month"'}),`,
       arch = `,e(n.span,{className:"hljs-string",children:'"10 minutes"'}),`,
       manjaro = `,e(n.span,{className:"hljs-string",children:'"10 years"'}),`,
       artix = `,e(n.span,{className:"hljs-string",children:'"2 years"'}),`
   }
}

`,e(n.span,{className:"hljs-comment",children:"-- tbl_deep_extend function merges values recursively, but if there's an array ( list ) then it wont merge the the list tables. "}),`

`,e(n.span,{className:"hljs-comment",children:'-- Example : table 1 has  {"python", "java", "c++"} and table 2 has {"lua"}, now you might be wondering that it should merge it like this : '}),`

`,e(n.span,{className:"hljs-comment",children:'-- { "python", "java", "c++", "lua"} , But no! thats wrong, the result will be only {"lua"}.'}),`
`]})}),`
`,e("br",{}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:"tbl_deep_extend merges dicts tables recursively i.e tables which have key/value pair but not lists ( arrays )"}),`
`]}),`
`,e(n.h2,{children:"Config Structure"}),`
`,e(n.pre,{children:s(n.code,{className:"hljs language-lua",children:[`├── init.lua ( main init.lua )
│
├── lua
│   │
│   ├── core
│   │   ├── default_config.lua
│   │   ├── mappings.lua
│   │   ├── utils.lua 
│   │   └── init.lua  
│   │
│   ├── plugins
│   │    ├── init.lua 
│   │    └── configs
│   │        ├── cmp.lua
│   │        └── other configs
│   │  
│   │   USER CONFIG  
│   │  
│   ├── custom *
│   │   ├── chadrc.lua `,e(n.span,{className:"hljs-comment",children:"-- (overrides default_config)"}),`
│   │   ├── init.lua `,e(n.span,{className:"hljs-comment",children:"-- (runs in main init.lua file)"}),`
│   │   ├── more files, dirs
`]})}),`
`,e("br",{}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[e(n.strong,{children:"init.lua -"})," runs everything"]}),`
`,s(n.li,{children:[e(n.strong,{children:"core/default_config -"})," returns a table for whole nvchad config"]}),`
`,s(n.li,{children:[e(n.strong,{children:"core/mappings -"})," default mappings"]}),`
`,s(n.li,{children:[e(n.strong,{children:"core/init -"})," globals, nvim options, commands, autocmds"]}),`
`,s(n.li,{children:[e(n.strong,{children:"core/utils -"})," helpful functions"]}),`
`,s(n.li,{children:["The custom dir contains all the user configurations, ",e(n.code,{children:"chadrc.lua"})," and ",e(n.code,{children:"init.lua"})," in ",e(n.code,{children:"custom dir"})," are the main files."]}),`
`]}),`
`,e(n.p,{children:e(n.img,{src:"/illustrations/config_nutshell.webp",alt:"GitHub Logo"})}),`
`,e(n.h2,{children:"Themes"}),`
`,s(n.ul,{children:[`
`,s(n.li,{children:[e(n.code,{children:"<leader> + th"}),"   (",e(n.code,{children:"<leader>"})," is space key in our config)"]}),`
`]}),`
`,e(n.h2,{children:"Mappings"}),`
`,s(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:":Telescope keymaps"})}),`
`,e(n.li,{children:"NvCheatsheet  ( command )"}),`
`]})]})}function c(l={}){const{wrapper:n}=l.components||{};return n?e(n,Object.assign({},l,{children:e(a,l)})):a(l)}export{c as default};
