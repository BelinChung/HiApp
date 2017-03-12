<template>
    <div class="home-view">
        <card v-for="(item, index) in timeline" :key="item.id" :data="item" @card:content-click="routeToPost"></card>        
    </div>
</template>

<style lang="less">
    
</style>

<script>
import Card from '../components/card.vue'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    this.$nextTick(_ => {
      this.$f7.showIndicator()
      this.$store.dispatch('getTimeline', () => {
        this.$f7.hideIndicator()
      })
    })
  },
  methods: {
    routeToPost(data) {
      this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    }
  },
  components: {
    Card
  }
}
</script>