<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="welcome">BEM VINDO AO APP DA EDOOLS!</h1>
      </v-flex>
      <v-flex xs12>
        <h3 class="welcome">Aqui você poderá visualizar todos os aplicativos disponíveis.</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <!-- <v-card>
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
                :items="featureItems"
                :search="search"
                rows-per-page-text="Linhas por página"
                no-data-text="Sem dados disponíveis"
                no-results-text="Sem resultados para a sua pesquisa"
              >
              <template slot="items" slot-scope="props">
                <td>
                  <span> {{ props.item.feature_key }} </span>
                </td>
                <td>
                  <span> {{ props.item.id }} </span>
                </td>
              </template>
              <template  slot="pageText" slot-scope="{ pageStart, pageStop }">
                De {{ pageStart }} à {{ pageStop }}
              </template>
            </v-data-table>
        </v-card> -->

          <v-card>
            <v-card-title>
              Aplicativos
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="featureHeaders"
              :items="featureItems"
              :search="search"
              rows-per-page-text="Linhas por página"
              no-data-text="Sem dados disponíveis"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{ props.item.id }}</td>
                <td>{{ props.item.feature_key }}</td>
              </template>
              <template  slot="pageText" slot-scope="{ pageStart, pageStop }">
                De {{ pageStart }} à {{ pageStop }}
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Infelizmente sua pesquisa por "{{ search }}" não obteve resultados.
              </v-alert>
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
        rowsPerPage: 20
      },
      featureHeaders: [
        {
          text: 'ID',
          align: 'left',
          value: 'id'
        },
        {
          text: 'Aplicativo',
          align: 'left',
          value: 'featureKey'
        }
      ],
      featureItems: [],
      schoolItems: []
    }
  },
  created () {
    axios.get('/features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        console.log(response.data.features)
        this.featureItems = response.data.features
      }).catch(error => {
        console.log(error.config)
      })
    axios.get('/schools/64/school_features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        console.log(response.data.schoolfeatures)
        this.schoolItems = response.data.id
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
