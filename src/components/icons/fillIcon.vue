<template>
    <v-container fluid fill-height>
        <svg width="1920" height="150vh" viewBox="0 0 1920 831" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"  class="styled">
            <desc>Created with Lunacy</desc>
            <defs>
                <linearGradient x1="0" y1="0" x2="1" y2="1" id="gradient_1">
                    <stop offset="0" stop-color="#FFFFFF" />
                    <stop offset="1" stop-color="#FC4850" />
                </linearGradient>
            </defs>
            <path d="M0 672.8C0 672.8 488.688 827 968.688 827C1448.69 827 1920 672.8 1920 672.8L1920 0L0 0L0 672.8Z"
                id="waveRed" fill="#FC4850" stroke="url(#gradient_1)" stroke-width="7" />
        </svg>
    </v-container>
</template>

<script>
    export default {
        name: 'fillIcon',
        props: {
            width: {
                type: String
            },
            height: {
                type: String
            }
        }
    }
</script>