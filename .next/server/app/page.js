(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},76:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var a=r(260),n=r(8203),i=r(5155),s=r.n(i),o=r(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5104)),"/Users/n2120008456/Documents/carrey1994.github.io/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"/Users/n2120008456/Documents/carrey1994.github.io/app/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,4717)),"/Users/n2120008456/Documents/carrey1994.github.io/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1129)),"/Users/n2120008456/Documents/carrey1994.github.io/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/n2120008456/Documents/carrey1994.github.io/app/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2651:(e,t,r)=>{Promise.resolve().then(r.bind(r,5104))},8675:(e,t,r)=>{Promise.resolve().then(r.bind(r,9934))},1633:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(5512),n=r(8009);function i({children:e,delay:t=0,className:r=""}){let[i,s]=(0,n.useState)(!1);return(0,a.jsx)("div",{className:`transition-all duration-1000 ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-4"} ${r}`,children:e})}},9934:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var a=r(5512),n=r(8009),i=r(6008);function s({className:e=""}){let t=(0,n.useRef)(null),r=(0,n.useRef)(null);return(0,a.jsx)("div",{ref:r,className:`relative ${e}`,children:(0,a.jsx)("div",{ref:t,className:"absolute inset-0 transition-all duration-200 ease-out rounded-xl"})})}function o({article:e}){return(0,a.jsxs)("article",{className:"glass-effect card-hover rounded-xl p-6 group relative overflow-hidden",children:[(0,a.jsx)(s,{className:"absolute inset-0 z-0"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),(0,a.jsx)("h2",{className:"text-2xl font-bold mb-3 relative z-10",children:(0,a.jsxs)(i.default,{href:`/articles/${e.slug}`,className:"relative inline-block animate-text-gradient hover:opacity-90 transition-all duration-300 group/title",children:[e.title,(0,a.jsx)("div",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/title:w-full transition-all duration-300"})]})}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mb-4 relative z-10",children:e.tags.map((e,t)=>(0,a.jsxs)("span",{className:"bg-blue-900/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full text-blue-200 hover:text-blue-100 hover:bg-blue-800/40 transition-all duration-300 cursor-default transform hover:-translate-y-0.5 relative group/tag",style:{animationDelay:`${100*t}ms`},children:[e.name,(0,a.jsx)("div",{className:"absolute inset-0 rounded-full bg-blue-400/0 group-hover/tag:bg-blue-400/10 transition-colors duration-300"}),(0,a.jsx)("div",{className:"absolute inset-0 rounded-full opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300",style:{background:"radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",animation:"pulse 2s infinite"}})]},e.id))}),(0,a.jsx)("p",{className:"text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors relative z-10",children:e.excerpt}),(0,a.jsxs)("div",{className:"flex justify-between items-center relative z-10",children:[(0,a.jsxs)(i.default,{href:`/articles/${e.slug}`,className:"inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link relative overflow-hidden px-2 py-1 -ml-2",children:[(0,a.jsx)("span",{className:"relative z-10",children:"Read more"}),(0,a.jsx)("span",{className:"relative z-10 transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200 ml-1",children:"→"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-blue-900/0 group-hover/link:bg-blue-900/20 rounded-lg transition-colors duration-300"})]}),(0,a.jsx)("time",{className:"text-sm text-gray-400 group-hover:text-gray-300 transition-colors",children:new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]}),(0,a.jsx)(i.default,{href:`/articles/${e.slug}`,className:"absolute inset-0 z-0","aria-label":`Read more about ${e.title}`}),(0,a.jsx)("div",{className:"absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500"}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-400/0 to-cyan-400/0 group-hover:from-blue-400/3 group-hover:to-cyan-400/3 transition-colors duration-500"})]})}function l({currentPage:e,totalPages:t,onPageChange:r}){return(0,a.jsxs)("div",{className:"flex justify-center gap-3 mt-12",children:[(0,a.jsxs)("button",{onClick:()=>r(e-1),disabled:e<=1,className:"glass-effect px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group",children:[(0,a.jsx)("span",{className:"inline-block group-hover:enabled:-translate-x-0.5 transition-transform duration-200",children:"←"})," ","Previous"]}),(0,a.jsx)("div",{className:"flex gap-2",children:[...Array(t)].map((t,n)=>{let i=e===n+1;return(0,a.jsx)("button",{onClick:()=>r(n+1),className:`min-w-[2.5rem] px-4 py-2 rounded-lg transition-all duration-300 ${i?"bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 text-white":"glass-effect hover:bg-blue-900/20 text-gray-300 hover:text-white"}`,children:(0,a.jsx)("span",{className:i?"animate-text-gradient font-bold":"",children:n+1})},n+1)})}),(0,a.jsxs)("button",{onClick:()=>r(e+1),disabled:e>=t,className:"glass-effect px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900/20 transition-all duration-300 text-gray-300 hover:text-white disabled:hover:text-gray-300 group",children:["Next"," ",(0,a.jsx)("span",{className:"inline-block group-hover:enabled:translate-x-0.5 transition-transform duration-200",children:"→"})]})]})}let d={name:"John Doe",bio:"Software engineer passionate about web development and data science. I write about programming, algorithms, and web technologies.",avatar:"/avatar.jpg",socialLinks:{github:"https://github.com/johndoe",twitter:"https://twitter.com/johndoe",linkedin:"https://linkedin.com/in/johndoe"}},u=[{id:"1",title:"Understanding Data Structures",excerpt:"An introduction to fundamental data structures in programming and their practical applications in solving real-world problems.",content:`
      Data structures are fundamental building blocks in computer programming that help us organize and manage data efficiently. In this comprehensive guide, we'll explore various data structures and their practical applications.

      ## Arrays and Lists
      Arrays are the simplest and most widely used data structures. They store elements in contiguous memory locations, allowing for constant-time access to elements using their indices. Arrays are perfect for situations where you need quick access to elements and know the size of your data beforehand.

      Lists, particularly linked lists, offer more flexibility than arrays. They can grow and shrink dynamically, making them ideal for situations where the size of your data structure needs to change frequently.

      ## Trees and Graphs
      Trees are hierarchical data structures with a root node and child nodes. They're commonly used in file systems, databases, and many algorithms. Binary search trees, in particular, are excellent for maintaining sorted data and performing quick searches.

      Graphs extend the concept of trees by allowing connections between any nodes. They're essential in social networks, routing algorithms, and representing any kind of networked data.

      ## Hash Tables
      Hash tables provide extremely fast insertion and lookup operations. They work by mapping keys to array indices using a hash function. This makes them perfect for implementing dictionaries, caches, and symbol tables in compilers.

      ## Conclusion
      Choosing the right data structure is crucial for writing efficient programs. Each data structure has its own advantages and use cases. Understanding these fundamentals will help you write better, more efficient code.
    `,tags:[{id:"1",name:"data structures"},{id:"2",name:"algorithms"}],createdAt:new Date("2023-11-13"),slug:"understanding-data-structures"},{id:"2",title:"Getting Started with Next.js",excerpt:"Learn how to build modern web applications with Next.js, React, and TypeScript.",content:`
      Next.js has become one of the most popular frameworks for building modern web applications. Let's explore why it's so powerful and how to get started.

      ## What is Next.js?
      Next.js is a React framework that enables features like server-side rendering and static site generation. It provides a great developer experience with features like fast refresh and automatic routing.

      ## Key Features
      Next.js comes with several powerful features out of the box:
      - Server-side rendering (SSR)
      - Static site generation (SSG)
      - API routes
      - File-system based routing
      - Built-in CSS and Sass support
      - Code splitting and bundling

      ## Getting Started
      To create a new Next.js project, you can use the create-next-app command:
      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`

      ## Project Structure
      A typical Next.js project has a simple but powerful structure:
      - pages/ - Contains your application's pages
      - public/ - Stores static assets
      - styles/ - Houses your CSS files
      - components/ - Holds your React components

      ## Conclusion
      Next.js provides an excellent foundation for building modern web applications. Its features and developer experience make it a top choice for both small and large projects.
    `,tags:[{id:"3",name:"nextjs"},{id:"4",name:"react"}],createdAt:new Date("2023-11-12"),slug:"getting-started-with-nextjs"},{id:"3",title:"Machine Learning Basics",excerpt:"An overview of machine learning concepts and how to implement basic algorithms.",content:"Machine learning is transforming the way we solve problems...",tags:[{id:"5",name:"ml"},{id:"1",name:"data"}],createdAt:new Date("2023-11-11"),slug:"machine-learning-basics"},{id:"4",title:"Clean Code Principles",excerpt:"Best practices for writing maintainable and scalable code.",content:"Writing clean code is essential for long-term project success...",tags:[{id:"6",name:"clean-code"},{id:"7",name:"best-practices"}],createdAt:new Date("2023-11-10"),slug:"clean-code-principles"},{id:"5",title:"Web Performance Optimization",excerpt:"Techniques and strategies to improve your website performance.",content:"Performance is crucial for providing a good user experience...",tags:[{id:"8",name:"performance"},{id:"9",name:"web"}],createdAt:new Date("2023-11-09"),slug:"web-performance-optimization"}];var c=r(3864),p=r.n(c),m=r(1633);function f(){let[e,t]=(0,n.useState)(1),[r,i]=(0,n.useState)(!1),[c,f]=(0,n.useState)(!1),g=Math.ceil(u.length/3),h=(e-1)*3,b=u.slice(h,h+3);return(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[(0,a.jsxs)("div",{className:"lg:col-span-2 space-y-8",children:[(0,a.jsx)(m.A,{children:(0,a.jsx)("h1",{className:"text-4xl font-bold animate-text-gradient",children:"Latest Articles"})}),(0,a.jsx)("div",{className:`space-y-8 transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`,children:b.map((e,t)=>(0,a.jsx)(m.A,{delay:100*t,children:(0,a.jsx)(o,{article:e})},e.id))}),(0,a.jsx)(m.A,{delay:400,children:(0,a.jsx)(l,{currentPage:e,totalPages:g,onPageChange:e=>{f(!0),t(e),setTimeout(()=>f(!1),300)}})})]}),(0,a.jsx)("div",{className:"lg:col-span-1",children:(0,a.jsx)(m.A,{delay:200,children:(0,a.jsxs)("div",{className:"glass-effect rounded-xl p-8 sticky top-24 relative group",children:[(0,a.jsx)(s,{className:"absolute inset-0"}),(0,a.jsxs)("div",{className:"text-center relative z-10",children:[r?(0,a.jsx)("div",{className:"w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center ring-2 ring-blue-500/20 group-hover:ring-blue-400/40 transition-all duration-300",children:(0,a.jsx)("span",{className:"text-4xl font-bold animate-text-gradient",children:d.name.charAt(0)})}):(0,a.jsxs)("div",{className:"relative w-40 h-40 mx-auto mb-6",children:[(0,a.jsx)("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 animate-pulse"}),(0,a.jsx)("div",{className:"relative w-full h-full rounded-full overflow-hidden ring-2 ring-blue-500/20 transition-all duration-300 group-hover:ring-blue-400/40",children:(0,a.jsx)(p(),{src:d.avatar,alt:d.name,fill:!0,className:"object-cover transition-transform duration-300 group-hover:scale-110",onError:()=>i(!0)})})]}),(0,a.jsx)("h2",{className:"text-2xl font-bold mb-3 animate-text-gradient",children:d.name}),(0,a.jsx)("p",{className:"text-gray-300 mb-6 leading-relaxed",children:d.bio}),(0,a.jsx)("div",{className:"flex justify-center space-x-6",children:Object.entries(d.socialLinks).map(([e,t])=>t&&(0,a.jsxs)("a",{href:t,className:"group/link relative px-2 py-1",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)("span",{className:"relative z-10 text-gray-400 group-hover/link:text-blue-400 transition-colors duration-300",children:e.charAt(0).toUpperCase()+e.slice(1)}),(0,a.jsx)("div",{className:"absolute inset-0 bg-blue-900/0 group-hover/link:bg-blue-900/20 rounded-lg transition-colors duration-300"})]},e))})]}),(0,a.jsx)("div",{className:"absolute inset-0 rounded-xl border border-blue-500/0 group-hover:border-blue-500/20 transition-colors duration-500"}),(0,a.jsx)("div",{className:"absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-tl-xl transition-colors duration-500"}),(0,a.jsx)("div",{className:"absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-br-xl transition-colors duration-500"})]})})})]})}},1902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let a=r(5488),n=r(1063),i=r(5512),s=n._(r(8009)),o=a._(r(5740)),l=a._(r(9153)),d=r(2034),u=r(4653),c=r(8156);r(6831);let p=r(4055),m=a._(r(1628)),f=r(3727),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,a,n,i,s){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}}))}function b(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:a,sizes:n,height:o,width:l,decoding:d,className:u,style:c,fetchPriority:p,placeholder:m,loading:g,unoptimized:x,fill:v,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:_,sizesInput:N,onLoad:S,onError:P,...k}=e,C=(0,s.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,m,y,w,j,x,N))},[r,m,y,w,j,P,x,N]),z=(0,f.useMergedRef)(t,C);return(0,i.jsx)("img",{...k,...b(p),loading:g,width:l,height:o,decoding:d,"data-nimg":v?"fill":"1",className:u,style:c,sizes:n,srcSet:a,src:r,ref:z,onLoad:e=>{h(e.currentTarget,m,y,w,j,x,N)},onError:e=>{_(!0),"empty"!==m&&j(!0),P&&P(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,a={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,a),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...a},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(p.RouterContext),a=(0,s.useContext)(c.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=g||a||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[a]),{onLoad:o,onLoadingComplete:l}=e,f=(0,s.useRef)(o);(0,s.useEffect)(()=>{f.current=o},[o]);let h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let[b,y]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),{props:_,meta:N}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:b,showAltText:w});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{..._,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:f,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),N.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2782:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.AmpContext},6302:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.HeadManagerContext},8156:(e,t,r)=>{"use strict";e.exports=r(8104).vendored.contexts.ImageConfigContext},2677:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:a=!1}=void 0===e?{}:e;return t||r&&a}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2034:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(6831);let a=r(8337),n=r(4653);function i(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:u,sizes:c,unoptimized:p=!1,priority:m=!1,loading:f,className:g,quality:h,width:b,height:x,fill:v=!1,style:y,overrideSrc:w,onLoad:j,onLoadingComplete:_,placeholder:N="empty",blurDataURL:S,fetchPriority:P,decoding:k="async",layout:C,objectFit:z,objectPosition:A,lazyBoundary:O,lazyRoot:M,...E}=e,{imgConf:I,showAltText:D,blurComplete:R,defaultLoader:T}=t,U=I||n.imageConfigDefault;if("allSizes"in U)o=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);o={...U,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let G=E.loader||T;delete E.loader,delete E.srcSet;let L="__next_img_default"in G;if(L){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!c&&(c=t)}let q="",$=s(b),B=s(x);if((r=u)&&"object"==typeof r&&(i(r)||void 0!==r.src)){let e=i(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,q=e.src,!v){if($||B){if($&&!B){let t=$/e.width;B=Math.round(e.height*t)}else if(!$&&B){let t=B/e.height;$=Math.round(e.width*t)}}else $=e.width,B=e.height}}let F=!m&&("lazy"===f||void 0===f);(!(u="string"==typeof u?u:q)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,F=!1),o.unoptimized&&(p=!0),L&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0);let H=s(h),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},D?{}:{color:"transparent"},y),V=R||"empty"===N?null:"blur"===N?'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:$,heightInt:B,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:W.objectFit})+'")':'url("'+N+'")',J=V?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},X=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:i,sizes:s,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:a,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),u=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((e,a)=>o({config:t,src:r,quality:i,width:e})+" "+("w"===d?e:a+1)+d).join(", "),src:o({config:t,src:r,quality:i,width:l[u]})}}({config:o,src:u,unoptimized:p,width:$,quality:H,sizes:c,loader:G});return{props:{...E,loading:F?"lazy":f,fetchPriority:P,width:$,height:B,decoding:k,className:g,style:{...W,...J},sizes:X.sizes,srcSet:X.srcSet,src:w||X.src},meta:{unoptimized:p,priority:m,placeholder:N,fill:v}}}},9153:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let a=r(5488),n=r(1063),i=r(5512),s=n._(r(8009)),o=a._(r(7440)),l=r(2782),d=r(6302),u=r(2677);function c(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6831);let m=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,a={};return n=>{let i=!0,s=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){s=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?i=!1:t.add(n.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=n.props[t],r=a[t]||new Set;("name"!==t||!s)&&r.has(e)?i=!1:(r.add(e),a[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let a=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,s.default.cloneElement(e,t)}return s.default.cloneElement(e,{key:a})})}let g=function(e){let{children:t}=e,r=(0,s.useContext)(l.AmpStateContext),a=(0,s.useContext)(d.HeadManagerContext);return(0,i.jsx)(o.default,{reduceComponentsToState:f,headManager:a,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8337:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:i,objectFit:s}=e,o=a?40*a:t,l=n?40*n:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4653:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return a}});let r=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},3864:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let a=r(5488),n=r(2034),i=r(1902),s=a._(r(1628));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},1628:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+a+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},7440:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(8009),n=()=>{},i=()=>{};function s(e){var t;let{headManager:r,reduceComponentsToState:s}=e;function o(){if(r&&r.mountedInstances){let t=a.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(s(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},5104:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/n2120008456/Documents/carrey1994.github.io/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/n2120008456/Documents/carrey1994.github.io/app/page.tsx","default")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[989,45,8,711],()=>r(76));module.exports=a})();