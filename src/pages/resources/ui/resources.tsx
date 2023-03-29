import { MainLayout, Section } from '@/widgets';
import { categoriesStub } from '@/shared';
import { Category } from './category/category';
import styles from './resources.module.scss'

export const Resources = () => {
  const topic = categoriesStub.data[0].topics[0];
  return (
    <MainLayout>
      <div className={styles.container}>
        <Category id={topic.id} title={topic.title} description={topic.description} />
        <Section />
        <Section />
      </div>
    </MainLayout>
  );
};
