import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-B4hG9-nt.js";import{C as r}from"./Colors-BCsKZ4GV.js";import{C as c,a as m}from"./index-mYqbd3fD.js";import{R as i}from"./index-DvpI3kqA.js";const n=t.button`
  border-radius: 999px;
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
  cursor: pointer;
  &:hover {
    background: ${r["neutral-300"]};
    svg path {
      stroke: ${r["neutral-800"]};
    }
  }
  &:active {
    background: ${r["neutral-400"]};
    svg path {
      stroke: ${r["neutral-800"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
    background: ${r["neutral-100"]};
    svg path {
      stroke: ${r["neutral-400"]};
    }
  }
`,x=t.div`
  background: white;
  border-radius: 8px;
  width: 64px;
  height: 28px;
  box-sizing: border-box;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${r["neutral-700"]};
  display: flex;
  justify-content: center;
`,g=t(i)`
  justify-content: space-between;
  padding-bottom: 16px;
`,b=({currentIndex:o,totalSlides:s,slideSeparator:a,onPrevSlide:d,onNextSlide:u,disablePrev:p,disableNext:l})=>e.jsxs(g,{children:[e.jsxs(x,{children:[o+1," ",a," ",s]}),e.jsxs(i,{columnSpacing:"8px",children:[e.jsx(n,{onClick:d,disabled:p,children:e.jsx(c,{})}),e.jsx(n,{onClick:u,disabled:l,children:e.jsx(m,{})})]})]});b.__docgenInfo={description:"",methods:[],displayName:"SliderHeader",props:{currentIndex:{required:!0,tsType:{name:"number"},description:""},totalSlides:{required:!0,tsType:{name:"number"},description:""},slideSeparator:{required:!0,tsType:{name:"union",raw:"'sur' | 'of'",elements:[{name:"literal",value:"'sur'"},{name:"literal",value:"'of'"}]},description:""},onPrevSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextSlide:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disablePrev:{required:!0,tsType:{name:"boolean"},description:""},disableNext:{required:!0,tsType:{name:"boolean"},description:""}}};export{b as S};
