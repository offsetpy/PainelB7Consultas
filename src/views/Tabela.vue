<template>
  <v-app style="background-color: #121212">
    <v-main>

        <!-- Barra de navegação -->
        <v-app-bar style="background-color: #121212; z-index: 1;" class="border-b" elevation="2" flat>
            <v-app-bar-title>
                <h4><strong>B7</strong> technology</h4>
            </v-app-bar-title>
        </v-app-bar>

        <v-container class="consulta" style="display: flex; gap: 1rem; position: relative;">
            <v-col>
                <v-row>
                    <v-text-field class="input-consulta" v-model="inputConsulta" placeholder="Nome completo / CPF / Número de celular" bg-color="grey-darken-4" style="color: #fff;" label="Digite seus dados" variant="solo"></v-text-field>
                    <v-btn style="height: 3rem; position: absolute; right: 25px; bottom: 43px;" color="orange-lighten-5" variant="tonal" @click="consulta">buscar</v-btn>
                </v-row>
            </v-col>
        </v-container>
        <!-- Tabela -->
        <!-- position: relative; left: 15rem -->
        <!-- position: relative; left: 28rem -->
        <!-- position: relative; left: 17.8rem -->
        <Card style="position: absolute; top: 2px; right: 25px; z-index: 5;" />
        <v-container  style="display: flex; justify-content: center; Justify-content: center;">
            <v-card v-if="mostrarTabela" style="position: relative; background-color: #121212" width="60rem" theme="dark" flat class="border">
                <v-card-text class="d-flex justify-space-between">
                    <v-card-title style="display: flex; align-items: center; gap : 8px;"><Information style="width: 20px;" />Dados pessoais</v-card-title>
                    <v-card-title style=";display: flex; align-items: center; gap : 8px; "><Globe style="width: 20px;"/>Endereços</v-card-title>
                    <div class="acoes d-flex">
                        <v-card-title style=""><v-btn variant="tonal" color="deep-orange-lighten-2" @click="copyTableContent"> <v-tooltip activator="parent"  location="top">{{ tooltip }}</v-tooltip> <v-icon><Clipboard /></v-icon></v-btn></v-card-title>
                        <v-card-title style=""><v-btn variant="tonal" color="primary"><v-tooltip activator="parent" location="top">Captura de tela</v-tooltip> <v-icon><Screenshot /></v-icon> </v-btn></v-card-title>
                    </div>
                </v-card-text>
                <v-table style="font-family: 'Inter'; background-color: #121212" hover width="30rem">
                    <tbody>
                        <tr>
                            <td class="titulo">Nome</td>
                            <td>{{ dadosNome }}</td>

                            <td class="titulo">Rua</td>
                            <td>{{ dadosRua }}</td>

                            <td class="titulo">CEP</td>
                            <td>{{ dadosCep }}</td>
                        </tr>
                        <tr>
                            <td class="titulo">CPF</td>
                            <td>{{ dadosCpf }}</td>

                            <td class="titulo">Número da casa</td>
                            <td>{{ dadosNumeroCasa }}</td>

                            <td class="titulo">Estado</td>
                            <td>{{ dadosEstado }}</td>
                        </tr>
                        <tr>
                            <td class="titulo">Data de nascimento</td>
                            <td>{{ dadosNascimento }}</td>

                            <td class="titulo">Complemento</td>
                            <td>{{ dadosComplemento }}</td>

                            <td class="titulo">Cidade</td>
                            <td>{{ dadosCidade }}</td>
                        </tr>
                        <tr>
                            <td class="titulo">Nome da mãe</td>
                            <td>{{ dadosMae }}</td>

                            <td class="titulo">Bairro</td>
                            <td>{{ dadosBairro }}</td>

                            <td class="titulo">UF</td>
                            <td>{{ dadosUf }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>
        </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
// importação de componentes
import Globe from '../components/icons/Globe.vue'
import Information from '../components/icons/Information.vue'
import Clipboard from '../components/icons/Clipboard.vue'
import Screenshot from '../components/icons/Screenshot.vue'
import {ref} from 'vue'
import Card from '../components/Card.vue'
// Área dos dados
const dadosNome = ref('')
const dadosCpf = ref('')
const dadosMae = ref('')
const dadosNascimento = ref('')
// Endereço
const dadosRua = ref('')
const dadosNumeroCasa = ref('')
const dadosComplemento = ref('')
const dadosBairro = ref()
const dadosCep = ref('')
const dadosCidade = ref('')
const dadosEstado = ref('')
const dadosUf = ref('')
const tooltip = ref('Copiar')
const inputConsulta = ref('')
// Mostrar tabela
const mostrarTabela = ref(true)
import { useClipboard } from '@vueuse/core';

const headers = [
      { text: 'Nome', value: 'nome' },
      { text: 'CPF', value: 'cpf' },
      { text: 'Data de nascimento', value: 'nascimento' },
      { text: 'Nome da mãe', value: 'mae' },
      { text: 'Nome da rua', value: 'rua' },
      { text: 'Complemento', value: 'complemento' },
      { text: 'Bairro', value: 'bairro' },
      { text: 'CEP', value: 'cep' },
      { text: 'Cidade', value: 'cidade' },
      { text: 'Estado', value: 'estado' },
      { text: 'UF', value: 'uf' },
    ];

    const tableData = [
      { nome: dadosNome.value, cpf: dadosCpf.value, nascimento: dadosNascimento.value, 
        mae: dadosMae.value, rua: dadosRua.value, complemento: dadosComplemento.value,
        bairro: dadosBairro.value, cep: dadosCep.value, cidade: dadosCidade.value, 
        estado: dadosEstado.value, uf: dadosUf.value
    },
    ];

    

import axios from 'axios'
// Exemplo de consulta por nome
const consulta = async ()=> {
await axios.get('http://localhost:3000/consulta', {
  params: {
    cpf:  inputConsulta.value // Substitua pelo nome desejado
  }
})
.then(response => {
  const resultado = response.data
  dadosNome.value = resultado.nome
  dadosCpf.value = resultado.cpf
  dadosNascimento.value = resultado.nascimento
  dadosMae.value = resultado.nomeMae
  dadosRua.value = resultado.rua
  dadosNumeroCasa.value = resultado.numeroCasa
  dadosComplemento.value = resultado.complemento
  dadosBairro.value = resultado.bairro
  dadosCep.value = resultado.cep
  dadosCidade.value = resultado.cidade
  dadosEstado.value = resultado.estado
  dadosUf.value = resultado.uf
  mostrarTabela.value = true
})
.catch(error => {
  console.error('Erro:', error);
});
}
const { copy } = useClipboard();


function copyTableContent() {
  const tableText = generateTableText();
  copy(tableText);
  tooltip.value = 'Copiado!'
}

function generateTableText() {
    const lines = [];

    // Dados
    for (const row of tableData) {
      const rowText = headers.map(header => `${header.text}: ${row[header.value]}`).join('\n');
      lines.push(rowText);
    }

    return lines.join('\n');
  }
</script>
// 05041034400 01306339413
<style lang="scss" scoped>
.titulo{
    font-weight: 600;
    font-size: 16px;
    color: #999999;
}
td{
    font-size: 12px;
}
h4{
    color: #fff;
    strong{
        color: #121212;
        background-color: #FFF;
        padding: 5px;
        border-radius: 8px;
    }
}
a{
    display: flex;
    align-items: center;
    gap: 16px;
}
img{
    width: 20px;
}
</style>