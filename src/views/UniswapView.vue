<script setup lang="ts">
import { applyReactInVue } from 'veaury'
import { SwapWidget } from '@uniswap/widgets'
import { web3auth } from '@/Web3Auth/Web3AuthWrapper';
import { ref } from 'vue';

const UniswapReactComponent = applyReactInVue(SwapWidget)

const provider = ref(web3auth.provider)

</script>

<template>
  <main>
    <div>
      <UniswapReactComponent :provider="provider" :defaultChainId="5" :jsonRpcUrlMap="{ 5: '' }" />
    </div>
    
  </main>
</template>