import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    docs: true,
    mcolor: "#45100f",
    mKey: "mKey1mKey1mKey1mKey1mKey1mKey1m1",
    mUrl: "http://localhost/w/15/vue_mdb_ant/src/s/s1/",
    // mUrl: "http://192.168.43.73/w/15/vue_mdb_ant/src/s/s1/",
    // mUrl: "http://s15minutes.kilaqitu.com/s1/",
    // mUrl: "https://s15.15minuteslogistics.co/s1/",

    },
    mutations: {
        toggleDocs(state, value) {
            state.docs = value;
        }
    },
    actions: {

    }
})