(this.webpackJsonpbarzelim=this.webpackJsonpbarzelim||[]).push([[0],{48:function(e,t,a){e.exports=a(64)},53:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/rack_34u.db0184f8.png"},62:function(e,t){e.exports=["servers","storages","networks"]},63:function(e,t){e.exports=["unknown","secret","topsecret"]},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),s=(a(53),a(9)),l=a.n(s),i=a(23),u=a(34),h=a(16),d=a(17),p=a(20),m=a(19),f=(a(55),a(72)),v=a(67),g=a(68),b=a(69),k=a(46),E=a(25),w=a(66),y=(a(39),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).openssh=function(){var t=e.props.uData.name;window.open("ssh://"+t,t)},e}return Object(d.a)(a,[{key:"render",value:function(){console.log("in modal");var e=[];Object.entries(this.props.uData).forEach((function(t){var a=Object(k.a)(t,2),n=a[0],o=a[1];"_links"!==n&&e.push(r.a.createElement("div",null,n," : ",o))}));var t=r.a.createElement(E.a,{show:this.props.show,animation:!0,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(E.a.Header,null,r.a.createElement(E.a.Title,null,"More Data")),r.a.createElement(E.a.Body,null,e),r.a.createElement(E.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",onClick:this.props.hide},"Close"),r.a.createElement(w.a,{variant:"info",onClick:this.openssh},"Open SSH Connection")));return console.log("_modal"),console.log(t),console.log(this.props),t}}]),a}(r.a.Component)),j=(a(58),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showUModal:!1,curU:""},e.showModal=function(t){e.setState({showUModal:!0,curU:t})},e.hideModal=function(){e.setState({showUModal:!1})},e}return Object(d.a)(a,[{key:"renderRack",value:function(){var e=this;return this.props.dc.map((function(t){return r.a.createElement(f.a,{className:"ml-auto mr-auto"},r.a.createElement(f.a.Body,{key:t.rack_id},r.a.createElement(f.a.Title,null,"Rack #",t.rack_id),r.a.createElement(f.a.Subtitle,{className:"mb-2 text-muted"},t.network),r.a.createElement(v.a,{responsive:!0,hover:!0,borderless:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{bgcolor:"#000000",width:"3%"}),r.a.createElement("th",{bgcolor:"#000000"}),r.a.createElement("th",{bgcolor:"#000000",width:"3%"}))),e.renderU(t))))}))}},{key:"renderU",value:function(e){var t=this;return e.data.reverse().map((function(a,n){return r.a.createElement("tbody",null,r.a.createElement("tr",{onClick:function(){return t.openUdata(a)}},r.a.createElement("td",{bgcolor:"#000000",width:"3%"},e.data.length-n),r.a.createElement("td",{align:"center"},a.name),r.a.createElement("td",{bgcolor:"#000000",width:"3%"},e.data.length-n)))}))}},{key:"openUdata",value:function(e){this.state.showUModal?this.hideModal():this.showModal(e)}},{key:"render",value:function(){return r.a.createElement(g.a,{align:"center"},r.a.createElement(b.a,{xs:"4"},this.renderRack()),r.a.createElement(y,{show:this.state.showUModal,uData:this.state.curU,hide:this.hideModal}))}}]),a}(r.a.Component)),O=a(71),x=a(70),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){fetch("/api/devices").then((function(e){return e.json()})).then((function(e){console.log(e)})).catch(console.log)}},{key:"render",value:function(){return r.a.createElement(O.a,{bg:"dark",expand:"lg",variant:"dark"},r.a.createElement(O.a.Brand,{href:"#home"},"Barzelim"),r.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(x.a,{className:"mr-auto"},r.a.createElement(x.a.Link,{href:"#home"},"Home"))))}}]),a}(r.a.Component),D=a(62),M=a(63),U={getDevices:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,fetch("/api/devices");case 4:return t=e.sent,e.next=7,t.json();case 7:t=e.sent,console.log(D),D.forEach((function(e){t._embedded[e].forEach((function(t){t.subType=e;var a=t._links.self.href.split("//")[t._links.self.href.split("//").length-1];t.deviceID=a.split("/")[a.split("/").length-1]})),a=a.concat(t._embedded[e])})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error();case 15:return console.log("in getDevices!"),console.log(t),console.log(a),e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),getRacks:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/racks");case 3:return e.next=5,e.sent.json();case 5:t=(t=e.sent)._embedded.racks,console.log("racks"),console.log(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error();case 14:return e.abrupt("return",t);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),createDc:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:[],a=o.length>1&&void 0!==o[1]?o[1]:[],n=[],r={},t.forEach((function(e){r.rack_id=e.number,r.network=M[e.networkId],r.data=[];for(var t=0;t<e.size;t++)r.data.push({uNumber:t});console.log("data size ".concat(r.data.length)),e.content.forEach((function(e){var t={};a.forEach((function(a){a.deviceID===e&&(t=a)})),r.data[t.uNumber-1]=t,console.log("device ID!"+t)})),console.log("temporaryRack"),console.log(r),console.log(e.number),n.push(r)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getDeviceById:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:"",(a.length>1&&void 0!==a[1]?a[1]:[]).forEach((function(e){if(e.deviceID===t)return e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},R=[],_=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:"",searchResults:[]},e.handleChange=function(t){var a=Object(u.a)({},e.state);console.log(t.target.value),a.searchTerm=t.target.value,a.searchResults=R.filter((function(e){return JSON.stringify(e).toLowerCase().includes(a.searchTerm.toLowerCase().trim())})),e.setState(a)},e}return Object(d.a)(a,[{key:"componentWillMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=Object(u.a)({},this.state)).searchResults=R,this.setState(t),e.next=5,U.getDevices();case 5:return a=e.sent,e.next=8,U.getRacks();case 8:return n=e.sent,e.next=11,U.createDc(n,a);case 11:R=e.sent,(t=Object(u.a)({},this.state)).searchResults=R,this.setState(t),console.log(a),console.log(n);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("input",{type:"text",placeholder:"Type any vaule to search in the DC...",value:this.state.searchTerm,onChange:this.handleChange}),r.a.createElement(j,{dc:this.state.searchResults}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.df710d42.chunk.js.map