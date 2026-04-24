<script setup>
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome', 'preco', 'categoria'])
function teste(){
    alert('Opa!')
}
</script>

<template>
    <li>
      ID: {{ id }} - {{ nome }} - R$ {{ preco }} ({{ categoria }})
      <ButtonChild @clique="teste"> Corrigir Preço </ButtonChild>
    </li>
</template>

<style scoped>
</style>