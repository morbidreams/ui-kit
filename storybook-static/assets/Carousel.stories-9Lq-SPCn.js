import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as j}from"./iframe-Bj_fZlOo.js";import{d as s}from"./styled-components.browser.esm-BW9Cig6r.js";import{P as X}from"./index-BdGF8ygT.js";import{S as F}from"./index-DPfeyZwg.js";import{C as S}from"./Colors-BCsKZ4GV.js";import"./index-mYqbd3fD.js";import"./index-DzChsf8x.js";import"./useTheme-BPdXNvs3.js";import"./DefaultPropsProvider-7EA8HZRO.js";import"./useTheme-DaChCvKm.js";import"./extendSxProp-s4QnhW3V.js";const K=s.div`
  background: ${({$bgImgSrc:r})=>r?`url(${r})`:"transparent"};
  background-size: cover;
  background-position: center;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 32px 24px 0 24px;
`,Q=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0 16px 0;
  box-sizing: border-box;
  height: ${({$togglePaginationDots:r,$totalSlides:d,$visibleSlides:a})=>r&&d!==a?"40px":"32px"};
`,U=s.div`
  overflow: hidden;
`,Y=s.div`
  display: flex;
  transition: ${({$isDragging:r})=>r?"none":"transform 0.3s ease"};
  transform: ${({$currentIndex:r,$dragOffset:d,$slidesToShow:a})=>{const l=`(100% - (${a-1} * 16px)) / ${a}`;return`translateX(calc(-${r} * ((${l}) + 16px) + ${d}px))`}};
  will-change: transform;
  gap: 16px;
`,G=s.div`
  width: ${({$slidesToShow:r})=>`calc((100% - (${r-1} * 16px)) / ${r})`};
  flex-shrink: 0;
  border-radius: 16px;
  background: white;
  max-height: 314px;
  overflow: hidden;
`,J={background:"transparent",padding:0},w=({children:r,bgImgSrc:d="https://i.imgur.com/fvcwruC.jpeg",slideSeparator:a="of",slidesToShow:l,togglePaginationDots:$=!0,toggleNavigation:V=!0,dragOffsetValue:T=50})=>{const[c,R]=n.useState(0),[x,C]=n.useState(0),[B,k]=n.useState(!1),[o,z]=n.useState(Math.max(l??1,1)),f=n.useRef(null),y=n.useRef(null),v=n.useRef(null),i=j.Children.count(r);n.useLayoutEffect(()=>{const t=()=>{if(l)z(l);else if(y.current){const b=y.current.offsetWidth,P=v.current?v.current.firstChild:0,E=P?window.getComputedStyle(P):null,A=E?parseFloat(E.minWidth):0,L=Math.floor(b/(A+16));z(Math.min(Math.max(L,1),i))}};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[i,l]);const M=()=>{R(t=>t<i-o?t+1:t)},D=()=>{R(t=>t>0?t-1:t)},W=t=>{f.current=t.touches[0].clientX,k(!0)},I=t=>{if(f.current!==null){const b=t.touches[0].clientX;C(b-f.current)}},H=()=>{x>T?D():x<-T&&M(),C(0),k(!1),f.current=null},_=j.Children.map(r,t=>{if(j.isValidElement(t))return e.jsx(G,{$slidesToShow:o,ref:v,children:t},t.key)});return e.jsxs(K,{$bgImgSrc:d??"",ref:y,children:[V&&i!==o&&e.jsx(F,{currentIndex:c,totalSlides:i,slideSeparator:a,onPrevSlide:D,onNextSlide:M,disablePrev:c===0,disableNext:c===i-o}),e.jsx(U,{children:e.jsx(Y,{onTouchStart:W,onTouchMove:I,onTouchEnd:H,$isDragging:B,$currentIndex:c,$dragOffset:x,$slidesToShow:o,children:_})}),e.jsx(Q,{$togglePaginationDots:$,$totalSlides:i,$visibleSlides:o,children:$&&i!==o&&e.jsx(X,{length:i,currentIndex:c,style:J})})]})};w.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},bgImgSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://i.imgur.com/fvcwruC.jpeg"',computed:!1}},slideSeparator:{required:!1,tsType:{name:"union",raw:'"sur" | "of"',elements:[{name:"literal",value:'"sur"'},{name:"literal",value:'"of"'}]},description:"",defaultValue:{value:'"of"',computed:!1}},slidesToShow:{required:!1,tsType:{name:"number"},description:""},togglePaginationDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toggleNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dragOffsetValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}}}};const u=s.div`
  min-width: 286px;
  padding: 32px 24px;
  box-sizing: border-box;
`,p=s.div`
  color: ${S["primary-700"]};
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 12px;
`,h=s.div`
  color: ${S["neutral-900"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 8px;
`,g=s.div`
  color: ${S["neutral-700"]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  i {
    font-size: 14px;
  }
  ul {
    margin: 0 0 0 8px;
    padding: 0 0 0 8px;
  }
`,Z={children:[e.jsxs(u,{children:[e.jsx(p,{children:"$14.7M"}),e.jsx(h,{children:"Quarterly Synergy Yield"}),e.jsx(g,{children:"Through proactive monetization of data silos and predictive scaling of stakeholder matrices, we've achieved a fourth-cycle uplift in synergy capitalization across distributed cloud verticals."})]},1),e.jsxs(u,{children:[e.jsx(p,{children:"4.6 Days"}),e.jsx(h,{children:"Average Deal Velocity"}),e.jsxs(g,{children:["Accelerated deal closures were made possible by:",e.jsxs("ul",{children:[e.jsx("li",{children:"Pre-calibrated pitch modularity"}),e.jsx("li",{children:"Contractual auto-approval loops"}),e.jsx("li",{children:"Cross-channel stakeholder syncing"})]})]})]},2),e.jsxs(u,{children:[e.jsx(p,{children:"17 Nodes"}),e.jsx(h,{children:"Microservice Throughput Hubs"}),e.jsxs(g,{children:[e.jsx("div",{style:{paddingBottom:"16px"},children:"Our architecture now supports modularized task clusters via 17 dedicated nodes, each designed to handle dual-injected I/O patterns. This ensures hyperspeed deployments without load compromise across mission-critical layers."}),e.jsx("i",{children:"*Only applies to locals."})]})]},3),e.jsxs(u,{children:[e.jsx(p,{children:"92%"}),e.jsx(h,{children:"Retention Uplift Metric"}),e.jsx(g,{children:"Post-implementation analytics reveal that user stickiness soared following the rollout of tier-aware personalization layers and context-sensitive feedback loops within the engagement funnel."})]},4),e.jsxs(u,{children:[e.jsx(p,{children:"$302K"}),e.jsx(h,{children:"Monthly Burn Rate Delta"}),e.jsx(g,{children:"Operational outlays have been smart-reduced by deploying latency-aware budget clusters, allowing us to abstract capex into micro-quadrants while sustaining ROI-positive throughput."})]},5)],slideSeparator:"sur",bgImgSrc:"https://i.imgur.com/fvcwruC.jpeg",togglePaginationDots:!0,toggleNavigation:!0},ee={baseStyles:Z},ge={title:"Carousel",component:w,argTypes:{}},te=r=>e.jsx(w,{...r}),m=te.bind({});m.args={...ee.baseStyles};var N,O,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"args => <Slider {...args} />",...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const me=["Base"];export{m as Base,me as __namedExportsOrder,ge as default};
