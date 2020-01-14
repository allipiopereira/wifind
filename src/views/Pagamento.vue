<template>
    <v-content>
        <v-container fluid fill-height>
            <v-row align="center" justify="center" style="width: 100%;">
                <v-btn icon :ripple="false" color="white" to="/" class="ml-3">
                    <arrowLeftIcon color="#fc4850" />
                </v-btn>
                <h2 class="font-weight-regular ml-2">Pagamento</h2>
                <v-spacer></v-spacer>
            </v-row>

            <v-row align="center" justify="center" style="width: 100%; height: 100%;">
                <h2 class="font-weight-regular text-center">Selecione a forma de pagamento</h2>
                <v-row align="center" justify="center" style="width: 100%;">
                    <v-col cols="12" md="6" sm="6">
                        <v-row align="center" justify="end" style="width: 100%; height: 100%;">
                            <v-tooltip left>
                                <template v-slot:activator="{on}">
                                    <v-btn icon v-on="on" class="ma-0 pa-0 shadow-none" style="height: auto;">
                                        <cartaoIcon width="200" height="200" class="ma-3" />
                                    </v-btn>
                                </template>
                                <span>Pagamento com Cartão de Crédito</span>
                            </v-tooltip>
                        </v-row>
                    </v-col>

                    <v-col cols="12" md="6" sm="6">
                        <v-row align="center" justify="start" style="width: 100%; height: 100%;">
                            <v-tooltip right>
                                <template v-slot:activator="{on}">
                                    <v-btn icon v-on="on" class="ma-0 pa-0 shadow-none" style="height: auto;">
                                        <qrcodeIcon width="200" height="200" class="ma-3" />
                                    </v-btn>
                                </template>
                                <span>Pagamento com QRCode</span>
                            </v-tooltip>
                        </v-row>
                    </v-col>
                </v-row>

                <div class="listStyled pl-3 pr-3 shadow-start strokeDashed upTop">
                    <h3 class="font-weight-regular">{{selectedPlano.title}}</h3>
                    <v-spacer></v-spacer>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-btn rounded v-on="on" class="pa-0 ma-2 mr-3 shadow-none"
                                style="background-color: #ffffff;">
                                <dialogPriceInfo :plano="selectedPlano" />
                            </v-btn>
                        </template>
                        <span>Mais informações</span>
                    </v-tooltip>

                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn icon class="ma-2" v-on="on" style="background-color: #ffffff;">
                                <checkIcon width="20" height="20" color="#fc4850" class="mt-1" />
                            </v-btn>
                        </template>
                        <span>Selecionado!</span>
                    </v-tooltip>
                </div>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import arrowLeftIcon from '../components/icons/arrowLeftIcon'
    import checkIcon from '../components/icons/checkIcon'
    import cartaoIcon from "../components/icons/cartaoIcon"
    import qrcodeIcon from "../components/icons/qrcodeIcon"
    import dialogPriceInfo from '../components/dialog/dialogPriceInfo'

    export default {
        name: 'Pagamento',
        components: {
            arrowLeftIcon,
            checkIcon,
            cartaoIcon,
            qrcodeIcon,
            dialogPriceInfo
        },
        data() {
            return {
                selectedPlano: {},
                planos: [
                    {
                        type: 'Plano Start',
                        title: 'Plano Start - 10 MEGA',
                        price: 'R$64,90',
                        slogan: 'Começe dando start nas vantagens...',
                        ratingNice: true
                    },
                    {
                        type: 'Plano Full',
                        title: 'Plano Full - 30 MEGA',
                        price: 'R$99,99',
                        slogan: 'Avançe o suficiente nas maratonas...',
                        ratingNice: false
                    },
                    {
                        type: 'Plano Master',
                        title: 'Plano Master - 50 MEGA',
                        price: 'R$137,70',
                        slogan: 'Tenha velocidade master na sua equipe...',
                        ratingNice: false
                    },
                    {
                        type: 'Plano Premium',
                        title: 'Plano Premium - 100 MEGA',
                        price: 'R$159,90',
                        slogan: 'Supere todas as barreiras...',
                        ratingNice: false
                    },
                ]
            }
        },

        mounted() {
            let plano = this.$route.params.id
            let itemPlano
            this.planos.forEach(item => {
                itemPlano = item.type.toLowerCase().replace(" ", "-")
                itemPlano == plano ? this.selectedPlano = item : ''
            });
        }
    }
</script>

<style>
    /*html {
        overflow-y: hidden;
    }*/

    .listStyled {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 60px;
        border-radius: 15px;
        background-color: #fc4850;

    }

    .strokeDashed {
        border: 2px dashed #000;
    }
</style>