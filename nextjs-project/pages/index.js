import styles from '../styles/HomePage.module.css';
import Link from 'next/link';
import { Fragment } from 'react';
import * as d3 from "d3";

function HomePage() {

  // removes any svg graphs from homepage -- prevents infinite graph generation
  try {
    d3.selectAll("svg").remove();
  } catch (error) {
    //console.log(error);
  }

  return (
    <Fragment>
      <h1 className={styles.title}>YouTube Analysis</h1>
      <ul className={styles.list}>

      <li>
        <Link href='/page_2' passHref>
          <button className={styles.button}>
            <span>
              Likes vs Views Scatterplots
            </span>  
          </button>
        </Link>
      </li>

      <li>
        <Link href='/page_3' passHref>
          <button className={styles.button}>
            <span>
              Word Cloud
            </span>  
          </button>
        </Link>
      </li>

      <li>
        <Link href='/page_4' passHref>
          <button className={styles.button}>
            <span>
              Bubble Chart
            </span>  
          </button>
        </Link>
      </li>
        
      </ul>
    </Fragment>
  );
}

export default HomePage;