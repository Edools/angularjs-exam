import { shallowMount } from '@vue/test-utils'
import Feature from '../src/components/feature/Feature'
import Vuetify from 'vuetify'

describe('Feature.vue', () => {
  it('Checking if message appears', () => {
    const wrapper = shallowMount(Feature)

    const message = wrapper.find('h3').text()
    expect(message).toBe('Aqui você poderá ver todos os aplicativos e editar todos os recursos da escola selecionada.')
  }),

  it('Checking if all features appears', () => {
      const wrapper = shallowMount(Feature)

      const features = wrapper.find({ name: 'v-data-table' })
      expect(wrapper.find('v-data-table').exists()).toBe(true)
      expect(features).toEqual(features)
  })
})
