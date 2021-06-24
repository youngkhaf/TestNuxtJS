<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    head() {
      return {
        title: '',
        titleTemplate: `%s ${this.video.name} - Vue Screencasts`
      }
    },
    async fetch({$axios, params, store}) {
      let response = await $axios.get(`/videos/${params.id}`)
      let video = response.data;
      
      store.commit('SET_CURRENT_VIDEO', video);
      return video;
    },
    computed: {
      video(){
        console.log(this.$store.state.currentVideo)
        return this.$store.state.currentVideo;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>