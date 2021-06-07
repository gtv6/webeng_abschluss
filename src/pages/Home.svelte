<h1 class="mt-3">Welcome to the Events Application</h1>


<script>
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Events', 'Count of Events'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'Events by organizers'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>



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
            <a href="#" class="btn btn-dark">Get Performance</a>
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
              <a href="#" class="btn btn-dark">Create Event</a>
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
    .logo {
        height: 100px;
    }
</style>
