/*
Copyright 2012, KISSY UI Library v1.30
MIT Licensed
build time: Dec 20 22:23
*/
KISSY.add("anim",function(b,d,f){d.Easing=f;b.mix(b,{Anim:d,Easing:d.Easing});return d},{requires:["anim/base","anim/easing","anim/color","anim/background-position"]});
KISSY.add("anim/background-position",function(b,d,f,g){function a(a){a=a.replace(/left|top/g,"0px").replace(/right|bottom/g,"100%").replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");a=a.match(/(-?[0-9\.]+)(px|%|em|pt)\s(-?[0-9\.]+)(px|%|em|pt)/);return[parseFloat(a[1]),a[2],parseFloat(a[3]),a[4]]}function c(){c.superclass.constructor.apply(this,arguments)}b.extend(c,g,{load:function(){c.superclass.load.apply(this,arguments);this.unit=["px","px"];if(this.from){var b=a(this.from);this.from=[b[0],b[2]]}else this.from=
[0,0];this.to?(b=a(this.to),this.to=[b[0],b[2]],this.unit=[b[1],b[3]]):this.to=[0,0]},interpolate:function(a,b,d){var f=this.unit,g=c.superclass.interpolate;return g(a[0],b[0],d)+f[0]+" "+g(a[1],b[1],d)+f[1]},cur:function(){return d.css(this.anim.config.el,"backgroundPosition")},update:function(){var a=this.prop,b=this.anim.config.el,c=this.interpolate(this.from,this.to,this.pos);d.css(b,a,c)}});return g.Factories.backgroundPosition=c},{requires:["dom","./base","./fx"]});
KISSY.add("anim/base",function(b,d,f,g,a,c,j){function e(a,c,h,f,j){if(a.el)return h=a.el,c=a.props,delete a.el,delete a.props,new e(h,c,a);if(a=d.get(a)){if(!(this instanceof e))return new e(a,c,h,f,j);c="string"==typeof c?b.unparam(""+c,";",":"):b.clone(c);b.each(c,function(a,d){var h=b.trim(p(d));h?d!=h&&(c[h]=c[d],delete c[d]):delete c[d]});h=b.isPlainObject(h)?b.clone(h):{duration:parseFloat(h)||void 0,easing:f,complete:j};h=b.merge(x,h);h.el=a;h.props=c;this.config=h;this._duration=1E3*h.duration;
this.domEl=a;this._backupProps={};this._fxs={};this.on("complete",i)}}function i(a){var c,h,e=this.config;b.isEmptyObject(c=this._backupProps)||d.css(e.el,c);(h=e.complete)&&h.call(this,a)}function m(){var e=this.config,f=this._backupProps,h=e.el,k,j,i,q=e.specialEasing||{},u=this._fxs,m=e.props;s(this);if(!1===this.fire("beforeStart"))this.stop(0);else{if(h.nodeType==v.ELEMENT_NODE)for(i in j="none"===d.css(h,"display"),m)if(k=m[i],"hide"==k&&j||"show"==k&&!j){this.stop(1);return}if(h.nodeType==
v.ELEMENT_NODE&&(m.width||m.height))k=h.style,b.mix(f,{overflow:k.overflow,"overflow-x":k.overflowX,"overflow-y":k.overflowY}),k.overflow="hidden","inline"===d.css(h,"display")&&"none"===d.css(h,"float")&&(y.ie?k.zoom=1:k.display="inline-block");b.each(m,function(a,d){var c;b.isArray(a)?(c=q[d]=a[1],m[d]=a[0]):c=q[d]=q[d]||e.easing;"string"==typeof c&&(c=q[d]=g[c]);q[d]=c||g.easeNone});b.each(w,function(a,c){var e,f;if(f=m[c])e={},b.each(a,function(a){e[a]=d.css(h,a);q[a]=q[c]}),d.css(h,c,f),b.each(e,
function(a,b){m[b]=d.css(h,b);d.css(h,b,a)}),delete m[c]});for(i in m){k=b.trim(m[i]);var l,p,n={prop:i,anim:this,easing:q[i]},o=c.getFx(n);b.inArray(k,z)?(f[i]=d.style(h,i),"toggle"==k&&(k=j?"show":"hide"),"hide"==k?(l=0,p=o.cur(),f.display="none"):(p=0,l=o.cur(),d.css(h,i,p),d.show(h)),k=l):(l=k,p=o.cur());k+="";var t="",r=k.match(A);if(r){l=parseFloat(r[2]);if((t=r[3])&&"px"!==t)d.css(h,i,k),p*=l/o.cur(),d.css(h,i,p+t);r[1]&&(l=("-="===r[1]?-1:1)*l+p)}n.from=p;n.to=l;n.unit=t;o.load(n);u[i]=o}this._startTime=
b.now();a.start(this)}}function s(a){var c=a.config.el,e=d.data(c,n);e||d.data(c,n,e={});e[b.stamp(a)]=a}function l(a){var c=a.config.el,e=d.data(c,n);e&&(delete e[b.stamp(a)],b.isEmptyObject(e)&&d.removeData(c,n))}function q(a,c,e){a=d.data(a,"resume"==e?o:n);a=b.merge(a);b.each(a,function(a){if(void 0===c||a.config.queue==c)a[e]()})}function u(a,c,e,f){e&&!1!==f&&j.removeQueue(a,f);a=d.data(a,n);a=b.merge(a);b.each(a,function(a){a.config.queue==f&&a.stop(c)})}var y=b.UA,p=d._camelCase,v=d.NodeType,
z=["hide","show","toggle"],w={background:["backgroundPosition"],border:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],borderBottom:["borderBottomWidth"],borderLeft:["borderLeftWidth"],borderTop:["borderTopWidth"],borderRight:["borderRightWidth"],font:["fontSize","fontWeight"],margin:["marginBottom","marginLeft","marginRight","marginTop"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"]},x={duration:1,easing:"easeNone"},A=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
e.SHORT_HANDS=w;e.prototype={constructor:e,isRunning:function(){var a=d.data(this.config.el,n);return a?!!a[b.stamp(this)]:0},isPaused:function(){var a=d.data(this.config.el,o);return a?!!a[b.stamp(this)]:0},pause:function(){if(this.isRunning()){this._pauseDiff=b.now()-this._startTime;a.stop(this);l(this);var c=this.config.el,e=d.data(c,o);e||d.data(c,o,e={});e[b.stamp(this)]=this}return this},resume:function(){if(this.isPaused()){this._startTime=b.now()-this._pauseDiff;var c=this.config.el,e=d.data(c,
o);e&&(delete e[b.stamp(this)],b.isEmptyObject(e)&&d.removeData(c,o));s(this);a.start(this)}return this},_runInternal:m,run:function(){!1===this.config.queue?m.call(this):j.queue(this);return this},_frame:function(){var a,c=this.config,e=1,b,d,f=this._fxs;for(a in f)if(!(d=f[a]).finished)c.frame&&(b=c.frame(d)),1==b||0==b?(d.finished=b,e&=b):(e&=d.frame())&&c.frame&&c.frame(d);(!1===this.fire("step")||e)&&this.stop(e)},stop:function(c){var e=this.config,b=e.queue,d,f=this._fxs;if(!this.isRunning())return!1!==
b&&j.remove(this),this;if(c){for(d in f)if(!(c=f[d]).finished)e.frame?e.frame(c,1):c.frame(1);this.fire("complete")}a.stop(this);l(this);!1!==b&&j.dequeue(this);return this}};b.augment(e,f.Target);var n=b.guid("ks-anim-unqueued-"+b.now()+"-"),o=b.guid("ks-anim-paused-"+b.now()+"-");e.stop=function(a,c,e,f){if(null===f||"string"==typeof f||!1===f)return u.apply(void 0,arguments);e&&j.removeQueues(a);var i=d.data(a,n),i=b.merge(i);b.each(i,function(a){a.stop(c)})};b.each(["pause","resume"],function(a){e[a]=
function(c,e){if(null===e||"string"==typeof e||!1===e)return q(c,e,a);q(c,void 0,a)}});e.isRunning=function(a){return(a=d.data(a,n))&&!b.isEmptyObject(a)};e.isPaused=function(a){return(a=d.data(a,o))&&!b.isEmptyObject(a)};e.Q=j;return e},{requires:"dom,event,./easing,./manager,./fx,./queue".split(",")});
KISSY.add("anim/color",function(b,d,f,g){function a(a){var a=a+"",c;if(c=a.match(m))return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3])];if(c=a.match(s))return[parseInt(c[1]),parseInt(c[2]),parseInt(c[3]),parseInt(c[4])];if(c=a.match(l)){for(a=1;a<c.length;a++)2>c[a].length&&(c[a]+=c[a]);return[parseInt(c[1],j),parseInt(c[2],j),parseInt(c[3],j)]}return i[a=a.toLowerCase()]?i[a]:[255,255,255]}function c(){c.superclass.constructor.apply(this,arguments)}var j=16,e=Math.floor,i={black:[0,0,0],silver:[192,
192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},m=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,s=/^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,l=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,d=f.SHORT_HANDS;d.background=d.background||[];d.background.push("backgroundColor");
d.borderColor=["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"];d.border.push("borderBottomColor","borderLeftColor","borderRightColor","borderTopColor");d.borderBottom.push("borderBottomColor");d.borderLeft.push("borderLeftColor");d.borderRight.push("borderRightColor");d.borderTop.push("borderTopColor");b.extend(c,g,{load:function(){c.superclass.load.apply(this,arguments);this.from&&(this.from=a(this.from));this.to&&(this.to=a(this.to))},interpolate:function(a,b,d){var f=
c.superclass.interpolate;if(3==a.length&&3==b.length)return"rgb("+[e(f(a[0],b[0],d)),e(f(a[1],b[1],d)),e(f(a[2],b[2],d))].join(", ")+")";if(4==a.length||4==b.length)return"rgba("+[e(f(a[0],b[0],d)),e(f(a[1],b[1],d)),e(f(a[2],b[2],d)),e(f(a[3]||1,b[3]||1,d))].join(", ")+")"}});b.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,color,outlineColor".split(","),function(a){g.Factories[a]=c});return c},{requires:["dom","./base","./fx"]});
KISSY.add("anim/easing",function(){var b=Math.PI,d=Math.pow,f=Math.sin,g={swing:function(a){return-Math.cos(a*b)/2+0.5},easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return 1>(a*=2)?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return 1>(a*=2)?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){return 0===a||1===a?a:-(d(2,10*(a-=
1))*f((a-0.075)*2*b/0.3))},elasticOut:function(a){return 0===a||1===a?a:d(2,-10*a)*f((a-0.075)*2*b/0.3)+1},elasticBoth:function(a){return 0===a||2===(a*=2)?a:1>a?-0.5*d(2,10*(a-=1))*f((a-0.1125)*2*b/0.45):0.5*d(2,-10*(a-=1))*f((a-0.1125)*2*b/0.45)+1},backIn:function(a){1===a&&(a-=0.0010);return a*a*(2.70158*a-1.70158)},backOut:function(a){return(a-=1)*a*(2.70158*a+1.70158)+1},backBoth:function(a){var c,b=(c=2.5949095)+1;return 1>(a*=2)?0.5*a*a*(b*a-c):0.5*((a-=2)*a*(b*a+c)+2)},bounceIn:function(a){return 1-
g.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){return 0.5>a?0.5*g.bounceIn(2*a):0.5*g.bounceOut(2*a-1)+0.5}};return g});
KISSY.add("anim/fx",function(b,d,f){function g(a){this.load(a)}function a(a,b){return(!a.style||null==a.style[b])&&null!=d.attr(a,b,f,1)?1:0}g.prototype={constructor:g,load:function(a){b.mix(this,a);this.pos=0;this.unit=this.unit||""},frame:function(a){var d=this.anim,e=0;if(this.finished)return 1;var f=b.now(),g=d._startTime,d=d._duration;a||f>=d+g?e=this.pos=1:this.pos=this.easing((f-g)/d);this.update();this.finished=this.finished||e;return e},interpolate:function(a,d,e){return b.isNumber(a)&&b.isNumber(d)?
(a+(d-a)*e).toFixed(3):f},update:function(){var c=this.prop,b=this.anim.config.el,e=this.to,i=this.interpolate(this.from,e,this.pos);i===f?this.finished||(this.finished=1,d.css(b,c,e)):(i+=this.unit,a(b,c)?d.attr(b,c,i,1):d.css(b,c,i))},cur:function(){var c=this.prop,b=this.anim.config.el;if(a(b,c))return d.attr(b,c,f,1);var e,c=d.css(b,c);return isNaN(e=parseFloat(c))?!c||"auto"===c?0:c:e}};g.Factories={};g.getFx=function(a){return new (g.Factories[a.prop]||g)(a)};return g},{requires:["dom"]});
KISSY.add("anim/manager",function(b){var d=b.stamp;return{interval:15,runnings:{},timer:null,start:function(b){var g=d(b);this.runnings[g]||(this.runnings[g]=b,this.startTimer())},stop:function(b){this.notRun(b)},notRun:function(f){delete this.runnings[d(f)];b.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(b){this.notRun(b)},resume:function(b){this.start(b)},startTimer:function(){var b=this;b.timer||(b.timer=setTimeout(function(){b.runFrames()?b.stopTimer():(b.timer=0,b.startTimer())},
b.interval))},stopTimer:function(){var b=this.timer;b&&(clearTimeout(b),this.timer=0)},runFrames:function(){var b=1,d,a=this.runnings;for(d in a)b=0,a[d]._frame();return b}}});
KISSY.add("anim/queue",function(b,d){function f(b,f,g){var f=f||c,j,l=d.data(b,a);!l&&!g&&d.data(b,a,l={});l&&(j=l[f],!j&&!g&&(j=l[f]=[]));return j}function g(e,f){var f=f||c,g=d.data(e,a);g&&delete g[f];b.isEmptyObject(g)&&d.removeData(e,a)}var a=b.guid("ks-queue-"+b.now()+"-"),c=b.guid("ks-queue-"+b.now()+"-"),j={queueCollectionKey:a,queue:function(a){var b=f(a.config.el,a.config.queue);b.push(a);"..."!==b[0]&&j.dequeue(a);return b},remove:function(a){var c=f(a.config.el,a.config.queue,1);c&&(a=
b.indexOf(a,c),-1<a&&c.splice(a,1))},removeQueues:function(b){d.removeData(b,a)},removeQueue:g,dequeue:function(a){var b=a.config.el,a=a.config.queue,c=f(b,a,1),d=c&&c.shift();"..."==d&&(d=c.shift());d?(c.unshift("..."),d._runInternal()):g(b,a)}};return j},{requires:["dom"]});