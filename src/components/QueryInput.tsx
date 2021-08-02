import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from '../contexts/Context';

import styles from '../styles/QueryInput.module.scss';

const QueryInput = () => {

  const {setQuery} = useGlobalContext();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [])  

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>{
    setInputValue(event.currentTarget.value);
  } 

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setQuery(inputValue);
  }

  return (
    <section>
      <div className={styles.input_box}>

        <form 
          className={styles.form} 
          onSubmit={handleSubmit}>

          <input
            type="text"
            name='address'
            id='address'
            required
            ref={inputRef}
            onChange={handleChange}
            placeholder='Search for any IP address or domain'
            className={styles.input}
          />

          <button
            type="submit"
            className={styles.submit_btn}
          >
            <img
              src="/images/icon-arrow.svg"
              alt="Submit"
            />   
          </button>
        </form>
      </div>
    </section>
  )
}

export default QueryInput