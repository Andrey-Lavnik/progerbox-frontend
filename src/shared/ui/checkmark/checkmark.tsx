import { FC } from 'react';
import Image from 'next/image';
import styles from './checkmark.module.scss';

interface Prop {
  checked: boolean;
}

export const Checkmark: FC<Prop> = ({ checked }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.box}
        src="/icons/resource-card/read-container.svg"
        alt="Box icon"
        width={20}
        height={20}
      />
      {checked && (
        <Image className={styles.check} src="/icons/resource-card/read-check.svg" alt="Unread" width={20} height={20} />
      )}
    </div>
  );
};
