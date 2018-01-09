<template>
  <div id="headerNav">
    <div class="blur"></div>
    <nav>
      <div v-for="item in navList" :key="item.key">
        <router-link :to="item.url">{{item.name}}</router-link>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'headerNav',
  data() {
    return {
      navList: [
        { name: 'About', url: '#' },
        { name: 'Articles', url: 'articles' },
        { name: 'Projects', url: '#' },
        { name: 'Connect', url: '#' },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

#headerNav {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-areas: ". navbar"
}

.blur {
  background-color: #171717;
  opacity: .2;
  filter: blur(1px);
  position: absolute;
  z-index: -10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

nav {
  grid-area: navbar;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

nav div {
  float: left;
  height: 100%;
  text-align: center;
}

#headerNav nav a {
  color: #fff;
  line-height: 60px;
  margin: 0 auto;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.2em;
}

#headerNav nav div:hover {
  background-color: rgba(23, 23, 23, 0.7);
}


</style>

