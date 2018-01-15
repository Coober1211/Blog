<template>
  <div class="hero" >
    <div class="hero-image"></div>
  </div>  
</template>

<script>
export default {
  name: 'hero',
};
</script>

<style lang="scss" scoped>
.hero-image {
  background-image: url(../../assets/coding.jpg);
  background-position: center;
  background-size: cover;
  min-height: 300px;
  z-index: 50;
}
</style>


