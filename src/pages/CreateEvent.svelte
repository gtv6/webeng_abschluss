<script>

    import axios from "axios";

    let event = {
        name: null,
        veranstalter: ""
    };

    function createEvent(){
    axios.post("http://localhost:8080/events/events", event)
        .then(response => {
            alert("Event: " +event.name+ " With organizer: " +event.veranstalter+ " Created" )
            event.name = "";
            event.veranstalter = null;
        })
    }
</script>

<h1>Create a new event</h1>

<form>
    <div class="mb-3">
        <label class="form-label" for="">Eventname</label>
        <input class="form-control" type="text" bind:value={event.name}>
    </div>

    <div class="mb-3">
        <label class="form-label" for="">Organizer</label>
        <input class="form-control" type="text" bind:value={event.veranstalter}>
    </div>

    <button on:click={createEvent} class="btn btn-dark">Create Event</button>
</form>

