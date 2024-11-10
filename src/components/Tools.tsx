import React, { memo } from 'react';
import { Terminal } from 'lucide-react';
import CategoryCard from './tools/CategoryCard';
import { toolCategories } from './tools/ToolCategories';
import SectionContainer from './common/SectionContainer';
import SectionTitle from './common/SectionTitle';

const CategoryGrid = memo(function CategoryGrid() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 auto-rows-fr"
      style={{
        gridAutoRows: '1fr',
        alignItems: 'stretch'
      }}
      role="list"
      aria-label="Technology categories"
    >
      {toolCategories.map((category, index) => (
        <CategoryCard
          key={category.title}
          category={category}
          index={index}
        />
      ))}
    </div>
  );
});

function Tools() {
  return (
    <SectionContainer 
      id="technology"
      ariaLabelledBy="tools-title"
    >
      <SectionTitle
        id="tools-title"
        title="Technology Stack"
        description="We harness the power of the Flux Ecosystem to deliver seamless GitOps-driven deployments, ensuring your infrastructure is always up-to-date, resilient, and effortlessly managed."
        icon={Terminal}
      />
      <CategoryGrid />
    </SectionContainer>
  );
}

export default memo(Tools);