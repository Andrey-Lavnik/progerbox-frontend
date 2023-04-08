import React, { FC } from 'react';
import { Category } from './sidebar';
import styles from './sidebar-section.module.scss';

export interface ISidebarSection {
  id?: number;
  type: string;
  categoryArray: Array<Category>;
}

type Props = ISidebarSection;

export const SidebarSection: FC<Props> = ({ type, categoryArray }) => {
  return (
    <div className={styles.sidebarSection}>
      <h3>{type}</h3>
      <div className={styles.line} />
      {categoryArray &&
        categoryArray.map((item) => (
          <a href="" key={item.id}>
            {item.name}
          </a>
        ))}
    </div>
  );
};
