<script>
/* 網格元件，上層 "必須" 有 <c-row> 元件
 * 參數:
 *  span: [ 欄數 / 總欄數 ] // e.g: [1, 3] 代表占總長 1/3
 *
 * 使用範例:
 * <c-row>
 *    <c-col span="[1, 3]"></c-col>
 * </c-row>
 *
 */
export default {
  props: {
    span: {
      type: Number,
      required: true,
    },
    mq: {
      type: Object,
    },
  },
  data() {
    return {
      context: null,
    }
  },
  created() {
    let context = this.$parent
    while (context && context.$options.name !== 'CRow') {
      context = context.$parent
    }
    this.context = context
  },
  computed: {
    colClasses() {
      let colClasses = ['c-col', `c-col-${this.span}`]
      for (const bp in this.mq) {
        if (Object.hasOwnProperty.call(this.mq, bp)) {
          const span = this.mq[bp]
          colClasses.push(`c-col-${span}-${bp}`)
        }
      }
      return colClasses
    },
    colStyle() {
      return {
        'padding-left': `${this.context.gutterX / 2}px`,
        'padding-right': `${this.context.gutterX / 2}px`,
        'padding-top': `${this.context.gutterY / 2}px`,
        'padding-bottom': `${this.context.gutterY / 2}px`,
      }
    },
  },

  render(h) {
    return h(
      'div',
      { style: this.colStyle, class: this.colClasses },
      this.$slots.default
    )
  },
}
</script>
