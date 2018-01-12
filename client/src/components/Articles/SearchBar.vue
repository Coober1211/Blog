<template>
  <div class="searchBar">
    <input type="text" class="search" placeholder="Search Article!">
  </div>
</template>

<script>
export default {
  name: 'searchBar',
};
</script>


<style lang="scss" scoped>
.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #F7F7F7;
  width: 96%;
  position: relative;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

</style>

