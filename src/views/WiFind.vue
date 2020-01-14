<template>
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

        <dialogSendMessage :fixed="true" />
    </v-content>
</template>

<script>
    import Greeting from '../components/app/Greeting'
    import Info from '../components/app/Info'
    import Planos from '../components/app/Planos'
    import FibraPremium from '../components/app/FibraPremium'
    import End from '../components/app/End'
    import dialogSendMessage from '../components/dialog/dialogSendMessage'
    export default {
        name: 'WiFind',
        components: {
            Greeting,
            Info,
            Planos,
            FibraPremium,
            End,
            dialogSendMessage
        }
    }
</script>