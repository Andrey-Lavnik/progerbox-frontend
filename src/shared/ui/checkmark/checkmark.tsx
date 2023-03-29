import { FC } from 'react';
import Image from 'next/image';
import styles from './checkmark.module.scss';

interface Props {
  checked: boolean;
}

export const Checkmark: FC<Props> = ({ checked }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.box}
        src="/icons/box.svg"
        alt="Box icon"
        width={20}
        height={20}
      />
      {checked && (
        <Image className={styles.check} src="/icons/check.svg" alt="Unread" width={20} height={20} />
      )}
    </div>
  );
};
