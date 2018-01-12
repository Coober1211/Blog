<template>
  <div class="main no-select">
    <!-- <div class="title title-up">Hello</div> -->
    <div class="title title-down move-background">This is Hua</div>
    <div class="verticle first">#Coding</div>
    <div class="verticle second">#Design</div>
    <div class="verticle third">#Life</div>
    <div class="verticle fourth">#Travel</div> 

    <!-- Background Image -->
    <div class="hero">
      <div class="background move-background hero-image"></div>
    </div>   
  </div>
</template>

<script>
import homeAni from '../modules/homeAni';

export default {
  name: 'Homepage',
  mounted() {
    homeAni();
  },
};
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  font-family: 'Kaushan Script', cursive;
  overflow: hidden;
}

.title {
  // color: darken($color: #58B2DC, $amount: 30);
  color: #F7C242;
  text-shadow: 6px 6px 4px #F7C242;
  transform: skew(10deg, -10deg);
  font-size: 220px;
  z-index: 10;
  grid-column: 2/11;
  grid-row: 1/4;
  border-radius: 50px;
}

.verticle {
  // writing-mode: vertical-lr;
  z-index: 10;
  font-size: 70px;
  color: #58B2DC;
  // transform: skew(30deg, -30deg);
  text-shadow: 5px 5px 4px #ccc;
}

.first {
  grid-column: 4/7;
  grid-row: 5;
  justify-self: end;
}

.second {
  grid-column: 6/8;
  grid-row: 4;
  justify-self: end;
}

.third {
  grid-column: 9/11;
  grid-row: 5;
  align-self: end;
}

.fourth {
  grid-column: 10/12;
  grid-row: 4;
}

div.hero {
  grid-column: 1/13;
  grid-row: 1/7;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  display: block;
  left: 0px;
  height: 95%;
  width: 100%;
  opacity: 0.4;
  transform: translate3d(15px, 13px, 0px);
}

div.hero-image {
  background: url(../../assets/ocean_big.jpg);
  filter: blur(3px);
  -webkit-filter: blur(3px);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 108%;
  height: 108%;
  top: 50%;
  left: 47%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: all 1s linear;
}

.no-select {
  cursor: default;
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Likely future */
}
</style>


