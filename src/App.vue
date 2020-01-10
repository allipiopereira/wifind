<template>
  <div id="app">
    <v-app>
      <v-content>
        <Presentation/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Presentation from './components/app/Presentation'
  export default {
    name: "App",
    components: {
      Presentation
    }
  };
</script>

<style>
  #app {
    font-family: "Varela Round", sans-serif;
  }

  html {
    overflow: hidden;
  }

  .active {
    border-bottom: 3px solid #0AE6B2;
  }

  .btn-shadow {
    box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
    margin: 5px;
  }

  .shadow {
    box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
  }
</style>