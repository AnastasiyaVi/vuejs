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

      //реактивность - для изменения состояния 
      //Vue.set(state.paymantsList, 0, state.paymantsList);
      //или
      //state.paymantsList = [...state.paymantsList];
    },

    setCategoryList(state, payload) {
      state.categoryList = payload;
    },

    updateCategory(state, payload) {
      console.log("mutation update category = " + payload);
      Vue.set(state.categoryList, state.categoryList.length, payload);
    },

    updateData(state, payload) {
      state.paymantsList[state.page] = state.paymantsList[state.page].map(item => {
        return item.id === payload.id
          ? payload
          : item
      });
      state.paymantsList[state.page] = [...state.paymantsList[state.page]]

    },

    deleteDataFromList(state, payload) {
      const data = state.paymantsList[state.page].filter(item => item.id != payload.id);
      state.paymantsList[state.page] = data;
      Vue.set(state.paymantsList, state.page, data);

    }
  },

  actions: {
    addData({ commit }, payload) {
      console.log(commit, payload)
    },
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
              data: "01.12.2021",
              category: state.categoryList[randomCategory],
              value: getRandomArbitrary(1000, 5000),
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
    },
    getDataById: state => id => {
      return state.paymantsList[state.page].filter(item => item.id === id)
    },
    getChartData: state => {
      let map = {};
      if (state.paymantsList[state.page]) {
        map = state.paymantsList[state.page].reduce((map, obj) => {
          if (map[obj.category] == undefined) {
            map[obj.category] = obj.value;
          } else {
            map[obj.category] += obj.value;
          }
          return map;
        }, {});
      }
      const label = [];
      const data = [];
      const color = []
      for (let key in map) {
        label.push(key);
        data.push(map[key]);
        color.push(getRandomColor());
      }

      const ob = {
        labels: label,
        datasets: [
          {
            backgroundColor: color,
            data: data
          }
        ]
      };
      return ob;
    }
  }
})

function getRandomArbitrary(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}