import React, { Component } from 'react';
import './FAQs.css';

class FAQs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: {}
    };
  }

  componentDidMount() {
    document.body.classList.add('hide-footer'); // Add class to hide footer on this page
  }

  componentWillUnmount() {
    document.body.classList.remove('hide-footer'); // Remove class when component unmounts
  }

  toggleExpanded = (index) => {
    this.setState(prevState => ({
      expanded: {
        ...prevState.expanded,
        [index]: !prevState.expanded[index]
      }
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className='title'>Frequently Asked Questions</h1>

        <div className="accordion" id="faqAccordion">
          {[
            {
              question: "What is Catch The AI?",
              answer: `"Catch The AI" is an innovative platform designed to assist users in discerning between content generated by humans and that created using artificial intelligence (AI) technologies. It serves as a tool for verifying the authenticity of digital content, including text, images, and audio, by leveraging advanced algorithms and machine learning techniques.`
            },
            {
              question: "Is Catch The AI free to use?",
              answer: `"Yes, Catch The AI has a free version available for users. However, for more advanced features and increased usage, there are subscription plans that users can opt for. The free version allows basic usage, while the subscription plans offer additional benefits and functionalities."`
            },
            {
              question: "How can I reach out to the support team for assistance?",
              answer: `"If you have any questions or require assistance, our support team is readily available to help. You can contact them through the provided links or contact information available on our website. Whether it's a query regarding usage, technical issues, or any other concerns, our support team is here to assist you promptly and efficiently."`
            },
            {
              question: "How does Catch the AI determine if content is AI-generated?",
              answer: `
              Catch the AI determines if content is AI-generated by using advanced machine learning algorithms and natural language processing (NLP) techniques. These tools analyze the text for patterns, styles, and nuances that are characteristic of AI-generated content, such as repetitive phrases, unusual syntax, or a lack of nuanced understanding. 
              The system is continuously updated with new data to stay effective against evolving AI models.`
            },
            {
              question: "Can Catch the AI detect subtle signs of AI-generated content that might be missed by manual inspection?",
              answer: `Explain the sensitivity and specificity of your detection system in recognizing even nuanced AI-generated elements.`
            },
            {
              question: "Is Catch the AI capable of distinguishing between different types of AI models used to generate content?",
              answer: `Discuss the platform's ability to differentiate between various AI algorithms and frameworks generating the content.`
            }
          ].map((faq, index) => (
            <div key={index} className="card">
              <div className="card-header" id={`heading${index}`}>
                <h2 className="dark  mb-0">
                  <button className="btn btn-link collapsed" type="button" onClick={() => this.toggleExpanded(index)}>
                    {faq.question}
                  </button>
                  <button className="btn btn-dark ml-2" onClick={() => this.toggleExpanded(index)}>{this.state.expanded[index] ? '-' : '+'}</button>
                </h2>
              </div>
              <div id={`collapse${index}`} className={`collapse ${this.state.expanded[index] ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-parent="#faqAccordion">
                <div className="card-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQs;
