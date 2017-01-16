// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import VideoPlayer from 'vue-video-player'

var vtt = require('videojs-vtt.js')
global.WebVTT = vtt.WebVTT

VideoPlayer.config({
  youtube: true,  // default false（youtube的支持）
  switcher: true, // default true（播放源切换功能）
  hls: true       // default true（直播功能的支持）
})

router.push('/')

// use
Vue.use(VideoPlayer)

Vue.use(Quasar) // Install Quasar Framework

// localStorage persistence
var STORAGE_KEY = 'summary-1.0'
var videoStorage = {
  fetch: function () {
    var videos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    videos.forEach(function (video, index) {
      video.id = index
    })
    return videos
  },
  save: function (videos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos))
  }
}

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App')),
    data () {
      return {
        videos: videoStorage.fetch()
      }
    },
    // watch todos change for localStorage persistence
    watch: {
      videos: {
        handler: function (videos) {
          console.log(videos)
          videoStorage.save(videos)
        },
        deep: true
      }
    }
  })
})
