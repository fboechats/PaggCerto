<template>
    <div class="pessoaJuridica">
        <div class="container">
            <header>
		    <div class="text-center"><h1>Cadastro de Pessoa Juridica</h1></div>	
			<div class="alert alert-info text-center">
				<h4> Preencha os campos abaixo com os dados da sua empresa.</h4>
			</div>
            <div class="alert alert-danger text-center" v-show="errors.any()">
				<div v-if="errors.has('razaoSocial')">
					Por favor nos informe a Razão Social da empresa
				</div>
                <div v-if="errors.has('nomeFantasia')">
					Por favor nos informe o Nome Fantasia da empresa
				</div>
                <div v-if="errors.has('cnpj')">
					Por favor nos informe o CNPJ da empresa
				</div>
                <div v-if="errors.has('nomeCompleto')">
					Por favor nos informe o Nome Completo do Administrador da empresa
				</div>
                <div v-if="errors.has('cpf')">
					Por favor nos informe o CPF do Administrador da empresa
				</div>
                <div v-if="errors.has('sexo')">
					Por favor nos informe o Sexo do Administrador da empresa
				</div>
                <div v-if="errors.has('dataDeNascimento')">
					Por favor nos informe a Data de Nascimento do Administrador da empresa
				</div>
                <div v-if="errors.has('logradouro')">
					Por favor nos informe o Logradouro da empresa
				</div>
                <div v-if="errors.has('cep')">
					Por favor nos informe o CEP da empresa
				</div>
                <div v-if="errors.has('celular')">
					Por favor nos informe o Telefone Celular da empresa
				</div>
                <div v-if="errors.has('ramo')">
					Por favor nos informe o Ramo de Atividade da empresa
				</div>
            </div>
            </header>
            <form class="left w33" id="pessoaFisica" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
			<div class="form-group row">
				<div class="col-sm-12">
                    <label for="razaoSocial-input">Razão Social</label>
                    <input v-validate="'required'" class="form-control" type="text" id="razaoSocial-input" placeholder="Razão Social" name="razaoSocial" v-model="dadosCadastrais.razaoSocial">
                </div>
                <div class="col-sm-12">
                    <label for="nomeFantasia-input">Nome Fantasia</label>
                    <input v-validate="'required'" class="form-control" type="text" id="nomeFantasia-input" placeholder="Nome Fantasia" name="nomeFantasia" v-model="dadosCadastrais.nomeFantasia">
                </div>
                <div class="col-sm-6">
                    <label for="cnpj-input">CNPJ</label>
                    <input v-validate="'required'" class="form-control" type="text" id="cnpj-input" v-mask="'##.###.###/####-##'" placeholder="##.###.###/####-##" name="cnpj-input" v-model="dadosCadastrais.cnpj">
                </div>
                <div class="col-sm-12">
                <label for="ramo-input">Ramo de Atividade</label>
                <input v-validate="'required'" class="form-control" type="text" id="ramo-input" placeholder="Ramo de Atividade" name="ramo-input" v-model="dadosCadastrais.ramoDeAtividade">
                </div>
            </div>
            </form>
            <form class="middle w33" id="pessoaFisica" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
            <div class="form-group row">
                <div class="col-sm-12">
                <label>Dados Administrador</label>
                </div>
				<div class="col-sm-12">
                <label for="nomeCompleto-input">Nome Completo</label>
                <input v-validate="'required'" class="form-control" type="text" id="nomeCompleto-input" placeholder="Nome Completo" name="nomeCompleto" v-model="dadosCadastrais.dadosDoAdministrador.nomeCompleto">
                </div>
                <div class="col-sm-6">
                    <label for="cpf-input">CPF</label>
                    <input v-validate="'required'" class="form-control" type="text" id="cpf-input" v-mask="'###.###.###-##'" placeholder="###.###.###-##" name="cpf" v-model="dadosCadastrais.dadosDoAdministrador.cpf">
                </div>
                <div class="col-sm-6">
                <label for="comoConheceu">Sexo</label>
				    <select v-validate="'required'" class="form-control" type="text" id="sexo-input" name="sexo" v-model="dadosCadastrais.dadosDoAdministrador.sexo" >
					    <option value="">Selecione</option>
					    <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
           
                <div class="col-sm-6">
                <label for="dataNascimento-input">Data de Nascimento</label>
                <input v-validate="'required'" class="form-control" type="date" id="dataNascimento-input"  name="dataNascimento" v-model="dadosCadastrais.dadosDoAdministrador.dataNascimento">
                </div>
            </div>
            </form>
            <form class="right w33" id="pessoaFisica" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
                <div class="form-group row">
				<div class="col-sm-9">
                    <label for="logradouro-input">Logradouro</label>
                    <input v-validate="'required'" class="form-control" type="text" id="logradouro-input" placeholder="R. Av. Trav." name="logradouro-input" v-model="dadosCadastrais.endereco.logradouro">
                </div>
                <div class="col-sm-3">
                    <label for="numero-input">Nº</label>
                    <input v-validate="'required'" class="form-control" type="number" id="numero-input" placeholder="XX" name="numero" v-model="dadosCadastrais.endereco.numero">
                </div>
                <div class="col-sm-9">
                <label for="complemento-input">Complemento</label>
                <input  class="form-control" type="text" id="complemento-input" placeholder="Conj. Cond. Apt. Bl." name="complemento" v-model="dadosCadastrais.endereco.complemento">
                </div>
                <div class="col-sm-3">
                    <label for="cep-input">CEP</label>
                    <input v-validate="'required'" class="form-control" type="text" id="cep-input" v-mask="'#####-###'" placeholder="#####-###" name="cep" v-model="dadosCadastrais.endereco.cep">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label for="celular-input">Telefone</label>
                    <input v-validate="'required'" class="form-control" type="text" id="celular-input" v-mask="'(##) #####-####'" placeholder="(XX)XXXXX-XXXX" name="celular" v-model="dadosCadastrais.telefones.celular">
                </div>
            </div>
        </form>
            <div class="center">
                <button @click="$router.push('/dadosBancarios')" type="submit" class="btn">Próxima Etapa</button>
			</div>
        </div>
        
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
	name: 'pessoaJuridica',
		
    data() {
        return {
            dadosCadastrais: {
                razaoSocial:'',
                nomeFantasia:'',
                cnpj:'',
                tipoDaEmpresa:'',
                ramoDeAtividade:'',
                dadosDoAdministrador:{
                    nomeCompleto:'',
                    cpf:'',
                    sexo:'',
                    dataNascimento:'',
                },
                telefones:{
                    celular:'',
                    fixo:''
                },
                endereco:{
                    logradouro:'',
                    cep:'',
                    numero:'',
                    complemento:''
                }
            }
        }
    },
    methods: {
        checkData: function(){
            if(this.$parent.cadastro.tipoCadastro == "1"){
                this.$router.push('/pessoaFisica');
            }
			if (this.$parent.cadastro.dadosCadastrais !== ''){
				this.dadosCadastrais = this.$parent.cadastro.dadosCadastrais;
			}
		},
		validateBeforeSubmit() {
			this.$validator
			.validateAll()
			.then(function(response) {
				// Validation success if response === true
			})
			.catch(function(e) {
				// Catch errors
			})
			},
			submitToNext: function(){
				this.$parent.cadastro.dadosCadastrais = this.dadosCadastrais;
				this.$router.push('/dadosBancarios');
			}
		},
		beforeMount(){
			this.checkData();
		}
    }
</script>