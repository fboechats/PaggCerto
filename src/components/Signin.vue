<template>
    <article>
        <div class="container">
            <div class="overlay-container">
                <div class="overlay">
                <div class="overlay-left">
                    <h2>Bem vindo de volta</h2>
                    <p>Por favor, faça o login com suas informações pessoais.</p>
                    <button>Entrar</button>
                </div>
                </div>
                <div class="overlay-right">
                    <h2>Seja Bem vindo</h2>
                    <p>Por favor, entre com suas informações pessoais para realizarmos seu cadastro.</p>
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        width: 768px;
        height: 480px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                    0 10px 10px rgba(0, 0, 0, .2);
        background: linear-gradient(to bottom, #efefef, #ccc);

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        widht: 50%;
        height: 100%;
        overflow: hidden;
        transition: trasnform .5s ease-in-out;
    }

    .overlay {
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        background: linear-gradient(to bottom right, #7FD625, #009345);
        color: #fff;
        transform: translateX(0);
        transition: transform .5s ease-in-out;
    }

    .overlay-left {
        
    }

    .overlay-right {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 70px 40px;
        width: calc(50% - 80px);
        height: calc(100% - 140px);
    }


}

</style>


