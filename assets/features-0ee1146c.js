import{d as i,$ as n,v as t}from"./index-357363b2.js";function l(r){const e=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",h4:"h4",p:"p",img:"img",a:"a",code:"code"},r.components);return n(t,{children:[i(e.h1,{children:"Inbuilt features"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["NvChad is built upon its personal plugins and many general neovim plugins, below are the features that are provided by nvchad plugins ",i(e.strong,{children:"( our ui plugin, base46, extensions, nvterm, nvim-colorizer )"})]}),`
`]}),`
`,i(e.h2,{children:"Base46"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Base46 is NvChad's highlight performant theming plugin and has many ported themes ( around 57+ )."}),`
`]}),`
`,i(e.h4,{children:"How it works?"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Gets highlight groups"}),`
`,i(e.li,{children:"Do some computations i.e check for overriden highlight groups, new highlight groups, theme overrides, custom user themes etc."}),`
`,i(e.li,{children:"Now base46 compiles all of that into bytecode."}),`
`,i(e.li,{children:"Integration files aren't loaded by default, for example highlight group for telescope, nvimtree etc are put into different files."}),`
`,i(e.li,{children:"highlight groups are lazyloaded i.e you load them when needed"}),`
`,i(e.li,{children:i(e.strong,{children:'example : dofile(vim.g.base46_cache .. "treesitter")'})}),`
`,i(e.li,{children:"In the below video you can see that the chadrc file's ( user config ) UI related options reload on the fly"}),`
`]}),`
`,i("div",{class:"iframe-container",children:i("iframe",{src:"https://www.youtube.com/embed/xytzreFq_us",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen"})}),`
`,i(e.h2,{children:"Theme switcher"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"We build a theme switcher with telescope.nvim which reloads theme on the fly using base46 plugin."}),`
`]}),`
`,i("div",{class:"iframe-container",children:i("iframe",{src:"https://www.youtube.com/embed/wt7IX8ojMrs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,i(e.h2,{children:"Statusline"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"We have our own statusline module ( our UI Plugin ) which has 4 statusline styles"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/statuslines.webp",alt:"nvchad statusline"})}),`
`,i(e.h2,{children:"Tabufline"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"NvChad's tabufline module ( from UI Plugin ) is a mix of tabline & bufferline."}),`
`,i(e.li,{children:"It manages buffers & tabs, buttons in it are clickable"}),`
`,i(e.li,{children:"Each tab will have its own set of buffers stored and the tabufline will show those only."}),`
`,i(e.li,{children:"Think it like workspaces on Linux/Windows where windows stay in their own workspaces, but in vim buffers from all tabs will be shown in every tab!"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/tabufline.webp",alt:"tabufline1"})}),`
`,i("div",{class:"iframe-container",children:i("iframe",{src:"https://www.youtube.com/embed/V_9iJ96U_k8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,i(e.h2,{children:"Nvterm"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"NvChad's terminal plugin to toggle and run commands in neovim terminal buffer"}),`
`,i(e.li,{children:"Using it with our telescope picker ( :Telescope terms ) to unhide terminal buffers."}),`
`]}),`
`,i("div",{class:"iframe-container",children:i("iframe",{src:"https://www.youtube.com/embed/3DysWI_6YpQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,i(e.h2,{children:"Dashboard"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Nvdash is NvChad's minimal dashboard module, It's very simple at this stage and will get more features in the future!"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/nvdash.webp",alt:"nvdash"})}),`
`,i(e.h2,{children:"NvCheatsheet"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Auto-generated mappings cheatsheet module which has a similar layout to that of CSS's masonry layout."}),`
`,i(e.li,{children:"It has 2 themes ( grid & simple )"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/nvcheatsheet.webp",alt:"nvcheatsheet"})}),`
`,i("div",{class:"iframe-container",children:i("iframe",{src:"https://www.youtube.com/embed/IljDD4cjgKc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,i(e.h1,{children:"General neovim plugins"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"These plugins aren't related to nvchad, we just tweak theme a bit and theme the UI related ones."}),`
`]}),`
`,i(e.h2,{children:"Telescope.nvim"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/nvim-telescope/telescope.nvim",children:"Telescope.nvim"})," is a highly extendable fuzzy finder over lists. Built on the latest awesome features from neovim core. Telescope is centered around modularity, allowing for easy customization."]}),`
`,i(e.li,{children:"Below are 2 styles of telescope in nvchad ( bordered and borderless )"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/telescope.webp",alt:"telescope"})}),`
`,i(e.h2,{children:"Nvim-tree.lua"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/kyazdani42/nvim-tree.lua",children:i(e.code,{children:"nvim-tree.lua"})})," is a file explorer tree for Neovim written in Lua."]}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"https://raw.githubusercontent.com/siduck/dotfiles/all/rice%20flex/nvimtree.png",alt:"nvim tree"})}),`
`,i(e.h2,{children:"Nvim-cmp"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["[",i(e.code,{children:"nvim-cmp"}),"](A completion plugin for neovim coded in Lua.) is a completion plugin for neovim coded in Lua."]}),`
`,i(e.li,{children:"Below are some cmp styles in nvchad"}),`
`]}),`
`,i(e.p,{children:i(e.img,{src:"/features/cmp.webp",alt:"nvim-cmp"})}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Note that thats just the cmp look in everblush theme, there are more 56+ themes! You can hide cmp icons, cmpkind txt etc from the user config ( chadrc ) itself!"}),`
`]}),`
`,i(e.h2,{children:"Auto-completion & LSP"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/neovim/nvim-lspconfig",children:i(e.code,{children:"nvim-lspconfig"})})," is used along with cmp for completion and ",i(e.a,{href:"https://github.com/L3MON4D3/LuaSnip",children:i(e.code,{children:"luasnip"})}),"  + ",i(e.a,{href:"https://github.com/rafamadriz/friendly-snippets",children:i(e.code,{children:"friendly-snippets"})})," for snippet completion!"]}),`
`]}),`
`,i("div",{class:"iframe-container",children:i("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oMzMDXA-VO0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allow:"fullscreen;"})}),`
`,i("br",{}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/folke/lazy.nvim",children:i(e.code,{children:"lazy.nvim"})})," - A modern plugin manager for Neovim"]}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/NvChad/nvim-colorizer.lua",children:i(e.code,{children:"nvim-colorizer.lua"})})," - Fastest Neovim colorizer, hex colors, hsl codes and much more."]}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/nvim-treesitter/nvim-treesitter",children:i(e.code,{children:"nvim-treesitter"})})," - Nvim Treesitter configurations and abstraction layer, we use it for syntax highlighting & auto-indenting."]}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/lukas-reineke/indent-blankline.nvim",children:i(e.code,{children:"blankline"})})," - Indent guides for Neovim i.e indentline plugin."]}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/lewis6991/gitsigns.nvim",children:i(e.code,{children:"gitsigns.nvim"})})," - Git integration for buffers"]}),`
`,i(e.li,{children:i(e.a,{href:"https://github.com/windwp/nvim-autopairs",children:i(e.code,{children:"nvim-autopairs"})})}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/numToStr/Comment.nvim",children:i(e.code,{children:"comment.nvim"})})," - Commenting plugin"]}),`
`,n(e.li,{children:[i(e.a,{href:"https://github.com/williamboman/mason.nvim",children:i(e.code,{children:"mason.nvim"})})," - Portable package manager for Neovim that runs everywhere Neovim runs. Easily install and manage LSP servers, DAP servers, linters, and formatters."]}),`
`]})]})}function a(r={}){const{wrapper:e}=r.components||{};return e?i(e,Object.assign({},r,{children:i(l,r)})):l(r)}export{a as default};
