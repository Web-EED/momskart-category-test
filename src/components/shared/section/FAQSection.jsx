import { useState, useRef } from 'react';

const FAQAccordion = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const refs = useRef([]);

    const handleToggle = (columnIndex, index) => {
        const actualIndex = columnIndex * Math.ceil(faqs.length / 2) + index;
        setExpandedIndex(expandedIndex === actualIndex ? null : actualIndex);
    };

    const half = Math.ceil(faqs.length / 2);
    const firstHalf = faqs.slice(0, half);
    const secondHalf = faqs.slice(half);

    const renderFAQColumn = (faqList, columnIndex) => (
        <div className="faq-column">
            {faqList.map((faq, index) => {
                const actualIndex = columnIndex * half + index;
                return (
                    <div key={index} className="faq-item" ref={(el) => refs.current[actualIndex] = el}>
                        <div
                            className="faq-question"
                            onClick={() => handleToggle(columnIndex, index)}>
                            {faq.question}
                            {expandedIndex === actualIndex ? (
                                <img src="/static/img/mkt-minus-icon.svg" />
                            ) : (
                                <img src="/static/img/mkt-plus-icon.svg" />
                            )}
                        </div>
                        {expandedIndex === actualIndex && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="faq-container">
            <div className="faq-columns">
                {renderFAQColumn(firstHalf, 0)}
                {renderFAQColumn(secondHalf, 1)}
            </div>
        </div>
    );
};

export default FAQAccordion;
