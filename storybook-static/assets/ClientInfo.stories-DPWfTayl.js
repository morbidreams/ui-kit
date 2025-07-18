import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./styled-components.browser.esm-BW9Cig6r.js";import{R as g,S as s}from"./index-D-Y2Pjhm.js";import{L as x}from"./index-CHXhBct3.js";import"./iframe-Bj_fZlOo.js";import"./Colors-BCsKZ4GV.js";import"./index-mYqbd3fD.js";const h=i.div`
  display: flex;
  gap: ${s.md};
  font-size: ${({$size:e})=>e}px;
  align-items: center;
`,y=i.p`
  font-size: ${({$size:e})=>e}px;
  font-weight: 600;
  line-height: 24px;
  margin-top: ${s.none};
  margin-bottom: ${s.xs};
`,n=({imageSrc:e="https://i.imgur.com/Sd51w3c.png",companyLabel:p="Placeholder Name",ratingLabel:d="5.0",reviewLabel:m="10 Reviews",companyFontSize:c=16,ratingInfoFontSize:u=14,logoSize:f=48})=>a.jsxs(h,{$size:u,children:[a.jsx(x,{src:e,size:f}),a.jsxs("div",{children:[a.jsx(y,{$size:c,as:"h5",children:p}),a.jsx(g,{ratingLabel:d,reviewLabel:m})]})]});n.__docgenInfo={description:"",methods:[],displayName:"ClientInfo",props:{imageSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://i.imgur.com/Sd51w3c.png"',computed:!1}},companyLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Placeholder Name"',computed:!1}},ratingLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"5.0"',computed:!1}},reviewLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"10 Reviews"',computed:!1}},companyFontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"16",computed:!1}},ratingInfoFontSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"14",computed:!1}},logoSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}}}};const v={imageSrc:"https://i.imgur.com/Sd51w3c.png",companyLabel:"Placeholder Name",ratingLabel:"5.0",reviewLabel:"10 Reviews"},b={base:v},V={title:"Client Info",component:n},S=i.div`
  width: 320px;
`,w=e=>a.jsx(S,{children:a.jsx(n,{...e})}),t=w.bind({});t.args={...b.base};var r,o,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => <StyledContainer>\r
    <ClientInfo {...args} />\r
  </StyledContainer>`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const $=["Base"];export{t as Base,$ as __namedExportsOrder,V as default};
