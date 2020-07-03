<template>
  <div>
    <h1>Home Component</h1>
    <oapps-proposal v-for="proposal in proposals" :key="proposal" :proposal="proposal"></oapps-proposal>
  </div>
</template>

<script>
import Proposal from './Proposal.vue'
// import { proposals } from '../data';
import {proposals} from '../data/sample';

console.log(proposals);

export default {
  data(){
    return{
      proposals: proposals
    }
  },
  components:{
    oappsProposal: Proposal
  }
}

</script>

<style scoped>

</style>
