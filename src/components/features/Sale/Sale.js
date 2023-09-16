import React from 'react';
import { useSelector } from 'react-redux';
import { getProductByCategory } from '../../../redux/productsRedux';

import styles from './Sale.module.scss';

const Sale = () => {
  const sofas = useSelector(state => getProductByCategory(state, 'sofa'));
  let randomSofaIndex = Math.floor(Math.random() * (sofas.length + 1));

  return (
    <div className={styles.root}>
      <div className={`container ${styles.mainContainer}`}>
        <div className={styles.leftSection}>
          <img src={sofas[randomSofaIndex].image} alt={sofas[randomSofaIndex].name} />
          <p className={styles.category}>{sofas[randomSofaIndex].category}</p>
          <p className={styles.name}>{sofas[randomSofaIndex].name}</p>
          <div className={styles.discount}>-20%</div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightUpPicture}>
            <img src={'./images/promo/officeChair1.jpg'} alt={'office chairs'} />
            <div className={styles.text}>
              <p className={styles.officeChair}>
                <b>Office</b> Chair
              </p>
              <p className={styles.collection}>Collection</p>
              <p className={styles.save}>$200.00 </p>
            </div>
          </div>
          <div className={styles.rightDownPicture}>
            <img src={'./images/promo/bedPromo.jpg'} alt={'bed'} />
            <p className={styles.collection}>
              <b>Special</b> Collection
            </p>
            <p className={styles.save}>Save up 45% of furniture </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
