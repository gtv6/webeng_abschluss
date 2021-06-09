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
		<img class="d-block w-100" src="/images/banner/80_02.jpg" alt="First slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="/images/banner/stage01.png" alt="Second slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="/images/banner/stage02.jpg" alt="Third slide">
	  </div>
	  <div class="carousel-item">
		<img class="d-block w-100" src="/images/banner/wave_01.jpg" alt="Third slide">
	  </div>
	</div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
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
				<a class="nav-link" href="#/create-event">Create Event</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#/events">Get Events</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#/create-performance">Create Performance</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#/performances">Get Performances</a>
			</li>
		</ul>
		<button on:click={toggle} type="button" class="btn btn-dark" > 
			{#if darkModeEnabled }
			Go bright!
			{:else}
			The Dark side!
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
		background-color: #181a1b;
		color: #bfc2c7;
	}
</style>
