// Pages
import Home from "./pages/Home.svelte";
import Events from "./pages/Events.svelte";
import Performances from "./pages/Performances.svelte";
import CreatePerformance from "./pages/CreatePerformance.svelte";
import Albums from "./pages/Albums.svelte";
import AlbumDetails from "./pages/AlbumDetails.svelte";
import Songs from "./pages/Songs.svelte";
import CreateEvent from "./pages/CreateEvent.svelte";
import CreatePerson from "./pages/CreatePerson.svelte";


// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/events': Events,
    '/performances': Performances,
    '/create-performance': CreatePerformance,
    '/albums': Albums,
    '/album/:id': AlbumDetails,
    '/songs': Songs,
    '/create-event': CreateEvent,
    '/create-person': CreatePerson
}