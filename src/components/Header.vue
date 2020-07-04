<template>
  <div class="header-color d-flex align-items-center row">
    <p class="oapps-title no-gutter col-10" @click="toHome" style="cursor: pointer;">OAPPS</p>
    <p class="text-white no-gutter col-2" @click="toForm" style="cursor: pointer;">+</p>
  </div>
</template>

<script>
export default {
    methods:{
        toHome(){
          this.$router.push({path: '/'});
        },
        toForm(){
          this.$router.push({path: '/proposal/form'});
        }
    }
}
</script>

<style scoped>
.header-color{
  background-image: rgb(141,20,20);
  background-image: linear-gradient(74deg, rgba(141,20,20,1) 0%, rgba(103,33,33,1) 100%);
}
.oapps-title{
  font-family: "Times New Roman";
  color: white;
  font-size: 25px;
  letter-spacing: 4px;
}
.no-gutter{
  margin: 0;
  padding: 0;
}
</style>
