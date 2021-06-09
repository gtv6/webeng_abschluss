<script>

    import axios from "axios";
    import { onMount } from "svelte";
    
        var performances = [];
        var totalperformances = 0;
    
        onMount( () => {
            getPerformances();
        })
    
        function getPerformances() {

            
    
            axios.get("http://localhost:8080/events/performances/albums")
            .then( response => {
               performances = response.data;
               totalperformances = performances.length;
               document.getElementById("countnum").innerHTML = totalperformances;
            })
            .catch (error => {
                alert("Error: Datasource not Found! Check if your Backend is running!")
            })
        }
    </script>
    
    
    <h1> All Albums: </h1>
    <div class="counterdiv">
    <div class="counter"><b id="countnum">-</b></div>
    <span>Albums</span>
    </div>

    <div class="d-flex justify-content-center">
        
        <a class="btn btn-secondary filterbutton" href="#/performances" role="button">All Performances</a>
        <a class="btn btn-secondary filterbutton" href="#/songs" role="button">Songs</a>
        
    </div>
    
    <table class="table"> 
        <thead>
            <tr>
                <th>Bandname</th>
                <th>Album</th>
            </tr>
        </thead>
    
        <tbody>
            
            {#each performances as performance }
                <tr>
                    
                    <td>{performance.bandname}</td>
                    <td>{performance.album}</td>
                </tr> 
            {/each}
                
            
        </tbody>
    </table>
    
    <style>
    
    </style>