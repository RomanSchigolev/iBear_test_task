<template>
  <div class="weather__bar">
    <div class="weather__date">
      <span>
        updated: {{new Date(updated).toLocaleString("en-us", { weekday: 'long' })}}, {{new Date(updated).getDate()}} {{new Date(updated).toLocaleString('en-us', { month: 'long' })}} {{new Date(updated).getFullYear()}}, {{new Date(updated).getHours()}}:{{new Date(updated).getMinutes()}}
      </span>
    </div>
    <div class="weather__info">
      <div class="weather__info-1">
        <span class="weather__place">{{name}}, {{country}}</span>
        <span class="weather__desc">{{weather.main}}, {{weather.description}}</span>
        <ul class="weather__characteristics">
          <li class="weather__characteristic">
            <span class="weather__characteristic__title">humidity:&nbsp;</span>
            <span class="weather__characteristic__count">{{main.humidity}}%</span>
          </li>
          <li class="weather__characteristic">
            <span class="weather__characteristic__title">pressure:&nbsp;</span>
            <span class="weather__characteristic__count">{{main.pressure}} mm</span>
          </li>
          <li class="weather__characteristic">
            <span class="weather__characteristic__title">wind:&nbsp;</span>
            <span class="weather__characteristic__count">{{wind.speed}} m/s</span>
          </li>
        </ul>
      </div>
      <div class="weather__info-2">
        <span>{{main.temp}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-weather",
    data() {
      return {
        "weather": {
          "main": "Drizzle",
          "description": "light intensity drizzle",
        },
        "main": {
          "temp": 18,
          "pressure": 760,
          "humidity": 81,
        },
        "wind": {
          "speed": 4.1,
        },
        "updated": 1485789600,
        "country": "GB",
        "name": "London"
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .weather__bar {
    background-color: #ffffff;
    padding: 15px 50px 60px;
    border-radius: 15px;
  }

  .weather__date {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
  }

  .weather__date span {
    color: #A5A5A5;
    font-size: 12px;
  }

  .weather__info {
    display: flex;
    justify-content: space-between;
  }

  .weather__info-1 {
    text-align: left;
  }

  .weather__info-2 {
    padding-right: 27px;
  }

  .weather__info-2 span {
    position: relative;
    font-size: 138px;
    line-height: 1;
  }

  .weather__info-2 span::after {
    content: "°C";
    font-size: 25px;
    font-weight: bold;
    position: absolute;
    top: 30px;
  }

  .weather__place {
    font-size: 30px;
    font-weight: bold;
  }

  .weather__desc {
    display: block;
    margin-top: 6px;
    font-weight: 500;
  }

  .weather__characteristics {
    margin-top: 14px;
  }

  .weather__characteristic:not(:last-child) {
    margin-bottom: 4px;
  }

  .weather__characteristic__title {
    color: #a5a5a5;
  }

  .weather__characteristic__count {
    font-weight: bold;
  }
</style>