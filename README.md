# VueJs Emoji component example

> This is a very simple example of how to use the emoji component on VueJs

Emoji list imported from https://github.com/github/gemoji/blob/master/db/emoji.json

You can see the application working at http://rafael.abc.br/emoji-vue/

## Setting up
Import the emoji component do you application
``` javascript
import Emojis from '@/YOUR-FAVORITE-COMPONENTS-FOLDER/emojis/emojis.vue'
```
Create the method to input then
``` javascript
    /**
     * Append an emoji to contenteditable div
     * @param {Object} emoji
    */
    insertEmoji (emoji) {
      var area = document.querySelector('.emojiOk')
      area.append(emoji.char)
    }
```
Place the component to your template.
``` vue
  <emojis @emoji="insertEmoji" />
```
Add "emojiOk" class to your HTML component. 
*I suggest you to use a contenteditable \<div\> instead of a \<textarea\>*.
``` html
  <div class="textmessage emojiOk" contenteditable="true" />
```

And it's all done. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
