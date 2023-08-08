import { useState } from "react";
import faqImage from '../../../assets/faq.png'
import Accordion from "./Accordion";

const Faq = () => {

    const [activeAccordion, setActiveAccordion] = useState(0);
    const toggleAccordion = (index) => {
        setActiveAccordion(index);
    };

    const accordionData = [
        {
            title: 'How do I browse and search for toys on your website?',
            content: 'You can easily browse and search for toys by using our search bar or navigating through different categories and age groups on the homepage.',
        },
        {
            title: 'Is my payment information secure when making a purchase?',
            content: 'Yes, we take the security of your payment information seriously. We use secure encryption methods to protect your data during transactions.',
        },
        {
            title: 'Do you offer gift wrapping services?',
            content: 'Yes, we offer gift wrapping options for your purchased toys. You can select this option during the checkout process.',
        },
        {
            title: 'What payment methods do you accept?',
            content: 'We accept a variety of payment methods, including credit/debit cards, PayPal, and other popular online payment options.',
        },
        {
            title: 'How do I track my order?',
            content: 'Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.',
        },
    ];


    return (
        <div className='mt-20 px-4'>
            <div className='container mx-auto'>
                <div className='px-4'>
                    <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Frequently Asked Questions</h1>
                    <p className='text-3xl text-center text-primary font-semibold mt-4'>Hello Curious Mind ! Have questions? Ask, Understand and Relax</p>
                </div>


                <div className="md:flex items-center gap-8 mt-4 px-4">
                    <div className="md:w-1/2">

                        <div className="flex justify-center items-center">
                            <div className="w-full">
                                {accordionData.map((item, index) => (
                                    <Accordion
                                        key={index}
                                        title={item.title}
                                        content={item.content}
                                        isOpen={activeAccordion === index}
                                        toggleAccordion={() => toggleAccordion(index)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="md:w-1/2">
                        <div>
                            <img src={faqImage} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Faq;