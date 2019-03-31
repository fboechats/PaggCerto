<template>
  <div id="app">
    <img class="Logo-PaggCerto" alt="Logo da PaggCerto" src="./assets/PaggCerto.svg" />
    <Signin />
  </div>
</template>

<script>
import Signin from './components/Signin.vue';

export default {
  name: 'app',
  components: {
    Signin,

  }
}
</script>

<style lang="scss">
@import './styles/style.scss';
</style>