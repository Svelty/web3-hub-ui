<script setup lang="ts">
import { web3auth } from '@/Web3Auth/Web3AuthWrapper';
import type { SafeEventEmitterProvider } from '@web3auth/base';
import { onMounted, ref } from 'vue';
import RPC from "../utils/ethersRPC"

const loading = ref<boolean>(false);
const loginButtonStatus = ref<string>('');
const connecting = ref<boolean>(false);
let provider = ref<SafeEventEmitterProvider | any>(null)
const address = ref(null)
const balance = ref('')

onMounted(async () => {
  try {
    loading.value = true;
    await web3auth.initModal()
    if (web3auth.provider) {
      provider = web3auth.provider
    }
  } catch (error) {
    console.log('error', error)
  } finally {
    loading.value = false
  }
})

const login = async () => {
  if (!web3auth) {
    console.log("web3auth not initialized yet")
    return
  }
  provider = await web3auth.connect();
}

const getUserInfo = async () => {
  if (!web3auth) {
    console.log("web3auth not initialized yet")
    return
  }
  const user = await web3auth.getUserInfo()
  console.log(user)
}

const logout = async () => {
  if (!web3auth) {
    console.log("web3auth not initialized yet");
    return;
  }
  await web3auth.logout();
  provider = null;
}

const getChainId = async () => {
  if (!provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(provider)
  const chainId = await rpc.getChainId();
  console.log(chainId);
};

const getAddress = async () => {
  if (!provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(provider);
  const addy = await rpc.getAddress();
  address.value = addy;
  console.log(addy);
};

const getBalance = async () => {
  if (!provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(provider);
  const bal = await rpc.getBalance();
  balance.value = bal
  console.log(bal);
};


const signMessage = async () => {
  if (!provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(provider);
  const signedMessage = await rpc.signMessage();
  console.log(signedMessage);
};

const getPrivateKey = async () => {
  if (!provider) {
    console.log("provider not initialized yet");
    return;
  }
  const rpc = new RPC(provider);
  const privateKey = await rpc.getPrivateKey();
  console.log(privateKey);
};



</script>

<template>
  <!-- <button @click="login">Login</button>
  <button @click="logout">Logout</button> -->

    <section style="{ fontSize: '12px' }">
      <button class="rpcBtn" @click="login" style="cursor: pointer">Login</button>
      <button class="rpcBtn" @click="getUserInfo" style="cursor: pointer">Get User Info</button>
      <button class="rpcBtn" @click="getChainId" style="cursor: pointer">Get Chain ID</button>
      <button class="rpcBtn" @click="getAddress" style="cursor: pointer">Get Address</button>
      <button class="rpcBtn" @click="getBalance" style="cursor: pointer">Get Balance</button>
      <button class="rpcBtn" @click="signMessage" style="cursor: pointer">Sign Message</button>
      <button class="rpcBtn" @click="getPrivateKey" style="cursor: pointer">Get Private Key</button>
      <button class="rpcBtn" @click="logout" style="cursor: pointer">Logout</button>
    </section>
    <div>
      Wallet Address: {{address}}
    </div>
    <div>
      Wallet Balance: {{balance}}
    </div>
</template>
