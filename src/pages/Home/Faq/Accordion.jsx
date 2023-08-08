const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
    return (
        <div className="border rounded-md shadow-md">
            <button
                onClick={toggleAccordion}
                className="w-full py-2 px-4 text-left font-medium text-blue-600 bg-[#d6b129] hover:bg-blue-200 focus:outline-none"
            >
                {title}
            </button>
            {isOpen && <div className="p-4">{content}</div>}
        </div>
    );
};

export default Accordion;
