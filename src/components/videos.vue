<template>
  <!-- <div class='list hightlight' >
    <q-drawer-link      v-for="(video,index) in videos" :to="'/videos/'+video.id" exact>
    <div class="item">
      <div class="item-content has-secondary">{{video.name}}</div>
    </div>
    </q-drawer-link>
  </div> -->
  <div class="content">
    <div class="card" v-for="(video,index) in videos" to="'/videos/'+video.id">
      <!-- <div class="item">
        <img class="avatar" src="assets/linux-avatar.png">
        <div class="item-content">
          <div class="item-label">
            <p class="item-title">Joe</p>
            <p>Web Developer</p>
          </div>
        </div>
      </div> -->
      <img :src="'https://img.youtube.com/vi/'+video.id+'/default.jpg'" alt="" />
      <div class="card-content">
        {{video.name}}
      </div>
      <div class="card-actions">
        <div class="text-primary">
          <router-link :to="`/videos/${video.id}`"><i>thumb_up</i></router-link>
          <!-- <a :href="`#/videos/${video.id}`" ><i>thumb_up</i></a> -->
        </div>
        <div class="auto"></div>
        <!-- <div class="text-grey-6">
          23 minutes ago.
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeDestroy () {
    console.log('beforeDestroy', window.history.length)
  },
  destroyed () {
    console.log('destroyed', window.history.length)
  },
  data () {
    return {
      videos: [
        {id: '2rq3j2jGKec', name: 'ataca'},
        {id: 'EPH_nF7wlLY', name: 'desire'},
        {id: '8W1zWpEtrXg', name: 'desire'}
      ]
    }
  }
}
</script>

<style>
.card {
  max-width: 400px
}
</style>
