<template>
    <div>
        <h1>Welcome to the homepage</h1>
        <AppAlert>
            This is an auto-imported component
        </AppAlert>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Home Page',
    //   meta: [
    //     { name: 'description', content: 'My amazing site.' }
    //   ],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<style></style>