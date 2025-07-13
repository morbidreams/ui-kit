import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-DO1mR48L.js";import{I as m}from"./index-ug9F8X7M.js";import"./styled-components.browser.esm-B4hG9-nt.js";import"./Colors-BCsKZ4GV.js";const b={placeholder:"Example",type:"text"},y={placeholder:"Enter text",type:"text",error:!0,errorMessage:"This field is required"},d={baseStyles:b,errorStyles:y},V={title:"Controls/Input",component:m,argTypes:{placeholder:{control:"text"},className:{control:"text"},style:{control:"object"},type:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},errorMessage:{control:"text"},color:{control:"text"},borderColor:{control:"text"},maxLength:{control:"number"},value:{control:"text"},onChange:{action:"changed"},onBlur:{action:"blurred"},onFocus:{action:"focused"}}},i=e=>{const[g,x]=h.useState(e.value??"");return v.jsx(m,{...e,value:g,onChange:o=>{var a;(a=e.onChange)==null||a.call(e,o),x(o.target.value)}})},t=i.bind({});t.args={...d.baseStyles};const r=i.bind({});r.args={...d.errorStyles};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? '');
  return <Input {...args} value={value} onChange={e => {
    args.onChange?.(e);
    setValue(e.target.value);
  }} />;
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? '');
  return <Input {...args} value={value} onChange={e => {
    args.onChange?.(e);
    setValue(e.target.value);
  }} />;
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Base","Error"];export{t as Base,r as Error,j as __namedExportsOrder,V as default};
