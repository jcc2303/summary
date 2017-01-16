<template>
  <div class="player">
    <button class="primary"  @click="removePlayer" v-go-back=" '/' ">Back</button>
    <!-- Use in component(Vue.js1.X && Vue.js2.X && function switch config) -->
    <video-player :options="videoOptions" @player-state-changed="playerStateChanged" ref="myPlayer"></video-player>

    <!-- video fragment -->
    <i @click="stopShot" :disabled="!shot" >compare_arrows</i>
    <q-range v-model="rate" :min="0" :max="2" :step="0.5" label snap markers @input="rateChanged" ></q-range>
    <!-- <q-toggle
      v-model="shot"
    ></q-toggle> -->
    <i @click="addShot" >playlist_add</i> <!-- :disabled="!video.duration" -->
    <!-- <i @click="replay">replay</i> -->


    <div class="list">
      <div class="item item-inset-delimiter" v-for="(item,index) in shots" >
        <i class="item-primary" @click="playShot(index)" >compare_arrows</i>
        <div class="item-content has-secondary" >
          <q-double-range
            class="orange"
            v-model="shots[index]"
            :min="0"
            :max="Math.floor(player.duration())"
            label
          ></q-double-range>
        </div>
        <div class="item-secondary">
          <i @click="removeShot(index)">delete</i>
        </div>
      </div>


  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'

// youtube - player config example
export default {
  data () {
    return {
      videoOptions: {
        source: {
          type: 'video/youtube',
          src: `https://www.youtube.com/watch?v=${this.$route.params.id}`// 'iD_MyDbP_ZE' &origin=http://localhost:8080
        },
        poster: `https://img.youtube.com/vi/${this.$route.params.id}/default.jpg`,
        defaultSrcReId: 'low',
        techOrder: ['youtube'],
        autoplay: false,
        muted: true,
        controls: true,
        ytControls: false,
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7]
      },
      // fragment
      video: {
        vid: '',
        shots: []
      },
      shot: null,
      seeking: false,
      rate: 1
    }
  },
  computed: {
    shots () {
      return this.video.shots
    },
    player () {
      return this.$refs.myPlayer.player // {pause () {}}
    }
  },
  // created () { },
  mounted () {
    var vid = this.$route.params.id
    var videos = this.$root.videos
    console.log(vid, videos)
    videos.forEach((video) => {
      if (video.vid === vid) {
        this.video = video
      }
    })

    this.player.pause()
  },
  methods: {
    removePlayer () {
      this.player.dispose()
    },
    playerStateChanged (playerCurrentState) {
      if (!this.seeking && this.shot && playerCurrentState.currentTime > this.shot.max) {
        this.seeking = true
        this.player.currentTime(this.shot.min) // debounce
      }
      else if (this.seeking && playerCurrentState.currentTime < this.shot.max) {
        this.seeking = false
      }
    },
    // fragments list add remove
    addShot (event) {
      if (this.player.duration()) {
        var min = Math.floor(this.player.currentTime())
        var max = Math.floor(this.player.duration())

        //  review min between, then split
        if (this.video.shots.length > 0) {
          for (var i = 0; i < this.video.shots.length; i++) {
            var si = this.video.shots[i]
            if (min < si.min) {
              max = si.min
              break
            }
            else if (si.min < min) {
              if (si.max < min) {
                // descart
                continue
              }
              else if (min < si.max) {
                si.max = min
              }
              break
            }
            else return
          }
        }

        var shot = {
          min: min,
          max: max
        }
        this.video.shots.push(shot)
        this.video.shots = this.video.shots.sort((a, b) => (a.min - b.min))
      }
    },
    removeShot (index) {
      this.video.shots.splice(index, 1)
    },
    playShot (index) {
      this.shot = this.video.shots[index]
      this.player.currentTime(this.shot.min)
    },
    stopShot () {
      this.shot = null
    },
    rateChanged (rate) {
      this.player.playbackRate(this.rate)
    }
  },
  components: {
    videoPlayer
  }
}
</script>
<style>
</style>
