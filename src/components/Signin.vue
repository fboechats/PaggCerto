<template>
    <article>
        <div class="container" :class="{'sign-up-active' : signUp}">
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-right">
                        <h2>Bem vindo de volta!!</h2>
                        <p>Por favor, faça o login com suas informações pessoais. Ainda não tem conta conosco?? Clique no botão abaixo.</p>
                        <button class="invert" id="signIn" @click="signUp = !signUp">Quero me Cadastrar</button>
                    </div>
                    <div class="overlay-left">
                        <h2>Seja bem vindo!!</h2>
                        <p>Por favor, entre com suas informações pessoais para realizarmos seu cadastro.</p>
                        <button class="invert" id="signUp" @click="signUp = !signUp">Já tenho conta</button>
                    </div>
                </div>
            </div>
            <form class="sign-up" action="#">
                <h2>Criar Cadastro</h2>
                <div>Clique no botão abaixo para começarmos seu cadastro.</div>
                <a v-link="{ path: '/foo' }" title="#"><button @click="step1 = !step1">Cadastrar</button></a>
            </form>
            <form class="sign-in" action="#">
                <h2>Acessar Conta</h2>
                <div>Use sua conta para ter seu acesso.</div>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <a href="#">Esqueceu sua senha??</a>
                <button>Entrar</button>
            </form>
        </div>
    </article>
</template>

<script>
export default {

    data: () => {
        return {
            signUp: false
        }
    }
}
</script>

