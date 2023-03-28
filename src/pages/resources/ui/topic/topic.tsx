import styles from './topic.module.scss';
import React, { FC } from 'react';

interface Props {
  id: number;
  title: string;
  description: string;
}

export const Topic: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
