import { Card } from './resource/resource';
import styles from './section.module.scss';

export const Section = () => {
  return (
    <div className={styles.container}>
      <h2>DDOS</h2>
      <Card />
      <Card />
    </div>
  );
};
