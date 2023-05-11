!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(c=i.key,r=void 0,"symbol"==typeof(r=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(c,"string"))?r:String(r)),i)}var c,r}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{rFyd:function(n,i,c){"use strict";c.r(i),c.d(i,"PatientsModule",function(){return E});var r,a,s=c("SVse"),o=c("tqRt"),u=c("PCNd"),b=c("iInd"),p=c("pKmL"),f=Object(o.n)("[Patients] Fetch Patients"),l=Object(o.n)("[Patients] Fetch Patients Success",Object(o.s)()),h=c("7bNT"),v=c("eIep"),O=c("lJxs"),d=c("nm5K"),m=c("LRne"),j=c("JIr8"),y=c("8Y7J"),g=((a=function(){function n(e){t(this,n),this.apiService=e}return e(n,[{key:"getPatients",value:function(){return this.apiService.get("51597ef3").pipe(Object(O.a)(function(t){return(null==t?void 0:t.patient)?t.patient:[]}),Object(j.a)(function(){return Object(m.a)([])}))}}]),n}()).\u0275fac=function(t){return new(t||a)(y.Zb(d.a))},a.\u0275prov=y.Lb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),P=((r=e(function n(e,i){var c=this;t(this,n),this.actions$=e,this.patientsService=i,this.fetchPatients$=Object(h.c)(function(){return c.actions$.pipe(Object(h.d)(f),Object(v.a)(function(){return c.patientsService.getPatients().pipe(Object(O.a)(function(t){return l({patients:t})}))}))})})).\u0275fac=function(t){return new(t||r)(y.Zb(h.a),y.Zb(g))},r.\u0275prov=y.Lb({token:r,factory:r.\u0275fac}),r),w=Object(o.p)({patients:[],status:"NOT_LODED"},Object(o.r)(f,function(t){return Object.assign(Object.assign({},t),{status:"LOADING"})}),Object(o.r)(l,function(t,n){var e=n.patients;return Object.assign(Object.assign({},t),{status:"LOADED",patients:e})})),k=Object(o.o)("patients"),D=Object(o.q)(k,function(t){return t.patients});Object(o.q)(k,function(t){return t.status});var S,C,L,N=c("WCjt"),M=c("Dxy4"),V=c("DAyL"),I=c("TSSN"),J=[{path:"",component:(S=function(){function n(e){t(this,n),this.store=e,this.routeAnimationsElements=p.c,this.patients$=this.store.select(D)}return e(n,[{key:"ngOnInit",value:function(){}},{key:"fetchPatients",value:function(){this.store.dispatch(f())}}]),n}(),S.\u0275fac=function(t){return new(t||S)(y.Pb(o.h))},S.\u0275cmp=y.Jb({type:S,selectors:[["st-patients"]],decls:12,vars:9,consts:[[1,"container"],["rtl",""],[1,"main-heading"],[1,"actions"],["mat-raised-button","","color","primary",1,"actions-main",3,"click"],[1,"content"],[3,"patients"]],template:function(t,n){1&t&&(y.Vb(0,"div",0),y.Vb(1,"div",1),y.Vb(2,"h1",2),y.Bc(3),y.hc(4,"translate"),y.Ub(),y.Vb(5,"div",3),y.Vb(6,"a",4),y.cc("click",function(){return n.fetchPatients()}),y.Bc(7),y.hc(8,"translate"),y.Ub(),y.Ub(),y.Vb(9,"div",5),y.Qb(10,"st-patients-table",6),y.hc(11,"async"),y.Ub(),y.Ub(),y.Ub()),2&t&&(y.Db(3),y.Cc(y.ic(4,3,"stms.patients.title")),y.Db(4),y.Dc(" ",y.ic(8,5,"stms.patients.get-patients")," "),y.Db(3),y.lc("patients",y.ic(11,7,n.patients$)))},directives:[N.a,M.a,V.a],pipes:[I.c,s.b],styles:["[_nghost-%COMP%]   .actions[_ngcontent-%COMP%], [_nghost-%COMP%]   .content[_ngcontent-%COMP%]{margin-bottom:16px}"],changeDetection:0}),S),data:{title:"stms.menu.patients"}}],U=((L=e(function n(){t(this,n)})).\u0275mod=y.Nb({type:L}),L.\u0275inj=y.Mb({factory:function(t){return new(t||L)},imports:[[b.k.forChild(J)],b.k]}),L),E=((C=e(function n(){t(this,n)})).\u0275mod=y.Nb({type:C}),C.\u0275inj=y.Mb({factory:function(t){return new(t||C)},providers:[],imports:[[s.c,u.a,U,o.j.forFeature("patients",w),h.b.forFeature([P])]]}),C)}}])}();