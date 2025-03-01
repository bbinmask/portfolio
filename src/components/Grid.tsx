import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "@/ui/BentoGrid";
import React from "react";

const Grid = () => {
  return (
    <section id="about" className="my-6">
      <BentoGrid className="">
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              imgClassName,
              titleClassName,
              img,
              spareImg,
            },
            i
          ) => (
            <BentoGridItem
              key={i}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
