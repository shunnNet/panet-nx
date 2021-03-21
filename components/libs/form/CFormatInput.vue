<template>
  <input v-model="showValue" @input="formatValue()" @focus="$emit('focus', $event)" @blur="$emit('blur', $event)" />
</template>

<script>
/*
  讓 input 顯示成特定格式的元件，並且可以資料操作時可以直接操作原始資料
  使用方式:
    1. extend 這個元件，並且 覆寫(override) 掉 toDataFormat 及 toViewFormat 兩個方法
      toViewFormat: 將原始資料 --> 要顯示的特定格式
      toDataFormat: 將顯示的格式 --> 原始資料
      這兩個動作的流程發生在 formatValue 跟 watch 中
      e.g 見最下方使用範例

    2. 承1，如果不想要新開一個元件，也可以使用參數的方式決定轉換的函式
      參數 toData 用途同 toDataFormat，可從上層傳入函數名，有傳入時，會執行 toData，而不執行 toDataFormat
      參數 toView 用途同 toViewFormat，可從上層傳入函數名。有傳入時，會執行 toView，而不執行 toViewFormat


    3. 承1，使用範例: 用法跟普通的 input 一模一樣
      e.g 見最下方使用範例

    4. 承1，toViewFormat 可能需要考慮 "原始資料改變 or 不改變" 兩種情況
      此時，傳入 toViewFormat 的參數會不同

      原始資料改變: 第一個參數會是 this.value， 第二個參數是 false
      原始資料沒改變: 第一個參數會是 this.showValue， 第二個參數是 true

*/
export default {
  data() {
    return {
      showValue: ""
    }
  },
  props: {
    value: {
      required: true
    },
    toData: {
      default: () => undefined
    },
    toView: {
      default: () => undefined
    }
  },
  created() {
    this.showValue = this.formatToView(this.value)
  },
  watch: {
    value(newValue) {
      this.showValue = this.formatToView(newValue)
    }
  },
  methods: {
    formatValue() {
      // don't overwrite me !
      const dataValue = this.formatToData(this.showValue)
      if (this.value !== dataValue) {
        this.$nextTick(() => {
          this.$emit("input", this.formatToData(this.showValue))
        })
      } else {
        this.showValue = this.formatToView(this.showValue, true)
      }
    },
    formatToData(value) {
      // don't overwrite me !
      return this.toData ? this.toData(value) : this.toDataFormat(value)
    },
    formatToView(value, dataChanged = false) {
      // don't overwrite me !
      return this.toView ? this.toView(value, dataChanged) : this.toViewFormat(value, dataChanged)
    },
    toDataFormat(value) {
      return value
    },
    toViewFormat(value, dataChanged) {
      return value
    }
  }
}

/*
  示範1： 使用 extend
  讓 input 顯示成前面一定會有 $ 字號，

currencyInput.vue

  import formatInput from "./formatInput.vue"
  export default {
    extends: formatInput,
    methods: {
      toDataFormat(value) {
        return value.replace(/\$/g, "").replace(/\s/g, "")
      },
      toViewFormat(value) {
        return `$ ${value}`
      }
    }
  }

使用: 用法跟普通的 input 一模一樣
parent.vue

  <currency-input
    v-model="form.currency"
    v-validate="'required|email'"
    name="currency"
    placeholder="請輸入金額"
    class="form__input-box">
  </currency-input>


  示範2： 使用參數

parent.vue

  <currency-input
    v-model="form.currency"
    v-validate="'required|email'"
    name="currency"
    placeholder="請輸入金額"
    class="form__input-box"
    :toData="toData"
    :toView="toView">
  </currency-input>

  ....
  methods: {
    toData(value){
      return value.replace(/\$/g, "").replace(/\s/g, "")
    },
    toView(value) {
      return `$ ${value}`
    }
  }

*/
</script>
