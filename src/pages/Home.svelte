
<script>
    import axios from "axios";
    import { onMount } from "svelte";
          
      onMount( () => {
            createArray();
            getDateTime();
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

        })

      var result;
      

      function createArray() {

        var events;
        /* result = [['Events', 'Count of Events']]; */
        result = [];

        axios.get("http://localhost:8080/events/events")
            .then( response => {
               events = response.data;
               console.log(response);
               
            var resArr = [];
                events.filter(function(item){
                    var i = resArr.findIndex(x => (x.veranstalter == item.veranstalter));
                    if(i <= -1){
                            resArr.push(item);
                    }
            return null;
            });
            
            console.log(resArr);

            

            for(var i in resArr) {
                
                let counter = 0;
                console.log(resArr[i].veranstalter)

                for(let x = 0; x < events.length; x++){
                  console.log("works")
                  if (events[x].veranstalter === resArr[i].veranstalter) {
                    counter++;
                  }

                }

                result.push([resArr[i].veranstalter, counter])
              }
              console.log(result)
              console.log(result[0][0])
              console.log(result[0][1])
              
              result = result;
              
            })
            .catch (error => {
                alert("Error: Datasource not Found! Check if your Backend is running!")
            })   
            
            
            

           
            
      }


      function drawChart() {

        
        
        let header = [
          ['Events', 'Count of Events'],
          ['',    0]];

        var data = google.visualization.arrayToDataTable(header);
        
        /* data.addRows([["hallo", 100]])
        console.log(result.length) */

        for(var c = 0; c < result.length; c++){
          console.log(result);
          console.log("allo");
          data.addRows([[result[c][0], result[c][1]]]);
          
        }
        
        

        var options = {
          title: 'Events by organizers (Only works in Google Chrome!)'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

    

      function getDateTime() {
        var now     = new Date(); 
        var hour    = now.getHours(); 
        if(hour >= 18){  
          document.getElementById('greeting').innerHTML = "Good Evening";
        }
        else if (hour >= 12) {
        document.getElementById('greeting').innerHTML = "Good Afternoon";
        } else {
          document.getElementById('greeting').innerHTML = "Good Morning";
        }
}
    
    </script>
  
  
    <div class="homebanner">
              
       <div class="logobanner">
         <img src="/images/logo/events_logo.png">
       </div>
        
  </div>
    
  <h1 class="mt-3">Events DB</h1>
  <h3 id="greeting">-</h3>

  

  <div class="container mt-5">
    <div class="row">
      <div class="col-sm">
        <div class="card bg-dark text-white">
        <img src="/images/grid/synthwave.jpg" class="card-img" alt="...">
        <div class="card-img-overlay">
          <h5 class="card-title">Events</h5>
          <a href="#/events" class="btn btn-dark">Get events </a>
        </div>
      </div>
    </div>
      
        
      
    <div class="col-sm">
        <div class="card bg-dark text-white">
            <img src="/images/grid/event.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title">Shows</h5>
                  <a href="#" class="btn btn-dark">Get Shows</a>
                </div>
              </div>
     </div>
      

    <div class="col-sm">
        <div class="card bg-dark text-white">
            <img src="/images/grid/car.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
            <h5 class="card-title">Performance</h5>
            <a href="#/performances" class="btn btn-dark">Get Performance</a>
            </div>
        </div>          
    </div>
          
    </div>
    <p></p>
    <div class="row">
        <div class="col-sm">
            <div class="card bg-dark text-white">
            <img src="/images/grid/event2.jpg" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">New Event</h5>
              <a href="#/create-event" class="btn btn-dark">Create Event</a>
            </div>
          </div></div>
        
          
        <div class="col-sm">
            <div class="card bg-dark text-white">
                <img src="/images/grid/sun.jpg" class="card-img" alt="...">
                <div class="card-img-overlay">
                  <h5 class="card-title">New Shows</h5>
                  <a href="#" class="btn btn-dark">Create Shows</a>
                </div>
              </div>
        </div>

        <div class="col-sm">
            <div class="card bg-dark text-white">
            <img src="/images/grid/vin.png" class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">New Performance</h5>
              <a href="#" class="btn btn-dark">Create Performance</a>
            </div>
          </div>
        </div>

            
      </div>

      <p></p>
      <h2>Dashboard:</h2>
      <div>
        <div class="row">
            <div class="col-sm">
        <div id="piechart" style="width: 900px; height: 500px;"></div>
        </div>
        </div>
      </div>


  </div>
  

  

<style>
  

  .logobanner {
  position: relative;
  width: 300px;
  height: 300px;
  animation: animate 3s infinite linear;
}

.logobanner img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  transform: translate(-50%, -50%);
}

.logobanner:before,
.logobanner:after {
  position: absolute;
  content: '';
  width: 200px;
  height: 200px;
  top: 50px;
  border-radius: 5px;
  transform: rotate(45deg);
  background: rgba(255, 0, 255, 0.05);
  z-index: 0;
  box-shadow: 0 0 0 1px #fff, 
              0 0 10px 1px #ff0080, 
              inset 0 0 10px 1px #ff0080;
}

.logobanner:before {
  left: 35px;
}

.logobanner:after {
  right: 35px;
}

@keyframes animate {
  0% { width: 300px; }
  50% { width: 240px; }
}
</style>
