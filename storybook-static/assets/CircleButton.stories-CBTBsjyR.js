import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as l,l as c}from"./styled-components.browser.esm-BW9Cig6r.js";import{C as r}from"./Colors-BCsKZ4GV.js";import"./iframe-Bj_fZlOo.js";const d=e=>c`
    color: ${r[`${e}-500`]};
    border: 1px solid ${r[`${e}-200`]};
  `,m=l.button`
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  box-sizing: border-box;
  border-radius: 50%;
  width: ${e=>e.$size??"48px"};
  height: ${e=>e.$size??"48px"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: white;
  ${e=>d(e.$color??"primary")}
  &:disabled {
    background-color: white;
    border: 1px solid ${e=>r[`${e.$color??"primary"}-100`]};
    color: ${e=>r[`${e.$color??"primary"}-400`]};
  }
  &:hover:enabled {
    background-color: ${e=>r[`${e.$color??"primary"}-50`]};
  }
  &:active:enabled {
    border: 1px solid ${e=>r[`${e.$color??"primary"}-100`]};
  }
`,a=e=>n.jsx(m,{$color:e.color,$size:e.size,onClick:e.onClick,className:e.className,style:e.style,disabled:e.disabled,children:e.children});a.__docgenInfo={description:`@param {colors} props.color Color theme of the CircleButton\r
@param {string} props.size Size of the button\r
@returns {JSX}`,methods:[],displayName:"CircleButton",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'warning' | 'neutral' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},size:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const p={color:"primary",children:"1",disabled:!1},u={baseStyles:p},x={title:"Circle Button",component:a,argTypes:{}},y=e=>n.jsx(a,{...e}),o=y.bind({});o.args={...u.baseStyles};var t,s,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"args => <CircleButton {...args} />",...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["Base"];export{o as Base,C as __namedExportsOrder,x as default};
