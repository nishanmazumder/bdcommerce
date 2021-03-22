export default {
    data() {
        return {

        }
    },

    methods: {



        //Axios
        // async callApi(method, url, dataObj) {
        //     try {
        //         return await axios({
        //             method: method,
        //             url: url,
        //             data: dataObj
        //         })
        //     } catch (e) {
        //         console.log(e)
        //         return e.response
        //     }
        // },

        // xhr(method, url, dataObj, callBack) {

        //     axios({
        //         method: method,
        //         url: url,
        //         data: dataObj
        //       })

        //     //   .then(response=>{
        //     //       callBack(response)
        //     //   })

        //     .then(response => {
        //         if(response.status == 201){
        //             //console.log(response)
        //         }
        //     })

        //     .catch(error => {
        //         console.log(error)
        //     })
        // },

        //Notification
        info (desc, title="Info") {
            this.$Notice.info({
                title: title,
                desc: desc
            });
        },
        success (desc, title="success") {
            this.$Notice.success({
                title: title,
                desc: desc
            });
        },
        warning (desc, title="warning") {
            this.$Notice.warning({
                title: title,
                desc: desc
            });
        },
        error (desc, title="error") {
            this.$Notice.error({
                title: title,
                desc: desc
            });
        }
    }
}
