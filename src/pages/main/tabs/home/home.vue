<template>
  <f7-page class="home-view">
    <card v-for="item in timeline" :key="item.id" :data="item" @card:content-click="routeToPost"></card>
  </f7-page>
</template>

<script>
import Card from '@/components/card'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    this.$f7.preloader.show()
    this.$store.dispatch('getTimeline', () => {
      this.$f7.preloader.hide()
    })
  },
  methods: {
    routeToPost(data) {
      // this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    }
  },
  components: {
    Card
  }
}
</script>
