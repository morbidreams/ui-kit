import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d as o}from"./styled-components.browser.esm-Bwj2GSdY.js";import{C as t}from"./Colors-BCsKZ4GV.js";const r=o.table`
  min-width: ${e=>e.$minWidth??"320px"};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  table-layout: auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  tbody tr {
    width: 100%;
    position: relative;
    transition: background-color 500ms linear;
    &:hover {
      background-color: ${t["neutral-200"]};
    }
  }
  td {
    color: ${t["neutral-600"]};
    padding: 16px 24px 16px 24px;
    text-align: start;
    font-size: 14px;
    border-top: 1px solid ${t["neutral-200"]};
  }
  th {
    background-color: white;
    color: ${t["neutral-700"]};
    font-weight: 500;
    font-size: 12px;
    padding: 16px 24px 16px 24px;
    text-align: start;
  }
  tbody tr:nth-child(odd) {
    background-color: ${t["neutral-50"]};
  }
  tbody tr:nth-child(even) {
    background-color: white;
  }
  tbody tr:nth-child(odd),
  tr:nth-child(even) {
    &:hover {
      background-color: ${t["neutral-200"]};
    }
  }
`,n=e=>i.jsx("div",{style:{width:"100%",position:"relative",display:"flex",flexDirection:"column",minWidth:e.minWidth??"320px",overflowX:"auto"},children:i.jsx(r,{$minWidth:e.minWidth,onClick:e.onClick,className:e.className,style:e.style,children:e.children})});n.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},minWidth:{required:!1,tsType:{name:"string"},description:""}}};export{n as T};
