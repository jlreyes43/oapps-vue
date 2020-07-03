<template>
  <div class="row">
    <div class="col-3">
      <oapps-sidebar></oapps-sidebar>
    </div>
    <div class="col-9">
      <h3>Active Proposals</h3>
      <oapps-proposal 
        v-for="proposal in proposals" 
        :key="proposal.id" 
        :proposal="proposal"></oapps-proposal>
    </div>
  </div>
</template>

<script>
import Proposal from './Proposal.vue'
import Sidebar from './Sidebar.vue'
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
    oappsProposal: Proposal,
    oappsSidebar: Sidebar
  }
}

</script>

<style scoped>

</style>
