import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as n,l as t}from"./styled-components.browser.esm-B4hG9-nt.js";import{C as r}from"./Colors-BCsKZ4GV.js";const s=e=>t`
    color: ${r[`${e}-700`]};
    background-color: ${r[`${e}-${e==="neutral"?"100":"50"}`]};
  `,i=n.div`
  display: inline-flex;
  font-weight: 500;
  border-radius: 16px;
  font-size: 12px;
  padding: 2px 8px 2px 8px;
  ${e=>s(e.$color??"primary")}
`,l=e=>a.jsx(i,{$color:e.color,onClick:e.onClick,className:e.className,style:e.style,children:e.children});l.__docgenInfo={description:`@param {colors} props.color Color theme of the badge\r
@returns {JSX}`,methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'warning' | 'neutral' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};export{l as B};
