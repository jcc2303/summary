webpackJsonp([2,6],{350:function(t,e,s){var i,o;s(362),i=s(354);var a=s(367);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},354:function(t,e,s){"use strict";var i=s(194);s.n(i);Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{videoOptions:{source:{type:"video/youtube",src:"https://www.youtube.com/watch?v="+this.$route.params.id},poster:"https://img.youtube.com/vi/"+this.$route.params.id+"/default.jpg",defaultSrcReId:"low",techOrder:["youtube"],autoplay:!1,muted:!0,controls:!0,ytControls:!1,playbackRates:[.7,1,1.3,1.5,1.7]},video:{vid:"",shots:[]},shot:null,seeking:!1,rate:1}},computed:{shots:function(){return this.video.shots},player:function(){return this.$refs.myPlayer.player}},mounted:function(){var t=this,e=this.$route.params.id,s=this.$root.videos;s.forEach(function(s){s.vid===e&&(t.video=s)}),this.player.pause()},methods:{removePlayer:function(){this.player.dispose()},playerStateChanged:function(t){!this.seeking&&this.shot&&t.currentTime>this.shot.max?(this.seeking=!0,this.player.currentTime(this.shot.min)):this.seeking&&t.currentTime<this.shot.max&&(this.seeking=!1)},addShot:function(t){if(this.player.duration()){var e=Math.floor(this.player.currentTime()),s=Math.floor(this.player.duration());if(this.video.shots.length>0)for(var i=0;i<this.video.shots.length;i++){var o=this.video.shots[i];if(e<o.min){s=o.min;break}if(o.min<e){if(o.max<e)continue;e<o.max&&(o.max=e);break}return}var a={min:e,max:s};this.video.shots.push(a),this.video.shots=this.video.shots.sort(function(t,e){return t.min-e.min})}},removeShot:function(t){this.video.shots.splice(t,1)},playShot:function(t){this.shot=this.video.shots[t],this.player.currentTime(this.shot.min)},stopShot:function(){this.shot=null},rateChanged:function(t){this.player.playbackRate(this.rate)}},components:{videoPlayer:i.videoPlayer}}},358:function(t,e,s){e=t.exports=s(346)(),e.push([t.i,"",""])},362:function(t,e,s){var i=s(358);"string"==typeof i&&(i=[[t.i,i,""]]);s(347)(i,{});i.locals&&(t.exports=i.locals)},367:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player"},[s("button",{directives:[{name:"go-back",rawName:"v-go-back",value:"/",expression:" '/' "}],staticClass:"primary",on:{click:t.removePlayer}},[t._v("Back")]),t._v(" "),s("video-player",{ref:"myPlayer",attrs:{options:t.videoOptions},on:{"player-state-changed":t.playerStateChanged}}),t._v(" "),s("i",{attrs:{disabled:!t.shot},on:{click:t.stopShot}},[t._v("compare_arrows")]),t._v(" "),s("q-range",{directives:[{name:"model",rawName:"v-model",value:t.rate,expression:"rate"}],attrs:{min:0,max:2,step:.5,label:"",snap:"",markers:""},domProps:{value:t.rate},on:{input:[function(e){t.rate=e},t.rateChanged]}}),t._v(" "),s("i",{on:{click:t.addShot}},[t._v("playlist_add")]),t._v(" "),s("div",{staticClass:"list"},t._l(t.shots,function(e,i){return s("div",{staticClass:"item item-inset-delimiter"},[s("i",{staticClass:"item-primary",on:{click:function(e){t.playShot(i)}}},[t._v("compare_arrows")]),t._v(" "),s("div",{staticClass:"item-content has-secondary"},[s("q-double-range",{directives:[{name:"model",rawName:"v-model",value:t.shots[i],expression:"shots[index]"}],staticClass:"orange",attrs:{min:0,max:Math.floor(t.player.duration()),label:""},domProps:{value:t.shots[i]},on:{input:function(e){var s=t.shots,o=i;Array.isArray(s)?s.splice(o,1,e):t.shots[i]=e}}})],1),t._v(" "),s("div",{staticClass:"item-secondary"},[s("i",{on:{click:function(e){t.removeShot(i)}}},[t._v("delete")])])])}))],1)},staticRenderFns:[]}}});