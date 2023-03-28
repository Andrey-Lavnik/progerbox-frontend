import { MainLayout } from '@/widgets';
import { categoriesStub } from '@/shared';
import { Topic } from './topic/topic';
import { ResourceContainer } from '@/widgets/layouts/main-layout/ui/resource-container/resource-container';
import { Section } from '@/widgets/section/section';

export const Resources = () => {
  const topic = categoriesStub.data[0].topics[0];
  return (
    <MainLayout>
      <ResourceContainer>
        <Topic id={topic.id} title={topic.title} description={topic.description} />
        <Section />
        <Section />
      </ResourceContainer>
    </MainLayout>
  );
};
