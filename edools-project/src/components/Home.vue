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
                </v-data-table>
              </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="small">Aqui você poderá editar todas as features da escola selecionada.</h3>
      </v-flex>
      <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <div class="text-xs-center" slot="header">Recursos da Escola</div>
              <v-card>
                <v-data-table
                  :headers="schoolHeaders"
                  :items="schoolItems"
                  :search="search"
                  rows-per-page-text="Linhas por página"
                  no-data-text="Sem dados disponíveis"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.id }}</td>
                    <td v-if="props.item.active === true">Ativo</td>
                    <td v-if="props.item.active === false">Inativo</td>
                    <td v-if="props.item.available === true">Disponível</td>
                    <td v-if="props.item.available === false">Indisponível</td>
                    <td>{{ props.item.feature_id }}</td>
                    <td class="text-xs-center"><v-switch @click="editFeature(props.item.id)" v-model="props.item.active"></v-switch></td>
                  </template>
                  <template  slot="pageText" slot-scope="{ pageStart, pageStop }">
                    De {{ pageStart }} à {{ pageStop }}
                  </template>
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
      search: null,
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
          text: 'Atividade',
          align: 'left',
          value: 'active'
        },
        {
          text: 'Disponibilidade',
          align: 'left',
          value: 'available'
        },
        {
          text: 'ID Aplicativo',
          align: 'left',
          value: 'featureId'
        },
        {
          text: 'Ativar/Desativar Recurso',
          align: 'left',
          value: 'activate'
        }
      ],
      schoolItems: [],
      schoolId: []
    }
  },
  mounted () {
    axios.get('/features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.featureItems = response.data.features
      }).catch(error => {
        console.log(error.config)
      })
    axios.get('/schools/64/school_features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.schoolItems = response.data.schoolfeatures
      }).catch(error => {
        console.log(error.config)
      })
  },
  methods: {
    editFeature (id) {
      axios.put('/school_features/' + id + '/deactivate', {active: this.schoolFeatures})
        .then(response => {
        })
      axios.put('/school_features/' + id + '/activate', {active: this.schoolFeatures})
        .then(response => {
        })
    }
  }
}
</script>

<style scoped>
.welcome {
  color: #48a978;
  text-align: center;
  padding-bottom: 10%;
}
.small {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 5%;
}
</style>
