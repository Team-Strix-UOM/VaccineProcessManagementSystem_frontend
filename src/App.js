import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/routes/Routes';
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
