<template>
    <div>
        <h1 ref="myHook">Hooks</h1>
        <p>Name : {{name}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Nishan'
        }
    },

    beforeCreate(){
        console.log('created before', this.name)
    },

    created(){
        console.log('created', this.name)
    },

    mounted(){
        console.log('mounted', this.$refs.myHook)
    }
}
</script>
