(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{DAyL:function(t,e,n){"use strict";n.d(e,"a",function(){return z});var c=n("8Y7J"),a=n("SVse"),i=n("OaSA");function o(t,e){1&t&&(c.Vb(0,"th",12),c.Bc(1,"Code"),c.Ub())}function l(t,e){if(1&t&&(c.Vb(0,"td",13),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Cc(t.code)}}function r(t,e){1&t&&(c.Vb(0,"th",12),c.Bc(1,"Name"),c.Ub())}function s(t,e){if(1&t&&(c.Vb(0,"td",13),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",t.fullName||"-"," ")}}function b(t,e){1&t&&(c.Vb(0,"th",12),c.Bc(1,"Age"),c.Ub())}function u(t,e){if(1&t&&(c.Vb(0,"td",13),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",t.age||"-"," ")}}function f(t,e){1&t&&(c.Vb(0,"th",12),c.Bc(1,"Gender"),c.Ub())}function d(t,e){if(1&t&&(c.Vb(0,"td",13),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",(null==t.sex?null:t.sex.name)||"-"," ")}}function m(t,e){1&t&&(c.Vb(0,"th",12),c.Bc(1,"Favorits"),c.Ub())}function p(t,e){if(1&t&&(c.Vb(0,"td",13),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",!!t.isFavorite," ")}}function D(t,e){1&t&&c.Qb(0,"tr",14)}function h(t,e){1&t&&c.Qb(0,"tr",15)}function C(t,e){if(1&t&&(c.Vb(0,"table",2),c.Tb(1,3),c.zc(2,o,2,0,"th",4),c.zc(3,l,2,1,"td",5),c.Sb(),c.Tb(4,6),c.zc(5,r,2,0,"th",4),c.zc(6,s,2,1,"td",5),c.Sb(),c.Tb(7,7),c.zc(8,b,2,0,"th",4),c.zc(9,u,2,1,"td",5),c.Sb(),c.Tb(10,8),c.zc(11,f,2,0,"th",4),c.zc(12,d,2,1,"td",5),c.Sb(),c.Tb(13,9),c.zc(14,m,2,0,"th",4),c.zc(15,p,2,1,"td",5),c.Sb(),c.zc(16,D,1,0,"tr",10),c.zc(17,h,1,0,"tr",11),c.Ub()),2&t){const t=c.gc();c.lc("dataSource",t.patients),c.Db(16),c.lc("matHeaderRowDef",t.displayedColumns),c.Db(1),c.lc("matRowDefColumns",t.displayedColumns)}}function g(t,e){1&t&&(c.Vb(0,"div"),c.Bc(1,"There are no patients found"),c.Ub())}let z=(()=>{class t{constructor(){this.patients=[],this.displayedColumns=["code","fullName","age","sex","action"]}ngOnInit(){this.setTableData()}setTableData(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["st-patients-table"]],inputs:{patients:"patients"},decls:3,vars:2,consts:[["mat-table","","class","mat-elevation-z8 patients-table",3,"dataSource",4,"ngIf","ngIfElse"],["noPatients",""],["mat-table","",1,"mat-elevation-z8","patients-table",3,"dataSource"],["matColumnDef","code"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","fullName"],["matColumnDef","age"],["matColumnDef","sex"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(c.zc(0,C,18,3,"table",0),c.zc(1,g,2,0,"ng-template",null,1,c.Ac)),2&t){const t=c.qc(2);c.lc("ngIf",null==e.patients?null:e.patients.length)("ngIfElse",t)}},directives:[a.k,i.j,i.c,i.e,i.b,i.g,i.i,i.d,i.a,i.f,i.h],styles:["[_nghost-%COMP%]{display:block;padding-top:10px}[_nghost-%COMP%]   .patients-table[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})()},SLG3:function(t,e,n){"use strict";n.d(e,"a",function(){return U});var c=n("8Y7J"),a=n("SVse"),i=n("OaSA");function o(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Order name"),c.Ub())}function l(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Cc(t.orderName)}}function r(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Created by"),c.Ub())}function s(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",(null==t.creator?null:t.creator.name)||"-"," ")}}function b(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Creation date"),c.Ub())}function u(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",(null==t.creationDate?null:t.creationDate.formattedDate)||"-"," ")}}function f(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Facility"),c.Ub())}function d(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",(null==t.facility?null:t.facility.name)||"-"," ")}}function m(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Patient"),c.Ub())}function p(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",(null==t.patient?null:t.patient.fullName)||"-"," ")}}function D(t,e){1&t&&(c.Vb(0,"th",13),c.Bc(1,"Favorits"),c.Ub())}function h(t,e){if(1&t&&(c.Vb(0,"td",14),c.Bc(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Dc(" ",!!t.isFavorite," ")}}function C(t,e){1&t&&c.Qb(0,"tr",15)}function g(t,e){1&t&&c.Qb(0,"tr",16)}function z(t,e){if(1&t&&(c.Vb(0,"table",2),c.Tb(1,3),c.zc(2,o,2,0,"th",4),c.zc(3,l,2,1,"td",5),c.Sb(),c.Tb(4,6),c.zc(5,r,2,0,"th",4),c.zc(6,s,2,1,"td",5),c.Sb(),c.Tb(7,7),c.zc(8,b,2,0,"th",4),c.zc(9,u,2,1,"td",5),c.Sb(),c.Tb(10,8),c.zc(11,f,2,0,"th",4),c.zc(12,d,2,1,"td",5),c.Sb(),c.Tb(13,9),c.zc(14,m,2,0,"th",4),c.zc(15,p,2,1,"td",5),c.Sb(),c.Tb(16,10),c.zc(17,D,2,0,"th",4),c.zc(18,h,2,1,"td",5),c.Sb(),c.zc(19,C,1,0,"tr",11),c.zc(20,g,1,0,"tr",12),c.Ub()),2&t){const t=c.gc();c.lc("dataSource",t.orders),c.Db(19),c.lc("matHeaderRowDef",t.displayedColumns),c.Db(1),c.lc("matRowDefColumns",t.displayedColumns)}}function w(t,e){1&t&&(c.Vb(0,"div"),c.Bc(1,"There are no orders found"),c.Ub())}let U=(()=>{class t{constructor(){this.orders=[],this.displayedColumns=["orderName","creator","creationDate","facility","patient","action"]}ngOnInit(){this.setTableData()}setTableData(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Jb({type:t,selectors:[["st-orders-table"]],inputs:{orders:"orders"},decls:3,vars:2,consts:[["mat-table","","class","mat-elevation-z8 orders-table",3,"dataSource",4,"ngIf","ngIfElse"],["noOrders",""],["mat-table","",1,"mat-elevation-z8","orders-table",3,"dataSource"],["matColumnDef","orderName"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","creator"],["matColumnDef","creationDate"],["matColumnDef","facility"],["matColumnDef","patient"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){if(1&t&&(c.zc(0,z,21,3,"table",0),c.zc(1,w,2,0,"ng-template",null,1,c.Ac)),2&t){const t=c.qc(2);c.lc("ngIf",null==e.orders?null:e.orders.length)("ngIfElse",t)}},directives:[a.k,i.j,i.c,i.e,i.b,i.g,i.i,i.d,i.a,i.f,i.h],styles:["[_nghost-%COMP%]{display:block;padding-top:10px}[_nghost-%COMP%]   .orders-table[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})()},nm5K:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var c=n("AytR"),a=n("8Y7J"),i=n("IheW");let o=(()=>{class t{constructor(t){this.httpClient=t,this.apiUrl=c.a.apiURL}get(t,e){return this.httpClient.get(`${this.apiUrl}${t}`,e)}}return t.\u0275fac=function(e){return new(e||t)(a.Zb(i.b))},t.\u0275prov=a.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);