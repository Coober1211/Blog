<template>
  <div class="main">
    <info></info>
  </div>
</template>

<script>
import info from './Info';

export default {
  name: 'About',
  components: {
    info,
  },
};
</script>

<style lang="scss" scoped>

.main {
  font-family: 'Ovo', serif;
  margin: 10vh 20px 0 20px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.info {
  grid-column: 1;
}
</style>


