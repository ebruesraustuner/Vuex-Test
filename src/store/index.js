import {
  createStore
} from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    units: [
    ],
    selectedUnits: [],
   
  },
  getters: {
    filteredUnits: (state) => {
      if (state.selectedUnits.length !== 0) {
        // There's selected units, return filtered
        return state.selectedUnits;
      } else {
        return
      }
    },
    isSelectedUnit: (state) => (unit) => {
      return state.selectedUnits.some((r) => r.age === unit.age);
    },

    },
  mutations: {
    //first set units
    SET_UNITS: (state, units) => {
      state.units = units;
    },
    addUnitSelection(state, unit) {
      state.selectedUnits.push(unit);
    },
    removeUnitSelection(state, unit) {
      state.selectedUnits = state.selectedUnits.filter(
        (r) => r.age !== unit.age
      );
    }
  },
  actions: {
    getUnits({
      commit
    }) {
      axios.get('data.json')
        .then(response => {
          commit('SET_UNITS', response.data.units)
        })
    },
   

  },
  modules: {}
});