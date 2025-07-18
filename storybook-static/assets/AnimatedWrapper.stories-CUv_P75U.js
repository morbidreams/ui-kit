import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-Bj_fZlOo.js";import{B as b}from"./index-9vZAg93B.js";import{l as y,d as t}from"./styled-components.browser.esm-BW9Cig6r.js";import{a as l}from"./Animations-DwieUqVO.js";import{C as a}from"./Colors-BCsKZ4GV.js";import"./DefaultPropsProvider-7EA8HZRO.js";import"./memoTheme-DwCMIMd9.js";import"./useTheme-DaChCvKm.js";import"./extendSxProp-s4QnhW3V.js";import"./CircularProgress-CszZyRCI.js";const v=t.div`
  width: 100%;
  ${({$animation:r})=>r&&y`
      animation:
        ${l[r]} 0.4s ease-in-out forwards,
        ${l.fade} 0.3s ease-in;
    `}
`,o=({animation:r,children:n})=>e.jsx(v,{$animation:r,children:n});o.__docgenInfo={description:"",methods:[],displayName:"AnimatedWrapper",props:{animation:{required:!0,tsType:{name:"union",raw:"'fade' | 'slideLeft' | 'slideRight' | 'slideUp' | null",elements:[{name:"literal",value:"'fade'"},{name:"literal",value:"'slideLeft'"},{name:"literal",value:"'slideRight'"},{name:"literal",value:"'slideUp'"},{name:"null"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d=t.div`
  max-width: 500px;
  padding: 32px 24px;
  margin-top: 20px;
  box-sizing: border-box;
  border: 1px solid ${a["neutral-200"]};
  border-radius: 12px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`,c=t.div`
  color: ${a["primary-700"]};
  font-size: 48px;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 12px;
`,p=t.div`
  color: ${a["neutral-900"]};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 8px;
`,m=t.div`
  color: ${a["neutral-700"]};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  i {
    font-size: 14px;
  }
  ul {
    margin: 0 0 0 8px;
    padding: 0 0 0 8px;
  }
`,B={title:"Decor/Animated Wrapper",component:o},C=()=>{const[r,n]=s.useState(!0),[g,f]=s.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:()=>{f(r?"slideLeft":"slideRight"),n(!r)},children:"Toggle Card"}),e.jsxs(o,{animation:g,children:[r&&e.jsxs(d,{children:[e.jsx(c,{children:"1st"}),e.jsx(p,{children:"Quarterly Synergy Yield"}),e.jsx(m,{children:"Through proactive monetization of data silos and predictive scaling of stakeholder matrices, we've achieved a fourth-cycle uplift in synergy capitalization across distributed cloud verticals."})]}),!r&&e.jsxs(d,{children:[e.jsx(c,{children:"2nd"}),e.jsx(p,{children:"Average Deal Velocity"}),e.jsxs(m,{children:["Accelerated deal closures were made possible by:",e.jsxs("ul",{children:[e.jsx("li",{children:"Pre-calibrated pitch modularity"}),e.jsx("li",{children:"Contractual auto-approval loops"}),e.jsx("li",{children:"Cross-channel stakeholder syncing"})]})]})]})]})]})},i=C.bind({});var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const [animation, setAnimation] = useState<Animation>(null);
  return <>\r
      <Button onClick={() => {
      setAnimation(firstPage ? "slideLeft" : "slideRight");
      setFirstPage(!firstPage);
    }}>\r
        Toggle Card\r
      </Button>\r
      <AnimatedWrapper animation={animation}>\r
        {firstPage && <Container>\r
            <Header>1st</Header>\r
            <SubHeader>Quarterly Synergy Yield</SubHeader>\r
            <Content>\r
              Through proactive monetization of data silos and predictive\r
              scaling of stakeholder matrices, we've achieved a fourth-cycle\r
              uplift in synergy capitalization across distributed cloud\r
              verticals.\r
            </Content>\r
          </Container>}\r
        {!firstPage && <Container>\r
            <Header>2nd</Header>\r
            <SubHeader>Average Deal Velocity</SubHeader>\r
            <Content>\r
              Accelerated deal closures were made possible by:\r
              <ul>\r
                <li>Pre-calibrated pitch modularity</li>\r
                <li>Contractual auto-approval loops</li>\r
                <li>Cross-channel stakeholder syncing</li>\r
              </ul>\r
            </Content>\r
          </Container>}\r
      </AnimatedWrapper>\r
    </>;
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const W=["Base"];export{i as Base,W as __namedExportsOrder,B as default};
