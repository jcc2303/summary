<template>
  <div class="player">
    <button class="primary" v-go-back=" '/' ">Back</button>
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
      <div class="item" v-for="(item,index) in shots" >
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
          src: `https://www.youtube.com/watch?v=${this.$route.params.id}`// 'https://www.youtube.com/watch?v=iD_MyDbP_ZE'
        },
        // defaultSrcReId: 'low',
        poster: `https://img.youtube.com/vi/${this.$route.params.id}/default.jpg`,
        techOrder: ['youtube'],
        autoplay: false,
        controls: true,
        ytControls: false,
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7]
      },
      // fragment
      video: {
        key: this.$route.params.id // '2rq3j2jGKec'
      },
      shot: null,
      shots: [],
      seeking: false,
      rate: 1
    }
  },
  computed: {
    player () {
      return this.$refs.myPlayer.player // {pause () {}}
    }
  },
  mounted () {
    console.log('this is current player object', this.player)
    // this.player.pause()
    // and do something...
  },
  methods: {
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
        if (this.shots.length > 0) {
          for (var i = 0; i < this.shots.length; i++) {
            var si = this.shots[i]
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
        this.shots.push(shot)
        this.shots = this.shots.sort((a, b) => (a.min - b.min))
      }
    },
    removeShot (index) {
      this.shots.splice(index, 1)
    },
    playShot (index) {
      this.shot = this.shots[index]
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
