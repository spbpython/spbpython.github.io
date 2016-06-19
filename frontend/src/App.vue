<template>
  <div id="app">
    <h1>SPB Python Guru</h1>
  </div>
</template>

<script>
import Hello from './components/Hello'
import 'normalize.css'

export default {
  components: {
    Hello
  }
}

</script>

<style>
  html {
    height: 100%;
    background: url(./assets/backgrounds/st-petersburg.jpg) 100% 100% no-repeat;
    background-size: cover;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    height: 100%;
  }
</style>
