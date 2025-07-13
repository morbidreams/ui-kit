import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as g}from"./iframe-DO1mR48L.js";import{d as $,l as o}from"./styled-components.browser.esm-B4hG9-nt.js";import{C as r}from"./Colors-BCsKZ4GV.js";import{s as y,a as v,c as w,C as k,T,b as C}from"./DefaultPropsProvider-Cz_335H4.js";import{g as R}from"./memoTheme-DykmSxfA.js";import{u as z}from"./useTheme-DxfJqGIB.js";import{e as N}from"./extendSxProp-PHsOGbm9.js";import{C as B}from"./CircularProgress-C08Xgl2n.js";function q(e={}){const{themeId:a,defaultTheme:u,defaultClassName:n="MuiBox-root",generateClassName:s}=e,c=y("div",{shouldForwardProp:t=>t!=="theme"&&t!=="sx"&&t!=="as"})(v);return f.forwardRef(function(p,m){const l=z(u),{className:x,component:h="div",...b}=N(p);return i.jsx(c,{as:h,ref:m,className:w(x,s?s(n):n),theme:a&&l[a]||l,...b})})}const M=R("MuiBox",["root"]),S=C(),j=q({themeId:T,defaultTheme:S,defaultClassName:M.root,generateClassName:k.generate}),W=(e,a)=>{if(a)switch(e){case"neutral":return o`
          &:disabled {
            background-color: white;
            border: 1px solid ${r["neutral-200"]};
            color: ${r["neutral-400"]};
          }
          &:hover:enabled {
            background-color: ${r["neutral-50"]};
            border: 1px solid ${r["neutral-400"]};
            color: ${r["neutral-800"]};
          }
          &:active:enabled {
            border: 1px solid ${r["neutral-300"]};
          }
          border: 1px solid ${r["neutral-300"]};
          background-color: white;
          color: ${r["neutral-700"]};
        `;case"primary":return o`
          &:disabled {
            background-color: white;
            border: 1px solid ${r["primary-200"]};
            color: ${r["neutral-400"]};
          }
          &:hover:enabled {
            background-color: ${r["primary-50"]};
            border: 1px solid ${r["primary-700"]};
            color: ${r["primary-800"]};
          }
          &:active:enabled {
            border: 1px solid ${r["primary-100"]};
          }
          border: 1px solid ${r["primary-300"]};
          background-color: white;
          color: ${r["primary-700"]};
        `;default:return o`
          &:disabled {
            background-color: white;
            border: 1px solid ${r[`${e}-200`]};
            color: ${r["neutral-400"]};
          }
          &:hover:enabled {
            background-color: ${r[`${e}-25`]};
            border: 1px solid ${r[`${e}-600`]};
            color: ${r[`${e}-600`]};
          }
          &:active:enabled {
            border: 1px solid ${r[`${e}-100`]};
          }
          border: 1px solid ${r[`${e}-300`]};
          background-color: white;
          color: ${r[`${e}-400`]};
        `}else return e!="primary"?o`
        &:disabled {
          background-color: ${r["neutral-100"]};
          border: 1px solid ${r["neutral-200"]};
          color: ${r["neutral-400"]};
        }
        &:hover:enabled {
          background-color: ${r[`${e}-500`]};
          border: 1px solid ${r[`${e}-500`]};
        }
        &:active:enabled {
          border: 1px solid ${r[`${e}-100`]};
        }
        border: 1px solid ${r[`${e}-400`]};
        background-color: ${r[`${e}-400`]};
        color: white;
      `:o`
      &:disabled {
        background-color: ${r["neutral-100"]};
        border: 1px solid ${r["neutral-200"]};
        color: ${r["neutral-400"]};
      }
      &:hover:enabled {
        background-color: ${r["primary-800"]};
        border: 1px solid ${r["primary-800"]};
      }
      &:active:enabled {
        border: 1px solid ${r["primary-100"]};
      }
      border: 1px solid ${r["primary-700"]};
      background-color: ${r["primary-700"]};
      color: white;
    `},E=e=>{switch(e){case"sm":return o`
        min-height: 22px;
        padding: 8px 12px 8px 12px;
        height: 36px;
        font-size: 14px;
      `;case"md":return o`
        min-height: 30px;
        padding: 10px 14px 10px 14px;
        height: 40px;
        font-size: 16px;
      `;case"xl":return o`
        min-height: 44px;
        padding: 12px 18px 12px 18px;
        height: 48px;
        font-size: 16px;
      `;case"xxl":return o`
        min-height: 56px;
        padding: 16px 22px 16px 22px;
        height: 60px;
        font-size: 18px;
      `;case"lg":default:return o`
        min-height: 36px;
        padding: 10px 16px 10px 16px;
        height: 44px;
        font-size: 16px;
      `}},I=e=>{if(e)return o`
      @media screen and (max-width: 767px) {
        width: 100%;
      }
    `},P=$.button`
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align-center;
  transition: all .25s ease;
  user-select: none;
  line-height: 1.5;
  box-shadow: none;
  &:hover:enabled{
    top: -1px;
  }
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  border-radius: ${e=>e.$borderRadius??"8px"} !important;
  font-weight: ${e=>e.$fontWeight??"600"};
  ${e=>W(e.$color??"primary",e.$outline??!1)}
  ${e=>E(e.$size??"md")}
  ${e=>I(e.$fullwidthMobile??!1)}
`,d=g.forwardRef((e,a)=>i.jsxs(P,{$size:e.size,$color:e.color,$borderRadius:e.borderRadius,$fontWeight:e.fontWeight,$outline:e.outline,$fullwidthMobile:e.fullwidthMobile,onClick:e.onClick,disabled:e.disabled||e.loading,className:e.className,style:e.style,ref:a,children:[e.children,e.loading&&i.jsx(j,{sx:{display:"flex",marginLeft:"6px"},children:i.jsx(B,{size:16.67,color:"inherit"})})]}));d.displayName="Button";d.__docgenInfo={description:`@param {sizes} props.size The button size, this will modify values such as the overall padding and min-height
@param {colors} props.color The button color, this will modify the background color, text color, hover effects, etc.
@param {string} props.borderRadius Modifies the border radius of the button, provide values in the following formats: 12px, 25%, etc.
@param {fontWeights} props.fontWeight Modifies the font weight of the text inside the button, values such as 400, 500, 600
@param {boolean} props.outline Changes the styling of the button to be outlined or filled
@param {boolean} props.fullwidthMobile On mobile the button will take the full width of the screen
@returns {JSX}`,methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'warning' | 'neutral' | 'error' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},fontWeight:{required:!1,tsType:{name:"union",raw:"400 | 500 | 600",elements:[{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"}]},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},fullwidthMobile:{required:!1,tsType:{name:"boolean"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""}}};export{d as B};
