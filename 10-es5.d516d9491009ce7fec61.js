!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(c=i.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(c,"string"))?a:String(a)),i)}var c,a}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Vl0R:function(t,i,c){"use strict";c.r(i),c.d(i,"SettingsModule",function(){return I});var a=c("SVse"),o=c("PCNd"),l=c("iInd"),s=c("tqRt"),r=c("pKmL"),b=c("BnVf"),g=c("EMFo"),m=c("8Y7J"),u=c("WCjt"),h=c("Tj54"),f=c("Nv++"),d=c("Q2Ze"),p=c("ZTz/"),v=c("s7LF"),V=c("jMqV"),U=c("UhP/"),y=c("ZFy/"),D=c("TSSN");function k(e,t){if(1&e&&(m.Vb(0,"mat-option",22),m.Bc(1),m.Ub()),2&e){var n=t.$implicit,i=m.gc().$implicit;m.lc("value",i.value)("title",n!==i.label?n:""),m.Db(1),m.Dc(" ",i.label," ")}}var C=function(e){return[e]};function M(e,t){if(1&e&&(m.Tb(0),m.zc(1,k,2,3,"mat-option",21),m.hc(2,"translate"),m.Sb()),2&e){var n=t.$implicit;m.Db(1),m.lc("ngForOf",m.nc(3,C,m.ic(2,1,"stms.settings.general.language."+n.value)))}}function T(e,t){if(1&e&&(m.Vb(0,"mat-option",23),m.Bc(1),m.hc(2,"translate"),m.Ub()),2&e){var n=t.$implicit;m.lc("value",n.value),m.Db(1),m.Dc(" ",m.ic(2,2,"stms.settings.themes."+n.label)," ")}}function O(e,t){1&e&&m.Qb(0,"mat-slide-toggle",24)}function E(e,t){if(1&e){var n=m.Wb();m.Vb(0,"mat-slide-toggle",12),m.cc("change",function(e){return m.sc(n),m.gc(2).onPageAnimationsToggle(e)}),m.Ub()}if(2&e){var i=m.gc().ngIf;m.lc("checked",i.pageAnimations)}}function P(e,t){if(1&e){var n=m.Wb();m.Tb(0),m.Vb(1,"div",1),m.Vb(2,"div",4),m.Vb(3,"h2"),m.Bc(4),m.hc(5,"translate"),m.Ub(),m.Vb(6,"div",5),m.Vb(7,"mat-icon",6),m.Qb(8,"fa-icon",7),m.Ub(),m.Vb(9,"mat-form-field",8),m.Vb(10,"mat-select",9),m.cc("selectionChange",function(e){return m.sc(n),m.gc().onLanguageSelect(e)}),m.hc(11,"translate"),m.zc(12,M,3,5,"ng-container",10),m.Ub(),m.Ub(),m.Ub(),m.Vb(13,"div",5),m.Vb(14,"mat-icon",6),m.Qb(15,"fa-icon",11),m.Ub(),m.Vb(16,"mat-placeholder"),m.Bc(17),m.hc(18,"translate"),m.Ub(),m.Vb(19,"mat-slide-toggle",12),m.cc("change",function(e){return m.sc(n),m.gc().onStickyHeaderToggle(e)}),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Vb(20,"div",1),m.Vb(21,"div",4),m.Vb(22,"h2"),m.Bc(23),m.hc(24,"translate"),m.Ub(),m.Vb(25,"div",5),m.Vb(26,"mat-icon",6),m.Qb(27,"fa-icon",13),m.Ub(),m.Vb(28,"mat-form-field",8),m.Vb(29,"mat-select",14),m.cc("selectionChange",function(e){return m.sc(n),m.gc().onThemeSelect(e)}),m.hc(30,"translate"),m.zc(31,T,3,4,"mat-option",15),m.Ub(),m.Ub(),m.Ub(),m.Vb(32,"div",5),m.Vb(33,"mat-icon",6),m.Qb(34,"fa-icon",16),m.Ub(),m.Vb(35,"mat-placeholder"),m.Bc(36),m.hc(37,"translate"),m.Ub(),m.Vb(38,"mat-slide-toggle",12),m.cc("change",function(e){return m.sc(n),m.gc().onAutoNightModeToggle(e)}),m.Ub(),m.Ub(),m.Ub(),m.Vb(39,"div",4),m.Vb(40,"h2"),m.Bc(41),m.hc(42,"translate"),m.Ub(),m.Vb(43,"div",5),m.Vb(44,"mat-icon",6),m.Vb(45,"mat-icon",6),m.Qb(46,"fa-icon",17),m.Ub(),m.Ub(),m.Vb(47,"mat-placeholder"),m.Bc(48),m.hc(49,"translate"),m.Ub(),m.zc(50,O,1,0,"mat-slide-toggle",18),m.zc(51,E,1,1,"mat-slide-toggle",19),m.Ub(),m.Vb(52,"div",5),m.Vb(53,"mat-icon",6),m.Qb(54,"fa-icon",20),m.Ub(),m.Vb(55,"mat-placeholder"),m.Bc(56),m.hc(57,"translate"),m.Ub(),m.Vb(58,"mat-slide-toggle",12),m.cc("change",function(e){return m.sc(n),m.gc().onElementsAnimationsToggle(e)}),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Sb()}if(2&e){var i=t.ngIf,c=m.gc();m.Db(2),m.lc("ngClass",c.routeAnimationsElements),m.Db(2),m.Cc(m.ic(5,21,"stms.settings.general.title")),m.Db(6),m.lc("placeholder",m.ic(11,23,"stms.settings.general.placeholder"))("ngModel",i.language),m.Db(2),m.lc("ngForOf",c.languages),m.Db(5),m.Dc("",m.ic(18,25,"stms.settings.themes.sticky-header")," "),m.Db(2),m.lc("checked",i.stickyHeader),m.Db(2),m.lc("ngClass",c.routeAnimationsElements),m.Db(2),m.Cc(m.ic(24,27,"stms.settings.themes.title")),m.Db(6),m.lc("placeholder",m.ic(30,29,"stms.settings.themes.placeholder"))("ngModel",i.theme),m.Db(2),m.lc("ngForOf",c.themes),m.Db(5),m.Dc("",m.ic(37,31,"stms.settings.themes.night-mode")," "),m.Db(2),m.lc("checked",i.autoNightMode),m.Db(1),m.lc("ngClass",c.routeAnimationsElements),m.Db(2),m.Cc(m.ic(42,33,"stms.settings.animations.title")),m.Db(7),m.Dc("",m.ic(49,35,"stms.settings.animations.page")," "),m.Db(2),m.lc("ngIf",i.pageAnimationsDisabled),m.Db(1),m.lc("ngIf",!i.pageAnimationsDisabled),m.Db(5),m.Dc("",m.ic(57,37,"stms.settings.animations.elements")," "),m.Db(2),m.lc("checked",i.elementsAnimations)}}var A,S,j,w=[{path:"",component:(A=function(){function t(n){e(this,t),this.store=n,this.routeAnimationsElements=r.c,this.themes=[{value:"DEFAULT-THEME",label:"cyan"},{value:"LIGHT-THEME",label:"light"},{value:"NATURE-THEME",label:"nature"},{value:"BLACK-THEME",label:"dark"}],this.languages=[{value:"en",label:"English"},{value:"he",label:"\u05e2\u05d1\u05e8\u05d9\u05ea"}]}return n(t,[{key:"ngOnInit",value:function(){this.settings$=this.store.pipe(Object(s.t)(g.d))}},{key:"onLanguageSelect",value:function(e){var t=e.value;this.store.dispatch(Object(b.f)({language:t}))}},{key:"onThemeSelect",value:function(e){var t=e.value;this.store.dispatch(Object(b.h)({theme:t}))}},{key:"onAutoNightModeToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(b.d)({autoNightMode:t}))}},{key:"onStickyHeaderToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(b.g)({stickyHeader:t}))}},{key:"onPageAnimationsToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(b.b)({pageAnimations:t}))}},{key:"onElementsAnimationsToggle",value:function(e){var t=e.checked;this.store.dispatch(Object(b.a)({elementsAnimations:t}))}}]),t}(),A.\u0275fac=function(e){return new(e||A)(m.Pb(s.h))},A.\u0275cmp=m.Jb({type:A,selectors:[["st-settings"]],decls:9,vars:6,consts:[["rtl","",1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],[1,"icon-form-field"],["color","accent"],["icon","language","color","accent"],["rtl",""],["rtl","","name","language",3,"placeholder","ngModel","selectionChange"],[4,"ngFor","ngForOf"],["icon","bars","color","accent"],[3,"checked","change"],["icon","paint-brush","color","accent"],["rtl","","name","themes",3,"placeholder","ngModel","selectionChange"],["rtl","",3,"value",4,"ngFor","ngForOf"],["icon","lightbulb","color","accent"],["icon","window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],["icon","stream","color","accent"],["rtl","",3,"value","title",4,"ngFor","ngForOf"],["rtl","",3,"value","title"],["rtl","",3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(e,t){1&e&&(m.Vb(0,"div",0),m.Vb(1,"div",1),m.Vb(2,"div",2),m.Vb(3,"h1"),m.Bc(4),m.hc(5,"translate"),m.Ub(),m.Ub(),m.Ub(),m.Qb(6,"br"),m.zc(7,P,59,39,"ng-container",3),m.hc(8,"async"),m.Ub()),2&e&&(m.Db(4),m.Cc(m.ic(5,2,"stms.settings.title")),m.Db(3),m.lc("ngIf",m.ic(8,4,t.settings$)))},directives:[u.a,a.k,a.i,h.a,f.a,d.b,p.a,v.h,v.j,a.j,d.e,V.a,U.k,y.a],pipes:[D.c,a.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),A),data:{title:"stms.menu.settings"}}],F=((j=n(function t(){e(this,t)})).\u0275mod=m.Nb({type:j}),j.\u0275inj=m.Mb({factory:function(e){return new(e||j)},imports:[[l.k.forChild(w)],l.k]}),j),I=((S=n(function t(){e(this,t)})).\u0275mod=m.Nb({type:S}),S.\u0275inj=m.Mb({factory:function(e){return new(e||S)},imports:[[a.c,o.a,F]]}),S)}}])}();