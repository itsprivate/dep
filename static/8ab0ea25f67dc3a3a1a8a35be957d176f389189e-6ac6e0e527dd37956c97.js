(self.webpackChunkexample=self.webpackChunkexample||[]).push([[712],{6479:function(e,t,n){var r=n(7316);e.exports=function(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},4070:function(e){"use strict";function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(o===c-1||1===a);else if(o!==c-1&&2===a){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",i=0):i=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),o=c,a=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=c,a=0;continue}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,c):r=e.slice(o+1,c),i=c-o-1;o=c,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a;o>=0?a=arguments[o]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(r=a+"/"+r,i=47===a.charCodeAt(0))}return r=n(r,!i),i?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,a=o-i,c=1;c<n.length&&47===n.charCodeAt(c);++c);for(var l=n.length-c,u=a<l?a:l,s=-1,f=0;f<=u;++f){if(f===u){if(l>u){if(47===n.charCodeAt(c+f))return n.slice(c+f+1);if(0===f)return n.slice(c+f)}else a>u&&(47===e.charCodeAt(i+f)?s=f:0===f&&(s=0));break}var p=e.charCodeAt(i+f);if(p!==n.charCodeAt(c+f))break;47===p&&(s=f)}var d="";for(f=i+s+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(c+s):(c+=s,47===n.charCodeAt(c)&&++c,n.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var c=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(47===u){if(!a){i=r+1;break}}else-1===l&&(a=!1,l=r+1),c>=0&&(u===n.charCodeAt(c)?-1==--c&&(o=r):(c=-1,o=l))}return i===o?o=l:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){i=r+1;break}}else-1===o&&(a=!1,o=r+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,a=0,c=e.length-1;c>=0;--c){var l=e.charCodeAt(c);if(47!==l)-1===i&&(o=!1,i=c+1),46===l?-1===n?n=c:1!==a&&(a=1):-1!==n&&(a=-1);else if(!o){r=c+1;break}}return-1===n||-1===i||0===a||1===a&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,i=e.charCodeAt(0),o=47===i;o?(n.root="/",r=1):r=0;for(var a=-1,c=0,l=-1,u=!0,s=e.length-1,f=0;s>=r;--s)if(47!==(i=e.charCodeAt(s)))-1===l&&(u=!1,l=s+1),46===i?-1===a?a=s:1!==f&&(f=1):-1!==a&&(f=-1);else if(!u){c=s+1;break}return-1===a||-1===l||0===f||1===f&&a===l-1&&a===c+1?-1!==l&&(n.base=n.name=0===c&&o?e.slice(1,l):e.slice(c,l)):(0===c&&o?(n.name=e.slice(1,a),n.base=e.slice(1,l)):(n.name=e.slice(c,a),n.base=e.slice(c,l)),n.ext=e.slice(a,l)),c>0?n.dir=e.slice(0,c-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r},8730:function(e,t,n){"use strict";n.d(t,{c:function(){return I}});var r=n(6479),i=n.n(r),o=n(8),a=n.n(o),c=n(9713),l=n.n(c),u=n(7294),s=n(8262),f=n.n(s),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function d(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(f()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var i=new RegExp(p),o=null;null!==(o=i.exec(e));)if(o[0].trim())if(o[1]){var a=o[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],i.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var h=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,g=/^\s*$/,m=Object.create(null);function v(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(v,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var x={parse:function(e,t){t||(t={}),t.components||(t.components=m);var n,r=[],i=[],o=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(h,(function(c,l){if(a){if(c!=="</"+n.name+">")return;a=!1}var u,s="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),p=l+c.length,h=e.charAt(p);if(f){var m=d(c);return o<0?(r.push(m),r):((u=i[o]).children.push(m),r)}if(s&&(o++,"tag"===(n=d(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!h||"<"===h||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===o&&r.push(n),(u=i[o-1])&&u.children.push(n),i[o]=n),(!s||n.voidElement)&&(o>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(o--,n=-1===o?r:i[o]),!a&&"<"!==h&&h)){u=-1===o?r:i[o].children;var v=e.indexOf("<",p),x=e.slice(p,-1===v?void 0:v);g.test(x)&&(x=" "),(v>-1&&o+u.length>=0||" "!==x)&&u.push({type:"text",content:x})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+v("",t)}),"")}},b=n(1322);function y(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var O={};function j(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&O[t[0]]||("string"==typeof t[0]&&(O[t[0]]=new Date),y.apply(void 0,t))}var w=["format"],Z=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function C(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function P(e){return Array.isArray(e)?e:[e]}function z(e,t){if(!e)return"";var n="",r=P(e),o=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if(u.isValidElement(e)){var c=Object.keys(e.props).length,l=o.indexOf(e.type)>-1,s=e.props.children;if(!s&&l&&0===c)n+="<".concat(e.type,"/>");else if(s||l&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(l&&1===c&&"string"==typeof s)n+="<".concat(e.type,">").concat(s,"</").concat(e.type,">");else{var f=z(s,t);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)y("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===a()(e)){var p=e.format,d=i()(e,w),h=Object.keys(d);if(1===h.length){var g=p?"".concat(h[0],", ").concat(p):h[0];n+="{{".concat(g,"}}")}else y("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else y("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function S(e,t,n,r,i){if(""===t)return[];var o=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(o.join("|")).test(t);if(!e&&!c)return[t];var l={};!function e(t){P(t).forEach((function(t){"string"!=typeof t&&(k(t)?e(C(t)):"object"!==a()(t)||u.isValidElement(t)||Object.assign(l,t))}))}(e);var s=n.services.interpolator.interpolate(t,E(E({},l),i),n.language),f=x.parse("<0>".concat(s,"</0>"));function p(e,t,n){var r=C(e),i=h(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return u.isValidElement(e)}))}(r)&&0===i.length?r:i}function d(e,t,n,r,i){e.dummy&&(e.children=t),n.push(u.cloneElement(e,E(E({},e.props),{},{key:r}),i?void 0:t))}function h(t,n,i){var l=P(t);return P(n).reduce((function(t,n,s){var f,g,m,v=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var x=l[parseInt(n.name,10)];!x&&1===i.length&&i[0][n.name]&&(x=i[0][n.name]),x||(x={});var b=0!==Object.keys(n.attrs).length?(f={props:n.attrs},(m=E({},g=x)).props=Object.assign(f.props,g.props),m):x,y=u.isValidElement(b),O=y&&k(n,!0)&&!n.voidElement,j=c&&"object"===a()(b)&&b.dummy&&!y,w="object"===a()(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"==typeof b)t.push(b);else if(k(b)||O){d(b,p(b,n,i),t,s)}else if(j){var Z=h(l,n.children,i);t.push(u.cloneElement(b,E(E({},b.props),{},{key:s}),Z))}else if(Number.isNaN(parseFloat(n.name))){if(w)d(b,p(b,n,i),t,s,n.voidElement);else if(r.transSupportBasicHtmlNodes&&o.indexOf(n.name)>-1)if(n.voidElement)t.push(u.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var A=h(l,n.children,i);t.push(u.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},A))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var C=h(l,n.children,i);t.push("<".concat(n.name,">").concat(C,"</").concat(n.name,">"))}}else if("object"!==a()(b)||y)1===n.children.length&&v?t.push(u.cloneElement(b,E(E({},b.props),{},{key:s}),v)):t.push(u.cloneElement(b,E(E({},b.props),{},{key:s})));else{var P=n.children[0]?v:null;P&&t.push(P)}}else if("text"===n.type){var z=r.transWrapTextNodes;z?t.push(u.createElement(z,{key:"".concat(n.name,"-").concat(s)},n.content)):t.push(n.content)}return t}),[])}return C(h([{dummy:!0,children:e}],f,P(e||[]))[0])}function I(e){var t=e.children,n=e.count,r=e.parent,o=e.i18nKey,a=e.tOptions,c=void 0===a?{}:a,l=e.values,s=e.defaults,f=e.components,p=e.ns,d=e.i18n,h=e.t,g=i()(e,Z),m=(0,u.useContext)(b.OO)||{},v=m.i18n,x=m.defaultNS,y=d||v||(0,b.nI)();if(!y)return j("You will need to pass in an i18next instance by using i18nextReactModule"),t;var O=h||y.t.bind(y)||function(e){return e},w=E(E({},(0,b.JP)()),y.options&&y.options.react),A=p||O.ns||x||y.options&&y.options.defaultNS;A="string"==typeof A?[A]:A||["translation"];var k=s||z(t,w)||w.transEmptyNodeValue||o,C=w.hashTransKey,P=o||(C?C(k):k),I=l?c.interpolation:{interpolation:E(E({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},L=E(E(E(E({},c),{},{count:n},l),I),{},{defaultValue:k,ns:A}),T=S(f||t,P?O(P,L):k,y,w,L),U=void 0!==r?r:w.defaultTransParent;return U?u.createElement(U,g,T):T}},8594:function(e,t,n){var r,i,o;o=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(r>0&&(i=i.replace(/^[\/]+/,"")),i=r<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var o=t.join("/"),a=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i)},8262:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},4036:function(e,t,n){"use strict";var r=n(6156),i=(n(7294),n(5414)),o=n(5444),a=n(5302),c=n(8594),l=n.n(c),u=n(6802),s=n(6473),f=n(3431);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=e.description,n=e.lang,r=e.meta,c=e.title,p=e.authorImage,h=e.imageSource,g=e.imageAlt,m=e.location,v=e.pageType,x=e.item,b=(0,o.useStaticQuery)("3948070931"),y=b.site,O=b.avatar,j=b.defaultImage,w=(0,a.ql)().locale,Z=(0,s.t)("description",y.siteMetadata.localize,y.siteMetadata.description,w),A=t||Z,E=y.siteMetadata.telegram,k=(0,s.t)("author",y.siteMetadata.localize,y.siteMetadata.author,w),C=y.siteMetadata.siteUrl,P=(0,s.t)("keywords",y.siteMetadata.localize,y.siteMetadata.keywords,w),z=p||O&&(0,u.e)(O),S=function(e){return e.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?e:l()(C,(0,o.withPrefix)(e))},I=S(h||(j?(0,u.e)(j):null)),L=g||A,T=(0,s.t)("title",y.siteMetadata.localize,y.siteMetadata.title,w),U=c+" - "+T,N={"@type":"Person",name:k},R={"@type":"ImageObject",url:S(z),"@id":l()(C,(0,o.withPrefix)("#logo")),caption:T+" Logo"},D=[{"@context":"http://schema.org","@type":"WebSite","@id":l()(C,(0,o.withPrefix)("#website")),url:(0,o.withPrefix)(C),name:T,image:R}];if("detail"===v){var _=l()(C,m.pathname),M=new Date(x.date);D.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":_,name:c,image:I}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:_,name:c,headline:c,image:{"@type":"ImageObject",url:I},author:N,publisher:d(d({},N),{},{"@type":"Organization",logo:R}),datePublished:M,description:A})}return(0,f.tZ)(i.Z,{htmlAttributes:{lang:n||w},title:U,meta:[{name:"description",content:A},{name:"keywords",content:P.join(",")},{property:"og:title",content:c},{property:"og:description",content:A},{property:"og:type",content:"website"},{name:"twitter:creator",content:k},{name:"twitter:title",content:c},{name:"twitter:description",content:A}].concat(I?[{name:"og:image",content:I},{name:"og:image:alt",content:L},{name:"twitter:image",content:I},{name:"twitter:image:alt",content:L},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(E?[{name:"telegram:channel",content:E}]:[]).concat(r)},(0,f.tZ)("script",{type:"application/ld+json"},JSON.stringify(D)))}h.defaultProps={meta:[]},t.Z=h},2534:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(977),i=n(9983),o=n(5302),a=n(8730);function c(e){var t=e.children,n=e.to,c=e.count;return(0,r.tZ)(i.rU,{sx:{bg:"gray.1",mr:3,mb:2,color:"textMuted",px:2,py:1,":hover":{bg:"gray.2"}},as:o.UE,to:n},(0,r.tZ)(a.c,{ns:"translation-tag"},t),c&&"("+c+")")}},6473:function(e,t,n){"use strict";n.d(t,{t:function(){return r.t},YQ:function(){return r.YQ},L9:function(){return r.L9},nZ:function(){return r.nZ},Mg:function(){return i}});var r=n(7260);function i(e,t,n){return function(e,t){return e===t}(t,e)||n.split("/")[1]===t?n:"/"+t+n}},7260:function(e,t){var n=function(e,t,n,r){void 0===r&&(r="zh");var i=n;if(t&&Array.isArray(t))for(var o=0;o<t.length;o++){var a=t[o];if(r===a.locale&&a[e])return i=a[e]}return i};t.t=n;t.YQ=function(e,t){void 0===t&&(t="zh");var r=e.title,i=[];e.parent&&e.parent.localize&&(i=e.parent.localize);var o=e.provider;if("Product Hunt"===o){var a=r.split(" - "),c=a[0],l=a[1];r=c+" - "+n("tagline",i,l,t)}else if("Twitter"===o){var u=e.sharedContent,s="full_text";u&&u.title&&r.startsWith("RT @")&&(s="retweeted_status_full_text",r=u.title),r=n(s,i,r,t)}else r=n("title",i,r,t);return r};t.nZ=function(e,t){void 0===t&&(t="zh");var r=e.sharedContent;if(!r||!r.title)return null;var i=r.title,o=[];return e.parent&&e.parent.localize&&(o=e.parent.localize),i=n("quoted_status_full_text",o,i,t)};t.L9=function(e,t){void 0===t&&(t="zh");var r=e.excerpt,i=[];e.parent&&e.parent.localize&&(i=e.parent.localize);var o=e.provider;return r=n("Product Hunt"===o||"Youtube"===o?"description":"Reddit"===o?"the_new_excerpt":"excerpt",i,r,t)}},5302:function(e,t,n){"use strict";n.d(t,{UE:function(){return s},ql:function(){return c.q}});n(6752),n(7294);var r=n(2122),i=n(9756),o=n(5444),a=n(3346),c=n(6410),l=n(3431),u=["to","language"],s=function(e){var t=e.to,n=e.language,s=(0,i.Z)(e,u),f=(0,c.q)(),p=f.defaultLang,d=f.prefixDefault,h=f.locale,g=n||h;return(0,l.tZ)(o.Link,(0,r.Z)({},s,{to:(0,a.localizedPath)({defaultLang:p,prefixDefault:d,locale:g,path:t})}))};n(9499)},6212:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5444),i=n(6802),o=n(977),a=n(9983),c=n(2877),l=n(7294),u=n(8730),s=n(5302),f=n(3431);function p(){return(0,f.tZ)(l.Fragment,null,(0,f.tZ)(u.c,null,"See what's buzzing on In-depth thinking in your native language on"," ",(0,f.tZ)(a.rU,{as:s.UE,to:"/"},"depth.buzzing.cc")))}var d="68699025",h=function(e){var t=e.basePath;t=t||"/";var n=(0,r.useStaticQuery)(d),l=n.site.siteMetadata.author,u=n.avatar;return(0,o.tZ)(a.kC,{"data-test":"bio",sx:{mb:4,alignItems:"center"}},(0,o.tZ)(a.rU,{sx:{minWidth:"56px",pr:2,pt:1},as:r.Link,to:(0,r.withPrefix)(t)},u?(0,o.tZ)(i.G,{image:(0,i.d)(u),alt:l,sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"}}):(0,o.tZ)("div",{sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},role:"presentation"})),(0,o.tZ)(c.Ge.div,null,(0,o.tZ)(p,null)))}},7391:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(9756),i=(n(7294),n(2877)),o=n(9983),a=n(7825),c=n(977),l=n(5444),u=n(5302),s=n(6473),f=function(e){e.children;var t=e.basePath,n=e.pageContext.locale,r=e.siteMetadata;return(0,c.tZ)(i.Ge.h3,{sx:{mb:2,mt:2,mr:[3,4]}},(0,c.tZ)(o.rU,{sx:{color:"text"},as:u.UE,to:(0,l.withPrefix)(t)},(0,s.t)("title",r.localize,r.title,n)))},p=n(2122),d=function(e){var t=e.pageContext.locale,n=e.siteMetadata,r=(0,s.t)("menuLinks",n.localize,n.menuLinks,t);return r?(0,c.tZ)(o.kC,{as:"nav"},r.map((function(e){var t={},n=!1,r=e.url;return e.external&&(t.target="_blank",t.rel="noopener noreferrer",n=!0),!1!==e.prefetch||e.external||(n=!0),(0,c.tZ)(o.OL,(0,p.Z)({as:n?o.OL:u.UE,to:n?void 0:r,href:n?r:void 0,key:r},t),e.name)}))):null},h=n(4070),g=function(e){var t=e.pageContext,n=(0,u.ql)(),r=n.locale,i=n.config,a=n.defaultLang;return(0,c.tZ)(o.kC,null,(0,c.tZ)(o.Ph,{sx:{minWidth:"6.5rem"},value:r,onChange:function(e){var n=e.target.value,r=(0,l.withPrefix)((0,h.join)((n===a?"":"/"+n)+t.originalPath));(0,l.navigate)(r)}},i.map((function(e){return(0,c.tZ)("option",{key:e.code,value:e.code},e.localName)}))))},m=function(e){var t=e.title,n=e.pageType;return(0,c.tZ)("header",{sx:{px:[3,4],mb:4,maxWidth:"5xl",mx:"auto"}},(0,c.tZ)(i.Ge.div,{sx:{pt:3,pb:"detail"===n?2:3,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"muted"}},(0,c.tZ)(i.Ge.div,{sx:{display:"flex",alignItems:"baseline",flexWrap:"wrap",justifyContent:"space-between"}},(0,c.tZ)(o.kC,{sx:{alignItems:"baseline",flexWrap:"wrap",flexGrow:1}},(0,c.tZ)(f,e,t),(0,c.tZ)(d,e)),(0,c.tZ)(g,e))))},v=n(5016),x=n(5414),b=n(3431),y=["children"],O=function(e){var t=e.children,n=(0,r.Z)(e,y),c=(0,v.Z)().webfontURL;return(0,b.tZ)(i.Ge.root,null,(0,b.tZ)(x.Z,null,(0,b.tZ)("link",{rel:"stylesheet",href:c})),(0,b.tZ)(m,n),(0,b.tZ)(o.xu,{css:(0,a.iv)({maxWidth:["full","5xl"],mx:"auto",px:[3,4],pb:4})},t))}},5016:function(e,t,n){"use strict";var r=n(5444);t.Z=function(){return(0,r.useStaticQuery)("2506312863").timelineThemeConfig}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}},2663:function(e){e.exports=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),i=n(9607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),i=n(9932),o=n(4332),a=n(3448),c=r?r.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return i(t,e)+"";if(a(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),i=n(3816),o=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(o(i(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(l){}var i=a.call(e);return r&&(t?e[c]=n:delete e[c]),i}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+i+"]",a="\\d+",c="[\\u2700-\\u27bf]",l="["+n+"]",u="[^\\ud800-\\udfff"+i+a+t+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+l+"|"+u+")",h="(?:"+p+"|"+u+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",m="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?",b=x+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+x+v+")*"),y="(?:"+[c,s,f].join("|")+")"+b,O=RegExp([p+"?"+l+"+"+g+"(?="+[o,p,"$"].join("|")+")",h+"+"+m+"(?="+[o,p+d,"$"].join("|")+")",p+"?"+d+"+"+g,p+"+"+m,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,y].join("|"),"g");e.exports=function(e){return e.match(O)||[]}},3816:function(e,t,n){var r=n(9389),i=n(9833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=i(e))&&e.replace(o,r).replace(a,"")}},4332:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),i=n(7005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),i=n(3157),o=n(9833),a=n(2757);e.exports=function(e,t,n){return e=o(e),void 0===(t=n?void 0:t)?i(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=8ab0ea25f67dc3a3a1a8a35be957d176f389189e-6ac6e0e527dd37956c97.js.map