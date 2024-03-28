"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return n?i.createElement(k,r(r({ref:t},p),{},{components:n})):i.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=n(83117),a=(n(67294),n(3905));const l={},r="Widget Class",o={unversionedId:"api-reference/core/widget",id:"api-reference/core/widget",title:"Widget Class",description:"A widget is a UI component that can interact with deck.gl's cameras and layers. Some examples are:",source:"@site/../docs/api-reference/core/widget.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/widget",permalink:"/docs/api-reference/core/widget",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/widget.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AttributeManager",permalink:"/docs/api-reference/core/attribute-manager"},next:{title:"Layer Catalog Overview",permalink:"/docs/api-reference/layers/"}},d={},c=[{value:"Widget Interface",id:"widget-interface",level:2},{value:"Members",id:"members",level:3},{value:"<code>id</code>",id:"id",level:5},{value:"<code>props</code> (Object)",id:"props",level:5},{value:"<code>viewId</code> (String | null)",id:"viewid",level:5},{value:"<code>placement</code> (String, optional)",id:"placement",level:5},{value:"Methods",id:"methods",level:3},{value:"<code>onAdd</code>",id:"onadd",level:5},{value:"<code>onRemove</code>",id:"onremove",level:5},{value:"<code>setProps</code>",id:"setprops",level:5},{value:"<code>onViewportChange</code>",id:"onviewportchange",level:5},{value:"<code>onRedraw</code>",id:"onredraw",level:5},{value:"<code>onHover</code>",id:"onhover",level:5},{value:"<code>onClick</code>",id:"onclick",level:5},{value:"<code>onDragStart</code>",id:"ondragstart",level:5},{value:"<code>onDrag</code>",id:"ondrag",level:5},{value:"<code>onDragEnd</code>",id:"ondragend",level:5}],p={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"widget-class"},"Widget Class"),(0,a.kt)("p",null,"A widget is a UI component that can interact with deck.gl's cameras and layers. Some examples are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A tooltip that follows the pointer and provide information for the hovered object"),(0,a.kt)("li",{parentName:"ul"},"A marker pinned to a geo-location containing HTML content"),(0,a.kt)("li",{parentName:"ul"},"Buttons to manipulate the camera, such as +/- zoom buttons, a compass rose for the MapView, a gimble widget for the OrbitView, etc."),(0,a.kt)("li",{parentName:"ul"},"A legend that offers visual comparison of sizes, colors etc. corresponding to the rendered layers and viewport. For example a distance ruler, a color scale for the HeatmapLayer, etc.")),(0,a.kt)("p",null,"You may find many ready-to-use widgets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@deck.gl/widgets")," module."),(0,a.kt)("p",null,"A widget is expected to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," interface. Here is a custom widget that shows a spinner while layers are loading:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {Widget} from '@deck.gl/core';\n\nclass LoadingIndicator implements Widget {\n  element?: HTMLDivElement;\n  size: number;\n\n  constructor(options: {\n    size: number;\n  }) {\n    this.size = options.size;\n  }\n\n  onAdd() {\n    const el = document.createElement('div');\n    el.className = 'spinner';\n    el.style.width = `${this.size}px`;\n    // TODO - create animation for .spinner in the CSS stylesheet\n    this.element = el;\n    return el;\n  }\n\n  onRemove() {\n    this.element = undefined;\n  }\n\n  onRedraw({layers}) {\n    const isVisible = layers.some(layer => !layer.isLoaded);\n    this.element.style.display = isVisible ? 'block' : 'none';\n  }\n}\n\ndeckgl.addWidget(new LoadingIndicator({size: 48}));\n")),(0,a.kt)("h2",{id:"widget-interface"},"Widget Interface"),(0,a.kt)("p",null,"When a widget instance is added to Deck, the user can optionally specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId")," that it is attached to (default ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"). If assigned, this widget will only respond to events occured inside the specific view that matches this id."),(0,a.kt)("h3",{id:"members"},"Members"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Widget")," implements the following members."),(0,a.kt)("h5",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h5"},"id")),(0,a.kt)("p",null,"Unique identifier of the widget."),(0,a.kt)("h5",{id:"props"},(0,a.kt)("inlineCode",{parentName:"h5"},"props")," (Object)"),(0,a.kt)("p",null,"Any options for the widget, as passed into the constructor and can be updated with ",(0,a.kt)("inlineCode",{parentName:"p"},"setProps"),"."),(0,a.kt)("h5",{id:"viewid"},(0,a.kt)("inlineCode",{parentName:"h5"},"viewId")," (String | null)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"))),(0,a.kt)("p",null,"The id of the view that the widget is attached to. If ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", the widget receives events from all views. Otherwise, it only receives events from the view that matches this id."),(0,a.kt)("h5",{id:"placement"},(0,a.kt)("inlineCode",{parentName:"h5"},"placement")," (String, optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'"))),(0,a.kt)("p",null,"Widget positioning within the view. One of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-left'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-right'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'fill'"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("h5",{id:"onadd"},(0,a.kt)("inlineCode",{parentName:"h5"},"onAdd")),(0,a.kt)("p",null,"Required. Called when the widget is added to a Deck instance."),(0,a.kt)("p",null,"Receives the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")," (Object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deck")," (Deck) - the Deck instance that this widget is being attached to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewId")," (String | null) - the view id that this widget is being attached to.")))),(0,a.kt)("p",null,"Returns an optional UI element that should be appended to the Deck container."),(0,a.kt)("h5",{id:"onremove"},(0,a.kt)("inlineCode",{parentName:"h5"},"onRemove")),(0,a.kt)("p",null,"Required. Called when the widget is removed."),(0,a.kt)("h5",{id:"setprops"},(0,a.kt)("inlineCode",{parentName:"h5"},"setProps")),(0,a.kt)("p",null,"Optional. Called to update widget options."),(0,a.kt)("h5",{id:"onviewportchange"},(0,a.kt)("inlineCode",{parentName:"h5"},"onViewportChange")),(0,a.kt)("p",null,"Op\u2020ional. Called when the containing view is changed. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if any viewport changes."),(0,a.kt)("p",null,"Receives the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewport")," (Viewport) - the viewport that has changed")),(0,a.kt)("h5",{id:"onredraw"},(0,a.kt)("inlineCode",{parentName:"h5"},"onRedraw")),(0,a.kt)("p",null,"Optional. Called when the containing view is redrawn. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if anything redraws."),(0,a.kt)("p",null,"Receives the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"viewports")," (Viewport[]) - the viewports that are being redrawn"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"layers")," (Layer[]) - the layers that are being redrawn")))),(0,a.kt)("h5",{id:"onhover"},(0,a.kt)("inlineCode",{parentName:"h5"},"onHover")),(0,a.kt)("p",null,"Optional. Called when a hover event occurs in the containing view. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if hover occurs in any view."),(0,a.kt)("p",null,"Receives arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")," - the ",(0,a.kt)("a",{parentName:"li",href:"/docs/developer-guide/interactivity#the-picking-info-object"},"picking info")," describing the object being hovered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," - the original gesture event")),(0,a.kt)("h5",{id:"onclick"},(0,a.kt)("inlineCode",{parentName:"h5"},"onClick")),(0,a.kt)("p",null,"Optional. Called when a click event occurs in the containing view. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if click occurs in any view."),(0,a.kt)("p",null,"Receives arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")," - the ",(0,a.kt)("a",{parentName:"li",href:"/docs/developer-guide/interactivity#the-picking-info-object"},"picking info")," describing the object being clicked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," - the original gesture event")),(0,a.kt)("h5",{id:"ondragstart"},(0,a.kt)("inlineCode",{parentName:"h5"},"onDragStart")),(0,a.kt)("p",null,"Optional. Called when a dragstart event occurs in the containing view. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if drag occurs in any view."),(0,a.kt)("p",null,"Receives arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")," - the ",(0,a.kt)("a",{parentName:"li",href:"/docs/developer-guide/interactivity#the-picking-info-object"},"picking info")," describing the object being dragged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," - the original gesture event")),(0,a.kt)("h5",{id:"ondrag"},(0,a.kt)("inlineCode",{parentName:"h5"},"onDrag")),(0,a.kt)("p",null,"Optional. Called when a drag event occurs in the containing view. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if drag occurs in any view."),(0,a.kt)("p",null,"Receives arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")," - the ",(0,a.kt)("a",{parentName:"li",href:"/docs/developer-guide/interactivity#the-picking-info-object"},"picking info")," describing the object being dragged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," - the original gesture event")),(0,a.kt)("h5",{id:"ondragend"},(0,a.kt)("inlineCode",{parentName:"h5"},"onDragEnd")),(0,a.kt)("p",null,"Optional. Called when a dragend event occurs in the containing view. If ",(0,a.kt)("inlineCode",{parentName:"p"},"viewId: null"),", will be called if drag occurs in any view."),(0,a.kt)("p",null,"Receives arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")," - the ",(0,a.kt)("a",{parentName:"li",href:"/docs/developer-guide/interactivity#the-picking-info-object"},"picking info")," describing the object being dragged."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event")," - the original gesture event")))}u.isMDXComponent=!0}}]);