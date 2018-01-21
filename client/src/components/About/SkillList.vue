<template>
  <div class="skill-list">
    <ul>
      <li v-for="skill in skills" :key="skill.key">{{skill}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'slillList',
  data() {
    return {
      skills: [
        '🔥 Vue.js',
        '🌻 Sass',
        '🚀 Node.js',
        '🏎 ️Python',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .skill-list  ul li{
    text-align: left;
    list-style: none;
    font-family: 'Kaushan Script', cursive;
    font-size: 1.5em;
    letter-spacing: 1px;
    margin: 10px;
    text-shadow: 2px 2px #ccc;
  }
</style>

