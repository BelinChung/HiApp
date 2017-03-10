<template>
  <f7-page>
    <f7-navbar title="Profile" back-link="Back" sliding></f7-navbar>
    <div class="profile-view">
        <f7-list>
            <f7-list-item title="Avatar" class="avatar-content">
                <img class="avatar" slot="after" src='https://dearb.me/assets/images/avatar.png'/>
            </f7-list-item>
            <f7-list-item title="Name" after="Belin Chung"></f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item title="Gender" after="Male"></f7-list-item>
            <f7-list-item title="Location" after="Guangdong China"></f7-list-item>
        </f7-list>
    </div>
  </f7-page>
</template>

<style lang="less">
    .profile-view{
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
export default {}
</script>