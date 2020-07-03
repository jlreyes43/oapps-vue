<template>
    <div class="card col-10 m-5">
        <div class="card-body">
            <h5 class="card-title">Proposal Name: {{proposal.name}}</h5>
            <p class="card-text">Proposal Description: {{proposal.nature}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['proposal']
}
</script>

<style scoped>

</style>
