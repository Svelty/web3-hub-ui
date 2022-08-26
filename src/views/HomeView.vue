<script setup lang="ts">
import { web3auth } from '@/Web3Auth/Web3AuthWrapper';
import { ref } from 'vue';
import RPC from "../utils/ethersRPC"

const address = ref('')
const amount = ref('')



const sendTransaction = async () => {
  if (!web3auth.provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(web3auth.provider);
  console.log(`Sending ${amount}ETH to ${address}`)
  const receipt = rpc.sendTransaction(address.value, amount.value);
  address.value = ''
  amount.value = ''
  console.log(await receipt);
};




</script>

<template>
  <!-- <button @click="login">Login</button>
  <button @click="logout">Logout</button> -->

    <section style="{ fontSize: '12px' }">
      <button class="rpcBtn" @click="sendTransaction" style="cursor: pointer">Send Transaction</button>
    </section>
    <div>
      <input v-model="address" placeholder="address"/>
    </div>
    <div>
      <input v-model="amount" placeholder="amount"/>
    </div>
</template>
