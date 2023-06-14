<template>
  <div class="campo row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="firstName">Nome:</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
          required
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="lastName">Sobrenome:</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
          required
        />
      </div>
    </div>
    <div class="form-group" style="display: none">
      <label for="fullName">Nome completo:</label>
      <input
        type="text"
        class="form-control"
        id="fullName"
        :value="formattedName"
        readonly
      />
    </div>
  </div>
</template>


<script>
export default {
  name: "NomeCompleto",
  props: {
    value: {
      type: Object,
      default: () => ({ firstName: "", lastName: "" }),
    },
  },
  computed: {
    firstName: {
      get() {
        return this.value.firstName;
      },
      set(newValue) {
        this.$emit("input", { ...this.value, firstName: newValue });
      },
    },
    lastName: {
      get() {
        return this.value.lastName;
      },
      set(newValue) {
        this.$emit("input", { ...this.value, lastName: newValue });
      },
    },
    formattedName() {
      return `${this.value.firstName} ${this.value.lastName}`;
    },
  },
};
</script>
