<template>
    <div class="cadastroConcluido">
        <div class="container">
		    <header><h1>Cadastro Concluído</h1></header>	
			<div class="center w100">
				<h4>Seja bem vindo a o PaggCerto!</h4>
                <h5>Você completou o seu cadastro com sucesso! Enviamos um email de confirmação de cadastro para o endereço de email cadastrado, em breve o email deve chegar!</h5>
			</div>
            <br>
            <br>
            <div class="center">
				<router-link to="/">
                    <button class="btn">
                        Realizar outro cadastro
                    </button>
                </router-link>
			</div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */ 
export default {
	name: 'cadastroConcluido',
    data() {
        return {
        }
    },
    methods: {	
	}
}
</script>