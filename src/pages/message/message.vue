<template>
  <f7-page class="message-page" messages-content>
    <f7-navbar :title="nickname" :back-link="$t('app.back')"></f7-navbar>
    <f7-messages ref="messages">
      <f7-messages-title><b>Sunday, Feb 9,</b> 12:58</f7-messages-title>
      <f7-message
        v-for="(message, index) in messagesData"
        :key="index"
        :type="message.type"
        :text="message.text"
        :image="message.image"
        :name="message.name"
        :avatar="message.avatar"
        :first="isFirstMessage(message, index)"
        :last="isLastMessage(message, index)"
        :tail="isTailMessage(message, index)"
      ></f7-message>
    </f7-messages>
    <f7-messagebar ref="messagebar" :placeholder="$t('message.placeholder')" :send-link="$t('app.send')" @submit="sendMessage"></f7-messagebar>
  </f7-page>
</template>

<style lang="less">
.message-page {
  .message:not(.message-last) .message-avatar {
    opacity: 1;
  }
}
</style>

<script>
export default {
  computed: {
    nickname() {
      const query = this.$f7route.query
      return query.nickname || this.$t('app.chat')
    }
  },
  data() {
    return {
      // Initial messages
      messagesData: [
        {
          type: 'sent',
          text: 'Hi, Kate'
        },
        {
          type: 'sent',
          text: 'How are you?'
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Hi, I am good!',
          avatar: 'https://loremflickr.com/70/70/people?lock=9'
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Hi there, I am also fine, thanks! And how are you?',
          avatar: 'https://loremflickr.com/70/70/people?lock=7'
        },
        {
          type: 'sent',
          text: 'Hey, Blue Ninja! Glad to see you ;)'
        },
        {
          type: 'sent',
          text: 'Hey, look, cutest kitten ever!'
        },
        {
          type: 'sent',
          image: 'https://loremflickr.com/300/200/cat?lock=6'
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Nice!',
          avatar: 'https://loremflickr.com/70/70/people?lock=9'
        },
        {
          name: 'Kate',
          type: 'received',
          text: 'Like it very much!',
          avatar: 'https://loremflickr.com/70/70/people?lock=9'
        },
        {
          name: 'Blue Ninja',
          type: 'received',
          text: 'Awesome!',
          avatar: 'https://loremflickr.com/70/70/people?lock=7'
        }
      ],
      // Dummy data
      people: [
        {
          name: 'Kate Johnson',
          avatar: 'https://loremflickr.com/70/70/people?lock=9'
        },
        {
          name: 'Blue Ninja',
          avatar: 'https://loremflickr.com/70/70/people?lock=7'
        }
      ],
      answers: [
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
      ],
      // Response in progress flag
      responseInProgress: false
    }
  },
  methods: {
    // Messages rules for correct styling
    isFirstMessage(message, index) {
      const self = this
      const previousMessage = self.messagesData[index - 1]
      if (message.isTitle) return false
      if (
        !previousMessage ||
        previousMessage.type !== message.type ||
        previousMessage.name !== message.name
      ) {
        return true
      }
      return false
    },
    isLastMessage(message, index) {
      const self = this
      const nextMessage = self.messagesData[index + 1]
      if (message.isTitle) return false
      if (!nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      ) {
        return true
      }
      return false
    },
    isTailMessage(message, index) {
      const self = this
      const nextMessage = self.messagesData[index + 1]
      if (message.isTitle) return false
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      ) {
        return true
      }
      return false
    },
    sendMessage() {
      const self = this
      const text = self.messagebar
        .getValue()
        .replace(/\n/g, '<br>')
        .trim()

      if (text.length === 0) {
        // exit when empty messagebar text is empty
        return
      }

      // Clear messagebar area
      self.messagebar.clear()

      // Focus area
      if (text.length) self.messagebar.focus()

      // Add sent message
      self.messagesData.push({
        text
      })

      // Mock response
      if (self.responseInProgress) return
      self.responseInProgress = true
      setTimeout(() => {
        const answer =
          self.answers[Math.floor(Math.random() * self.answers.length)]
        const person =
          self.people[Math.floor(Math.random() * self.people.length)]
        // self.messages.showTyping({
        //   header: `${person.name} is typing`,
        //   avatar: person.avatar
        // })
        setTimeout(() => {
          self.messagesData.push({
            text: answer,
            type: 'received',
            name: person.name,
            avatar: person.avatar
          })
          // self.messages.hideTyping()
          self.responseInProgress = false
        }, 1000)
      }, 1000)
    },
    onF7Ready() {
      const self = this
      // References to us APIs
      self.messagebar = self.$refs.messagebar.f7Messagebar
      self.messages = self.$refs.messages.f7Messages
    }
  }
}
</script>
