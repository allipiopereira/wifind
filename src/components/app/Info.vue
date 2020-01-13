<template>
    <v-container fluid fill-height style="position: fixed; top: 0;">
        <v-row>
            <div class="appBarStyled ml-3">
                <titleInfoIcon width="160" height="68" />
                <v-spacer></v-spacer>
            </div>

            <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                    <v-row align="center" justify="center">
                        <div>
                            <v-img src="src/assets/infinity-403x209.png" width="220" height="220" contain></v-img>
                        </div>
                    </v-row>

                    <h2 class="font-weight-regular text-center">Tenha infinitas vantagens</h2>
                </v-col>

                <v-col cols="12" md="6" sm="8">
                    <h3 class="font-weight-regular text-center">Mais que fibra ótica para você aproveitar mais.</h3>

                    <h3 class="font-weight-regular mt-3 text-center upTop">Trabalhamos com qualidade distribuindo
                        velocidade
                        elevada
                        pensando na entrega de cada segundo
                        extraordinário, assim você curte cada momento com prazer.</h3>
                </v-col>
            </v-row>
        </v-row>

        <v-row align="center" justify="center" class="ma-0 pa-0">
            <veryIcon width="482" height="137"/>
        </v-row>
    </v-container>
</template>

<script>
    import titleInfoIcon from '../icons/titleInfoIcon'
    import veryIcon from '../icons/veryIcon'
    export default {
        name: 'Info',
        components: {
            titleInfoIcon,
            veryIcon
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