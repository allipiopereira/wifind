<template>
    <div>
        <svg :width="width" :height="height" viewBox="0 0 36 36" version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <desc>Created with Lunacy - by IO</desc>
            <g id="opsIcon" transform="translate(1 1)">
                <path
                    d="M0 14.5C0 6.49187 6.49187 0 14.5 0C22.5081 0 29 6.49187 29 14.5C29 22.5081 22.5081 29 14.5 29C6.49187 29 0 22.5081 0 14.5Z"
                    transform="matrix(0.1564345 0.9876884 -0.9876884 0.1564345 28.64296 0)" id="Oval" fill="none"
                    stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                    transform="translate(18.82691 14.57341)" id="Oval-2" fill="#FFFFFF" stroke="none" />
                <path
                    d="M0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5Z"
                    transform="translate(6.826908 11.57343)" id="Oval" fill="#FFFFFF" stroke="none" />
                <path d="M0 1L18 1" transform="translate(6.826908 21.57343)" id="Line" fill="none" stroke="#FFFFFF"
                    stroke-width="1" stroke-linecap="round" />
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'opsIcon',
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