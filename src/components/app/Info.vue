<template>
    <v-container fluid fill-height>
        <div class="appBarStyled">
            <titleInfoIcon width="160" height="68" />
            <v-spacer></v-spacer>
            <v-btn fab small color="perfect" class="mr-3 ba-2" style="box-shadow: none;">
                <v-icon color="black">mdi-whatsapp</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    import titleInfoIcon from '../icons/titleInfoIcon'
    export default {
        name: 'Info',
        components: {
            titleInfoIcon
        }
    }
</script>

<style>
    .appBarStyled {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>