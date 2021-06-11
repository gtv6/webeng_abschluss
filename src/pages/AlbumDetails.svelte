<script>
import axios from "axios";


    export let params = {};

  

    let albumId 

    let album = {};
    let deezer = {};
    
    $: {
        albumId = params.id; //Wird immer ausgeführt, sobald sich Var Inhalt ändert (Braucht man damit ID im Titel responsive ist)
        getAlbum();
    }
    
   function getAlbum() {
       axios.get( "http://localhost:8080/events/albums/" + albumId)
            .then( response => {
                album = response.data;
                getDeezer();
            })
            .catch (error => {
            alert("Fehler")
        })
   }


   function getDeezer() {
       /* axios.get("https://api.deezer.com/search?q=album:%22'." + album.album + ".'%22%20artist:%22'." + album.bandname + ".'%22") */
       axios.get("https://api.deezer.com/search?q=album:%22%27.mediterranea.%27%22%20artist:%22%27.irama.%27%22", {withCredentials:true},
       {headers: {
           'mode':'no-cors',
        "Access-Control-Allow-Origin": "*",
           'Host' : 'api.deezer.com',
            'Origin': '',
       }
       })
            .then( response => {
                deezer = response.data;
                console.log("hallo");
            })
            
   }
</script>

<h1>Details for Album ({albumId})</h1>

<p>Album: {album.album}</p>

<div class="card albumcontainer mb-3" >
    <!-- <img class="card-img-top" src="https://nofilmschool.com/sites/default/files/styles/article_wide/public/alien_1.jpg?itok=ABrt4pIs" alt="Card image cap"> -->
    <div class="card-body">
      <p class="card-text"></p>
     
          
          <tbody>
            <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <table class="table">
                    <tr>
                        
                        <td>Band: </td>
                        <td>{album.bandname}</td>
                        
                        
                      </tr>
                      <tr>
                        
                        <td>Album: </td>
                        <td>{album.album}</td>
                        
                      </tr>

                      <tr>
                        
                        <td>Performances: </td>
                        <td>{album.numperformances}</td>
                        
                      </tr>
                      <tr>
                    </table>
                  </div>
                  <div class="col-sm">
                    <img class="card-img-top" src="https://api.deezer.com/search?q=album:%22%27.mediterranea.%27%22%20artist:%22%27.irama.%27%22" alt="Card image cap">
                    
                  </div>
                  
                </div>
              </div>
            
            
          </tbody>
      
    

     

      

    </div>
</div>
 

