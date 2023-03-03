import{t as L,_ as R,n as S,e as x,j as X,a1 as A,a2 as G,E as et}from"./mermaid.esm.min-b8b46ef2.js";import{T as Z}from"./svgDraw-c034b55e-8f0b6569.js";import{z as rt}from"./isPlainObject-a5cb4071-0c88bba7.js";const at=(r,t,e,s)=>{t.forEach(a=>{gt[a](r,e,s)})},nt=(r,t,e)=>{x.trace("Making markers for ",e),r.append("defs").append("marker").attr("id",t+"-extensionStart").attr("class","marker extension "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),r.append("defs").append("marker").attr("id",t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},it=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-compositionStart").attr("class","marker composition "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},st=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},lt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},ot=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},dt=(r,t)=>{r.append("marker").attr("id",t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 12 20").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},ct=(r,t)=>{r.append("marker").attr("id",t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},ht=(r,t)=>{r.append("marker").attr("id",t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},pt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},gt={extension:nt,composition:it,aggregation:st,dependency:lt,lollipop:ot,point:dt,circle:ct,cross:ht,barb:pt},Qt=at;function yt(r,t){t&&r.attr("style",t)}function ft(r){const t=S(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),e=t.append("xhtml:div"),s=r.label,a=r.isNode?"nodeLabel":"edgeLabel";return e.html('<span class="'+a+'" '+(r.labelStyle?'style="'+r.labelStyle+'"':"")+">"+s+"</span>"),yt(e,r.labelStyle),e.style("display","inline-block"),e.style("white-space","nowrap"),e.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}const xt=(r,t,e,s)=>{let a=r||"";if(typeof a=="object"&&(a=a[0]),R(L().flowchart.htmlLabels)){a=a.replace(/\\n|\n/g,"<br />"),x.info("vertexText"+a);const n={isNode:s,label:G(a).replace(/fa[blrs]?:fa-[\w-]+/g,i=>`<i class='${i.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return ft(n)}else{const n=document.createElementNS("http://www.w3.org/2000/svg","text");n.setAttribute("style",t.replace("color:","fill:"));let i=[];typeof a=="string"?i=a.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(a)?i=a:i=[];for(const l of i){const o=document.createElementNS("http://www.w3.org/2000/svg","tspan");o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),o.setAttribute("dy","1em"),o.setAttribute("x","0"),e?o.setAttribute("class","title-row"):o.setAttribute("class","row"),o.textContent=l.trim(),n.appendChild(o)}return n}},T=xt,v=(r,t,e,s)=>{let a;e?a=e:a="node default";const n=r.insert("g").attr("class",a).attr("id",t.domId||t.id),i=n.insert("g").attr("class","label").attr("style",t.labelStyle);let l;t.labelText===void 0?l="":l=typeof t.labelText=="string"?t.labelText:t.labelText[0];const o=i.node().appendChild(T(et(G(l),L()),t.labelStyle,!1,s));let c=o.getBBox();if(R(L().flowchart.htmlLabels)){const p=o.children[0],y=S(o);c=p.getBoundingClientRect(),y.attr("width",c.width),y.attr("height",c.height)}const d=t.padding/2;return i.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),{shapeSvg:n,bbox:c,halfPadding:d,label:i}},w=(r,t)=>{const e=t.node().getBBox();r.width=e.width,r.height=e.height};function I(r,t,e,s){return r.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+e/2+")")}function bt(r,t){return r.intersect(t)}function J(r,t,e,s){var a=r.x,n=r.y,i=a-s.x,l=n-s.y,o=Math.sqrt(t*t*l*l+e*e*i*i),c=Math.abs(t*e*i/o);s.x<a&&(c=-c);var d=Math.abs(t*e*l/o);return s.y<n&&(d=-d),{x:a+c,y:n+d}}function ut(r,t,e){return J(r,t,t,e)}function wt(r,t,e,s){var a,n,i,l,o,c,d,p,y,h,g,f,b,m,_;if(a=t.y-r.y,i=r.x-t.x,o=t.x*r.y-r.x*t.y,y=a*e.x+i*e.y+o,h=a*s.x+i*s.y+o,!(y!==0&&h!==0&&q(y,h))&&(n=s.y-e.y,l=e.x-s.x,c=s.x*e.y-e.x*s.y,d=n*r.x+l*r.y+c,p=n*t.x+l*t.y+c,!(d!==0&&p!==0&&q(d,p))&&(g=a*l-n*i,g!==0)))return f=Math.abs(g/2),b=i*c-l*o,m=b<0?(b-f)/g:(b+f)/g,b=n*o-a*c,_=b<0?(b-f)/g:(b+f)/g,{x:m,y:_}}function q(r,t){return r*t>0}function mt(r,t,e){var s=r.x,a=r.y,n=[],i=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(g){i=Math.min(i,g.x),l=Math.min(l,g.y)}):(i=Math.min(i,t.x),l=Math.min(l,t.y));for(var o=s-r.width/2-i,c=a-r.height/2-l,d=0;d<t.length;d++){var p=t[d],y=t[d<t.length-1?d+1:0],h=wt(r,e,{x:o+p.x,y:c+p.y},{x:o+y.x,y:c+y.y});h&&n.push(h)}return n.length?(n.length>1&&n.sort(function(g,f){var b=g.x-e.x,m=g.y-e.y,_=Math.sqrt(b*b+m*m),$=f.x-e.x,B=f.y-e.y,N=Math.sqrt($*$+B*B);return _<N?-1:_===N?0:1}),n[0]):r}const kt=(r,t)=>{var e=r.x,s=r.y,a=t.x-e,n=t.y-s,i=r.width/2,l=r.height/2,o,c;return Math.abs(n)*i>Math.abs(a)*l?(n<0&&(l=-l),o=n===0?0:l*a/n,c=l):(a<0&&(i=-i),o=i,c=a===0?0:i*n/a),{x:e+o,y:s+c}},Lt=kt,u={node:bt,circle:ut,ellipse:J,polygon:mt,rect:Lt},St=(r,t)=>{const{shapeSvg:e,bbox:s,halfPadding:a}=v(r,t,"node "+t.classes,!0);x.info("Classes = ",t.classes);const n=e.insert("rect",":first-child");return n.attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-a).attr("y",-s.height/2-a).attr("width",s.width+t.padding).attr("height",s.height+t.padding),w(t,n),t.intersect=function(i){return u.rect(t,i)},e},vt=St,z=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=a+n,l=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];x.info("Question main (Circle)");const o=I(e,i,i,l);return o.attr("style",t.style),w(t,o),t.intersect=function(c){return x.warn("Intersect called"),u.polygon(t,l,c)},e},Mt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=28,a=[{x:0,y:s/2},{x:s/2,y:0},{x:0,y:-s/2},{x:-s/2,y:0}];return e.insert("polygon",":first-child").attr("points",a.map(function(n){return n.x+","+n.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(n){return u.circle(t,14,n)},e},Bt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=4,n=s.height+t.padding,i=n/a,l=s.width+2*i+t.padding,o=[{x:i,y:0},{x:l-i,y:0},{x:l,y:-n/2},{x:l-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],c=I(e,l,n,o);return c.attr("style",t.style),w(t,c),t.intersect=function(d){return u.polygon(t,o,d)},e},Et=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:-n/2,y:0},{x:a,y:0},{x:a,y:-n},{x:-n/2,y:-n},{x:0,y:-n/2}];return I(e,a,n,i).attr("style",t.style),t.width=a+n,t.height=n,t.intersect=function(l){return u.polygon(t,i,l)},e},Ct=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:-2*n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:n/6,y:-n}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},Tt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:2*n/6,y:0},{x:a+n/6,y:0},{x:a-2*n/6,y:-n},{x:-n/6,y:-n}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},_t=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:-2*n/6,y:0},{x:a+2*n/6,y:0},{x:a-n/6,y:-n},{x:n/6,y:-n}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},Pt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:n/6,y:0},{x:a-n/6,y:0},{x:a+2*n/6,y:-n},{x:-2*n/6,y:-n}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},Rt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:0,y:0},{x:a+n/2,y:0},{x:a,y:-n/2},{x:a+n/2,y:-n},{x:0,y:-n}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},It=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=a/2,i=n/(2.5+a/50),l=s.height+i+t.padding,o="M 0,"+i+" a "+n+","+i+" 0,0,0 "+a+" 0 a "+n+","+i+" 0,0,0 "+-a+" 0 l 0,"+l+" a "+n+","+i+" 0,0,0 "+a+" 0 l 0,"+-l,c=e.attr("label-offset-y",i).insert("path",":first-child").attr("style",t.style).attr("d",o).attr("transform","translate("+-a/2+","+-(l/2+i)+")");return w(t,c),t.intersect=function(d){const p=u.rect(t,d),y=p.x-t.x;if(n!=0&&(Math.abs(y)<t.width/2||Math.abs(y)==t.width/2&&Math.abs(p.y-t.y)>t.height/2-i)){let h=i*i*(1-y*y/(n*n));h!=0&&(h=Math.sqrt(h)),h=i-h,d.y-t.y>0&&(h=-h),p.y+=h}return p},e},$t=(r,t)=>{const{shapeSvg:e,bbox:s,halfPadding:a}=v(r,t,"node "+t.classes,!0);x.trace("Classes = ",t.classes);const n=e.insert("rect",":first-child"),i=s.width+t.padding,l=s.height+t.padding;if(n.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-a).attr("y",-s.height/2-a).attr("width",i).attr("height",l),t.props){const o=new Set(Object.keys(t.props));t.props.borders&&(K(n,t.props.borders,i,l),o.delete("borders")),o.forEach(c=>{x.warn(`Unknown node property ${c}`)})}return w(t,n),t.intersect=function(o){return u.rect(t,o)},e},Wt=(r,t)=>{const{shapeSvg:e}=v(r,t,"label",!0);x.trace("Classes = ",t.classes);const s=e.insert("rect",":first-child"),a=0,n=0;if(s.attr("width",a).attr("height",n),e.attr("class","label edgeLabel"),t.props){const i=new Set(Object.keys(t.props));t.props.borders&&(K(s,t.props.borders,a,n),i.delete("borders")),i.forEach(l=>{x.warn(`Unknown node property ${l}`)})}return w(t,s),t.intersect=function(i){return u.rect(t,i)},e};function K(r,t,e,s){const a=[],n=l=>{a.push(l,0)},i=l=>{a.push(0,l)};t.includes("t")?(x.debug("add top border"),n(e)):i(e),t.includes("r")?(x.debug("add right border"),n(s)):i(s),t.includes("b")?(x.debug("add bottom border"),n(e)):i(e),t.includes("l")?(x.debug("add left border"),n(s)):i(s),r.attr("stroke-dasharray",a.join(" "))}const Yt=(r,t)=>{let e;t.classes?e="node "+t.classes:e="node default";const s=r.insert("g").attr("class",e).attr("id",t.domId||t.id),a=s.insert("rect",":first-child"),n=s.insert("line"),i=s.insert("g").attr("class","label"),l=t.labelText.flat?t.labelText.flat():t.labelText;let o="";typeof l=="object"?o=l[0]:o=l,x.info("Label text abc79",o,l,typeof l=="object");const c=i.node().appendChild(T(o,t.labelStyle,!0,!0));let d={width:0,height:0};if(R(L().flowchart.htmlLabels)){const f=c.children[0],b=S(c);d=f.getBoundingClientRect(),b.attr("width",d.width),b.attr("height",d.height)}x.info("Text 2",l);const p=l.slice(1,l.length);let y=c.getBBox();const h=i.node().appendChild(T(p.join?p.join("<br/>"):p,t.labelStyle,!0,!0));if(R(L().flowchart.htmlLabels)){const f=h.children[0],b=S(h);d=f.getBoundingClientRect(),b.attr("width",d.width),b.attr("height",d.height)}const g=t.padding/2;return S(h).attr("transform","translate( "+(d.width>y.width?0:(y.width-d.width)/2)+", "+(y.height+g+5)+")"),S(c).attr("transform","translate( "+(d.width<y.width?0:-(y.width-d.width)/2)+", "+0+")"),d=i.node().getBBox(),i.attr("transform","translate("+-d.width/2+", "+(-d.height/2-g+3)+")"),a.attr("class","outer title-state").attr("x",-d.width/2-g).attr("y",-d.height/2-g).attr("width",d.width+t.padding).attr("height",d.height+t.padding),n.attr("class","divider").attr("x1",-d.width/2-g).attr("x2",d.width/2+g).attr("y1",-d.height/2-g+y.height+g).attr("y2",-d.height/2-g+y.height+g),w(t,a),t.intersect=function(f){return u.rect(t,f)},s},Nt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.height+t.padding,n=s.width+a/4+t.padding,i=e.insert("rect",":first-child").attr("style",t.style).attr("rx",a/2).attr("ry",a/2).attr("x",-n/2).attr("y",-a/2).attr("width",n).attr("height",a);return w(t,i),t.intersect=function(l){return u.rect(t,l)},e},Ht=(r,t)=>{const{shapeSvg:e,bbox:s,halfPadding:a}=v(r,t,void 0,!0),n=e.insert("circle",":first-child");return n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a).attr("width",s.width+t.padding).attr("height",s.height+t.padding),x.info("Circle main"),w(t,n),t.intersect=function(i){return x.info("Circle intersect",t,s.width/2+a,i),u.circle(t,s.width/2+a,i)},e},Xt=(r,t)=>{const{shapeSvg:e,bbox:s,halfPadding:a}=v(r,t,void 0,!0),n=5,i=e.insert("g",":first-child"),l=i.insert("circle"),o=i.insert("circle");return l.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a+n).attr("width",s.width+t.padding+n*2).attr("height",s.height+t.padding+n*2),o.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",s.width/2+a).attr("width",s.width+t.padding).attr("height",s.height+t.padding),x.info("DoubleCircle main"),w(t,l),t.intersect=function(c){return x.info("DoubleCircle intersect",t,s.width/2+a+n,c),u.circle(t,s.width/2+a+n,c)},e},jt=(r,t)=>{const{shapeSvg:e,bbox:s}=v(r,t,void 0,!0),a=s.width+t.padding,n=s.height+t.padding,i=[{x:0,y:0},{x:a,y:0},{x:a,y:-n},{x:0,y:-n},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-n},{x:-8,y:-n},{x:-8,y:0}],l=I(e,a,n,i);return l.attr("style",t.style),w(t,l),t.intersect=function(o){return u.polygon(t,i,o)},e},Ut=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=e.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(t,s),t.intersect=function(a){return u.circle(t,7,a)},e},V=(r,t,e)=>{const s=r.insert("g").attr("class","node default").attr("id",t.domId||t.id);let a=70,n=10;e==="LR"&&(a=10,n=70);const i=s.append("rect").attr("x",-1*a/2).attr("y",-1*n/2).attr("width",a).attr("height",n).attr("class","fork-join");return w(t,i),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(l){return u.rect(t,l)},s},Dt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),s=e.insert("circle",":first-child"),a=e.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),s.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(t,a),t.intersect=function(n){return u.circle(t,7,n)},e},Ot=(r,t)=>{const e=t.padding/2,s=4,a=8;let n;t.classes?n="node "+t.classes:n="node default";const i=r.insert("g").attr("class",n).attr("id",t.domId||t.id),l=i.insert("rect",":first-child"),o=i.insert("line"),c=i.insert("line");let d=0,p=s;const y=i.insert("g").attr("class","label");let h=0;const g=t.classData.annotations&&t.classData.annotations[0],f=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",b=y.node().appendChild(T(f,t.labelStyle,!0,!0));let m=b.getBBox();if(R(L().flowchart.htmlLabels)){const M=b.children[0],E=S(b);m=M.getBoundingClientRect(),E.attr("width",m.width),E.attr("height",m.height)}t.classData.annotations[0]&&(p+=m.height+s,d+=m.width);let _=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(L().flowchart.htmlLabels?_+="&lt;"+t.classData.type+"&gt;":_+="<"+t.classData.type+">");const $=y.node().appendChild(T(_,t.labelStyle,!0,!0));S($).attr("class","classTitle");let B=$.getBBox();if(R(L().flowchart.htmlLabels)){const M=$.children[0],E=S($);B=M.getBoundingClientRect(),E.attr("width",B.width),E.attr("height",B.height)}p+=B.height+s,B.width>d&&(d=B.width);const N=[];t.classData.members.forEach(M=>{const E=Z(M);let W=E.displayText;L().flowchart.htmlLabels&&(W=W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const P=y.node().appendChild(T(W,E.cssStyle?E.cssStyle:t.labelStyle,!0,!0));let C=P.getBBox();if(R(L().flowchart.htmlLabels)){const D=P.children[0],H=S(P);C=D.getBoundingClientRect(),H.attr("width",C.width),H.attr("height",C.height)}C.width>d&&(d=C.width),p+=C.height+s,N.push(P)}),p+=a;const O=[];if(t.classData.methods.forEach(M=>{const E=Z(M);let W=E.displayText;L().flowchart.htmlLabels&&(W=W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const P=y.node().appendChild(T(W,E.cssStyle?E.cssStyle:t.labelStyle,!0,!0));let C=P.getBBox();if(R(L().flowchart.htmlLabels)){const D=P.children[0],H=S(P);C=D.getBoundingClientRect(),H.attr("width",C.width),H.attr("height",C.height)}C.width>d&&(d=C.width),p+=C.height+s,O.push(P)}),p+=a,g){let M=(d-m.width)/2;S(b).attr("transform","translate( "+(-1*d/2+M)+", "+-1*p/2+")"),h=m.height+s}let tt=(d-B.width)/2;return S($).attr("transform","translate( "+(-1*d/2+tt)+", "+(-1*p/2+h)+")"),h+=B.height+s,o.attr("class","divider").attr("x1",-d/2-e).attr("x2",d/2+e).attr("y1",-p/2-e+a+h).attr("y2",-p/2-e+a+h),h+=a,N.forEach(M=>{S(M).attr("transform","translate( "+-d/2+", "+(-1*p/2+h+a/2)+")"),h+=B.height+s}),h+=a,c.attr("class","divider").attr("x1",-d/2-e).attr("x2",d/2+e).attr("y1",-p/2-e+a+h).attr("y2",-p/2-e+a+h),h+=a,O.forEach(M=>{S(M).attr("transform","translate( "+-d/2+", "+(-1*p/2+h)+")"),h+=B.height+s}),l.attr("class","outer title-state").attr("x",-d/2-e).attr("y",-(p/2)-e).attr("width",d+t.padding).attr("height",p+t.padding),w(t,l),t.intersect=function(M){return u.rect(t,M)},i},Q={rhombus:z,question:z,rect:$t,labelRect:Wt,rectWithTitle:Yt,choice:Mt,circle:Ht,doublecircle:Xt,stadium:Nt,hexagon:Bt,rect_left_inv_arrow:Et,lean_right:Ct,lean_left:Tt,trapezoid:_t,inv_trapezoid:Pt,rect_right_inv_arrow:Rt,cylinder:It,start:Ut,end:Dt,note:vt,subroutine:jt,fork:V,join:V,class_box:Ot};let Y={};const Ft=(r,t,e)=>{let s,a;if(t.link){let n;L().securityLevel==="sandbox"?n="_top":t.linkTarget&&(n=t.linkTarget||"_blank"),s=r.insert("svg:a").attr("xlink:href",t.link).attr("target",n),a=Q[t.shape](s,t,e)}else a=Q[t.shape](r,t,e),s=a;return t.tooltip&&a.attr("title",t.tooltip),t.class&&a.attr("class","node default "+t.class),Y[t.id]=s,t.haveCallback&&Y[t.id].attr("class",Y[t.id].attr("class")+" clickable"),s},Gt=(r,t)=>{Y[t.id]=r},Jt=()=>{Y={}},Kt=r=>{const t=Y[r.id];x.trace("Transforming node",r.diff,r,"translate("+(r.x-r.width/2-5)+", "+r.width/2+")");const e=8,s=r.diff||0;return r.clusterNode?t.attr("transform","translate("+(r.x+s-r.width/2)+", "+(r.y-r.height/2-e)+")"):t.attr("transform","translate("+r.x+", "+r.y+")"),s};let U={},k={};const te=()=>{U={},k={}},ee=(r,t)=>{const e=T(t.label,t.labelStyle),s=r.insert("g").attr("class","edgeLabel"),a=s.insert("g").attr("class","label");a.node().appendChild(e);let n=e.getBBox();if(R(L().flowchart.htmlLabels)){const l=e.children[0],o=S(e);n=l.getBoundingClientRect(),o.attr("width",n.width),o.attr("height",n.height)}a.attr("transform","translate("+-n.width/2+", "+-n.height/2+")"),U[t.id]=s,t.width=n.width,t.height=n.height;let i;if(t.startLabelLeft){const l=T(t.startLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),c=o.insert("g").attr("class","inner");i=c.node().appendChild(l);const d=l.getBBox();c.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startLeft=o,j(i,t.startLabelLeft)}if(t.startLabelRight){const l=T(t.startLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),c=o.insert("g").attr("class","inner");i=o.node().appendChild(l),c.node().appendChild(l);const d=l.getBBox();c.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),k[t.id]||(k[t.id]={}),k[t.id].startRight=o,j(i,t.startLabelRight)}if(t.endLabelLeft){const l=T(t.endLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),c=o.insert("g").attr("class","inner");i=c.node().appendChild(l);const d=l.getBBox();c.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),o.node().appendChild(l),k[t.id]||(k[t.id]={}),k[t.id].endLeft=o,j(i,t.endLabelLeft)}if(t.endLabelRight){const l=T(t.endLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),c=o.insert("g").attr("class","inner");i=c.node().appendChild(l);const d=l.getBBox();c.attr("transform","translate("+-d.width/2+", "+-d.height/2+")"),o.node().appendChild(l),k[t.id]||(k[t.id]={}),k[t.id].endRight=o,j(i,t.endLabelRight)}return e};function j(r,t){L().flowchart.htmlLabels&&r&&(r.style.width=t.length*9+"px",r.style.height="12px")}const re=(r,t)=>{x.info("Moving label abc78 ",r.id,r.label,U[r.id]);let e=t.updatedPath?t.updatedPath:t.originalPath;if(r.label){const s=U[r.id];let a=r.x,n=r.y;if(e){const i=X.calcLabelPosition(e);x.info("Moving label "+r.label+" from (",a,",",n,") to (",i.x,",",i.y,") abc78"),t.updatedPath&&(a=i.x,n=i.y)}s.attr("transform","translate("+a+", "+n+")")}if(r.startLabelLeft){const s=k[r.id].startLeft;let a=r.x,n=r.y;if(e){const i=X.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_left",e);a=i.x,n=i.y}s.attr("transform","translate("+a+", "+n+")")}if(r.startLabelRight){const s=k[r.id].startRight;let a=r.x,n=r.y;if(e){const i=X.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_right",e);a=i.x,n=i.y}s.attr("transform","translate("+a+", "+n+")")}if(r.endLabelLeft){const s=k[r.id].endLeft;let a=r.x,n=r.y;if(e){const i=X.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_left",e);a=i.x,n=i.y}s.attr("transform","translate("+a+", "+n+")")}if(r.endLabelRight){const s=k[r.id].endRight;let a=r.x,n=r.y;if(e){const i=X.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_right",e);a=i.x,n=i.y}s.attr("transform","translate("+a+", "+n+")")}},At=(r,t)=>{const e=r.x,s=r.y,a=Math.abs(t.x-e),n=Math.abs(t.y-s),i=r.width/2,l=r.height/2;return a>=i||n>=l},Zt=(r,t,e)=>{x.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(e)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);const s=r.x,a=r.y,n=Math.abs(s-e.x),i=r.width/2;let l=e.x<t.x?i-n:i+n;const o=r.height/2,c=Math.abs(t.y-e.y),d=Math.abs(t.x-e.x);if(Math.abs(a-t.y)*i>Math.abs(s-t.x)*o){let p=e.y<t.y?t.y-o-a:a-o-t.y;l=d*p/c;const y={x:e.x<t.x?e.x+l:e.x-d+l,y:e.y<t.y?e.y+c-p:e.y-c+p};return l===0&&(y.x=t.x,y.y=t.y),d===0&&(y.x=t.x),c===0&&(y.y=t.y),x.warn(`abc89 topp/bott calc, Q ${c}, q ${p}, R ${d}, r ${l}`,y),y}else{e.x<t.x?l=t.x-i-s:l=s-i-t.x;let p=c*l/d,y=e.x<t.x?e.x+d-l:e.x-d+l,h=e.y<t.y?e.y+p:e.y-p;return x.warn(`sides calc abc89, Q ${c}, q ${p}, R ${d}, r ${l}`,{_x:y,_y:h}),l===0&&(y=t.x,h=t.y),d===0&&(y=t.x),c===0&&(h=t.y),{x:y,y:h}}},F=(r,t)=>{x.warn("abc88 cutPathAtIntersect",r,t);let e=[],s=r[0],a=!1;return r.forEach(n=>{if(x.info("abc88 checking point",n,t),!At(t,n)&&!a){const i=Zt(t,s,n);x.warn("abc88 inside",n,s,i),x.warn("abc88 intersection",i);let l=!1;e.forEach(o=>{l=l||o.x===i.x&&o.y===i.y}),e.some(o=>o.x===i.x&&o.y===i.y)?x.warn("abc88 no intersect",i,e):e.push(i),a=!0}else x.warn("abc88 outside",n,s),s=n,a||e.push(n)}),x.warn("abc88 returning points",e),e},ae=function(r,t,e,s,a,n){let i=e.points,l=!1;const o=n.node(t.v);var c=n.node(t.w);x.info("abc88 InsertEdge: ",e),c.intersect&&o.intersect&&(i=i.slice(1,e.points.length-1),i.unshift(o.intersect(i[0])),x.info("Last point",i[i.length-1],c,c.intersect(i[i.length-1])),i.push(c.intersect(i[i.length-1]))),e.toCluster&&(x.info("to cluster abc88",s[e.toCluster]),i=F(e.points,s[e.toCluster].node),l=!0),e.fromCluster&&(x.info("from cluster abc88",s[e.fromCluster]),i=F(i.reverse(),s[e.fromCluster].node).reverse(),l=!0);const d=i.filter(m=>!Number.isNaN(m.y));let p;a==="graph"||a==="flowchart"?p=e.curve||A:p=A;const y=rt().x(function(m){return m.x}).y(function(m){return m.y}).curve(p);let h;switch(e.thickness){case"normal":h="edge-thickness-normal";break;case"thick":h="edge-thickness-thick";break;case"invisible":h="edge-thickness-thick";break;default:h=""}switch(e.pattern){case"solid":h+=" edge-pattern-solid";break;case"dotted":h+=" edge-pattern-dotted";break;case"dashed":h+=" edge-pattern-dashed";break}const g=r.append("path").attr("d",y(d)).attr("id",e.id).attr("class"," "+h+(e.classes?" "+e.classes:"")).attr("style",e.style);let f="";switch((L().flowchart.arrowMarkerAbsolute||L().state.arrowMarkerAbsolute)&&(f=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,f=f.replace(/\(/g,"\\("),f=f.replace(/\)/g,"\\)")),x.info("arrowTypeStart",e.arrowTypeStart),x.info("arrowTypeEnd",e.arrowTypeEnd),e.arrowTypeStart){case"arrow_cross":g.attr("marker-start","url("+f+"#"+a+"-crossStart)");break;case"arrow_point":g.attr("marker-start","url("+f+"#"+a+"-pointStart)");break;case"arrow_barb":g.attr("marker-start","url("+f+"#"+a+"-barbStart)");break;case"arrow_circle":g.attr("marker-start","url("+f+"#"+a+"-circleStart)");break;case"aggregation":g.attr("marker-start","url("+f+"#"+a+"-aggregationStart)");break;case"extension":g.attr("marker-start","url("+f+"#"+a+"-extensionStart)");break;case"composition":g.attr("marker-start","url("+f+"#"+a+"-compositionStart)");break;case"dependency":g.attr("marker-start","url("+f+"#"+a+"-dependencyStart)");break;case"lollipop":g.attr("marker-start","url("+f+"#"+a+"-lollipopStart)");break}switch(e.arrowTypeEnd){case"arrow_cross":g.attr("marker-end","url("+f+"#"+a+"-crossEnd)");break;case"arrow_point":g.attr("marker-end","url("+f+"#"+a+"-pointEnd)");break;case"arrow_barb":g.attr("marker-end","url("+f+"#"+a+"-barbEnd)");break;case"arrow_circle":g.attr("marker-end","url("+f+"#"+a+"-circleEnd)");break;case"aggregation":g.attr("marker-end","url("+f+"#"+a+"-aggregationEnd)");break;case"extension":g.attr("marker-end","url("+f+"#"+a+"-extensionEnd)");break;case"composition":g.attr("marker-end","url("+f+"#"+a+"-compositionEnd)");break;case"dependency":g.attr("marker-end","url("+f+"#"+a+"-dependencyEnd)");break;case"lollipop":g.attr("marker-end","url("+f+"#"+a+"-lollipopEnd)");break}let b={};return l&&(b.updatedPath=i),b.originalPath=e.points,b};export{Ft as G,Qt as K,Gt as P,T as R,te as a,ee as e,ae as i,Kt as r,re as s,Jt as t,Lt as v,w};