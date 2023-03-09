import{t as A,h as ft,u as gt,i as xt,a as mt,r as kt,l as _t,w as bt,s as vt,n as J,$ as $t}from"./mermaid.esm.min-080a10c9.js";import{h as it}from"./arc-1bd4335b-68d8c424.js";import"./app-1771c52f.js";import"./framework-6055ecdb.js";import"./constant-2fe7eae5-45b4460e.js";var Q=function(){var e=function(g,s,a,h){for(a=a||{},h=g.length;h--;a[g[h]]=s);return a},t=[1,2],i=[1,5],r=[6,9,11,17,18,20,22,23,24,26],n=[1,15],l=[1,16],c=[1,17],u=[1,18],y=[1,19],x=[1,20],d=[1,24],_=[4,6,9,11,17,18,20,22,23,24,26],p={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(g,s,a,h,f,o,$){var m=o.length-1;switch(f){case 1:return o[m-1];case 3:this.$=[];break;case 4:o[m-1].push(o[m]),this.$=o[m-1];break;case 5:case 6:this.$=o[m];break;case 7:case 8:this.$=[];break;case 11:h.setDiagramTitle(o[m].substr(6)),this.$=o[m].substr(6);break;case 12:this.$=o[m].trim(),h.setAccTitle(this.$);break;case 13:case 14:this.$=o[m].trim(),h.setAccDescription(this.$);break;case 15:h.addSection(o[m].substr(8)),this.$=o[m].substr(8);break;case 16:h.addTask(o[m-1],o[m]),this.$="task";break;case 18:h.parseDirective("%%{","open_directive");break;case 19:h.parseDirective(o[m],"type_directive");break;case 20:o[m]=o[m].trim().replace(/'/g,'"'),h.parseDirective(o[m],"arg_directive");break;case 21:h.parseDirective("}%%","close_directive","journey");break}},table:[{3:1,4:t,7:3,12:4,26:i},{1:[3]},e(r,[2,3],{5:6}),{3:7,4:t,7:3,12:4,26:i},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:n,18:l,20:c,22:u,23:y,24:x,26:i},{1:[2,2]},{14:22,15:[1,23],29:d},e([15,29],[2,19]),e(r,[2,8],{1:[2,1]}),e(r,[2,4]),{7:21,10:25,12:4,17:n,18:l,20:c,22:u,23:y,24:x,26:i},e(r,[2,6]),e(r,[2,7]),e(r,[2,11]),{19:[1,26]},{21:[1,27]},e(r,[2,14]),e(r,[2,15]),{25:[1,28]},e(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},e(r,[2,5]),e(r,[2,12]),e(r,[2,13]),e(r,[2,16]),e(_,[2,9]),{14:32,29:d},{29:[2,20]},{11:[1,33]},e(_,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(g,s){if(s.recoverable)this.trace(g);else{var a=new Error(g);throw a.hash=s,a}},parse:function(g){var s=this,a=[0],h=[],f=[null],o=[],$=this.table,m="",R=0,U=0,ut=2,tt=1,yt=o.slice.call(arguments,1),k=Object.create(this.lexer),P={yy:{}};for(var G in this.yy)Object.prototype.hasOwnProperty.call(this.yy,G)&&(P.yy[G]=this.yy[G]);k.setInput(g,P.yy),P.yy.lexer=k,P.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var Y=k.yylloc;o.push(Y);var pt=k.options&&k.options.ranges;typeof P.yy.parseError=="function"?this.parseError=P.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function dt(){var E;return E=h.pop()||k.lex()||tt,typeof E!="number"&&(E instanceof Array&&(h=E,E=h.pop()),E=s.symbols_[E]||E),E}for(var w,C,T,X,D={},B,S,et,z;;){if(C=a[a.length-1],this.defaultActions[C]?T=this.defaultActions[C]:((w===null||typeof w>"u")&&(w=dt()),T=$[C]&&$[C][w]),typeof T>"u"||!T.length||!T[0]){var q="";z=[];for(B in $[C])this.terminals_[B]&&B>ut&&z.push("'"+this.terminals_[B]+"'");k.showPosition?q="Parse error on line "+(R+1)+`:
`+k.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[w]||w)+"'":q="Parse error on line "+(R+1)+": Unexpected "+(w==tt?"end of input":"'"+(this.terminals_[w]||w)+"'"),this.parseError(q,{text:k.match,token:this.terminals_[w]||w,line:k.yylineno,loc:Y,expected:z})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+w);switch(T[0]){case 1:a.push(w),f.push(k.yytext),o.push(k.yylloc),a.push(T[1]),w=null,U=k.yyleng,m=k.yytext,R=k.yylineno,Y=k.yylloc;break;case 2:if(S=this.productions_[T[1]][1],D.$=f[f.length-S],D._$={first_line:o[o.length-(S||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(S||1)].first_column,last_column:o[o.length-1].last_column},pt&&(D._$.range=[o[o.length-(S||1)].range[0],o[o.length-1].range[1]]),X=this.performAction.apply(D,[m,U,R,P.yy,T[1],f,o].concat(yt)),typeof X<"u")return X;S&&(a=a.slice(0,-1*S*2),f=f.slice(0,-1*S),o=o.slice(0,-1*S)),a.push(this.productions_[T[1]][0]),f.push(D.$),o.push(D._$),et=$[a[a.length-2]][a[a.length-1]],a.push(et);break;case 3:return!0}}return!0}},v=function(){var g={EOF:1,parseError:function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},setInput:function(s,a){return this.yy=a||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,h=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===f.length?this.yylloc.first_column:0)+f[f.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},test_match:function(s,a){var h,f,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),f=s[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var $ in o)this[$]=o[$];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,h,f;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),$=0;$<o.length;$++)if(h=this._input.match(this.rules[o[$]]),h&&(!a||h[0].length>a[0].length)){if(a=h,f=$,this.options.backtrack_lexer){if(s=this.test_match(h,o[$]),s!==!1)return s;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(s=this.test_match(a,o[f]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,a,h,f){switch(h){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};return g}();p.lexer=v;function b(){this.yy={}}return b.prototype=p,p.Parser=b,new b}();Q.parser=Q;const wt=Q;let O="";const Z=[],V=[],L=[],Tt=function(e,t,i){bt.parseDirective(this,e,t,i)},Mt=function(){Z.length=0,V.length=0,O="",L.length=0,vt()},St=function(e){O=e,Z.push(e)},Et=function(){return Z},It=function(){let e=rt();const t=100;let i=0;for(;!e&&i<t;)e=rt(),i++;return V.push(...L),V},Pt=function(){const e=[];return V.forEach(t=>{t.people&&e.push(...t.people)}),[...new Set(e)].sort()},Ct=function(e,t){const i=t.substr(1).split(":");let r=0,n=[];i.length===1?(r=Number(i[0]),n=[]):(r=Number(i[0]),n=i[1].split(","));const l=n.map(u=>u.trim()),c={section:O,type:O,people:l,task:e,score:r};L.push(c)},jt=function(e){const t={section:O,type:O,description:e,task:e,classes:[]};V.push(t)},rt=function(){const e=function(i){return L[i].processed};let t=!0;for(const[i,r]of L.entries())e(i),t=t&&r.processed;return t},At=function(){return Pt()},st={parseDirective:Tt,getConfig:()=>A().journey,clear:Mt,setDiagramTitle:ft,getDiagramTitle:gt,setAccTitle:xt,getAccTitle:mt,setAccDescription:kt,getAccDescription:_t,addSection:St,getSections:Et,getTasks:It,addTask:Ct,addTaskOrg:jt,getActors:At},Dt=e=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${e.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${e.textColor}
  }

  .legend {
    fill: ${e.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${e.textColor}
  }

  .face {
    ${e.faceColor?`fill: ${e.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${e.fillType0?`fill: ${e.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${e.fillType0?`fill: ${e.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${e.fillType0?`fill: ${e.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${e.fillType0?`fill: ${e.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${e.fillType0?`fill: ${e.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${e.fillType0?`fill: ${e.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${e.fillType0?`fill: ${e.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${e.fillType0?`fill: ${e.fillType7}`:""};
  }

  .actor-0 {
    ${e.actor0?`fill: ${e.actor0}`:""};
  }
  .actor-1 {
    ${e.actor1?`fill: ${e.actor1}`:""};
  }
  .actor-2 {
    ${e.actor2?`fill: ${e.actor2}`:""};
  }
  .actor-3 {
    ${e.actor3?`fill: ${e.actor3}`:""};
  }
  .actor-4 {
    ${e.actor4?`fill: ${e.actor4}`:""};
  }
  .actor-5 {
    ${e.actor5?`fill: ${e.actor5}`:""};
  }
`,Ot=Dt,F=function(e,t){const i=e.append("rect");return i.attr("x",t.x),i.attr("y",t.y),i.attr("fill",t.fill),i.attr("stroke",t.stroke),i.attr("width",t.width),i.attr("height",t.height),i.attr("rx",t.rx),i.attr("ry",t.ry),t.class!==void 0&&i.attr("class",t.class),i},Vt=function(e,t){const i=e.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=e.append("g");r.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function n(u){const y=it().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(u){const y=it().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);u.append("path").attr("class","mouth").attr("d",y).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function c(u){u.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?n(r):t.score<3?l(r):c(r),i},ct=function(e,t){const i=e.append("circle");return i.attr("cx",t.cx),i.attr("cy",t.cy),i.attr("class","actor-"+t.pos),i.attr("fill",t.fill),i.attr("stroke",t.stroke),i.attr("r",t.r),i.class!==void 0&&i.attr("class",i.class),t.title!==void 0&&i.append("title").text(t.title),i},lt=function(e,t){const i=t.text.replace(/<br\s*\/?>/gi," "),r=e.append("text");r.attr("x",t.x),r.attr("y",t.y),r.attr("class","legend"),r.style("text-anchor",t.anchor),t.class!==void 0&&r.attr("class",t.class);const n=r.append("tspan");return n.attr("x",t.x+t.textMargin*2),n.text(i),r},Lt=function(e,t){function i(n,l,c,u,y){return n+","+l+" "+(n+c)+","+l+" "+(n+c)+","+(l+u-y)+" "+(n+c-y*1.2)+","+(l+u)+" "+n+","+(l+u)}const r=e.append("polygon");r.attr("points",i(t.x,t.y,50,20,7)),r.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,lt(e,t)},Nt=function(e,t,i){const r=e.append("g"),n=H();n.x=t.x,n.y=t.y,n.fill=t.fill,n.width=i.width*t.taskCount+i.diagramMarginX*(t.taskCount-1),n.height=i.height,n.class="journey-section section-type-"+t.num,n.rx=3,n.ry=3,F(r,n),ht(i)(t.text,r,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+t.num},i,t.colour)};let nt=-1;const Rt=function(e,t,i){const r=t.x+i.width/2,n=e.append("g");nt++;const l=300+5*30;n.append("line").attr("id","task"+nt).attr("x1",r).attr("y1",t.y).attr("x2",r).attr("y2",l).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Vt(n,{cx:r,cy:300+(5-t.score)*30,score:t.score});const c=H();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=i.width,c.height=i.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,F(n,c);let u=t.x+14;t.people.forEach(y=>{const x=t.actors[y].color,d={cx:u,cy:t.y,r:7,fill:x,stroke:"#000",title:y,pos:t.actors[y].position};ct(n,d),u+=10}),ht(i)(t.task,n,c.x,c.y,c.width,c.height,{class:"task"},i,t.colour)},Bt=function(e,t){F(e,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},zt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},H=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},ht=function(){function e(n,l,c,u,y,x,d,_){const p=l.append("text").attr("x",c+y/2).attr("y",u+x/2+5).style("font-color",_).style("text-anchor","middle").text(n);r(p,d)}function t(n,l,c,u,y,x,d,_,p){const{taskFontSize:v,taskFontFamily:b}=_,g=n.split(/<br\s*\/?>/gi);for(let s=0;s<g.length;s++){const a=s*v-v*(g.length-1)/2,h=l.append("text").attr("x",c+y/2).attr("y",u).attr("fill",p).style("text-anchor","middle").style("font-size",v).style("font-family",b);h.append("tspan").attr("x",c+y/2).attr("dy",a).text(g[s]),h.attr("y",u+x/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(h,d)}}function i(n,l,c,u,y,x,d,_){const p=l.append("switch"),v=p.append("foreignObject").attr("x",c).attr("y",u).attr("width",y).attr("height",x).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");v.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),t(n,p,c,u,y,x,d,_),r(v,d)}function r(n,l){for(const c in l)c in l&&n.attr(c,l[c])}return function(n){return n.textPlacement==="fo"?i:n.textPlacement==="old"?e:t}}(),Ft=function(e){e.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},N={drawRect:F,drawCircle:ct,drawSection:Nt,drawText:lt,drawLabel:Lt,drawTask:Rt,drawBackgroundRect:Bt,getTextObj:zt,getNoteRect:H,initGraphics:Ft},Wt=function(e){Object.keys(e).forEach(function(t){W[t]=e[t]})},I={};function Gt(e){const t=A().journey;let i=60;Object.keys(I).forEach(r=>{const n=I[r].color,l={cx:20,cy:i,r:7,fill:n,stroke:"#000",pos:I[r].position};N.drawCircle(e,l);const c={x:40,y:i+7,fill:"#666",text:r,textMargin:t.boxTextMargin|5};N.drawText(e,c),i+=20})}const W=A().journey,j=W.leftMargin,Yt=function(e,t,i,r){const n=A().journey;r.db.clear(),r.parser.parse(e+`
`);const l=A().securityLevel;let c;l==="sandbox"&&(c=J("#i"+t));const u=l==="sandbox"?J(c.nodes()[0].contentDocument.body):J("body");M.init();const y=u.select("#"+t);N.initGraphics(y);const x=r.db.getTasks(),d=r.db.getDiagramTitle(),_=r.db.getActors();for(const a in I)delete I[a];let p=0;_.forEach(a=>{I[a]={color:n.actorColours[p%n.actorColours.length],position:p},p++}),Gt(y),M.insert(0,0,j,Object.keys(I).length*50),Xt(y,x,0);const v=M.getBounds();d&&y.append("text").text(d).attr("x",j).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const b=v.stopy-v.starty+2*n.diagramMarginY,g=j+v.stopx+2*n.diagramMarginX;$t(y,b,g,n.useMaxWidth),y.append("line").attr("x1",j).attr("y1",n.height*4).attr("x2",g-j-4).attr("y2",n.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const s=d?70:0;y.attr("viewBox",`${v.startx} -25 ${g} ${b+s}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",b+s+25)},M={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(e,t,i,r){e[t]===void 0?e[t]=i:e[t]=r(i,e[t])},updateBounds:function(e,t,i,r){const n=A().journey,l=this;let c=0;function u(y){return function(x){c++;const d=l.sequenceItems.length-c+1;l.updateVal(x,"starty",t-d*n.boxMargin,Math.min),l.updateVal(x,"stopy",r+d*n.boxMargin,Math.max),l.updateVal(M.data,"startx",e-d*n.boxMargin,Math.min),l.updateVal(M.data,"stopx",i+d*n.boxMargin,Math.max),y!=="activation"&&(l.updateVal(x,"startx",e-d*n.boxMargin,Math.min),l.updateVal(x,"stopx",i+d*n.boxMargin,Math.max),l.updateVal(M.data,"starty",t-d*n.boxMargin,Math.min),l.updateVal(M.data,"stopy",r+d*n.boxMargin,Math.max))}}this.sequenceItems.forEach(u())},insert:function(e,t,i,r){const n=Math.min(e,i),l=Math.max(e,i),c=Math.min(t,r),u=Math.max(t,r);this.updateVal(M.data,"startx",n,Math.min),this.updateVal(M.data,"starty",c,Math.min),this.updateVal(M.data,"stopx",l,Math.max),this.updateVal(M.data,"stopy",u,Math.max),this.updateBounds(n,c,l,u)},bumpVerticalPos:function(e){this.verticalPos=this.verticalPos+e,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},K=W.sectionFills,at=W.sectionColours,Xt=function(e,t,i){const r=A().journey;let n="";const l=r.height*2+r.diagramMarginY,c=i+l;let u=0,y="#CCC",x="black",d=0;for(const[_,p]of t.entries()){if(n!==p.section){y=K[u%K.length],d=u%K.length,x=at[u%at.length];let b=0;const g=p.section;for(let a=_;a<t.length&&t[a].section==g;a++)b=b+1;const s={x:_*r.taskMargin+_*r.width+j,y:50,text:p.section,fill:y,num:d,colour:x,taskCount:b};N.drawSection(e,s,r),n=p.section,u++}const v=p.people.reduce((b,g)=>(I[g]&&(b[g]=I[g]),b),{});p.x=_*r.taskMargin+_*r.width+j,p.y=c,p.width=r.diagramMarginX,p.height=r.diagramMarginY,p.colour=x,p.fill=y,p.num=d,p.actors=v,N.drawTask(e,p,r),M.insert(p.x,p.y,p.x+p.width+r.taskMargin,300+5*30)}},ot={setConf:Wt,draw:Yt},Ht={parser:wt,db:st,renderer:ot,styles:Ot,init:e=>{ot.setConf(e.journey),st.clear()}};export{Ht as diagram};