import React from 'react';
import { defaultFaqs } from '~/components/shared/section/FAQSection';

const PartialVendor = ({ qnas = defaultFaqs }) => {
    return (
        <div>
            {qnas.map((qna, index) => {
                return (
                    <section className="qna-section">
                        <h4>{qna.question}</h4>
                        <p>{qna.answer}</p>
                    </section>
                );
            })}
        </div>
    );
};

export default PartialVendor;
