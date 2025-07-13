import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DO1mR48L.js";import{l as m,d as u}from"./styled-components.browser.esm-B4hG9-nt.js";import{a as b}from"./Animations-BlJWuTSK.js";import{B as f}from"./Breakpoints-DFWGL-c-.js";const h={children:"Collapsible Content",isVisible:!0},C={base:h},g=u.div`
  @media screen and (max-width: ${f["mobile-end"]}) {
    height: ${({$height:e})=>e?`${e}px`:"0"};
    opacity: ${({$isVisible:e})=>e?1:0};
    overflow: hidden;
    transition:
      height 0.3s ease,
      opacity 0.3s ease,
      transform 0.3s ease;

    ${({$isVisible:e})=>!e&&m`
        animation: ${b.slideUp} 0.3s forwards;
      `}
  }
`,n=({isVisible:e,children:c})=>{const[p,d]=r.useState(0),o=r.useRef(null);return r.useEffect(()=>{o.current&&d(e?o.current.scrollHeight:0)},[e]),t.jsx(g,{ref:o,$isVisible:e,$height:p,children:c})};n.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{isVisible:{required:!0,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Decor/Collapsible",component:n},x=e=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...e,children:"Collapsible Content"}),t.jsx("p",{children:"Non collapsible content"})]}),s=x.bind({});s.args={...C.base};var a,i,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <>\r
      <Collapsible {...args}>Collapsible Content</Collapsible>\r
      <p>Non collapsible content</p>\r
    </>;
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["Base"];export{s as Base,B as __namedExportsOrder,w as default};
