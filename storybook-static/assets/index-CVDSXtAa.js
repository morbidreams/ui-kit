import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CWrSSH7G.js";import{d as s,l as $}from"./styled-components.browser.esm-Bwj2GSdY.js";import{C as n}from"./Colors-BCsKZ4GV.js";const w=$`
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
  color: ${e=>e.disabled?n["neutral-400"]:e.$color??n["neutral-900"]};
  border: 1px solid ${e=>e.$error?n["error-600"]:e.$borderColor??n["neutral-300"]};
  padding: 10px 14px 10px 14px;
  width: 100%;
  background-color: ${e=>e.disabled?n["neutral-100"]:"#fff"};
  outline: none;
  transition:
    box-shadow 0.25s,
    border-color 0.25s;
  box-shadow: ${e=>e.$focused?`0 0 0 2px ${n["primary-700"]}`:"none"};

  &:disabled {
    cursor: not-allowed;
  }
`,L=s.input`
  ${w}
`,H=s.div`
  color: ${n["error-600"]};
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  width: 100%;
`,R=s.div`
  text-align: left;
`,F=e=>{const{error:i,errorMessage:l,color:f,borderColor:g,disabled:h,value:r,defaultValue:v,type:y,onChange:u,onBlur:d,onFocus:p,maxLength:x,inputMode:T,...b}=e,[E,c]=o.useState(r??v??""),[C,m]=o.useState(!1);o.useEffect(()=>{r!==void 0&&c(r)},[r]);const I=t=>{m(!0),p&&p(t)},q=t=>{m(!1),d&&d(t)},M=t=>{r===void 0&&c(t.target.value),u&&u(t)};return a.jsxs(R,{children:[a.jsx(L,{...b,value:E,type:y,onChange:M,onBlur:q,onFocus:I,placeholder:e.placeholder,$error:i,$color:f,$borderColor:g,$focused:C,disabled:h,maxLength:x,inputMode:T}),i&&l&&a.jsx(H,{children:l})]})};F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},type:{required:!1,tsType:{name:"HTMLInputTypeAttribute"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},maxLength:{required:!1,tsType:{name:"number"},description:""},inputMode:{required:!1,tsType:{name:"union",raw:"'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'text'"},{name:"literal",value:"'decimal'"},{name:"literal",value:"'numeric'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'search'"},{name:"literal",value:"'email'"},{name:"literal",value:"'url'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};export{w as B,F as I};
