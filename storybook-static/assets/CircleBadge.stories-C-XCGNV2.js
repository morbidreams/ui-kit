import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{l as i,d as u}from"./styled-components.browser.esm-BW9Cig6r.js";import{C as o}from"./Colors-BCsKZ4GV.js";import{L as x}from"./index-mYqbd3fD.js";import"./iframe-Bj_fZlOo.js";const $=u.div`
  box-sizing: border-box;
  width: ${e=>e.$size??"48px"};
  height: ${e=>e.$size??"48px"};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  ${e=>e.$dark?i`
          background-color: ${o[`${e.$color??"primary"}-700`]};
        `:i`
          background-color: ${o[`${e.$color??"primary"}-50`]};
        `}
`,b=u.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  ${e=>e.$dark?i`
          background-color: ${o[`${e.$color??"primary"}-600`]};
          color: white;
        `:i`
          background-color: ${o[`${e.$color??"primary"}-100`]};
          color: ${o[`${e.$color??"primary"}-600`]};
        `}
`,t=e=>s.jsx($,{$color:e.color,onClick:e.onClick,className:e.className,style:e.style,$dark:e.dark,$size:e.size,children:s.jsx(b,{$color:e.color,$dark:e.dark,children:e.children})});t.__docgenInfo={description:`@param {colors} props.color Color theme of the badge\r
@returns {JSX}`,methods:[],displayName:"CircleBadge",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'warning' | 'neutral' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},dark:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"string"},description:""}}};const h={color:"primary",children:"1",dark:!1,size:"48px"},f={color:"primary",children:s.jsx(x,{})},g={baseStyles:h,withIconStyles:f},T={title:"Decor/Circle Badge",component:t,argTypes:{}},y=e=>s.jsx(t,{...e}),r=y.bind({}),a=y.bind({});r.args={...g.baseStyles};a.args={...g.withIconStyles};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <CircleBadge {...args} />",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <CircleBadge {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Base","WithIcon"];export{r as Base,a as WithIcon,j as __namedExportsOrder,T as default};
