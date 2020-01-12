<template>
    <div>
        <svg width="1920" height="846" viewBox="0 0 1920 846" version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="styledFlipIcon">
            <desc>Created with Lunacy - by IO</desc>
            <path d="M0 0L1920 0L1920 652.09C1920 652.09 1441.5 845 961.5 845C481.5 845 0 652.09 0 652.09L0 0Z"
                transform="matrix(1 0 0 -1 0 845.0001)" id="Rectangle" fill="#FC4850" stroke="none" />
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'flipIcon',
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