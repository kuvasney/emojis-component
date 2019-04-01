<template>
  <div class="c-emojis" @keyup.esc="toShow = false">
    <span :class="[{'ui-tooltip--top' : !toShow }]" data-tooltip="Emojis" class="trig" @click="toShow = !toShow">🙂</span>
    <i :class="[{'arr-fw': toShow}]" />
    <div :class="['emojis', {'emojis--show': toShow}]">
      <input type="text" placeholder="🔍" v-model="emojiSearch" v-show="toShow">
      <ul>
        <li v-for="emoji in filteredList" :alt="emoji.name" :title="emoji.name" :data-name="emoji.name" :data-no="emoji.no" :key="emoji.no" @click="emojiSent(emoji)">{{ emoji.char }}</li>
      </ul>
    </div>
  </div>
</template>
<script src="./emojis.js"></script>
<style lang="scss" src="./emojis.scss" scoped></style>
