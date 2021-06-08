<script>

    import axios from "axios";
    import { onMount } from "svelte";
    
        var performances = [];
        var totalperformances = 0;
    
        onMount( () => {
            getPerformances();
        })
    
        function getPerformances() {

            
    
            axios.get("http://localhost:8080/events/performances")
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
    
    
    <h1> All Performances: </h1>
    <div class="counterdiv">
    <div class="counter"><b id="countnum">-</b></div>
    <span>Performances</span>
    </div>
    
    <table class="table"> 
        <thead>
            <tr>
                <th>Bandname</th>
                <th>Album</th>
                <th>Song</th>
            </tr>
        </thead>
    
        <tbody>
            
            {#each performances as performance }
                <tr>
                    
                    <td>{performance.bandname}</td>
                    <td>{#if performance.album == undefined}
                        -
                        {:else}
                        {performance.album}                        
                        {/if}

                    </td> 
                    <td>{#if performance.song == undefined}
                        -
                        {:else}
                        {performance.song}                        
                        {/if}</td> 
                </tr> 
            {/each}
                
            
        </tbody>
    </table>
    
    <style>
    
    </style>