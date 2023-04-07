import { SidebarSection } from './sidebar-section';
import React, { FC } from 'react';
import { uniteClasses } from '@/shared';
import { Categories } from '../main-layout';
import styles from './sidebar.module.scss';

interface Props {
  categories: Categories;
  className?: string;
}

export const Sidebar: FC<Props> = ({ categories, className }) => {
  const categoryType: Record<string, string> = {
    common: 'ОБЩАЯ ИНФОРМАЦИЯ',
    technology: 'ТЕХНОЛОГИИ',
  };

  return (
    <div className={uniteClasses(styles.sidebar, className)}>
      {Object.entries(categories).map((categoryArray, index) => (
        <SidebarSection key={index} type={categoryType[categoryArray[0]]} categoryArray={categoryArray[1]} />
      ))}
    </div>
  );
};
