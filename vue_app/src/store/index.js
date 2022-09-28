
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymantsList: {},
    categoryList: [],
    id: 0,
    page: "",
    itemsOnPage: 10,
    pageCount: 5,
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymantsList = payload;
    },
    addDataToPaymentsList(state, payload) {
      payload.id = state.id + 1;
      console.log(payload);
      state.paymantsList[state.page].push(payload);
      Vue.set(state, "paymantsList", state.paymantsList);
      Vue.set(state, "id", payload.id);
    },
    updatePaymentList(state, payload) {
      console.log(payload);
      console.log("key = " + Object.keys(payload)[0]);
      const newPage = Object.keys(payload)[0];
      if (!Object.prototype.hasOwnProperty.call(state.paymantsList, newPage)) {
        console.log("add new page = " + newPage);
        state.paymantsList[newPage] = payload[newPage];
        console.log(state.paymantsList);
        Vue.set(state, "paymantsList", state.paymantsList);
        Vue.set(state, "id", payload.id);
      } else {
        console.log("page " + newPage + " exists");
      }
      Vue.set(state, "page", newPage);


    },

    setCategoryList(state, payload) {
      state.categoryList = payload;
    },

    updateCategory(state, payload) {
      console.log("mutation update category = " + payload);
      Vue.set(state.categoryList, state.categoryList.length, payload);
    }
  },

  actions: {
    fetchData({ commit, state }, page) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const obj = {};
          const items = [];
          let id = state.id;
          for (let k = 1; k <= state.itemsOnPage; k++) {
            let randomCategory = Math.floor(Math.random() * this.state.categoryList.length);
            items.push({
              id: ++id,
              data: "22.09.2022",
              category: state.categoryList[randomCategory],
              value: getRandomArbitrary(1000, 3000),
            })
          }
          obj[page] = items;
          obj.id = id;
          resolve(obj);
        }, 1000)
      }).then(res => {
        commit('updatePaymentList', res);
      })
    },

    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Food", "Sport", "Education", "Auto", "Health"];
          resolve(items);
        }, 500)
      }).then(res => {
        commit('setCategoryList', res)
      })
    },
  },

  getters: {
    getPaymentList: state => state.paymantsList[state.page],
    getFullPaymentValue: state => {
      return state.paymantsList["page1"].reduce((res, cur) => res + cur.value, 0)

    },
    getCategoryList: state => state.categoryList,
    getPageCount: state => state.pageCount,
    getActivePage: state => {
      let page = state.page;
      return +page.slice(4);
    }
  }
})

function getRandomArbitrary(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}