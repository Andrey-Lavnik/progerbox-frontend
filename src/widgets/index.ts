// A layer for business-specific logic with duplicate implementations and page parts
// https://feature-sliced.design/docs/reference/units/layers/widgets

export { Header } from './header/ui/header';
export { Section } from './section/ui/section';

// For now, we store all layouts in subdirectory of widgets layer
// https://t.me/feature_sliced/39213
export { MainLayout } from './layouts/main-layout/ui/main-layout';