<template>
  <form class="simpleSearch" @submit.prevent="onSubmit">
    <CSelect
      class="simpleSearch-select"
      placeholder="請選擇"
      name="field"
      :options="options"
      v-model="form.select"
      :drop-max-height="120"
    />
    <CInput
      placeholder="please enter search"
      class="simpleSearch-input"
      name="search"
      v-model="form.search"
    />
    <button class="c-submit simpleSearch-submit" type="submit">Submit</button>
  </form>
</template>

<script>
import { CSelect, CInput } from '@/components/libs'
export default {
  components: {
    CSelect,
    CInput,
  },
  data() {
    return {
      options: [
        { label: '', value: '' },
        { label: 'option1', value: 'option1' },
        { label: 'option2', value: 'option2' },
        { label: 'option3', value: 'option3' },
        { label: 'option4', value: 'option4' },
        { label: 'option1', value: 'option1' },
        { label: 'option2', value: 'option2' },
        { label: 'option3', value: 'option3' },
        { label: 'option4', value: 'option4' },
      ],
      form: {
        select: '',
        search: '',
      },
    }
  },
  methods: {
    onSubmit(e) {
      console.log(this.form)
    },
  },
}
</script>

<style lang="scss">
.simpleSearch {
  display: flex;

  &-select {
    flex: 0 0 100px;
    margin-right: 5px;
  }
  &-input {
    flex: 1;
    margin-right: 5px;
  }
  &-submit {
    flex: 0 0 100px;
  }
}
.simpleSearch--verticle {
  flex-direction: column;
  .simpleSearch {
    &-select {
      width: 100%;
      flex: auto;
      margin-right: 0;
      margin-bottom: 5px;
    }
    &-input {
      width: 100%;
      flex: auto;
      margin-right: 0;
      margin-bottom: 5px;
    }
    &-submit {
      width: 100%;
      flex: auto;
    }
  }
}
</style>