<template>
  <div class="main">
    <div class="title title-up">Hello</div>
    <div class="title title-down">This is Hua</div>
    <div class="verticle first">Coding</div>
    <div class="verticle second">Design</div>
    <div class="verticle third">Life</div>
    <div class="verticle fourth">Travel</div>    
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
  font-family: 'Kaushan Script', cursive;
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

.verticle {
  writing-mode: vertical-lr;
  z-index: 10;
  font-size: 70px;
}

.first {
  grid-column: 2;
  grid-row: 2/4;
  align-self: end;
}

.second {
  grid-column: 5;
  grid-row: 3/5;
}

.third {
  grid-column: 9;
  grid-row: 1/3;
  align-self: end;
}

.fourth {
  grid-column: 11;
  grid-row: 5/7;
}

</style>


