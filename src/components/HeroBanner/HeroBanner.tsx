function HeroBanner () {
    return (
        <div className="flex items-center flex-col md:flex-row md:gap-0 gap-10 md:pt-20 pt-40">
            <div className="flex flex-col gap-5 md:w-2/3">
                <h1 className="text-4xl font-bold">Discover Your Dream Career</h1>
                <p className="text-xl">Find the best job opportunities that match your passion, skills, and career goals. We connect talented individuals with companies that share your vision.</p>
                <button className="w-fit hover:cursor-pointer pl-4 pr-4 pt-2 pb-2 rounded-lg bg-gray-800 dark:bg-gray-100 text-white hover:bg-gray-500 dark:hover:bg-gray-400 transition duration-300 dark:text-gray-800">
                    Start Your Search
                </button>
            </div>
            <img className="md:w-1/3 w-2/3" src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png" alt="hero-banner"/>
        </div>
    );
}
export default HeroBanner;