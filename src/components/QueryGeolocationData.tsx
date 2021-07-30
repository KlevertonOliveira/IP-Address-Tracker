import { useGlobalContext } from '../contexts/Context';

import styles from '../styles/QueryGeolocationData.module.scss';

const QueryGeolocationData = () => {

  const {queryGeolocationData} = useGlobalContext();
  
  const {
    ip, 
    location:{
      city, 
      country
    },
    postalCode, 
    timezone, 
    isp
  } = queryGeolocationData;

  return (
    
    <section>

      <div className={styles.query_data}>

        <div className={styles.query_data_column}>
          <h2 className={styles.query_data_column_title}>
            IP Address
          </h2>
          <p className={styles.query_data_column_value}>
            {ip}
          </p>
        </div>

        <div className={styles.query_data_column}>
          <h2 className={styles.query_data_column_title}>
            Location
          </h2>
          <p className={styles.query_data_column_value}>
            {city}, {country} 
            <span className={styles.query_data_column_value}>{postalCode}</span>
          </p>
        </div>

        <div className={styles.query_data_column}>
          <h2 className={styles.query_data_column_title}>Timezone</h2>
          <p className={styles.query_data_column_value}>UTC {timezone}</p>
        </div>

        <div className={styles.query_data_column}>
          <h2 className={styles.query_data_column_title}>ISP</h2>
          <p className={styles.query_data_column_value}>{isp}</p>
        </div>
      </div>
    </section>
  )
}

export default QueryGeolocationData;