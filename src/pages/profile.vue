<template>
  <f7-page class="profile-page">
    <f7-navbar :title="$t('profile')" :back-link="$t('back')" sliding></f7-navbar>
    <f7-list>
        <f7-list-item :title="$t('avatar')" class="avatar-content">
            <img class="avatar" slot="after" :src="userInfo.avatarUrl"/>
        </f7-list-item>
        <f7-list-item :title="$t('name')" :after="userInfo.nickName"></f7-list-item>
    </f7-list>
    <f7-list>
        <f7-list-item :title="$t('gender')" :after="formatGender(userInfo.gender)"></f7-list-item>
        <f7-list-item :title="$t('location')" :after="userInfo.location"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<style lang="less">
    .profile-page{
        .list-block{
            margin: 20px 0;
            .avatar-content{
                .item-after{
                    max-height: inherit;
                }
                .avatar{
                    width: 65px;
                    height: 65px;
                    border-radius: 5px;
                }
            }
        }
    }
</style>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        userInfo: state => state.user,
      })
    },
    methods: {
      formatGender(gender) {
        if(gender === 'm') return this.$t('male')
        else if(gender === 'f') return this.$t('female')
        else return this.$t('unknown')
      }
    }
  }
</script>