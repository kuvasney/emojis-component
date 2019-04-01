<template>
  <div class="hello">
    <div class="textmessage emojiOk" contenteditable="true" />
    <emojis @emoji="insertEmoji" />
  </div>
</template>

<script>
import Emojis from '@/inc/emojis/emojis.vue'
export default {
  name: 'HelloWorld',
  components: {
    Emojis
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    /**
     * Append an emoji to contenteditable div
     * @param {Object} emoji
    */
    insertEmoji (emoji) {
      var area = document.querySelector('.emojiOk')
      area.append(emoji.char)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  box-sizing: border-box;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.emojiOk {
  width: 100%;
  height: 6em;
  border: 1px solid #CCC;
  position: relative;
  text-align: left;
  font-size: 2em
}

.c-emojis {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
