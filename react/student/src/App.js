import './App.css';
import SearchAppBar from './components/searchAppBar';
import StudentList from './components/studentList';

function App() {

  return (
    <div className="App">
			<SearchAppBar/>
			<StudentList/>
    </div>
  );
}

export default App;
