(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{G81l:function(e,t,i){"use strict";i.r(t),i.d(t,"ManufacturingModule",function(){return le});var n=i("ofXK"),c=i("tyNb"),s=i("20UA"),r=i("fXoL"),a=i("K3ix"),o=i("3Pt+");function b(e,t){if(1&e){const e=r.Tb();r.Sb(0,"span",7),r.Zb("click",function(t){r.pc(e);const i=r.bc().$implicit,n=r.bc();return t.preventDefault(),n.removeTab(i)}),r.wc(1," \u274c"),r.Rb()}}const d=function(e){return["nav-item",e]};function l(e,t){if(1&e){const e=r.Tb();r.Sb(0,"li",3),r.Zb("keydown",function(i){r.pc(e);const n=t.index;return r.bc().keyNavActions(i,n)}),r.Sb(1,"a",4),r.Zb("click",function(){return t.$implicit.active=!0}),r.Sb(2,"span",5),r.wc(3),r.Rb(),r.uc(4,b,2,0,"span",6),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit;r.Eb("active",e.active)("disabled",e.disabled),r.hc("ngClass",r.ic(15,d,e.customClass||"")),r.Bb(1),r.Eb("active",e.active)("disabled",e.disabled),r.Cb("aria-controls",e.id?e.id:"")("aria-selected",!!e.active)("id",e.id?e.id+"-link":""),r.Bb(1),r.hc("ngTransclude",e.headingRef),r.Bb(1),r.xc(e.heading),r.Bb(1),r.hc("ngIf",e.removable)}}const h=["*"];let m=(()=>{class e{constructor(e){this.viewRef=e}set ngTransclude(e){this._ngTransclude=e,e&&this.viewRef.createEmbeddedView(e)}get ngTransclude(){return this._ngTransclude}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(r.Q))},e.\u0275dir=r.Hb({type:e,selectors:[["","ngTransclude",""]],inputs:{ngTransclude:"ngTransclude"}}),e})(),u=(()=>{class e{constructor(){this.type="tabs",this.isKeysAllowed=!0,this.ariaLabel="Tabs"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r.Ib)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),p=(()=>{class e{constructor(e,t,i){this.renderer=t,this.elementRef=i,this.clazz=!0,this.tabs=[],this.classMap={},this.ariaLabel="Tabs",this.isDestroyed=!1,this._vertical=!1,this._justified=!1,this._type="tabs",this._isKeysAllowed=!0,Object.assign(this,e)}get vertical(){return this._vertical}set vertical(e){this._vertical=e,this.setClassMap()}get justified(){return this._justified}set justified(e){this._justified=e,this.setClassMap()}get type(){return this._type}set type(e){this._type=e,this.setClassMap()}get isKeysAllowed(){return this._isKeysAllowed}set isKeysAllowed(e){this._isKeysAllowed=e}ngOnDestroy(){this.isDestroyed=!0}addTab(e){this.tabs.push(e),e.active=1===this.tabs.length&&!e.active}removeTab(e,t={reselect:!0,emit:!0}){const i=this.tabs.indexOf(e);if(-1!==i&&!this.isDestroyed){if(t.reselect&&e.active&&this.hasAvailableTabs(i)){const e=this.getClosestTabIndex(i);this.tabs[e].active=!0}t.emit&&e.removed.emit(e),this.tabs.splice(i,1),e.elementRef.nativeElement.parentNode&&this.renderer.removeChild(e.elementRef.nativeElement.parentNode,e.elementRef.nativeElement)}}keyNavActions(e,t){if(!this.isKeysAllowed)return;const i=Array.from(this.elementRef.nativeElement.querySelectorAll(".nav-link"));if(13!==e.keyCode&&"Enter"!==e.key&&32!==e.keyCode&&"Space"!==e.key)if(39!==e.keyCode&&"RightArrow"!==e.key)if(37!==e.keyCode&&"LeftArrow"!==e.key)if(36!==e.keyCode&&"Home"!==e.key)if(35!==e.keyCode&&"End"!==e.key){if((46===e.keyCode||"Delete"===e.key)&&this.tabs[t].removable){if(this.removeTab(this.tabs[t]),i[t+1])return void i[(t+1)%i.length].focus();i[i.length-1]&&i[0].focus()}}else{let n;e.preventDefault();let c=1,s=t;do{s-c<0?(s=i.length-1,n=i[s],c=0):n=i[s-c],c++}while(n.classList.contains("disabled"));n.focus()}else{let t;e.preventDefault();let n=0;do{t=i[n%i.length],n++}while(t.classList.contains("disabled"));t.focus()}else{let e,n=1,c=t;do{c-n<0?(c=i.length-1,e=i[c],n=0):e=i[c-n],n++}while(e.classList.contains("disabled"));e.focus()}else{let e,n=1;do{e=i[(t+n)%i.length],n++}while(e.classList.contains("disabled"));e.focus()}else e.preventDefault(),i[t%i.length].click()}getClosestTabIndex(e){const t=this.tabs.length;if(!t)return-1;for(let i=1;i<=t;i+=1){const t=e-i,n=e+i;if(this.tabs[t]&&!this.tabs[t].disabled)return t;if(this.tabs[n]&&!this.tabs[n].disabled)return n}return-1}hasAvailableTabs(e){const t=this.tabs.length;if(!t)return!1;for(let i=0;i<t;i+=1)if(!this.tabs[i].disabled&&i!==e)return!0;return!1}setClassMap(){this.classMap={"nav-stacked":this.vertical,"flex-column":this.vertical,"nav-justified":this.justified,[`nav-${this.type}`]:!0}}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(u),r.Mb(r.E),r.Mb(r.l))},e.\u0275cmp=r.Gb({type:e,selectors:[["tabset"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Eb("tab-container",t.clazz)},inputs:{vertical:"vertical",justified:"justified",type:"type"},ngContentSelectors:h,decls:4,vars:3,consts:[["role","tablist",1,"nav",3,"ngClass","click"],[3,"ngClass","active","disabled","keydown",4,"ngFor","ngForOf"],[1,"tab-content"],[3,"ngClass","keydown"],["href","javascript:void(0);","role","tab",1,"nav-link",3,"click"],[3,"ngTransclude"],["class","bs-remove-tab",3,"click",4,"ngIf"],[1,"bs-remove-tab",3,"click"]],template:function(e,t){1&e&&(r.gc(),r.Sb(0,"ul",0),r.Zb("click",function(e){return e.preventDefault()}),r.uc(1,l,5,17,"li",1),r.Rb(),r.Sb(2,"div",2),r.fc(3),r.Rb()),2&e&&(r.hc("ngClass",t.classMap),r.Cb("aria-label",t.ariaLabel),r.Bb(1),r.hc("ngForOf",t.tabs))},directives:[n.j,n.k,m,n.l],styles:["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"]}),e})(),f=(()=>{class e{constructor(e,t,i){this.elementRef=t,this.renderer=i,this.disabled=!1,this.removable=!1,this.selectTab=new r.n,this.deselect=new r.n,this.removed=new r.n,this.addClass=!0,this.role="tabpanel",this._active=!1,this._customClass="",this.tabset=e,this.tabset.addTab(this)}get customClass(){return this._customClass}set customClass(e){this.customClass&&this.customClass.split(" ").forEach(e=>{this.renderer.removeClass(this.elementRef.nativeElement,e)}),this._customClass=e?e.trim():"",this.customClass&&this.customClass.split(" ").forEach(e=>{this.renderer.addClass(this.elementRef.nativeElement,e)})}get active(){return this._active}set active(e){this._active!==e&&(this.disabled&&e||!e?this._active&&!e&&(this.deselect.emit(this),this._active=e):(this._active=e,this.selectTab.emit(this),this.tabset.tabs.forEach(e=>{e!==this&&(e.active=!1)})))}get ariaLabelledby(){return this.id?`${this.id}-link`:""}ngOnInit(){this.removable=!!this.removable}ngOnDestroy(){this.tabset.removeTab(this,{reselect:!1,emit:!1})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(p),r.Mb(r.l),r.Mb(r.E))},e.\u0275dir=r.Hb({type:e,selectors:[["tab"],["","tab",""]],hostVars:7,hostBindings:function(e,t){2&e&&(r.Cb("role",t.role)("aria-labelledby",t.ariaLabelledby)("id",t.id),r.Eb("tab-pane",t.addClass)("active",t.active))},inputs:{disabled:"disabled",removable:"removable",customClass:"customClass",active:"active",heading:"heading",id:"id"},outputs:{selectTab:"selectTab",deselect:"deselect",removed:"removed"},exportAs:["tab"]}),e})(),g=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[n.c]]}),e})();function v(e){return new s.j({orderId:e.order.id,items:[]})}class y{constructor(e,t){this.orderPart=e,this.member=t,this.clientName=e.order.client.name,this.incompleteItemsCount=e.incompleteItems.filter(e=>e.amount>0).length,this.memberItemsCount=(null==t?void 0:t.items.filter(e=>e.amount>0).length)||0,this.date=e.order.requestedDate.toLocaleDateString("hu-hu"),this.items=e.incompleteItems.map(e=>{var i;return{recipeId:e.recipe.id,recipeName:e.recipe.name,incompleteAmount:e.amount,memberAmount:(null===(i=null==t?void 0:t.items.find(t=>t.recipeId===e.recipe.id))||void 0===i?void 0:i.amount)||0}})}}var S=i("FrXe"),w=i("6NWb");function k(e,t){if(1&e){const e=r.Tb();r.Sb(0,"button",3),r.Zb("click",function(){return r.pc(e),r.bc().toggle()}),r.Nb(1,"fa-icon",4),r.Rb()}}function R(e,t){if(1&e){const e=r.Tb();r.Sb(0,"button",5),r.Zb("click",function(){return r.pc(e),r.bc().toggle()}),r.Nb(1,"fa-icon",6),r.Rb()}}function B(e,t){if(1&e){const e=r.Tb();r.Sb(0,"button",7),r.Zb("click",function(){return r.pc(e),r.bc().toggle()}),r.Nb(1,"fa-icon",8),r.Rb()}}let C=(()=>{class e{constructor(){this.checked=!1,this.checkedChange=new r.n}ngOnInit(){}toggle(){this.checked=!this.checked,this.checkedChange.emit(this.checked)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-add-check"]],inputs:{checked:"checked"},outputs:{checkedChange:"checkedChange"},decls:3,vars:3,consts:[["class","btn btn-success","type","button",3,"click",4,"ngIf"],["button","","class","btn btn-light",3,"click",4,"ngIf"],["button","","class","btn btn-dark",3,"click",4,"ngIf"],["type","button",1,"btn","btn-success",3,"click"],["icon","check"],["button","",1,"btn","btn-light",3,"click"],["icon","plus"],["button","",1,"btn","btn-dark",3,"click"],["icon","slash"]],template:function(e,t){1&e&&(r.uc(0,k,2,0,"button",0),r.uc(1,R,2,0,"button",1),r.uc(2,B,2,0,"button",2)),2&e&&(r.hc("ngIf",!0===t.checked),r.Bb(1),r.hc("ngIf",!1===t.checked),r.Bb(1),r.hc("ngIf",void 0===t.checked))},directives:[n.l,w.a],styles:[""]}),e})();function I(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",5),r.Sb(1,"div",6),r.wc(2),r.Rb(),r.Sb(3,"div",7),r.wc(4),r.Rb(),r.Sb(5,"div",8),r.Sb(6,"app-add-check",9),r.Zb("checkedChange",function(t){r.pc(e);const i=r.bc().$implicit;return r.bc().onOrderChecked(t,i)}),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=r.bc().$implicit;r.Bb(2),r.zc("",e.clientName," (",e.date,")"),r.Bb(2),r.zc("",e.memberItemsCount," / ",e.incompleteItemsCount,""),r.Bb(2),r.hc("checked",e.memberItemsCount>0)}}function O(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",5),r.Sb(1,"div",6),r.wc(2),r.Rb(),r.Sb(3,"div",11),r.wc(4),r.Rb(),r.Sb(5,"div",12),r.Sb(6,"app-add-check",9),r.Zb("checkedChange",function(i){r.pc(e);const n=t.$implicit,c=r.bc(2).$implicit;return r.bc().onItemChecked(i,n,c)}),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit;r.Bb(2),r.yc(" ",e.recipeName," "),r.Bb(2),r.zc(" ",e.memberAmount," / ",e.incompleteAmount," "),r.Bb(2),r.hc("checked",e.memberAmount>0)}}function x(e,t){if(1&e&&r.uc(0,O,7,4,"div",10),2&e){const e=r.bc().$implicit,t=r.bc();r.hc("ngForOf",t.itemsFiltered(e))}}function M(e,t){1&e&&(r.Sb(0,"app-tree-node",2),r.uc(1,I,7,5,"ng-template",null,3,r.vc),r.uc(3,x,1,1,"ng-template",null,4,r.vc),r.Rb()),2&e&&r.hc("collapsed",!1)}let T=(()=>{class e{constructor(){this.mixingBatchMembersByOrderId=new Map,this.mixingBatchOrders=new Array,this.orderSelected=new r.n}ngOnInit(){}itemsFiltered(e){return e.items.filter(e=>e.memberAmount>0)}onItemChecked(e,t,i){i.member.items=i.member.items.filter(e=>e.recipeId!==t.recipeId);const n=new y(i.orderPart,i.member);this.orderSelected.emit(n)}onOrderChecked(e,t){t.member=v(t.orderPart);const i=new y(t.orderPart,t.member);this.orderSelected.emit(i)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-batch-content"]],inputs:{mixingBatchMembersByOrderId:"mixingBatchMembersByOrderId",mixingBatchOrders:"mixingBatchOrders"},outputs:{orderSelected:"orderSelected"},decls:2,vars:1,consts:[[1,"p-2"],[3,"collapsed",4,"ngFor","ngForOf"],[3,"collapsed"],["head",""],["content",""],[1,"row","align-items-center"],[1,"col-6"],[1,"col-4"],[1,"col-2"],[3,"checked","checkedChange"],["class","row  align-items-center",4,"ngFor","ngForOf"],[1,"col-5"],[1,"col-1"]],template:function(e,t){1&e&&(r.Sb(0,"div",0),r.uc(1,M,5,1,"app-tree-node",1),r.Rb()),2&e&&(r.Bb(1),r.hc("ngForOf",t.mixingBatchOrders))},directives:[n.k,S.a,C],styles:[""]}),e})();function j(e,t){if(1&e&&(r.Sb(0,"div",5),r.Sb(1,"div",6),r.wc(2),r.Rb(),r.Sb(3,"div",7),r.wc(4),r.Rb(),r.Sb(5,"div",7),r.wc(6),r.Rb(),r.Nb(7,"div",8),r.Rb()),2&e){const e=r.bc().$implicit;r.Bb(2),r.xc(e.recipeName),r.Bb(2),r.yc("",e.totalAmount," adag"),r.Bb(2),r.yc("",e.totalClients," megrendel\xe9sb\u0151l")}}function A(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",5),r.Sb(1,"div",10),r.wc(2),r.Rb(),r.Sb(3,"div",11),r.wc(4),r.Rb(),r.Sb(5,"div",12),r.Sb(6,"app-add-check",13),r.Zb("checkedChange",function(i){r.pc(e);const n=t.$implicit,c=r.bc(2).$implicit;return r.bc().onItemChecked(i,c.recipeId,n.order)}),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit;r.Bb(2),r.yc(" ",e.order.clientName," "),r.Bb(2),r.yc(" ",e.item.memberAmount," adag"),r.Bb(2),r.hc("checked",!0)}}function N(e,t){if(1&e&&r.uc(0,A,7,3,"div",9),2&e){const e=r.bc().$implicit;r.hc("ngForOf",e.items)}}function F(e,t){1&e&&(r.Sb(0,"app-tree-node",2),r.uc(1,j,8,3,"ng-template",null,3,r.vc),r.uc(3,N,1,1,"ng-template",null,4,r.vc),r.Rb()),2&e&&r.hc("collapsed",!1)}let D=(()=>{class e{constructor(){this.orderSelected=new r.n,this.recipeDeselected=new r.n}set mixingBatchOrders(e){this.recipes=this.toInternalRepresentation(e)}toInternalRepresentation(e){const t=new Map;return e.forEach(e=>e.items.forEach(i=>{if(i.memberAmount>0)if(t.get(i.recipeId)){const n=t.get(i.recipeId);n.totalAmount+=i.memberAmount,n.totalClients+=1,n.items.push({item:e.items.find(e=>e.recipeId===i.recipeId),order:e})}else t.set(i.recipeId,{recipeName:i.recipeName,recipeId:i.recipeId,totalAmount:i.memberAmount,completedAmount:0,totalClients:1,items:[{item:e.items.find(e=>e.recipeId===i.recipeId),order:e}]})})),[...t.values()]}ngOnInit(){}onRecipeRemoved(e){this.recipeDeselected.emit(e)}onItemChecked(e,t,i){i.member.items=i.member.items.filter(e=>e.recipeId!==t);const n=new y(i.orderPart,i.member);this.orderSelected.emit(n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-batch-overview"]],inputs:{mixingBatchOrders:"mixingBatchOrders"},outputs:{orderSelected:"orderSelected",recipeDeselected:"recipeDeselected"},decls:2,vars:1,consts:[[1,"p-2"],[3,"collapsed",4,"ngFor","ngForOf"],[3,"collapsed"],["head",""],["content",""],[1,"row","align-items-center"],[1,"col-5"],[1,"col-3"],[1,"col-1"],["class","row  align-items-center",4,"ngFor","ngForOf"],[1,"col-6"],[1,"col-4"],[1,"col-2"],[3,"checked","checkedChange"]],template:function(e,t){1&e&&(r.Sb(0,"div",0),r.uc(1,F,5,1,"app-tree-node",1),r.Rb()),2&e&&(r.Bb(1),r.hc("ngForOf",t.recipes))},directives:[n.k,S.a,C],styles:[""]}),e})();var E=i("vkgz"),Z=i("lJxs"),_=i("gcYM"),$=i("5+tZ"),P=i("Kqap"),z=i("2Vo4"),L=i("XNiG"),K=i("vxfF"),G=i("psEu");function V(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",17),r.Sb(1,"div",18),r.wc(2),r.Rb(),r.Sb(3,"div",19),r.wc(4),r.Rb(),r.Sb(5,"div",20),r.Sb(6,"app-add-check",21),r.Zb("checkedChange",function(t){r.pc(e);const i=r.bc().$implicit;return r.bc(2).onOrderChecked(t,i)}),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=r.bc().$implicit;r.Bb(2),r.zc("",e.clientName," (",e.date,")"),r.Bb(2),r.zc("",e.memberItemsCount," / ",e.incompleteItemsCount,""),r.Bb(2),r.hc("checked",e.memberItemsCount>0)}}function H(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",17),r.Sb(1,"div",18),r.wc(2),r.Rb(),r.Sb(3,"div",19),r.wc(4),r.Rb(),r.Sb(5,"div",20),r.Sb(6,"app-add-check",21),r.Zb("checkedChange",function(i){r.pc(e);const n=t.$implicit,c=r.bc(2).$implicit;return r.bc(2).onItemChecked(i,n,c)}),r.Rb(),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit;r.Bb(2),r.yc(" ",e.recipeName," "),r.Bb(2),r.zc(" ",e.memberAmount," / ",e.incompleteAmount," "),r.Bb(2),r.hc("checked",e.memberAmount>0)}}function q(e,t){if(1&e&&r.uc(0,H,7,4,"div",22),2&e){const e=r.bc().$implicit;r.hc("ngForOf",e.items)}}function J(e,t){1&e&&(r.Sb(0,"app-tree-node"),r.uc(1,V,7,5,"ng-template",null,15,r.vc),r.uc(3,q,1,1,"ng-template",null,16,r.vc),r.Rb())}function Q(e,t){if(1&e){const e=r.Tb();r.Qb(0,12),r.Sb(1,"cdk-virtual-scroll-viewport",13),r.Zb("scrolledIndexChange",function(i){r.pc(e);const n=t.ngIf;return r.bc().nextBatch(i,n.length)}),r.uc(2,J,5,0,"app-tree-node",14),r.Rb(),r.Pb()}if(2&e){const e=t.ngIf;r.Bb(1),r.hc("itemSize",200),r.Bb(1),r.hc("cdkVirtualForOf",e)}}let X=(()=>{class e{constructor(e){this.ordersClient=e,this.batch=10,this.theEnd=!1,this.offset=new z.a(0),this.orderSelected=new r.n,this.itemsDisplayedSubject=new L.a,this.itemsDisplayedObservable=this.itemsDisplayedSubject.asObservable()}ngOnInit(){this.reset()}getBatch(e){return this.ordersClient.searchForMixing(this.from,this.to,this.clientName,this.recipeName,e,this.batch).pipe(Object(E.a)(e=>this.theEnd=!e.hasMore),Object(Z.a)(e=>e.content.map(e=>new y(e,this.mixingBatchMembersByOrderId.get(e.order.id)))))}nextBatch(e,t){this.theEnd||this.viewport.getRenderedRange().end===this.viewport.getDataLength()&&this.offset.next(t)}filterChange(){this.reset()}onItemChecked(e,t,i){e?(i.member?i.member.items=i.member.items.filter(e=>e.recipeId!==t.recipeId):i.member=v(i.orderPart),i.member.items.push(new s.i({recipeId:t.recipeId,amount:t.incompleteAmount}))):i.member.items=i.member.items.filter(e=>e.recipeId!==t.recipeId);const n=new y(i.orderPart,i.member);this.itemsDisplayed[this.itemsDisplayed.indexOf(i)]=n,this.itemsDisplayedSubject.next([...this.itemsDisplayed]),this.orderSelected.emit(n)}onOrderChecked(e,t){var i;t.member=e?new s.j({orderId:(i=t.orderPart).order.id,items:i.incompleteItems.map(e=>new s.i({recipeId:e.recipe.id,amount:e.amount}))}):v(t.orderPart);const n=new y(t.orderPart,t.member);this.itemsDisplayed[this.itemsDisplayed.indexOf(t)]=n,this.itemsDisplayedSubject.next([...this.itemsDisplayed]),this.orderSelected.emit(n)}reset(){this.offset=new z.a(0),this.offset.pipe(Object(_.a)(500),Object($.b)(e=>this.getBatch(e)),Object(P.a)((e,t)=>e.concat(t),[])).pipe(Object(E.a)(e=>this.itemsDisplayed=e),Object(E.a)(e=>this.itemsDisplayedSubject.next(e))).subscribe(),this.offset.next(0)}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(s.p))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-select-orders"]],viewQuery:function(e,t){if(1&e&&r.Bc(K.c,1),2&e){let e;r.mc(e=r.ac())&&(t.viewport=e.first)}},inputs:{mixingBatchMembersByOrderId:"mixingBatchMembersByOrderId",batchChanged:"batchChanged"},outputs:{orderSelected:"orderSelected"},decls:25,vars:13,consts:[["type","info"],[1,"form-group","col-lg-6"],["for","from",1,"form-label"],["id","from","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","to",1,"form-label"],["id","to","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","clientName",1,"form-label"],["id","clientName","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","recipeName",1,"form-label"],["id","recipeName","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"card","bg-primary","p-2"],["style","height: 80vh",4,"ngIf"],[2,"height","80vh"],[2,"height","80vh",3,"itemSize","scrolledIndexChange"],[4,"cdkVirtualFor","cdkVirtualForOf"],["head",""],["content",""],[1,"row","align-items-center"],[1,"col-6"],[1,"col-5"],[1,"col-1"],[3,"checked","checkedChange"],["class","row  align-items-center",4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.Sb(0,"alert",0),r.wc(1,"Keres\xe9s kisz\xe1ll\xedt\xe1si d\xe1tum szerint t\xf3l/ig"),r.Nb(2,"br"),r.Sb(3,"div"),r.Sb(4,"div",1),r.Sb(5,"label",2),r.wc(6,"Kisz\xe1ll\xedt\xe1s d\xe1tuma: "),r.Rb(),r.Sb(7,"input",3),r.Zb("ngModelChange",function(e){return t.from=e,t.filterChange()}),r.cc(8,"date"),r.Rb(),r.Rb(),r.Sb(9,"div",1),r.Sb(10,"label",4),r.wc(11," - "),r.Rb(),r.Sb(12,"input",5),r.Zb("ngModelChange",function(e){return t.to=e,t.filterChange()}),r.cc(13,"date"),r.Rb(),r.Rb(),r.Sb(14,"div",1),r.Sb(15,"label",6),r.wc(16," Fagyiz\xf3: "),r.Rb(),r.Sb(17,"input",7),r.Zb("ngModelChange",function(){return t.filterChange()})("ngModelChange",function(e){return t.clientName=e}),r.Rb(),r.Rb(),r.Sb(18,"div",1),r.Sb(19,"label",8),r.wc(20," Recept: "),r.Rb(),r.Sb(21,"input",9),r.Zb("ngModelChange",function(){return t.filterChange()})("ngModelChange",function(e){return t.recipeName=e}),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(22,"div",10),r.uc(23,Q,3,2,"ng-container",11),r.cc(24,"async"),r.Rb()),2&e&&(r.Bb(7),r.hc("ngModel",r.ec(8,5,t.from,"yyyy-MM-dd")),r.Bb(5),r.hc("ngModel",r.ec(13,8,t.to,"yyyy-MM-dd")),r.Bb(5),r.hc("ngModel",t.clientName),r.Bb(4),r.hc("ngModel",t.recipeName),r.Bb(2),r.hc("ngIf",r.dc(24,11,t.itemsDisplayedObservable)))},directives:[G.a,o.a,o.d,o.g,n.l,K.c,K.a,K.b,S.a,C,n.k],pipes:[n.e,n.b],styles:[""]}),e})();function U(e,t){if(1&e){const e=r.Tb();r.Sb(0,"app-select-orders",15),r.Zb("orderSelected",function(t){return r.pc(e),r.bc().orderSelected(t)}),r.Rb()}if(2&e){const e=r.bc();r.hc("mixingBatchMembersByOrderId",e.mixingBatchMembersByOrderId)}}const W=function(e){return{"table-warning":e}};function Y(e,t){if(1&e&&(r.Sb(0,"tr",21),r.Sb(1,"td"),r.wc(2),r.Rb(),r.Sb(3,"td"),r.wc(4),r.Rb(),r.Sb(5,"td"),r.wc(6),r.Rb(),r.Rb()),2&e){const e=t.$implicit;r.hc("ngClass",r.ic(6,W,e.amountRequired!==e.ingredient.amountOnHand)),r.Bb(2),r.xc(e.ingredient.name),r.Bb(2),r.zc("",e.amountRequired," ",e.ingredient.measurementUnit,""),r.Bb(2),r.zc("",e.ingredient.amountOnHand," ",e.ingredient.measurementUnit,"")}}function ee(e,t){if(1&e&&(r.Sb(0,"tbody"),r.uc(1,Y,7,8,"tr",20),r.Rb()),2&e){const e=r.bc(2);r.Bb(1),r.hc("ngForOf",e.ingredientList)}}function te(e,t){if(1&e&&(r.Nb(0,"div",16),r.Sb(1,"div",17),r.Sb(2,"table",18),r.Sb(3,"thead"),r.Sb(4,"tr"),r.Sb(5,"th"),r.wc(6,"Alapanyag"),r.Rb(),r.Sb(7,"th"),r.wc(8,"Sz\xfcks\xe9ges"),r.Rb(),r.Sb(9,"th"),r.wc(10,"Rakt\xe1ron"),r.Rb(),r.Rb(),r.Rb(),r.uc(11,ee,2,1,"tbody",19),r.Rb(),r.Rb()),2&e){const e=r.bc();r.Bb(11),r.hc("ngIf",e.ingredientList)}}let ie=(()=>{class e{constructor(e,t,i){this.mixingBatchesClient=e,this.router=t,this.modalService=i,this.mixingBatchMembersByOrderId=new Map,this.mixingBatchOrders=new Array,this.name="\xdaj kever\xe9s"}ngOnInit(){}orderSelected(e){e.member.items.some(e=>e.amount>0)?(this.mixingBatchMembersByOrderId.set(e.orderPart.order.id,e.member),this.mixingBatchOrders=[...this.mixingBatchOrders.filter(t=>t.orderPart.order.id!==e.orderPart.order.id),e]):(this.mixingBatchMembersByOrderId.delete(e.orderPart.order.id),this.mixingBatchOrders=this.mixingBatchOrders.filter(t=>t.orderPart.order.id!==e.orderPart.order.id))}save(){this.mixingBatchesClient.create(new s.h({name:this.name,members:this.mixingBatchOrders.map(e=>e.member)})).subscribe(e=>this.router.navigate(["/manufacturing","batch",e.id]))}openIngredientListModal(e){const t=new s.h({name:this.name,members:this.mixingBatchOrders.map(e=>e.member)});this.mixingBatchesClient.inventoryCheck(t).subscribe(t=>{this.ingredientList=t,this.ingredientListModal=this.modalService.show(e),this.ingredientListModal.onHide.subscribe(()=>this.ingredientList=void 0)})}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(s.g),r.Mb(c.b),r.Mb(a.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-create-manufacturing-batch"]],decls:20,vars:5,consts:[[1,"m-2","p-2"],[1,"d-flex","row","justify-content-end"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"btn","btn-success",3,"click"],[1,"row","m-2"],["for","name"],["id","name","placeholder","Name","type","text",1,"form-control",3,"ngModel","ngModelChange"],["heading","Keres\xe9s"],["searchTab","tab"],[3,"mixingBatchMembersByOrderId","orderSelected",4,"ngIf"],["heading","Tartalom"],[3,"mixingBatchMembersByOrderId","mixingBatchOrders","orderSelected"],["heading","\xd6sszegz\xe9s"],[3,"mixingBatchOrders","orderSelected"],["ingredientListTemplate",""],[3,"mixingBatchMembersByOrderId","orderSelected"],[1,"modal-header"],[1,"modal-body"],[1,"table","text-dark"],[4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"button",2),r.Zb("click",function(){r.pc(e);const i=r.nc(19);return t.openIngredientListModal(i)}),r.wc(3," Alapanyagok "),r.Rb(),r.Sb(4,"button",3),r.Zb("click",function(){return t.save()}),r.wc(5," Ment\xe9s "),r.Rb(),r.Rb(),r.Sb(6,"div",4),r.Sb(7,"label",5),r.wc(8,"N\xe9v: "),r.Rb(),r.Sb(9,"input",6),r.Zb("ngModelChange",function(e){return t.name=e}),r.Rb(),r.Rb(),r.Sb(10,"tabset"),r.Sb(11,"tab",7,8),r.uc(13,U,1,1,"app-select-orders",9),r.Rb(),r.Sb(14,"tab",10),r.Sb(15,"app-batch-content",11),r.Zb("orderSelected",function(e){return t.orderSelected(e)}),r.Rb(),r.Rb(),r.Sb(16,"tab",12),r.Sb(17,"app-batch-overview",13),r.Zb("orderSelected",function(e){return t.orderSelected(e)}),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.uc(18,te,12,1,"ng-template",null,14,r.vc)}if(2&e){const e=r.nc(12);r.Bb(9),r.hc("ngModel",t.name),r.Bb(4),r.hc("ngIf",e.active),r.Bb(2),r.hc("mixingBatchMembersByOrderId",t.mixingBatchMembersByOrderId)("mixingBatchOrders",t.mixingBatchOrders),r.Bb(2),r.hc("mixingBatchOrders",t.mixingBatchOrders)}},directives:[o.a,o.d,o.g,p,f,n.l,T,D,X,n.k,n.j],styles:[""]}),e})(),ne=(()=>{class e{constructor(){this.measurement="adag"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Gb({type:e,selectors:[["app-mixing-item"]],inputs:{item:"item"},decls:11,vars:4,consts:[["type","secondary"],[1,"d-flex","w-100","justify-content-between"],[1,"d-flex","align-items-center","font-s"],[1,"h3","p-2","mb-0"],[1,"h4","p-2","mb-0"],[1,""],[3,"checked","checkedChange"]],template:function(e,t){1&e&&(r.Sb(0,"alert",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.wc(3," K\xe9sz\xedts "),r.Sb(4,"span",3),r.wc(5),r.Rb(),r.wc(6),r.Sb(7,"span",4),r.wc(8),r.Rb(),r.Rb(),r.Sb(9,"div",5),r.Sb(10,"app-add-check",6),r.Zb("checkedChange",function(e){return t.item.completed=e}),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.Bb(5),r.yc(" ",t.item.amount," "),r.Bb(1),r.yc(" ",t.measurement," "),r.Bb(2),r.yc(" ",t.item.recipeName,""),r.Bb(2),r.hc("checked",t.item.completed))},directives:[G.a,C],styles:[""]}),e})();function ce(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",2),r.Sb(1,"h2"),r.wc(2),r.Rb(),r.Sb(3,"button",3),r.Zb("click",function(){return r.pc(e),r.bc().onSave()}),r.wc(4,"Ment\xe9s"),r.Rb(),r.Rb()}if(2&e){const e=r.bc();r.Bb(2),r.xc(e.batch.name)}}function se(e,t){if(1&e&&(r.Sb(0,"div"),r.Nb(1,"app-mixing-item",5),r.Rb()),2&e){const e=t.$implicit;r.Bb(1),r.hc("item",e)}}function re(e,t){if(1&e&&(r.Sb(0,"div"),r.uc(1,se,2,1,"div",4),r.Rb()),2&e){const e=r.bc();r.Bb(1),r.hc("ngForOf",e.items)}}function ae(e,t){if(1&e){const e=r.Tb();r.Sb(0,"div",8),r.Zb("click",function(){r.pc(e);const i=t.$implicit;return r.bc(2).select(i)}),r.Sb(1,"button",9),r.wc(2),r.Rb(),r.Rb()}if(2&e){const e=t.$implicit;r.Bb(2),r.xc(e.name)}}function oe(e,t){if(1&e){const e=r.Tb();r.Qb(0,5),r.Sb(1,"cdk-virtual-scroll-viewport",6),r.Zb("scrolledIndexChange",function(i){r.pc(e);const n=t.ngIf;return r.bc().nextBatch(i,n.length)}),r.uc(2,ae,3,1,"div",7),r.Rb(),r.Pb()}if(2&e){const e=t.ngIf;r.Bb(2),r.hc("cdkVirtualForOf",e)}}const be=[{path:"create-batch",component:ie},{path:"batch/:id",component:(()=>{class e{constructor(e,t){this.activatedRoute=e,this.mixingBatchClient=t,e.params.pipe(Object($.a)(e=>t.get(e.id)),Object(E.a)(e=>this.batch=e),Object(E.a)(e=>this.mapToItems(e))).subscribe()}mapToItems(e){const t=new Map;e.members.forEach(e=>{e.items.forEach(e=>{t.has(e.recipe.id)||(t.set(e.recipe.id,{recipeId:e.recipe.id,recipeName:e.recipe.name,amount:0,completed:!1}),t.get(e.recipe.id).amount+=e.amount)})}),this.items=[...t.values()]}ngOnInit(){}onSave(){this.save().subscribe()}save(){return this.mixingBatchClient.administerAbsolute(this.batch.id,this.batch.members.map(e=>new s.j({orderId:e.order.id,items:e.items.map(e=>new s.i({amount:e.amount,recipeId:e.recipe.id}))}))).pipe()}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(c.a),r.Mb(s.g))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-mixing"]],decls:2,vars:2,consts:[["class","d-flex row justify-content-between m-2",4,"ngIf"],[4,"ngIf"],[1,"d-flex","row","justify-content-between","m-2"],[1,"btn","btn-success",3,"click"],[4,"ngFor","ngForOf"],[3,"item"]],template:function(e,t){1&e&&(r.uc(0,ce,5,1,"div",0),r.uc(1,re,2,1,"div",1)),2&e&&(r.hc("ngIf",t.batch),r.Bb(1),r.hc("ngIf",t.items))},directives:[n.l,n.k,ne],styles:[""]}),e})()},{path:"batch",component:(()=>{class e{constructor(e,t){this.mixingBatchClient=e,this.router=t,this.batch=20,this.theEnd=!1,this.offset=new z.a(0),this.canAdd=!0,this.reset()}getBatch(e){return this.mixingBatchClient.list(e,this.batch).pipe(Object(E.a)(e=>this.theEnd=!e.hasMore),Object(Z.a)(e=>e.content))}nextBatch(e,t){this.theEnd||this.viewport.getRenderedRange().end===this.viewport.getDataLength()&&this.offset.next(t)}ngOnInit(){}select(e){this.router.navigate(["/manufacturing","batch",e.id]).then()}onSearchTextChange(e){this.reset()}reset(){this.selectedItem=null;const e=this.offset.pipe(Object(_.a)(500),Object($.b)(e=>this.getBatch(e)),Object(P.a)((e,t)=>e.concat(t),[]));this.items=e.pipe()}}return e.\u0275fac=function(t){return new(t||e)(r.Mb(s.g),r.Mb(c.b))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-mixing-list"]],viewQuery:function(e,t){if(1&e&&r.Bc(K.c,1),2&e){let e;r.mc(e=r.ac())&&(t.viewport=e.first)}},decls:6,vars:3,consts:[[1,"d-flex","row","flex-row-reverse","m-2"],[1,"col-lg-12","p-2"],[1,"card"],[1,"picklist-viewport","card","bg-light"],["class","picklist-viewport",4,"ngIf"],[1,"picklist-viewport"],["itemSize","50",1,"picklist-viewport",3,"scrolledIndexChange"],["class","example-item auto m-1",3,"click",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-item","auto","m-1",3,"click"],[1,"btn","btn-primary","w-100"]],template:function(e,t){1&e&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"div",3),r.uc(4,oe,3,1,"ng-container",4),r.cc(5,"async"),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&e&&(r.Bb(4),r.hc("ngIf",r.dc(5,1,t.items)))},directives:[n.l,K.c,K.a,K.b],pipes:[n.b],styles:[".picklist-viewport[_ngcontent-%COMP%]{height:90vh;width:100%}"]}),e})()}];var de=i("PCNd");let le=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(t){return new(t||e)},imports:[[n.c,c.d.forChild(be),G.b,w.c,g,de.a,o.b,K.d,K.d,K.d,K.d,K.d,K.d,K.d,K.d]]}),e})()}}]);