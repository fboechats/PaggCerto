import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import VueTheMask from 'vue-the-mask'
import App from './App'
import VueRouter from 'vue-router'
import Signin from './components/Signin'
import FirstPage from './components/firstPage'
import PessoaFisica from './components/pessoaFisica'
import PessoaJuridica from './components/pessoaJuridica'
import DadosBancarios from './components/dadosBancarios'
import TermosDeServico from './components/termosDeServico'
import CadastroConcluido from './components/cadastroConcluido'

Vue.use(VueTheMask)
Vue.use(VeeValidate);
Vue.use(VueRouter);

export const serverBus = new Vue();

const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes: [
    {path:'/', component: Signin,
    meta: { breadcrumb: "Tela de Login" }},
    {path:'/firstPage', component: FirstPage,
    meta: { breadcrumb: "Iniciar Cadastro" }},
    {path:'/pessoaFisica', component: PessoaFisica,
      meta: { breadcrumb: "Pessoa Fisica" }},
    {path:'/pessoaJuridica', component: PessoaJuridica,
    meta: { breadcrumb: "Pessoa Juridica" }},
    {path:'/dadosBancarios', component: DadosBancarios,
    meta: { breadcrumb: "Dados Bancários" }},
    {path:'/termosDeServico', component: TermosDeServico,
    meta: { breadcrumb: "Termo de Serviço" }},
    {path:'/cadastroConcluido', component: CadastroConcluido,
    meta: { breadcrumb: "Cadastro Concluído" }}
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  locale: 'br',
  template: '<App/>'
})
