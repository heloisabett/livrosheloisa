<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      LivrosAcotar: [
        {
          id: "1",
          nome: "Livro 1",
        },
        {
          id: "2",
          nome: "Livro 2",
        },
        {
          id: "3",
          nome: "Livro 3",
        },
      ],
      novo_livrosAcotar: "",
    };
  },
  methods: {
    salvar() {
      const novo_livrosAcotar = uuidv4();
      this.LivrosAcotar.push({
        id: novo_livrosAcotar,
        nome: this.novo_livrosAcotar,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Livros de Acotar</h2>
    </div>
    <div class="form_input">
      <input type="text" v-model="novo_LivroAcotar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list_LivrosAcotar">
      <table>
        <thead>
          <tr>
            <th>Quantidade</th>
            <th>livro</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="LivrosAcotar in LivrosAcotar" :key="LivrosAcotar.id">
            <td>{{ LivrosAcotar.id }}</td>
            <td>{{ LivrosAcotar.nome }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
