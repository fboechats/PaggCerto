<template>
    <div class="firstPage">
        <div class="container">
					<div class="text-center"><h1>Formulário de Cadastro PaggCerto</h1></div>	
					<div class="alert alert-info text-center">
							<h5> Preencha os campos abaixo com seus dados.</h5>
					</div>
					<div class="alert alert-danger text-center" v-show="errors.any()">
						<div v-if="errors.has('comoConheceu')">
							Por favor nos informe como ficou sabendo dos nossos serviços!
						</div>
						<div v-if="errors.has('password')">
							O campo senha é obrigatório!
						</div>
						<div v-if="errors.has('password_confirmation')">
							As senhas não conferem!
						</div>
						<div v-if="errors.has('email')">
							O campo email é obrigatório e precisa ser válido!
						</div>
						<div v-if="errors.has('email_confirmation')">
							Os emails não conferem!
						</div>
						<div v-if="errors.has('tipoCadastro')">
							Por favor nos informe se deseja um cadastro de pessoa física ou pessoa jurídica!
						</div>
					</div>
					<form id="firstForm" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
						<div class="form-group row">
							<div class="col-sm-12">
								<label for="comoConheceu">Como conheceu a PaggCerto?</label>
								<select v-validate="'required'" class="form-control" type="text" id="comoConheceu" name="comoConheceu" v-model="cadastro.comoConheceu" >
									<option value="">Selecione</option>
									<option value="4">FACEBOOK</option>
									<option value="11">FEIRA</option>
									<option value="5">GOOGLE</option>
									<option value="6">INDICAÇÃO</option>
									<option value="12">INSTAGRAM</option>
									<option value="1">INTERNET</option>
									<option value="8">JORNAL</option>
									<option value="10">PANFLETOS</option>
									<option value="3">RÁDIO</option>
									<option value="9">REPRESENTANTE</option>
									<option value="7">REVISTAS</option>
									<option value="2">TELEVISÃO</option>
								</select>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-lg-6">
								<label for="email-input">Email</label>
								<input v-validate="'required'" class="form-control" name="email" type="email" placeholder="seuemail@exemplo.com" id="email-input" v-model="cadastro.email" ref="email">
							</div>
							<div class="col-lg-6">
								<label for="confirm-email-input">Confirmar Email</label>
								<input v-validate="'required|confirmed:email'" class="form-control" name="email_confirmation" type="email" placeholder="seuemail@exemplo.com" id="confirm-email-input" v-model="cadastro.confirmEmail" data-vv-as="email" >
							</div>
						</div>
						<div class="form-group row">
							<div class="col-lg-6">
								<label for="password-input">Senha</label>
								<input v-validate="'required'" class="form-control" name="password" type="password" placeholder="Digite sua Senha" id="password-input" v-model="cadastro.password" ref="password">
							</div>
							<div class="col-lg-6">
								<label for="confirm-password-input">Confirmar Senha</label>
								<input v-validate="'required|confirmed:password'" class="form-control" name="password_confirmation" type="password" placeholder="Confirme sua Senha" id="confirm-password-input" v-model="cadastro.confirmPassword" data-vv-as="password">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-6">
									<div class="form-check form-check-inline">
										<label class="btn btn-outline-primary">
											<input v-validate="'required'" class="form-check-input" type="radio" name="tipoCadastro" id="pessoaFisica" value="1" v-model="cadastro.tipoCadastro" > 
											Pessoa Física
										</label>
									</div>
								</div>
								<div class="col-6">
									<div class="form-check form-check-inline">
										<label class="btn btn-outline-primary">
											<input class="form-check-input" type="radio" name="tipoCadastro" id="pessoaJuridica" value="2" v-model="cadastro.tipoCadastro" > 
											Pessoa Jurídica
										</label>
									</div>
								</div>
						</div>
						<div class="form-group row">
							<div class="col-lg-12 text-center">
								<button type="submit" class="btn btn-outline-primary btn-lg btn-block btn-round">Cadastrar Agora</button>
							</div>
						</div>
					</form>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
		name: 'Signup',
		
    data() {
        return {
            cadastro: {
                comoConheceu: '',
				email: '',
				confirmEmail:'',
				password:'',
				confirmPassword:'',
				tipoCadastro:''
            }
        }
    },
	methods: {
		checkData: function(){
			if (this.$parent.cadastro.primeiraFase !== ''){
				this.cadastro = this.$parent.cadastro.primeiraFase;
				this.cadastro.tipoCadastro = this.$parent.tipoCadastro;
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
				if((this.$parent.tipoCadastro != '') && (this.cadastro.tipoCadastro != this.$parent.tipoCadastro)){
					this.$parent.cadastro.dadosCadastrais = '';
				}
				this.$parent.cadastro.primeiraFase = this.cadastro;
				this.$parent.tipoCadastro = this.cadastro.tipoCadastro;
				if(this.cadastro.tipoCadastro == "1"){
					this.$router.push('/pessoaFisica');
				}else if(this.cadastro.tipoCadastro == "2"){
					this.$router.push('/pessoaJuridica');
				}
			}
		},
		beforeMount(){
			this.checkData();
		}
}
</script>