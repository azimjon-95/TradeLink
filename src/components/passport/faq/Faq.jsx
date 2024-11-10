import React from "react";
import "./Faq.css";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { FiChevronDown } from "react-icons/fi";

function Faq() {
  const data = [
    {
      title: "What is a KYT Passport?",
      desc: "KYT Passport is a powerful analytical platform designed for crypto traders. It allows you to analyze, verify, and showcase your trading performance to the world. Use Passport to improve your strategies and confidently share your verified results with potential investors, partners, and the trading community.",
    },
    {
      title: "Why should I trust the KYT Passport?",
      desc: "KYT Passport uses advanced security measures to ensure your data is safe.",
    },
    {
      title: "Will KYT steal my trading strategies?",
      desc: "No, KYT is committed to ensuring the privacy and protection of user data.",
    },
    {
      title: "Is KYT Passport secure?",
      desc: "Yes, we employ state-of-the-art encryption to protect your information.",
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
