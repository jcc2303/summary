webpackJsonp([1,6],{343:function(t,e,i){var s,n;i(353),s=i(347);var a=i(358);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},347:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{videos:[{id:"2rq3j2jGKec",name:"ataca"},{id:"EPH_nF7wlLY",name:"desire"},{id:"8W1zWpEtrXg",name:"desire"}]}}}},349:function(t,e,i){e=t.exports=i(338)(),e.push([t.i,".item{position:static}",""])},353:function(t,e,i){var s=i(349);"string"==typeof s&&(s=[[t.i,s,""]]);i(339)(s,{});s.locals&&(t.exports=s.locals)},358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list hightlight"},t._l(t.videos,function(e,s){return i("q-drawer-link",{attrs:{to:"/videos/"+e.id,exact:""}},[i("div",{staticClass:"item"},[i("div",{staticClass:"item-content has-secondary"},[t._v(t._s(e))]),t._v(" "),i("img",{staticClass:"item-secondary thumbnail",attrs:{src:"https://img.youtube.com/vi/"+e.id+"/default.jpg",alt:""}})])])}))},staticRenderFns:[]}}});