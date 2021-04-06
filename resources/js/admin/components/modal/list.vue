<template>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">All Categories</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered nm-table" id="" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr v-for="(item , i) in listObj.items" :key="i">
                                <td>{{i + 1}}</td>
                                <td>{{item.category_name}}</td>
                                <td><img class="nm_cat_image" :src="`/uploads/${item.category_image}`" alt=""></td>
                                <td>
                                    <Button type="info" size="small" @click="showCategoryModal(item)">Edit</Button>
                                    <Button type="error" size="small" @click="showDeleteAlert(item)">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    // data: function(){
    //     return{
    //         items : []
    //     }
    // },

    methods: {
         async getCategory() {
                const res = await this.callApi('get', setList.dataUrl)

                if (res.status == 200) {
                    //this.categoriess = res.data
                    this.$store.commit('getList', res.data)
                } else {
                    this.error('No data founds!')
                }

            },
    },
    computed: {
            ...mapGetters({
                'listObj' : 'listObj'
            })
        }
}
</script>
