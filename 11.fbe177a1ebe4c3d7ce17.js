(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+p+5":function(e,t,n){"use strict";n.r(t),n.d(t,"OrderModule",function(){return U});var c=n("ofXK"),i=n("tyNb"),r=n("20UA"),o=n("vkgz"),a=n("fXoL"),d=n("wAQb"),b=n("3Pt+"),s=n("HDdC"),l=n("5+tZ"),m=n("lJxs"),p=n("qCdp"),u=n("6NWb");function h(e,t){if(1&e){const e=a.Ub();a.Tb(0,"div",1),a.Tb(1,"div",13),a.Cc(2),a.Sb(),a.Tb(3,"div",14),a.Cc(4),a.Sb(),a.Tb(5,"div",15),a.Cc(6),a.Sb(),a.Tb(7,"div",16),a.Tb(8,"button",17),a.ac("click",function(){a.vc(e);const n=t.$implicit;return a.ec().removeItem(n)}),a.Ob(9,"fa-icon",18),a.Sb(),a.Sb(),a.Sb()}if(2&e){const e=t.$implicit,n=a.ec();a.Bb(2),a.Dc(e.recipe.name),a.Bb(2),a.Fc("",e.amount," ",n.measurement,""),a.Bb(2),a.Ec(" ",e.recipe.pricePerUnit*e.amount," Ft ")}}let g=(()=>{class e{constructor(e){this.recipeClient=e,this.measurement="adag",this.orderItemsChange=new a.n,this.orderItems=[],this.recipes=new s.a(e=>{e.next(this.asyncRecipeName)}).pipe(Object(l.b)(e=>this.getRecipesAsObservable(e)))}get totalPrice(){return this.orderItems.reduce((e,t)=>e+t.amount*t.recipe.pricePerUnit,0)}get totalAmount(){return this.orderItems.reduce((e,t)=>e+t.amount,0)}ngOnInit(){}addItem(){this.orderItems.find(e=>e.recipe.id===this.recipeSelected.id)?this.orderItems.find(e=>e.recipe.id===this.recipeSelected.id).amount+=this.amount:this.orderItems.push(new r.v({recipe:this.recipeSelected,amount:this.amount})),this.asyncRecipeName="",this.amount=void 0,this.recipeSelected=null,this.orderItemsChange.emit(this.orderItems)}onRecipeSelected(e){this.recipeSelected=e.item}removeItem(e){this.orderItems=this.orderItems.filter(t=>t.recipe.id!==e.recipe.id),this.orderItemsChange.emit(this.orderItems)}getRecipesAsObservable(e){return this.recipeClient.list(0,10,e).pipe(Object(m.a)(e=>e.content))}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(r.z))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-order-items"]],outputs:{orderItemsChange:"orderItemsChange"},decls:25,vars:12,consts:[[1,"card"],[1,"container","row","align-items-center"],[1,"col-lg-6","p-2"],["for","client",1,"form-label"],["id","client","placeholder","Keres\xe9s...","typeaheadOptionField","name",1,"form-control",3,"ngModel","isAnimated","typeaheadAsync","typeahead","typeaheadOnSelect","ngModelChange"],[1,"col-lg-3","col-5","p-2"],["for","amount",1,"form-label"],["id","amount","type","number",1,"form-control",3,"ngModel","min","ngModelChange"],[1,"col-lg-2","col-5","p-2"],[1,"col-lg-1","col-2","p-2"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["icon","plus"],["class","container row align-items-center",4,"ngFor","ngForOf"],[1,"col-lg-6","col-12","pl-4","text-greater"],[1,"col-lg-3","col-5","pl-4","text-greater"],[1,"col-lg-2","col-5"],[1,"col-lg-1","col-2"],["type","button",1,"btn","btn-dark",3,"click"],["icon","trash"]],template:function(e,t){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"label",3),a.Cc(4,"Recept: "),a.Sb(),a.Tb(5,"input",4),a.ac("typeaheadOnSelect",function(e){return t.onRecipeSelected(e)})("ngModelChange",function(e){return t.asyncRecipeName=e}),a.Sb(),a.Sb(),a.Tb(6,"div",5),a.Tb(7,"label",6),a.Cc(8,"Mennyis\xe9g: "),a.Sb(),a.Tb(9,"input",7),a.ac("ngModelChange",function(e){return t.amount=e}),a.Sb(),a.Sb(),a.Tb(10,"div",8),a.Cc(11),a.Sb(),a.Tb(12,"div",9),a.Tb(13,"button",10),a.ac("click",function(){return t.addItem()}),a.Ob(14,"fa-icon",11),a.Sb(),a.Sb(),a.Sb(),a.Ob(15,"hr"),a.Ac(16,h,10,4,"div",12),a.Ob(17,"hr"),a.Tb(18,"div",1),a.Tb(19,"div",13),a.Cc(20,"\xd6sszesen:"),a.Sb(),a.Tb(21,"div",14),a.Cc(22),a.Sb(),a.Tb(23,"div",15),a.Cc(24),a.Sb(),a.Sb(),a.Sb()),2&e&&(a.Bb(5),a.kc("ngModel",t.asyncRecipeName)("isAnimated",!0)("typeaheadAsync",!0)("typeahead",t.recipes),a.Bb(4),a.kc("ngModel",t.amount)("min",0),a.Bb(2),a.Ec(" ",t.recipeSelected?t.recipeSelected.pricePerUnit*t.amount+" Ft":""," "),a.Bb(2),a.kc("disabled",!(t.recipeSelected&&t.amount)),a.Bb(3),a.kc("ngForOf",t.orderItems),a.Bb(6),a.Fc("",t.totalAmount," ",t.measurement,""),a.Bb(2),a.Ec(" ",t.totalPrice," Ft "))},directives:[b.b,b.h,b.j,p.a,b.k,u.a,c.k],styles:[""]}),e})(),f=(()=>{class e{constructor(e,t){this.ordersClient=e,this.router=t}ngOnInit(){}onOrderItemsChange(e){this.orderItems=e}placeOrder(){const e=new r.t({id:void 0,orderCreated:new Date(Date.now()),client:this.selectedClient,requestedDate:new Date(Date.parse(this.date)),items:this.orderItems,orderState:r.x.Active});console.log(e),this.ordersClient.placeOrder(new r.r({items:[...e.items.map(e=>new r.s({recipeId:e.recipe.id,amount:e.amount}))],clientId:e.client.id,requestedDate:e.requestedDate})).pipe(Object(o.a)(()=>this.router.navigate(["/orders"]).then())).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(r.y),a.Nb(i.b))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-create-order"]],decls:15,vars:3,consts:[[1,"container","justify-content-center"],[1,"d-flex","flex-column"],[1,""],[3,"selectedClient","selectedClientChange"],[1,"mb-2"],["for","date",1,"form-label"],["id","date","type","date",1,"form-control",3,"ngModel","ngModelChange"],[3,"orderItemsChange"],[1,"d-flex","justify-content-end"],[1,"btn","btn-success",3,"disabled","click"],[1,"btn","btn-danger","ml-2"]],template:function(e,t){1&e&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"app-client-select",3),a.ac("selectedClientChange",function(e){return t.selectedClient=e}),a.Sb(),a.Sb(),a.Tb(4,"div",4),a.Tb(5,"label",5),a.Cc(6,"Kisz\xe1ll\xedt\xe1s d\xe1tuma: "),a.Sb(),a.Tb(7,"input",6),a.ac("ngModelChange",function(e){return t.date=e}),a.Sb(),a.Sb(),a.Tb(8,"div",4),a.Tb(9,"app-order-items",7),a.ac("orderItemsChange",function(e){return t.onOrderItemsChange(e)}),a.Sb(),a.Sb(),a.Tb(10,"div",8),a.Tb(11,"button",9),a.ac("click",function(){return t.placeOrder()}),a.Cc(12," Rendel\xe9s lead\xe1sa "),a.Sb(),a.Tb(13,"button",10),a.Cc(14,"M\xe9gse"),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&e&&(a.Bb(3),a.kc("selectedClient",t.selectedClient),a.Bb(4),a.kc("ngModel",t.date),a.Bb(4),a.kc("disabled",!t.date||!t.orderItems||0==t.orderItems.length||!t.selectedClient))},directives:[d.a,b.b,b.h,b.j,g],styles:[""]}),e})();var S=n("vxfF"),v=n("2Vo4"),C=n("XNiG"),T=n("gcYM"),y=n("Kqap"),I=n("psEu"),k=n("FrXe");const O=function(e){return[e]};function M(e,t){if(1&e&&(a.Tb(0,"div",18),a.Tb(1,"div",19),a.Tb(2,"a",20),a.Cc(3),a.fc(4,"date"),a.Sb(),a.Sb(),a.Tb(5,"div",21),a.Cc(6),a.Sb(),a.Tb(7,"div",21),a.Cc(8),a.Sb(),a.Sb()),2&e){const e=a.ec().$implicit,t=a.ec(2);a.Bb(2),a.kc("routerLink",a.oc(8,O,e.id)),a.Bb(1),a.Fc("",e.client.name," (",a.hc(4,5,e.requestedDate,"yyyy-MM-dd"),")"),a.Bb(3),a.Ec("",e.items.length," recept"),a.Bb(2),a.Ec(" ",t.orderStatus[e.orderState]," ")}}function B(e,t){if(1&e&&(a.Tb(0,"div",18),a.Tb(1,"div",19),a.Cc(2),a.Sb(),a.Tb(3,"div",23),a.Cc(4),a.Sb(),a.Ob(5,"div",24),a.Sb()),2&e){const e=t.$implicit;a.Bb(2),a.Ec(" ",e.recipe.name," "),a.Bb(2),a.Ec(" ",e.amount," adag ")}}function w(e,t){if(1&e&&a.Ac(0,B,6,2,"div",22),2&e){const e=a.ec().$implicit;a.kc("ngForOf",e.items)}}function x(e,t){1&e&&(a.Tb(0,"app-tree-node"),a.Ac(1,M,9,10,"ng-template",null,16,a.Bc),a.Ac(3,w,1,1,"ng-template",null,17,a.Bc),a.Sb())}function j(e,t){if(1&e){const e=a.Ub();a.Rb(0,13),a.Tb(1,"cdk-virtual-scroll-viewport",14),a.ac("scrolledIndexChange",function(n){a.vc(e);const c=t.ngIf;return a.ec().nextBatch(n,c.length)}),a.Ac(2,x,5,0,"app-tree-node",15),a.Sb(),a.Qb()}if(2&e){const e=t.ngIf;a.Bb(1),a.kc("itemSize",200),a.Bb(1),a.kc("cdkVirtualForOf",e)}}let A=(()=>{class e{constructor(e){this.ordersClient=e,this.orderStatus=["T\xf6r\xf6lve","V\xe1rakoz\xf3","Folyamatban","El\u0151k\xe9sz\xedtve","Kisz\xe1ll\xedtva"],this.batch=10,this.theEnd=!1,this.offset=new v.a(0),this.orderSelected=new a.n,this.itemsDisplayedSubject=new C.a,this.itemsDisplayedObservable=this.itemsDisplayedSubject.asObservable()}ngOnInit(){this.reset()}getBatch(e){return this.ordersClient.search(this.from,this.to,this.clientName,this.recipeName,e,this.batch).pipe(Object(o.a)(e=>this.theEnd=!e.hasMore),Object(m.a)(e=>e.content))}nextBatch(e,t){this.theEnd||this.viewport.getRenderedRange().end===this.viewport.getDataLength()&&this.offset.next(t)}filterChange(){this.reset()}reset(){this.offset=new v.a(0),this.offset.pipe(Object(T.a)(500),Object(l.b)(e=>this.getBatch(e)),Object(y.a)((e,t)=>e.concat(t),[])).pipe(Object(o.a)(e=>this.itemsDisplayed=e),Object(o.a)(e=>this.itemsDisplayedSubject.next(e))).subscribe(),this.offset.next(0)}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(r.y))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-list-orders"]],viewQuery:function(e,t){if(1&e&&a.Jc(S.c,1),2&e){let e;a.sc(e=a.bc())&&(t.viewport=e.first)}},outputs:{orderSelected:"orderSelected"},decls:23,vars:13,consts:[["type","info"],[1,"row","d-flex"],[1,"form-group","col-lg-6"],["for","from",1,"form-label"],["id","from","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","to",1,"form-label"],["id","to","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","clientName",1,"form-label"],["id","clientName","type","text",1,"form-control",3,"ngModel","ngModelChange"],["for","recipeName",1,"form-label"],["id","recipeName","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"card","bg-primary","p-2"],["style","height: 80vh",4,"ngIf"],[2,"height","80vh"],[2,"height","80vh",3,"itemSize","scrolledIndexChange"],[4,"cdkVirtualFor","cdkVirtualForOf"],["head",""],["content",""],[1,"row","align-items-center"],[1,"col-6"],[1,"text-dark",3,"routerLink"],[1,"col-3"],["class","row  align-items-center",4,"ngFor","ngForOf"],[1,"col-5"],[1,"col-1"]],template:function(e,t){1&e&&(a.Tb(0,"alert",0),a.Tb(1,"div",1),a.Tb(2,"div",2),a.Tb(3,"label",3),a.Cc(4,"Kisz\xe1ll\xedt\xe1s d\xe1tuma: "),a.Sb(),a.Tb(5,"input",4),a.ac("ngModelChange",function(e){return t.from=e,t.filterChange()}),a.fc(6,"date"),a.Sb(),a.Sb(),a.Tb(7,"div",2),a.Tb(8,"label",5),a.Cc(9," - "),a.Sb(),a.Tb(10,"input",6),a.ac("ngModelChange",function(e){return t.to=e,t.filterChange()}),a.fc(11,"date"),a.Sb(),a.Sb(),a.Tb(12,"div",2),a.Tb(13,"label",7),a.Cc(14," Fagyiz\xf3: "),a.Sb(),a.Tb(15,"input",8),a.ac("ngModelChange",function(){return t.filterChange()})("ngModelChange",function(e){return t.clientName=e}),a.Sb(),a.Sb(),a.Tb(16,"div",2),a.Tb(17,"label",9),a.Cc(18," Recept: "),a.Sb(),a.Tb(19,"input",10),a.ac("ngModelChange",function(){return t.filterChange()})("ngModelChange",function(e){return t.recipeName=e}),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Tb(20,"div",11),a.Ac(21,j,3,2,"ng-container",12),a.fc(22,"async"),a.Sb()),2&e&&(a.Bb(5),a.kc("ngModel",a.hc(6,5,t.from,"yyyy-MM-dd")),a.Bb(5),a.kc("ngModel",a.hc(11,8,t.to,"yyyy-MM-dd")),a.Bb(5),a.kc("ngModel",t.clientName),a.Bb(4),a.kc("ngModel",t.recipeName),a.Bb(2),a.kc("ngIf",a.gc(22,11,t.itemsDisplayedObservable)))},directives:[I.a,b.b,b.h,b.j,c.l,S.c,S.a,S.b,k.a,i.d,c.k],pipes:[c.e,c.b],styles:[""]}),e})();var F=n("K3ix");let N=(()=>{class e{constructor(e){this.orderClient=e,this.completionSubject=new C.a,this.completionObservable=this.completionSubject.asObservable()}ngOnInit(){this.amount=this.orderItem.pendingAmount}submit(){this.orderClient.cancelItems(new r.w({orderId:this.orderId,recipeId:this.orderItem.recipe.id,amount:this.amount})).subscribe(()=>{this.completionSubject.next()})}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(r.y))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-order-item-cancellation-modal"]],decls:13,vars:8,consts:[[1,"modal-header"],[1,"modal-title"],[1,"modal-subtitle"],[1,"modal-body"],["for","amount"],["id","amount","type","number",1,"form-control",3,"ngModel","min","max","ngModelChange"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.Tb(0,"div",0),a.Tb(1,"h2",1),a.Cc(2,"T\xe9tel lemond\xe1sa"),a.Sb(),a.Tb(3,"h3",2),a.Cc(4),a.Sb(),a.Sb(),a.Tb(5,"div",3),a.Tb(6,"pre"),a.Cc(7),a.Sb(),a.Tb(8,"label",4),a.Cc(9,"Lemondott mennyis\xe9g"),a.Sb(),a.Tb(10,"input",5),a.ac("ngModelChange",function(e){return t.amount=e}),a.Sb(),a.Tb(11,"button",6),a.ac("click",function(){return t.submit()}),a.Cc(12,"Lemond\xe1s"),a.Sb(),a.Sb()),2&e&&(a.Bb(4),a.Dc(t.orderItem.recipe.name),a.Bb(3),a.Hc("    \xd6sszes rendelve: ",t.orderItem.amount," adag\n    Gy\xe1rt\xe1sban: ",t.orderItem.selectedMixingAmount," adag\n    Lemondva (eddig): ",t.orderItem.cancelledAmount," adag\n    H\xe1tral\xe9v\u0151 ",t.orderItem.pendingAmount," adag\n  "),a.Bb(3),a.kc("ngModel",t.amount)("min",0)("max",t.orderItem.pendingAmount))},directives:[b.k,b.b,b.h,b.j],styles:[""]}),e})(),D=(()=>{class e{constructor(e){this.modalService=e}cancelOrderItemDialog(e,t){const n=this.modalService.show(N,{initialState:{orderItem:t,orderId:e}});return n.content.completionObservable.pipe(Object(o.a)(e=>n.hide()))}}return e.\u0275fac=function(t){return new(t||e)(a.Xb(F.a))},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var E=n("m1XX");function R(e,t){if(1&e){const e=a.Ub();a.Tb(0,"button",13),a.ac("click",function(){return a.vc(e),a.ec(2).cancelOrder()}),a.Cc(1,"Lemond\xe1s"),a.Sb()}}function z(e,t){if(1&e){const e=a.Ub();a.Tb(0,"div",7),a.Tb(1,"div",8),a.Cc(2),a.Sb(),a.Tb(3,"div",9),a.Cc(4),a.Sb(),a.Tb(5,"div",9),a.Cc(6),a.Sb(),a.Tb(7,"div",9),a.Cc(8),a.Sb(),a.Tb(9,"div",14),a.Tb(10,"button",15),a.ac("click",function(){a.vc(e);const n=t.$implicit;return a.ec(2).cancelItem(n)}),a.Ob(11,"fa-icon",16),a.Sb(),a.Sb(),a.Sb()}if(2&e){const e=t.$implicit;a.Bb(2),a.Dc(e.recipe.name),a.Bb(2),a.Ec("",e.amount," adag"),a.Bb(2),a.Ec("",e.cancelledAmount," adag"),a.Bb(2),a.Ec("",e.mixedAmount," adag")}}function L(e,t){if(1&e&&(a.Tb(0,"div"),a.Tb(1,"div",7),a.Tb(2,"div",17),a.Tb(3,"a",18),a.Cc(4),a.fc(5,"date"),a.Sb(),a.Sb(),a.Tb(6,"div",19),a.Cc(7),a.Sb(),a.Sb(),a.Sb()),2&e){const e=t.$implicit;a.Bb(3),a.kc("routerLink","/manufacturing/batch/"+e.mixingBatchId),a.Bb(1),a.Fc("",e.name,"(",a.hc(5,4,e.created,"yyyy-MM-dd"),")"),a.Bb(3),a.Ec("",e.batchCompleted," adag")}}function H(e,t){if(1&e&&(a.Tb(0,"div"),a.Tb(1,"div",1),a.Tb(2,"h2"),a.Cc(3),a.Sb(),a.Ac(4,R,2,0,"button",2),a.Sb(),a.Tb(5,"h6"),a.Cc(6),a.fc(7,"date"),a.Sb(),a.Tb(8,"div",3),a.Tb(9,"div",4),a.Tb(10,"button",5),a.Ob(11,"fa-icon",6),a.Sb(),a.Sb(),a.Tb(12,"div",7),a.Tb(13,"div",8),a.Cc(14,"Recept"),a.Sb(),a.Tb(15,"div",9),a.Cc(16,"Rendel\xe9s"),a.Sb(),a.Tb(17,"div",9),a.Cc(18,"T\xf6r\xf6lve"),a.Sb(),a.Tb(19,"div",9),a.Cc(20,"Elk\xe9sz\xfclt"),a.Sb(),a.Ob(21,"div",10),a.Sb(),a.Ac(22,z,12,4,"div",11),a.Sb(),a.Tb(23,"div"),a.Cc(24," Kapcsol\xf3d\xf3 kever\xe9sek: "),a.Ac(25,L,8,7,"div",12),a.Sb(),a.Sb()),2&e){const e=a.ec();a.Bb(3),a.Dc(e.order.client.name),a.Bb(1),a.kc("ngIf",1==e.order.orderState),a.Bb(2),a.Dc(a.hc(7,5,e.order.requestedDate,"yyyy-MM-dd")),a.Bb(16),a.kc("ngForOf",e.order.items),a.Bb(3),a.kc("ngForOf",e.order.associatedBatches)}}const K=[{path:"",component:A},{path:"place-order",component:f},{path:":id",component:(()=>{class e{constructor(e,t,n,c){this.ordersClient=e,this.modalService=n,this.cancellationService=c,t.params.pipe(Object(l.a)(t=>e.getDetails(t.id)),Object(o.a)(e=>this.order=e)).subscribe()}ngOnInit(){}openPrintModal(e){this.printModal=this.modalService.show(e),this.printModal.onHide.subscribe(()=>this.print=void 0)}cancelOrder(){this.ordersClient.cancelOrder(this.order.id).subscribe()}cancelItem(e){this.cancellationService.cancelOrderItemDialog(this.order.id,e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(r.y),a.Nb(i.a),a.Nb(F.a),a.Nb(D))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-order-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"d-flex","justify-content-between"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"col"],[1,"d-flex","justify-content-end","align-items-center"],["printTitle","cimkek","printSectionId","printModal","ngxPrint","",1,"btn","btn-light","float-right"],["icon","print"],[1,"row","align-items-center"],[1,"col-6","p-2","text-greater"],[1,"col-1","p-2","text-greater"],[1,"col-3","p-2"],["class","row align-items-center",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger",3,"click"],[1,"col-3","m-0"],[1,"btn","btn-dark",3,"click"],["icon","trash"],[1,"col-6","p-2","pl-4","text-greater"],[3,"routerLink"],[1,"col-3","p-2","pl-4","text-greater"]],template:function(e,t){1&e&&a.Ac(0,H,26,8,"div",0),2&e&&a.kc("ngIf",t.order)},directives:[c.l,E.a,u.a,c.k,i.d],pipes:[c.e],styles:[""]}),e})()}];var P=n("PCNd");let U=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)},imports:[[c.c,i.e.forChild(K),P.a,b.f,p.b,u.c,S.d,I.b,E.b]]}),e})()}}]);