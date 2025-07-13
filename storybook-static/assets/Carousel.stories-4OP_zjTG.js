import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as v}from"./iframe-DO1mR48L.js";import{d as i}from"./styled-components.browser.esm-B4hG9-nt.js";import{P as Q}from"./index-OW6JsWEY.js";import{S as X}from"./index-Q6jVopUs.js";import{C as S}from"./Colors-BCsKZ4GV.js";import"./index-mYqbd3fD.js";import"./index-DvpI3kqA.js";import"./useTheme-DjZh462t.js";import"./DefaultPropsProvider-Cz_335H4.js";import"./useTheme-DxfJqGIB.js";import"./extendSxProp-PHsOGbm9.js";const J=i.div`
  background: ${({$bgImgSrc:s})=>s?`url(${s})`:"transparent"};
  background-size: cover;
  background-position: center;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 32px 24px 0 24px;
`,F=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0 16px 0;
  box-sizing: border-box;
  height: ${({$togglePaginationDots:s,$totalSlides:d,$visibleSlides:a})=>s&&d!==a?"40px":"32px"};
`,K=i.div`
  overflow: hidden;
`,U=i.div`
  display: flex;
  transition: ${({$isDragging:s})=>s?"none":"transform 0.3s ease"};
  transform: ${({$currentIndex:s,$dragOffset:d,$slidesToShow:a})=>{const l=`(100% - (${a-1} * 16px)) / ${a}`;return`translateX(calc(-${s} * ((${l}) + 16px) + ${d}px))`}};
  will-change: transform;
  gap: 16px;
`,Y=i.div`
  width: ${({$slidesToShow:s})=>`calc((100% - (${s-1} * 16px)) / ${s})`};
  flex-shrink: 0;
  border-radius: 16px;
  background: white;
  max-height: 314px;
  overflow: hidden;
`,G={background:"transparent",padding:0},w=({children:s,bgImgSrc:d="https://i.imgur.com/Bs9nnJQ.jpeg",slideSeparator:a="of",slidesToShow:l,togglePaginationDots:$=!0,toggleNavigation:B=!0,dragOffsetValue:T=50})=>{const[c,R]=n.useState(0),[f,k]=n.useState(0),[V,z]=n.useState(!1),[o,C]=n.useState(Math.max(l??1,1)),x=n.useRef(null),y=n.useRef(null),b=n.useRef(null),r=v.Children.count(s);n.useLayoutEffect(()=>{const t=()=>{if(l)C(l);else if(y.current){const j=y.current.offsetWidth,P=b.current?b.current.firstChild:0,E=P?window.getComputedStyle(P):null,A=E?parseFloat(E.minWidth):0,L=Math.floor(j/(A+16));C(Math.min(Math.max(L,1),r))}};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[r,l]);const M=()=>{R(t=>t<r-o?t+1:t)},D=()=>{R(t=>t>0?t-1:t)},W=t=>{x.current=t.touches[0].clientX,z(!0)},I=t=>{if(x.current!==null){const j=t.touches[0].clientX;k(j-x.current)}},H=()=>{f>T?D():f<-T&&M(),k(0),z(!1),x.current=null},_=v.Children.map(s,t=>{if(v.isValidElement(t))return e.jsx(Y,{$slidesToShow:o,ref:b,children:t},t.key)});return e.jsxs(J,{$bgImgSrc:d??"",ref:y,children:[B&&r!==o&&e.jsx(X,{currentIndex:c,totalSlides:r,slideSeparator:a,onPrevSlide:D,onNextSlide:M,disablePrev:c===0,disableNext:c===r-o}),e.jsx(K,{children:e.jsx(U,{onTouchStart:W,onTouchMove:I,onTouchEnd:H,$isDragging:V,$currentIndex:c,$dragOffset:f,$slidesToShow:o,children:_})}),e.jsx(F,{$togglePaginationDots:$,$totalSlides:r,$visibleSlides:o,children:$&&r!==o&&e.jsx(Q,{length:r,currentIndex:c,style:G})})]})};w.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},bgImgSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'https://i.imgur.com/Bs9nnJQ.jpeg'",computed:!1}},slideSeparator:{required:!1,tsType:{name:"union",raw:"'sur' | 'of'",elements:[{name:"literal",value:"'sur'"},{name:"literal",value:"'of'"}]},description:"",defaultValue:{value:"'of'",computed:!1}},slidesToShow:{required:!1,tsType:{name:"number"},description:""},togglePaginationDots:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toggleNavigation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dragOffsetValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}}}};const u=i.div`
  min-width: 286px;
  padding: 32px 24px;
  box-sizing: border-box;
`,p=i.div`
  color: ${S["primary-700"]};
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 12px;
`,h=i.div`
  color: ${S["neutral-900"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 8px;
`,g=i.div`
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
`,Z={children:[e.jsxs(u,{children:[e.jsx(p,{children:"$14.7M"}),e.jsx(h,{children:"Quarterly Synergy Yield"}),e.jsx(g,{children:"Through proactive monetization of data silos and predictive scaling of stakeholder matrices, we've achieved a fourth-cycle uplift in synergy capitalization across distributed cloud verticals."})]},1),e.jsxs(u,{children:[e.jsx(p,{children:"4.6 Days"}),e.jsx(h,{children:"Average Deal Velocity"}),e.jsxs(g,{children:["Accelerated deal closures were made possible by:",e.jsxs("ul",{children:[e.jsx("li",{children:"Pre-calibrated pitch modularity"}),e.jsx("li",{children:"Contractual auto-approval loops"}),e.jsx("li",{children:"Cross-channel stakeholder syncing"})]})]})]},2),e.jsxs(u,{children:[e.jsx(p,{children:"17 Nodes"}),e.jsx(h,{children:"Microservice Throughput Hubs"}),e.jsxs(g,{children:[e.jsx("div",{style:{paddingBottom:"16px"},children:"Our architecture now supports modularized task clusters via 17 dedicated nodes, each designed to handle dual-injected I/O patterns. This ensures hyperspeed deployments without load compromise across mission-critical layers."}),e.jsx("i",{children:"*Only applies to locals."})]})]},3),e.jsxs(u,{children:[e.jsx(p,{children:"92%"}),e.jsx(h,{children:"Retention Uplift Metric"}),e.jsx(g,{children:"Post-implementation analytics reveal that user stickiness soared following the rollout of tier-aware personalization layers and context-sensitive feedback loops within the engagement funnel."})]},4),e.jsxs(u,{children:[e.jsx(p,{children:"$302K"}),e.jsx(h,{children:"Monthly Burn Rate Delta"}),e.jsx(g,{children:"Operational outlays have been smart-reduced by deploying latency-aware budget clusters, allowing us to abstract capex into micro-quadrants while sustaining ROI-positive throughput."})]},5)],slideSeparator:"sur",bgImgSrc:"images/business.jpg",togglePaginationDots:!0,toggleNavigation:!0},ee={baseStyles:Z},ge={title:"Carousel",component:w,argTypes:{}},te=s=>e.jsx(w,{...s}),m=te.bind({});m.args={...ee.baseStyles};var N,O,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"args => <Slider {...args} />",...(q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const me=["Base"];export{m as Base,me as __namedExportsOrder,ge as default};
