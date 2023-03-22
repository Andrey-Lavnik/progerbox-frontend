import React, { FC } from 'react';
import styles from './sidebar-section.module.scss';

export interface ISidebarSection {
  id?: number;
  section: string;
  topics: {
    id: number;
    title: string;
    description: string;
  }[]; // TODO move out types to entities layer
}

type Props = ISidebarSection;

export const SidebarSection: FC<Props> = ({ section, topics }) => {
  return (
    <div className={styles.sidebarSection}>
      <h3>{section}</h3>
      <div className={styles.line} />
      {topics.map((item) => (
        <a href="" key={item.id}>
          {item.title}
        </a>
      ))}
    </div>
  );
};
