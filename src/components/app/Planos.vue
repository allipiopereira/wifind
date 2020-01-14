<template>
    <v-container fluid fill-height class="whiteBackFull" style="position: absolute;">
        <v-row>
            <div class="appBarStyled ml-3">
                <titlePlanosIcon width="160" height="68" />
                <v-spacer></v-spacer>
            </div>
        </v-row>

        <v-content>
            <v-container fluid fill-height>
                <v-row align="center" justify="center" class="pb-10">
                    <playIcon width="230" height="230" class="styledPlayIcon" />

                    <v-avatar size="160" class="ma-4 pointer upTop" @click.native="openDialogConfirm('plano-start')">
                        <planoStartIcon color="#ffffff" width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop" @click.native="openDialogConfirm('plano-full')">
                        <planoFullIcon width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop" @click.native="openDialogConfirm('plano-master')">
                        <planoMasterIcon width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop" @click.native="openDialogConfirm('plano-premium')">
                        <planoPremiumIcon width="160" height="160" />
                    </v-avatar>
                </v-row>
            </v-container>
        </v-content>

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

        <div class="redBackBottom"></div>

        <dashedIcon class="styledDashedIcon" />
    </v-container>
</template>

<script>
    import titlePlanosIcon from '../icons/titlePlanosIcon'
    import flipIcon from '../icons/flipIcon'
    import dashedIcon from '../icons/dashedIcon'
    import planoStartIcon from '../icons/planoStartIcon'
    import planoFullIcon from '../icons/planoFullIcon'
    import planoMasterIcon from '../icons/planoMasterIcon'
    import planoPremiumIcon from '../icons/planoPremiumIcon'
    import playIcon from '../icons/playIcon'
    import closeIcon from '../icons/closeIcon'
    import checkIcon from '../icons/checkIcon'
    import addIcon from '../icons/addIcon'
    import arrowLeftIcon from '../icons/arrowLeftIcon'
    import starsNiceIcon from '../icons/starsNiceIcon'
    import starsTopIcon from '../icons/starsTopIcon'
    import dialogPriceInfo from '../dialog/dialogPriceInfo'
    import dialogContratarPlano from '../dialog/dialogContratarPlano'

    export default {
        name: 'Planos',
        components: {
            titlePlanosIcon,
            flipIcon,
            dashedIcon,
            planoStartIcon,
            planoFullIcon,
            planoMasterIcon,
            planoPremiumIcon,
            playIcon,
            closeIcon,
            checkIcon,
            addIcon,
            arrowLeftIcon,
            starsNiceIcon,
            starsTopIcon,
            dialogPriceInfo,
            dialogContratarPlano
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
                    slogan: 'Começe dando start nas vantagens...',
                    ratingNice: true
                },
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
        methods: {
            selectPlano(plano) {
                this.selectedPlano = plano
                this.viewListPlanos = !this.viewListPlanos
            },
            openDialogConfirm(type) {
                let itemPlano
                this.planos.forEach(item => {
                    itemPlano = item.type.toLowerCase().replace(" ", "-")
                    itemPlano == type ? this.selectedPlano = item : ''
                });
                this.dialogConfirm = !this.dialogConfirm
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

    .whiteBackFull {
        background-color: #fff;
    }

    .redBackBottom {
        position: absolute;
        width: 160%;
        height: 48vh;
        bottom: 0;
        left: 0;
        background-color: #fc4850;
    }

    .styledFlipIcon {
        position: absolute;
        bottom: -3rem;
        left: 0;
        width: 160%;
    }

    .styledDashedIcon {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .styledPlayIcon {
        position: absolute;
        top: -6rem;
    }
</style>