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
  name: "Tabs",
  props: {
    value: [Number, String],
    vertical: {
      type: Boolean
    },
    horizontal: {
      type: Boolean
    }
  },
  data() {
    return {
      target: this.value
    }
  },
  methods: {
    getContent(h) {
      return this.$slots.default.map((ele) => {
        return h(
          "div",
          {
            class: ele.data.staticClass || null,
            on: {
              click: () => this.clickEvent(ele.componentOptions.propsData.name),
              mouseenter: () => this.clickEvent(ele.componentOptions.propsData.name),
            }
          },
          [
            ele.data.attrs.label ||
              ele.componentOptions.children.filter((vnode) => vnode.data && vnode.data.slot === "label")
          ]
        )
      })
    },
    clickEvent(name) {
      this.target = name
      this.$emit("input", name)
    }
  },
  render(h) {
    const header = h(
      "div",
      {
        class: {
          tabs__header: true,
          tabs__header__horizontal: this.horizontal
        }
      },
      this.getContent(h)
    )
    const panels = h(
      "div",
      {
        class: "tabs__content"
      },
      this.$slots.default
    )
    return h("div", {}, [header, panels])
  }
}
</script>
