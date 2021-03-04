const state =  {
    productId : '',
    price : '', 
    category : '', 
  };

const mutations = {
    SET_USERID (state, value){
      state.testId = value
    },
    SET_USERTYPE(state, value){
      state.testType = value;
    },
    SET_SUBMITNAME(state, value){
      state.testName = value;
    }
  }

  export default {
    state,
    mutations
  }
  