const Explore = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="md:flex md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4">
                {/* <!-- First Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-40 rounded-lg bg-red-500"></div>
                    <div className="h-32 rounded-lg bg-red-500"></div>
                    <div className="h-60 rounded-lg bg-red-500"></div>
                </div>
                {/* <!-- Sec Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-12 rounded-lg bg-blue-500"></div>
                    <div className="h-72 rounded-lg bg-blue-500"></div>
                    <div className="h-48 rounded-lg bg-blue-500"></div>
                </div>
                {/* <!-- Third Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-28 rounded-lg bg-green-500"></div>
                    <div className="h-40 rounded-lg bg-green-500"></div>
                    <div className="h-64 rounded-lg bg-green-500"></div>
                </div>
            </div>
        </div>
    );
};

export default Explore;