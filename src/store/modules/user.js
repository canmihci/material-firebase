const user = {
  state: {
    gender: 'male'
  },
  mutations: {
    changeGender (state, gender) {
      state.gender = gender
    }
  },
  actions: {
    changeGender (context, gender) {
      context.commit('changeGender', gender)
    }
  }// ,
  // getters: {
  //   shortenedGender (state) {
  //     return state.welcomeText.slice(0, 1)
  //   }
  // }
}

export default user
