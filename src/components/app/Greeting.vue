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
                    <dialogSendMessage />
                </v-btn>
            </div>

            <v-row align="center" justify="center">
                <v-col cols="12">
                    <v-row align="center" justify="center">
                        <v-avatar size="250" class="upTop pointer">
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
    </v-container>
</template>

<script>
    import fillIcon from "../icons/fillIcon"
    import wifindIcon from "../icons/wifindIcon"
    import planoStartIcon from '../icons/planoStartIcon'
    import closeIcon from '../icons/closeIcon'
    import dialogSendMessage from '../dialog/dialogSendMessage'
    export default {
        name: 'Greeting',
        components: {
            fillIcon,
            wifindIcon,
            planoStartIcon,
            closeIcon,
            dialogSendMessage
        },
        data() {
            return {
                count: 0
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