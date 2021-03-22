<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category</h1>
            <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" data-toggle="modal"
                data-target="#addCategory"><i class="fas fa-download fa-sm text-white-50"></i> Add Category</a> -->

            <Button type="primary" @click="addModal = true" icon="md-add">Add Category</Button>
        </div>

        <!-- Content Row -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">All Categories</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                            </tr>
                            <tr>
                                <td>Garrett Winters</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td>63</td>
                                <td>2011/07/25</td>
                                <td>$170,750</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





        <Modal v-model="addModal" title="Add Category" :mask-closable="false" :closable="false"
            class-name="vertical-center-modal">

            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>


            <div slot="footer">
                <Button type="default" @click="addModal=false">Close</Button>
                <Button type="primary" @click="addCategory">Add</Button>
            </div>
        </Modal>







        <!-- Category Add-->
        <div class="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="" method="post" action="">
                            <!-- {!! Form::open(['url' => 'category', 'method' => 'POST', 'files'=>true]) !!} -->

                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <input type="text" name="category_name" class="form-control form-control-user"
                                        placeholder="Category Name" value="">
                                    <!-- <small class="text-danger">{{$errors->has('category_name')?$errors->first('category_name'):''}}</small> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <!-- {{-- <input type="text" value="category descrioption" name="calegory_des"> --}} -->
                                    <textarea class="form-control form-control-user" name="calegory_des" rows="3"
                                        placeholder="Category Description"></textarea>
                                    <!-- <small class="text-danger">{{$errors->has('calegory_des')?$errors->first('calegory_des'):''}}</small> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <input type="file" class="form-control-file form-control-user" name="cat_img">
                                    <!-- <small class="text-danger">{{$errors->has('cat_img')?$errors->first('cat_img'):''}}</small> -->
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <select name="pub_status" class="form-control form-control-user">
                                        <option value="0">Publish</option>
                                        <option value="1">Unpublish</option>
                                    </select>
                                    <!-- <small class="text-danger">{{$errors->has('pub_status')?$errors->first('pub_status'):''}}</small> -->
                                </div>
                            </div>

                            <button class="btn btn-primary" type="submit">Submit</button>
                        </form>
                        <!-- {!! Form::close() !!} -->
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">
                            Cancel
                        </button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
    .vertical-center-modal {
        top: 200px;
    }

</style>


<script>
    export default {

        data() {
            return {
                data: {
                    category_name: ''
                },
                addModal: false,
                isAdding: false
            }
        },

        methods: {
            addCategory() {
                if (this.data.category_name.trim() == '') return this.error('Category name require')
            }
        }


        // async created() {
        //     const res = await this.callApi('post', '/cat', {
        //         catName: 'Test'
        //     });

        //     if (res.status == 200) {
        //         console.log(res);
        //     } else {
        //         console.log(res)
        //         console.log('running')
        //     }

        // }
    }

</script>
