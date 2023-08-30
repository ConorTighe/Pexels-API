import './App.css';
import usePhotosContext from './context/photos';
import SelectView from './components/select-view';
import { TView } from './interfaces/views';
import { useState } from 'react';
import Views from './components/view-factory';

function App() {
  const [view, setView] = useState<TView>("card");
  const { photos } = usePhotosContext()


  const handleSelectView = (value: TView) => {
    setView(value)
  }

  // TODO View
  if(!photos || !photos.length) return <div>fail</div>
  return (
      <div className="App">
        <div className="View-container">
          <SelectView selected={view} handleSelectView={handleSelectView}  />
          <Views view={view} photos={photos} />
        </div>
      </div>
  );
}

export default App;
