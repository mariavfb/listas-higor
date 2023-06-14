<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-if="!formSubmitted">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="fullName"></NomeCompleto>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                required
              />
            </div>
          </div>
          <div class="col-md-5">
            <div class="form-group">
              <label for="password">Senha:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                required
              />
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-group">
              <label for="storeData">Armazenar Dados?</label>
              <input
                type="checkbox"
                class="form-check-input mt-0"
                id="storeData"
                v-model="storeData"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" @click="submitForm">
          Registrar
        </button>
      </form>
      <div class="painel" v-if="formSubmitted">
        <div class="cabecalho">Resultado</div>
        <p>Nome completo: {{ fullNameFormatted }}</p>
        <p>Email: {{ email }}</p>
        <p>Senha: {{ password }}</p>
        <p>Armazenar Dados?: {{ storeData ? "Sim" : "Não" }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: {
    NomeCompleto,
  },
  data() {
    return {
      fullName: {
        firstName: "",
        lastName: "",
      },
      email: "",
      password: "",
      storeData: false,
      formSubmitted: false,
    };
  },
  computed: {
    fullNameFormatted() {
      return `${this.fullName.firstName} ${this.fullName.lastName}`;
    },
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
