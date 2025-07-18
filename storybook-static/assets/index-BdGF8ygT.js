import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-BW9Cig6r.js";const a=n.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 6px;
  border-radius: 999px;
  width: fit-content;
  display: flex;
  justify-content: center;
  gap: 4px;
`,d=n.div`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({$isActive:e})=>e?"white":"rgba(249, 250, 251, 0.5)"};
  transition: background-color 0.3s ease;
`,p=({className:e,length:r,currentIndex:o,style:s})=>i.jsx(a,{className:e,style:s,children:new Array(r).fill(null).map((c,t)=>i.jsx(d,{$isActive:t===o},`dot-${r}-${t}`))});p.__docgenInfo={description:"",methods:[],displayName:"PaginationDots",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},length:{required:!0,tsType:{name:"number"},description:""},currentIndex:{required:!0,tsType:{name:"number"},description:""}}};export{p as P};
