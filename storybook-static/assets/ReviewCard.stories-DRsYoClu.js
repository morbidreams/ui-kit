import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./styled-components.browser.esm-Bwj2GSdY.js";import{C as s}from"./Colors-BCsKZ4GV.js";import{r as a}from"./iframe-CWrSSH7G.js";import{B as u}from"./Breakpoints-DFWGL-c-.js";import{C as f}from"./index-D65UVLMm.js";import{C as x}from"./index-BvqvuOBr.js";import{R as g}from"./index-vIItBlWz.js";import{R as w}from"./index-CboGThiQ.js";import"./useSlot-FnrOy7uq.js";import"./DefaultPropsProvider-Cab5bodk.js";import"./memoTheme-CuuAs1rV.js";import"./useTheme-CTF2FurE.js";import"./useTheme-CjKPuoQ3.js";import"./extendSxProp-BaYSA7Fr.js";const h=()=>{const[t,r]=a.useState(),o=a.useCallback(()=>{typeof window<"u"&&r(window.innerWidth<=parseInt(u["mobile-end"],10))},[]);return a.useEffect(()=>{if(!(typeof window>"u"))return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[o]),t},b=i(f)`
  border-radius: 16px;
  border: 2px solid ${s["primary-100"]};
  min-height: 104px;
  max-width: 368px;
  min-width: ${t=>t.$isMobile?"288px":"368px"};
  box-shadow: none;
`,v=i(w)`
  height: 100%;
`,C=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  row-gap: 8px;
  background: ${s["primary-100"]};
`,y=i.div`
  color: ${s["primary-800"]};
  font-size: 36px;
  font-weight: 600;
`,R=i(x)`
  padding: 10px 10px 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  color: ${s["neutral-700"]};
`,p=({content:t,rating:r})=>{const o=h()??!1,d=typeof r=="string"?parseFloat(r.replace(",",".")):r;return e.jsx(b,{$isMobile:o,children:e.jsxs(v,{children:[e.jsxs(C,{children:[e.jsx(y,{children:r}),e.jsx(g,{defaultValue:d,value:d,size:"small",readOnly:!0})]}),e.jsx(R,{children:e.jsx("div",{children:t})})]})})};p.__docgenInfo={description:`@param {number} props.rating - The default value of the rating.\r
@param {string} props.content - The content of the review card.\r
\r
@returns {JSX}`,methods:[],displayName:"ReviewCard",props:{rating:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},content:{required:!1,tsType:{name:"string"},description:""}},composes:["MuiRatingProps"]};const j={rating:4.7,content:"14K+ clients reviewed apps."},M={base:j},J={title:"Review Card",component:p,argTypes:{content:{control:"select",options:["14K+ clients reviewed apps.","14K+ clients ont évalué les apps."]},rating:{control:"text",defaultValue:4.7}}},$=t=>e.jsx(p,{...t}),n=$.bind({});n.args={...M.base};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"args => <ReviewCard {...args} />",...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const N=["Base"];export{n as Base,N as __namedExportsOrder,J as default};
