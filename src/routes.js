// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte";
import Persons from "./pages/Persons.svelte";
import Events from "./pages/Events.svelte";
import Performances from "./pages/Performances.svelte";
import CreatePerformance from "./pages/CreatePerformance.svelte";
import Albums from "./pages/Albums.svelte";
import Songs from "./pages/Songs.svelte";
import CreateEvent from "./pages/CreateEvent.svelte";
import CreatePerson from "./pages/CreatePerson.svelte";
import PersonDetails from "./pages/PersonDetails.svelte";

// Export the route definition object
export default {
    // Exact path
    '/': Home,
    '/home': Home,
    '/demo': DemoPage,
    '/persons': Persons,
    '/events': Events,
    '/performances': Performances,
    '/create-performance': CreatePerformance,
    '/albums': Albums,
    '/songs': Songs,
    '/persons/:id': PersonDetails,
    '/create-event': CreateEvent,
    '/create-person': CreatePerson
}