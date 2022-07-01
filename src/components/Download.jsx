import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Check out the behind the scenes</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the source code on my GitHub</p>
        </div>
        <button className={styles.btnPrimary}>
            <a href='https://github.com/MuhammMud/react_native_nftapp' target="_blank" rel="noopner noreferrer">Enjoy!!</a>
        </button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download
