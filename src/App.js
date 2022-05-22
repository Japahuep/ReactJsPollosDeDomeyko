import './App.css';
import PageNavbar from './components/PageNavbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <PageNavbar />
      <ItemListContainer name="Pollo Asado" price="5000" />
      <ItemListContainer name="Papas Fritas" price="3000" />
      <ItemListContainer name="Bebida" price="1000" />
    </div>
  );
}

export default App;
