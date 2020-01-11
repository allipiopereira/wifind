<template>
    <div>
        <fillIcon class="styled" />

        <div class="appBarStyled">
            <div>
                <v-img src="src/assets/logo-124x91.png" width="90" height="90" contain style="z-index: 2;"></v-img>
            </div>
            <v-spacer></v-spacer>
            <v-btn text rounded class="mr-3 pl-5 pr-5 ba-2">Planos</v-btn>
            <v-btn icon color="perfect" class="mr-3 ba-2">
                <v-icon color="black">mdi-whatsapp</v-icon>
            </v-btn>
        </div>

        <v-row align="center" justify="center">
            <v-avatar size="250">
                <promoIcon width="250" height="250" />
            </v-avatar>
        </v-row>

        <v-row align="center" justify="center">
            <h3 class="font-weight-regular upTop mt-5">Fique a vontade!</h3>
        </v-row>
    </div>
</template>

<script>
    import fillIcon from "../icons/fillIcon"
    import wifindIcon from "../icons/wifindIcon"
    import promoIcon from '../icons/promoIcon'
    export default {
        name: 'Greeting',
        components: {
            fillIcon,
            wifindIcon,
            promoIcon
        }
    }
</script>

<style>
    .styled {
        position: absolute;
        top: -10rem;
        left: -4%;
        width: 110%;
    }

    .appBarStyled {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 980px) {
        .styled {
            position: absolute;
        }
    }
</style>