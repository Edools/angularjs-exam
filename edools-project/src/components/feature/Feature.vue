<template>
  <v-layout row wrap>
      <v-flex xs12>
        <h3 class="small">Aqui você poderá ver todos os aplicativos e editar todos os recursos da escola selecionada.</h3>
      </v-flex>
      <v-flex xs12>
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <div class="text-xs-center" slot="header">Aplicativos e Recursos da Escola</div>
              <v-card>
                <v-data-table
                  :headers="schoolHeaders"
                  :items="schoolItems"
                  rows-per-page-text="Linhas por página"
                  no-data-text="Sem dados disponíveis"
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-center">{{ props.item.id }}</td>
                    <td class="text-xs-center" >{{ props.item.feature_key }}</td>
                    <td class="text-xs-center"  v-if="props.item.active === true">Ativo</td>
                    <td class="text-xs-center"  v-if="props.item.active === false">Inativo</td>
                    <td class="text-xs-center"  v-if="props.item.available === true">Disponível</td>
                    <td class="text-xs-center"  v-if="props.item.available === false">Indisponível</td>
                    <td class="ml-1" v-if="props.item.available === true"><v-switch color="green" @click="editFeature(props.item.id)" v-model="props.item.active"></v-switch></td>
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
</template>

<script>
import axios from '../../store/axios'
export default {
  data () {
    return {
      activate: true,
      pagination: {
        rowsPerPage: 20
      },
      schoolId: [],
      featureItems: [],
      schoolItems: [],
      schoolHeaders: [
        {
          text: 'ID',
          align: 'center',
          value: 'id'
        },
        {
          text: 'Aplicativo',
          align: 'center',
          sortable: false,
          value: 'featureId'
        },
        {
          text: 'Atividade',
          align: 'center',
          value: 'active'
        },
        {
          text: 'Disponibilidade',
          align: 'center',
          value: 'available'
        },
        {
          text: 'Ativar/Desativar Recurso',
          align: 'left',
          sortable: false,
          value: 'activate'
        }
      ]
    }
  },
  mounted () {
    // GETTING FEATURES FROM API
    axios.get('/features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.featureItems = response.data.features
      })
    // GETTING THE SCHOOL FEATURES
    axios.get('/schools/64/school_features?per_page=' + this.pagination.rowsPerPage)
      .then(response => {
        this.schoolItems = response.data.schoolfeatures
        this.schoolItems.forEach(schoolItem => {
          this.featureItems.forEach(feature => {
            if (schoolItem.feature_id === feature.id) {
              schoolItem.feature_key = feature.feature_key
            }
          })
        })
      })
  },
  methods: {
    // SET THE FEATURE TO TRUE OR FALSE
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
.small {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 30%;
  padding-bottom: 1%;
}
</style>
