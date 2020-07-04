<template>
    <div class="card col-10 m-5">
        <p>Form page</p>
    </div>
</template>

<script>
export default {
    props:['proposal'],
    methods:{
        toProposalPage(){
            this.$router.push({path: `/proposal/${this.proposal.id}`})
        }
    }
}
</script>

<style scoped>

</style>
