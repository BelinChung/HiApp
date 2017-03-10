<template>
    <div class="settings-view">
        <f7-list class="user-profile">
            <f7-list-item link="/profile/" media="<img class='avatar' src='https://dearb.me/assets/images/avatar.png'></img>">
                <div slot="inner-start" class="detail">
                    <div class="name">BelinChung</div>
                    <div class="location">
                        <span>City: </span>
                        <span>Guangdong China</span>
                    </div>
                </div>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item title="Language" link="/language/" media="<i class='iconfont icon-language'></i>"></f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item title="Feedback" link="/feedback/" media="<i class='iconfont icon-feedback2'></i>"></f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-item title="About" link="/about/" media="<i class='iconfont icon-about1'></i>"></f7-list-item>
        </f7-list>
    </div>
</template>

<style lang="less">
    .settings-view{
        .list-block{
            margin: 20px 0;
            .iconfont{
                height: 29px;
            }
            .icon-language{
                color: #0099FF;
            }
            .icon-feedback2{
                color: #00CC99;
            }
            .icon-about1{
                color: #FFCC33;
            }
        }
        .user-profile{
            .item-content{
                padding-top: 5px;
                padding-bottom: 5px;
            }
            .avatar{
                width: 65px;
                height: 65px;
                border-radius: 5px;
            }
            .detail{
                .location{
                    color: #858585;
                    font-size: 15px;
                    margin-top: 5px;
                }
            }
        }
    }
</style>

<script>
    export default {}
</script>