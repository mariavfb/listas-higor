export const textoComVirgulasMixin = {
    computed: {
      textoComVirgulas() {
        return this.texto.replace(/ /g, ",");
      }
    }
  };
  