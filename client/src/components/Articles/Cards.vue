<template>
  <div class="cards">
    <div class="card" v-for="a in $store.state.articles" :key="a.key">
      <div class="img-box">
        <router-link :to="a.slug" append>
          <div :class="a.type" id="img"></div>
        </router-link>
      </div>
      <div class="card-info">
        <div class="title">
          <router-link :to="a.slug" append>{{a.title}}</router-link>
        </div>
        <div class="icons" v-if="$store.state.isUserLoggedIn">
          <router-link :to="{name: 'Edit', params: {slug: a.slug}}" append>Edit</router-link>
        </div>
        <div class="date">{{handleTime(a.created)}}</div>
        <div class="description">{{a.abstract}}</div>
        <div class="tags">
          <div class="tag" v-for="tag in a.tags" :key="tag.key">
            <div class="tag--link">            
              <div class="tag--text">#{{tag}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'cards',
  methods: {
    handleTime(time) {
      return time.split('T')[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 
    "image"
    "info";
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
}

.img-box {
  grid-area: image;
  display: flex;
  align-items: center;
  user-select: none;
}

#img {
  width: 200px;
  height: 100px;
  border-radius: 3px;
  opacity: 0.7;
  background-size: cover;
}

.card:hover #img {
  opacity: 1;
}

.card-info {
  grid-area: info;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.title {
  grid-column: 1/4;
  grid-row: 1/3;
  font-size: 35px;
  letter-spacing: 1px;
  transform: skew(0deg, -3deg);
  font-weight: bold;
  line-height: 1.1;
  margin: 0px;
}

.title a {
  background-image: linear-gradient(to right, #F7C242 100%, #F7C242 50%);
  border-bottom: 0px;
  text-decoration: none;
  color: darken($color: #58B2DC, $amount: 10);
}

.icons {
  grid-column: 3;
  grid-row: 1;
  justify-items: end;
  text-align: right;
  z-index: 10;
}

.date {
  grid-column: 3;
  grid-row: 3;
  justify-self: end;
  align-self: end;
  font-style: italic;
  opacity: 0.6;
  padding: 0;
  border-bottom: 2px solid darken($color: #58B2DC, $amount: 10);
}

.description {
  grid-column: 1/4;
  grid-row: 4/6;
}

.tags {
  grid-column: 1/4;
  grid-row: 6;
  justify-self: end;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: block;
  margin-right: 1rem;
}

.tag--link {
  background-color: #F7C242;
  color: darken($color: #58B2DC, $amount: 20);
  display: flex;
  padding-left: 10px;
  clip-path: polygon(10px 0%, 100% 1%, 100% 100%, 10px 100%, 0% 50%);
}

@media (min-width: 700px) {
  .card {
    display: grid;
    grid-template-rows: 1fr;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1), 0 5px 10px rgba(0,0,0,0.05);
  }

  .card:nth-child(odd) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "image info";
    transform: perspective(100px) rotateX(-1deg) translateY(5px);
    background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
  }

  .card:nth-child(even) {
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "info image";
    transform: perspective(100px) rotateX(1deg) translateY(1px) scale(1.001);
    background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
  }
  #img {
    width: 190px;
    height: 100px;
    border-radius: 3px;
    opacity: 0.7;
    background-size: cover;
  }
}


</style>
