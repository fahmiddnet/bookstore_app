<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>List Of Books
                    <NuxtLink to="/books/create" class="btn btn-danger float-end">Add Book</NuxtLink>
                </h4>
            </div>
            <div class="card-body">
                <div v-if="isLoading">
                    <Loading title="Loading..." />
                </div>
                <div v-else>
                    <table id="bookTable" class="table table-striped">
                        <thead class="table-secondary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Author</th>
                                <th scope="col">Publish Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(book,index) in books.data" :key="index">
                                <th>{{ book.id }}</th>
                                <td>{{ book.name }}</td>
                                <td>{{ book.author }}</td>
                                <td>{{ book.publish_date }}</td>
                                <td>
                                    <NuxtLink :to="`/books/${book.id}`" class="btn btn-success btn-sm mx-2">Edit
                                    </NuxtLink>
                                    <button type="button" @click="deleteBook($event, book.id)"
                                        class="btn btn-danger btn-sm mx-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        <!-- @click="fetchBook(link.url)" -->
        <div class="container">
            <div class="col-12 text-center">
                <div v-if="books.links" class="flex justify-center items-center space-x-2 mt-6">
                    <button v-for="(link, index) in books.links" :key="index" @click="fetchBook(link.url)"
                        :disabled="!link.url" class="btn btn-sm m-1 px-2 py-1 transition-all duration-200" :class="{
                            'btn-primary': link.active,
                            'btn-secondary': !link.active && link.url,
                            'btn-light': !link.url
                        }" v-html="link.label">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import axios from 'axios';


export default {
    Name: "books",
    data() {
        return {
            books: {},
            currentPage: 1,  // Current page
            totalPages: 1,   // Total pages (received from API)
            perPage: 10,     // Number of items per page
            isLoading:true,
        }
    },
    
    
    async mounted() {
        let table = new DataTable('#bookTable');
       await this.fetchBook();
    },


    methods: {
        async fetchBook(url = "http://127.0.0.1:8000/api/books") { 
            this.isLoading = true;
            try {
                const response = await axios.get(url);
                this.books = response.data; 
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                this.isLoading = false;
            }
        },

        //Delete books
        deleteBook(event, bookId){

            event.target.innerText = 'Deleteing';
            if(confirm('Are you sure, you want to delete ?')){
                axios.delete(`http://127.0.0.1:8000/api/books/${bookId}`).then(res => {
                    event.target.innerText = 'Delete';
                    this.fetchBook();
                });
            }

        }
    },
}


</script>


<style>

</style>