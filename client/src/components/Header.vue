<template>
  <div id="headerNav">
    <div class="blur"></div>
    <div class="greet">
      <router-link to="admin" v-if="$store.state.isUserLoggedIn">
        <span >Hi! {{$store.state.user.name}}</span>
      </router-link>
      <router-link to="/" v-else>
        <span>Hua's Blog</span>
      </router-link>
    </div>
    <nav>
      <div v-for="item in navList" :key="item.key">
        <router-link :to="{path: item.url}">{{item.name}}</router-link>
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
        { name: 'About', url: '/about' },
        { name: 'Articles', url: '/articles' },
        // { name: 'Projects', url: '/' },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

#headerNav {
  width: 100%;
  z-index: 100;
  font-family: 'Kaushan Script', cursive;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    "greet"
    "navbar";
}

.blur {
  background-color: #0D5661;
  opacity: .4;
  filter: blur(1px);
  position: absolute;
  z-index: -10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.greet {
  grid-area: greet;
  text-align: center;
}

.greet a {
  color: #F7C242;
  text-shadow: 1px 1px 1px #F7C242;
  height: 100%;  
  font-size: 2em;
  line-height: 10vh;
  margin-left: 10px;
  text-decoration: none;
  letter-spacing: 1px;
}

nav {
  grid-area: navbar;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

nav div {
  height: 100%;
  text-align: center;
}

#headerNav nav a {
  color: #fff;
  margin: 0 auto;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 1.4em;
}

#headerNav nav div:hover a{
  border-bottom: 5px solid #58B2DC;
}

@media (min-width: 700px) {
  #headerNav {
  width: 100%;
  height: 10vh;
  display: grid;
  grid-template-columns: 4fr 5fr 3fr;
  grid-template-areas: "greet ... navbar";
  }

  nav {
    grid-area: navbar;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  nav a {
    line-height: 10vh;    
  }

  .greet {
    grid-area: greet;
    text-align: left;
  }
}

</style>

