<template>
  <div class="player">
    <!-- Use in component(Vue.js1.X && Vue.js2.X && function switch config) -->
    <video-player :options="videoOptions" @player-state-changed="playerStateChanged" ref="myPlayer"></video-player>

    <!-- video fragment -->
    <q-range v-model="rate" :min="0" :max="2" :step="0.5" label snap markers @input="rateChanged" ></q-range>
    <!-- <q-toggle
      v-model="shot"
    ></q-toggle> -->
    <i @click="stopShot">video_label</i>
    <i @click="addShot">playlist_add</i>
    <!-- <i @click="replay">replay</i> -->


    <div class="list">
      <div class="item" v-for="(item,index) in shots" >
        <div class="item-content has-secondary" @click="playShot(index)">
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
          src: 'https://www.youtube.com/watch?v=iD_MyDbP_ZE'
        },
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
      return this.$refs.myPlayer.player
    }
  },
  mounted () {
    console.log('this is current player object', this.player)
    this.player.pause()
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
      this.shot = {
        min: Math.floor(this.player.currentTime()),
        max: Math.floor(this.player.duration())
      }
      this.shots.push(this.shot)
      this.shots = this.shots.sort((a, b) => (a.min - b.min))
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
.q-range {
    /* height: 36px; */
}
</style>
