<script setup>
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome', 'preco', 'categoria'])
defineEmits(['corrigirpreco'])
import { formatarPreco } from '../utils/produtoUtils.js';

</script>

<template>
    <li>
      ID: {{ id }} - {{ nome }} - {{ formatarPreco(preco) }} ({{ categoria }})
      <ButtonChild @clique="$emit('corrigirpreco', id)"> Corrigir Preço</ButtonChild>
    </li>
</template>

<style scoped>
</style>