<template>
  <!-- <div class='list hightlight' >
    <q-drawer-link      v-for="(video,index) in videos" :to="'/videos/'+video.id" exact>
    <div class="item">
      <div class="item-content has-secondary">{{video.name}}</div>
    </div>
    </q-drawer-link>
  </div> -->
  <section class="sumaryapp">

    <header class="header">
      <h1>videos</h1>
      <input class="new-video"
        autofocus autocomplete="off"
        placeholder="video id to watch?"
        v-model="newVideo.vid"
        @keyup.enter="addVideo">
    </header>

    <section class="main" v-show="videos.length" v-cloak>
      <div class="card"
          v-for="(video,index) in videos" >
        <img :src="'https://img.youtube.com/vi/'+video.vid+'/default.jpg'" alt="" />
        <!-- <div class="card-content">{{video.name}}</div> -->
        <div class="card-actions">
          <div class="text-primary">
            <router-link :to="`/videos/${video.vid}`"><i>play_arrow</i></router-link>
            <!-- to="'/videos/'+video.id" <a :href="`#/videos/${video.id}`" ><i>thumb_up</i></a> -->
            <button class="destroy" @click="removeVideo(video)"><i>delete</i></button>
          </div>
          <div class="auto"></div>
          <!-- <div class="text-grey-6">
            23 minutes ago.
          </div> -->
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  // beforeDestroy () {console.log('beforeDestroy', window.history.length)},
  // destroyed () { console.log('destroyed', window.history.length)},
  data () {
    return {
      videos: [], // this.$root.videos,
      newVideo: {vid: ''}
    }
  },
  mounted () { // created?
    this.videos = this.$root.videos
  },
  computed: {},
  methods: {
    addVideo () {
      var vid = this.newVideo.vid && this.newVideo.vid.trim()
      if (!vid) {
        return
      }
      this.videos.push({
        vid: vid,
        shots: []
      })
      this.newVideo = {vid: ''}
    },
    removeVideo (video) {
      this.videos.splice(this.videos.indexOf(video), 1)
    }
  }

}
</script>

<style>
.card {
  max-width: 400px
}
</style>
