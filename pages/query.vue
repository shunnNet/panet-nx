<template>
  <div class="pgQuery">
    <section class="pgQuery-search box-xl">
      <div class="block">
        <header class="block-header">
          <IconText class="block-title" icon="search">搜尋</IconText>
        </header>
        <section class="block-section">
          <QueryForm
            advance
            ref="search"
            :trigger.sync="trigger"
            :watch-qs="true"
          />
        </section>
      </div>
    </section>

    <section class="pgQuery-result box-xxl">
      <NuxtLink
        v-for="item in list"
        :key="item._id"
        class="pgQuery-link"
        :to="{
          name: 'User-id-info',
          params: { id: item._id },
        }"
      >
        <InfoCard class="pgQuery-card" :user="item"></InfoCard>
      </NuxtLink>
    </section>

    <IntersectionObserver :threshold="0.5" v-model="intersection">
      <section class="pgQuery-state box-xxl">
        <Branches :branch="state">
          <Loading slot="loading" />
          <button class="btn" slot="more" @click="nextPage">看更多</button>
          <CDivider slot="nomore" text="沒有更多的結果" />
        </Branches>
      </section>
    </IntersectionObserver>
  </div>
</template>

<script>
import IconText from '@/components/IconText.vue'
import InfoCard from '@/components/card/InfoCard.vue'
import QueryForm from '@/components/QueryForm.vue'
import Loading from '@/components/Loading.vue'
import Branches from '@/components/Branches.vue'
import IntersectionObserver from '@/components/IntersectionObserver.vue'

export default {
  name: "Query",
  async fetch() {
    let payload = this.$nuxt.context.query
    payload.page = Number(payload.page)

    const response = await this.$axios.post('/api/query', payload)
    this.list.push(...response.data.list)
    this.haveNextPage = response.data.haveNextPage
    this.isFirstQuery = false
  },
  fetchOnServer: false,
  components: {
    IconText,
    InfoCard,
    QueryForm,
    Loading,
    Branches,
    IntersectionObserver,
  },
  data() {
    return {
      list: [],
      intersection: false,
      trigger: false,
      isFirstQuery: true,
      haveNextPage: false,
      queryWatcher: null,
      beenDeactive: false
    }
  },
  computed: {
    state() {
      return this.$fetchState.pending
        ? 'loading'
        : this.haveNextPage
        ? 'more'
        : 'nomore'
    },
    canLoadNextPage() {
      return (
        this.intersection &&
        !this.isFirstQuery &&
        this.haveNextPage &&
        this.state !== 'loading' &&
        this.state !== 'nomore'
      )
    },
  },
  methods: {
    nextPage() {
      this.trigger = true
      this.runNextPageFlag = true
    },
    fetchIfPageAvailable() {
      const query = this.$route.query
      let page = Number(query.page)
      if (page === 1) {
        this.isFirstQuery = true
        this.haveNextPage = true
        this.list = []
        this.$fetch()
        return
      }
      if (page > 1 && this.haveNextPage && this.runNextPageFlag) {
        this.runNextPageFlag = false
        this.$fetch()
        return
      }

      query.page = 1
      // NOTE: can't use this.$router.push
      this.$nuxt.context.redirect({ name: this.$route.name, query: query })
    },
    initWatcher() {
      this.queryWatcher = this.$watch('$route.query', (now, last) => {
        if (this.$route.name === 'query') {
          console.log("watch");
          this.fetchIfPageAvailable()
        }
      })
    },
  },
  watch: {
    intersection(now, last) {
      if (this.canLoadNextPage) {
        this.nextPage()
      }
    },
  },
  created() {
    this.fetchIfPageAvailable()
  },
  activated() {
    console.log("activated");
    if (this.beenDeactive){
      this.fetchIfPageAvailable()
    }
    this.initWatcher()
  },
  deactivated() {
    this.beenDeactive = true
    this.queryWatcher()
  },
}
</script>

<style lang="scss">
.pgQuery {
  &-card {
    width: 100%;
  }
  &-search {
    margin-bottom: 20px;
  }
  &-link {
    @extend %reset-a;
    display: block;
  }
  &-result {
    margin-bottom: 20px;
  }
  &-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
  }
}
.pgQuery-result {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  @include xl {
    grid-template-columns: repeat(3, 1fr);
  }
  @include lg {
    grid-template-columns: repeat(2, 1fr);
  }
  @include md {
    grid-template-columns: 1fr;
  }
}
</style>
