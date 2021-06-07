// Pages
import Home from "./pages/Home.svelte";
import DemoPage from "./pages/DemoPage.svelte";
import Persons from "./pages/Persons.svelte";
import Events from "./pages/Events.svelte";
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
    '/persons/:id': PersonDetails,
    '/create-person': CreatePerson
}