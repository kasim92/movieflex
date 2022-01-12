<template>
    <v-btn
        v-bind="$attrs"
        v-on="$listeners"
        color="warning"
        class="rounded-lg px-4 py-4"
        small
    >{{ title }}</v-btn>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
    }

}
</script>

<style lang="scss" scoped>
</style>