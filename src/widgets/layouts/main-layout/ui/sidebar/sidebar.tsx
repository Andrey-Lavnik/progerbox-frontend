import { SidebarSection } from './sidebar-section';
import React, { FC } from 'react';
import { uniteClasses } from '@/shared';
import styles from './sidebar.module.scss';

interface Props {
  categories: Categories;
  className?: string;
}

// TODO: move to entities layer
export interface Category {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface Categories {
  common: Array<Category>;
  technology: Array<Category>;
}

export const Sidebar: FC<Props> = ({ categories, className }) => {
  // TODO: move to shared/constants
  const categoryType: Record<string, string> = {
    common: 'ОБЩАЯ ИНФОРМАЦИЯ',
    technology: 'ТЕХНОЛОГИИ',
  };
  
  return (
    <div className={uniteClasses(styles.sidebar, className)}>
      {Object.entries(categories).map(([type, categoryArray], index) => (
        <SidebarSection key={index} type={categoryType[type]} categoryArray={categoryArray} />
      ))}
    </div>
  );
};
