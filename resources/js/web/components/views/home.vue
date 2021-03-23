<template>
    <div>
        <Banner />
        <Offer />
        <Feature />
        <Bundle />
        <Product />
        <Service />
    </div>
</template>

<script>
    import Banner from '../inc/banner'
    import Offer from '../inc/offer'
    import Feature from '../inc/feature'
    import Bundle from '../inc/bundle'
    import Product from '../inc/product'
    import Service from '../inc/service'
    export default {
        components: {
            Banner,
            Offer,
            Feature,
            Bundle,
            Product,
            Service
        }
    }

</script>

<style>

</style>
