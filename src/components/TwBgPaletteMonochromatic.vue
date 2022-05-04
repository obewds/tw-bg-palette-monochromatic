<script setup lang="ts">

    type TwBgPaletteMonochromaticProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwBgPaletteMonochromaticProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwBgPaletteMonochromatic</slot>
        </template>
    </div>

</template>
