import { useState, useRef } from 'react';

export const defaultFaqs = [
    {
        question: 'Authentic Crunch with Delightful Spice?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'Good taste, lasts long and fresh?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'Check ingredient before buying??',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'Can I change my order?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'How to keep the Namkeen crunchier?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'Awesome taste?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
    {
        question: 'Was a good product this time!?',
        answer: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor',
    },
];

const FAQAccordion = ({ faqs = defaultFaqs }) => {
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
                    <div
                        key={index}
                        className="faq-item"
                        ref={(el) => (refs.current[actualIndex] = el)}>
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
