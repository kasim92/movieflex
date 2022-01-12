<template>
    <v-row class="mb-4" align="center">
        <v-col cols="4" class="ml-15" align-self="center">
            <v-img contain class="mx-auto" :src="`/images/${imgpath}`" />
        </v-col>
        <v-col cols="5" align-self="center">
            <h2>{{ cardTitle }}</h2>
            <p class="text--secondary">{{ description }}</p>
            <slot name="button" />
            <slot name="donwload" />
        </v-col>
    </v-row>
</template>

<script>

export default {
    props: {
        imgpath: {
            type: String,
            default: ""
        },
        cardTitle: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }
    },


}
</script>

<style lang="scss" scoped>
</style>