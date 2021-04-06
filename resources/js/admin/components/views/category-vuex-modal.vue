<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category</h1>

            <Button type="primary" @click="addModal = true" icon="md-add">Add Category</Button>
        </div>

        <!-- Content Row -->
        <List/>

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

        <!-- Item Delete -->
        <Delete />


    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import List from '../modal/list.vue'
    import Delete from '../modal/delete.vue'
    export default {
        components: {
            List,
            Delete
        },
        data: function () {
            return {
                data: {
                    category_name: '',
                    cat_img: ''
                },
                addModal: false,
                isAdding: false,
                editModal: false,
                editData: {
                    category_name: '',
                    cat_img: ''
                },
                token: '',
                uploadDisable: false,
                ifImageAvailable: false,
                ifeditImage: false
            }
        },

        methods: {
            //Category Add
            async addCategory() {
                if (this.data.category_name.trim() == '') {
                    this.error("Category name is required!")
                }
                if (this.data.cat_img.trim() == '') {
                    this.error("Category image is required!")
                }

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
            getCategory() {
                const setList = {
                    category_name: '',
                    cat_img: '',
                    dataUrl : '/api/cat'
                }

                this.$store.commit('setListItem', setList)
            },

            //Category Edit
            async editCategory() {
                if (this.editData.category_name.trim() == '') {
                    this.error("Category name is required!")
                }
                if (this.editData.cat_img.trim() == '') {
                    this.error("Category image is required!")
                }
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
            showDeleteAlert(category) {
                const deleteObj = {
                    data: category.id,
                    dataUrl: '/api/cat/',
                    deleteAlert: true,
                }

                this.$store.commit('setDeleteModalObj', deleteObj)
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

            // Image Notification
            handleSuccess(res, file) {
                if (this.ifeditImage) {
                    return this.editData.cat_img = res
                }

                this.data.cat_img = res
                this.success(res + ' Uploaded!')
                //this.uploadDisable = true
            },

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

        computed: {
            ...mapGetters(['deleteData'])
        },

        mounted: function () {
            this.token = window.Laravel.csrfToken
            this.getCategory()
        },

        watch: {
            // deleteData(obj){
            //     //console.log(obj)
            //     if(obj.isDelated){
            //         this.getCategory()
            //     }
            // }
        }
    }

</script>

<style scoped>
    .vertical-center-modal {
        top: 200px;
    }

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
