<template>
  <div class="c-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
/* 網格元件，需要跟 <c-col> 並用
 * 參數:
 *  gutterX: 決定每一欄的左右間隔 (單位: px) e.g: 10
 *  gutterY: 決定每一行的上下間隔 (單位: px) e.g: 10
 *  justify: 同 flex justify-content， e.g: space-between
 *
 * 使用範例:
 * <c-row :gutterX="10" :gutterY="15" justify="center">
 *    <c-col span="[1, 3]"></c-col>
 * </c-row>
 *
 */
export default {
  name: 'CRow',
  props: {
    gutterX: {
      type: Number,
      default: () => 0,
    },
    gutterY: {
      type: Number,
      default: () => 0,
    },
    justify: {
      type: String,
      default: () => 'start',
      validator: (value) =>
        ['start', 'center', 'end', 'space-between', 'space-around'].includes(
          value
        ),
    },
  },

  computed: {
    justifyContent() {
      let result = this.justify
      switch (this.justify) {
        case 'start':
        case 'end':
          result = `flex-${this.justify}`
          break
        case 'between':
        case 'around':
          result = `space-${this.justify}`
          break
      }
      return result
    },
    rowStyle() {
      return {
        'margin-left': `${-this.gutterX / 2}px`,
        'margin-right': `${-this.gutterX / 2}px`,
        'margin-top': `${-this.gutterY / 2}px`,
        'margin-bottom': `${-this.gutterY / 2}px`,
        'justify-content': `${this.justifyContent}`,
      }
    },
  },
}
</script>
