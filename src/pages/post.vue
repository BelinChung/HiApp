<template>
  <f7-page class="post-page" navbar-fixed toolbar-fixed>
    <f7-navbar :title="$t('post.post')" :back-link="$t('app.back')" sliding>
    </f7-navbar>
    <card :enableToolbar="false" :data="post"></card>
    <div class="comments">
      <div class="title">
        <span>{{$t('tweet.comment')}}</span>
      </div>
      <div class="list">
        <template v-if="comments.length">
          <div class="comment flex-row" v-for="(comment, index) in comments" :key="comment.name">
            <img class="avatar" :src="getAvatar(comment.avatar)" />
            <div class="detail flex-rest-width">
              <div class="name"><span>{{comment.name}}</span></div>
              <div class="time"><span>{{formatTime(comment.time)}}</span></div>
              <div class="text"><span>{{comment.text}}</span></div>
            </div>
          </div>
        </template>
        <div class="empty-content" v-else>
          <i class="iconfont icon-wujieguoyangshi"/>
          <div class="text">
            <span>{{$t('app.empty_container')}}</span>
          </div>
        </div>
      </div>
    </div>
    <f7-toolbar class="custom-toolbar flex-row">
      <f7-link class="tool tool-border flex-rest-width" @click="openCommentPopup">
        <span class="iconfont icon-comment"></span>
        <span class="text" v-text="post.comment_count ? post.comment_count : $t('tweet.comment')"></span>
      </f7-link>
      <f7-link class="tool flex-rest-width" :class="{liked: post.liked}" @click="toggleLike(post.id, post.liked)">
        <span class="iconfont icon-like"></span>
        <span class="text" v-text="post.like_count ? post.like_count : $t('tweet.like')"></span>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<style lang="less">
  @import "../assets/styles/mixins.less";
  .post-page {
    .custom-toolbar{
      background: #fff;
      &:before {
        background: #e1e1e1;
      }
      .tool {
        justify-content: center;
        &.tool-border{
          border-right: 1px solid #e1e1e1;
        }
        &.liked{
          > span {
            color: @mainColor;
          }
        }
        > span {
          color: #6D6D78;
          vertical-align: middle;
        }
        .iconfont{
          font-size: 18px;
        }
        .text {
          font-size: 15px;
        }
      }
    }
    .comments{
      background-color: #fff;
      border-top: 1px solid #dadada;
      border-bottom: 1px solid #dadada; 
      margin-bottom: 15px;
      .title{
        height: 35px;
        line-height: 35px;
        padding: 0 10px;
        font-size: 13px;
      }
      .comment{
        border-top: 1px solid #dadada;
        padding: 10px;
        font-size: 14px;
        .avatar{
          width: 30px;
          height: 30px;
          border-radius: 30px;
        }
        .detail{
          margin-left: 8px;
          .name{
            font-size: 13px;
            color: #333;
          }
          .time{
            font-size: 11px;
            color: #929292;
            margin-bottom: 2px;
          }
          .text{
            line-height: 20px;
            color: #5d5d5d;
          }
        }
      }
    }
  }
</style>

<script>
import axios from 'axios'
import Card from '../components/card.vue'
import moment from 'moment'
import {getRemoteAvatar} from '../utils/appFunc'
import {mapState} from 'vuex'
import find from 'lodash/find'

export default {
  data() {
    return {
      post: {},
      comments: []
    }
  },
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    let query = this.$route.query
    this.post = find(this.timeline, p => p.id === parseInt(query.mid))
    this.getComments()
  },
  methods: {
    getComments() {
      let random = Math.floor(Math.random()*2)
      if(!random) return []
      axios.get('/comments.json').then(res => {
        this.comments = res.data
      })
    },
    formatTime(time) {
      return moment(time * 1000).fromNow()
    },
    getAvatar(id) {
      return getRemoteAvatar(id)
    },
    openCommentPopup() {
      this.$f7.popup('#commentPopup')
    },
    toggleLike(mid, status) {
      this.$store.dispatch('updateTimeline', {
        mid,
        type: status ? 'unlike' : 'like'
      })
    }
  },
  components: {
    Card
  }
}
</script>