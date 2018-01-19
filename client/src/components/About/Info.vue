<template>
  <div class="info">
    <div class="photo"></div>
    <div align="center" class="socialbtns">
      <ul>
        <li><a href="https://github.com/Coober1211" target="_blank" class="fa fa-lg fa-github"></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100001196008831" target="_blank" class="fa fa-lg fa-facebook"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.photo {
  background-image: url(../../assets/image/tzuhua.jpg);
  background-size: cover;
  width: 150px;
  height: 150px;
  margin-left: 50%;
  transform: translateX(-50%);
  border: solid 2px #58B2DC;
  opacity: 0.9;
  border-radius: 50%;
}

a, a:hover {
	text-decoration: none;
}

.socialbtns, .socialbtns ul, .socialbtns li {
	margin: 0;
	padding: 5px;
}

.socialbtns li {
  list-style: none outside none;
  display: inline-block;
}

.socialbtns .fa {
  color: #FFF;
	background-color: #58B2DC;
	width: 40px;
  height: 28px;
  padding-top: 12px;
	border-radius: 20px;
	-moz-border-radius: 20px;
	-webkit-border-radius: 20px;
	-o-border-radius: 20px;
  transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -webkit-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  // transform: rotate(-360deg);
	// -moz-transform: rotate(-360deg);
	// -webkit-transform: rotate(-360deg);
	// -o-transform: rotate(-360deg);
}

.socialbtns .fa:hover {
  background-color: #F7C242;
	// transition: all ease 0.3s;
  // -moz-transition: all ease 0.3s;
  // -webkit-transition: all ease 0.3s;
  // -o-transition: all ease 0.3s;
	// transform: rotate(360deg);
	// -moz-transform: rotate(360deg);
	// -webkit-transform: rotate(360deg);
	// -o-transform: rotate(360deg);
}
</style>

