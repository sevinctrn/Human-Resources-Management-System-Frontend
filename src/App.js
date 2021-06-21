
import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
   
      <Navi/>
      <Container>
      <Dashboard/>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
