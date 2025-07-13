import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./styled-components.browser.esm-B4hG9-nt.js";import{C as n}from"./Colors-BCsKZ4GV.js";import{S as o}from"./index-mYqbd3fD.js";const s={none:"0px",xs:"4px",sm:"6px",md:"8px"},a=r.div`
  display: flex;
  align-items: center;
  gap: ${s.md};
  color: ${n["neutral-600"]};

  svg {
    color: ${n["warning-400"]};
  }
`,l=r.div`
  display: flex;
  align-items: center;
  gap: ${s.sm};
  color: ${n["neutral-600"]};
`,p=({ratingLabel:t,reviewLabel:i})=>e.jsxs(a,{children:[e.jsxs(l,{children:[e.jsx("span",{style:{fontWeight:600},children:t}),e.jsx(o,{})]}),e.jsx("span",{style:{color:n["neutral-300"]},children:"|"}),e.jsx("span",{children:i})]});p.__docgenInfo={description:"",methods:[],displayName:"RatingInfo",props:{ratingLabel:{required:!0,tsType:{name:"string"},description:""},reviewLabel:{required:!0,tsType:{name:"string"},description:""}}};export{p as R,s as S};
