import {
  createStore
} from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    units: [],
    selectedUnits: [],
    filterUnits: [],
    filterName: null,
    ages: ['Dark', 'Feudal', 'Castle', 'Imperial'],
    //costs:['Wood', 'Food', 'Gold'],
    costsFood: [],
    Wood: [],
    costsGold: [],
    isDisableWood: false,
    isDisableFood: false,
    isDisableGold: false,

  },
  getters: {
    isSelectedUnit: (state) => (unit) => {
      return state.selectedUnits.some((r) => r.id === unit.id);
    },
    //for selected and show for list
    filteredUnits: (state) => {
      if (state.selectedUnits.length !== 0) {
        // There's selected units, return filtered
        return state.selectedUnits;
      } else {
        return
      }
    },
  },
  mutations: {
    //first set units
    SET_UNITS: (state, units) => {
      state.units = units;
      state.filterUnits = units;
      
    },
    addUnitSelection(state, unit) {
      state.selectedUnits.push(unit);
    },
    removeUnitSelection(state, unit) {
      state.selectedUnits = state.selectedUnits.filter(
        (r) => r.id !== unit.id
      );
    },
    //for age filter
    filterUpdateByAgeUnit(state, filter) {
      if (filter) {
        state.filterUnits = state.units.filter((f) => f.age === filter);
        state.filterName = filter;
      } else {
        state.filterUnits = state.units;
        state.filterName = null;
      }
    },
    filterCosts (state, Wood, ){
      state.Wood = Wood;
     
      console.log("çalıştı");
      if (Wood > 50 && Wood < 100 ) {
        console.log("50 -100 ");
        state.filterUnits = state.units.filter((C) => C.cost >= '100' );
        state.filterName = Wood;
        
        
      }
      // else if(Wood > 51 && Wood < 100) {
      //   console.log("50 den büyük 100 den küçük");
      //   state.filterUnits = state.units.filter( c => c.cost <= '50' && c.cost >= '100');
      //   state.filterName = Wood;
      // }
      // else if (Wood > 101 && Wood <150){
      //   console.log("100 den büyük 150 den küçük");
      //   state.filterUnits = state.cost.filter( c => c.cost >= '100' && c.cost <= '150' );
      //   state.filterName = Wood;
      // }
      // else if (Wood > 151){
      //   console.log("150 den büyük");
      //   state.filterUnits = state.units.filter( c => c.cost <= '150');
      //   state.filterName = Wood;
      // }
      else {
        state.filterUnits = state.units;
        state.filterName = null;
      }
      
    },
    //updateCost: (state, isDisable) => state.isDisable = !isDisable
    //  updateCost(state, isDisable) {
    //   console.log("çalışı");
    //    if ( isDisable == true){
    //      console.log("true eşitliği çalıştı");
    //      state.isDisable = true;
    //      return isDisable = true
    //    } else {
    //      state.isDisable = false
    //    }
    //  }
    updateCostWood(state, isDisableWood) {
      if (isDisableWood == true) {
        state.isDisableWood = true;
        return isDisableWood = true
      } else {
        state.isDisableWood = false
      }
    },
    updateCostFood(state, isDisableFood) {
      if (isDisableFood == true) {
        state.isDisableFood = true;
        return isDisableFood = true
      } else {
        state.isDisableFood = false
      }
    },
    updateCostGold(state, isDisableGold) {
      if (isDisableGold == true) {
        state.isDisableGold = true;
        return isDisableGold = true
      } else {
        state.isDisableGold = false
      }
    },
    
  },
  
  actions: {
    getUnits({
      commit
    }) {
      axios.get('data.json')
        .then(response => {
          commit('SET_UNITS', response.data.units);
        })
    }
  },
  modules: {}
});