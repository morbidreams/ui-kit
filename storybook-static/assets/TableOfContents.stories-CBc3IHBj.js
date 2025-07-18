import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{g as X,r as h}from"./iframe-CWrSSH7G.js";import{d as T}from"./styled-components.browser.esm-Bwj2GSdY.js";import{B as C}from"./Breakpoints-DFWGL-c-.js";import{C as b}from"./Colors-BCsKZ4GV.js";import{U as ie,D as ae}from"./index-mYqbd3fD.js";var H={exports:{}},L,F;function oe(){if(F)return L;F=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return L=e,L}var j,N;function se(){if(N)return j;N=1;var e=oe();function t(){}function r(){}return r.resetWarningCache=t,j=function(){function n(u,w,p,v,m,o){if(o!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}n.isRequired=n;function i(){return n}var s={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return s.PropTypes=s,s},j}var W;function ce(){return W||(W=1,H.exports=se()()),H.exports}var de=ce();const a=X(de),R=(e,t)=>{const r=document.createElement(e);return r.innerHTML=t,r},ue={headlines:[R("h2","Introduction"),R("h2","Blog Article H-Tag Character Count Over 2 Lines In The Title"),R("h2","Title Placeholder"),R("h2","Title Placeholder"),R("h2","Title Placeholder"),R("h2","Title Placeholder"),R("h2","Title Placeholder")],title:"Table of contents",readTime:"10 min read"},pe={BaseStyles:ue};var I={},z;function me(){if(z)return I;z=1,I.match=s,I.parse=u;var e=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,t=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,r=/^(?:(min|max)-)?(.+)/,n=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function s(m,o){return u(m).some(function(c){var y=c.inverse,q=c.type==="all"||o.type===c.type;if(q&&y||!(q||y))return!1;var M=c.expressions.every(function(E){var O=E.feature,k=E.modifier,f=E.value,g=o[O];if(!g)return!1;switch(O){case"orientation":case"scan":return g.toLowerCase()===f.toLowerCase();case"width":case"height":case"device-width":case"device-height":f=v(f),g=v(g);break;case"resolution":f=p(f),g=p(g);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":f=w(f),g=w(g);break;case"grid":case"color":case"color-index":case"monochrome":f=parseInt(f,10)||1,g=parseInt(g,10)||0;break}switch(k){case"min":return g>=f;case"max":return g<=f;default:return g===f}});return M&&!y||!M&&y})}function u(m){return m.split(",").map(function(o){o=o.trim();var c=o.match(e),y=c[1],q=c[2],M=c[3]||"",E={};return E.inverse=!!y&&y.toLowerCase()==="not",E.type=q?q.toLowerCase():"all",M=M.match(/\([^\)]+\)/g)||[],E.expressions=M.map(function(O){var k=O.match(t),f=k[1].toLowerCase().match(r);return{modifier:f[1],feature:f[2],value:k[2]}}),E})}function w(m){var o=Number(m),c;return o||(c=m.match(/^(\d+)\s*\/\s*(\d+)$/),o=c[1]/c[2]),o}function p(m){var o=parseFloat(m),c=String(m).match(i)[1];switch(c){case"dpcm":return o/2.54;case"dppx":return o*96;default:return o}}function v(m){var o=parseFloat(m),c=String(m).match(n)[1];switch(c){case"em":return o*16;case"rem":return o*16;case"cm":return o*96/2.54;case"mm":return o*96/2.54/10;case"in":return o*96;case"pt":return o*72;case"pc":return o*72/12;default:return o}}return I}var P,V;function le(){if(V)return P;V=1;var e=me().match,t=typeof window<"u"?window.matchMedia:null;function r(i,s,u){var w=this,p;t&&!u&&(p=t.call(window,i)),p?(this.matches=p.matches,this.media=p.media,p.addListener(o)):(this.matches=e(i,s),this.media=i),this.addListener=v,this.removeListener=m,this.dispose=c;function v(y){p&&p.addListener(y)}function m(y){p&&p.removeListener(y)}function o(y){w.matches=y.matches,w.media=y.media}function c(){p&&p.removeListener(o)}}function n(i,s,u){return new r(i,s,u)}return P=n,P}var he=le();const fe=X(he);var xe=/[A-Z]/g,ye=/^ms-/,_={};function ge(e){return"-"+e.toLowerCase()}function Z(e){if(_.hasOwnProperty(e))return _[e];var t=e.replace(xe,ge);return _[e]=ye.test(t)?"-"+t:t}function be(e,t){if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(let s=0;s<i;s++){const u=r[s];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}const x=a.oneOfType([a.string,a.number]),J={all:a.bool,grid:a.bool,aural:a.bool,braille:a.bool,handheld:a.bool,print:a.bool,projection:a.bool,screen:a.bool,tty:a.bool,tv:a.bool,embossed:a.bool},ve={orientation:a.oneOf(["portrait","landscape"]),scan:a.oneOf(["progressive","interlace"]),aspectRatio:a.string,deviceAspectRatio:a.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:a.bool,colorIndex:a.bool,monochrome:a.bool,resolution:x,type:Object.keys(J)},{type:it,...Te}=ve,we={minAspectRatio:a.string,maxAspectRatio:a.string,minDeviceAspectRatio:a.string,maxDeviceAspectRatio:a.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:a.number,maxColor:a.number,minColorIndex:a.number,maxColorIndex:a.number,minMonochrome:a.number,maxMonochrome:a.number,minResolution:x,maxResolution:x,...Te},Ee={...J,...we};var Ce={all:Ee};const Re=e=>`not ${e}`,Me=(e,t)=>{const r=Z(e);return typeof t=="number"&&(t=`${t}px`),t===!0?r:t===!1?Re(r):`(${r}: ${t})`},qe=e=>e.join(" and "),Se=e=>{const t=[];return Object.keys(Ce.all).forEach(r=>{const n=e[r];n!=null&&t.push(Me(r,n))}),qe(t)},Oe=h.createContext(void 0),ke=e=>e.query||Se(e),A=e=>e?Object.keys(e).reduce((r,n)=>(r[Z(n)]=e[n],r),{}):void 0,ee=()=>{const e=h.useRef(!1);return h.useEffect(()=>{e.current=!0},[]),e.current},Ie=e=>{const t=h.useContext(Oe),r=()=>A(e)||A(t),[n,i]=h.useState(r);return h.useEffect(()=>{const s=r();be(n,s)||i(s)},[e,t]),n},$e=e=>{const t=()=>ke(e),[r,n]=h.useState(t);return h.useEffect(()=>{const i=t();r!==i&&n(i)},[e]),r},He=(e,t)=>{const r=()=>fe(e,t||{},!!t),[n,i]=h.useState(r),s=ee();return h.useEffect(()=>{if(s){const u=r();return i(u),()=>{u&&u.dispose()}}},[e,t]),n},Le=e=>{const[t,r]=h.useState(e.matches);return h.useEffect(()=>{const n=i=>{r(i.matches)};return e.addListener(n),r(e.matches),()=>{e.removeListener(n)}},[e]),t},te=(e,t,r)=>{const n=Ie(t),i=$e(e);if(!i)throw new Error("Invalid or missing MediaQuery!");const s=He(i,n),u=Le(s);return ee(),h.useEffect(()=>{},[u]),h.useEffect(()=>()=>{s&&s.dispose()},[]),u},je=T.div`
  margin-top: 16px;
`,Pe=T.a`
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  color: ${b["neutral-900"]};

  &:hover,
  &:focus {
    color: ${b["primary-700"]};
  }
`,ne=({item:e,index:t,onItemClick:r=()=>{}})=>{const n=i=>{i.preventDefault(),r(i,t,e)};return d.jsx(je,{children:d.jsx(Pe,{onClick:n,children:e.innerText})})};ne.__docgenInfo={description:"",methods:[],displayName:"TableOfContentsElement",props:{item:{required:!0,tsType:{name:"HTMLElement"},description:""},index:{required:!0,tsType:{name:"number"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.SyntheticEvent, index: number, item: HTMLElement) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent"},name:"event"},{type:{name:"number"},name:"index"},{type:{name:"HTMLElement"},name:"item"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const _e=T.div`
  min-height: 56.08px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  column-gap: 8px;
  background-color: ${b["neutral-50"]};
  border-bottom: 1px solid ${b["neutral-300"]};
  border-radius: 16px 16px 0px 0px;
  line-height: 24px;
  box-sizing: border-box;
  @media screen and (max-width: ${C["mobile-end"]}) {
    border-bottom: 1px solid ${b["neutral-200"]};
    cursor: pointer;
    padding: 0px 20px 0px 20px;
    justify-content: space-between;
    border-radius: 0px;
    background-color: white;
  }
`,De=T.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`,Ue=T.p`
  margin: 0px;
  padding: 16px 0px 16px 16px;
  font-weight: 600;
  color: ${b["neutral-900"]};
  @media screen and (max-width: ${C["mobile-end"]}) {
    padding-left: 0px;
  }
`,Fe=T.p`
  color: ${b["neutral-700"]};
  margin: 0px;
  padding: 16px 16px 16px 0px;
  @media screen and (max-width: ${C["mobile-end"]}) {
    padding-right: 0px;
  }
`,Ne=T.div`
  background: ${b["neutral-300"]};
  width: 1px;
  margin: 16px 0px 16px 0px;
  @media screen and (max-width: ${C["mobile-end"]}) {
    background: ${b["neutral-200"]};
    margin: 0px;
    width: 1px;
    height: 24px;
  }
`,We=T.div`
  margin: 16px 0;
`,Q=({title:e,readTime:t})=>d.jsxs(d.Fragment,{children:[d.jsx(Ue,{children:e}),d.jsx(Ne,{}),d.jsx(Fe,{children:t})]}),re=({isOpen:e,handleToggle:t,title:r,readTime:n,id:i})=>{const s=te({query:`(max-width: ${C["mobile-end"]})`});return d.jsx(_e,{onClick:s?t:void 0,id:i,children:s?d.jsxs(d.Fragment,{children:[d.jsx(De,{children:d.jsx(Q,{title:r,readTime:n})}),d.jsx(We,{children:e?d.jsx(ie,{}):d.jsx(ae,{})})]}):d.jsx(Q,{title:r,readTime:n})})};re.__docgenInfo={description:"",methods:[],displayName:"TableOfContentsHeader",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},handleToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},readTime:{required:!1,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const ze=e=>{const[t,r]=h.useState(0);return h.useEffect(()=>{const n=()=>{const i=document.getElementById(e);i&&r(i.offsetHeight)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[e]),t};var l=[];for(var D=0;D<256;++D)l.push((D+256).toString(16).slice(1));function Ve(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}var $,Ae=new Uint8Array(16);function Qe(){if(!$&&($=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $(Ae)}var Be=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const B={randomUUID:Be};function Ke(e,t,r){if(B.randomUUID&&!e)return B.randomUUID();e=e||{};var n=e.random||(e.rng||Qe)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,Ve(n)}const Ye=T.div`
  border: 1px solid ${b["neutral-300"]};
  border-radius: 16px;
  box-sizing: border-box;
  @media screen and (max-width: ${C["mobile-end"]}) {
    z-index: ${e=>e.$zIndex??5};
    transform: translate3d(0, 0, 0);
    left: 0;
    width: 100%;
    border-top: 1px solid ${b["neutral-200"]};
    border-radius: 0px;
    border: none;
    position: sticky;
  }
`,Ge=T.div`
  max-height: ${e=>e.$maxHeight};
  overflow-y: auto;
  box-sizing: border-box;
  padding: 0px 20px 16px 20px;
  @media screen and (max-width: ${C["mobile-end"]}) {
    width: 100%;
    padding: 0px 20px 20px 20px;
    border-bottom: 1px solid ${b["neutral-200"]};
    background: white;
    position: fixed;
  }
`,U=e=>{var p;const[t,r]=h.useState(!1),n=te({query:`(max-width: ${C["mobile-end"]})`}),i=`table-of-contents-header-${Ke()}`,s=ze(i),u=()=>{r(!t)},w=(v,m,o)=>{var c;v.preventDefault(),r(!t),(c=e.onClickFunction)==null||c.call(e,o)};return d.jsxs(Ye,{id:e.id,style:e.style,$zIndex:e.zIndex,children:[d.jsx(re,{id:i,isOpen:t,handleToggle:u,title:e.title,readTime:e.readTime}),(n&&t||!n)&&d.jsx(Ge,{$maxHeight:`calc(100vh - ${s}px${e.subtractFromMaxHeight?" - "+e.subtractFromMaxHeight:""})`,children:(p=e.headlines)==null?void 0:p.map((v,m)=>d.jsx(ne,{item:v,index:m,onItemClick:w},v.innerText.slice(0,10)))})]})};U.__docgenInfo={description:"",methods:[],displayName:"TableOfContents",props:{id:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},headlines:{required:!1,tsType:{name:"Array",elements:[{name:"HTMLElement"}],raw:"HTMLElement[]"},description:""},title:{required:!1,tsType:{name:"string"},description:""},readTime:{required:!1,tsType:{name:"string"},description:""},onClickFunction:{required:!1,tsType:{name:"signature",type:"function",raw:"(element: Element) => void",signature:{arguments:[{type:{name:"Element"},name:"element"}],return:{name:"void"}}},description:""},subtractFromMaxHeight:{required:!1,tsType:{name:"string"},description:""},zIndex:{required:!1,tsType:{name:"number"},description:""}}};const at={title:"Table Of Contents",component:U,argTypes:{}},Xe=e=>d.jsx(U,{...e}),S=Xe.bind({});S.args={...pe.BaseStyles};var K,Y,G;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:"args => <TableOfContents {...args} />",...(G=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const ot=["Base"];export{S as Base,ot as __namedExportsOrder,at as default};
