webpackJsonp([3],{50:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}();l(51);var f=l(1),c=n(f),d=l(7),i=n(d),s=function(e){function t(e){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),o(t,[{key:"render",value:function(){var e=(0,i.default)("x-switch",{"x-switch--active":this.props.active},this.props.className);return c.default.createElement("a",{className:e,onClick:this.props.onClick},c.default.createElement("span",null),c.default.createElement("sub",null,this.props.on),c.default.createElement("sup",null,this.props.off))}}]),t}(f.Component);t.default=s},51:141,124:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}();l(136);var f=l(1),c=n(f),d=(l(88),l(15)),i=n(d),s=l(13),m=n(s),p=l(134),E=n(p),h=l(14),y=n(h),b=l(50),w=n(b),_=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e,to:"http://www.baidu.com"},c.default.createElement(m.default.Row.Header,null,c.default.createElement("span",{className:"space"})),c.default.createElement(m.default.Row.Body,null,c.default.createElement("h6",null,"列表的大标题，可以是产品名称等"),c.default.createElement("span",null,"产品的描述性文字")))}))},v=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e},c.default.createElement(m.default.Row.Header,null,c.default.createElement("span",{className:"space"})),c.default.createElement(m.default.Row.Body,null,c.default.createElement("h6",null,"列表的大标题，可以是产品名称等"),c.default.createElement("span",null,"产品的描述性文字")),c.default.createElement(m.default.Row.Footer,null,c.default.createElement(E.default,{price:"199.00"}),c.default.createElement("small",null,"共2件")))}))},O=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e},c.default.createElement(m.default.Row.Body,null,c.default.createElement("h6",null,"标题文字")),c.default.createElement(m.default.Row.Footer,null,c.default.createElement("span",null,"说明描述")))}))},k=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e,header:c.default.createElement(y.default,{name:"home"}),body:c.default.createElement("h6",null,"标题文字"),footer:"说明描述",to:"/"})}))},j=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e,checkbox:!0,checked:1==e,body:c.default.createElement("h6",null,"标题文字")})}))},R=function(){return c.default.createElement(m.default,null,[1,2,3].map(function(e){return c.default.createElement(m.default.Row,{key:e,radio:!0,checked:1==e,body:c.default.createElement("h6",null,"标题文字")})}))},g=function(){return c.default.createElement(m.default,null,c.default.createElement(m.default.Row,{header:c.default.createElement("label",null,"单行文本"),body:c.default.createElement("input",{type:"text",placeholder:"请输入"})}),c.default.createElement(m.default.Row,{vstart:!0,header:c.default.createElement("label",null,"多行文本"),body:c.default.createElement("textarea",{placeholder:"请输入"})}))},P=function(){return c.default.createElement(m.default,null,c.default.createElement(m.default.Row,{arrow:!0,header:c.default.createElement("label",null,"下拉菜单"),body:c.default.createElement("select",null,c.default.createElement("option",{value:""},"请选择"),c.default.createElement("option",{value:"2"},"下拉菜单A"),c.default.createElement("option",{value:"3"},"下拉菜单B"),c.default.createElement("option",{value:"4"},"下拉菜单C"))}))},T=function(e){function t(e){a(this,t);var l=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={active:!0},l}return r(t,e),o(t,[{key:"_click",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){return c.default.createElement(m.default,null,c.default.createElement(m.default.Row,{body:c.default.createElement("p",null,"是否要打开推送"),footer:c.default.createElement(w.default,{active:this.state.active,onClick:this._click.bind(this)})}))}}]),t}(f.Component),C=function(){return c.default.createElement(m.default,null,c.default.createElement(m.default.Row,{header:"头部",body:"主体",footer:"尾部"}),c.default.createElement(m.default.Row,{header:c.default.createElement("span",{className:"space"}),body:c.default.createElement("h6",null,"标题文字"),footer:c.default.createElement("span",null,"描述文字")}))},x=function(e){function t(e){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),o(t,[{key:"render",value:function(){return c.default.createElement(i.default,null,c.default.createElement(i.default.Header,{title:"列表",start:c.default.createElement("a",{onClick:this.props.router.goBack},c.default.createElement(y.default,{name:"back"}),"返回")}),c.default.createElement(i.default.Body,null,c.default.createElement(m.default.Title,{title:"带链接的商品列表"}),c.default.createElement(_,null),c.default.createElement(m.default.Title,{title:"带购买信息的商品列表"}),c.default.createElement(v,null),c.default.createElement(m.default.Title,{title:"带说明的列表"}),c.default.createElement(O,null),c.default.createElement(m.default.Title,{title:"带说明的链接列表"}),c.default.createElement(k,null),c.default.createElement(m.default.Title,{title:"单选框"}),c.default.createElement(j,null),c.default.createElement(m.default.Title,{title:"多选框"}),c.default.createElement(R,null),c.default.createElement(m.default.Title,{title:"文本框"}),c.default.createElement(g,null),c.default.createElement(m.default.Title,{title:"下拉菜单"}),c.default.createElement(P,null),c.default.createElement(m.default.Title,{title:"开关"}),c.default.createElement(T,null),c.default.createElement(m.default.Title,{title:"简写方式"}),c.default.createElement(C,null)))}}]),t}(f.Component);t.default=x},134:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}();l(146);var f=l(1),c=n(f),d=l(7),i=n(d),s=function(e){function t(e){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),o(t,[{key:"render",value:function(){var e=(0,i.default)("x-rmb",{"x-rmb--gray":this.props.gray},this.props.className);return c.default.createElement("h6",{className:e},this.props.price)}}]),t}(f.Component);t.default=s},136:141,146:141});