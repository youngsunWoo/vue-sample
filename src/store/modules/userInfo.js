import { getUserById } from "@/api/sample";

const state =  {
    id : '',
    name : '', 
    email : '', 
    userName : '', 
  };

const mutations = {
    SET_ID (state, value){
      state.id = value
    },
    SET_NAME(state, value){
      state.name = value;
    },
    SET_USERNAME(state, value){
      state.userName = value;
    },
    SET_EMAIL(state, value){
      state.email = value;
    }
  }

  const actions = {
    FETCH_USERS({commit},param){
      getUserById(param.id)
      .then(data => {
        commit('SET_ID',data.id);
        commit('SET_NAME',data.name);
        commit('SET_USERNAME',data.userName);
      })
    }
  }

  export default {
    state,
    mutations,
    actions,
  }
  