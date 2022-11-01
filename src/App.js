import BottomHeader from './components/BottomHeader/BottomHeader';
import Header from './components/TopHeader/TopHeader';
import data from '../src/assets/data.json';

console.log(data);

function App() {
  return (
    <div className="App">
      <Header />
      <BottomHeader />
    </div>
  );
}

export default App;
