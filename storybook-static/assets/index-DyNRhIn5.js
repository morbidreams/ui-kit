import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{l as o,d as s}from"./styled-components.browser.esm-B4hG9-nt.js";import{C as i}from"./Colors-BCsKZ4GV.js";const t=s.div`
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  width: 100%;
  position: relative;
  border: 1px solid ${i["neutral-200"]};
  background-color: white;
  border-radius: 12px;
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  top: 0;
  ${e=>e.$hover?o`
          transition: top 0.25s ease 0s;
          &:hover {
            top: -5px;
          }
        `:""}
`,a=e=>r.jsx(t,{$hover:e.hover??!1,onClick:e.onClick,style:e.style,className:e.className,children:r.jsx("div",{style:{width:"100%"},children:e.children})});a.__docgenInfo={description:`@param {boolean} props.hover Adds hover effect to card\r
@returns {JSX}`,methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},hover:{required:!1,tsType:{name:"boolean"},description:""}}};export{a as C};
