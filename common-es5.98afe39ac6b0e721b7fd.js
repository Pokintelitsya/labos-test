!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,(a=c.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var c=n.call(t,e||"default");if("object"!=typeof c)return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"))?i:String(i)),c)}var a,i}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{DAyL:function(e,c,a){"use strict";a.d(c,"a",function(){return N});var i,r=a("8Y7J"),o=a("OaSA"),s=a("SVse"),u=a("Q2Ze"),l=a("e6WT"),f=a("pMoy"),b=a("Dxy4"),d=a("Tj54"),m=a("Nv++"),h=a("TSSN"),p=((i=function(){function e(){t(this,e)}return n(e,[{key:"transform",value:function(t){return t?Math.floor(((new Date).getTime()-new Date(t).getTime())/315576e5)+"Y":"-"}}]),e}()).\u0275fac=function(t){return new(t||i)},i.\u0275pipe=r.Ob({name:"age",type:i,pure:!0}),i);function v(t,e){if(1&t){var n=r.Wb();r.Vb(0,"mat-form-field"),r.Vb(1,"mat-label"),r.Cc(2),r.hc(3,"translate"),r.Ub(),r.Vb(4,"input",15),r.cc("keyup",function(t){return r.tc(n),r.gc(2).applyFilter(t)}),r.hc(5,"translate"),r.Ub(),r.Ub()}2&t&&(r.Db(2),r.Dc(r.ic(3,2,"stms.favorites.search")),r.Db(2),r.mc("placeholder",r.ic(5,4,"stms.patients.first-name")))}function g(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.code")," "))}function D(t,e){if(1&t&&(r.Vb(0,"td",17),r.Cc(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Dc(n.code)}}function O(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.first-name")," "))}function C(t,e){if(1&t&&(r.Vb(0,"td",17),r.Cc(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Ec(" ",n.firstName||"-"," ")}}function y(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.last-name")," "))}function w(t,e){if(1&t&&(r.Vb(0,"td",17),r.Cc(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Ec(" ",n.lastName||"-"," ")}}function S(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.age")," "))}function A(t,e){if(1&t&&(r.Vb(0,"td",17),r.Cc(1),r.hc(2,"age"),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Ec(" ",r.ic(2,1,null==n.birthDate?null:n.birthDate.formattedDate)," ")}}function j(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.gender")," "))}function k(t,e){if(1&t&&(r.Vb(0,"td",17),r.Cc(1),r.Ub()),2&t){var n=e.$implicit;r.Db(1),r.Ec(" ",(null==n.sex?null:n.sex.name)||"-"," ")}}function U(t,e){1&t&&(r.Vb(0,"th",16),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.favorite")," "))}function V(t,e){if(1&t){var n=r.Wb();r.Vb(0,"mat-checkbox",20),r.cc("change",function(){r.tc(n);var t=r.gc().$implicit;return r.gc(2).toggleFavorite(t)}),r.Ub()}if(2&t){var c=r.gc().$implicit;r.lc("checked",c.isFavorite)}}function F(t,e){if(1&t){var n=r.Wb();r.Vb(0,"button",21),r.cc("click",function(){r.tc(n);var t=r.gc().$implicit;return r.gc(2).deleteFromFavorite(t)}),r.Vb(1,"mat-icon"),r.Qb(2,"fa-icon",22),r.Ub(),r.Ub()}}function I(t,e){if(1&t&&(r.Vb(0,"td",17),r.Ac(1,V,1,1,"mat-checkbox",18),r.Ac(2,F,3,0,"button",19),r.Ub()),2&t){var n=r.gc(2);r.Db(1),r.lc("ngIf","toggle"===n.favoriteAction),r.Db(1),r.lc("ngIf","delete"===n.favoriteAction)}}function P(t,e){1&t&&r.Qb(0,"tr",23)}function E(t,e){1&t&&r.Qb(0,"tr",24)}function T(t,e){1&t&&(r.Vb(0,"div",25),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Ec(" ",r.ic(2,1,"stms.patients.not-found")," "))}function M(t,e){if(1&t&&(r.Tb(0),r.Ac(1,v,6,6,"mat-form-field",2),r.Vb(2,"table",3),r.Tb(3,4),r.Ac(4,g,3,3,"th",5),r.Ac(5,D,2,1,"td",6),r.Sb(),r.Tb(6,7),r.Ac(7,O,3,3,"th",5),r.Ac(8,C,2,1,"td",6),r.Sb(),r.Tb(9,8),r.Ac(10,y,3,3,"th",5),r.Ac(11,w,2,1,"td",6),r.Sb(),r.Tb(12,9),r.Ac(13,S,3,3,"th",5),r.Ac(14,A,3,3,"td",6),r.Sb(),r.Tb(15,10),r.Ac(16,j,3,3,"th",5),r.Ac(17,k,2,1,"td",6),r.Sb(),r.Tb(18,11),r.Ac(19,U,3,3,"th",5),r.Ac(20,I,3,2,"td",6),r.Sb(),r.Ac(21,P,1,0,"tr",12),r.Ac(22,E,1,0,"tr",13),r.Ub(),r.Ac(23,T,3,3,"div",14),r.Sb()),2&t){var n=r.gc();r.Db(1),r.lc("ngIf",n.withSearch),r.Db(1),r.lc("dataSource",n.dataSource),r.Db(19),r.lc("matHeaderRowDef",n.displayedColumns),r.Db(1),r.lc("matRowDefColumns",n.displayedColumns),r.Db(1),r.lc("ngIf",!(null!=n.dataSource&&n.dataSource.filteredData.length))}}function x(t,e){1&t&&(r.Vb(0,"div"),r.Cc(1),r.hc(2,"translate"),r.Ub()),2&t&&(r.Db(1),r.Dc(r.ic(2,1,"stms.patients.no-patients")))}var _,N=((_=function(){function e(){t(this,e),this.withSearch=!1,this.favoriteAction="toggle",this.deleteFavorite=new r.o,this.addFavorite=new r.o,this.displayedColumns=["code","firstName","lastName","age","sex","action"]}return n(e,[{key:"patients",set:function(t){this.setTableData(t)}},{key:"applyFilter",value:function(t){this.dataSource.filter=t.target.value.trim().toLowerCase()}},{key:"toggleFavorite",value:function(t){t.isFavorite?this.deleteFavorite.emit(t):this.addFavorite.emit(t)}},{key:"deleteFromFavorite",value:function(t){this.deleteFavorite.emit(t)}},{key:"setTableData",value:function(t){this.dataSource=new o.k(t),this.dataSource.filterPredicate=function(t,e){var n=t.firstName.trim().toLowerCase(),c=e.trim().toLowerCase();return n.trim().includes(c)}}}]),e}()).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=r.Jb({type:_,selectors:[["st-patients-table"]],inputs:{patients:"patients",withSearch:"withSearch",favoriteAction:"favoriteAction"},outputs:{deleteFavorite:"deleteFavorite",addFavorite:"addFavorite"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noPatients",""],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8","patients-table",3,"dataSource"],["matColumnDef","code"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","firstName"],["matColumnDef","lastName"],["matColumnDef","age"],["matColumnDef","sex"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","empty-results",4,"ngIf"],["matInput","",3,"placeholder","keyup"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change",4,"ngIf"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],[3,"checked","change"],["mat-icon-button","","color","warn",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""],[1,"empty-results"]],template:function(t,e){if(1&t&&(r.Ac(0,M,24,5,"ng-container",0),r.Ac(1,x,3,3,"ng-template",null,1,r.Bc)),2&t){var n=r.rc(2);r.lc("ngIf",null==e.dataSource?null:e.dataSource.data.length)("ngIfElse",n)}},directives:[s.k,o.j,o.c,o.e,o.b,o.g,o.i,u.b,u.e,l.b,o.d,o.a,f.a,b.a,d.a,m.a,o.f,o.h],pipes:[h.c,p],styles:["[_nghost-%COMP%]{display:block;padding-top:10px}[_nghost-%COMP%]   .patients-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .patients-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left}[_nghost-%COMP%]   .empty-results[_ngcontent-%COMP%]{padding-top:8px}[_nghost-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-left:16px}[_nghost-%COMP%]  mat-checkbox label{margin-bottom:0}"],changeDetection:0}),_)},GyrZ:function(e,c,a){"use strict";a.d(c,"a",function(){return s}),a.d(c,"b",function(){return g}),a.d(c,"c",function(){return D}),a.d(c,"f",function(){return w}),a.d(c,"e",function(){return S}),a.d(c,"d",function(){return A});var i,r,o=a("tqRt"),s=Object(o.n)("[Orders] Fetch Orders"),u=Object(o.n)("[Orders] Fetch Orders Success",Object(o.s)()),l=a("7bNT"),f=a("eIep"),b=a("lJxs"),d=a("nm5K"),m=a("JIr8"),h=a("LRne"),p=a("8Y7J"),v=((r=function(){function e(n){t(this,e),this.apiService=n}return n(e,[{key:"getOrders",value:function(){return this.apiService.get("79fb05cb").pipe(Object(b.a)(function(t){return(null==t?void 0:t.order)?t.order:[]}),Object(m.a)(function(){return Object(h.a)([])}))}}]),e}()).\u0275fac=function(t){return new(t||r)(p.Zb(d.a))},r.\u0275prov=p.Lb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=((i=n(function e(n,c){var a=this;t(this,e),this.actions$=n,this.ordersService=c,this.fetchOrders$=Object(l.c)(function(){return a.actions$.pipe(Object(l.d)(s),Object(f.a)(function(){return a.ordersService.getOrders().pipe(Object(b.a)(function(t){return u({orders:t})}))}))})})).\u0275fac=function(t){return new(t||i)(p.Zb(l.a),p.Zb(v))},i.\u0275prov=p.Lb({token:i,factory:i.\u0275fac}),i),D=Object(o.p)({orders:[],status:"NOT_LODED"},Object(o.r)(s,function(t){return Object.assign(Object.assign({},t),{status:"LOADING"})}),Object(o.r)(u,function(t,e){var n=e.orders;return Object.assign(Object.assign({},t),{status:"LOADED",orders:n})})),O=a("Vz2p"),C=a("b1xS"),y=Object(o.o)("orders"),w=(Object(o.q)(y,function(t){return t.orders}),Object(o.q)(C.d,O.d,function(t,e){return t.patients.map(function(t){return Object.assign(Object.assign({},t),{isFavorite:e.patientsIds[t.defaultId]})})})),S=Object(o.q)(y,O.d,function(t,e){return t.orders.map(function(t){return Object.assign(Object.assign({},t),{isFavorite:e.ordersIds[t.identifier]})})}),A=Object(o.q)(y,function(t){return t.status})},SLG3:function(e,c,a){"use strict";a.d(c,"a",function(){return x});var i=a("8Y7J"),r=a("OaSA"),o=a("SVse"),s=a("Q2Ze"),u=a("e6WT"),l=a("pMoy"),f=a("Dxy4"),b=a("Tj54"),d=a("Nv++"),m=a("TSSN");function h(t,e){if(1&t){var n=i.Wb();i.Vb(0,"mat-form-field"),i.Vb(1,"mat-label"),i.Cc(2),i.hc(3,"translate"),i.Ub(),i.Vb(4,"input",15),i.cc("keyup",function(t){return i.tc(n),i.gc(2).applyFilter(t)}),i.hc(5,"translate"),i.Ub(),i.Ub()}2&t&&(i.Db(2),i.Dc(i.ic(3,2,"stms.favorites.search")),i.Db(2),i.lc("placeholder",i.ic(5,4,"stms.orders.order-name")))}function p(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.order-name")," "))}function v(t,e){if(1&t&&(i.Vb(0,"td",17),i.Cc(1),i.Ub()),2&t){var n=e.$implicit;i.Db(1),i.Dc(n.orderName)}}function g(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.created-by")," "))}function D(t,e){if(1&t&&(i.Vb(0,"td",17),i.Cc(1),i.Ub()),2&t){var n=e.$implicit;i.Db(1),i.Ec(" ",(null==n.creator?null:n.creator.name)||"-"," ")}}function O(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.creation-date")," "))}function C(t,e){if(1&t&&(i.Vb(0,"td",17),i.Cc(1),i.Ub()),2&t){var n=e.$implicit;i.Db(1),i.Ec(" ",(null==n.creationDate?null:n.creationDate.formattedDate)||"-"," ")}}function y(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.facility")," "))}function w(t,e){if(1&t&&(i.Vb(0,"td",17),i.Cc(1),i.Ub()),2&t){var n=e.$implicit;i.Db(1),i.Ec(" ",(null==n.facility?null:n.facility.name)||"-"," ")}}function S(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.patient")," "))}function A(t,e){if(1&t&&(i.Vb(0,"td",17),i.Cc(1),i.Ub()),2&t){var n=e.$implicit;i.Db(1),i.Ec(" ",(null==n.patient?null:n.patient.fullName)||"-"," ")}}function j(t,e){1&t&&(i.Vb(0,"th",16),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.favorite")," "))}function k(t,e){if(1&t){var n=i.Wb();i.Vb(0,"mat-checkbox",20),i.cc("change",function(){i.tc(n);var t=i.gc().$implicit;return i.gc(2).toggleFavorite(t)}),i.Ub()}if(2&t){var c=i.gc().$implicit;i.lc("checked",c.isFavorite)}}function U(t,e){if(1&t){var n=i.Wb();i.Vb(0,"button",21),i.cc("click",function(){i.tc(n);var t=i.gc().$implicit;return i.gc(2).deleteFromFavorite(t)}),i.Vb(1,"mat-icon"),i.Qb(2,"fa-icon",22),i.Ub(),i.Ub()}}function V(t,e){if(1&t&&(i.Vb(0,"td",17),i.Ac(1,k,1,1,"mat-checkbox",18),i.Ac(2,U,3,0,"button",19),i.Ub()),2&t){var n=i.gc(2);i.Db(1),i.lc("ngIf","toggle"===n.favoriteAction),i.Db(1),i.lc("ngIf","delete"===n.favoriteAction)}}function F(t,e){1&t&&i.Qb(0,"tr",23)}function I(t,e){1&t&&i.Qb(0,"tr",24)}function P(t,e){1&t&&(i.Vb(0,"div",25),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Ec(" ",i.ic(2,1,"stms.orders.not-found")," "))}function E(t,e){if(1&t&&(i.Tb(0),i.Ac(1,h,6,6,"mat-form-field",2),i.Vb(2,"table",3),i.Tb(3,4),i.Ac(4,p,3,3,"th",5),i.Ac(5,v,2,1,"td",6),i.Sb(),i.Tb(6,7),i.Ac(7,g,3,3,"th",5),i.Ac(8,D,2,1,"td",6),i.Sb(),i.Tb(9,8),i.Ac(10,O,3,3,"th",5),i.Ac(11,C,2,1,"td",6),i.Sb(),i.Tb(12,9),i.Ac(13,y,3,3,"th",5),i.Ac(14,w,2,1,"td",6),i.Sb(),i.Tb(15,10),i.Ac(16,S,3,3,"th",5),i.Ac(17,A,2,1,"td",6),i.Sb(),i.Tb(18,11),i.Ac(19,j,3,3,"th",5),i.Ac(20,V,3,2,"td",6),i.Sb(),i.Ac(21,F,1,0,"tr",12),i.Ac(22,I,1,0,"tr",13),i.Ub(),i.Ac(23,P,3,3,"div",14),i.Sb()),2&t){var n=i.gc();i.Db(1),i.lc("ngIf",n.withSearch),i.Db(1),i.lc("dataSource",n.dataSource),i.Db(19),i.lc("matHeaderRowDef",n.displayedColumns),i.Db(1),i.lc("matRowDefColumns",n.displayedColumns),i.Db(1),i.lc("ngIf",!(null!=n.dataSource&&n.dataSource.filteredData.length))}}function T(t,e){1&t&&(i.Vb(0,"div"),i.Cc(1),i.hc(2,"translate"),i.Ub()),2&t&&(i.Db(1),i.Dc(i.ic(2,1,"stms.orders.no-orders")))}var M,x=((M=function(){function e(){t(this,e),this.favoriteAction="toggle",this.withSearch=!1,this.deleteFavorite=new i.o,this.addFavorite=new i.o,this.displayedColumns=["orderName","creator","creationDate","facility","patient","action"]}return n(e,[{key:"orders",set:function(t){this.setTableData(t)}},{key:"applyFilter",value:function(t){this.dataSource.filter=t.target.value.trim().toLowerCase()}},{key:"toggleFavorite",value:function(t){t.isFavorite?this.deleteFavorite.emit(t):this.addFavorite.emit(t)}},{key:"deleteFromFavorite",value:function(t){this.deleteFavorite.emit(t)}},{key:"setTableData",value:function(t){this.dataSource=new r.k(t),this.dataSource.filterPredicate=function(t,e){var n=t.orderName.trim().toLowerCase(),c=e.trim().toLowerCase();return n.trim().includes(c)}}}]),e}()).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=i.Jb({type:M,selectors:[["st-orders-table"]],inputs:{orders:"orders",favoriteAction:"favoriteAction",withSearch:"withSearch"},outputs:{deleteFavorite:"deleteFavorite",addFavorite:"addFavorite"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noOrders",""],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8","orders-table",3,"dataSource"],["matColumnDef","orderName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","creator"],["matColumnDef","creationDate"],["matColumnDef","facility"],["matColumnDef","patient"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","empty-results",4,"ngIf"],["matInput","",3,"placeholder","keyup"],["mat-header-cell",""],["mat-cell",""],[3,"checked","change",4,"ngIf"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],[3,"checked","change"],["mat-icon-button","","color","warn",3,"click"],["icon","trash"],["mat-header-row",""],["mat-row",""],[1,"empty-results"]],template:function(t,e){if(1&t&&(i.Ac(0,E,24,5,"ng-container",0),i.Ac(1,T,3,3,"ng-template",null,1,i.Bc)),2&t){var n=i.rc(2);i.lc("ngIf",null==e.dataSource?null:e.dataSource.data.length)("ngIfElse",n)}},directives:[o.k,r.j,r.c,r.e,r.b,r.g,r.i,s.b,s.e,u.b,r.d,r.a,l.a,f.a,b.a,d.a,r.f,r.h],pipes:[m.c],styles:["[_nghost-%COMP%]{display:block;padding-top:10px}[_nghost-%COMP%]   .orders-table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .orders-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:left}[_nghost-%COMP%]   .empty-results[_ngcontent-%COMP%]{padding-top:8px}[_nghost-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]{margin-left:16px}[_nghost-%COMP%]   .mat-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]  mat-checkbox label{margin-bottom:0}"],changeDetection:0}),M)},b1xS:function(e,c,a){"use strict";a.d(c,"a",function(){return s}),a.d(c,"b",function(){return g}),a.d(c,"c",function(){return D}),a.d(c,"d",function(){return O}),a.d(c,"e",function(){return C});var i,r,o=a("tqRt"),s=Object(o.n)("[Patients] Fetch Patients"),u=Object(o.n)("[Patients] Fetch Patients Success",Object(o.s)()),l=a("7bNT"),f=a("eIep"),b=a("lJxs"),d=a("nm5K"),m=a("LRne"),h=a("JIr8"),p=a("8Y7J"),v=((r=function(){function e(n){t(this,e),this.apiService=n}return n(e,[{key:"getPatients",value:function(){return this.apiService.get("51597ef3").pipe(Object(b.a)(function(t){return(null==t?void 0:t.patient)?t.patient:[]}),Object(h.a)(function(){return Object(m.a)([])}))}}]),e}()).\u0275fac=function(t){return new(t||r)(p.Zb(d.a))},r.\u0275prov=p.Lb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=((i=n(function e(n,c){var a=this;t(this,e),this.actions$=n,this.patientsService=c,this.fetchPatients$=Object(l.c)(function(){return a.actions$.pipe(Object(l.d)(s),Object(f.a)(function(){return a.patientsService.getPatients().pipe(Object(b.a)(function(t){return u({patients:t})}))}))})})).\u0275fac=function(t){return new(t||i)(p.Zb(l.a),p.Zb(v))},i.\u0275prov=p.Lb({token:i,factory:i.\u0275fac}),i),D=Object(o.p)({patients:[],status:"NOT_LODED"},Object(o.r)(s,function(t){return Object.assign(Object.assign({},t),{status:"LOADING"})}),Object(o.r)(u,function(t,e){var n=e.patients;return Object.assign(Object.assign({},t),{status:"LOADED",patients:n})})),O=Object(o.o)("patients"),C=(Object(o.q)(O,function(t){return t.patients}),Object(o.q)(O,function(t){return t.status}))},hH6i:function(t,e,n){"use strict";n.d(e,"b",function(){return c.b}),n.d(e,"d",function(){return c.d}),n.d(e,"a",function(){return c.a}),n.d(e,"c",function(){return c.c}),n.d(e,"e",function(){return r}),n.d(e,"f",function(){return o});var c=n("KZIa"),a=n("tqRt"),i=n("Vz2p"),r=Object(a.q)(i.d,function(t){return t.orders}),o=Object(a.q)(i.d,function(t){return t.patients});n("d5UZ")},nm5K:function(e,c,a){"use strict";a.d(c,"a",function(){return s});var i=a("AytR"),r=a("8Y7J"),o=a("IheW"),s=function(){var e=function(){function e(n){t(this,e),this.httpClient=n,this.apiUrl=i.a.apiURL}return n(e,[{key:"get",value:function(t,e){return this.httpClient.get("".concat(this.apiUrl).concat(t),e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Zb(o.b))},e.\u0275prov=r.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();