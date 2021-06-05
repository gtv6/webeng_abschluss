<script>
import axios from "axios";


    export let params = {};

    let personId 

    let person = {};
    
    $: {
        personId = params.id; //Wird immer ausgeführt, sobald sich Var Inhalt ändert (Braucht man damit ID im Titel responsive ist)
        getPersons();
    }
    
   function getPersons() {
       axios.get("http://localhost:8080/infections/persons/" +personId)
            .then( response => {
                person = response.data;
            })
            .catch (error => {
            alert("Fehler")
        })
   }
</script>

<h1>Details for Person ({personId})</h1>

<p>Name: {person.name}</p>
<p>Birthdate: {person.birthdate}</p>