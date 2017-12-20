<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link active-class="active" tag="li" to="/portifolio"><a>Portifolio</a></router-link>
          <router-link active-class="active" tag="li" to="/stocks"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End day</a></li>
          <li class="dropdown" :class="{open: dropDownOpen}" @click="dropDownOpen = !dropDownOpen">
            <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save</a></li>
              <li><a href="#" @click="loadData">Load</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    data(){
      return {
        dropDownOpen: false
      }
    },
    computed:{
      funds(){
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay(){
        this.randomizeStocks();
      },
      saveData(){
        const data = {
          funds: this.$store.getters.funds,
          stockPortifolio: this.$store.getters.stockPortifolio,
          stocks: this.$store.getters.stocks
        };

        this.$http.put('data.json', data);
      },
      loadData(){
        this.fetchData();
      }
    }
  }
</script>

<style>

</style>
