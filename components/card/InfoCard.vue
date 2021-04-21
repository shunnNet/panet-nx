<template>
  <article class="card">
    <ScaleImg class="card-imgBox" :url="user.photo" v-lazy="user.photo" />
    <header class="card-header">
      <IconText class="card-title" tag="h3" icon="person">{{ user.name }}</IconText>
      <span class="card-subTitle"> {{ user.occupation.name }} </span>
    </header>

    <section class="card-body">
      <div class="card-paragraph">
        <h5 class="card-subject">活動區域:</h5>
        <template v-for="(area, i) in user.areas">
          <Tag :type="area.type" :key="i"> {{ area.name }} </Tag>
        </template>
      </div>
      <div class="card-paragraph">
        <h5 class="card-subject">技能:</h5>
        <template v-for="(skill, i) in user.skills">
          <Tag :type="skill.type" :key="i"> {{ skill.name }} </Tag>
        </template>
      </div>
    </section>
    <footer class="card-foot">
      <IconText tag="span" class="card-footItem" icon="subject"
        >影音: {{ user.medias.length }}</IconText
      >
      <IconText tag="span" class="card-footItem" icon="subject"
        >經歷: {{ user.experiences.length }}</IconText
      >
    </footer>
  </article>
</template>

<script>
import ScaleImg from '@/components/card/ScaleImg.vue'
import Tag from '@/components/Tag.vue'
import IconText from '@/components/IconText.vue'

export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        name: "user A",
        occupation: "Administrator",
        photo: '/5e26de61693a100024f5575b.jpg',
        areas: [],
        skills: [],
        medias: [],
        experiences: [],
      }),
    },
  },
  components: {
    ScaleImg,
    Tag,
    IconText,
  },
}
</script>

<style lang="scss">
$padding: 10px;
$card-block-padding: ($padding / 2) $padding;

.card {
  @extend %useBlockTheme;
  display: flex;
  flex-flow: column;
  height: 100%; // make each card's height equal, with 彈性 content.
  width: 300px;

  &-imgBox {
    border-radius: $global-block-radius $global-block-radius 0 0;
    cursor: pointer;
  }

  &-header {
    // @extend %titleBox;
    display: flex;
    align-items: center;
    padding: $card-block-padding;
    margin-top: 5px;
  }
  &-title {
    display: inline-flex;
    margin-right: 5px;
    margin-left: 5px;
    align-items: center;
    @extend %reset-text;
    @extend %blockTitle;
  }
  &-subTitle {
    @extend %reset-text;
    @extend %blockTitleSub;
  }

  &-body {
    flex: 1 0 0;
    padding: $card-block-padding;
    // font-size: 1rem;
    // line-height: 2em;
    // font-weight: bold;
  }
  &-paragraph {
    margin-bottom: 5px;
  }
  &-subject {
    @extend %blockSubject;
    display: flex;
    margin-bottom: 5px;
  }
  &-foot {
    padding: $card-block-padding;
    border-top: 1px solid gray;
    font-size: 0.9em;
    color: gray;
  }
  &-footItem {
    margin-right: 8px;
  }
}
</style>