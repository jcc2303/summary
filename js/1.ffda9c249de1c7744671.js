webpackJsonp([1,6],{351:function(e,t,i){var o,s;i(361),o=i(355);var d=i(366);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=d.render,s.staticRenderFns=d.staticRenderFns,e.exports=o},355:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{videos:[],newVideo:{vid:""}}},mounted:function(){this.videos=this.$root.videos},computed:{},methods:{addVideo:function(){var e=this.newVideo.vid&&this.newVideo.vid.trim();e&&(this.videos.push({vid:e,shots:[]}),this.newVideo={vid:""})},removeVideo:function(e){this.videos.splice(this.videos.indexOf(e),1)}}}},357:function(e,t,i){t=e.exports=i(346)(),t.push([e.i,".card{max-width:400px}",""])},361:function(e,t,i){var o=i(357);"string"==typeof o&&(o=[[e.i,o,""]]);i(347)(o,{});o.locals&&(e.exports=o.locals)},366:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"sumaryapp"},[i("header",{staticClass:"header"},[i("h1",[e._v("videos")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.newVideo.vid,expression:"newVideo.vid"}],staticClass:"new-video",attrs:{autofocus:"",autocomplete:"off",placeholder:"video id to watch?"},domProps:{value:e._s(e.newVideo.vid)},on:{keyup:function(t){e._k(t.keyCode,"enter",13)||e.addVideo(t)},input:function(t){t.target.composing||(e.newVideo.vid=t.target.value)}}})]),e._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:e.videos.length,expression:"videos.length"}],staticClass:"main"},e._l(e.videos,function(t,o){return i("div",{staticClass:"card"},[i("img",{attrs:{src:"https://img.youtube.com/vi/"+t.vid+"/default.jpg",alt:""}}),e._v(" "),i("div",{staticClass:"card-actions"},[i("div",{staticClass:"text-primary"},[i("router-link",{attrs:{to:"/videos/"+t.vid}},[i("i",[e._v("play_arrow")])]),e._v(" "),i("button",{staticClass:"destroy",on:{click:function(i){e.removeVideo(t)}}},[i("i",[e._v("delete")])])],1),e._v(" "),i("div",{staticClass:"auto"})])])}))])},staticRenderFns:[]}}});