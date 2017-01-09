<template>
  <div class='list hightlight' >
    <q-drawer-link      v-for="(video,index) in videos" :to="'/videos/'+video.id" exact>

    <div class="item">
      <div class="item-content has-secondary">{{video}}</div>
      <img :src="'https://img.youtube.com/vi/'+video.id+'/default.jpg'" alt="" class="item-secondary thumbnail" />
    </div>
    </q-drawer-link>
  </div>
</template>

<script>
export default {
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

</style>
