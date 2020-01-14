<template>
    <v-row align="center" justify="center">
        <v-dialog v-model="dialogContratar" max-width="290">
            <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on" color="#000" class="px-5 shadow-none ba-dashed-1" style="background-color: #fc4850;">
                    Contratar
                </v-btn>
            </template>
            <v-card class="pa-5">
                <v-row align="center" justify="center" style="width: 100%;">
                    <v-progress-circular indeterminate size="120" width="10" color="perfect"></v-progress-circular>
                </v-row>
                <h2 class="font-weight-regular mt-5 text-center">{{plano.type}}</h2>
                <v-row align="center" justify="center" style="width: 100%;">
                    <small class="mt-2" style="color: #999;">Carregando...</small>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        name: 'dialogContratarPlano',
        props: {
            plano: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                dialogContratar: false
            }
        }
    }
</script>