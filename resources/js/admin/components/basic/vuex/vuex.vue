<template>
  <div class="container-fluid">
      <h1>Test</h1>
      <!-- <h3>Counter: {{$store.state.counter}}</h3> -->
      <h3>Counter: {{counter}}</h3>
      <h3><A/></h3>

      <Button type="info" size="small" @click="change">Change</Button>
  </div>
</template>

<script>
import A from './A'
import {mapGetters} from 'vuex'
export default {
    components:{
        A
    },
    data: function() {
        return{
            localData : "I am data"
        }
    },
    methods: {
        change(){
            //this.$store.commit('changeDataMutation', 1)
            this.$store.dispatch('changeDataAction', 1)
        },
        changeSomething(){
            console.log('running')
        }
    },
    computed : {
        ...mapGetters({
            'counter' : 'getCounter'
        })
    },
    watch: {
        counter(val){
            console.log('counter', val)
            this.changeSomething()
            console.log('data:', this.localData)
        }
    }
}
</script>

<style>

</style>
