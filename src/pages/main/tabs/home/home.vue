<template>
  <f7-page class="home-view"
           ptr
           @ptr:refresh="onRefresh">
    <card v-for="item in timeline" :key="item.id" :data="item" @card:content-click="routeToPost"></card>
  </f7-page>
</template>

<script>
import axios from 'axios'
import Card from '@/components/card'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      refreshing: false
    }
  },
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    this.getTimeline()
  },
  methods: {
    ...mapActions([
      'initTimeline',
      'infiniteTimeline',
      'refreshTimeline'
    ]),
    getTimeline() {
      this.$f7.preloader.show()
      axios.get('/timeline.json').then(res => {
        const timeline = res.data
        this.initTimeline(timeline)
        this.$f7.preloader.hide()
      })
    },
    onRefresh() {
      if (this.refreshing) return false

      this.refreshing = true
      axios.get('/refresh_timeline.json').then(res => {
        if (parseInt(this.timeline[0].id) === 48) {
          this.$emit('show-tip')
        } else {
          const timeline = res.data
          this.refreshTimeline(timeline)
        }
        this.refreshing = false
        this.$f7.ptr.done()
      })
    },
    routeToPost(data) {
      // this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    }
  },
  components: {
    Card
  }
}
</script>
