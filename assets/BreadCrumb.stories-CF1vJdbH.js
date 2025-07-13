import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./iframe-DO1mR48L.js";import{d}from"./styled-components.browser.esm-B4hG9-nt.js";import{B as u,R as g}from"./index-mYqbd3fD.js";import{C as t}from"./Colors-BCsKZ4GV.js";const f={content:[{title:"",href:"/"},{title:"Solutions",href:"/#"},{title:"Consulting",href:"/#/#"}]},h={baseBreadCrumb:f},x=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;

  & > svg {
    color: ${t["neutral-300"]};
    margin-right: 12px;
    margin-left: 12px;
  }

  & > a {
    line-height: 0px;
  }
`,i=d.a`
  color: ${t["neutral-500"]};
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;

  &:hover {
    color: ${t["neutral-900"]};
  }

  svg {
    color: ${t["neutral-500"]};
  }
`,o=({content:r,style:p})=>e.jsxs(x,{style:p,children:[(r==null?void 0:r.length)>0&&e.jsx(i,{href:r[0].href,children:e.jsx(u,{})}),(r==null?void 0:r.length)>1&&r.slice(1).map(a=>e.jsxs(c.Fragment,{children:[e.jsx(g,{}),e.jsx(i,{href:a.href,children:a.title})]},a.href))]});o.__docgenInfo={description:"",methods:[],displayName:"BreadCrumb",props:{content:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ title: string; href: string }",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"{ title: string; href: string }[]"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const v={title:"Breadcrumb",component:o,argTypes:{}},b=r=>e.jsx(o,{...r}),s=b.bind({});s.args={...h.baseBreadCrumb};var n,m,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"args => <BreadCrumb {...args} />",...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const S=["Base"];export{s as Base,S as __namedExportsOrder,v as default};
