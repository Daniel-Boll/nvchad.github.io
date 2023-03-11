import{d as n,$ as t,v as l}from"./index-360ce34f.js";function h(i){const e=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",a:"a"},i.components);return t(l,{children:[n(e.h2,{children:"Basic debugging"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["You can check the health of Neovim with the ",n(e.code,{children:"checkhealth"})," command."]}),`
`,n(e.li,{children:"Make sure you dont have syntax errors in your custom config files"}),`
`,n(e.li,{children:"By default in NvChad sumneko lua LSP is enabled so it'll look for syntax errors etc for you."}),`
`]}),`
`,n(e.h2,{children:"Before logging an issue"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/NvChad/NvChad/issues?q=is%3Aissue",children:"Search the GitHub issue list"})}),`
`,t(e.li,{children:["Then ",n(e.a,{href:"https://github.com/NvChad/NvChad/issues/new/choose",children:"log an issue, be sure to provide all prompted information"})]}),`
`,n(e.li,{children:"If it's a plugin issue, then make sure you're familiar with the lazy loading of default NvChad plugins as that plugin might depend on the default plugin which is lazy loaded."}),`
`]})]})}function a(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(h,i)})):h(i)}export{a as default};
