import speaking from "../assets/icon1.png"
import career from "../assets/icon2.png"
import creative from "../assets/icon3.svg"
const socialMediaData = {
    image: "public/images/image.png",
    title: "SOCIAL MEDIA",
    subtitle: "USEFUL LINKS",
    description: "Completely synergize resource taxing relationships via premier niche dynamically innovate state of the art customer service.",
    iconsRow1: [
        { src: "public/images/yt.png", alt: "YouTube Icon" },
        { src: "public/images/insta.png", alt: "Instagram Icon" },
        { src: "public/images/face.png", alt: "Facebook Icon" },
    ],
    iconsRow2: [
        { src: "public/images/tweet.png", alt: "Twitter Icon" },
        { src: "public/images/whats.png", alt: "WhatsApp Icon" },
    ],
};
const footerData = {
    sections: [
        {
            title: 'Product',
            links: [
                { name: 'Overview', url: '#' },
                { name: 'Features', url: '#' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About us', url: '#' },
                { name: 'Careers', url: '#' }
            ]
        },
        {
            title: 'Social',
            links: [
                { name: 'Twitter', url: '#' },
                { name: 'LinkedIn', url: '#' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Terms', url: '#' }
            ]
        }
    ],
    footerBottom: {
        text: '© 2022 Ed-Circle. All rights reserved.',
        socialIcons: [
            { src: 'public/images/v1.png', alt: 'v1', className: 'ico' },
            { src: 'public/images/l1.png', alt: 'l1', className: 'ico' },
            { src: 'public/images/f1.png', alt: 'f1', className: 'ico' },
            { src: 'public/images/Glob1.png', alt: 'Glob1', className: 'ico' }
        ]
    }
};


const guaranteeData = {
    satisfactionText: "100% Satisfaction Guarantee 🎯",
    heading: "Advanced Features",
    buttons: ["Learning App", "Classes", "Mocks", "Study Materials", "Physical Training"],
    mainFeature: "Flexible app-based learning for Defence exams",
    features: [
        "Flexible learning with interactive app",
        "Time-efficient, accelerated study regime",
        "Effective tracking of course progress",
    ],
    image: "public/images/i1.png",
};
const faqData = {
    title: "Questions? Get Answers Here! 💡",
    questions: [
        { icon: "public/images/arrow.png", text: "Can I access the course from mobile app?" },
        { icon: "public/images/arrow.png", text: "How many times can we watch a lecture? Is there any watch limit?" },
        { icon: "public/images/arrow.png", text: "Can I purchase this course and share it with my friend?" },
        { icon: "public/images/arrow.png", text: "Can I login to two devices simultaneously?" },
        { icon: "public/images/arrow.png", text: "Can I download the content of the video course?" },
        { icon: "public/images/arrow.png", text: "Is the video course / study material updated?" },
    ],
};


const courses = [
    {
        id: 1,
        image: "public/images/nda1.png",
        title: "NDA Online Coaching",
        studentsLive: "112 students live now",
        badge: "Most Popular",
        rating: 5,
        reviews: 429,
        enrolled: 1812,
        originalPrice: "₹8999",
        discountedPrice: "₹3999",
    },
    {
        id: 2,
        image: "public/images/nda1.png",
        title: "NDA Online Coaching+Live",
        studentsLive: "72 students live now",

        rating: 5,
        reviews: 188,
        enrolled: 600,
        originalPrice: "₹21999",
        discountedPrice: "₹11,999",
    },
    {
        id: 3,
        image: "public/images/nda2.png",
        title: "NDA Foundation Coaching",
        studentsLive: "82 students live now",

        rating: 5,
        reviews: 159,
        enrolled: 522,
        originalPrice: "₹141999",
        discountedPrice: "₹84,999",
    },
    {
        id: 4,
        image: "public/images/cds1.png",
        title: "CDS Exam Coaching",
        studentsLive: "82 students live now",

        rating: 5,
        reviews: 318,
        enrolled: 1216,
        originalPrice: "₹6999",
        discountedPrice: "₹1999",
    },
    {
        id: 5,
        image: "public/images/afc.png",
        title: "AFCAT Coaching",
        studentsLive: "51 students live now",

        rating: 5,
        reviews: 187,
        enrolled: 1812,
        originalPrice: "₹3999",
        discountedPrice: "₹1299",
    },
    {
        id: 6,
        image: "public/images/ota.png",
        title: "OTA Coaching",
        studentsLive: "34 students live now",

        rating: 5,
        reviews: 81,
        enrolled: 380,
        originalPrice: "₹4999",
        discountedPrice: "₹1999",
    },
];

const Exams = [
    {
        title: "NDA Exam",
        image: "public/Images/exam.png",
        para: "Learn more",
        id: 1,

    },
    {
        id: 2,
        title: "CDS Exam",
        image: "public/Images/exam.png",

    },
    {
        id: 3,
        title: "OTA Exam",
        image: "public/Images/exam.png",

    },


]
const Hero = () => {
    return (
        <main className="main">
            <div className="hero flex mt-10 flex-col justify-center items-center md:flex-row bg-gray-100 px-4 md:px-8">
                {/* Hero Content */}
                <div className="herocontent w-full md:w-1/2 text-center md:text-left space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Start Your <span className="text-[#218515]">Defence</span> Exam Preparation with DDA
                    </h1>
                    <p className="text-gray-700 text-lg">
                        India’s Most <span className="font-bold">experienced for Online</span> Defence Exam prep.
                    </p>

                    {/* Buttons */}
                    <div className="herobtn flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                        <button className="first bg-blue-500 text-white px-6 py-2 rounded-md">
                            Get Started
                        </button>
                        <button className="second border border-blue-500 text-blue-500 px-6 py-2 rounded-md">
                            Enquiry now
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="icons mt-6">
                        <ul className="flex flex-wrap justify-center md:justify-start gap-6">
                            <li className="speak flex items-center gap-2">
                                <img src={speaking} alt="Public Speaking" className="w-5 h-5" />
                                <span>Public Speaking</span>
                            </li>
                            <li className="career flex items-center gap-2">
                                <img src={career} alt="Career-Oriented" className="w-5 h-5" />
                                <span>Career-Oriented</span>
                            </li>
                            <li className="creative flex items-center gap-2">
                                <img src={creative} alt="Creative Thinking" className="w-5 h-5" />
                                <span>Creative Thinking</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
                    <img src="public/images/logo.jpg" alt="Hero" className="heroimg xsm:max-w-[70%] md:max-w-[100%] h-auto" />
                </div>
            </div>




            <div className="mid mt-24">
                <div className="">
                    {/* Services Header */}
                    <h5 className="text-center text-xl font-semibold">Our Services</h5>
                    <h1 className="font-bold text-2xl sm:text-3xl mt-2 text-center">I am Preparing for...</h1>

                    {/* Exams List */}
                    <ul className="exams flex flex-wrap justify-center gap-5 mt-16 px-4 sm:px-6 md:px-8">
                        {Exams.map((data) => (
                            <li
                                key={data.id}
                                className="nda flex-1 sm:w-[calc(50%-2rem)] md:w-[calc(33.33%-2rem)] lg:w-[calc(25%-2rem)] max-w-[313px]">
                                <h2 className="text-center font-semibold">{data.title}</h2>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full max-w-[292px] h-[59.9px] object-contain mt-4 mx-auto"
                                />
                                <h5 className="text-center text-sm text-[#20B486] mt-4">Learn More</h5>
                            </li>
                        ))}
                    </ul>


                    {/* Contact Section */}
                    <div className="contact flex flex-col md:flex-row justify-center items-center mt-16 px-4 sm:px-6 md:px-8">
                        {/* Content */}
                        <div className="content text-center max-w-[600px]">
                            <p className="text-lg font-medium leading-7">
                                Achieve more with Crack Defence exams.{" "}
                                <span className="italic text-[#20B486]">
                                    “Ab Defence ki tayari Ghar se..”
                                </span>
                            </p>
                            <div className="view flex flex-wrap justify-center  gap-4 mt-10">
                                <button className="fst w-[200px] bg-[#0F76B1] text-white px-6 py-3 rounded-md">
                                    View other courses
                                </button>
                                <button className="scnd bg-white w-[200px] text-black border border-black px-6 py-3 rounded-md">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        {/* Bulb Image */}
                        <div className="bulb mt-10 md:mt-0 ">
                            <img
                                src="public/images/bulb.png"
                                alt="Bulb"
                                className="w-[153px] h-[153px] md:w-[200px] md:h-[200px] object-contain"
                            />
                        </div>
                    </div>

                </div>


                <div className="mid text-center mt-14 px-4 sm:px-8 md:px-12 lg:px-20">
                    {/* Section Heading */}
                    <h3 className="font-bold text-2xl sm:text-3xl mt-2 text-center leading-[30px] sm:leading-[34px] md:leading-[40px] lg:leading-[44px] tracking-[-0.02em]">
                        What People Say About Us
                    </h3>

                    {/* Review Section */}
                    <div className="reviews mt-6 sm:mt-8 md:mt-10">
                        {/* Review Text */}
                        <p className="font-semibold text-xl sm:text-2xl mt-2 text-center leading-[28px] sm:leading-[36px] md:leading-[45px] lg:leading-[60px] tracking-[-0.02em] mx-2 sm:mx-6 md:mx-10">
                            I love the variety of activities they offer. I participated in a DDA tournament and had a lot of fun.
                        </p>

                        {/* Reviewer Profile */}
                        <div className="women flex flex-col justify-center items-center mt-6 sm:mt-8">
                            <img
                                src="public/images/logo2.png"
                                alt="Profile"
                                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
                            />
                            <h4 className="font-medium text-base sm:text-lg md:text-xl leading-5 sm:leading-6 md:leading-7 mt-4">
                                Jacob Jones
                            </h4>
                            <p className="text-sm sm:text-base md:text-lg font-normal leading-5 sm:leading-6 md:leading-7 text-[#667085] mt-2">
                                Student, National University
                            </p>
                        </div>
                    </div>




                    <div className="feature mt-14 flex flex-col justify-center px-4 sm:px-8 lg:px-16">
                        <h6 className="self-center text-center px-2 py-0 text-sm font-medium bg-[#78C60070] rounded opacity-70 mt-10">
                            Ready to Learn?
                        </h6>
                        <h3 className="font-bold text-2xl sm:text-3xl mt-2 text-center">
                            Our Featured Courses for
                        </h3>
                        <div className="coursecontainer flex flex-wrap justify-center gap-4 mt-6">
                            {courses.map((d2) => (
                                <div key={d2.id} className="coursecard shadow-md p-4 rounded-lg bg-white">
                                    <div className="stu flex items-center">
                                        <img src="public/images/stu.png" alt="" className="w-4 h-4" />
                                        <div className="livestatus text-xs font-medium ml-2">{d2.studentsLive}</div>
                                        <div className="badge text-xs font-medium ml-auto bg-[#78C60070] px-2 py-0.5 rounded">
                                            {d2.badge}
                                        </div>
                                    </div>
                                    <img
                                        src={d2.image}
                                        alt=""
                                        className="src w-11/12 h-44 rounded-lg mt-4 mx-auto"
                                    />
                                    <h2 className="nda font-bold text-base mt-4">{d2.title}</h2>
                                    <div className="star flex items-center mt-4">
                                        <div className="text-yellow-500 text-lg mr-2">{"★".repeat(d2.rating)}</div>
                                        <div className="num flex gap-2 text-sm">
                                            <span>{`${d2.rating} (${d2.reviews})`}</span>
                                            <span>{`${d2.enrolled} Students enrolled`}</span>
                                        </div>
                                    </div>
                                    <div className="price flex sm:flex-row sm:items-center mt-6">
                                        <span className="text-sm font-medium">Starting from:</span>
                                        <span className="orprice text-sm font-bold line-through ml-2">{d2.originalPrice}</span>
                                        <span className="disc text-red-500 text-lg font-bold ml-2">{d2.discountedPrice}</span>
                                    </div>
                                    <button className="enquirybtn mt-6 w-full bg-blue-500 text-white py-2 rounded font-normal">
                                        Enquiry Now
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="more flex justify-center mt-8">
                            <h2 className="pr font-semibold text-lg sm:text-xl lg:text-2xl">Check out our 40+ more courses</h2>
                        </div>
                        <div className="bu flex justify-center mt-4">
                            <button className="bt bg-gradient-to-b from-green-600 to-green-800 text-white text-sm px-4 py-2 rounded hover:opacity-90">
                                Courses
                            </button>
                        </div>
                        <div className="challenge mt-14 bg-black text-center py-4 px-4 sm:px-6 lg:px-10">
                            <h2 className="text-[#00E320] font-bold text-3xl sm:text-4xl lg:text-5xl">#CHALLENGE</h2>
                            <div className="bet text-[#00E320] text-2xl sm:text-3xl lg:text-4xl font-light mb-8">
                                We bet you cannot score <span className="font-bold">80/100</span>
                            </div>
                            <div className="step text-gray-300 text-sm sm:text-base font-medium leading-relaxed">
                                <div>Step 1: Download App &gt; Step 2: Enroll in Mock Tests &gt; Step 3: Check your Score</div>
                            </div>
                        </div>

                        <div className="garent flex flex-col items-center mt-8">
                            <div className="ben bg-[#78C60070] text-center rounded px-2 py-1 text-xs mt-16">
                                {guaranteeData.satisfactionText}
                            </div>
                            <h3 className="adv text-center text-[#218515] font-bold text-2xl sm:text-3xl mt-2">
                                <span className="text-black">Advanced</span> Features
                            </h3>
                            <div className="con2 flex flex-col lg:flex-row justify-center mt-8 gap-12">
                                {/* Buttons Section */}
                                <div className="button flex flex-col items-center lg:items-start gap-4">
                                    {guaranteeData.buttons.map((d3, i3) => (
                                        <button
                                            key={i3}
                                            className={`w-full max-w-xs px-4 lg:max-w-sm h-12 lg:h-14 text-center rounded-lg ${i3 === 0
                                                ? "bg-gradient-to-r from-green-800 to-green-600 text-white"
                                                : "bg-white border border-black text-black"
                                                }`}
                                        >
                                            {d3}
                                        </button>
                                    ))}
                                </div>

                                {/* Features Section */}
                                <div className="Flex flex-1">
                                    <ul className="flex flex-col items-start list-none gap-4">
                                        <li className="flex1 text-base sm:text-lg lg:text-xl font-semibold">
                                            <h2>{guaranteeData.mainFeature}</h2>
                                        </li>
                                        {guaranteeData.features.map((feature, i3) => (
                                            <li key={i3} className="l1 flex items-center gap-2 text-sm sm:text-base">
                                                <img src="public/images/vector.png" alt="" className="w-4 h-4" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Section */}
                                <div className="i1 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={guaranteeData.image}
                                        alt=""
                                        className="rounded-lg w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-[4.4rem]">
                            {/* FAQ Title */}
                            <div className="ben text-center text-lg font-semibold leading-normal">{faqData.title}</div>
                            <h3 className="adv font-bold text-2xl sm:text-3xl mt-2 text-center">
                                🧠 Frequently asked <span className="text-green-600">Q</span>
                            </h3>

                            {/* FAQ List */}
                            <ul className="faq list-none w-full max-w-4xl mt-8">
                                {faqData.questions.map((question, index) => (
                                    <li key={index} className="border-b border-black py-6">
                                        <div className="q flex items-center">
                                            {/* Icon */}
                                            <img
                                                src={question.icon}
                                                alt="Arrow Icon"
                                                className="w-4 h-5 sm:w-5 sm:h-6 lg:w-6 lg:h-7"
                                            />
                                            {/* Question Text */}
                                            <span className="font-normal text-base sm:text-lg lg:text-xl">
                                                {question.text}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="social md:flex mt-32 mx-4 sm:mx-10">
                            <div className="w-full sm:w-auto">
                                <img
                                    src={socialMediaData.image}
                                    className="mahila2 w-[800px]"
                                    alt="Social Media Illustration"
                                />
                            </div>
                            <div className="media w-full sm:w-auto xsm:ml-8  xsm:mr-8 mt-8 ">
                                <p className="soc text-left sm:text-xl font-medium leading-[21.78px] sm:leading-[28px] no-underline">
                                    {socialMediaData.title}
                                </p>
                                <p className="soc2 text-left font-bold text-2xl sm:text-3xl leading-[48.4px] mt-8">
                                    {socialMediaData.subtitle}
                                </p>
                                <p className="soc3 text-left sm:text-xl font-normal leading-[26.31px] text-[#7D7D7D]">
                                    {socialMediaData.description}
                                </p>
                                <div className="media2 flex gap-8 mt-5 flex-wrap sm:justify-start">
                                    {socialMediaData.iconsRow1.map((icon, index) => (
                                        <img
                                            key={index}
                                            src={icon.src}
                                            alt={icon.alt}
                                            className="Ytube lg:w-[60px] lg:h-[60px] xsm:w-[49px] xsm:h-[49px]"
                                        />
                                    ))}
                                </div>
                                <div className="media3 flex gap-8 mt-7 sm:justify-start">
                                    {socialMediaData.iconsRow2.map((icon, index) => (
                                        <img
                                            key={index}
                                            src={icon.src}
                                            alt={icon.alt}
                                            className="utYtube lg:w-[60px] lg:h-[60px] xsm:w-[49px] xsm:h-[49px]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer className="bg-[#181a1f] text-[#ccc] mt-10">
    {/* Footer Content */}
    <div className="footer-content w-full  mx-auto p-4 sm:p-8 grid gap-6 sm:gap-8  md:grid-cols-4 xsm:grid-cols-2 ">
        {footerData.sections.map((section, index) => (
            <div className="footer-section text-center" key={index}>
                <h4 className="text-md sm:text-lg font-medium mb-4">{section.title}</h4>
                <ul className="list-none space-y-2">
                    {section.links.map((link, i) => (
                        <li key={i}>
                            <a 
                                href={link.url} 
                                className="text-white hover:text-blue-400 transition duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom w-full mx-auto flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-t border-gray-700 mt-6">
        <span className="text-center text-sm sm:text-base mb-4 sm:mb-0">
            {footerData.footerBottom.text}
        </span>
        <div className="pub flex justify-center space-x-6">
            {footerData.footerBottom.socialIcons.map((icon, index) => (
                <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className=" w-5 h-5 hover:scale-110 transition-transform duration-300"
                />
            ))}
        </div>
    </div>
</footer>






        </main >




    )

};

export default Hero;