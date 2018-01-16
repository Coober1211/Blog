<template>
  <div class="hero" >
    <div :class="type" id="hero-image"></div>
  </div>  
</template>

<script>
export default {
  name: 'hero',
  props: ['type'],
};
</script>

<style lang="scss" scoped>
#hero-image {
  background-position: center;
  background-size: cover;
  min-height: 300px;
  opacity: 0.8;
  z-index: 50;
}

.coding {
  background-image: url(../../assets/coding.jpg);
}
</style>


