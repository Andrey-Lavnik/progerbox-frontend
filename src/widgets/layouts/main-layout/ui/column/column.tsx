import React, { FC, ReactNode } from 'react';
import { uniteClasses } from '@/shared';
import styles from './column.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Column: FC<Props> = ({ children, className }) => {
  return <div className={uniteClasses(styles.container, className)}>{children ?? null}</div>;
};
