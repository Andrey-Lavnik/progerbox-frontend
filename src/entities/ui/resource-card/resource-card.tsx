import Image from 'next/image';
import React from 'react';
import { Checkmark } from '@/shared/ui/checkmark/checkmark';
import styles from './resource-card.module.scss';

export const ResourceCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLinks}>
        <div className={styles.links}>
          <div className={styles.link}>networkguru.ru</div>
          <div className={styles.link}>Статья | RU</div>
        </div>
        <div className={styles.status}>
          <Image
            className={styles.flag}
            src="/icons/bookmark.svg"
            alt="Add to favourites"
            width={15}
            height={21}
          />
          <Checkmark checked={true} />
        </div>
      </div>
      <h3>Хеширование и шифрование: в чем разница?</h3>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
    </div>
  );
};
