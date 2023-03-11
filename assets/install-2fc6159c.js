import{a as h,e as v,i as r,c as s,t as m,f as d,g as f,d as e,$ as i,v as b}from"./index-48adef73.js";const w=m('<button><div text-base=""></div></button>',4),N=m('<div grid="" gap-5=""><div class="[&amp;_*]:rounded-lg [&amp;_button]:p-3 [&amp;_button]:w-fit vertCentered !gap-3"></div><pre class="hljs"></pre></div>',6),[_,C]=h("Linux / Macos"),p="git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim",k="git clone https://github.com/NvChad/NvChad $HOME\\AppData\\Local\\nvim --depth 1 && nvim",x=`docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep alpine-sdk --update
  git clone https://github.com/NvChad/NvChad ~/.config/nvim
  nvim
  '`,[$,j]=h(p),a=t=>{const{cmd:n,os:l,icon:u}=t;return(()=>{const c=w.cloneNode(!0),g=c.firstChild;return c.$$click=()=>{C(l),j(n)},d(g,u),r(c,l,null),f(()=>d(c,`!text-vsm ${_()==l?"text-white-1 bg-blue-5 dark:bg-blue-3 dark:text-dark-1":"bg-slate-1"}`)),c})()},M=()=>(()=>{const t=N.cloneNode(!0),n=t.firstChild,l=n.nextSibling;return r(n,s(a,{os:"Linux / Macos",cmd:p,icon:"i-mingcute:hashtag-fill"}),null),r(n,s(a,{os:"Windows",cmd:k,icon:"i-mdi:windows"}),null),r(n,s(a,{os:"Docker",cmd:x,icon:"i-nonicons:docker-16"}),null),r(l,$),t})();v(["click"]);function o(t){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",strong:"strong",pre:"pre",span:"span"},t.components);return i(b,{children:[e(n.h2,{children:"Pre-requisites"}),`
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
`,e(M,{}),`
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
`]})})]})}function O(t={}){const{wrapper:n}=t.components||{};return n?e(n,Object.assign({},t,{children:e(o,t)})):o(t)}export{O as default};
