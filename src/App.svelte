<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<!-- This part is always displayed -->

<div class="jumbotron">
	<h1 class="display-4">Events DB</h1>
	<p class="lead">This is the Frontend of the Events DB</p>

 </div>

 

<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="#/">Festival DB</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#/demo">Demo</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#/persons">Persons</a>
				</li>
				
				<li class="nav-item">
					<a class="nav-link" href="#/create-person">Create Person</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
	<div class="carousel-inner" >
	  <div class="carousel-item active">
		<img class="d-block w-100" src="https://sdh.edu.sg/wp-content/uploads/2020/10/events.png" alt="First slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="Second slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="..." alt="Third slide">
	  </div>
	</div>
  </div>

<div class="container mt-3">
	
	
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>

<style>
</style>
