<template >
  <div class="block">
    <!-- <LoadingBlock /> -->
    <header class="block-header">
      <IconText icon="Person" class="block-title"> 個人資訊 </IconText>
    </header>
    <section class="block-section">
      <p class="block-section block-text">
        <span class="block-subject">信箱: </span>
        {{ user.email }}
      </p>
      <p class="block-section block-text">
        <span class="block-subject">性別: </span>
        {{ user.gender.name }}
      </p>
      <p class="block-section block-text" v-if="user.age">
        <span class="block-subject">年齡: </span>
        {{ user.age }}
      </p>
      <div class="block-text block-section" v-if="user.skills.length">
        <p class="block-subject">技能:</p>
        <Tag v-for="skill in user.skills" :key="skill._id">
          {{ skill.name }}
        </Tag>
      </div>
      <div class="block-text block-section" v-if="user.hobbits.length">
        <p class="block-subject">嗜好:</p>
        <Tag v-for="(hobit, i) in user.hobbits" :key="i">
          {{ hobit.name }}
        </Tag>
      </div>
      <div class="block-text block-section" v-if="user.areas.length">
        <p class="block-subject">活動區域:</p>
        <Tag v-for="area in user.areas" :key="area._id"> {{ area.name }} </Tag>
      </div>
      <div class="block-text block-section" v-if="user.experiences.length">
        <p class="block-subject">經歷:</p>
        <Tag v-for="exp in user.experiences" :key="exp._id">
          {{ exp.name }}
        </Tag>
      </div>
      <div class="block-text block-section" v-if="user.focus_issue.length">
        <p class="block-subject">關注的議題:</p>
        <Tag v-for="issue in user.focus_issue" :key="issue._id">
          {{ issue.name }}
        </Tag>
      </div>
      <div class="block-text block-section" v-if="user.want_try.length">
        <p class="block-subject">想嘗試:</p>
        <Tag v-for="want in user.want_try" :key="want._id">
          {{ want.name }}
        </Tag>
      </div>
      <div class="block-text block-section" v-if="user.description">
        <p class="block-subject">描述:</p>
        {{ user.description }}
      </div>
    </section>
  </div>
</template>

<script>
// NOTE: comment cause render tree mismatch
// asyncData twice
import LoadingBlock from '@/components/LoadingBlock.vue'
import Tag from '@/components/Tag.vue'

export default {
  components: {
    Tag,
    LoadingBlock,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>

<style>
</style>