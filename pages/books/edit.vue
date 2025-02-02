<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Add Book 
                    <NuxtLink to="/books" class="btn btn-danger float-end">Back</NuxtLink>
                </h4>
            </div>
            <div class="card-body">

                {{ this.errorList }}

                <div class="loading" v-if="isLoading">
                    <Loading :title="isLoadingText"/>
                </div>

                <div v-else>
                    <form @submit.prevent="saveBook">
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {
    Name: "bookCreate",
    data() {
        return {
            book: {
                name: '',
                author: '',
                publish_date: '',
            },
            isLoading: false,
            isLoadingText: 'Loading.....',
            // errorList: {}
        }
    },
    methods: {
        saveBook(){
            // alert("I am Here");
            this.isLoading = true,
            this.isLoadingText = "Saving"

            var myThis = this;
            axios.post('http://127.0.0.1:8000/api/books', this.book).then(res => {
                console.log(res,'res');
                alert(res.data.message);


                this.book.book_name = '';
                this.book.author = '';
                this.book.publish_date = '';

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