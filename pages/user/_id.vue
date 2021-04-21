<template >
  <div class="pgUser">
    <div class="pgUser-layout box-xxl">
      <section class="pgUser-user">
        <Masker :show="loading" height="300px">
          <Portrait :user="user" />
        </Masker>
        <!-- {{ text }} -->
      </section>
      <section class="pgUser-detail">
        <Masker :show="loading" height="600px">
          <NuxtChild :user="user" />
        </Masker>
      </section>
    </div>
  </div>
</template>

<script>
import Portrait from '@/components/Portrait.vue'
import Masker from '@/components/Masker.vue'

export default {
  async fetch() {
    return await this.$axios
      .get(`/api/user/${this.$route.params.id}`)
      .then((res) => {
        this.user = res.data.user
        // res.data
      })
      .catch((err) => {
        return { user: 'fail' }
      })
  },
  data() {
    return {
      user: {
        _id: '',
        photo: '',
        name: '',
        occupation: '',
        age: 0,
        email: '@email',
        gender: '@GENDER',
        skills: '@SKILL(5)',
        areas: '@CITY(2)',
        hobbits: '@HOBBIT(3)',
        experiences: '@EXPERIENCE(3)',
        focus_issue: '@FOCUS_ISSUE(3)',
        want_try: '@WANT_TRY(2)',
        description: '@paragraph',
      },
    }
  },
  // beforeUpdate(){
  //   console.log(`%c beforeUpdate `, 'background: lightseagreen; color: #fff');
  // },
  // updated(){
  //   console.log(`%c udpated `, 'background: lightseagreen; color: #fff');
  // },
  // created() {
  //   console.log(this.$fetchState.pending, "created")
  // },
  // mounted() {
  //   console.log(this.$fetchState.pending, "mounted");
  // },
  // activated(){
  //   console.log(`%c activated: ${this.$fetchState.timestamp}`, 'background: lightseagreen; color: #fff');
  //   if (this.$fetchState.timestamp <= Date.now() - 10000){
  //     this.$fetch()
  //   }

  // },
  watch: {
    ['$fetchState.pending'](now) {
      console.log(`%c ${now}`, 'background: lightseagreen; color: #fff')
    },
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    loading() {
      return this.$fetchState.pending
    },
  },
  components: {
    Portrait,
    Masker,
  },
}
</script>

<style lang="scss">
.pgUser {
  &-layout {
    display: grid;
    gap: 18px;
    grid-template-columns: 250px 1fr 200px;
    grid-template-areas: 'user detail extension';
  }
  &-user {
    grid-area: user;
  }
  &-detail {
    grid-area: detail;
  }
  @include lg {
    &-layout {
      display: block;
    }
    &-user {
      margin-bottom: 20px;
    }
  }
}
</style>