<script>

    import axios from "axios";
    import { onMount } from "svelte";
    
        let events = [];
    
        onMount( () => {
            getEvents();
        })
    
        function getEvents() {
    
            axios.get("http://localhost:8080/events/events")
            .then( response => {
               events = response.data;
            })
            .catch (error => {
                alert("Error: Datasource not Found! Check if your Backend is running!")
            })
        }
    </script>
    
    
    <h1> All events and organizers: </h1>
    
    <table class="table"> 
        <thead>
            <tr>
                <th>Name</th>
                <th>Organizer</th>
            </tr>
        </thead>
    
        <tbody>
            
            {#each events as event }
                <tr>
                    
                    <td>{event.name}</td>
                    <td>{event.veranstalter}</td> 
                </tr> 
            {/each}
                
            
        </tbody>
    </table>