// Import data
import { postings } from './postings';
// Styles
import './App.css';
// Components
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';
import Directory from './Directory';
import Gallery from './Gallery';
// Component
function App(){
  return (
    // App container
    <div className='App'>
        <Sidebar />
        <Searchbar />
        <Directory />
        <Gallery data = {postings} />
    </div>
  );
}
export default App;