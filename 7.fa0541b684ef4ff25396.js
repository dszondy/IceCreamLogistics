(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{R90S:function(e,t,r){"use strict";r.r(t),r.d(t,"DeliveryModule",function(){return D});var i=r("ofXK"),n=r("tyNb"),c=r("PCNd"),d=r("20UA"),s=r("fXoL"),o=r("3Pt+"),b=r("44PX"),l=r("vxfF"),a=r("2Vo4"),h=r("XNiG"),f=r("vkgz"),p=r("lJxs"),u=r("gcYM"),v=r("5+tZ"),m=r("Kqap"),g=r("psEu"),y=r("FrXe"),R=r("fU1k");function S(e,t){if(1&e){const e=s.Tb();s.Sb(0,"div",14),s.Sb(1,"div",15),s.xc(2),s.Rb(),s.Sb(3,"div",16),s.xc(4),s.Rb(),s.Sb(5,"div",17),s.Sb(6,"app-add-check",18),s.Zb("checkedChange",function(t){s.qc(e);const r=s.bc().$implicit;return s.bc(2).onOrderChecked(t,r)}),s.Rb(),s.Rb(),s.Rb()}if(2&e){const e=s.bc().$implicit,t=s.bc(2);s.Bb(2),s.Ac("",e.client.name," (",e.requestedDate,")"),s.Bb(2),s.yc(e.items.length),s.Bb(2),s.hc("checked",t.isOrderSelected(e))}}function w(e,t){if(1&e&&(s.Sb(0,"div",14),s.Sb(1,"div",15),s.xc(2),s.Rb(),s.Sb(3,"div",16),s.xc(4),s.Rb(),s.Nb(5,"div",17),s.Rb()),2&e){const e=t.$implicit;s.Bb(2),s.zc(" ",e.recipe.name," "),s.Bb(2),s.Ac(" ",e.mixedAmount," / ",e.amount," ")}}function O(e,t){if(1&e&&s.vc(0,w,6,3,"div",19),2&e){const e=s.bc().$implicit;s.hc("ngForOf",e.items)}}function M(e,t){1&e&&(s.Sb(0,"app-tree-node"),s.vc(1,S,7,4,"ng-template",null,12,s.wc),s.vc(3,O,1,1,"ng-template",null,13,s.wc),s.Rb())}function B(e,t){if(1&e){const e=s.Tb();s.Qb(0,9),s.Sb(1,"cdk-virtual-scroll-viewport",10),s.Zb("scrolledIndexChange",function(r){s.qc(e);const i=t.ngIf;return s.bc().nextBatch(r,i.length)}),s.vc(2,M,5,0,"app-tree-node",11),s.Rb(),s.Pb()}if(2&e){const e=t.ngIf;s.Bb(1),s.hc("itemSize",124),s.Bb(1),s.hc("cdkVirtualForOf",e)}}let x=(()=>{class e{constructor(e){this.ordersClient=e,this.batch=10,this.theEnd=!1,this.offset=new a.a(0),this.itemsDisplayedSubject=new h.a,this.itemsDisplayedObservable=this.itemsDisplayedSubject.asObservable(),this.orderAdded=new s.n,this.orderRemoved=new s.n}ngOnInit(){this.reset()}getBatch(e){return this.ordersClient.searchForDelivery(new d.r,e,this.batch).pipe(Object(f.a)(e=>this.theEnd=!e.hasMore),Object(p.a)(e=>e.content))}nextBatch(e,t){this.theEnd||this.viewport.getRenderedRange().end===this.viewport.getDataLength()&&this.offset.next(t)}filterChange(){this.reset()}onOrderChecked(e,t){e?this.orderAdded.emit(t):this.orderRemoved.emit(t)}reset(){this.offset=new a.a(0),this.offset.pipe(Object(u.a)(500),Object(v.b)(e=>this.getBatch(e)),Object(m.a)((e,t)=>e.concat(t),[])).pipe(Object(f.a)(e=>this.itemsDisplayed=e),Object(f.a)(e=>this.itemsDisplayedSubject.next(e))).subscribe(),this.offset.next(0)}isOrderSelected(e){return this.selectedOrdersById.has(e.id)}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(d.u))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-list-orders-for-delivery"]],viewQuery:function(e,t){if(1&e&&s.Dc(l.c,1),2&e){let e;s.nc(e=s.ac())&&(t.viewport=e.first)}},inputs:{selectedOrdersById:"selectedOrdersById"},outputs:{orderAdded:"orderAdded",orderRemoved:"orderRemoved"},decls:18,vars:11,consts:[["type","info"],[1,"row"],[1,"form-group","col-lg-6"],["for","from",1,"form-label"],["id","from","type","date",1,"form-control",3,"ngModel","ngModelChange"],["for","to",1,"form-label"],["id","to","type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"card","bg-primary","p-2"],["style","height: 80vh",4,"ngIf"],[2,"height","80vh"],[2,"height","80vh",3,"itemSize","scrolledIndexChange"],[4,"cdkVirtualFor","cdkVirtualForOf"],["head",""],["content",""],[1,"row","align-items-center"],[1,"col-6"],[1,"col-5"],[1,"col-1"],[3,"checked","checkedChange"],["class","row  align-items-center",4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.Sb(0,"alert",0),s.xc(1,"Keres\xe9s kisz\xe1ll\xedt\xe1si d\xe1tum szerint t\xf3l/ig"),s.Nb(2,"br"),s.Sb(3,"div",1),s.Sb(4,"div",2),s.Sb(5,"label",3),s.xc(6,"Kisz\xe1ll\xedt\xe1s d\xe1tuma: "),s.Rb(),s.Sb(7,"input",4),s.Zb("ngModelChange",function(e){return t.from=e,t.filterChange()}),s.cc(8,"date"),s.Rb(),s.Rb(),s.xc(9,"a "),s.Sb(10,"div",2),s.Sb(11,"label",5),s.xc(12," - "),s.Rb(),s.Sb(13,"input",6),s.Zb("ngModelChange",function(e){return t.to=e,t.filterChange()}),s.cc(14,"date"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(15,"div",7),s.vc(16,B,3,2,"ng-container",8),s.cc(17,"async"),s.Rb()),2&e&&(s.Bb(7),s.hc("ngModel",s.ec(8,3,t.from,"yyyy-MM-dd")),s.Bb(6),s.hc("ngModel",s.ec(14,6,t.to,"yyyy-MM-dd")),s.Bb(3),s.hc("ngIf",s.dc(17,9,t.itemsDisplayedObservable)))},directives:[g.a,o.b,o.h,o.j,i.l,l.c,l.a,l.b,y.a,R.a,i.k],pipes:[i.e,i.b],styles:[""]}),e})(),C=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-preview-batch"]],decls:2,vars:0,template:function(e,t){1&e&&(s.Sb(0,"p"),s.xc(1,"preview-batch works!"),s.Rb())},styles:[""]}),e})();function k(e,t){if(1&e){const e=s.Tb();s.Sb(0,"div",1),s.Sb(1,"div",2),s.Sb(2,"button",3),s.Zb("click",function(){return s.qc(e),s.bc().save()}),s.xc(3," Ment\xe9s "),s.Rb(),s.Rb(),s.Sb(4,"div",4),s.Sb(5,"div",5),s.Sb(6,"label",6),s.xc(7,"N\xe9v: "),s.Rb(),s.Sb(8,"input",7),s.Zb("ngModelChange",function(t){return s.qc(e),s.bc().delivery.name=t}),s.Rb(),s.Rb(),s.Sb(9,"div",8),s.Sb(10,"label",9),s.xc(11,"Kisz\xe1ll\xedt\xe1s d\xe1tuma: "),s.Rb(),s.Sb(12,"input",10),s.Zb("ngModelChange",function(t){return s.qc(e),s.bc().delivery.deliveryDate=t}),s.Rb(),s.Rb(),s.Rb(),s.Sb(13,"tabset"),s.Sb(14,"tab",11,12),s.Sb(16,"app-list-orders-for-delivery",13),s.Zb("orderAdded",function(t){return s.qc(e),s.bc().orderAdded(t)})("orderRemoved",function(t){return s.qc(e),s.bc().orderRemoved(t)}),s.Rb(),s.Rb(),s.Sb(17,"tab",14),s.Nb(18,"app-preview-batch"),s.Rb(),s.Rb(),s.Rb()}if(2&e){const e=s.bc();s.Bb(8),s.hc("ngModel",e.delivery.name),s.Bb(4),s.hc("ngModel",e.delivery.deliveryDate),s.Bb(4),s.hc("selectedOrdersById",e.selectedOrdersById)}}const I=[{path:"new",component:(()=>{class e{constructor(e,t){this.deliveryClient=t,this.selectedOrdersById=new Map,e.snapshot.params.id||(this.delivery=new d.g({name:"",deliveryDate:new Date,orders:[],id:void 0,completed:!1}))}ngOnInit(){}save(){const e=new d.h({completed:!1,id:this.delivery.id,name:this.delivery.name,deliveryDate:this.delivery.deliveryDate,orderIds:Array.from(this.selectedOrdersById.keys())});this.delivery.id?this.deliveryClient.update(e.id,e).subscribe(()=>{}):this.deliveryClient.create(e).subscribe(()=>{})}orderAdded(e){this.selectedOrdersById.set(e.id,e)}orderRemoved(e){this.selectedOrdersById.delete(e.id)}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(n.a),s.Mb(d.f))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-create-delivery-batch"]],decls:1,vars:1,consts:[["class","m-2 p-2",4,"ngIf"],[1,"m-2","p-2"],[1,"d-flex","row","justify-content-end"],[1,"btn","btn-success",3,"click"],[1,"row","mb-4"],[1,"row","p-2","col-lg-7","m-0"],["for","name"],["id","name","placeholder","Name","type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","p-2","col-5","m-0"],["for","date"],["id","date","type","date",1,"form-control",3,"ngModel","ngModelChange"],["heading","Keres\xe9s"],["searchTab","tab"],[3,"selectedOrdersById","orderAdded","orderRemoved"],["heading","R\xe9szletek"]],template:function(e,t){1&e&&s.vc(0,k,19,3,"div",0),2&e&&s.hc("ngIf",t.delivery)},directives:[i.l,o.b,o.h,o.j,b.c,b.a,x,C],styles:[""]}),e})()}];let D=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[i.c,c.a,n.d.forChild(I),o.f,b.b,l.d,g.b]]}),e})()}}]);