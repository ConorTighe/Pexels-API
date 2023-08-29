import './App.css';
import usePhotosContext from './context/photos';

function App() {
  const { getDisplayedImages } = usePhotosContext()

  const res = getDisplayedImages();

  // TODO View
  if(!res || !res.length) return <div>fail</div>
  return (
      <div className="App">
        {res[0].id}
      </div>
  );
}

export default App;
