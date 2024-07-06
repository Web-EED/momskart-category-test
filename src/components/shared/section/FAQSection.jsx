import { useState, useEffect, useRef } from 'react';

const FAQAccordion = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const refs = useRef([]);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const half = Math.ceil(faqs.length / 2);
    const firstHalf = faqs.slice(0, half);
    const secondHalf = faqs.slice(half);

    const renderFAQColumn = (faqList) => (
        <div className="faq-column">
            {faqList.map((faq, index) => (
                <div key={index} className="faq-item">
                    <div
                        className="faq-question"
                        onClick={() => handleToggle(index)}>
                        {faq.question}
                        {expandedIndex === index ? (
                            <img src="/static/img/mkt-minus-icon.svg" />
                        ) : (
                            <img src="/static/img/mkt-plus-icon.svg" />
                        )}
                    </div>
                    {expandedIndex === index && (
                        <div className="faq-answer">{faq.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );

    useEffect(() => {
        if (expandedIndex !== null && refs.current[expandedIndex]) {
            const questionHeight =
                refs.current[expandedIndex].querySelector(
                    '.faq-question'
                ).offsetHeight;
            const answerHeight =
                refs.current[expandedIndex].querySelector(
                    '.faq-answer'
                ).offsetHeight;
            refs.current[expandedIndex].style.height =
                `${questionHeight + answerHeight}px`;
        } else {
            refs.current.forEach((ref) => {
                if (ref) ref.style.height = 'auto';
            });
        }
    }, [expandedIndex]);

    return (
        <div className="faq-container">
            <div className="faq-columns">
                {renderFAQColumn(firstHalf)}
                {renderFAQColumn(secondHalf)}
            </div>
        </div>
    );
};

export default FAQAccordion;
