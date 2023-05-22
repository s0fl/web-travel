<template>
  <footer id="footer">
    <div id="content-box">
      <p>Contact us</p>
      <div class="social">
        <font-awesome-icon icon="fa-brands fa-twitter" id="icon" />
        <font-awesome-icon icon="fa-brands fa-telegram" id="icon" />
        <font-awesome-icon icon="fa-brands fa-facebook" id="icon" />
      </div>
      <p>©2023 Borisov-Isaeva-Ldokova-Nam</p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      name: 'MainPage',
      resource: []
    }
  }
}
</script>

<style scoped>
* {
  font-family: "Courier New", serif;
  box-sizing: border-box;
  --index: calc(1vw + 1vh);
}
footer {
  background-color: rgba(72, 60, 92, 0.49);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#content-box {
  width: 100%;
  text-align: center;
  padding: 1%;
}
.social #icon {
  margin: 1%;
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: calc(var(--index) * 2);
}
.social #icon:hover {
  transform: scale(1.2);
  transition: transform .3s;
}
</style>
