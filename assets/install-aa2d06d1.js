import{d as e,$ as i,O as a,v as c}from"./index-360ce34f.js";function l(r){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",strong:"strong",pre:"pre",span:"span"},r.components);return i(c,{children:[e(n.h2,{children:"Pre-requisites"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[e(n.a,{href:"https://github.com/neovim/neovim/releases/tag/v0.8.0",children:"Neovim 0.8.3"}),"."]}),`
`,i(n.li,{children:[e(n.a,{href:"https://www.nerdfonts.com/",children:"Nerd Font"})," Set it in your terminal emulator.",`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Make sure the nerd font you set doesnt end with ",e("strong",{children:"Mono"})]}),`
`,i(n.li,{children:[e("strong",{children:"Example : "})," Iosevka Nerd Font and not ",e("s",{children:"Iosevka Nerd Font Mono"})]}),`
`]}),`
`]}),`
`,i(n.li,{children:[e(n.a,{href:"https://github.com/BurntSushi/ripgrep",children:"Ripgrep"})," is required for grep searching with Telescope ",e("strong",{children:"(OPTIONAL)"}),"."]}),`
`,e(n.li,{children:"GCC"}),`
`,i(n.li,{children:["Windows users must have ",e(n.a,{href:"http://mingw-w64.org/downloads",children:e(n.code,{children:"mingw"})})," installed and set on path."]}),`
`]}),`
`,e(n.h2,{children:"Install"}),`
`,e(a,{}),`
`,e(n.h2,{children:"Update"}),`
`,e(n.p,{children:"NvChad has an update mechanism built-in, which will pull any new updates from the git repository."}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:["Update NvChad by pressing ",e(n.code,{children:"<leader> + uu"})]}),`
`,i(n.li,{children:[e(n.strong,{children:"Note"}),": by NvChad default, ",e(n.code,{children:"<leader>"})," is the ",e(n.code,{children:"<space>"})," key."]}),`
`]}),`
`,e(n.h2,{children:"Uninstall"}),`
`,e(n.pre,{children:i(n.code,{className:"hljs language-bash",children:[e(n.span,{className:"hljs-comment",children:"# linux/macos (unix)"}),`
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.config/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.local/share/nvim
`,e(n.span,{className:"hljs-built_in",children:"rm"}),` -rf ~/.cache/nvim

`,e(n.span,{className:"hljs-comment",children:"# windows"}),`
rd -r ~\\AppData\\Local\\nvim
rd -r ~\\AppData\\Local\\nvim-data
`]})})]})}function t(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(l,r)})):l(r)}export{t as default};
