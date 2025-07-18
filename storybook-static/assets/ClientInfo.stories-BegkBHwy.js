import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-Bwj2GSdY.js";import{R as g,S as t}from"./index-Crm_uFVc.js";import{L as x}from"./index-Ck7ddzv0.js";import"./iframe-CWrSSH7G.js";import"./Colors-BCsKZ4GV.js";import"./index-mYqbd3fD.js";const y=n.div`
  display: flex;
  gap: ${t.md};
  font-size: ${({$size:e})=>e}px;
  align-items: center;
`,v=n.p`
  font-size: ${({$size:e})=>e}px;
  font-weight: 600;
  line-height: 24px;
  margin-top: ${t.none};
  margin-bottom: ${t.xs};
`,r=({imageSrc:e="../../../images/user.png",companyLabel:p="Placeholder Name",ratingLabel:d="5.0",reviewLabel:m="10 Reviews",companyFontSize:c=16,ratingInfoFontSize:u=14,logoSize:f=48})=>a.jsxs(y,{$size:u,children:[a.jsx(x,{src:e,size:f}),a.jsxs("div",{children:[a.jsx(v,{$size:c,as:"h5",children:p}),a.jsx(g,{ratingLabel:d,reviewLabel:m})]})]});r.__docgenInfo={description:"",methods:[],displayName:"ClientInfo",props:{imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"../../../images/user.png"',computed:!1}},companyLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Placeholder Name"',computed:!1}},ratingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"5.0"',computed:!1}},reviewLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"10 Reviews"',computed:!1}},companyFontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},ratingInfoFontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"14",computed:!1}},logoSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}}}};const b={imageSrc:"../../../images/user.png",companyLabel:"Placeholder Name",ratingLabel:"5.0",reviewLabel:"10 Reviews"},h={base:b},V={title:"Client Info",component:r},S=n.div`
  width: 320px;
`,C=e=>a.jsx(S,{children:a.jsx(r,{...e})}),s=C.bind({});s.args={...h.base};var i,o,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => <StyledContainer>\r
    <ClientInfo {...args} />\r
  </StyledContainer>`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const $=["Base"];export{s as Base,$ as __namedExportsOrder,V as default};
