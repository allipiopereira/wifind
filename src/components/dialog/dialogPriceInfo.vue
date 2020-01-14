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
                    <v-btn icon color="white" @click="dialogInfo = !dialogInfo" class="ba-1">
                        <closeIcon width="20" height="20" color="#fc4850" class="mt-1" />
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
    import closeIcon from '../icons/closeIcon'
    export default {
        name: 'dialogPriceInfo',
        props: {
            plano: {
                type: Object,
                required: true
            }
        },
        components: {
            closeIcon
        },
        data() {
            return {
                dialogInfo: false
            }
        }
    }
</script>