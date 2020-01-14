<template>
    <v-container fluid fill-height>
        <v-row>
            <div class="redBack"></div>
            <fillIcon class="styledFillIcon" style="z-index: 1;" />

            <div class="appBarStyled">
                <div class="ml-3">
                    <v-img src="src/assets/logo-124x91.png" width="90" height="90" contain class="upTop"></v-img>
                </div>
                <v-spacer></v-spacer>
                <v-btn text rounded class="mr-3 pl-5 pr-5 ba-2 upTop">Planos</v-btn>
                <v-btn icon color="perfect" class="mr-3 ba-2 upTop">
                    <dialogSendMessage :fixed="false" />
                </v-btn>
            </div>

            <v-row align="center" justify="center">
                <v-col cols="12" class="my-0 py-0">
                    <v-row align="center" justify="center">
                        <v-avatar size="250" class="upTop pointer ml-4"
                            @click.native.stop="dialogConfirm = !dialogConfirm">
                            <planoStartIcon color="#000000" width="250" height="250" />
                        </v-avatar>
                    </v-row>
                </v-col>

                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <h3 class="font-weight-regular upTop">Fique a vontade!</h3>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>

        <v-dialog v-model="dialogConfirm" fullscreen transition="dialog-bottom-transition" hide-overlay>
            <v-card flat tile>
                <div class="ml-3 pt-3 toolbarStyled">
                    <v-btn icon :ripple="false" color="white" @click.native="dialogConfirm = !dialogConfirm"
                        class="ba-2">
                        <arrowLeftIcon color="#fc4850" />
                    </v-btn>
                    <h2 class="font-weight-regular ml-2">{{selectedPlano.type}}</h2>

                    <v-spacer></v-spacer>

                    <div class="mr-8">
                        <dialogContratarPlano :plano="selectedPlano" />
                    </div>
                </div>

                <div class="centered">
                    <v-card flat>
                        <v-row align="center" justify="center" style="height: 100%;">
                            <v-col cols="12">
                                <v-row v-if="viewListPlanos" v-for="(plano, p) in planos" :key="p" align="center"
                                    justify="center">
                                    <div class="listStyled pl-3 pr-3 ma-3 shadow-start"
                                        :class="{strokeDashed : plano.type == selectedPlano.type}">
                                        <h3 class="font-weight-regular">{{plano.title}}</h3>
                                        <v-spacer></v-spacer>
                                        <v-tooltip left>
                                            <template v-slot:activator="{ on }">
                                                <v-btn rounded v-on="on" class="pa-0 ma-2 mr-3 shadow-none"
                                                    style="background-color: #ffffff;">
                                                    <dialogPriceInfo :plano="plano" />
                                                </v-btn>
                                            </template>
                                            <span>Mais informações</span>
                                        </v-tooltip>


                                        <v-tooltip right v-if="plano.type == selectedPlano.type">
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon class="ma-2" v-on="on"
                                                    @click="viewListPlanos = !viewListPlanos"
                                                    style="background-color: #ffffff;">
                                                    <checkIcon width="20" height="20" color="#fc4850" class="mt-1" />
                                                </v-btn>
                                            </template>
                                            <span>Selecionado!</span>
                                        </v-tooltip>

                                        <v-tooltip right v-else>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon class="ma-2" v-on="on" @click="selectPlano(plano)"
                                                    style="background-color: #ffffff;">
                                                    <addIcon width="20" height="20" color="#fc4850" class="mt-1" />
                                                </v-btn>
                                            </template>
                                            <span>Selecionar</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>

                                <v-row v-if="!viewListPlanos" align="center" justify="center">
                                    <div class="listStyled pl-3 pr-3 shadow-start strokeDashed">
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
                                                <v-btn icon class="ma-2" v-on="on"
                                                    @click="viewListPlanos = !viewListPlanos"
                                                    style="background-color: #ffffff;">
                                                    <closeIcon width="20" height="20" color="#fc4850" class="mt-1" />
                                                </v-btn>
                                            </template>
                                            <span>Trocar plano</span>
                                        </v-tooltip>
                                    </div>
                                </v-row>
                            </v-col>

                            <v-col cols="12">
                                <v-row align="center" justify="center">
                                    <starsNiceIcon v-if="selectedPlano.ratingNice" width="123" height="27"
                                        class="upTop" />
                                    <starsTopIcon v-else width="123" height="27" class="upTop" />
                                </v-row>
                            </v-col>

                            <v-col cols="12">
                                <v-row align="center" justify="center">
                                    <h3 class="font-weight-regular upTop">{{selectedPlano.slogan}}</h3>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>

                <div class="showPrice">
                    <h1 class="font-weight-regular">{{selectedPlano.price}}</h1>
                </div>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import fillIcon from "../icons/fillIcon"
    import wifindIcon from "../icons/wifindIcon"
    import planoStartIcon from '../icons/planoStartIcon'
    import closeIcon from '../icons/closeIcon'
    import checkIcon from '../icons/checkIcon'
    import addIcon from '../icons/addIcon'
    import arrowLeftIcon from '../icons/arrowLeftIcon'
    import starsNiceIcon from '../icons/starsNiceIcon'
    import starsTopIcon from '../icons/starsTopIcon'
    import dialogPriceInfo from '../dialog/dialogPriceInfo'
    import dialogContratarPlano from '../dialog/dialogContratarPlano'
    import dialogSendMessage from '../dialog/dialogSendMessage'

    export default {
        name: 'Greeting',
        components: {
            fillIcon,
            wifindIcon,
            planoStartIcon,
            closeIcon,
            checkIcon,
            addIcon,
            arrowLeftIcon,
            starsNiceIcon,
            starsTopIcon,
            dialogPriceInfo,
            dialogContratarPlano,
            dialogSendMessage
        },
        data() {
            return {
                dialogConfirm: false,
                selected: 'plano-start',
                viewListPlanos: false,
                selectedPlano: {
                    type: 'Plano Start',
                    title: 'Plano Start - 10 MEGA',
                    price: 'R$64,90',
                    url: '/plano-start',
                    slogan: 'Começe dando start nas vantagens...',
                    ratingNice: true
                },
                planos: [
                    {
                        type: 'Plano Start',
                        title: 'Plano Start - 10 MEGA',
                        price: 'R$64,90',
                        url: '/plano-start',
                        slogan: 'Começe dando start nas vantagens...',
                        ratingNice: true
                    },
                    {
                        type: 'Plano Full',
                        title: 'Plano Full - 30 MEGA',
                        price: 'R$99,99',
                        url: '/plano-full',
                        slogan: 'Avançe o suficiente nas maratonas...',
                        ratingNice: false
                    },
                    {
                        type: 'Plano Master',
                        title: 'Plano Master - 50 MEGA',
                        price: 'R$137,70',
                        url: '/plano-master',
                        slogan: 'Tenha velocidade master na sua equipe...',
                        ratingNice: false
                    },
                    {
                        type: 'Plano Premium',
                        title: 'Plano Premium - 100 MEGA',
                        price: 'R$159,90',
                        url: '/plano-premium',
                        slogan: 'Supere todas as barreiras...',
                        ratingNice: false
                    },
                ]
            }
        },
        watch: {
            dialogConfirm(value) {
                if (!value) {
                    setTimeout(() => {
                        this.selectedPlano = {
                            type: 'Plano Start',
                            title: 'Plano Start - 10 MEGA',
                            price: 'R$64,90',
                            url: '/plano-start',
                            slogan: 'Começe dando start nas vantagens...',
                            ratingNice: true
                        }
                    }, 1000)
                }
            }
        },
        methods: {
            selectPlano(plano) {
                this.selectedPlano = plano
                this.viewListPlanos = !this.viewListPlanos
            }
        }
    }
</script>

<style>
    .container.fill-height {
        align-items: baseline;
    }

    .appBarStyled {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
    }

    .toolbarStyled {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .redBack {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50vh;
        background-color: #fc4850;
        z-index: 2;
    }

    .pointer:hover {
        cursor: pointer;
    }

    .centered {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 80vh;
    }

    .showPrice {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100px;
        width: 100%;
        bottom: 0;
        background-color: #fc4850;
        padding: 10px;
    }

    .bigH1 {
        font-size: 47pt;
    }

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

    .styledFillIcon {
        position: absolute;
        top: -10rem;
        left: -4%;
        width: 110%;
    }

    @media (max-width: 980px) {
        .styledFillIcon {
            position: absolute;
            top: -10%;
        }
    }
</style>