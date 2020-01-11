<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <Greeting/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Greeting from './components/app/Greeting'
  export default {
    name: "App",
    components: {
      Greeting
    }
  };
</script>

<style>
  #app {
    font-family: "Varela Round", sans-serif;
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

  .ba-2 {
    border: 2px solid #ffffff;
  }

  .upTop {
    z-index: 2;
  }
</style>