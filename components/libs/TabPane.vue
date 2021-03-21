<template>
  <div class="tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
/*
  需與TabPane.vue一起使用
  label: nav會顯示的內容->在tag裡加入該屬性只會顯示文字，如果要加入圖片的話
  需用<div slot="label"></div> 代替
  name: 根據name切換顯示相對應的內容
  範例:
  <tabs v-model="display">
    <tab-pane label="deposit" name="first">
      {{ 內容 }}
    </tab-pane>
    <tab-pane name = second>
      <div slot="label">
        <img src="test.png" /> withdrawal
      </div>
      {{ 內容 }}
    </tab-pane>
  </tabs>
  data: display: "first"


  顯示的內容會是
  nav部分:
               +-----------------+
               |     deposit     |
               +-----------------+
               |<img> withdrawal |
               +-----------------+
  content部分  +-----------------+
               |   deposit內容   |
               +-----------------+
*/
export default {
  props: {
    name: String
  },
  computed: {
    active() {
      return this.$parent.target === this.name
    }
  }
}
</script>
