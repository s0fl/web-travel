<template>
  <div id="main">
    <div class="section">
      <div class="content">
        <h2 id="text">Как хорошо <br>спланировать <br>путешествие?</h2>
        <button @click="$router.push({ name: 'by-time' })" id="btn">Узнать подробнее</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      name: 'HomeView',
      resource: []
    }
  }
}
</script>

<style scoped>
* {
  font-family: "Courier New", serif;
  --index: calc(1vw + 1vh);
  font-size: calc(var(--index) * 1.2);
}
#main {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  --index: calc(1vw + 1vh);
}
.section {
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section .content #text {
  font-size: calc(var(--index) * 3.0);
  color: #332244;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2vh;
}

#btn {
  font-size: calc(var(--index) * 1.5);
  color: #332244;
  background: #e0e9f4;
  border: none;
  letter-spacing: 2px;
  padding: 3% 8%;
  border-radius: 20px;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

#btn:hover {
  background: #332244;
  color: #e0e9f4;
  transform: scale(1.1);
  transition: all .5s ease;
  box-shadow: 10px 10px 8px rgba(21, 14, 28, 0.57);
}
</style>
