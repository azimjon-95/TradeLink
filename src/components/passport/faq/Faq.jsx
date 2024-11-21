import React from "react";
import "./Faq.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { data, langText } from "./lang";

function Faq() {
  const lang = useSelector((state) => state.language.currentLanguage);

  return (
    <div className="faq">
      <div className="faq_wrapper">
        <h1>{langText[lang].title}</h1>
        <Accordion>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              header={() => (
                <div className="faq_wrapper_item">
                  <span>{item.title[lang]}</span>
                  <FiChevronDown />
                </div>
              )}
            >
              <p>{item.desc[lang]}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
