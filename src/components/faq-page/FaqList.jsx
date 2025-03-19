import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import React from "react";

const FaqList = ({ faq }) => {
  return (
    <div>
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>{faq.title}</AccordionTitle>
          <AccordionContent>
            <div
              className="mb-5"
              dangerouslySetInnerHTML={{ __html: faq.content }}
            ></div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default FaqList;
