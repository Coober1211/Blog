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
import homeAni from '../../assets/javascripts/homeAni';

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
  height: 80vh;
  font-family: 'Kaushan Script', cursive;
  overflow: hidden;
}

.title {
  // color: darken($color: #58B2DC, $amount: 30);
  color: #F7C242;
  text-shadow: 6px 6px 4px #F7C242;
  transform: skew(10deg, -10deg);
  font-size: 150px;
  z-index: 10;
  border-radius: 50px;
}

.verticle {
  display: none;
}
div.hero {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  opacity: 0.4;
}

div.hero-image {
  background: url(../../assets/image/ocean.jpg);
  filter: blur(3px);
  -webkit-filter: blur(3px);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;

}



@media (min-width: 700px) {
  .main {
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
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
  
  div.hero {
    grid-column: 1/13;
    grid-row: 1/7;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: relative;
    transform: translate3d(15px, 13px, 0px);
  }

  div.hero-image {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 1s linear;
    width: 108%;
    height: 108%;
    top: 50%;
    left: 47%;
  }
}

@media (min-width: 1000px) {
  .verticle {
  // writing-mode: vertical-lr;
  z-index: 10;
  font-size: 70px;
  color: #58B2DC;
  display: block;
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

}

</style>


