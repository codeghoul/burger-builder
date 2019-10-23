(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},,function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(30),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},p=a(9),g=a.n(p),_=a(15),h=a.n(_),b=a(16),v=a.n(b),f=function(e){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:h.a,alt:"Burger"}))},E=a(17),B=a.n(E),w=a(10),C=a.n(w),k=function(e){return r.a.createElement("li",{className:C.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?C.a.active:null},e.children))},O=function(e){return r.a.createElement("ul",{className:B.a.NavigationItems},r.a.createElement(k,{link:"/",active:!0},"Burger Builder"),r.a.createElement(k,{link:"/"},"Checkout"))},y=a(18),N=a.n(y),S=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(S,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(f,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(O,null)))},j=a(19),T=a.n(j),L=function(e){return e.show?r.a.createElement("div",{className:T.a.Backdrop,onClick:e.clicked}):null},I=a(7),x=a.n(I),P=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(f,null)),r.a.createElement("nav",null,r.a.createElement(O,null))))},H=a(20),M=a.n(H),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:M.a.Content},this.props.children))}}]),t}(n.Component),Y=a(21),F=a(22),R=a.n(F),J=a(1),K=a.n(J),X=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:K.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:K.a.BreadTop},r.a.createElement("div",{className:K.a.Seeds1}),r.a.createElement("div",{className:K.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:K.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:K.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:K.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:K.a.Bacon});break;default:t=null}return t},U=function(e){var t=[];for(var a in e.ingredients)for(var n=0;n<e.ingredients[a];n++)t.push(r.a.createElement(X,{key:a+n,type:a}));return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients.")),r.a.createElement("div",{className:R.a.Burger},r.a.createElement(X,{type:"bread-top"}),t,r.a.createElement(X,{type:"bread-bottom"}))},W=a(11),q=a.n(W),z=a(8),Q=a.n(z),V=function(e){return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},e.label),r.a.createElement("button",{onClick:e.removed,className:Q.a.Less,disabled:e.disabled},"Less"),r.a.createElement("button",{onClick:e.added,className:Q.a.More},"More"))},Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],$=function(e){return r.a.createElement("div",{className:q.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),Z.map((function(t){return r.a.createElement(V,{key:t.label,label:t.label,removed:function(){return e.ingredientRemoved(t.type)},added:function(){return e.ingredientAdded(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},G=a(23),ee=a.n(G),te=function(e){return r.a.createElement(m,null,r.a.createElement(L,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:ee.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},ae=a(24),ne=a(12),re=a.n(ne),le=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){var t=Object.entries(e.ingredients).map((function(e){var t=Object(ae.a)(e,2);return{name:t[0],amount:t[1]}})).map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("span",{style:{textTransform:"capitalize"}},e.name),": ",e.amount)}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price:  ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"))};function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se={salad:.5,cheese:.4,meat:1.3,bacon:.7},ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=ie({},a.state.ingredients);n[e]=t;var r=se[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(0!==t){var n=t-1,r=ie({},a.state.ingredients);r[e]=n;var l=se[e],o=a.state.totalPrice-l;a.setState({totalPrice:o,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.values(e).some((function(e){return e>0}));this.setState({purchasable:t})}},{key:"render",value:function(){var e=ie({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(oe,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(U,{ingredients:this.state.ingredients}),r.a.createElement($,{disabled:e,ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,price:this.state.totalPrice,ordered:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),t}(n.Component),de=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null,r.a.createElement(ue,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.4f5543ea.chunk.js.map