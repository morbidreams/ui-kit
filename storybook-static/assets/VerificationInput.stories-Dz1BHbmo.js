import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-Bj_fZlOo.js";import{d as y}from"./styled-components.browser.esm-BW9Cig6r.js";import{B as K}from"./Breakpoints-DFWGL-c-.js";import{C as i}from"./Colors-BCsKZ4GV.js";const se=y.div`
  width: 64px;
  height: 80px;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  font-weight: 500;
  padding: 8px;
  box-sizing: border-box;
  color: ${({$disabled:e,$color:n,$isPlaceholder:a})=>e||a?i["neutral-300"]:n||i["primary-700"]};
  border-radius: 10px;
  background-color: ${({$disabled:e})=>e?i["neutral-50"]:"white"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  box-shadow: ${({$selected:e,$filled:n,$disabled:a,$error:o,$borderColor:s})=>`inset 0 0 0 ${(e||n||o)&&!a?"2px":"1px"} ${o?i["error-300"]:a?i["neutral-300"]:e||n?s??i["primary-700"]:i["neutral-300"]}`};
  &:focus {
    outline: none;
  }

  @media (max-width: ${K["mobile-end"]}) {
    width: 48px;
    height: 64px;
    font-size: 36px;
    line-height: 40px;
  }
`,O=({$selected:e,$disabled:n,$filled:a,$isPlaceholder:o,$error:s,$color:V,$borderColor:C,onClick:u,children:c})=>l.jsx(se,{$selected:e,$disabled:n,$filled:a,$isPlaceholder:o,$error:s,$color:V,$borderColor:C,onClick:u,children:c});O.__docgenInfo={description:"",methods:[],displayName:"VerificationInputBox",props:{$selected:{required:!0,tsType:{name:"boolean"},description:""},$disabled:{required:!1,tsType:{name:"boolean"},description:""},$filled:{required:!0,tsType:{name:"boolean"},description:""},$isPlaceholder:{required:!0,tsType:{name:"boolean"},description:""},$error:{required:!1,tsType:{name:"boolean"},description:""},$color:{required:!1,tsType:{name:"string"},description:""},$borderColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ie=y.div`
  display: flex;
  justify-content: left;
  gap: 12px;

  @media (max-width: ${K["mobile-end"]}) {
    gap: 8px;
  }
`,le=y.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,ue=y.div`
  color: ${i["error-600"]};
  margin-top: 6px;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  width: 100%;
`,S=({value:e,length:n,placeholder:a="",autoFocus:o,passwordMode:s=!1,inputProps:V={},containerProps:C={},disabled:u,error:c,errorMessage:$,color:U,borderColor:G,onChange:P,onFocus:T,onBlur:q,onComplete:I})=>{const[J,Q]=m.useState(""),[W,M]=m.useState(!1),d=m.useRef(null);m.useEffect(()=>{o&&d.current&&d.current.focus()},[o]),m.useEffect(()=>{(u||c)&&M(!1)},[u,c]);const X=()=>{d.current&&d.current.focus()},Y=r=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault()},Z=r=>{const t=r.target.value.replace(/\D/g,"");t.length<=n&&(P&&P(t),Q(t),t.length===n&&(I==null||I(t)))},p=()=>e??J,ee=r=>{const t=p();return(t.length===r||t.length===r+1&&n===r+1)&&W},te=r=>p().length>r,{className:re,...ne}=V,{className:ae,...oe}=C;return l.jsxs("div",{style:{width:"min-content"},children:[l.jsxs(ie,{className:ae,onClick:()=>{var r;return(r=d.current)==null?void 0:r.focus()},...oe,children:[l.jsx(le,{"aria-label":"verification input",spellCheck:!1,value:p(),disabled:u,onChange:Z,autoComplete:"one-time-code",ref:d,className:re,onKeyDown:Y,onFocus:()=>{M(!0),T==null||T()},onBlur:()=>{M(!1),q==null||q()},onSelect:r=>{const t=r.target,j=t.value;t.setSelectionRange(j.length,j.length)},type:"text",inputMode:"numeric",...ne}),[...Array(n)].map((r,t)=>l.jsx(O,{$selected:ee(t),$disabled:u,$color:U,$borderColor:G,$error:c,$filled:te(t),$isPlaceholder:!p()[t],onClick:X,children:s&&p()[t]?"*":p()[t]||a},t))]}),c&&$&&l.jsx(ue,{children:$})]})};S.__docgenInfo={description:"",methods:[],displayName:"VerificationInput",props:{value:{required:!1,tsType:{name:"string"},description:""},length:{required:!0,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:""},passwordMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inputProps:{required:!1,tsType:{name:"ReactInputHTMLAttributes",raw:"React.InputHTMLAttributes<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},containerProps:{required:!1,tsType:{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"",defaultValue:{value:"{}",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},borderColor:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const x={length:6,placeholder:"",autoFocus:!1,passwordMode:!1,inputProps:{},containerProps:{},disabled:!1,onChange:e=>console.log("Changed:",e),onFocus:()=>console.log("Focused"),onBlur:()=>console.log("Blurred"),onComplete:e=>console.log("Completed:",e)},ce={...x,value:"123456"},de={...x,value:"123456",passwordMode:!0},pe={...x,error:!0,value:"123456",errorMessage:"Incorrect verification code. Please try again."},w={base:x,filled:ce,passwordMode:de,errorState:pe},ye={title:"Controls/Verification Code Input",component:S,argTypes:{value:{control:"text"},length:{control:"number"},placeholder:{control:"text"},autoFocus:{control:"boolean"},passwordMode:{control:"boolean"},inputProps:{control:"object"},containerProps:{control:"object"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"},onComplete:{action:"completed"},error:{control:"boolean"},errorMessage:{control:"text"},color:{control:"text"},borderColor:{control:"text"},type:{control:"text"},disabled:{control:"boolean"}}},b=e=>{const[n,a]=m.useState(e.value||"");return l.jsx(S,{...e,value:n,onChange:o=>{var s;(s=e.onChange)==null||s.call(e,o),a(o)}})},g=b.bind({});g.args={...w.base};const f=b.bind({});f.args={...w.filled};const h=b.bind({});h.args={...w.passwordMode};const v=b.bind({});v.args={...w.errorState};var R,E,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <VerificationInput {...args} value={value} onChange={(newValue: string) => {
    args.onChange?.(newValue);
    setValue(newValue);
  }} />;
}`,...(A=(E=g.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var L,N,k;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <VerificationInput {...args} value={value} onChange={(newValue: string) => {
    args.onChange?.(newValue);
    setValue(newValue);
  }} />;
}`,...(k=(N=f.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var B,H,_;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <VerificationInput {...args} value={value} onChange={(newValue: string) => {
    args.onChange?.(newValue);
    setValue(newValue);
  }} />;
}`,...(_=(H=h.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var D,F,z;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || "");
  return <VerificationInput {...args} value={value} onChange={(newValue: string) => {
    args.onChange?.(newValue);
    setValue(newValue);
  }} />;
}`,...(z=(F=v.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const xe=["Base","Filled","PasswordMode","ErrorState"];export{g as Base,v as ErrorState,f as Filled,h as PasswordMode,xe as __namedExportsOrder,ye as default};
