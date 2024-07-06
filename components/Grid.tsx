import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
          <BentoGrid>
           
        {gridItems.map(
        //   (item) => (  We can do this but we can also destructure like this so we don't have to call item. again and again
          ({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (  
            <BentoGridItem
              id={id}
              key={id}
              title={title}
                    description={description}
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
