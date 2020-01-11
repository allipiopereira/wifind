<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialogConfirm" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">>Open Dialog</v-btn>
                </template>
                <v-card flat tile>
                    <div class="appBarStyled ml-3">
                        <v-btn icon :ripple="false" @click="dialogConfirm = !dialogConfirm" class="ba-2">
                            <arrowLeftIcon color="#fc4850" />
                        </v-btn>
                        <h2 class="font-weight-regular ml-2">Plano Start</h2>

                        <v-spacer></v-spacer>

                        <v-btn rounded color="perfect" class="mr-7 pl-5 pr-5 shadow-none" style="height: 30px;">
                            <span style="color: #fff;">Contratar</span></v-btn>
                    </div>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
    import arrowLeftIcon from '../icons/arrowLeftIcon'
    export default {
        name: 'dialogConfirmPlan',
        components: {
            arrowLeftIcon
        },
        data() {
            return {
                dialogConfirm: false
            }
        }
    }
</script>

<style>
    .appBarStyled {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>