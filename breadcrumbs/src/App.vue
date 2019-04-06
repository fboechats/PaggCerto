<template>
  <div id="app">
    <LogoForm />
    <router-view />
  </div>
</template>

<script>
import LogoForm from './components/theme/LogoForm'
import DynaCrumb from './components/theme/DynaCrumb'
import Signin from './components/Signin'
import FirstPage from './components/firstPage'
import PessoaFisica from './components/pessoaFisica'
import PessoaJuridica from './components/pessoaJuridica'
import DadosBancarios from './components/dadosBancarios'
import TermosDeServico from './components/termosDeServico'
import CadastroConcluido from './components/cadastroConcluido'
import {mask} from 'vue-the-mask'

export default {
  name: 'App',
  directives: {mask},
  components: {
    LogoForm,
    DynaCrumb,
    Signin,
    FirstPage,
    PessoaFisica,
    PessoaJuridica,
    DadosBancarios,
    TermosDeServico,
    CadastroConcluido
  },
  data() {
    return {
      cadastro: {
        primeiraFase: '',
        tipoCadastro:'',
        dadosCadastrais: '',
				repasse:'',
				dadosBancarios:'',
				aceitarTermos:'',
				tipoCadastro:''
            }
        }
    }
}
</script>

<style lang="scss">

@import './styles/style.scss';
@import './styles/custom-bootstrap.scss';

</style>
