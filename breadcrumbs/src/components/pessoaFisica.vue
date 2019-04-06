<template>
    <div class="pessoaFisica">
        <div class="container">
            <header>
		    <div class="text-center">
                <h1>Cadastro de Pessoa Fisica</h1>
            </div>	
			<div class="alert alert-info text-center">
				<h5> Preencha os campos abaixo com seus dados.</h5>
			</div>
            <div class="alert alert-danger text-center" v-show="errors.any()">
				<div v-if="errors.has('nomeCompleto')">
					Por favor nos informe seu Nome
				</div>
                <div v-if="errors.has('cpf')">
					Por favor nos informe seu CPF
				</div>
                <div v-if="errors.has('sexo')">
					Por favor nos informe seu Sexo
				</div>
                <div v-if="errors.has('dataDeNascimento')">
					Por favor nos informe sua Data de Nascimento
				</div>
                <div v-if="errors.has('logradouro')">
					Por favor nos informe seu Logradouro
				</div>
                <div v-if="errors.has('cep')">
					Por favor nos informe seu CEP
				</div>

                <div v-if="errors.has('celular')">
					Por favor nos informe seu Telefone Celular
				</div>
                <div v-if="errors.has('ramo')">
					Por favor nos informe seu Ramo de Atividade
				</div>
            </div>
            </header>
        <form class="left w50" id="pessoaFisica" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
			<div class="form-group row">
				<div class="col-sm-12">
                    <label for="nomeCompleto-input">Nome Completo</label>
                    <input v-validate="'required'" class="form-control" type="text" id="nomeCompleto-input" placeholder="Nome Completo" name="nomeCompleto" v-model="dadosCadastrais.nomeCompleto" >
                </div>

                <div class="col-sm-6">
                    <label for="cpf-input">CPF</label>
                    <input v-validate="'required'" class="form-control" type="text" id="cpf-input" v-mask="'###.###.###-##'" placeholder="###.###.###-##" name="cpf" v-model="dadosCadastrais.cpf">
                    </div>
                <div class="col-sm-6">
                <label for="sexo">Sexo</label>
				    <select v-validate="'required'" class="form-control" type="text" id="sexo-input" name="sexo" v-model="dadosCadastrais.sexo">
					    <option value="">Selecione</option>
					    <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
            
                <div class="col-sm-6">
                    <label for="dataNascimento-input">Data de Nascimento</label>
                    <input v-validate="'required'" class="form-control" type="date" id="dataNascimento-input"  name="dataNascimento" v-model="dadosCadastrais.dataNascimento">
                </div>
                <div class="form-group row">
				<div class="col-sm-12">
                <label for="ramo-input">Ramo de Atividade</label>
                <input v-validate="'required'" class="form-control" type="text" id="ramo-input" placeholder="Ramo de Atividade" name="ramo" v-model="dadosCadastrais.ramoDeAtividade">
                </div>
            </div>
            </div>
        </form>
        <form class="right w50" id="pessoaFisica" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
            <div class="form-group row">
				<div class="col-sm-9">
                    <label for="logradouro-input">Logradouro</label>
                    <input v-validate="'required'" class="form-control" type="text" id="logradouro-input" placeholder="R. Av. Trav." name="logradouro" v-model="dadosCadastrais.endereco.logradouro">
                </div>
                <div class="col-sm-3">
                    <label for="numero-input">Nº</label>
                    <input v-validate="'required'" class="form-control" type="number" id="numero-input" placeholder="XX" name="numero" v-model="dadosCadastrais.endereco.numero">
                </div>
                <div class="col-sm-9">
                <label for="complemento-input">Complemento</label>
                <input class="form-control" type="text" id="complemento-input" placeholder="Conj. Cond. Apt. Bl." name="complemento" v-model="dadosCadastrais.endereco.complemento">
                </div>
                <div class="col-sm-3">
                    <label for="cep-input">CEP</label>
                    <input v-validate="'required'" class="form-control" type="text" id="cep-input" placeholder="#####-###"  v-mask="'#####-###'" name="cep" v-model="dadosCadastrais.endereco.cep">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label for="celular-input">Telefone</label>
                    <input v-validate="'required'" class="form-control" type="text" id="celular-input" placeholder="(XX)XXXXX-XXXX" v-mask="'(##) #####-####'" name="celular" v-model="dadosCadastrais.telefones.celular">
                </div>
            </div>
        </form>
            <div class="center">
                <button @click="$router.push('/dadosBancarios')" type="submit" class="btn btn-outline-primary btn-lg btn-block btn-round">Próxima Etapa</button>
			</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
	name: 'pessoaFisica',
    data() {
        return {
            dadosCadastrais: {
                nomeCompleto:'',
                cpf:'',
                sexo:'',
                dataNascimento:'',
                ramoDeAtividade:'',
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
            if(this.$parent.cadastro.tipoCadastro == "2"){
                this.$router.push('/pessoaJuridica');
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
