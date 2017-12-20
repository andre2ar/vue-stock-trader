<template>
  <div>
    <h1>Welcome to the trader!</h1>
    <p>Your funds: {{funds | currency}}</p>
  </div>
</template>

<script>
  export default {
    computed:{
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script>

<style>

</style>
