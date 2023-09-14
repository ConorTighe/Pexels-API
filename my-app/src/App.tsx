import './App.css';
import usePhotosContext from './context/photos';
import SelectView from './components/select-view';
import { type TView } from './interfaces/views';
import { useState } from 'react';
import Views from './components/view-factory';

function App(): JSX.Element {
  const [view, setView] = useState<TView>('list');
  const { photos } = usePhotosContext();

  const handleSelectView = (value: TView): void => {
    setView(value);
  };

  // TODO View
  if (photos.length === 0) return <div>fail</div>;

  return (
    <div className='App'>
      <div className='View-container'>
        <SelectView selected={view} handleSelectView={handleSelectView} />
        <Views view={view} photos={photos} />
      </div>
    </div>
  );
}

export default App;
