"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){j(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a,b){return n(a)||m(a,b)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function n(a){if(Array.isArray(a))return a}function o(a){"@babel/helpers - typeof";return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===o(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),r=q.h,e=q.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return r(a,{},b);return r(a,b,d)}},s=h("a"),a=h("button"),t=h("circle"),u=h("div"),v=h("footer"),w=h("g"),g=h("h1"),x=h("h2"),y=h("h3"),z=h("h4"),A=h("h5"),B=h("header"),C=h("i"),i=h("img"),D=h("input"),E=h("label"),F=h("li"),G=h("link"),H=h("main"),I=h("meta"),J=h("nav"),K=h("p"),p=h("path"),L=h("script"),M=h("span"),N=h("svg"),O=h("title"),P=h("ul"),Q=h("view"),R={app:{description:"Custom App Description",title:"Custom App Title"},buttonGlobal:" me!",count:0,gdpr:{allowed:[],show:!1},logo:"/example/logo.png",menu:[{text:"home",to:"/"},{text:"deep",to:"/deep/"}],outside:{buttonText:"click",localVar:!1},pageClass:{},pages:{"/example/":{description:"custom description",title:"h1 indexpage"},"/example/deep/":{htmlTitle:"testing the html title tag",title:"h1 deep/index"}},root:"/example/",theme:"dark",url:"/example/"},S={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},T=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),j=[e];return d?b="".concat(d).concat(e,"/"):j.push(" - ",h),[y(b?ba({to:b},j):j),i.map(function(c){var d=k(c,2),e=d[0],g=d[1];return g.map(function(c){return U(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},U=function(a){return u([z([a.day,"-",a.month,"-",a.year," - ",ba({to:a.name},a.title)]),K(a.description)])},V=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),u([x(c?ba({to:b},d):d),Object.entries(e[d]).map(function(c){var d=k(c,2),e=d[0],g=d[1];return T(f({},a,{month:e,days:g,link:b}))})])},W=function(b){return u([g("Counter"),u("count: ".concat(b.count)),u("this counter globally shares it's state with all other counters"),a({onclick:[ja.count,1]},"+1"),a({onclick:[ja.count,10]},"+10"),a({onclick:[ja.count,-1]},"-1"),a({onclick:[ja.count,-10]},"-10")])},X=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return v({class:"Footer"},[u({class:"Container"},[a,u({class:"Credits"},["made with a few bits of ",ba({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},Y=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,s=void 0===r?"Selected":r,v=c.denyText,x=void 0===v?"None":v;if(!f)return u({class:"Gdpr"},N({class:"ShowHide",onclick:[ja.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[w([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),t({cx:"192",cy:"128",r:"32"}),t({cx:"128",cy:"256",r:"32"}),t({cx:"288",cy:"384",r:"32"}),t({cx:"272",cy:"272",r:"16"}),t({cx:"400",cy:"336",r:"16"}),t({cx:"176",cy:"368",r:"16"})])]));var B=!!e.length;return u({class:"Gdpr"},[u({class:"Container"},[h&&y(h),j&&K(j),B&&[P(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return F({class:"Cookie"},[D({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[ja.gdpr.toggleAllow,{name:b}]}),(d||e)&&E({for:b},[d&&z(d),e&&K(e)])])}))],B?[A(n),D({class:"allow all",onclick:ja.gdpr.allow,type:"button",value:q}),D({class:"allow",onclick:ja.gdpr.close,type:"button",value:s}),D({class:"allow none",onclick:ja.gdpr.deny,type:"button",value:x})]:D({onclick:ja.gdpr.close,value:l,type:"button"})])])},Z=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,f=a.logotext,g=b(a,["logo","menu","logotext"]);return d||e||f?B({class:"Header"},[(d||f)&&ba({to:g.root,class:"Logo"},[d&&$(d),f&&M(f)]),e&&ca({state:g,items:e}),c]):void 0},$=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),i(a)},_=function(a){return[C(a.title)]},aa=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:ja.changeTheme},N({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ba=function(a,c){var d=a.to,e=a.action,f=void 0===e?ja.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ia.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),s(l,[i,c])},ca=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),J({className:c},P(e.map(function(a){return da(f({},a,{url:h,root:j,collapse:void 0===d||d}))})))},da=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;j&&p&&("-"===o||"#"===o)&&(n=j+n);var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var r=[],s=g.startsWith(l.to)||!k;return s&&e.length&&(r=P(e.map(function(a){return da(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),F(m,[l.to?ea(l,c):M(l,c),r])},ea=function(a,b){return ba(a,b)},fa=function(b){return u({class:"Outside".concat(b.outside.localVar?" Test":"")},[_(b),a({onclick:[ja.wrapperAction]},[b.outside.buttonText,b.buttonGlobal])])},ga=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return H(e,u({class:{Wrapper:!0}},[ha({state:d,page:c}),b]))},ha=function(a){var b=a.page,c=a.state;return[Z(c),u({class:"Page",id:"page"},b),X(c)]},ia={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ia.db.init(),g=ia.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ia.db.init(),f=void 0;return d&&e[d]&&(f=ia.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ia.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},ja={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},count:function count(a,b){return f({},a,{count:a.count+b})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ia.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[ja.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ia.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[ja.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ia.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[ja.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=k(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url){if(i&&i===a.hash)return a;window.scroll({top:0,behaviour:"smooth"})}return window.history.pushState({url:g,hash:i},"",c),i?window.location.hash=i:window.scroll({top:0,behaviour:"smooth"}),f({},a,{url:g,hash:i,prev:a.url})},pages:{"/example/deep/":{deepAction:function deepAction(a){return{test:!a.test}}}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;return e=e.substring(1),b.state&&(d=b.state.url,e=b.state.hash),e?window.location.hash=e:window.scroll(0,0),f({},a,{url:d,hash:e})},wrapperAction:function wrapperAction(a){return f({},a,{outside:f({},a.outside,{localVar:!a.outside.localVar})})}},ka={"/example/":function example(a){return[g(a.title),u([K("index page content"),K("can stretch multiple lines"),P([F("and contain"),F("lists of content")])]),W(a),x("local var:"),K("the variable determining the color is local to this page."),fa(a)]},"/example/404/":function example404(){return u("404 - not found")},"/example/deep/":function exampleDeep(a){return[g(a.title),u("page content"),W(a)]}};e({init:[f({},R,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ia.db.get,{key:"magic-gdpr",action:ja.gdpr.show}]]],subscriptions:function subscriptions(){return[[S.listenPopState,ja.pop]]},view:function(a){var b=ka[a.url]?a.url:"/404/",c=ka[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),ga({page:c,state:a},[Y(a),aa(a)])},node:document.getElementById("Magic")});