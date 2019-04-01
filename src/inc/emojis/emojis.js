import EmojiList from './emojis.json'

/**
 * emojis module.
 * @vue emojis
 */
export default {
  name: 'emojis',
  data () {
    return {
      emojiList: EmojiList,
      toShow: false,
      emojiSearch: ''
    }
  },
  computed: {
    filteredList() {
      return this.emojiList.filter(emoji => {
        return emoji.keywords.toLowerCase().includes(this.emojiSearch.toLowerCase())
      })
    }
  },
  methods: {
    emojiSent (emoji) {
      this.$emit('emoji', emoji)
    }
  }
}

/* USO
HTML
<emojis @emoji="insertEmoji" />

METHOD
insertEmoji: function (emoji) {
  var area = document.querySelector('.emojiOk')
  area.append(emoji.char)
}
*/
