<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/inc/header'
import Footer from './components/inc/footer'
    export default {
        components: {
            Header,
            Footer
        }
    }

</script>
