<script setup>
import { ref } from 'vue'
import ProdutoChild from './components/ProdutoChild.vue';
import ButtonChild from './components/ButtonChild.vue';
import { listaProdutos } from './data/produtos.js';

const produtos = ref(listaProdutos);

const preco = ref(0);
const posicaoProduto = ref (-1);
const alterando = ref(false);

function corrigirPreco(idProduto){
posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto);
preco.value = produtos.value[posicaoProduto.value].preco;
alterando.value = true;
}

function salvarPreco(){
produtos.value[posicaoProduto.value].preco = preco.value
alterando.value = false;
}
</script>

<template>
  <div class="container">
    <ul>
      <ProdutoChild v-for="produto in produtos" :key="produto.id" :id="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" @corrigirpreco="corrigirPreco">

      </ProdutoChild>
    </ul>
    <div v-show="alterando">
      <label>Preço</label>
      <input type="number" v-model.number="preco">
      <ButtonChild @clique="salvarPreco">Salvar</ButtonChild>
    </div>
  </div>
</template>

<style scoped>

</style>
