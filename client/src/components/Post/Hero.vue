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
  min-height: 200px;
  border-radius: 3px;
  opacity: 0.8;
  z-index: 50;
}

.hero {
  background-color: lighten($color: #58B2DC, $amount: 0);  
}

.Coding {
  background-image: url(../../assets/image/coding.jpg);
}
</style>


