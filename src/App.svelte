<script>
	import Router from "svelte-spa-router";
	import routes from "./routes";

	let darkModeEnabled = false;
	function toggle() {
		darkModeEnabled = !darkModeEnabled;
		window.document.body.classList.toggle('dark-mode')
		
}

</script>

<!-- This part is always displayed -->

<!-- <div class="jumbotron">
	<h1 class="display-4">Events DB</h1>
	<p class="lead">This is the Frontend of the Events DB</p>

 </div> -->

 <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
	<div class="carousel-inner" >
	  <div class="carousel-item active">
		<img class="d-block w-100" src="https://sdh.edu.sg/wp-content/uploads/2020/10/events.png" alt="First slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="Second slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="https://newretrowave.com/wp-content/uploads/2019/08/a2868120397_10-1.jpg" alt="Third slide">
	  </div>
	</div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a class="navbar-brand" href="#">Events DB</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
  
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
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
		<button on:click={toggle} type="button" class="btn btn-dark"> 
			{#if darkModeEnabled }
			Go light
			{:else}
			Darkmode
			{/if}
		</button>
	 
	</div>
  </nav>


<div class="container mt-3">
	
	
	<!-- Here we load the page depending on the current URL -->
	<Router {routes} />
</div>



<style>
	:global(body) {
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #000d18;
		color: #bfc2c7;
	}
</style>
