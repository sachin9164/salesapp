import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Banner from './Components/Banner';
import Cards from './Components/Cards';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Banner/>
      <Cards/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
