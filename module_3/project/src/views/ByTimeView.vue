<template>
  <div class="section-by-time" id="by-time">

    <div class="section-content" id="section-content">
      <span>Не знаете, чем заняться этой осенью?</span>
      <div id="content-text">
        <p id="travel-text">
          {{ travel_text[currentImage] }}
        </p>
      </div>

      <div class="content-slider">
        <div class="slider">
          <div class="slide">
            <img :src="`${images[currentImage]}`" id="id-img"/>
          </div>

          <div class="controls">
            <i :style="stylePrev" class="fa fa-circle-arrow-left" @click="prevImage">&lt;</i>
            <i :style="styleNext" class="fa fa-circle-arrow-right" @click="nextImage">&gt;</i>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ByTimeView',
  data () {
    return {
      images: [
        require('../assets/travel0.jpg'),
        require('../assets/travel1.jpg'),
        require('../assets/travel2.jpg')
      ],
      currentImage: 0,
      travel_text: ['Горные лыжи – это настоящий спорт и очень хорошая тренировка на все группы мышц. Кроме того, горные лыжи заставляют вас удерживать равновесие, что способствует улучшению координации движений. Конечно, нельзя не сказать про саму атмосферу! Только представьте себе: горы, лес, пение птиц и прекрасное чистое небо над головой, без клубов дыма из труб заводов и котельных.',
        'Походы – это отличная возможность уйти от городской суеты. Кстати, очень часто организуются даже специальные лагеря, в которых дети вместе со взрослыми или только с вожатыми живут в диких походных условиях: спят в палатках или даже сооруженных собственными руками шалашах, едят печёную картошку с тушёнкой, собирают ягоды, сами разводят костер и поют песни под гитару.',
        'Серфинг точно придется по вкусу тем, кто хочет незабываемых впечатлений. Это отличная кардиотренировка. При катании на доске задействуются многие группы мышц: активно тренируются мышцы верхних конечностей, мышцы пресса и мышцы спины во время гребли, мышцы нижних конечностей, для управления доской и удержания равновесия.'
      ],
      stylePrev: {
        visibility: 'hidden'
      },
      styleNext: {
        visibility: 'visible'
      }
    }
  },
  methods: {
    nextImage () {
      if (this.currentImage !== this.images.length) {
        this.currentImage++
        this.stylePrev.visibility = 'visible'
      }
      if (this.currentImage === this.images.length - 1) {
        this.styleNext.visibility = 'hidden'
      }
    },
    prevImage () {
      if (this.currentImage > 0) {
        this.currentImage--
        this.styleNext.visibility = 'visible'
      }
      if (this.currentImage === 0) {
        this.stylePrev.visibility = 'hidden'
      }
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

.section-by-time {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(51, 34, 68, 0.40);
  padding-top: 10%;
  padding-bottom: 5%;
}

.section-content span {
  font-size: calc(var(--index) * 1.5);
  text-align: center;
  margin-bottom: 2%;
}

.section-content {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
}

#content-text {
  text-align: justify;
}

#content-text p {
  font-size: calc(var(--index));
  line-height: calc(var(--index) * 1.5);
  margin-bottom: 2%;
}

.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/*.controls {*/
/*  display: flex;*/
/*}*/

.controls i {
  cursor: pointer;
  color: rgba(175, 12, 12, 0.55);
  font-size: calc(var(--index) * 2);
  margin-left: 5%;
}

.controls i:hover {
  transform: scale(1.1);
  transition: transform .2s;
  color: rgba(175, 12, 12, 0.75);
}

.slide img {
  width: 80%;
  box-shadow: 5px 5px 8px rgba(21, 14, 28, 0.57);
}
</style>
