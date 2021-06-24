<template>
  <div>
    <h1>Videos </h1>
    <div v-for="video in this.videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Vue Screencasts - Video List'
    },
  computed:{
    videos(){
      return this.$store.state.videos;
    }
  },
    async fetch({$axios, params,store}) {
      let response =await $axios.get('videos');
      let videos= response.data;
      store.commit('SET_VIDEOS',videos)
      console.log(videos)
      return videos;
    },
  }
</script>

<style lang="scss" scoped>

</style>