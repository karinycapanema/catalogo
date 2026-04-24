<script setup>
import { ref } from 'vue'
import ProdutoChild from './components/ProdutoChild.vue';
import ButtonChild from './components/ButtonChild.vue';
const produtos = ref([
{ id: 1, nome: 'Ração Premium Cães', preco: 120, categoria: 'Alimentos' },
{ id: 2, nome: 'Ração Gatos Castrados', preco: 95, categoria: 'Alimentos' },
{ id: 3, nome: 'Petisco Natural', preco: 18, categoria: 'Alimentos' },
{ id: 4, nome: 'Brinquedo Bola', preco: 22, categoria: 'Brinquedos' },
{ id: 5, nome: 'Mordedor de Corda', preco: 30, categoria: 'Brinquedos' },
{ id: 6, nome: 'Shampoo Pet', preco: 35, categoria: 'Higiene' },
{ id: 7, nome: 'Tapete Higiênico', preco: 42, categoria: 'Higiene' },
{ id: 8, nome: 'Coleira Azul', preco: 28, categoria: 'Acessórios' },
{ id: 9, nome: 'Guia de Passeio', preco: 40, categoria: 'Acessórios' }
])
</script>

<template>
  <div class="container">
    <ul>
      <ProdutoChild v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria">

      </ProdutoChild>
    </ul>
    <div v-show="true">
      <label>Preço</label>
      <input type="number" v-model="preco">
      <ButtonChild @clique="corrigirPreco">Salvar</ButtonChild>
    </div>
  </div>
</template>

<style scoped>

</style>
