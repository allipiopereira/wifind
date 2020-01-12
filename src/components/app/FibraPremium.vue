<template>
    <v-container fluid fill-height class="whiteBackFull" style="position: absolute;">
        <v-row>
            <div class="appBarStyled ml-3">
                <titleFibraPremiumIcon width="160" height="68" />
                <v-spacer></v-spacer>
                <v-btn icon color="perfect" class="mr-3" style="background-color: #fc4850; box-shadow: none;">
                    <v-icon color="black">mdi-whatsapp</v-icon>
                </v-btn>
            </div>
        </v-row>

        <v-content>
            <v-container fluid fill-height>
                <v-row align="center" justify="center">
                    <v-card flat width="681" height="300" class="shadow upTop" style="border-radius: 25px;">
                        <v-row align="center" justify="center" style="height: 100%;">
                            <playCircleIcon width="100" height="100" />
                        </v-row>
                    </v-card>

                    <v-col cols="12">
                        <v-row align="center" justify="center">
                            <smileIcon width="681" height="126" class="mt-7" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-container>
</template>

<script>
    import titleFibraPremiumIcon from '../icons/titleFibraPremiumIcon'
    import playCircleIcon from '../icons/playCircleIcon'
    import smileIcon from '../icons/smileIcon'
    export default {
        name: 'FibraPremium',
        components: {
            titleFibraPremiumIcon,
            playCircleIcon,
            smileIcon
        }
    }
</script>