<script setup>
import { ref } from 'vue';
</script>
<template>
  <nav>
    <div class="logo">B7Technology</div>

    <div class="area-usuario">
      <img src="../assets/pfp.jpg" alt="Foto de perfil" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$bg-color: #121212;
$text-white: #fff;
$text-gray: #929292;
$text-gray2: #999999;
$light-black: #171717;
$light-black2: #242424;

nav {
  width: 100%;
  padding: 15px 30px;
  background-color: $light-black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Inter';
  color: $text-white;
  .area-usuario {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  img {
    width: 46px;
    border-radius: 50%;
  }
}
</style>
