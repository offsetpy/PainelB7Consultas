<script setup>
// height: 3.7rem = menor
// height: 23rem = maior
import { ref, computed } from 'vue';
import { vAutoAnimate } from '@formkit/auto-animate';

const card = ref();
const short = 3.7;
const expanded = 23;
const toggleMenu = () => (isExpanded.value = !isExpanded.value);
const isExpanded = ref(false);
const expand = computed(() => {
  return isExpanded.value ? `${expanded}rem` : `${short}rem`;
});
</script>
<template>
  <div v-auto-animate="card" class="card" :style="{ height: expand }">
    <div ref="card" class="usuario-informacoes">
      <img src="../assets/pfp.jpg" alt="" />
      <p>Gabriel xotascript</p>
    </div>

    <span
      @click="toggleMenu"
      id="drop-down"
      :class="[
        'material-symbols-rounded',
        { 'arrow-up': isExpanded, 'arrow-down': !isExpanded }
      ]"
      >arrow_drop_down</span
    >

    <div class="links">
      <router-link to="/"
        ><span class="material-symbols-rounded">account_circle</span>Editar
        perfil</router-link
      >
      <router-link to="/"
        ><span class="material-symbols-rounded">shopping_cart_checkout</span
        >Recarregar</router-link
      >
      <router-link to="/"
        ><span class="material-symbols-rounded">info</span>Suporte</router-link
      >
      <router-link to="/"
        ><span class="material-symbols-rounded">report</span>Reportar
        erro</router-link
      >
    </div>
    <button><span class="material-symbols-rounded">logout</span>Sair</button>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #121212;
$text-white: #fff;
$text-gray: #929292;
$text-gray2: #999999;
$light-black: #171717;
$light-black2: #242424;

.card {
  background-color: $light-black;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  padding-bottom: 18px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  overflow: hidden;
  height: 3.7rem;
  position: relative;
  transition: ease-in height 0.1s;
  #drop-down {
    color: $text-white;
    position: absolute;
    right: 16px;
    top: 18px;
    cursor: pointer;
  }
  .arrow-up {
    transform: rotate(180deg);
  }
  .arrow-down {
    transform: rotate(0deg);
  }
  .usuario-informacoes {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 14px;
    position: relative;
    right: 34px;
    img {
      width: 30px;
      border-radius: 50%;
    }
    p {
      color: $text-white;
      font-family: 'Inter';
      font-size: 14px;
    }
  }
  .usuario-informacoes::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 14rem;
    background-color: rgb(29, 29, 29);
    top: 44px;
    border-radius: 1px;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    a {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: $text-white;
      font-family: 'Inter';
      font-weight: 600;
      padding-right: 100px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 12px;
      border-radius: 16px;
      position: relative;
      justify-content: left;
      transition: all ease-in-out 0.1s;
    }
    a:hover {
      background-color: $text-white;
      color: $light-black;
    }
  }
  button {
    background-color: $light-black2;
    color: $text-white;
    font-family: 'Inter';
    padding: 12px 25px;
    width: 100%;
    margin-top: 12px;
    border-radius: 16px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all ease-out 0.1s;
  }
  button:hover {
    background-color: $text-white;
    color: $light-black;
  }
}
</style>
