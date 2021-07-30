import QueryInput from './components/QueryInput';
import QueryGeolocationData from './components/QueryGeolocationData'; 
import GeolocationMap from './components/GeolocationMap'; 

import styles from './styles/App.module.scss';

function App() {

  return (
    <main>     

      {/* Query Section */}
      <section className={styles.query_section}>
        <div className={styles.container}>
          <h1 className={styles.title}>IP Address Tracker</h1>
          <QueryInput />    
        </div>
      </section>

      {/* Query Geolocation Results Section*/}
      <section className={styles.query_geolocation_data_section}>
        <QueryGeolocationData />
      </section>
    
      {/* Map Section*/}
      <section className={styles.map_section}>
        <GeolocationMap />
      </section>

    </main>
  );
}

export default App;
