<template>
  <div class="section_countries" id="section_countries">
    <div class="content">
      <p>план вашей поездки<br><span>Куда дальше?</span></p>
      <div class="img_content">

        <div class="flip-card-container" v-for="card in cards" :key="card.id">
          <div class="flip-card">
            <div class="flip-card-front">
              <a href="#"><img :src="`${card.image}`" alt=""><br>{{ card.country }}</a>
            </div>
            <div class="flip-card-back">
              <p>
                {{ card.country_text }}
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card-container" :style="styleHidden" v-for="c in hidden_card" :key="c.id">
        <div class="flip-card">
          <div class="flip-card-front">
            <a href="#"><img :src="`${c.image}`" alt=""><br>{{ c.country }}</a>
          </div>
          <div class="flip-card-back">
            <p>
              {{ c.country_text }}
            </p>
          </div>
        </div>
      </div>

      </div>
      <a id="btn-view-all" @click="show_more()">{{ btn_text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryView',
  data () {
    return {
      btn_clicked: true,
      btn_text: 'Посмотреть все направления',
      styleHidden: {
        display: 'none'
      },
      cards: [
        {
          id: 0,
          country: 'Германия',
          image: require('../assets/germany.jpg'),
          country_text: 'Германия — это добротная кухня, отличный сервис в ' +
            'отелях и ухоженные города. Летом туристов ' +
            'ждут на Балтийском побережье и озерах Баварии, ' +
            'зимой — на горнолыжных курортах.'
        },
        {
          id: 2,
          country: 'Италия',
          image: require('../assets/italy.jpg'),
          country_text: 'Италия — это один большой музей прямо под открытым небом. Соборы' +
            'и храмы Рима, знаменитый Колизей, Ватикан, где собраны величайшие' +
            'произведения искусства, живописные каналы Венеции.'
        },
        {
          id: 3,
          country: 'Греция',
          image: require('../assets/greece.jpg'),
          country_text: 'Греция — страна, где древности на каждом шагу: Афины, Дельфы, Фивы и Метеоры, ' +
            'скальные монастыри и святая гора Афон. Еще здесь классные пляжи, чистое море, ' +
            'живописные острова и спа-отели.'
        }
      ],
      hidden_card: [
        {
          id: 4,
          country: 'Исландия',
          image: require('../assets/iceland.jpg'),
          country_text: 'Уникальная природа Исландии — главная достопримечательность ' +
            'Ледяной страны. Национальные парки и Долина гейзеров, вулканы и ' +
            'ледники, водопады и фьорды. Крошечная столица Рейкьявик и туры ' +
            'на затерянные острова.'
        },
        {
          id: 5,
          country: 'Марокко',
          image: require('../assets/morocco.jpg'),
          country_text: 'Марокко манит туристов арабской и африканской экзотикой, ' +
            'отличными пляжами Атлантики и бескрайней пустыней Сахара. ' +
            'Древний Фес и белоснежная Касабланка, отдых в Эс-Сувейре и ' +
            'Агадире, колоритные базары и восхитительная кухня.'
        }
      ]
    }
  },
  methods: {
    show_more () {
      if (this.btn_clicked) {
        this.styleHidden.display = 'flex'
        this.btn_text = 'Скрыть'
      } else {
        this.styleHidden.display = 'none'
        this.btn_text = 'Посмотреть все направления'
      }
      this.btn_clicked = !this.btn_clicked
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
.section_countries {
  height: 100vh;
}

.slide img {
  width: 80%;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

.section_countries p {
  font-size: calc(var(--index) * 1.5);
  text-align: center;
}

.section_countries span {
  font-family: serif;
  font-size: calc(var(--index) * 2.2);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section_countries .content {
  padding-top: 8%;
}

.section_countries .img_content {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  /*width: 100vw;*/
}

.section_countries a {
  font-size: calc(var(--index) * 1.5);
  color: #2a2a26;
  text-decoration: none;
  text-align: center;
}

#btn-view-all {
  font-size: calc(var(--index) * 1.5);
  color: #332244;
  background: #e0e9f4;
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0 25% 5% 25%;
  padding: 1% 2%;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

#btn-view-all:hover {
  color: #e0e9f4;
  background: #332244;
  transform: scale(1.1);
  transition: all .5s ease;
  box-shadow: 10px 10px 8px rgba(21, 14, 28, 0.57);
}

.flip-card-container {
  width: calc(var(--index) * 15.0);
  height: calc(var(--index) * 20.0);
  display: flex;
  padding: 3%;
  margin-bottom: 20px;
}

.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  z-index: -1;
}

.flip-card-container:hover .flip-card {
  transform: scale(1.1) rotateY(180deg);
  transition: transform .9s;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card-front {
  border-radius: 10%;
  color: #fff;
}

.flip-card-back {
  border-radius: 10%;
  background-color: rgba(51, 34, 68, 0.3);
  color: #fff;
  transform: rotateY(180deg);
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

.flip-card-front img {
  border-radius: 10%;
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}

.flip-card-back p {
  text-align: justify;
  margin: calc(var(--index));
  font-size: calc(var(--index) * 0.8);
  color: #2a2a26;
  line-height: calc(var(--index));
}

.flip-card-back p span {
  display: block;
  font-size: calc(var(--index));
  font-style: italic;
  font-weight: bold;
  margin-top: calc(var(--index));
}

@media only screen and (max-width: 550px) {
  .section_countries {
    height: auto;
  }
  .section_countries .img_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
