<template>
  <div id="app">
    <v-app>
      <v-content>
        <Greeting />
        <v-container fluid fill-height></v-container>
        <Info />
        <v-container fluid fill-height style="background-color: #fc4850;"></v-container>
        <Planos />
        <v-container fluid fill-height></v-container>
        <FibraPremium />
        <v-container fluid fill-height></v-container>
        <End />

        <dialogSendMessage :fixed="true"/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Greeting from './components/app/Greeting'
  import Info from './components/app/Info'
  import Planos from './components/app/Planos'
  import FibraPremium from './components/app/FibraPremium'
  import End from './components/app/End'
  import dialogSendMessage from './components/dialog/dialogSendMessage'
  export default {
    name: "App",
    components: {
      Greeting,
      Info,
      Planos,
      FibraPremium,
      End,
      dialogSendMessage
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
    box-shadow: 0px 2px 8px rgba(100, 100, 100, 0.2);
    margin: 5px;
  }

  .shadow {
    box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
  }

  .shadow-none {
    box-shadow: none;
  }

  .ba-2 {
    border: 2px solid #ffffff;
  }

  .upTop {
    z-index: 2;
  }
</style>