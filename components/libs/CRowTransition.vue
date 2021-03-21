<template>
  <transition-group v-bind="$attrs" class="c-row" :style="rowStyle">
    <slot></slot>
  </transition-group>
</template>

<script>
/* c-row 的 transition-group 版本，因為兩個元件不能同時使用，所以整合成一個元件
 * 網格元件，需要跟 <c-col> 並用，
 * 參數:
 *  1. (繼承 c-row，參見 c-row)
 *  2. 可以吃 transition-group 的全部參數
 *
 * 使用範例:
 * <c-row-transition :gutterX="10" tag="div" name="fade" appear >
 *    <c-col span="[1, 3]" v-for="item in datalist"></c-col>
 * </c-row>
 *
 */
import LbRow from "./CRow.vue";
export default {
  inheritAttrs: false,
  name: "CRow",
  extends: LbRow,
};
</script>
