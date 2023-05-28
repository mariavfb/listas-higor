<template>
  <div class="usuario-detalhe">
    <h2 v-if="!usuario">Usuário não selecionado!</h2>
    <div v-else>
      <h2>ID: {{ usuario.id }}</h2>
      <h2>Nome: {{ usuario.nome }}</h2>
      <h2>Idade: {{ usuario.idade }}</h2>
      <button class="botao-remover" @click="removerSelecao">Remover Seleção</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { usuario: Object },
  methods: {
    removerSelecao() {
      this.$emit('remover-selecao');
    }
  }
}
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #CCC;
  padding: 20px;
}

.botao-remover {
  background-color: #ff5757;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botao-remover:hover {
  background-color: #ff3b3b;
}
</style>
