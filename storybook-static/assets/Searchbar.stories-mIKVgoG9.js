import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as l,l as A}from"./styled-components.browser.esm-Bwj2GSdY.js";import{C as a}from"./Colors-BCsKZ4GV.js";import{r as h}from"./iframe-CWrSSH7G.js";import{B as U}from"./index-CVDSXtAa.js";import{M as z}from"./index-mYqbd3fD.js";import{C as W}from"./index-D65UVLMm.js";import{B as Y}from"./Breakpoints-DFWGL-c-.js";var J={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function K(e){if(typeof e=="number")return{value:e,unit:"px"};var n,s=(e.match(/^[0-9.]*/)||"").toString();s.includes(".")?n=parseFloat(s):n=parseInt(s,10);var r=(e.match(/[^0-9]*$/)||"").toString();return J[r]?{value:n,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function I(e){var n=K(e);return"".concat(n.value).concat(n.unit)}var Q=function(e,n,s){var r="react-spinners-".concat(e,"-").concat(s);if(typeof window>"u"||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,c=`
    @keyframes `.concat(r,` {
      `).concat(n,`
    }
  `);return i&&i.insertRule(c,0),r},b=function(){return b=Object.assign||function(e){for(var n,s=1,r=arguments.length;s<r;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b.apply(this,arguments)},X=function(e,n){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(s[r[o]]=e[r[o]]);return s},Z=Q("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function ee(e){var n=e.loading,s=n===void 0?!0:n,r=e.color,o=r===void 0?"#000000":r,i=e.speedMultiplier,c=i===void 0?1:i,x=e.cssOverride,v=x===void 0?{}:x,p=e.size,m=p===void 0?35:p,S=X(e,["loading","color","speedMultiplier","cssOverride","size"]),R=b({background:"transparent !important",width:I(m),height:I(m),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(Z," ").concat(.75/c,"s 0s infinite linear"),animationFillMode:"both"},v);return s?h.createElement("span",b({style:R},S)):null}const re=l.div`
  position: relative;
`,te=l.input`
  ${U}
  padding-left: 42px;
  border: 1px solid ${a["neutral-300"]};
`,ne=l.div`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: ${a["neutral-600"]};
  display: flex;
  align-items: center;
`,oe=l(W)`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 1;
  opacity: ${({show:e})=>e?1:0};
  visibility: ${({show:e})=>e?"visible":"hidden"};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  padding: 0;
  border: 1px solid ${a["neutral-200"]};
`,T=({placeholder:e,className:n,style:s,onChange:r,debounce:o,debounceDuration:i,children:c,hideResults:x=!1,isLoading:v=!1,onFocus:p,forceShowResults:m=!1,onClickOutside:S})=>{const[R,w]=h.useState(!1),j=h.useRef(null),M=d=>{f&&clearTimeout(f),f=setTimeout(()=>{r&&r(d),w(d!=="")},i??400)};let f=null;h.useEffect(()=>()=>{f&&clearTimeout(f)},[r]);const H=d=>{const{value:q}=d.target;o?M(q):(r&&r(q),w(m||q!==""))},G=d=>{p&&p(),window.visualViewport&&window.visualViewport.scale!==1&&(d.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"}))},$=d=>{S&&S(),j.current&&!j.current.contains(d.target)&&w(!1)};return h.useEffect(()=>(document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}),[]),t.jsxs(re,{className:n,style:s,children:[t.jsxs(ne,{children:[v&&t.jsx(ee,{color:a["neutral-600"],size:"18px"}),!v&&t.jsx(z,{})]}),t.jsx(te,{ref:j,onChange:H,onFocus:G,placeholder:e}),t.jsx(oe,{show:R&&!x||m,children:c})]})};T.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"HTMLInputTypeAttribute"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},debounce:{required:!1,tsType:{name:"boolean"},description:""},debounceDuration:{required:!1,tsType:{name:"number"},description:""},hideResults:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},forceShowResults:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClickOutside:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E=A`
  padding: 10px 14px 10px 14px;
  width: 100%;
  color: ${a["neutral-900"]};
  line-height: 24px;
`,se=l.div`
  ${E}
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  &:hover {
    background-color: ${a["neutral-50"]};
    color: ${a["primary-800"]};
  }
`,D=l.div`
  ${E}
  font-weight: 600;
`,u=({className:e,style:n,result:s,resultDestination:r,noDestination:o,children:i,onClick:c})=>o?t.jsx(D,{className:e,style:n,children:s}):i?t.jsx(D,{className:e,style:n,children:i}):t.jsx("a",{href:r??"#",style:{textDecoration:"none"},onClick:c,children:t.jsx(se,{className:e,style:n,children:s})});u.__docgenInfo={description:"",methods:[],displayName:"SearchResult",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},result:{required:!0,tsType:{name:"string"},description:""},resultDestination:{required:!1,tsType:{name:"string"},description:""},noDestination:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae=l.div`
  padding: 10px 14px 10px 14px;
  width: 100%;
  color: ${a["neutral-600"]};
  font-weight: 500;
  line-height: 24px;
`,k=({className:e,style:n,headerText:s,disableDivider:r})=>t.jsxs(t.Fragment,{children:[t.jsx(ae,{className:e,style:n,children:t.jsx("span",{children:s})}),!r&&t.jsx("hr",{style:{width:"100%",margin:0,borderTop:0,borderBottom:`1px solid ${a["neutral-200"]}`}})]});k.__docgenInfo={description:"",methods:[],displayName:"SearchResultHeader",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},headerText:{required:!0,tsType:{name:"string"},description:""},disableDivider:{required:!1,tsType:{name:"boolean"},description:""}}};const ie=l.div`
    padding: ${e=>e.noDivider?"0 14px 10px 14px":"10px 14px 10px 14px"};
    marginTop: ${e=>e.noDivider?"-2px":"0"}
    width: 100%;
    color: ${e=>e.noDivider?a["primary-700"]:a["neutral-600"]};
    font-weight: 500;
`,L=l.span`
  color: ${e=>e.noDivider?a["primary-700"]:a["neutral-700"]};
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  @media screen and (max-width: ${Y["mobile-end"]}) {
    display: block;
    margin-top: ${e=>e.footerText?"8px":"0px"};
  }
`,le=l(ie)`
  line-height: 24px;
  &:hover ${L} {
    color: ${e=>e.noDivider?a["primary-800"]:a["neutral-800"]};
  }
`,C=({className:e,style:n,linkDestination:s,linkText:r,footerText:o,noDivider:i})=>t.jsxs(t.Fragment,{children:[!i&&t.jsx("hr",{style:{width:"100%",margin:0,borderTop:0,borderBottom:`1px solid ${a["neutral-200"]}`}}),t.jsx("a",{href:s??"#",style:{textDecoration:"none"},children:t.jsxs(le,{className:e,style:n,noDivider:i,children:[o&&t.jsx("span",{style:{marginRight:"8px"},children:o}),r&&t.jsx("u",{children:t.jsx(L,{noDivider:i,footerText:o,children:r})})]})})]});C.__docgenInfo={description:"",methods:[],displayName:"SearchResultFooter",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},footerText:{required:!1,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},linkDestination:{required:!1,tsType:{name:"string"},description:""},noDivider:{required:!1,tsType:{name:"boolean"},description:""}}};const de={placeholder:"Try Reddit, Vk, Goodreads...”",onChange:e=>{console.log("Search query:",e)},debounce:!0,debounceDuration:200,forceShowResults:!1},V={baseStyles:de},Se={title:"Controls/Searchbar",component:T,argTypes:{}},ce=e=>t.jsxs(T,{...e,children:[t.jsx(k,{headerText:"I'm looking for..."}),t.jsx(u,{result:"Netflix"}),t.jsx(u,{result:"Vk"}),t.jsx(u,{result:"Goodreads"}),t.jsx(u,{result:"Braceletbook"}),t.jsx(C,{footerText:"Looking for another answer?",linkText:"Tell us about your ideas"})]}),ue=e=>t.jsxs(T,{...e,children:[t.jsx(k,{headerText:"I'm looking for..."}),t.jsx(u,{result:"No results found.",noDestination:!0}),t.jsx(C,{linkText:"Tell us about your project",noDivider:!0})]}),y=ce.bind({}),g=ue.bind({});y.args={...V.baseStyles};g.args={...V.baseStyles};var N,_,O;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`args => <SearchInput {...args}>\r
    <SearchResultHeader headerText="I'm looking for..." />\r
    <SearchResult result="Netflix" />\r
    <SearchResult result="Vk" />\r
    <SearchResult result="Goodreads" />\r
    <SearchResult result="Braceletbook" />\r
    <SearchResultFooter footerText="Looking for another answer?" linkText="Tell us about your ideas" />\r
  </SearchInput>`,...(O=(_=y.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,F,B;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`args => <SearchInput {...args}>\r
    <SearchResultHeader headerText="I'm looking for..." />\r
    <SearchResult result="No results found." noDestination />\r
    <SearchResultFooter linkText="Tell us about your project" noDivider />\r
  </SearchInput>`,...(B=(F=g.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const be=["Base","NoResults"];export{y as Base,g as NoResults,be as __namedExportsOrder,Se as default};
