(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7+OI":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var r=i("HDdC");function n(t){return!!t&&(t instanceof r.a||"function"==typeof t.lift&&"function"==typeof t.subscribe)}},D0XW:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var r=i("3N8a");const n=new(i("IjjT").a)(r.a)},gcYM:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var r=i("7o/Q"),n=i("D0XW");i("zx2A");const s={leading:!0,trailing:!1};function o(t,e=n.a,i=s){return r=>r.lift(new a(t,e,i.leading,i.trailing))}class a{constructor(t,e,i,r){this.duration=t,this.scheduler=e,this.leading=i,this.trailing=r}call(t,e){return e.subscribe(new h(t,this.duration,this.scheduler,this.leading,this.trailing))}}class h extends r.a{constructor(t,e,i,r,n){super(t),this.duration=e,this.scheduler=i,this.leading=r,this.trailing=n,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(l,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function l(t){const{subscriber:e}=t;e.clearThrottle()}},vxfF:function(t,e,i){"use strict";i.d(e,"a",function(){return bt}),i.d(e,"b",function(){return kt}),i.d(e,"c",function(){return xt}),i.d(e,"d",function(){return Ot});var r=i("fXoL");function n(t,e=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}var s=i("XNiG"),o=i("LRne"),a=i("HDdC"),h=i("xgIS"),l=i("eNwd");let c=1;const d=(()=>Promise.resolve())(),u={};function f(t){return t in u&&(delete u[t],!0)}const p={setImmediate(t){const e=c++;return u[e]=!0,d.then(()=>f(e)&&t()),e},clearImmediate(t){f(t)}};var _=i("3N8a");class g extends _.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=p.setImmediate(t.flush.bind(t,null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(p.clearImmediate(e),t.scheduled=void 0)}}var m=i("IjjT");class b extends m.a{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,r=-1,n=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++r<n&&(t=e.shift()));if(this.active=!1,i){for(;++r<n&&(t=e.shift());)t.unsubscribe();throw i}}}const w=new b(g);var v=i("quSY"),S=i("7+OI"),C=i("7o/Q");class x{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new y(t,this.compare,this.keySelector))}}class y extends C.a{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:i}=this;e=i?i(t):t}catch(r){return this.destination.error(r)}let i=!1;if(this.hasKey)try{const{compare:t}=this;i=t(this.key,e)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}var k=i("D0XW"),R=i("zx2A");class O{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new z(t,this.durationSelector))}}class z extends R.b{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let i;try{const{durationSelector:e}=this;i=e(t)}catch(e){return this.destination.error(e)}const r=Object(R.c)(i,new R.a(this));!r||r.closed?this.clearThrottle():this.add(this.throttled=r)}}clearThrottle(){const{value:t,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),e&&(this.value=void 0,this.hasValue=!1,this.destination.next(t))}notifyNext(){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}var I=i("DH7j");function T(t){return!Object(I.a)(t)&&t-parseFloat(t)+1>=0}var V=i("z+Ro");function E(t){const{index:e,period:i,subscriber:r}=t;if(r.next(e),!r.closed){if(-1===i)return r.complete();t.index=e+1,this.schedule(t,i)}}function N(t,e=k.a){return i=()=>function(t=0,e,i){let r=-1;return T(e)?r=Number(e)<1?1:Number(e):Object(V.a)(e)&&(i=e),Object(V.a)(i)||(i=k.a),new a.a(e=>{const n=T(t)?t:+t-i.now();return i.schedule(E,n,{index:0,period:r,subscriber:e})})}(t,e),function(t){return t.lift(new O(i))};var i}var B=i("pLZG");function W(t){return e=>e.lift(new D(t))}class D{constructor(t){this.notifier=t}call(t,e){const i=new j(t),r=Object(R.c)(this.notifier,new R.a(i));return r&&!i.seenValue?(i.add(r),e.subscribe(i)):i}}class j extends R.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var P=i("JX91");class A{call(t,e){return e.subscribe(new F(t))}}class F extends C.a{constructor(t){super(t),this.hasPrev=!1}_next(t){let e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)}}var L=i("eIep");class M extends _.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,i=0){return null!==i&&i>0||null===i&&this.delay>0?super.requestAsyncId(t,e,i):t.flush(this)}}class H extends m.a{}const G=new H(M);var Y=i("EY2u"),K=i("z6cu");let Z=(()=>{class t{constructor(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)}toObservable(){switch(this.kind){case"N":return Object(o.a)(this.value);case"E":return Object(K.a)(this.error);case"C":return Object(Y.b)()}throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})();class X extends C.a{constructor(t,e,i=0){super(t),this.scheduler=e,this.delay=i}static dispatch(t){const{notification:e,destination:i}=t;e.observe(i),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(X.dispatch,this.delay,new U(t,this.destination)))}_next(t){this.scheduleMessage(Z.createNext(t))}_error(t){this.scheduleMessage(Z.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(Z.createComplete()),this.unsubscribe()}}class U{constructor(t,e){this.notification=t,this.destination=e}}var $=i("9ppp"),q=i("Ylt2");class J extends s.a{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){if(!this.isStopped){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift()}super.next(t)}nextTimeWindow(t){this.isStopped||(this._events.push(new Q(this._getNow(),t)),this._trimBufferThenGetEvents()),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,n=i.length;let s;if(this.closed)throw new $.a;if(this.isStopped||this.hasError?s=v.a.EMPTY:(this.observers.push(t),s=new q.a(this,t)),r&&t.add(t=new X(t,r)),e)for(let o=0;o<n&&!t.closed;o++)t.next(i[o]);else for(let o=0;o<n&&!t.closed;o++)t.next(i[o].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),s}_getNow(){return(this.scheduler||G).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,i=this._windowTime,r=this._events,n=r.length;let s=0;for(;s<n&&!(t-r[s].time<i);)s++;return n>e&&(s=Math.max(s,n-e)),s>0&&r.splice(0,s),r}}class Q{constructor(t,e){this.time=t,this.value=e}}var tt=i("ofXK");let et;try{et="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(zt){et=!1}let it,rt,nt=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(tt.q)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!et)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(r.C))},t.\u0275prov=Object(r.Ib)({factory:function(){return new t(Object(r.Wb)(r.C))},token:t,providedIn:"root"}),t})(),st=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)}}),t})();function ot(){if("object"!=typeof document||!document)return 0;if(null==it){const t=document.createElement("div"),e=t.style;t.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";const i=document.createElement("div"),r=i.style;r.width="2px",r.height="1px",t.appendChild(i),document.body.appendChild(t),it=0,0===t.scrollLeft&&(t.scrollLeft=1,it=0===t.scrollLeft?1:2),t.parentNode.removeChild(t)}return it}const at=new r.r("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(r.V)(tt.d)}});let ht=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new r.n,t){const e=t.documentElement?t.documentElement.dir:null,i=(t.body?t.body.dir:null)||e;this.value="ltr"===i||"rtl"===i?i:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(at,8))},t.\u0275prov=Object(r.Ib)({factory:function(){return new t(Object(r.Wb)(at,8))},token:t,providedIn:"root"}),t})(),lt=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)}}),t})();class ct extends class{}{constructor(t){super(),this._data=t}connect(){return Object(S.a)(this._data)?this._data:Object(o.a)(this._data)}disconnect(){}}class dt{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(t,e,i,r,n){t.forEachOperation((t,s,o)=>{let a,h;null==t.previousIndex?(a=this._insertView(()=>i(t,s,o),o,e,r(t)),h=a?1:0):null==o?(this._detachAndCacheView(s,e),h=3):(a=this._moveView(s,o,e,r(t)),h=2),n&&n({context:null==a?void 0:a.context,operation:h,record:t})})}detach(){for(const t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,r){const n=this._insertViewFromCache(e,i);if(n)return void(n.context.$implicit=r);const s=t();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(t,e){const i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,r){const n=i.get(t);return i.move(n,e),n.context.$implicit=r,n}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{const i=e.indexOf(t);-1===i?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){const i=this._viewCache.pop();return i&&e.insert(i,t),i||null}}const ut=new r.r("_ViewRepeater"),ft=["contentWrapper"],pt=["*"],_t=new r.r("VIRTUAL_SCROLL_STRATEGY");class gt{constructor(t,e,i){this._scrolledIndexChange=new s.a,this.scrolledIndexChange=this._scrolledIndexChange.pipe(t=>t.lift(new x(void 0,void 0))),this._viewport=null,this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i}attach(t){this._viewport=t,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(t,e,i){this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(t,e){this._viewport&&this._viewport.scrollToOffset(t*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const t=this._viewport.getRenderedRange(),e={start:t.start,end:t.end},i=this._viewport.getViewportSize(),r=this._viewport.getDataLength();let n=this._viewport.measureScrollOffset(),s=this._itemSize>0?n/this._itemSize:0;if(e.end>r){const t=Math.ceil(i/this._itemSize),o=Math.max(0,Math.min(s,r-t));s!=o&&(s=o,n=o*this._itemSize,e.start=Math.floor(s)),e.end=Math.max(0,Math.min(r,e.start+t))}const o=n-e.start*this._itemSize;if(o<this._minBufferPx&&0!=e.start){const t=Math.ceil((this._maxBufferPx-o)/this._itemSize);e.start=Math.max(0,e.start-t),e.end=Math.min(r,Math.ceil(s+(i+this._minBufferPx)/this._itemSize))}else{const t=e.end*this._itemSize-(n+i);if(t<this._minBufferPx&&e.end!=r){const i=Math.ceil((this._maxBufferPx-t)/this._itemSize);i>0&&(e.end=Math.min(r,e.end+i),e.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(s))}}function mt(t){return t._scrollStrategy}let bt=(()=>{class t{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new gt(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=n(t)}get minBufferPx(){return this._minBufferPx}set minBufferPx(t){this._minBufferPx=n(t)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(t){this._maxBufferPx=n(t)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Hb({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[r.Ab([{provide:_t,useFactory:mt,deps:[Object(r.U)(()=>t)]}]),r.zb]}),t})(),wt=(()=>{class t{constructor(t,e,i){this._ngZone=t,this._platform=e,this._scrolled=new s.a,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){const e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=20){return this._platform.isBrowser?new a.a(e=>{this._globalSubscription||this._addGlobalListener();const i=t>0?this._scrolled.pipe(N(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Object(o.a)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){const i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(Object(B.a)(t=>!t||i.indexOf(t)>-1))}getAncestorScrollContainers(t){const e=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,t)&&e.push(r)}),e}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,e){let i=(n=e)instanceof r.l?n.nativeElement:n;var n;let s=t.getElementRef().nativeElement;do{if(i==s)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const t=this._getWindow();return Object(h.a)(t.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(r.A),r.Wb(nt),r.Wb(tt.d,8))},t.\u0275prov=Object(r.Ib)({factory:function(){return new t(Object(r.Wb)(r.A),Object(r.Wb)(nt),Object(r.Wb)(tt.d,8))},token:t,providedIn:"root"}),t})(),vt=(()=>{class t{constructor(t,e,i,r){this.elementRef=t,this.scrollDispatcher=e,this.ngZone=i,this.dir=r,this._destroyed=new s.a,this._elementScrolled=new a.a(t=>this.ngZone.runOutsideAngular(()=>Object(h.a)(this.elementRef.nativeElement,"scroll").pipe(W(this._destroyed)).subscribe(t)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){const e=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==t.left&&(t.left=i?t.end:t.start),null==t.right&&(t.right=i?t.start:t.end),null!=t.bottom&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&0!=ot()?(null!=t.left&&(t.right=e.scrollWidth-e.clientWidth-t.left),2==ot()?t.left=t.right:1==ot()&&(t.left=t.right?-t.right:t.right)):null!=t.right&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){const e=this.elementRef.nativeElement;!function(){if(null==rt){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return rt=!1,rt;if("scrollBehavior"in document.documentElement.style)rt=!0;else{const t=Element.prototype.scrollTo;rt=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return rt}()?(null!=t.top&&(e.scrollTop=t.top),null!=t.left&&(e.scrollLeft=t.left)):e.scrollTo(t)}measureScrollOffset(t){const e="left",i="right",r=this.elementRef.nativeElement;if("top"==t)return r.scrollTop;if("bottom"==t)return r.scrollHeight-r.clientHeight-r.scrollTop;const n=this.dir&&"rtl"==this.dir.value;return"start"==t?t=n?i:e:"end"==t&&(t=n?e:i),n&&2==ot()?t==e?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:n&&1==ot()?t==e?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:t==e?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.l),r.Mb(wt),r.Mb(r.A),r.Mb(ht,8))},t.\u0275dir=r.Hb({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),t})(),St=(()=>{class t{constructor(t,e,i){this._platform=t,this._change=new s.a,this._changeListener=t=>{this._change.next(t)},this._document=i,e.runOutsideAngular(()=>{if(t.isBrowser){const t=this._getWindow();t.addEventListener("resize",this._changeListener),t.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._updateViewportSize())})}ngOnDestroy(){if(this._platform.isBrowser){const t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=this._document,e=this._getWindow(),i=t.documentElement,r=i.getBoundingClientRect();return{top:-r.top||t.body.scrollTop||e.scrollY||i.scrollTop||0,left:-r.left||t.body.scrollLeft||e.scrollX||i.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(N(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(nt),r.Wb(r.A),r.Wb(tt.d,8))},t.\u0275prov=Object(r.Ib)({factory:function(){return new t(Object(r.Wb)(nt),Object(r.Wb)(r.A),Object(r.Wb)(tt.d,8))},token:t,providedIn:"root"}),t})();const Ct="undefined"!=typeof requestAnimationFrame?l.a:w;let xt=(()=>{class t extends vt{constructor(t,e,i,r,n,o,h){super(t,o,i,n),this.elementRef=t,this._changeDetectorRef=e,this._scrollStrategy=r,this._detachedSubject=new s.a,this._renderedRangeSubject=new s.a,this._orientation="vertical",this.scrolledIndexChange=new a.a(t=>this._scrollStrategy.scrolledIndexChange.subscribe(e=>Promise.resolve().then(()=>this.ngZone.run(()=>t.next(e))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=v.a.EMPTY,this._viewportChanges=h.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(t){this._orientation!==t&&(this._orientation=t,this._calculateSpacerSize())}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe(Object(P.a)(null),N(0,Ct)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(t){this.ngZone.runOutsideAngular(()=>{this._forOf=t,this._forOf.dataStream.pipe(W(this._detachedSubject)).subscribe(t=>{const e=t.length;e!==this._dataLength&&(this._dataLength=e,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(t){this._totalContentSize!==t&&(this._totalContentSize=t,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(t){var e,i;((e=this._renderedRange).start!=(i=t).start||e.end!=i.end)&&(this._renderedRangeSubject.next(this._renderedRange=t),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(t,e="to-start"){const i="horizontal"==this.orientation,r=i?"X":"Y";let n=`translate${r}(${Number((i&&this.dir&&"rtl"==this.dir.value?-1:1)*t)}px)`;this._renderedContentOffset=t,"to-end"===e&&(n+=` translate${r}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=n&&(this._renderedContentTransform=n,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(t,e="auto"){const i={behavior:e};"horizontal"===this.orientation?i.start=t:i.top=t,this.scrollTo(i)}scrollToIndex(t,e="auto"){this._scrollStrategy.scrollToIndex(t,e)}measureScrollOffset(t){return super.measureScrollOffset(t||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const t=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?t.offsetWidth:t.offsetHeight}measureRangeSize(t){return this._forOf?this._forOf.measureRangeSize(t,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const t=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?t.clientWidth:t.clientHeight}_markChangeDetectionNeeded(t){t&&this._runAfterChangeDetection.push(t),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const t=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const e of t)e()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.l),r.Mb(r.h),r.Mb(r.A),r.Mb(_t,8),r.Mb(ht,8),r.Mb(wt),r.Mb(St))},t.\u0275cmp=r.Gb({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,e){if(1&t&&r.Fc(ft,3),2&t){let t;r.oc(t=r.ac())&&(e._contentWrapper=t.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,e){2&t&&r.Eb("cdk-virtual-scroll-orientation-horizontal","horizontal"===e.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==e.orientation)},inputs:{orientation:"orientation"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[r.Ab([{provide:vt,useExisting:t}]),r.yb],ngContentSelectors:pt,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,e){1&t&&(r.gc(),r.Sb(0,"div",0,1),r.fc(2),r.Rb(),r.Nb(3,"div",2)),2&t&&(r.Bb(3),r.vc("width",e._totalContentWidth)("height",e._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),t})();function yt(t,e,i){if(!i.getBoundingClientRect)return 0;const r=i.getBoundingClientRect();return"horizontal"===t?"start"===e?r.left:r.right:"start"===e?r.top:r.bottom}let kt=(()=>{class t{constructor(t,e,i,r,n,o){this._viewContainerRef=t,this._template=e,this._differs=i,this._viewRepeater=r,this._viewport=n,this.viewChange=new s.a,this._dataSourceChanges=new s.a,this.dataStream=this._dataSourceChanges.pipe(Object(P.a)(null),t=>t.lift(new A),Object(L.a)(([t,e])=>this._changeDataSource(t,e)),function(t,e,i){let r;return r={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:i,scheduler:r}){let n,s,o=0,a=!1,h=!1;return function(l){let c;o++,!n||a?(a=!1,n=new J(t,e,r),c=n.subscribe(this),s=l.subscribe({next(t){n.next(t)},error(t){a=!0,n.error(t)},complete(){h=!0,s=void 0,n.complete()}}),h&&(s=void 0)):c=n.subscribe(this),this.add(()=>{o--,c.unsubscribe(),c=void 0,s&&!h&&i&&0===o&&(s.unsubscribe(),s=void 0,n=void 0)})}}(r))}()),this._differ=null,this._needsUpdate=!1,this._destroyed=new s.a,this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(W(this._destroyed)).subscribe(t=>{this._renderedRange=t,o.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(t){this._cdkVirtualForOf=t,function(t){return t&&"function"==typeof t.connect}(t)?this._dataSourceChanges.next(t):this._dataSourceChanges.next(new ct(Object(S.a)(t)?t:Array.from(t||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(t){this._needsUpdate=!0,this._cdkVirtualForTrackBy=t?(e,i)=>t(e+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(t){t&&(this._needsUpdate=!0,this._template=t)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(t){this._viewRepeater.viewCacheSize=n(t)}measureRangeSize(t,e){if(t.start>=t.end)return 0;const i=t.start-this._renderedRange.start,r=t.end-t.start;let n,s;for(let o=0;o<r;o++){const t=this._viewContainerRef.get(o+i);if(t&&t.rootNodes.length){n=s=t.rootNodes[0];break}}for(let o=r-1;o>-1;o--){const t=this._viewContainerRef.get(o+i);if(t&&t.rootNodes.length){s=t.rootNodes[t.rootNodes.length-1];break}}return n&&s?yt(e,"end",s)-yt(e,"start",n):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const t=this._differ.diff(this._renderedItems);t?this._applyChanges(t):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((t,e)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(t,e):e)),this._needsUpdate=!0)}_changeDataSource(t,e){return t&&t.disconnect(this),this._needsUpdate=!0,e?e.connect(this):Object(o.a)()}_updateContext(){const t=this._data.length;let e=this._viewContainerRef.length;for(;e--;){const i=this._viewContainerRef.get(e);i.context.index=this._renderedRange.start+e,i.context.count=t,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(t){this._viewRepeater.applyChanges(t,this._viewContainerRef,(t,e,i)=>this._getEmbeddedViewArgs(t,i),t=>t.item),t.forEachIdentityChange(t=>{this._viewContainerRef.get(t.currentIndex).context.$implicit=t.item});const e=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const t=this._viewContainerRef.get(i);t.context.index=this._renderedRange.start+i,t.context.count=e,this._updateComputedContextProperties(t.context)}}_updateComputedContextProperties(t){t.first=0===t.index,t.last=t.index===t.count-1,t.even=t.index%2==0,t.odd=!t.even}_getEmbeddedViewArgs(t,e){return{templateRef:this._template,context:{$implicit:t.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:e}}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.Q),r.Mb(r.L),r.Mb(r.t),r.Mb(ut),r.Mb(xt,4),r.Mb(r.A))},t.\u0275dir=r.Hb({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[r.Ab([{provide:ut,useClass:dt}])]}),t})(),Rt=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)}}),t})(),Ot=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[lt,st,Rt],lt,Rt]}),t})()}}]);