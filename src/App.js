import React, { useState, useEffect } from 'react';
import './scss/App.scss';
import Calcul from './Views/Calcul'
import Preloader from './Views/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false); // Mettez à jour l'état pour indiquer que le chargement est terminé
  };

  useEffect(() => {
    // Simulez le chargement de vos ressources ici
    setTimeout(() => {
      handleLoaded(); // Simulez le chargement terminé
    }, 3000); // Simulez un chargement de 3 secondes (vous pouvez ajuster ce délai selon vos besoins)
  }, []);

  return (
    <div className={`app ${loading ? 'loading' : ''}`}>
      {loading && <Preloader onLoaded={handleLoaded} />}
      {!loading && <Calcul />}
    </div>
  );
}
export default App;
