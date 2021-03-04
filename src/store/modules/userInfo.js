const state =  {
    userId : '',
    userType : '', 
    userName : '', 
  };

const mutations = {
    SET_USERID (state, value){
      state.userId = value
    },
    SET_USERTYPE(state, value){
      state.userType = value;
    },
    SET_SUBMITNAME(state, value){
      state.userName = value;
    }
  }

  export default {
    state,
    mutations
  }
  