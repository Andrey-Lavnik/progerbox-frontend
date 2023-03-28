import React, { FC, ReactNode } from 'react';
import styles from './resource-container.module.scss';

interface Props {
  children?: ReactNode;
}

export const ResourceContainer: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children ?? null}</div>;
};
