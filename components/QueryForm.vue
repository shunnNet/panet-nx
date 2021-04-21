<template>
  <form class="queryForm queryForm--dark" @submit.prevent="onSubmit">
    <div class="queryForm-mainBody">
      <CSelect
        :dark="dark"
        class="queryForm-select"
        placeholder="請選擇"
        name="field"
        :options="fieldsOpts"
        v-model="form.field"
        :drop-max-height="120"
      />
      <CInput
        :dark="dark"
        placeholder="請輸入關鍵字"
        class="queryForm-input"
        name="keyword"
        v-model="form.keyword"
      />
      <button :class="['btn', buttonTheme, 'queryForm-submit']" type="submit">
        <Search />
      </button>
    </div>
    <template v-if="advance">
      <h3 class="block-subject queryForm-advTitle">進階篩選:</h3>
      <slot :form="form">
        <Multiselect
          class="queryForm-skill"
          :options="skillsOpts"
          v-model="form.skills"
          placeholder="請選擇技能"
          :multiple="true"
          label="name"
          track-by="_id"
        />
        <CSelect
          :dark="dark"
          class="queryForm-area"
          placeholder="請選擇"
          name="area"
          :options="areasOpts"
          v-model="form.area"
          :drop-max-height="120"
        />
      </slot>
    </template>
  </form>
</template>

<script>
import { CSelect, CInput } from '@/components/libs'
import Multiselect from 'vue-multiselect'
import { isNumber } from '@/assets/scripts/helpers/assert.js'
import { toNumber } from '@/assets/scripts/helpers/utils.js'

export default {
  props: {
    dark: Boolean,
    trigger: {
      type: Boolean,
      default: () => false,
    },
    advance: {
      type: Boolean,
      default: () => false,
    },
    watchQs: {
      typs: Boolean,
      default: () => false,
    },
  },
  components: {
    CSelect,
    CInput,
    Multiselect,
  },
  data() {
    return {
      form: {
        field: 'user',
        keyword: '',
        area: -1,
        skills: [],
        page: 1,
      },
      fieldsOpts: [{ label: '找人才', value: 'user' }],
      skillsOpts: [],
      areasOpts: [],
    }
  },
  computed: {
    buttonTheme() {
      return this.dark ? 'btn--sub-line' : 'btn--primary'
    },
  },
  watch: {
    trigger(now, last) {
      if (now === true) this.next()
    },
  },
  methods: {
    syncQsWithFormIfWatch() {
      if (this.watchQs) {
        const qsObj = this.$route.query
        for (const key in qsObj) {
          if (key in this.form) {
            let value = qsObj[key]
            switch (key) {
              case 'field':
                value = Array.isArray(value) ? value[0] : value
                if (!['user'].includes(value)) {
                  value = 'user'
                }
                break
              case 'page':
                value = Array.isArray(value) ? value[0] : value
                value = toNumber(value)
                value = isNaN(value) ? 1 : value
                break

              case 'area':
                value = Array.isArray(value) ? value[0] : value
                value = toNumber(value)
                value = this.areasOpts.find((item) => item.value === value)
                  ? value
                  : -1
                break

              case 'skills':
                if (Array.isArray(value)) {
                  value = value.map(toNumber)
                  value = this.skillsOpts.filter((opt) =>
                    value.includes(opt._id)
                  )
                } else {
                  value = toNumber(value)
                  value = this.skillsOpts.find((s) => value === s._id)
                  value = value ? [value] : []
                }
                break
            }
            this.form[key] = value
          }
        }
      }
    },
    onSubmit(e) {
      this.form.page = 1
      this.updateCondition()
    },
    next() {
      this.form.page++
      this.updateCondition()
    },
    updateCondition() {
      const skills = this.form.skills.map((item) => item._id)
      const query = {
        field: this.form.field,
        keyword: this.form.keyword,
        area: this.form.area,
        page: this.form.page,
        skills,
      }
      this.$router.push({ name: 'query', query: query })
      this.$emit('update:trigger', false)
    },
    fetchOptionsIfAdvance() {
      if (this.advance) {
        return this.$axios
          .get('/api/query', {
            params: {
              type: 'user',
            },
          })
          .then((res) => {
            this.areasOpts = res.data.areas.map((area) => {
              return {
                label: area.name,
                value: area._id,
              }
            })
            this.skillsOpts = res.data.skills
          })
      }
    },
  },
  async mounted() {
    await this.fetchOptionsIfAdvance()
    this.syncQsWithFormIfWatch()
  },
  activated() {
    this.syncQsWithFormIfWatch()
  },
}
</script>

<style lang="scss">
.queryForm {
  width: 100%;
  &-mainBody {
    display: flex;
    margin-bottom: 15px;
  }
  &-select {
    flex: 0 0 100px;
    margin-right: 10px;
  }
  &-input {
    flex: 1;
    margin-right: 10px;
  }
  &-submit {
    align-self: center;
    height: 40px;
    flex: 0 0 100px;
  }
  &-advTitle {
    margin-bottom: 5px;
  }
  &-skill {
    margin-bottom: 10px;
  }

  &-area {
    width: 100%;
    max-width: 150px;
  }
  @include lg {
    &-mainBody {
      flex-direction: column;
    }
    &-select {
      width: 100%;
      flex: auto;
      margin-right: 0;
      margin-bottom: 10px;
    }
    &-input {
      width: 100%;
      flex: auto;
      margin-right: 0;
      margin-bottom: 10px;
    }
    &-submit {
      width: 100%;
      flex: auto;
    }
  }
}
.queryForm--dark {
  .queryForm {
    &-input {
      border-color: color(light);
    }
  }
}

.queryForm--verticle {
  flex-direction: column;
  .queryForm {
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