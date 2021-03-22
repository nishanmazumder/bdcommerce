<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category</h1>

            <Button type="primary" @click="addModal = true" icon="md-add">Add Category</Button>
        </div>

        <!-- Content Row -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">All Categories</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <!-- <tr v-for="(category, i) in categoriess" :key="i" v-if="categoriess.length"> -->
                            <!-- <tr v-for="category in data.categories" :key="category.id"> -->
                            <tr v-for="(category , i) in categoriess" :key="i">
                                <td>{{i + 1}}</td>
                                <td>{{category.category_name}}</td>
                                <td>Des</td>
                                <td>Img</td>
                                <td>
                                    <Button type="info" size="small">Edit</Button>
                                    <Button type="error" size="small" @click="deleteCategory(category.id)">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Category Add-->
        <Modal v-model="addModal" title="Add Category" :mask-closable="false" :closable="false"
            class-name="vertical-center-modal">

            <Input v-model="data.category_name" placeholder="Add Category" style="width: 100%" />


            <div slot="footer">
                <Button type="default" @click="addModal=false">Close</Button>
                <Button type="primary" @click="addCategory" :disabled="isAdding"
                    :loading="isAdding">{{isAdding? "Adding.." : "Add"}}</Button>
            </div>
        </Modal>

    </div>
</template>

<style>
    .vertical-center-modal {
        top: 200px;
    }

</style>


<script>
    export default {

        data: function() {
            return {
                data: {
                    category_name: ''
                },
                addModal: false,
                isAdding: false,
                categoriess: [],
                testItem: [
                    {
                        id: 1,
                        name : "Nishan",
                        age: 28
                    },
                    {
                        id: 2,
                        name : "A",
                        age: 30
                    }
                ]
            }
        },

        methods: {
            // async addCategory() {
            //     if (this.data.category_name.trim() == '') return this.error('Category name require')

            //     const res = await this.callApi('post', '/cat', this.data)

            //     if (res.status === 201) {
            //         this.success("Category Added")
            //         this.addModal = false

            //     } else {
            //         this.error()
            //     }
            // },

            addCategory() {
                if (this.data.category_name.trim() == '') return this.error('Category name require')

                axios.post('/api/cat', this.data)

                .then(Response=>{
                    if(Response.status === 201){
                        //console.log(Response)
                        this.success("Category Added")
                        this.addModal = false
                        this.getCategory()
                    }
                })

                .catch(error=>{
                    console.log(error)
                })
            },

            getCategory(){
                axios.get('/api/cat')

                .then(Response=>{
                    if(Response.status === 200){
                        this.categoriess = Response.data
                        //console.log(Response.data)
                    }
                })

                .catch(error=>{
                    console.log(error)
                })
            },

            deleteCategory($cat){
                axios.delete('/api/cat/'+$cat)

                .then(Response=>{
                    if(Response.status === 200){
                        this.warning("Category Deleted")
                        this.getCategory()
                    }
                })

                .catch(error=>{
                    console.log(error)
                })
            }



        },

        mounted: function(){
            this.getCategory()
        }

        // async created() {
        //     const res = await this.callApi('get', '/cat')

        //     if (res.status == 200) {
        //         this.categoriess = res.data
        //         console.log(res.data)
        //     } else {
        //         this.error()
        //     }
        // }
    }

</script>
