<template>
    <div class="dadosBancarios">
        <div class="container">
			<header>
		    <div class="text-center"><h1>Cadastro de Dados Bancários</h1></div>	
			<div class="alert alert-info text-center">
				<h5>Em que conta bancária gostaria de receber o seu repasse?</h5>
			</div>
			<div class="alert alert-danger text-center" v-show="errors.any()">
				<div v-if="errors.has('banco')">
					Por favor nos informe qual o banco para o repasse!
				</div>
				<div v-if="errors.has('agencia')">
					Por favor nos informe qual a Agência para o repasse!
				</div>
				<div v-if="errors.has('conta')">
					Por favor nos informe qual Número da Conta para o repasse!
				</div>
				<div v-if="errors.has('tipo')">
					Por favor nos informe qual Tipo da Conta do repasse!
				</div>
				<div v-if="errors.has('variacao')">
					Por favor nos informe qual a Variação da Conta do repasse!
				</div>
				<div v-if="errors.has('repasse')">
					É necessário informar em quanto tempo gostaria de receber o repasse para continuar
				</div>
			</div>
			</header>
			<form class="left w50" id="dadosBancarios" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
					<label for="repasse-input">Em quanto tempo gostaria de receber o seu repasse?</label>
					<div class="col-sm-12 text-center">
                    <input v-validate="'required'" class="form-control input-repasse" type="number" id="repasse-input" min="2" max="32" placeholder="2 - 32" name="repasse" v-model="$parent.cadastro.tempoRepasse">
                	</div>
					<div class="col-sm-12">
						<label for="banco-input">Banco</label>
							<select v-validate="'required'" class="form-control" type="text" id="banco-input" name="banco" v-model="dadosBancarios.banco" >
								<option value="">Selecione</option>
								<option value="BB">Banco Do Brasil</option>
								<option value="CEF">Caixa Econômica Federal</option>
								<option value="BANESE">BANESE</option>
								<option value="BACEN">Banco Central do Brasil</option>
								<option value="BASA">Banco da Amazônia</option>
								<option value="BNB">Banco do Nordeste do Brasil</option>
								<option value="BNDES">Banco Nacional de Desenvolvimento Econômico e Social</option>
								<option value="BRDE">Banco Regional de Desenvolvimento do Extremo Sul</option>
								<option value="BANDES">Banco de Desenvolvimento do Espírito Santo</option>
								<option value="BADESUL">BADESUL Desenvolvimento S.A. – Agência de Fomento/RS</option>
								<option value="BDMG">Banco de Desenvolvimento de Minas Gerais</option>
								<option value="BADEP">Banco de Desenvolvimento do Paraná</option>
								<option value="BRB">Banco de Brasília</option>
								<option value="BANESTES">Banco do Estado do Espírito Santo</option>
								<option value="BANPARA">Banco do Estado do Pará</option>
								<option value="BARISUL">Banco do Estado do Rio Grande do Sul</option>
								<option value="ITAU">Itaú Unibanco</option>
								<option value="BRADESCO">Banco Bradesco</option>
								<option value="CITIBANK">Banco Citibank</option>
								<option value="SANTANDER">Banco Santander</option>
							</select>
					</div>
					<div class="col-sm-6">
                    	<label for="agencia-input">Agência</label>
                    	<input v-validate="'required'" class="form-control" type="text" v-mask="['###', '###-#', '###-##']" placeholder="###-##" id="agencia-input"  name="agencia" v-model="dadosBancarios.agencia">
					</div>
					</form>
					<form class="right w50" id="dadosBancarios" @submit.prevent="validateBeforeSubmit()" v-on:submit="submitToNext">
					<div class="col-sm-6">
						<label for="conta-input">Nº da Conta</label>
						<input  class="form-control" type="text" id="conta-input" v-mask="['###-#', '####-#', '#####-#', '######-#']" placeholder="######-#"  name="conta" v-model="dadosBancarios.conta">
					</div>
					<div class="col-sm-6">
						<label for="tipo-input">Tipo de Conta</label>
						<select v-validate="'required'" class="form-control" type="text" id="tipo-input" name="tipo" v-model="dadosBancarios.tipoDeConta" >
							<option value="">Selecione</option>
							<option value="CC">Conta Corrente</option>
							<option value="P">Poupança</option>
						</select>
					</div>
					<div class="col-sm-6">
						<label for="variacao-input">Variação</label>
						<input  class="form-control" type="text" id="variacao-input"  name="variacao" v-model="dadosBancarios.variacao">
					</div>
				</form>
				<div class="center">
						<button @click="$router.push('/termosDeServico')" type="submit" class="btn">Próxima Etapa</button>
				</div>
		</div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
	name: 'dadosBancarios',
		
    data() {
        return {
            dadosBancarios: {
                banco:'',
                agencia:'',
                tipoDeConta:'',
                numeroDaConta:'',
				variacao:''
			},
				cpfOuCnpj:''
        }
    },
    methods: {
		checkData: function(){
			if (this.$parent.cadastro.dadosBancarios !== ''){
				this.dadosBancarios = this.$parent.cadastro.dadosBancarios;
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
				if(this.$parent.cadastro.tipoDeConta == '2'){
					this.dadosBancarios.cpfOuCnpj = this.cpfOuCnpj;
				}
				this.$parent.cadastro.dadosBancarios = this.dadosBancarios;
				this.$router.push('/termosDeServico');
			}
		},
		beforeMount(){
			this.checkData();
		}
	}
</script>