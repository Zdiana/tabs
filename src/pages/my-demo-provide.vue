<template>
    <div>Test provide &amp; inject</div>
</template>

<script>
export default {
    provide() {
        return {
            rootTabs: this
        }
    },
    data() {
        return {
            name: "I'm Daina"
        }
    }
}
</script>
