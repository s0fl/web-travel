<template>
<!--  <div id="nav-box">-->
<!--    <div id="nav-content">-->
<!--      <div id="link">-->
<!--        <router-link to="/">Главная</router-link> |-->
<!--        <router-link to="/by-time">Досуг</router-link> |-->
<!--        <router-link to="/country">Страны</router-link> |-->
<!--        <router-link to="/about">Рассылка</router-link> |-->
<!--        <router-link to="/about">Контакты</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <nav-bar/>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

/*#nav-box {*/
/*  background: rgba(189, 138, 138, 0.8);*/
/*  width: 100vw;*/
/*  padding: 10px 0;*/
/*  border-bottom: solid 1px rgba(51, 34, 68, 0.37);*/
/*  box-shadow: 0 3px 5px 0 rgba(21, 14, 28, 0.37);*/
/*  position: fixed;*/
/*  top: 0;*/
/*}*/

/*#nav-content {*/
/*  margin: 0 auto;*/
/*  width: 60vw;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center*/
/*}*/
/*#link {*/
/*  width: 100vw;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*}*/

/*@media only screen and (max-width: 800px) {*/
/*  .hamburger {*/
/*    display: block;*/
/*    cursor: pointer;*/
/*  }*/
/*  .hamburger .line {*/
/*    width: 30px;*/
/*    height: 3px;*/
/*    background: #e0e9f4;*/
/*    margin: 6px 0;*/
/*  }*/
/*  #nav-box {*/
/*    background: rgba(51, 34, 68, 0.75);*/
/*  }*/
/*  .nav-bar {*/
/*    position: absolute;*/
/*    background: rgba(51, 34, 68, 0.75);*/
/*    left: 0;*/
/*    top: 100%;*/
/*    width: 100%;*/
/*    height: 0;*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    overflow: hidden;*/
/*    align-items: center;*/
/*  }*/
/*  .nav-bar.active {*/
/*    height: 100vh;*/
/*  }*/
/*  .nav-bar ul {*/
/*    display: inline-block;*/
/*    width: fit-content;*/
/*    text-align: center;*/
/*    opacity: 0;*/
/*  }*/
/*  .nav-bar.active ul {*/
/*    opacity: 1;*/
/*  }*/
/*  .nav-bar.active ul a {*/
/*    display: inline-block;*/
/*    margin: 10px;*/
/*    letter-spacing: 2px;*/
/*  }*/
/*}*/
</style>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: { NavBar }
}
</script>
