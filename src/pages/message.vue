<template>
  <f7-page class="message-page">
    <f7-navbar :title="nickname" :back-link="$t('app.back')" sliding></f7-navbar>
    <f7-messages>
      <f7-message v-for="message in messages"
        :key="message.mid"
        :text="message.text"
        :label="message.label"
        :date="message.date"
        :name="message.name"
        :avatar="message.avatar"
        :type="message.type"
        :day="message.day"
        :time="message.time"
        @click="onClick"
        @click:text="onTextClick"
        @click:name="onNameClick"
        @click:avatar="onAvatarClick"
      ></f7-message>
    </f7-messages>
    <f7-messagebar :placeholder="$t('message.placeholder')" :send-link="$t('app.send')" @submit="onSubmit"></f7-messagebar>
  </f7-page>
</template>

<style lang="less">
  .message-page {
  }
</style>

<script>
export default {
  computed: {
    nickname() {
      let query = this.$route.query
      return query.nickname || this.$t('app.chat')
    }
  },
  data () {
    return {
      messages: [
        {
          mid: 1000,
          day: 'Wendesday',
          time: '13:34'
        },
        {
          mid: 1001,
          name: 'Vladimir',
          text: 'How are you?',
          label: 'Sent in good mood :)',
          avatar: 'http://lorempixel.com/68/68/people/1',
          date: 'Yesterday 13:34'
        },
        {
          mid: 1002,
          name: '',
          text: 'I\'m good, thank you!',
          type: 'received',
          avatar: 'http://lorempixel.com/68/68/people/3',
          date: 'Yesterday at 13:50'
        }
      ],
      answerTimer: null,
      answers:[
        'Yes!',
        'No',
        'Hm...',
        'I am not sure',
        'And what about you?',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!'
      ]
    }
  },
  methods: {
    onClick(event) {
      console.log('message click')
    },
    onAvatarClick() {
      console.log('avatar-click')
    },
    onTextClick() {
      console.log('text-click')
    },
    onNameClick() {
      console.log('name-click')
    },
    onSubmit(text, clear) {
      if (text.trim().length === 0) return
      this.messages.push(this.generateMessage(text, 'Belin', 'http://lorempixel.com/68/68/people/1'))
      if (this.answerTimer) clearTimeout(this.answerTimer)
      this.answerTimer = setTimeout(_ => {
        this.messages.push(this.generateMessage(null, this.nickname, 'http://lorempixel.com/68/68/people/3', 'received'))
      }, 1000)
      clear()
    },
    generateMessage(text, name, avatar, type = 'sent') {
      text = text || this.answers[Math.floor(Math.random() * this.answers.length)]
      return {
        name,
        avatar,
        text,
        type,
        date: (function () {
          let now = new Date()
          let hours = now.getHours()
          let minutes = now.getMinutes()
          return hours + ':' + minutes
        })()
      }
    }
  }
}
</script>