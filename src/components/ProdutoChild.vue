<script setup>
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome', 'preco', 'categoria'])
defineEmits(['corrigirpreco'])
</script>

<template>
    <li>
      ID: {{ id }} - {{ nome }} - R$ {{ preco }} ({{ categoria }})
      <ButtonChild @clique="$emit('corrigirpreco', id)"> Corrigir Preço</ButtonChild>
    </li>
</template>

<style scoped>
</style>