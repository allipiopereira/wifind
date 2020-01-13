<template>
    <v-container fluid fill-height class="whiteBackFull" style="position: absolute;">
        <v-row align="center" justify="center" style="height: 100%;">
            <trianglesIcon />

            <h2 class="font-weight-regular">WiFind é uma empresa pertencente a InfoPlus</h2>
        </v-row>

        <v-btn text rounded color="#000" class="ba-1 ml-auto bottomCenter upTop mr-3">Desenvolvido por IO</v-btn>

        <span class="bottomCenter upTop">&copy 2020</span>
    </v-container>
</template>

<script>
    import trianglesIcon from "../icons/trianglesIcon";
    export default {
        name: 'End',
        components: {
            trianglesIcon
        }
    }
</script>

<style>
    .styledtrianglesIcon {
        position: absolute;
        top: -6rem;
    }

    .bottomCenter {
        position: relative;
        bottom: 3rem;
    }

    .ba-1 {
        border: 1px solid #fc4850;
    }
</style>