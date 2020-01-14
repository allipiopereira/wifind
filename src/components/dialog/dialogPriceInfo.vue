<template>
    <v-row align="center" justify="center">
        <v-dialog v-model="dialogInfo" persistent max-width="390">
            <template v-slot:activator="{ on }">
                <v-btn rounded v-on="on" class="shadow-none" style="background-color: #ffffff;">
                    {{plano.price}}
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="font-weight-regular">
                    {{plano.title}}
                    <v-spacer></v-spacer>
                    <v-btn icon large color="white" @click="dialogInfo = !dialogInfo">
                        <closeInfoIcon width="43" height="43" color="#fc4850" />
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <h3 class="font-weight-regular">{{plano.slogan}}</h3>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import closeInfoIcon from '../icons/closeInfoIcon'
    export default {
        name: 'dialogPriceInfo',
        props: {
            plano: {
                type: Object,
                required: true
            }
        },
        components: {
            closeInfoIcon
        },
        data() {
            return {
                dialogInfo: false
            }
        }
    }
</script>