<script>
import axios from "axios";


    export let params = {};

  

    var albumId 

    var album = {};
    var deezer = {};
    var coverlink;
    var bandname;
    var albumname;
    
    $: {
        albumId = params.id; //Wird immer ausgeführt, sobald sich Var Inhalt ändert (Braucht man damit ID im Titel responsive ist)
        getAlbum();
        
    }
    
   function getAlbum() {
       axios.get( "http://localhost:8080/events/albums/" + albumId)
            .then( response => {
                album = response.data;
                bandname = JSON.stringify(album.bandname);
                albumname = JSON.stringify(album.album);
                bandname = bandname.replace(/['"]+/g, '');
                albumname = albumname.replace(/['"]+/g, '');
                console.log(bandname);
                getAlbumArt();
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
        
        function getAlbumArt() {
   

            
        console.log("hallo");
        albumArt( bandname, {album: albumname, size: 'big'}, ( error, response ) => {
            console.log( response )
            coverlink = response;

        })

        
        }
   
</script>

<h1>Details for Album ({albumId})</h1>

<p>Album: {album.album}</p>

<div class="card albumcontainer mb-3" >
   
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
                    <img class="card-img-top" src="{coverlink}" alt="No Image for This Album Found">
                    
                  </div>
                  
                </div>
              </div>
            
            
          </tbody>
      
    

     

      

    </div>
</div>
 

