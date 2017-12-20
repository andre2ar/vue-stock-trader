import Vue from "vue";

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if(data){
        console.log(data);
        const portfolio = {
          stockPortifolio: data.stockPortifolio,
          funds: data.funds
        };

        commit("SET_STOCKS", data.stocks);
        commit("SET_PORTFOLIO", portfolio);
      }
    });
};
