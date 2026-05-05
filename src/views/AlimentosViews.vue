<script setup>
import { listaProdutos } from '@/data/produtos';
import { ref } from 'vue'
const produtos = ref(listaProdutos);
produtos.value = produtos.value.filter(p => p.categoria === 'Alimentos' );

</script>

<template>

</template>

<style scoped> 

</style>