webpackJsonp([0,1],{"2Eg2":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GiK3"),o=r(a),u=n("EAod"),l=r(u),i=function(e){var t=e.videos.map(function(t){return o.default.createElement(l.default,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})});return o.default.createElement("div",{className:"col-sm-5"},o.default.createElement("ul",{className:"list-unstyled"},t))};t.default=i},"8/jq":function(e,t){},AdnW:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("GiK3"),i=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(){var e,n,o,u;r(this,t);for(var l=arguments.length,i=Array(l),c=0;c<l;c++)i[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={term:""},u=n,a(o,u)}return o(t,e),u(t,[{key:"render",value:function(){var e=this;return i.default.createElement("div",{className:"row"},i.default.createElement("nav",{className:"navbar navbar-dark bg-dark"},i.default.createElement("input",{className:"form-control mr-sm-2",onChange:function(t){return e.onInputChange(t.target.value)},type:"search",placeholder:"Search","aria-label":"Search"})))}},{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onSearchTermChange(e)}}]),t}(l.Component);t.default=c},EAod:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.video,n=e.onVideoSelect,r=t.snippet.thumbnails.medium.url;return a.default.createElement("li",{onClick:function(){return n(t)},className:"list_video media mb-3"},a.default.createElement("img",{className:"mr-3",src:r,alt:""}),a.default.createElement("div",{className:"media-body"},a.default.createElement("h5",{className:"mt-2 mb-1"},t.snippet.title),"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio"))};t.default=o},UNzC:function(e,t){},lVK7:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("GiK3"),c=r(i),s=n("O27J"),f=r(s),d=n("YfnX"),m=r(d),p=n("AdnW"),v=r(p),b=n("2Eg2"),h=r(b),y=n("u7Uu"),_=r(y);n("UNzC"),n("8/jq");var E=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={videos:[],selectedVideo:null},n.videoSearch("hello kityy"),n}return u(t,e),l(t,[{key:"videoSearch",value:function(e){var t=this;(0,m.default)({key:"AIzaSyCV4wSQ9bZH_llN1GrhoreT-ciozsLrJaA",term:e},function(e){t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"container-fluid"},c.default.createElement(v.default,{onSearchTermChange:function(t){return e.videoSearch(t)}}),c.default.createElement("div",{className:"row align-items-start"},c.default.createElement(_.default,{video:this.state.selectedVideo}),c.default.createElement(h.default,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos})))}}]),t}(i.Component);f.default.render(c.default.createElement(E,null),document.querySelector("#root"))},u7Uu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.video;if(!t)return a.default.createElement("div",null,"Loading...");var n=t.id.videoId,r="https://www.youtube.com/embed/"+n;return a.default.createElement("div",{className:"col-sm-7"},a.default.createElement("div",{className:"embed-responsive embed-responsive-16by9"},a.default.createElement("iframe",{className:"embed-responsive-item",src:r})),a.default.createElement("h5",null,t.snippet.title))};t.default=o}},["lVK7"]);
//# sourceMappingURL=app.85787c7442dd89cdc17d.js.map