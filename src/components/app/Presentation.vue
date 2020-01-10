<template>
    <v-container fluid fill-height>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <ioIcon width="90" height="90" />
                    <wifindIcon width="124" height="91" />
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-row align="center" justify="center">
                    <h3 class="font-weight-regular">WiFind</h3>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ioIcon from "../icons/ioIcon"
    import wifindIcon from "../icons/wifindIcon"
    export default {
        name: 'Presentation',
        components: {
            ioIcon,
            wifindIcon
        }
    }
</script>