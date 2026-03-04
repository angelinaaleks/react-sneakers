import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="33" y="29" rx="33" ry="33" width="140" height="120" />
    <rect x="29" y="163" rx="0" ry="0" width="150" height="34" />
    <rect x="29" y="209" rx="0" ry="0" width="80" height="32" />
    <rect x="148" y="209" rx="0" ry="0" width="32" height="32" />
  </ContentLoader>
);

export default Skeleton;
