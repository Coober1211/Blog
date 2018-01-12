<template>
  <div class="card">
    <img src="../../assets/logo.png" alt="">
    <div class="card-info">
      <div class="title">
        <router-link to="#">Coding!</router-link>
      </div>
      <div class="date">2017/12/31</div>
      <div class="description">hello today I will .....</div>
      <div class="tags">#Vue.js</div>
    </div>
  </div>  
</template>


<script>
export default {
  name: 'card',
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  background-color: #fff;
  border-radius: 5px;
}

.card:nth-child(even) {
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "image info";
}

.card:nth-child(odd) {
  grid-template-columns: 3fr 2fr;
  grid-template-areas: "info image";
}

img {
  grid-area: image;
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
  background-image: linear-gradient(to right, rgba(255, 196, 14, 0.8) 100%, rgba(255, 196, 14, 0.8) 50%);
  border-bottom: 0px;
  text-decoration: none;
  color: #333;  
}

.date {
  grid-column: 3;
  grid-row: 3;
  justify-self: end;
}

.description {
  grid-column: 1/4;
  grid-row: 4/6;
}

.tags {
  grid-column: 1/4;
  grid-row: 6;
  justify-self: end;
}


</style>
