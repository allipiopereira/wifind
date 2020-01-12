<template>
    <v-container fluid fill-height class="whiteBackFull" style="position: absolute;">
        <v-row>
            <div class="appBarStyled ml-3">
                <titlePlanosIcon width="160" height="68" />
                <v-spacer></v-spacer>
                <v-btn icon color="perfect" class="mr-3" style="background-color: #fc4850; box-shadow: none;">
                    <v-icon color="black">mdi-whatsapp</v-icon>
                </v-btn>
            </div>
        </v-row>

        <v-content>
            <v-container fluid fill-height>
                <v-row align="center" justify="center" class="pb-10">
                    <playIcon width="230" height="230" class="styledPlayIcon"/>

                    <v-avatar size="160" class="ma-4 pointer upTop">
                        <planoStartIcon color="#ffffff" width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop">
                        <planoFullIcon width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop">
                        <planoMasterIcon width="160" height="160" />
                    </v-avatar>

                    <v-avatar size="160" class="ma-4 pointer upTop">
                        <planoPremiumIcon width="160" height="160" />
                    </v-avatar>
                </v-row>
            </v-container>
        </v-content>

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
            playIcon
        },
        methods: {
            fun() {
                console.log('fun')
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