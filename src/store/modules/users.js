import { getUserById } from "@/api/users";

export const state =  {
    id : 's',
    name : '', 
    email : '', 
    userName : '', 
  };

export const mutations = {
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

export const actions = {
    FETCH_USERS({commit},param){
      getUserById(param.id)
      .then(data => {
        commit('SET_ID',data.id);
        commit('SET_NAME',data.name);
        commit('SET_USERNAME',data.userName);
      })
    },
}
