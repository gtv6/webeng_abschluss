<script>

    import axios from "axios";

    let performance = {
        bandname: null,
        album: null,
        song: null,
    };

    function createSong(){
    axios.post("http://localhost:8080/events/songs", performance)
        .then(response => {
            alert("Band: " +performance.bandname+ "\n Song: " +performance.song+ "\n Duration" +performance.duration+ "\n Created!")
            performance.bandname = null;
            performance.song = null;
            performance.duration = null;
        })
    }

    function createAlbum(){
    axios.post("http://localhost:8080/events/albums", performance)
        .then(response => {
            alert("Band: " +performance.bandname+ "\n Song: " +performance.album+ "\n Number of Performances" +performance.numperformances+ "\n Created!")
            performance.bandname = null;
            performance.album = null;
            performance.numperformances = null;
        })
    }

</script>

<h1>Create a new Performance</h1>
<p>
</p>

<div class="col-sm">
  <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-dark filterbutton" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Create Song 
            </button>
          </h5>
        </div>
    
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
              
            <form>
                <div class="mb-3">
                    <label class="form-label" for="">Bandname</label>
                    <input class="form-control" type="text" bind:value={performance.bandname}>
                </div>
            
                <div class="mb-3">
                    <label class="form-label" for="">Song</label>
                    <input class="form-control" type="text" bind:value={performance.song}>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="">Duration</label>
                    <input class="form-control" type="text" bind:value={performance.duration}>
                </div>
            
                <button on:click={createSong} class="btn btn-dark">Send!</button>
            </form>
            
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-dark filterbutton collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Create Album
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
              
            <form>
                <div class="mb-3">
                    <label class="form-label" for="">Bandname</label>
                    <input class="form-control" type="text" bind:value={performance.bandname}>
                </div>
            
                <div class="mb-3">
                    <label class="form-label" for="">Album</label>
                    <input class="form-control" type="text" bind:value={performance.album}>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="">Number of Performances</label>
                    <input class="form-control" type="number" bind:value={performance.numperformances}>
                </div>

                <button on:click={createAlbum} class="btn btn-dark">Send!</button>

          </div>
        </div>
      </div>
     
        

    </div>
</div>


