<script setup lang="ts">
import { getLidoBalanceOf, stakeWithLido } from '@/integrations/lido';
import { web3auth } from '@/Web3Auth/Web3AuthWrapper';

import { ref } from 'vue';


const lidoStakedBalance = ref('')
const stakeAmount = ref('')



const callLido = async () => {
  if (!web3auth.provider) {
    console.log("provider not initialized yet");
   return;
  }
  stakeWithLido(stakeAmount.value, web3auth.provider)
  stakeAmount.value = ''
}

const lidoBalanceOf = async () => {
  if (!web3auth.provider) {
    console.log("provider not initialized yet");
    return;
  }
  lidoStakedBalance.value = await getLidoBalanceOf(web3auth.provider)
}


</script>

<template>
  <!-- <button @click="login">Login</button>
  <button @click="logout">Logout</button> -->

    <section style="{ fontSize: '12px' }">
      <input v-model="stakeAmount" placeholder="amount ETH"/>
      <button class="rpcBtn" @click="callLido" style="cursor: pointer">Stake ETH</button>
      <button class="rpcBtn" @click="lidoBalanceOf" style="cursor: pointer">Get Lido Balance of</button>
    </section>
    <div>
      Lido Staked (stETH) Balance: {{lidoStakedBalance}}
    </div>
</template>