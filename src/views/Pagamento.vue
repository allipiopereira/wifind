<template>
    <v-content>
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <h2 class="font-weight-regular">Pagamento {{this.$route.params.id}}</h2>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: 'Pagamento'
    }
</script>