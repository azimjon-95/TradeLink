import React from "react";
import "./Faq.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";

function Faq() {
  const data = [
    {
      title: "What is KYT Traders Passport?",
      desc: "KYT Traders Passport is an innovative platform tailored for cryptocurrency traders. It helps you analyze, validate, and showcase your trading achievements to a global audience. With Traders Passport, you can fine-tune your strategies and confidently present verified results to investors, potential partners, and the broader trading community.",
    },
    {
      title: "Why can I trust KYT Traders Passport?",
      desc: "KYT Traders Passport employs cutting-edge security protocols to guarantee the safety and confidentiality of your data.",
    },
    {
      title: "Does KYT steal my trading strategies?",
      desc: "No, KYT values your privacy and is fully committed to protecting your trading strategies and personal data.",
    },
    {
      title: "Is KYT Traders Passport secure?",
      desc: "Absolutely, we use the highest level of encryption to ensure that your data remains fully protected at all times.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq_wrapper">
        <h1>Frequently Asked Questions</h1>
        <Accordion>
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              header={() => (
                <div className="faq_wrapper_item">
                  <span>{item.title}</span>
                  <FiChevronDown />
                </div>
              )}
            >
              <p>{item.desc}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
