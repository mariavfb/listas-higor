<template>
  <div id="app">
    <h1>Filtros e Mixins</h1>
    <hr />
    <p>1) Construir um filtro local que troca espaços por vírgula</p>
    <p>{{ nome | formataNome }}</p>
    <hr />
    <p>2) Filtro global que conta o tamanho de cada palavra e adiciona o valor na string final</p>
    <p>{{ nome | contarPalavras }}</p>
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <hr>
    <p>3) Implementar os exercicios 1 e 2 com propriedade computada</p>
    <p>1- {{ fraseComVirgulas }}</p>
    <p>2- {{ textoComContagem }}</p>
    <hr>
    <p>4) Compartilhe a propriedade computada via mixin</p>
    <p>{{ textoComVirgulas }}</p>
  </div>
</template>

<script>
import { textoComVirgulasMixin } from "../mixins/mixins";

export default {
  mixins: [textoComVirgulasMixin],
  filters: {
    formataNome(nome) {
      const array = nome.replace(/\s+/g, ",");
      return array;
    },
  },
  
  computed: {
    textoComContagem() {
      if (!this.nome) {
        return '';
      }

      const palavras = this.nome.split(' ');

      const resultado = palavras.map((palavra) => {
        const tamanho = palavra.length;
        return `${palavra} (${tamanho})`;
      });

      return resultado.join(' ');
    },
    fraseComVirgulas() {
      return this.nome.replace(/ /g, ",");
    }
  },

  data() {
    return {
      nome: "Maria Joana comprou doces para sua irmã",
      texto: "Substituindo espaço por vírgulas utilizando propriedade computada"
    };
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, sans-serif;
  text-align: center;
  color: #00444f;
  margin-top: 60px;
}
h1{
  font-size: 2.5rem;
}
p{
  font-size: 25px;
}
input {
  font-size: 2.5rem;
}
</style>