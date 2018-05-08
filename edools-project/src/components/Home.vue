<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="welcome">BEM VINDO AO PAINEL DO APP DA EDOOLS!</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="small">Aqui você poderá visualizar todos os aplicativos disponíveis.</h3>
      </v-flex>
      <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <div class="text-xs-center" slot="header">Aplicativos</div>
              <v-card>
                <v-card-title>
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
                    Sua pesquisa por "{{ search }}" não obteve resultados.
                  </v-alert>
                </v-data-table>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="small">Aqui você poderá visualizar todas as features da escola selecionada.</h3>
      </v-flex>
      <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <div class="text-xs-center" slot="header">Recursos da Escola</div>
              <v-card>
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :headers="schoolHeaders"
                  :items="schoolItems"
                  :search="search"
                  rows-per-page-text="Linhas por página"
                  no-data-text="Sem dados disponíveis"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td>{{ props.item.active }}</td>
                    <td>{{ props.item.available }}</td>
                    <td>{{ props.item.feature_id }}</td>
                    <td><v-switch @click="editFeature" v-model="props.item.active"></v-switch></td>
                  </template>
                  <template  slot="pageText" slot-scope="{ pageStart, pageStop }">
                    De {{ pageStart }} à {{ pageStop }}
                  </template>
                  <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Sua pesquisa por "{{ search }}" não obteve resultados.
                  </v-alert>
                </v-data-table>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
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
      activate: true,
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
      schoolHeaders: [
        {
          text: 'ID',
          align: 'left',
          value: 'id'
        },
        {
          text: 'Ativo',
          align: 'left',
          value: 'active'
        },
        {
          text: 'Disponível',
          align: 'left',
          value: 'available'
        },
        {
          text: 'ID Aplicativo',
          align: 'left',
          value: 'featureId'
        },
        {
          text: 'Ativar/Desativar',
          align: 'left',
          value: 'activate'
        }
      ],
      schoolItems: [],
      schoolId: null
    }
  },
  created () {
    axios.get('/features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.featureItems = response.data.features
      }).catch(error => {
        console.log(error.config)
      })
    axios.get('/schools/64/school_features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.schoolItems = response.data.schoolfeatures
        this.schoolId = response.data.schoolfeatures.id
      }).catch(error => {
        console.log(error.config)
      })
  },
  methods: {
    editFeature () {
      axios.put('/school_features/' + this.schoolId + '/deactivate', {active: this.schoolFeatures})
        .then(response => {
          this.schoolFeatures.active = false
        })
    }
  }
}
</script>

<style scoped>
.welcome {
  text-align: center;
  padding-bottom: 10%;
}
.small {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 5%;
}
</style>
