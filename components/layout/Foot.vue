<template>
  <footer class="foot">
    <section class="foot-outerLinks box-lg">
      <a
        class="foot-outerLinkWrap"
        v-for="link in goodLinks"
        :key="link.alt"
        :href="link.href"
        :title="link.alt"
        target="_blank"
      >
        <img
          class="foot-outerLinkImg linkImage"
          :src="link.src"
          :alt="link.alt"
        />
      </a>
    </section>
    <section class="foot-about box">
      <router-link class="foot-logoWrap" :to="{ name: 'index' }">
        <Logo class="foot-logo" />
      </router-link>
      <div class="foot-tools">
        <ul class="list list--pipe foot-pipe">
          <li class="list-item">
            <button class="link reset-btn">網站條款</button>
          </li>
          <li class="list-item">
            <button class="link reset-btn">隱私權政策</button>
          </li>
          <li class="list-item foot-declaration">本站台僅供學習用途</li>
        </ul>
        <div class="d-flex">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpanet.herokuapp.com%2Findex&quote=%E8%A1%A8%E8%97%9D%E4%BA%BA"
            target="_blank"
          >
            <Facebook class="foot-linkIcon linkImage" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fpanet.herokuapp.com%2Findex&text=%E8%A1%A8%E8%97%9D%E4%BA%BA:%20https%3A%2F%2Fpanet.herokuapp.com%2Findex"
            target="_blank"
          >
            <Twitter class="foot-linkIcon linkImage" />
          </a>
          <a
            href="mailto:wendell20904102@gmail.com?subject=%E8%A1%A8%E8%97%9D%E4%BA%BA&body=Demo%20website:%20https%3A%2F%2Fpanet.herokuapp.com%2Findex"
            target="_blank"
          >
            <Email class="foot-linkIcon linkImage" />
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
// import Logo from '@/assets/images/logo.svg?inline'
// import Facebook from '@/assets/images/Facebook.svg?inline'
// import Email from '@/assets/images/Email.svg?inline'
// import Twitter from '@/assets/images/Twitter.svg?inline'
export default {
  data() {
    return {
      goodLinks: [
        {
          src: require('~/assets/images/pacomment_logo.png'),
          alt: '表演藝術評論台',
          href: 'https://pareviews.ncafroc.org.tw/',
        },
        {
          src: require('~/assets/images/seeeveryday_logo.jpg'),
          alt: '每日看戲俱樂部',
          href: 'https://mjkc.tw/?paged=2',
        },
        {
          src: require('~/assets/images/artticket_logo.jpg'),
          alt: '兩廳院售票',
          href:
            'https://www.artsticket.com.tw/CKSCC2005/Home/Home00/index.aspx',
        },
        {
          src: require('~/assets/images/tsai_logo.png'),
          alt: '菜齊阿',
          href: 'https://laijiatsai.com/',
        },
      ],
    }
  },
  components: {
    // Logo,
    // Facebook,
    // Email,
    // Twitter,
  },
}
</script>

<style lang="scss">
.foot {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: $gray-400;

  &-outerLinks {
    // @extend %box-md;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
  }
  &-outerLinkWrap {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 10px;
    height: 80px;
    width: 150px;
    @include md {
      width: 50%;
    }
  }

  &-outerLinkImg {
    @extend %img--fluid;
    max-width: 150px;
    max-height: 80px;
  }
  &-about {
    display: flex;
    align-items: center;
    @include md {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &-logoWrap {
    @extend %reset-a;
    margin-right: 20px;
    border-right: 1px solid #000;
    @include md {
      border: unset;
    }
  }
  &-logo {
    height: 100px;
    max-width: 100%;
  }
  &-linkIcon {
    @extend %img--fluid;
    width: 40px;
    margin-right: 5px;
  }
  &-pipe {
    margin-bottom: 15px;
  }
  &-declaration {
    font-weight: bold;
    letter-spacing: 3px;
    font-style: italic;
  }
}
</style>