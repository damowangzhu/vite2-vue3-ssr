<template>
    <div>Test page</div>
    <p>{{ mess }}</p>
</template>

<script>
export default {
    meta: {
        title: 'Test page title',
        description: 'Test page description',
        keywords: 'Test page keywords',
    },
    asyncData({ store }) {
        return store.dispatch('fetchMessage')
    },
    computed: {
        mess() {
            return this.$store.state.message
        }
    },
}
</script>