<template>
    <div>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div> 
        <h4 class="text-center">{{ title }}</h4>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        title: String
    }
}
</script>

<style>

</style>