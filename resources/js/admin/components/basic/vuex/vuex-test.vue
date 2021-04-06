<template>
    <div class="container-fluid">
        <h1>{{check}}</h1>
        <span>user: {{user}}</span>
        <div>
            <h1>{{customData}}</h1>
            <button @click.prevent="updateData(change)">Change</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            check : this.$store.state.test,
            user : this.$store.getters.user,
            change: "Changed!"
        }
    },
    methods: {
        updateData(data){
            //alert(data)
            return this.$store.dispatch('changeData', data)
        }
    },
    computed: {
        customData(){
            return this.$store.getters.change
        }
    }
}
</script>
