<template>
    <nav class="navbar navbar-expand-lg shadow" style="background-color: #e3f2fd;">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">Navbar</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/books">Books</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
                    </li>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </div>
    </nav>
</template>