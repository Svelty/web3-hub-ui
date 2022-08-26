<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Web3Hub from './components/Web3Hub.vue'
</script>

<template>
  <div class="left-nav">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/maker">Maker</RouterLink>
        <RouterLink to="/aave">Aave</RouterLink>
        <RouterLink to="/compound">Compound</RouterLink> -->
        <RouterLink to="/lido">Lido</RouterLink>
        <RouterLink to="/uniswap">Uniswap</RouterLink>
        <!-- <RouterLink to="/curve">Curve</RouterLink>
        <RouterLink to="/convex">Convex</RouterLink>
        <RouterLink to="/yearn">Yearn</RouterLink> -->
      </nav>
  </div>


  <div class="dapp-view">
    <div class="header-bar">
      <Web3Hub />
    </div>
    <RouterView />
  </div>
  
</template>

<style scoped>
.left-nav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

.dapp-view {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
  right: 20px;
}

.header-bar {
  position: fixed;
  top: 0;
}

nav {
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
}

nav a {
  color: var(--color-text);
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* nav a:first-of-type {
  border: 0;
} */

</style>
