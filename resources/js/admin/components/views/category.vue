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
                                    <Button type="info" size="small" @click="showCategoryModal(category)">Edit</Button>
                                    <Button type="error" size="small"
                                        @click="deleteCategory(category.id)">Delete</Button>
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

        <!-- Category Edit-->
        <Modal v-model="editModal" title="Edit Category" :mask-closable="false" :closable="false"
            class-name="vertical-center-modal">

            <Input v-model="editData.category_name" placeholder="Edit Category" style="width: 100%" />


            <div slot="footer">
                <Button type="default" @click="editModal=false">Close</Button>
                <Button type="primary" @click="editCategory" :disabled="isAdding"
                    :loading="isAdding">{{isAdding? "Editing.." : "Update"}}</Button>
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

        data: function () {
            return {
                data: {
                    category_name: ''
                },
                addModal: false,
                isAdding: false,
                categoriess: [],
                editModal: false,
                editData: {
                    category_name: ''
                }
            }
        },

        methods: {
            //Category Add
            async addCategory() {
                const res = await this.callApi('post', '/api/cat', this.data)

                if (res.status === 201) {
                    this.success("Category Added")
                    this.addModal = false
                    this.getCategory()
                    this.data.category_name = ''
                } else if (res.status === 422) {
                    this.error(res.data.errors.category_name[0])
                }
            },

            //Category List
            async getCategory() {
                const res = await this.callApi('get', '/api/cat')

                if (res.status == 200) {
                    this.categoriess = res.data
                } else {
                    this.error('No data founds!')
                }
            },

            //Category Edit
            async editCategory(){
                const res = await this.callApi('patch', '/api/cat/edit/', this.editData)

                if (res.status === 200) {
                    this.success("Category Edited")
                    this.editModal = false
                    this.getCategory()
                } else if (res.status === 422) {
                    this.error(res.data.errors.category_name[0])
                }
            },

            showCategoryModal(category){
                let obj = {
                    id : category.id,
                    category_name : category.category_name
                }

                this.editData = obj
                this.editModal = true
            },

            //Category Delete
            async deleteCategory($cat) {
                const res = await this.callApi('delete', '/api/cat/' + $cat)

                if(res.status === 200){
                    this.warning(res.data)
                    this.getCategory()
                }else if (res.status === 422) {
                    this.error(res.data.errors.category_name[0])
                }
            }
        },

        mounted: function () {
            this.getCategory()
        }
    }

</script>
