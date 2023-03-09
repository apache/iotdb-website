import{A as G}from"./layout-d6d8be39-86cd7aba.js";import{I as E,_ as P,t as T,d as N,e as h,T as $,f as C,n as _,j as q,g as M}from"./mermaid.esm.min-f092fc2a.js";import{d as O,e as V}from"./add-html-label-6e56ed67-7326bfd4.js";import{h as F}from"./index-e6caf2ad-0e4562ea.js";import{a as R}from"./selectAll-8155f162-85d15360.js";const D={},U=function(t){const s=Object.keys(t);for(const v of s)D[v]=t[v]},I=function(t,s,v,i,n,d){const p=i.select(`[id="${v}"]`);Object.keys(t).forEach(function(l){const r=t[l];let u="default";r.classes.length>0&&(u=r.classes.join(" "));const f=E(r.styles);let g=r.text!==void 0?r.text:r.id,e;if(P(T().flowchart.htmlLabels)){const b={label:g.replace(/fa[blrs]?:fa-[\w-]+/g,S=>`<i class='${S.replace(":"," ")}'></i>`)};e=O(p,b).node(),e.parentNode.removeChild(e)}else{const b=n.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("style",f.labelStyle.replace("color:","fill:"));const S=g.split(N.lineBreakRegex);for(const x of S){const k=n.createElementNS("http://www.w3.org/2000/svg","tspan");k.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),k.setAttribute("dy","1em"),k.setAttribute("x","1"),k.textContent=x,b.appendChild(k)}e=b}let a=0,o="";switch(r.type){case"round":a=5,o="rect";break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"odd_right":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}s.setNode(r.id,{labelStyle:f.labelStyle,shape:o,labelText:g,rx:a,ry:a,class:u,style:f.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:d.db.getTooltip(r.id)||"",domId:d.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:T().flowchart.padding}),h.info("setNode",{labelStyle:f.labelStyle,shape:o,labelText:g,rx:a,ry:a,class:u,style:f.style,id:r.id,domId:d.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:T().flowchart.padding})})},z=function(t,s,v){h.info("abc78 edges = ",t);let i=0,n={},d,p;if(t.defaultStyle!==void 0){const l=E(t.defaultStyle);d=l.style,p=l.labelStyle}t.forEach(function(l){i++;var r="L-"+l.start+"-"+l.end;n[r]===void 0?(n[r]=0,h.info("abc78 new entry",r,n[r])):(n[r]++,h.info("abc78 new entry",r,n[r]));let u=r+"-"+n[r];h.info("abc78 new link id to be used is",r,u,n[r]);var f="LS-"+l.start,g="LE-"+l.end;const e={style:"",labelStyle:""};switch(e.minlen=l.length||1,l.type==="arrow_open"?e.arrowhead="none":e.arrowhead="normal",e.arrowTypeStart="arrow_open",e.arrowTypeEnd="arrow_open",l.type){case"double_arrow_cross":e.arrowTypeStart="arrow_cross";case"arrow_cross":e.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":e.arrowTypeStart="arrow_point";case"arrow_point":e.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":e.arrowTypeStart="arrow_circle";case"arrow_circle":e.arrowTypeEnd="arrow_circle";break}let a="",o="";switch(l.stroke){case"normal":a="fill:none;",d!==void 0&&(a=d),p!==void 0&&(o=p),e.thickness="normal",e.pattern="solid";break;case"dotted":e.thickness="normal",e.pattern="dotted",e.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":e.thickness="thick",e.pattern="solid",e.style="stroke-width: 3.5px;fill:none;";break;case"invisible":e.thickness="invisible",e.pattern="solid",e.style="stroke-width: 0;fill:none;";break}if(l.style!==void 0){const b=E(l.style);a=b.style,o=b.labelStyle}e.style=e.style+=a,e.labelStyle=e.labelStyle+=o,l.interpolate!==void 0?e.curve=$(l.interpolate,C):t.defaultInterpolate!==void 0?e.curve=$(t.defaultInterpolate,C):e.curve=$(D.curve,C),l.text===void 0?l.style!==void 0&&(e.arrowheadStyle="fill: #333"):(e.arrowheadStyle="fill: #333",e.labelpos="c"),e.labelType="text",e.label=l.text.replace(N.lineBreakRegex,`
`),l.style===void 0&&(e.style=e.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),e.labelStyle=e.labelStyle.replace("color:","fill:"),e.id=u,e.classes="flowchart-link "+f+" "+g,s.setEdge(l.start,l.end,e,i)})},W=function(t,s){h.info("Extracting classes"),s.db.clear();try{return s.parse(t),s.db.getClasses()}catch{return}},X=function(t,s,v,i){h.info("Drawing flowchart"),i.db.clear(),V.setGen("gen-2"),i.parser.parse(t);let n=i.db.getDirection();n===void 0&&(n="TD");const{securityLevel:d,flowchart:p}=T(),l=p.nodeSpacing||50,r=p.rankSpacing||50;let u;d==="sandbox"&&(u=_("#i"+s));const f=d==="sandbox"?_(u.nodes()[0].contentDocument.body):_("body"),g=d==="sandbox"?u.nodes()[0].contentDocument:document,e=new G({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:l,ranksep:r,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let a;const o=i.db.getSubGraphs();h.info("Subgraphs - ",o);for(let c=o.length-1;c>=0;c--)a=o[c],h.info("Subgraph - ",a),i.db.addVertex(a.id,a.title,"group",void 0,a.classes,a.dir);const b=i.db.getVertices(),S=i.db.getEdges();h.info("Edges",S);let x=0;for(x=o.length-1;x>=0;x--){a=o[x],R("cluster").append("text");for(let c=0;c<a.nodes.length;c++)h.info("Setting up subgraphs",a.nodes[c],a.id),e.setParent(a.nodes[c],a.id)}I(b,e,s,f,g,i),z(S,e);const k=f.select(`[id="${s}"]`),j=f.select("#"+s+" g");if(F(j,e,["point","circle","cross"],"flowchart",s),q.insertTitle(k,"flowchartTitleText",p.titleTopMargin,i.db.getDiagramTitle()),M(e,k,p.diagramPadding,p.useMaxWidth),i.db.indexNodes("subGraph"+x),!p.htmlLabels){const c=g.querySelectorAll('[id="'+s+'"] .edgeLabel .label');for(const y of c){const m=y.getBBox(),w=g.createElementNS("http://www.w3.org/2000/svg","rect");w.setAttribute("rx",0),w.setAttribute("ry",0),w.setAttribute("width",m.width),w.setAttribute("height",m.height),y.insertBefore(w,y.firstChild)}}Object.keys(b).forEach(function(c){const y=b[c];if(y.link){const m=_("#"+s+' [id="'+c+'"]');if(m){const w=g.createElementNS("http://www.w3.org/2000/svg","a");w.setAttributeNS("http://www.w3.org/2000/svg","class",y.classes.join(" ")),w.setAttributeNS("http://www.w3.org/2000/svg","href",y.link),w.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),d==="sandbox"?w.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):y.linkTarget&&w.setAttributeNS("http://www.w3.org/2000/svg","target",y.linkTarget);const A=m.insert(function(){return w},":first-child"),B=m.select(".label-container");B&&A.append(function(){return B.node()});const L=m.select(".label");L&&A.append(function(){return L.node()})}}})},ee={setConf:U,addVertices:I,addEdges:z,getClasses:W,draw:X},J=t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span {
    color: ${t.titleColor};
  }

  .label text,span {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,te=J;export{te as a,ee as l};