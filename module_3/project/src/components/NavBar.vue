<template>
  <div class="nav-container">
    <div class="hamburger" @click="showMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="nav-content" :class="this.showNavBar ? 'open-navbar' : 'close-navbar'">
      <router-link to="/" class="logo"><i class="fa fa-location-dot"></i> Путешественник</router-link>
      <ul class="nav-items" id="link">
        <li><router-link to="/" id="item_link">Главная</router-link></li>
        <li><router-link to="/by-time" id="item_link">Досуг</router-link></li>
        <li><router-link to="/country" id="item_link">Страны</router-link></li>
        <li><router-link to="/newsletter" id="item_link">Рассылка</router-link></li>
        <li><router-link to="/about" id="item_link">Контакты</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      showNavBar: false
    }
  },
  methods: {
    showMenu () {
      this.showNavBar = !this.showNavBar
    }
  }
}
</script>

<style scoped>
* {
  font-family: "Courier New", serif;
  --index: calc(1vw + 1vh);
  font-size: calc(var(--index) * 1.1);
}
.nav-container {
  background: rgba(189, 138, 138, 0.8);
  width: 100vw;
  padding: 15px 0;
  border-bottom: solid 1px rgba(51, 34, 68, 0.37);
  box-shadow: 0 3px 5px 0 rgba(21, 14, 28, 0.37);
  position: fixed;
  top: 0;
}
.nav-content {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-right: 2%;
  padding: 0;
}
li {
  padding: 0 10px;
}
.hamburger {
  display: none;
}
.logo {
  color: #e0e9f4;
  font-weight: normal;
  text-decoration: none;
  font-size: calc(var(--index) * 1.2);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 3%;
}
#item_link {
  text-decoration: none;
  letter-spacing: 2px;
  padding: 6px 15px;
  color: #e0e9f4;
  border-radius: 20px;
}
#item_link:hover {
  background: #e0e9f4;
  color: #332244;
}
#item_link.router-link-active {
  background: #332244;
  color: #e0e9f4;
  cursor: pointer;
}

@media only screen and (max-width: 800px) {
  .hamburger {
    cursor: pointer;
    display: block;
    /*padding: 0 10px 10px 0;*/
  }
  .hamburger .line {
    width: 30px;
    height: 3px;
    background: #e0e9f4;
    margin: 5px 20px;
  }
  .logo {
    display: none;
  }
  .nav-container {
    background: rgba(51, 34, 68, 0.75);
    padding: 10px 0;
  }
  .open-navbar {
    opacity: 1;
    height: auto;
  }
  .close-navbar {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    /*z-index: 100;*/
    /*position: relative;*/
    /*transition: all 0.2s ease-out;*/
  }
  .nav-items {
    flex-direction: column;
  }
  li {
    margin-top: 15%;
  }
}
</style>
