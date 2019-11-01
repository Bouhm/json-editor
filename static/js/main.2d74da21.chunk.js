(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{24:function(e,t,n){e.exports=n(34)},31:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(38),i=n(39),s=n(16);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={data:void 0,filename:""},m=r.a.createContext(p),b=function(e,t){switch(t.type){case"SET_NAME":return d({},e,{filename:t.payload});case"CHANGE_DATA":return d({},e,{data:t.payload});default:return e}},f=n(3),y=n(21),g=function(e){var t=e.onDrop,n=e.accept,a=e.errors,o=e.isLoading,c=Object(y.a)({onDrop:t,accept:n}),l=c.getRootProps,i=c.getInputProps,s=(c.isDragActive,{container:{border:"5px dashed gray",height:"100%",width:"100%",display:"flex",flexFlow:"column",justifyContent:"center",textAlign:"center"},dropzone:{cursor:"pointer"}});return r.a.createElement("div",Object.assign({style:s.container},l()),r.a.createElement("div",{style:s.dropzone,className:"dropzone-content"},r.a.createElement("input",Object.assign({className:"dropzone-input"},i())),"Drag-and-Drop a json file here or click to select file",r.a.createElement("div",{style:{padding:"3em"}},r.a.createElement("i",{className:"huge upload icon"})),a?r.a.createElement("div",{style:{color:"red",maxWidth:"50%",margin:"0 auto"}},a):r.a.createElement(r.a.Fragment,null,o&&r.a.createElement("span",null,"Importing file..."))))},h=n(22),v=n(40),O=function(e){var t="#ce824a";switch(function(e){return"true"===e||"false"===e||"boolean"===typeof e?"boolean":isNaN(e)&&"number"!==typeof e?"string":"number"}(e)){case"string":break;case"number":t="#b5cea8";break;case"boolean":t="#358cd6"}return t},j=function(e,t){var n=Object(a.useState)(e),r=Object(f.a)(n,2),o=r[0],c=r[1],l=Object(a.useState)(O(o)),i=Object(f.a)(l,2),s=i[0],u=i[1],d=Object(a.useContext)(m),p=Object(f.a)(d,2),b=p[0],y=p[1];return{inputVal:o,handleInputChange:function(e){c(e.currentTarget.value)},handleInputBlur:function(){u(O(o));for(var e,n=b.data,a=n,r=0;r<t.length-1;r++)a=a[t[r]];a[t[t.length-1]]=(e=o,isNaN(e)?"true"===e||"false"!==e&&e:parseFloat(e)),y({type:"SET_DATA",payload:n})},inputColor:s}},E=function(e){var t=e.name,n=e.value,a=e.isArrayItem,o=e.parentKeys,c=j(n,o),l=c.inputVal,i=c.inputColor,s=c.handleInputChange,u=c.handleInputBlur,d={field:{display:"flex",height:"1.5em",lineHeight:"1.5em"},label:{display:"inline-block",color:"".concat(a?"#c586c0":"#9cdcfe"),overflow:"hidden",textOverflow:"ellipsis"},input:{paddingLeft:"0.3em",backgroundColor:"#333333",color:"".concat(i),border:"1px solid #202020",borderRadius:"3px",outline:"none"}};return r.a.createElement(v.a,{style:d.field},r.a.createElement("span",{title:t,style:d.label},"".concat(t,": ")),r.a.createElement("input",{style:d.input,type:"text",onChange:s,onBlur:u,value:l,name:t}))},x=function e(t){var n=t.field,o=t.name,c=t.parentKeys,l=t.isArrayItem,i=t.isLastItem,s=t.showBorder,u=void 0===s||s,d=Object(a.useState)(!1),p=Object(f.a)(d,2),m=p[0],b=p[1],y=function(){b(!m)},g={fieldBlock:{paddingLeft:"1.25em",borderLeft:"".concat(u?"1px solid #454545":"none"),":hover":{backgroundColor:"rgba(100,100,100,0.05)"}},blockLabel:{":hover":{cursor:"pointer"},height:"1.5em",lineHeight:"1.5em",color:"#9cdcfe"},blockIndex:{":hover":{cursor:"pointer"},color:"#c586c0"},brackets:{color:"white"}},O=Object.keys(n);return r.a.createElement(v.a,{style:g.fieldBlock},"object"===typeof n?r.a.createElement((function(e){var t=Array.isArray(e.field)?["[","]"]:["{","}"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:l?g.blockIndex:g.blockLabel},r.a.createElement("div",{onClick:y},o,r.a.createElement("span",{style:g.brackets},": ",t[0]),m&&r.a.createElement("span",{style:g.brackets},"\u2026",t[1]+(i?"":",")))),e.children,!m&&r.a.createElement("span",{style:g.brackets},t[1]+(i?"":",")))}),{field:n},!m&&O.map((function(t,a){return r.a.createElement(e,{key:a,name:t,parentKeys:[].concat(Object(h.a)(c),[t]),parentLength:O.length,isArrayItem:Array.isArray(n),isLastItem:O.length-1===a,field:n[t]})}))):r.a.createElement(E,{name:o,value:n,isArrayItem:l,parentKeys:c}))},w=function(){var e=Object(a.useContext)(m),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(f.a)(c,2),i=l[0],s=l[1],u=Object(a.useState)(""),d=Object(f.a)(u,2),p=d[0],b=d[1],y=Object(a.useCallback)((function(e){b(""),s(!0),e.map((function(e){var t=new FileReader;t.onload=function(e){return function(t){try{var n=JSON.parse(t.target.result);o({type:"SET_NAME",payload:e.name}),o({type:"CHANGE_DATA",payload:n}),s(!1)}catch(a){console.error(a),b(a.toString())}}}(e),t.readAsText(e)}))}),[]);return r.a.createElement("div",{style:{padding:"1em",width:"70%",minWidth:"30em",flex:"1 1 auto",overflow:"auto",backgroundColor:"#1e1e1e",boxShadow:"inset 0 0 5px #101010",borderRadius:"5px",fontSize:"16px",scrollbarColor:"#2e2e2e #1e1e1e"}},n.data?Object.keys(n.data).map((function(e,t){var a=n.data[e];return r.a.createElement(x,{key:t,name:e,parentKeys:[e],parentLength:Object.keys(n.data).length,isArrayItem:!1,isLastItem:Object.keys(n.data).length-1===t,showBorder:!1,field:a})})):r.a.createElement(g,{isLoading:i,errors:p,onDrop:y,accept:"application/json"}))},k=function(){var e=Object(a.useContext)(m),t=Object(f.a)(e,2),n=t[0],o=(t[1],n.data),c=n.filename,l={toolbar:{width:"100%",flex:"0 1 50px",display:"flex",justifyContent:"center"},button:{fontFamily:"sans-serif",fontSize:"16px",lineHeight:"2.5em",cursor:"pointer","text-align":"center",width:"12em",margin:"0.5em 0.5em 0.5em 0",backgroundColor:"#444",border:"3px solid #222",borderRadius:"7px",":hover":{backgroundColor:"#555"}}};return r.a.createElement("div",{style:l.toolbar},r.a.createElement((function(e){var t=e.text,a=e.icon,o=e.onClick;return r.a.createElement("div",{onClick:function(){return o(n.data)}},r.a.createElement(v.a,{style:l.button},r.a.createElement("i",{className:"".concat(a," icon")}),t))}),{onClick:function(){return function(e,t){var n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(n,t);else{var a=document.createElement("a"),r=URL.createObjectURL(n);a.href=r,a.download=t,document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(r)}),0)}}(o,c)},icon:"download",text:"Export JSON"}))},C=function(){var e=Object(a.useContext)(m),t=Object(f.a)(e,2),n=t[0];t[1];return r.a.createElement("div",{style:{fontFamily:"Consolas,monaco,monospace",display:"flex",flexFlow:"column",padding:"0.5em",width:"100vw",height:"100vh",alignItems:"center",color:"white"}},r.a.createElement(w,null),n.data&&r.a.createElement(k,null))},A=(n(31),Object(i.a)());c.a.render(r.a.createElement(l.a,{renderer:A},r.a.createElement((function(e){var t=Object(a.useReducer)(b,p);return r.a.createElement(m.Provider,{value:t},e.children)}),null,r.a.createElement(C,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2d74da21.chunk.js.map