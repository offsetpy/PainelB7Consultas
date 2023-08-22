<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-app style="background-color: #121212">
        <v-main style="display: flex;">
            <div class="formulario">
                <div class="card">
                    <div class="input-usuario">
                        <v-text-field class="input" style="height: 30px; width: 20rem;" bg-color="grey-darken-4" placeholder="Digite seu usuário" variant="solo" ></v-text-field>
                    </div>                
                    <div class="input-senha">
                        <v-text-field class="input" style="height: 30px; width: 20rem;" bg-color="grey-darken-4" placeholder="Digite sua senha" variant="solo" ></v-text-field>
                    </div>
                    <v-btn>Entrar</v-btn>
                </div>
            </div>
            <div class="imagem-container">
                <img src="../assets/fundo1.png" alt="">
            </div>
        </v-main>
    </v-app>
</template>

<script>

</script>

<style scoped>
.formulario{
    border: solid 2px blue;
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    align-items: center;
    justify-content: center;
}
.card{
    border: solid 2px red;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem
}
img{
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    border-radius: 16px;
}
.image-container{
    padding: 150px;
}
</style>