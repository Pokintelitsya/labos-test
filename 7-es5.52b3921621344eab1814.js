!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(n=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(n,"string"))?o:String(o)),r)}var n,o}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1FBi":function(e,r,n){"use strict";n.r(r),n.d(r,"FavoritesModule",function(){return S});var o,a,c,s=n("SVse"),l=n("PCNd"),b=n("iInd"),u=n("hH6i"),f=n("8Y7J"),d=n("tqRt"),p=n("WCjt"),v=n("M9ds"),h=n("DAyL"),m=n("SLG3"),y=n("TSSN"),w=[{path:"",component:(o=function(){function e(i){t(this,e),this.store=i,this.patients$=this.store.select(u.f),this.orders$=this.store.select(u.e)}return i(e,[{key:"onDeleteOrderFavorite",value:function(t){this.store.dispatch(Object(u.c)({order:t}))}},{key:"onDeletePatientFavorite",value:function(t){this.store.dispatch(Object(u.d)({patient:t}))}}]),e}(),o.\u0275fac=function(t){return new(t||o)(f.Pb(d.h))},o.\u0275cmp=f.Jb({type:o,selectors:[["st-favorites"]],decls:15,vars:19,consts:[[1,"container"],["rtl",""],[1,"main-heading"],[1,"content"],[3,"label"],[3,"withSearch","patients","favoriteAction","deleteFavorite"],[3,"withSearch","orders","favoriteAction","deleteFavorite"]],template:function(t,e){1&t&&(f.Vb(0,"div",0),f.Vb(1,"div",1),f.Vb(2,"h1",2),f.Cc(3),f.hc(4,"translate"),f.Ub(),f.Vb(5,"div",3),f.Vb(6,"mat-tab-group"),f.Vb(7,"mat-tab",4),f.hc(8,"translate"),f.Vb(9,"st-patients-table",5),f.cc("deleteFavorite",function(t){return e.onDeletePatientFavorite(t)}),f.hc(10,"async"),f.Ub(),f.Ub(),f.Vb(11,"mat-tab",4),f.hc(12,"translate"),f.Vb(13,"st-orders-table",6),f.cc("deleteFavorite",function(t){return e.onDeleteOrderFavorite(t)}),f.hc(14,"async"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&t&&(f.Db(3),f.Dc(f.ic(4,9,"stms.favorites.title")),f.Db(4),f.mc("label",f.ic(8,11,"stms.patients.title")),f.Db(2),f.lc("withSearch",!0)("patients",f.ic(10,13,e.patients$))("favoriteAction","delete"),f.Db(2),f.mc("label",f.ic(12,15,"stms.orders.title")),f.Db(2),f.lc("withSearch",!0)("orders",f.ic(14,17,e.orders$))("favoriteAction","delete"))},directives:[p.a,v.b,v.a,h.a,m.a],pipes:[y.c,s.b],styles:[""],changeDetection:0}),o),data:{title:"stms.favorites.title"}}],D=((c=i(function e(){t(this,e)})).\u0275mod=f.Nb({type:c}),c.\u0275inj=f.Mb({factory:function(t){return new(t||c)},providers:[],imports:[[b.k.forChild(w)],b.k]}),c),S=((a=i(function e(){t(this,e)})).\u0275mod=f.Nb({type:a}),a.\u0275inj=f.Mb({factory:function(t){return new(t||a)},imports:[[s.c,l.a,D]]}),a)}}])}();