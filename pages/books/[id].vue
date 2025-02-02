<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Book 
                    <NuxtLink to="/books" class="btn btn-danger float-end">Back</NuxtLink>
                </h4>
            </div>
            <div class="card-body">

                <div class="loading" v-if="isLoading">
                    <Loading :title="isLoadingText"/>
                </div>

                <div v-else>
                    <form @submit.prevent="updateBook">
                        <div class="mb-3">
                            <label for="book_name" class="form-label">Name</label>
                            <input type="text" v-model="book.name" class="form-control" id="book_name">
                        </div>
                        <div class="mb-3">
                            <label for="author" class="form-label">Author</label>
                            <input type="text" v-model="book.author" class="form-control" id="author">
                        </div>
                        <div class="mb-3">
                            <label for="publish_date" class="form-label">Publish_date</label>
                            <input type="date" v-model="book.publish_date" class="form-control" id="publish_date">
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {
    Name: "bookEdit",
    data() {
        return {
            bookId: '',
            book: { },
            isLoading: false,
            isLoadingText: 'Loading.....',
            // errorList: {}
        }
    },
    mounted() {
        this.bookId = this.$route.params.id,
        // alert(this.bookId);

        this.getBook(this.bookId);
    },
    methods: {

        getBook(bookId) {

            this.isLoading = true;
            axios.get(`http://127.0.0.1:8000/api/books/${bookId}`).then(res => {

                this.isLoading = false;
                this.book = res.data;
            });
        },

        updateBook(){
            // alert("I am Here");
            this.isLoading = true,
            this.isLoadingText = "Updating..."

            var myThis = this;
            axios.put(`http://127.0.0.1:8000/api/books/${this.bookId}`, this.book).then(res => {
                console.log(res,'res');
                alert(res.data.message);


                this.book.book_name = '';
                this.book.author = '';
                this.book.publish_date = '';

                this.$router.push('/books');

                this.isLoading = false;
                this.isLoadingText = "Loading";

            }) .catch(function(error) {
                console.log(error,'error');
                
                if(error.response){
                    if(error.response.status == 422){
                        myThis.errorList = error.response.data.error;
                        this.isLoading = false;
                    }
                }
            }) 

        }
    },
}


</script>

<style></style>