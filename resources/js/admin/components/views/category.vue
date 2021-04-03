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
                            <tr v-for="(category , i) in categoriess" :key="i">
                                <td>{{i + 1}}</td>
                                <td>{{category.category_name}}</td>
                                <td><img class="nm_cat_image" :src="`/uploads/${category.category_image}`" alt=""></td>
                                <td>
                                    <Button type="info" size="small" @click="showCategoryModal(category)">Edit</Button>
                                    <Button type="error" size="small" @click="showDeleteAlert(category)">Delete</Button>
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

            <Upload ref="addImage" :on-success="handleSuccess" :show-upload-list="false" :format="['jpg','jpeg','png']"
                :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" type="drag"
                :headers="{'x-csrf-token' : token, 'X-Requested-With': 'XMLHttpRequest'}" action="/api/cat/upload">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>

            <div class="demo-upload-list" v-if="data.cat_img">
                <img :src="`/uploads/${data.cat_img}`" alt="Category Image">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-trash-outline" @click="deleteImg"></Icon>
                </div>
            </div>

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

            <Upload ref="editUpload" v-show="ifImageAvailable" :disabled="uploadDisable" :on-success="handleSuccess"
                :show-upload-list="false" :format="['jpg','jpeg','png']" :max-size="2048"
                :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" type="drag"
                :headers="{'x-csrf-token' : token, 'X-Requested-With': 'XMLHttpRequest'}" action="/api/cat/upload">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>

            <div class="demo-upload-list" v-if="editData.cat_img">
                <img :src="`/uploads/${editData.cat_img}`" alt="Category Image">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-trash-outline" @click="deleteImg(false)"></Icon>
                </div>
            </div>

            <div slot="footer">
                <Button type="default" @click="closeEditmodal">Close</Button>
                <Button type="primary" @click="editCategory" :disabled="isAdding"
                    :loading="isAdding">{{isAdding? "Editing.." : "Update"}}</Button>
            </div>
        </Modal>


        <Modal v-model="deleteAlert" title="Alert!" width="300">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>Delete confirmation</span>
            </p>
            <div style="text-align:center">
                <p>This Data will be delete forever!</p>
                <p>Will you delete it?</p>
            </div>
            <div slot="footer">
                <Button type="error" long @click="deleteCategory" :disabled="isDeleting"
                    :loading="isDeleting">{{isDeleting? "Deleting.." : "Delete"}}</Button>
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
                    category_name: '',
                    cat_img: ''
                },
                addModal: false,
                isAdding: false,
                categoriess: [],
                editModal: false,
                editData: {
                    category_name: '',
                    cat_img: ''
                },
                isDeleting: false,
                deleteAlert: false,
                deleteData: {},
                token: '',
                uploadDisable: false,
                ifImageAvailable: false,
                ifeditImage: false
            }
        },

        methods: {
            //Category Add
            async addCategory() {
                if(this.data.category_name.trim() == ''){this.error("Category name is required!")}
                if(this.data.cat_img.trim() == ''){this.error("Category image is required!")}

                const res = await this.callApi('post', '/api/cat', this.data)

                if (res.status === 201) {
                    this.success("Category Added!")
                    this.addModal = false
                    this.getCategory()
                    this.data.category_name = ''
                    this.data.cat_img = ''
                    //this.uploadDisable = false
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
            async editCategory() {
                if(this.editData.category_name.trim() == ''){this.error("Category name is required!")}
                if(this.editData.cat_img.trim() == ''){this.error("Category image is required!")}
                const res = await this.callApi('patch', '/api/cat/edit/', this.editData)

                if (res.status === 200) {
                    this.success("Category Edited")
                    this.getCategory()
                    this.editModal = false
                } else if (res.status === 422) {
                    this.error(res.data.errors.category_name[0])
                }
            },

            showCategoryModal(category) {
                let obj = {
                    id: category.id,
                    category_name: category.category_name,
                    cat_img: category.category_image
                }

                this.editData = obj
                this.editModal = true
                this.ifeditImage = true
            },

            closeEditmodal() {
                this.ifeditImage = false
                this.editModal = false

            },

            //Category Delete
            async deleteCategory() {
                //if (!confirm('Are your sure?')) return
                const res = await this.callApi('delete', '/api/cat/' + this.deleteData.id)

                if (res.status === 200) {
                    this.warning(res.data)
                    this.getCategory()
                } else {
                    this.error('Something went wrong!')
                }

                this.deleteAlert = false
            },

            showDeleteAlert(category) {
                this.deleteAlert = true
                this.deleteData = category
            },

            // Image upload
            async deleteImg(isAdd = true) {
                let image

                if (!isAdd) {
                    this.ifImageAvailable = true
                    image = this.editData.cat_img
                    this.editData.cat_img = ''
                    this.$refs.editUpload.clearFiles()
                } else {
                    image = this.data.cat_img
                    this.data.cat_img = ''
                    //this.uploadDisable = true
                }

                const res = await this.callApi('post', '/api/cat/image_delete', {
                    imageName: image
                })

                if (res.status != 200) {
                    this.data.cat_img = image
                    this.error('Somthing went wrong!')
                }
            },

            handleSuccess(res, file) {
                if(this.ifeditImage){
                    return this.editData.cat_img = res
                }

                this.data.cat_img = res
                this.success(res + ' Uploaded!')
                //this.uploadDisable = true
            },

            // Image Notification
            handleRemove(file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize(file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            }
        },

        mounted: function () {
            this.token = window.Laravel.csrfToken
            this.getCategory()
        }
    }

</script>

<style scoped>
    .nm_cat_image {
        width: 100px;
    }

    .nm-table td {
        vertical-align: middle;
        text-align: center;
    }

    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

    .demo-upload-list img {
        width: 100%;
        height: 100%;
    }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

</style>
