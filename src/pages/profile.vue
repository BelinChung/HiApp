<template>
  <f7-page class="profile-page">
    <f7-navbar title="Profile" back-link="Back" sliding></f7-navbar>
    <f7-list>
        <f7-list-item title="Avatar" class="avatar-content">
            <img class="avatar" slot="after" :src="userInfo.avatarUrl"/>
        </f7-list-item>
        <f7-list-item title="Name" :after="userInfo.nickName"></f7-list-item>
    </f7-list>
    <f7-list>
        <f7-list-item title="Gender" :after="userInfo.gender | formatGender"></f7-list-item>
        <f7-list-item title="Location" :after="userInfo.location"></f7-list-item>
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
    filters: {
      formatGender(gender) {
        if(gender === 'm') return 'Male'
        else if(gender === 'f') return 'Female'
        else return 'unknown'
      }
    }
  }
</script>