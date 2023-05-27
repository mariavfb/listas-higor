import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.filter('contarPalavras', function (value) {
  if (!value) {
    return '';
  }

  const palavras = value.split(' ');

  const resultado = palavras.map((palavra) => {
    const tamanho = palavra.length;
    return `${palavra} (${tamanho})`;
  });

  return resultado.join(' ');
});
