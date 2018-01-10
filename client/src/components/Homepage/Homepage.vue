<template>
  <div class="main">
    <div class="title title-up">Hello</div>
    <div class="title title-down">This is Hua</div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
};
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  min-height: 90vh;
  display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.title {
  color: #555;
  font-size: 180px;
  opacity: 0.4;
}

.title-up {
  grid-column: 2/6;
  grid-row: 1/4;
}

.title-down {
  grid-column: 1/12;
  grid-row: 4/7;
  justify-self: end;
  align-self: end;
}

</style>


