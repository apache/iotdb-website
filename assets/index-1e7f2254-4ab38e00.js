import{G as F,l as j}from"./layout-010172d8.js";import{au as m,aC as G,ax as D}from"./app-6f9cebab.js";import{i as A,u as H,s as M,a as V,b as q,p as B,c as U,d as W,e as _,f as z,g as O,h as X}from"./edges-66ea8538-ffcbf27e.js";import{l as n,q as N,c as E,h as T}from"./mermaid.core-a9ef602d.js";import{c as K}from"./createText-a49d2d2a-eca106b4.js";function y(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:Q(e),edges:Y(e)};return m(e.graph())||(t.value=G(e.graph())),t}function Q(e){return D(e.nodes(),function(t){var i=e.node(t),r=e.parent(t),s={v:t};return m(i)||(s.value=i),m(r)||(s.parent=r),s})}function Y(e){return D(e.edges(),function(t){var i=e.edge(t),r={v:t.v,w:t.w};return m(t.name)||(r.name=t.name),m(i)||(r.value=i),r})}let f={},x={},J={};const Z=()=>{x={},J={},f={}},S=(e,t)=>(n.trace("In isDecendant",t," ",e," = ",x[t].includes(e)),!!x[t].includes(e)),I=(e,t)=>(n.info("Decendants of ",t," is ",x[t]),n.info("Edge is ",e),e.v===t||e.w===t?!1:x[t]?x[t].includes(e.v)||S(e.v,t)||S(e.w,t)||x[t].includes(e.w):(n.debug("Tilt, ",t,",not in decendants"),!1)),p=(e,t,i,r)=>{n.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const s=t.children(e)||[];e!==r&&s.push(e),n.warn("Copying (nodes) clusterId",e,"nodes",s),s.forEach(a=>{if(t.children(a).length>0)p(a,t,i,r);else{const h=t.node(a);n.info("cp ",a," to ",r," with parent ",e),i.setNode(a,h),r!==t.parent(a)&&(n.warn("Setting parent",a,t.parent(a)),i.setParent(a,t.parent(a))),e!==r&&a!==e?(n.debug("Setting parent",a,e),i.setParent(a,e)):(n.info("In copy ",e,"root",r,"data",t.node(e),r),n.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));const l=t.edges(a);n.debug("Copying Edges",l),l.forEach(d=>{n.info("Edge",d);const w=t.edge(d.v,d.w,d.name);n.info("Edge data",w,r);try{I(d,r)?(n.info("Copying as ",d.v,d.w,w,d.name),i.setEdge(d.v,d.w,w,d.name),n.info("newGraph edges ",i.edges(),i.edge(i.edges()[0]))):n.info("Skipping copy of edge ",d.v,"-->",d.w," rootId: ",r," clusterId:",e)}catch(g){n.error(g)}})}n.debug("Removing node",a),t.removeNode(a)})},L=(e,t)=>{const i=t.children(e);let r=[...i];for(const s of i)J[s]=e,r=[...r,...L(s,t)];return r},v=(e,t)=>{n.trace("Searching",e);const i=t.children(e);if(n.trace("Searching children of id ",e,i),i.length<1)return n.trace("This is a valid node",e),e;for(const r of i){const s=v(r,t);if(s)return n.trace("Found replacement for",e," => ",s),s}},b=e=>!f[e]||!f[e].externalConnections?e:f[e]?f[e].id:e,tt=(e,t)=>{if(!e||t>10){n.debug("Opting out, no graph ");return}else n.debug("Opting in, graph ");e.nodes().forEach(function(i){e.children(i).length>0&&(n.warn("Cluster identified",i," Replacement id in edges: ",v(i,e)),x[i]=L(i,e),f[i]={id:v(i,e),clusterData:e.node(i)})}),e.nodes().forEach(function(i){const r=e.children(i),s=e.edges();r.length>0?(n.debug("Cluster identified",i,x),s.forEach(a=>{if(a.v!==i&&a.w!==i){const h=S(a.v,i),l=S(a.w,i);h^l&&(n.warn("Edge: ",a," leaves cluster ",i),n.warn("Decendants of XXX ",i,": ",x[i]),f[i].externalConnections=!0)}})):n.debug("Not a cluster ",i,x)}),e.edges().forEach(function(i){const r=e.edge(i);n.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(i)),n.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(e.edge(i)));let s=i.v,a=i.w;if(n.warn("Fix XXX",f,"ids:",i.v,i.w,"Translating: ",f[i.v]," --- ",f[i.w]),f[i.v]&&f[i.w]&&f[i.v]===f[i.w]){n.warn("Fixing and trixing link to self - removing XXX",i.v,i.w,i.name),n.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),s=b(i.v),a=b(i.w),e.removeEdge(i.v,i.w,i.name);const h=i.w+"---"+i.v;e.setNode(h,{domId:h,id:h,labelStyle:"",labelText:r.label,padding:0,shape:"labelRect",style:""});const l=JSON.parse(JSON.stringify(r)),d=JSON.parse(JSON.stringify(r));l.label="",l.arrowTypeEnd="none",d.label="",l.fromCluster=i.v,d.toCluster=i.v,e.setEdge(s,h,l,i.name+"-cyclic-special"),e.setEdge(h,a,d,i.name+"-cyclic-special")}else(f[i.v]||f[i.w])&&(n.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),s=b(i.v),a=b(i.w),e.removeEdge(i.v,i.w,i.name),s!==i.v&&(r.fromCluster=i.v),a!==i.w&&(r.toCluster=i.w),n.warn("Fix Replacing with XXX",s,a,i.name),e.setEdge(s,a,r,i.name))}),n.warn("Adjusted Graph",y(e)),R(e,0),n.trace(f)},R=(e,t)=>{if(n.warn("extractor - ",t,y(e),e.children("D")),t>10){n.error("Bailing out");return}let i=e.nodes(),r=!1;for(const s of i){const a=e.children(s);r=r||a.length>0}if(!r){n.debug("Done, no node has children",e.nodes());return}n.debug("Nodes = ",i,t);for(const s of i)if(n.debug("Extracting node",s,f,f[s]&&!f[s].externalConnections,!e.parent(s),e.node(s),e.children("D")," Depth ",t),!f[s])n.debug("Not a cluster",s,t);else if(!f[s].externalConnections&&e.children(s)&&e.children(s).length>0){n.warn("Cluster without external connections, without a parent and with children",s,t);let h=e.graph().rankdir==="TB"?"LR":"TB";f[s]&&f[s].clusterData&&f[s].clusterData.dir&&(h=f[s].clusterData.dir,n.warn("Fixing dir",f[s].clusterData.dir,h));const l=new F({multigraph:!0,compound:!0}).setGraph({rankdir:h,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});n.warn("Old graph before copy",y(e)),p(s,e,l,s),e.setNode(s,{clusterNode:!0,id:s,clusterData:f[s].clusterData,labelText:f[s].labelText,graph:l}),n.warn("New graph after copy node: (",s,")",y(l)),n.debug("Old graph after copy",y(e))}else n.warn("Cluster ** ",s," **not meeting the criteria !externalConnections:",!f[s].externalConnections," no parent: ",!e.parent(s)," children ",e.children(s)&&e.children(s).length>0,e.children("D"),t),n.debug(f);i=e.nodes(),n.warn("New list of nodes",i);for(const s of i){const a=e.node(s);n.warn(" Now next level",s,a),a.clusterNode&&R(a.graph,t+1)}},P=(e,t)=>{if(t.length===0)return[];let i=Object.assign(t);return t.forEach(r=>{const s=e.children(r),a=P(e,s);i=[...i,...a]}),i},et=e=>P(e,e.children()),it=(e,t)=>{n.info("Creating subgraph rect for ",t.id,t);const i=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=i.insert("rect",":first-child"),s=N(E().flowchart.htmlLabels),a=i.insert("g").attr("class","cluster-label"),h=t.labelType==="markdown"?K(a,t.labelText,{style:t.labelStyle,useHtmlLabels:s}):a.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let l=h.getBBox();if(N(E().flowchart.htmlLabels)){const o=h.children[0],u=T(h);l=o.getBoundingClientRect(),u.attr("width",l.width),u.attr("height",l.height)}const d=0*t.padding,w=d/2,g=t.width<=l.width+d?l.width+d:t.width;t.width<=l.width+d?t.diff=(l.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,n.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-g/2).attr("y",t.y-t.height/2-w).attr("width",g).attr("height",t.height+d),s?a.attr("transform","translate("+(t.x-l.width/2)+", "+(t.y-t.height/2)+")"):a.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const c=r.node().getBBox();return t.width=c.width,t.height=c.height,t.intersect=function(o){return X(t,o)},i},nt=(e,t)=>{const i=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=i.insert("rect",":first-child"),s=0*t.padding,a=s/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");const h=r.node().getBBox();return t.width=h.width,t.height=h.height,t.intersect=function(l){return X(t,l)},i},st=(e,t)=>{const i=e.insert("g").attr("class",t.classes).attr("id",t.id),r=i.insert("rect",":first-child"),s=i.insert("g").attr("class","cluster-label"),a=i.append("rect"),h=s.node().appendChild(O(t.labelText,t.labelStyle,void 0,!0));let l=h.getBBox();if(N(E().flowchart.htmlLabels)){const o=h.children[0],u=T(h);l=o.getBoundingClientRect(),u.attr("width",l.width),u.attr("height",l.height)}l=h.getBBox();const d=0*t.padding,w=d/2,g=t.width<=l.width+t.padding?l.width+t.padding:t.width;t.width<=l.width+t.padding?t.diff=(l.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-g/2-w).attr("y",t.y-t.height/2-w).attr("width",g+d).attr("height",t.height+d),a.attr("class","inner").attr("x",t.x-g/2-w).attr("y",t.y-t.height/2-w+l.height-1).attr("width",g+d).attr("height",t.height+d-l.height-3),s.attr("transform","translate("+(t.x-l.width/2)+", "+(t.y-t.height/2-t.padding/3+(N(E().flowchart.htmlLabels)?5:3))+")");const c=r.node().getBBox();return t.height=c.height,t.intersect=function(o){return X(t,o)},i},rt=(e,t)=>{const i=e.insert("g").attr("class",t.classes).attr("id",t.id),r=i.insert("rect",":first-child"),s=0*t.padding,a=s/2;r.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);const h=r.node().getBBox();return t.width=h.width,t.height=h.height,t.diff=-t.padding/2,t.intersect=function(l){return X(t,l)},i},at={rect:it,roundedWithTitle:st,noteGroup:nt,divider:rt};let $={};const ct=(e,t)=>{n.trace("Inserting cluster");const i=t.shape||"rect";$[t.id]=at[i](e,t)},ot=()=>{$={}},k=async(e,t,i,r)=>{n.info("Graph in recursive render: XXX",y(t),r);const s=t.graph().rankdir;n.trace("Dir in recursive render - dir:",s);const a=e.insert("g").attr("class","root");t.nodes()?n.info("Recursive render XXX",t.nodes()):n.info("No nodes found for",t),t.edges().length>0&&n.trace("Recursive edges",t.edge(t.edges()[0]));const h=a.insert("g").attr("class","clusters"),l=a.insert("g").attr("class","edgePaths"),d=a.insert("g").attr("class","edgeLabels"),w=a.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(c){const o=t.node(c);if(r!==void 0){const u=JSON.parse(JSON.stringify(r.clusterData));n.info("Setting data for cluster XXX (",c,") ",u,r),t.setNode(r.id,u),t.parent(c)||(n.trace("Setting parent",c,r.id),t.setParent(c,r.id,u))}if(n.info("(Insert) Node XXX"+c+": "+JSON.stringify(t.node(c))),o&&o.clusterNode){n.info("Cluster identified",c,o.width,t.node(c));const u=await k(w,o.graph,i,t.node(c)),C=u.elem;H(o,C),o.diff=u.diff||0,n.info("Node bounds (abc123)",c,o,o.width,o.x,o.y),M(C,o),n.warn("Recursive render complete ",C,o)}else t.children(c).length>0?(n.info("Cluster - the non recursive path XXX",c,o.id,o,t),n.info(v(o.id,t)),f[o.id]={id:v(o.id,t),node:o}):(n.info("Node - the non recursive path",c,o.id,o),await V(w,t.node(c),s))})),t.edges().forEach(function(c){const o=t.edge(c.v,c.w,c.name);n.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c)),n.info("Edge "+c.v+" -> "+c.w+": ",c," ",JSON.stringify(t.edge(c))),n.info("Fix",f,"ids:",c.v,c.w,"Translateing: ",f[c.v],f[c.w]),q(d,o)}),t.edges().forEach(function(c){n.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c))}),n.info("#############################################"),n.info("###                Layout                 ###"),n.info("#############################################"),n.info(t),j(t),n.info("Graph after layout:",y(t));let g=0;return et(t).forEach(function(c){const o=t.node(c);n.info("Position "+c+": "+JSON.stringify(t.node(c))),n.info("Position "+c+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o&&o.clusterNode?B(o):t.children(c).length>0?(ct(h,o),f[o.id].node=o):B(o)}),t.edges().forEach(function(c){const o=t.edge(c);n.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(o),o);const u=U(l,c,o,f,i,t);W(o,u)}),t.nodes().forEach(function(c){const o=t.node(c);n.info(c,o.type,o.diff),o.type==="group"&&(g=o.diff)}),{elem:a,diff:g}},wt=async(e,t,i,r,s)=>{A(e,i,r,s),_(),z(),ot(),Z(),n.warn("Graph at first:",y(t)),tt(t),n.warn("Graph after:",y(t)),await k(e,t,r)};export{wt as r};
