(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"44PX":function(e,t,s){"use strict";s.d(t,"a",function(){return h}),s.d(t,"b",function(){return u}),s.d(t,"c",function(){return d});var n=s("fXoL"),i=s("ofXK");function c(e,t){if(1&e){const e=n.Tb();n.Sb(0,"span",7),n.Zb("click",function(t){n.qc(e);const s=n.bc().$implicit,i=n.bc();return t.preventDefault(),i.removeTab(s)}),n.xc(1," \u274c"),n.Rb()}}const a=function(e){return["nav-item",e]};function l(e,t){if(1&e){const e=n.Tb();n.Sb(0,"li",3),n.Zb("keydown",function(s){n.qc(e);const i=t.index;return n.bc().keyNavActions(s,i)}),n.Sb(1,"a",4),n.Zb("click",function(){return t.$implicit.active=!0}),n.Sb(2,"span",5),n.xc(3),n.Rb(),n.vc(4,c,2,0,"span",6),n.Rb(),n.Rb()}if(2&e){const e=t.$implicit;n.Eb("active",e.active)("disabled",e.disabled),n.hc("ngClass",n.jc(15,a,e.customClass||"")),n.Bb(1),n.Eb("active",e.active)("disabled",e.disabled),n.Cb("aria-controls",e.id?e.id:"")("aria-selected",!!e.active)("id",e.id?e.id+"-link":""),n.Bb(1),n.hc("ngTransclude",e.headingRef),n.Bb(1),n.yc(e.heading),n.Bb(1),n.hc("ngIf",e.removable)}}const r=["*"];let o=(()=>{class e{constructor(e){this.viewRef=e}set ngTransclude(e){this._ngTransclude=e,e&&this.viewRef.createEmbeddedView(e)}get ngTransclude(){return this._ngTransclude}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.Q))},e.\u0275dir=n.Hb({type:e,selectors:[["","ngTransclude",""]],inputs:{ngTransclude:"ngTransclude"}}),e})(),b=(()=>{class e{constructor(){this.type="tabs",this.isKeysAllowed=!0,this.ariaLabel="Tabs"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(n.Ib)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t,s){this.renderer=t,this.elementRef=s,this.clazz=!0,this.tabs=[],this.classMap={},this.ariaLabel="Tabs",this.isDestroyed=!1,this._vertical=!1,this._justified=!1,this._type="tabs",this._isKeysAllowed=!0,Object.assign(this,e)}get vertical(){return this._vertical}set vertical(e){this._vertical=e,this.setClassMap()}get justified(){return this._justified}set justified(e){this._justified=e,this.setClassMap()}get type(){return this._type}set type(e){this._type=e,this.setClassMap()}get isKeysAllowed(){return this._isKeysAllowed}set isKeysAllowed(e){this._isKeysAllowed=e}ngOnDestroy(){this.isDestroyed=!0}addTab(e){this.tabs.push(e),e.active=1===this.tabs.length&&!e.active}removeTab(e,t={reselect:!0,emit:!0}){const s=this.tabs.indexOf(e);if(-1!==s&&!this.isDestroyed){if(t.reselect&&e.active&&this.hasAvailableTabs(s)){const e=this.getClosestTabIndex(s);this.tabs[e].active=!0}t.emit&&e.removed.emit(e),this.tabs.splice(s,1),e.elementRef.nativeElement.parentNode&&this.renderer.removeChild(e.elementRef.nativeElement.parentNode,e.elementRef.nativeElement)}}keyNavActions(e,t){if(!this.isKeysAllowed)return;const s=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));if(13!==e.keyCode&&"Enter"!==e.key&&32!==e.keyCode&&"Space"!==e.key)if(39!==e.keyCode&&"RightArrow"!==e.key)if(37!==e.keyCode&&"LeftArrow"!==e.key)if(36!==e.keyCode&&"Home"!==e.key)if(35!==e.keyCode&&"End"!==e.key){if((46===e.keyCode||"Delete"===e.key)&&this.tabs[t].removable){if(this.removeTab(this.tabs[t]),s[t+1])return void s[(t+1)%s.length].focus();s[s.length-1]&&s[0].focus()}}else{let n;e.preventDefault();let i=1,c=t;do{c-i<0?(c=s.length-1,n=s[c],i=0):n=s[c-i],i++}while(n.classList.contains("disabled"));n.focus()}else{let t;e.preventDefault();let n=0;do{t=s[n%s.length],n++}while(t.classList.contains("disabled"));t.focus()}else{let e,n=1,i=t;do{i-n<0?(i=s.length-1,e=s[i],n=0):e=s[i-n],n++}while(e.classList.contains("disabled"));e.focus()}else{let e,n=1;do{e=s[(t+n)%s.length],n++}while(e.classList.contains("disabled"));e.focus()}else e.preventDefault(),s[t%s.length].click()}getClosestTabIndex(e){const t=this.tabs.length;if(!t)return-1;for(let s=1;s<=t;s+=1){const t=e-s,n=e+s;if(this.tabs[t]&&!this.tabs[t].disabled)return t;if(this.tabs[n]&&!this.tabs[n].disabled)return n}return-1}hasAvailableTabs(e){const t=this.tabs.length;if(!t)return!1;for(let s=0;s<t;s+=1)if(!this.tabs[s].disabled&&s!==e)return!0;return!1}setClassMap(){this.classMap={"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified,[`nav-${this.type}`]:!0}}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(b),n.Mb(n.E),n.Mb(n.l))},e.\u0275cmp=n.Gb({type:e,selectors:[["tabset"]],hostVars:2,hostBindings:function(e,t){2&e&&n.Eb("tab-container",t.clazz)},inputs:{vertical:"vertical",justified:"justified",type:"type"},ngContentSelectors:r,decls:4,vars:3,consts:[["role","tablist",1,"nav",3,"ngClass","click"],[3,"ngClass","active","disabled","keydown",4,"ngFor","ngForOf"],[1,"tab-content"],[3,"ngClass","keydown"],["href","javascript:void(0);","role","tab",1,"nav-link",3,"click"],[3,"ngTransclude"],["class","bs-remove-tab",3,"click",4,"ngIf"],[1,"bs-remove-tab",3,"click"]],template:function(e,t){1&e&&(n.gc(),n.Sb(0,"ul",0),n.Zb("click",function(e){return e.preventDefault()}),n.vc(1,l,5,17,"li",1),n.Rb(),n.Sb(2,"div",2),n.fc(3),n.Rb()),2&e&&(n.hc("ngClass",t.classMap),n.Cb("aria-label",t.ariaLabel),n.Bb(1),n.hc("ngForOf",t.tabs))},directives:[i.j,i.k,o,i.l],styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]}),e})(),h=(()=>{class e{constructor(e,t,s){this.elementRef=t,this.renderer=s,this.disabled=!1,this.removable=!1,this.selectTab=new n.n,this.deselect=new n.n,this.removed=new n.n,this.addClass=!0,this.role="tabpanel",this._active=!1,this._customClass="",this.tabset=e,this.tabset.addTab(this)}get customClass(){return this._customClass}set customClass(e){this.customClass&&this.customClass.split(" ").forEach(e=>{this.renderer.removeClass(this.elementRef.nativeElement,e)}),this._customClass=e?e.trim():"",this.customClass&&this.customClass.split(" ").forEach(e=>{this.renderer.addClass(this.elementRef.nativeElement,e)})}get active(){return this._active}set active(e){this._active!==e&&(this.disabled&&e||!e?this._active&&!e&&(this.deselect.emit(this),this._active=e):(this._active=e,this.selectTab.emit(this),this.tabset.tabs.forEach(e=>{e!==this&&(e.active=!1)})))}get ariaLabelledby(){return this.id?`${this.id}-link`:""}ngOnInit(){this.removable=!!this.removable}ngOnDestroy(){this.tabset.removeTab(this,{reselect:!1,emit:!1})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(d),n.Mb(n.l),n.Mb(n.E))},e.\u0275dir=n.Hb({type:e,selectors:[["tab"],["","tab",""]],hostVars:7,hostBindings:function(e,t){2&e&&(n.Cb("role",t.role)("aria-labelledby",t.ariaLabelledby)("id",t.id),n.Eb("tab-pane",t.addClass)("active",t.active))},inputs:{disabled:"disabled",removable:"removable",customClass:"customClass",active:"active",heading:"heading",id:"id"},outputs:{selectTab:"selectTab",deselect:"deselect",removed:"removed"},exportAs:["tab"]}),e})(),u=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[i.c]]}),e})()},FrXe:function(e,t,s){"use strict";s.d(t,"a",function(){return h});var n=s("fXoL"),i=s("psEu"),c=s("6NWb"),a=s("ofXK");const l=["head"],r=["content"];function o(e,t){1&e&&n.Ob(0)}function b(e,t){1&e&&n.Ob(0)}function d(e,t){if(1&e&&(n.Sb(0,"div"),n.Nb(1,"hr"),n.vc(2,b,1,0,"ng-container",5),n.Rb()),2&e){const e=n.bc();n.Bb(2),n.hc("ngTemplateOutlet",e.content)}}let h=(()=>{class e{constructor(){this.collapsed=!0}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["app-tree-node"]],contentQueries:function(e,t,s){if(1&e&&(n.Fb(s,l,1,n.L),n.Fb(s,r,1,n.L)),2&e){let e;n.nc(e=n.ac())&&(t.head=e.first),n.nc(e=n.ac())&&(t.content=e.first)}},inputs:{collapsed:"collapsed"},decls:9,vars:3,consts:[["type","primary"],[1,"row"],["type","button",1,"btn","btn-primary",3,"click"],[3,"icon"],[1,"col"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(e,t){1&e&&(n.Sb(0,"alert",0),n.Sb(1,"div",1),n.Sb(2,"div"),n.Sb(3,"button",2),n.Zb("click",function(){return t.collapsed=!t.collapsed}),n.Nb(4,"fa-icon",3),n.Rb(),n.Rb(),n.Sb(5,"div",4),n.Sb(6,"div"),n.vc(7,o,1,0,"ng-container",5),n.Rb(),n.vc(8,d,3,1,"div",6),n.Rb(),n.Rb(),n.Rb()),2&e&&(n.Bb(4),n.hc("icon",t.collapsed?"caret-down":"caret-up"),n.Bb(3),n.hc("ngTemplateOutlet",t.head),n.Bb(1),n.hc("ngIf",!t.collapsed))},directives:[i.a,c.a,a.m,a.l],styles:[""]}),e})()},fU1k:function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s("fXoL"),i=s("ofXK"),c=s("6NWb");function a(e,t){if(1&e){const e=n.Tb();n.Sb(0,"button",3),n.Zb("click",function(){return n.qc(e),n.bc().toggle()}),n.Nb(1,"fa-icon",4),n.Rb()}}function l(e,t){if(1&e){const e=n.Tb();n.Sb(0,"button",5),n.Zb("click",function(){return n.qc(e),n.bc().toggle()}),n.Nb(1,"fa-icon",6),n.Rb()}}function r(e,t){if(1&e){const e=n.Tb();n.Sb(0,"button",7),n.Zb("click",function(){return n.qc(e),n.bc().toggle()}),n.Nb(1,"fa-icon",8),n.Rb()}}let o=(()=>{class e{constructor(){this.checked=!1,this.checkedChange=new n.n}ngOnInit(){}toggle(){this.checked=!this.checked,this.checkedChange.emit(this.checked)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["app-add-check"]],inputs:{checked:"checked"},outputs:{checkedChange:"checkedChange"},decls:3,vars:3,consts:[["class","btn btn-success","type","button",3,"click",4,"ngIf"],["button","","class","btn btn-light",3,"click",4,"ngIf"],["button","","class","btn btn-dark",3,"click",4,"ngIf"],["type","button",1,"btn","btn-success",3,"click"],["icon","check"],["button","",1,"btn","btn-light",3,"click"],["icon","plus"],["button","",1,"btn","btn-dark",3,"click"],["icon","slash"]],template:function(e,t){1&e&&(n.vc(0,a,2,0,"button",0),n.vc(1,l,2,0,"button",1),n.vc(2,r,2,0,"button",2)),2&e&&(n.hc("ngIf",!0===t.checked),n.Bb(1),n.hc("ngIf",!1===t.checked),n.Bb(1),n.hc("ngIf",void 0===t.checked))},directives:[i.l,c.a],styles:[""]}),e})()},wAQb:function(e,t,s){"use strict";s.d(t,"a",function(){return p});var n=s("fXoL"),i=s("HDdC"),c=s("5+tZ"),a=s("lJxs"),l=s("20UA"),r=s("ofXK"),o=s("3Pt+"),b=s("qCdp"),d=s("6NWb");let h=(()=>{class e{constructor(){this.clientChange=new n.n}ngOnInit(){}changeClient(){this.clientChange.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Gb({type:e,selectors:[["app-client-details"]],inputs:{client:"client"},outputs:{clientChange:"clientChange"},decls:13,vars:6,consts:[[1,"card"],[1,"card-body"],[1,"row","d-flex","align-items-center","m-0"],[1,"btn","btn-dark","ml-2",3,"click"],["icon","edit"]],template:function(e,t){1&e&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"h2"),n.xc(4),n.Rb(),n.Sb(5,"button",3),n.Zb("click",function(){return t.changeClient()}),n.Nb(6,"fa-icon",4),n.Rb(),n.Rb(),n.Sb(7,"p"),n.xc(8),n.Rb(),n.Sb(9,"p"),n.xc(10,"Tel:"),n.Rb(),n.Sb(11,"p"),n.xc(12,"Email:"),n.Rb(),n.Rb(),n.Rb()),2&e&&(n.Bb(4),n.yc(t.client.name),n.Bb(4),n.Dc("C\xedm: ",t.client.address.zip,", ",t.client.address.city,", ",t.client.address.addressLine," (",t.client.address.region," / ",t.client.address.country,") "))},directives:[d.a],styles:[""]}),e})();function u(e,t){if(1&e){const e=n.Tb();n.Sb(0,"div"),n.Sb(1,"label",3),n.xc(2,"Megrendel\u0151: "),n.Rb(),n.Sb(3,"input",4),n.Zb("typeaheadLoading",function(t){return n.qc(e),n.bc().changeTypeaheadLoading(t)})("typeaheadOnSelect",function(t){return n.qc(e),n.bc().onClientSelected(t)})("ngModelChange",function(t){return n.qc(e),n.bc().asyncSelected=t}),n.Rb(),n.Rb()}if(2&e){const e=n.bc();n.Bb(3),n.hc("ngModel",e.asyncSelected)("isAnimated",!0)("typeaheadAsync",!0)("typeahead",e.clients)}}function f(e,t){if(1&e){const e=n.Tb();n.Sb(0,"app-client-details",5),n.Zb("clientChange",function(){return n.qc(e),n.bc().startSearch()}),n.Rb()}if(2&e){const e=n.bc();n.hc("client",e.selectedClient)}}let p=(()=>{class e{constructor(e){this.clientClient=e,this.searchInProgress=!0,this.selectedClientChange=new n.n,this.clients=new i.a(e=>{e.next(this.asyncSelected)}).pipe(Object(c.b)(e=>this.getClientsAsObservable(e)))}ngOnInit(){}startSearch(){this.searchInProgress=!0}getClientsAsObservable(e){return this.clientClient.get(0,10,e).pipe(Object(a.a)(e=>e.content))}changeTypeaheadLoading(e){this.typeaheadLoading=e}onClientSelected(e){this.selectedClient=e.item,this.searchInProgress=!1,this.selectedClientChange.emit(this.selectedClient)}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(l.e))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-client-select"]],inputs:{selectedClient:"selectedClient"},outputs:{selectedClientChange:"selectedClientChange"},decls:3,vars:2,consts:[[1,"form-group"],[4,"ngIf"],[3,"client","clientChange",4,"ngIf"],["for","client",1,"form-label"],["id","client","placeholder","Keres\xe9s...","typeaheadOptionField","name",1,"form-control",3,"ngModel","isAnimated","typeaheadAsync","typeahead","typeaheadLoading","typeaheadOnSelect","ngModelChange"],[3,"client","clientChange"]],template:function(e,t){1&e&&(n.Sb(0,"div",0),n.vc(1,u,4,4,"div",1),n.vc(2,f,1,1,"app-client-details",2),n.Rb()),2&e&&(n.Bb(1),n.hc("ngIf",t.searchInProgress),n.Bb(1),n.hc("ngIf",!t.searchInProgress))},directives:[r.l,o.b,o.h,o.j,b.a,h],styles:[""]}),e})()}}]);