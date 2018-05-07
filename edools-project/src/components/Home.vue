<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="welcome">BEM VINDO AO APP DA EDOOLS!</h1>
      </v-flex>
      <v-flex xs12>
        <h3 class="welcome">Aqui você poderá visualizar e editar features de todos os aplicativos disponíveis oferecidos pela escola fornecida.</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            Aplicativos
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
                :pagination.sync="pagination"
                :headers="headers"
                :items="items"
                :search="search"
                rows-per-page-text="Linhas por página"
                no-data-text="Sem dados disponíveis"
                no-results-text="Sem resultados para a sua pesquisa"
              >
              <template slot="items" slot-scope="props">
                <td>
                  <span> {{ props.item.feature_key }} </span>
                </td>
              </template>
              <template  slot="pageText" slot-scope="{ pageStart, pageStop }">
                De {{ pageStart }} à {{ pageStop }}
              </template>
            </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 5
      },
      headers: [
        {
          text: 'Feature Keys',
          align: 'left',
          sortable: false,
          value: 'name'
        }
      ],
      items: []
    }
  },
  created () {
    axios.get('/features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        console.log(response)
        this.items = response.data.features
      }).catch(error => {
        console.log(error.config)
      })
  }
}
</script>

<style scoped>
.welcome {
  text-align: center;
}
</style>
