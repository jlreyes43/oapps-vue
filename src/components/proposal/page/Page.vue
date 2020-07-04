<template>
    <div>
        <h3>Proposal Page</h3>
        <p>Proposal ID: {{id}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>
