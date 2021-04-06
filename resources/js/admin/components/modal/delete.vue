<template>
    <Modal :value="deleteData.deleteAlert" :mask-closable="false" :closable="false" title="Alert!" width="300">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>This Data will be delete forever!</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="primary" @click="closeModal">Close</Button>
            <Button type="error" @click="deleteCategory" :disabled="isDeleting"
                :loading="isDeleting">{{isDeleting? "Deleting.." : "Delete"}}</Button>
        </div>
    </Modal>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data: function () {
            return {
                isDeleting: false
            }
        },
        methods: {
            async deleteCategory() {
                //if (!confirm('Are your sure?')) return
                const res = await this.callApi('delete', this.deleteData.dataUrl + this.deleteData.data)

                if (res.status === 200) {
                    this.warning(res.data)
                    this.$store.commit('setDeleteModal', true)
                } else {
                    this.error('Something went wrong!')
                    this.$store.commit('setDeleteModal', false)
                }
            },

            closeModal(){
                this.$store.commit('setDeleteModal', false)
            }
        },
        computed: {
            ...mapGetters({
                'deleteData' : 'deleteData'
            })
        }
    }

</script>
