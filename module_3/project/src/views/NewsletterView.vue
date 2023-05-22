<template>
  <div class="two" id="section_news">
    <div class="form_news">
      <p>Подписаться на рассылку</p>
      <label for="name">Имя<em>*</em></label>
      <input type="text" required id="name" placeholder="Имя" v-model="name">
      <label for="email">Email<em>*</em></label>
      <input type="email" required name="email" id="email" placeholder="email@gmail.com" v-model="email">
      <button type="submit" id="btn-get-news" @click="get_form()">Подписаться</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterView',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    get_form () {
      if (this.name !== '' && this.email !== '' && /@/.test(this.email)) {
        alert(this.name + ', Вы успешно подписаны на рассылку советов для путешественников!')
      } else {
        alert('Заполните корректно все поля!')
      }
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
.two {
  font-size: calc(var(--index) * 1.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(51, 34, 68, 0.47);
}

.form_news {
  width: 75%;
  border: 2px solid;
  border-radius: 20px;
  border-image:
    linear-gradient(
      to bottom,
      #332244CC,
      rgba(0, 0, 0, 0)
    ) 1 100%;
  padding: 5%;
}

.form_news p {
  font-size: calc(var(--index) * 2);
  margin-bottom: 2%;
}

label {
  width: 20%;
  display: inline-block;
  vertical-align: top;
  margin: 1% 0 1% 0;
  padding: 1%;
  text-align: left;
}

input {
  margin: 1% 0 1% 0;
  padding: 1%;
  width: 60%;
}

::placeholder {
  color: rgba(117, 85, 85, 0.62);
  font-size: calc(var(--index) * 1.3);
  padding: 1%;
}

#btn-get-news {
  color: #332244;
  background: #e0e9f4;
  font-size: calc(var(--index) * 1.5);
  padding: 1% 4%;
  margin-top: 2%;
  border-color: #00000000;
  border-radius: 20px;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

#btn-get-news:hover {
  background: #332244;
  color: #e0e9f4;
  transform: scale(1.1);
  transition: all .3s ease;
  box-shadow: 10px 10px 8px rgba(21, 14, 28, 0.57);
}
</style>
