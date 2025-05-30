import React from 'react';

const FAQAccordion = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {/* Q1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Is there any registration fee?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
               No. Registration and onboarding are completely free of cost.
            </div>
          </div>
        </div>

        {/* Q2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              What documents are required?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
               Your salon license, identity proof, and a few basic business details.
            </div>
          </div>
        </div>

        {/* Q3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              When do I get paid?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
               Payments are processed weekly and sent directly to your bank account.
            </div>
          </div>
        </div>

        {/* Q4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
              What makes SuStylo different from other platforms?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              We offer personalized support, exclusive local promotions, and performance-based bonuses — not just basic listings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
