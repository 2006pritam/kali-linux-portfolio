import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about aslam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="aslam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full rounded-full" src="./images/logos/pritam-photo.jpg" alt="Pritam Kumar Modak" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">PRITAM KUMAR MODAK</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Web Developer & AI/ML Researcher!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Computer Applications Student</span> at Supreme Institute of Management and Technology, hailing from Kalna, West Bengal. I'm pursuing my Bachelor's degree with aspirations of becoming a software developer at Google! ( Hit me up <a className='text-underline' href='mailto:modakpritam06@gmail.com'><u>modakpritam06@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building">I'm passionate about web development and AI/ML research, constantly learning and growing in the tech field. </li>
                <li className=" mt-3 list-time">When I'm not coding, you'll find me exploring new technologies, working on innovative projects, or diving deep into machine learning algorithms and web development frameworks.</li>
                <li className=" mt-3 list-star">I've completed 20+ projects and I'm committed to continuous learning and growth in technology. My dream is to work at Google and contribute to cutting-edge software solutions.</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Supreme Institute of Management and Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2024 - Present</div>
                    <div className=" text-sm md:text-base">Bachelor in Computer Application</div>
                    <div className=" text-xs text-gray-500 mt-1">Currently pursuing with focus on Software Development and AI/ML</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Higher Secondary Education
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2024</div>
                    <div className=" text-sm md:text-base">Science Stream - Physics, Chemistry, Mathematics, Computer Science</div>
                    <div className=" text-xs text-gray-500 mt-1">From Kalna, West Bengal</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                Proficient in web development technologies including frontend and backend development, with strong foundation in modern frameworks and libraries.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> Experienced in <strong className="text-ubt-gedit-orange">AI/ML research, machine learning algorithms, data analysis, and artificial intelligence applications!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used technologies and tools</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center gap-2 items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-React-%2361DAFB?style=flat&logo=react&logoColor=000000&labelColor=%2361DAFB&color=%2361DAFB" alt="pritam react" />  
                        <img className="m-1" src="https://img.shields.io/badge/-Node.js-%23339933?style=flat&logo=node.js&logoColor=FFFFFF&labelColor=%23339933&color=%23339933" alt="pritam nodejs" />  
                        <img className="m-1" src="https://img.shields.io/badge/-TensorFlow-%23FF6F00?style=flat&logo=tensorflow&logoColor=FFFFFF&labelColor=%23FF6F00&color=%23FF6F00" alt="pritam tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/-MongoDB-%2347A248?style=flat&logo=mongodb&logoColor=FFFFFF&labelColor=%2347A248&color=%2347A248" alt="pritam mongodb" />
                        <img className="m-1" src="https://img.shields.io/badge/-Express.js-%23000000?style=flat&logo=express&logoColor=FFFFFF&labelColor=%23000000&color=%23000000" alt="pritam express" />
                        <img src="https://img.shields.io/badge/-Github-%23000000?style=flat&logo=github&logoColor=%23ffffff" alt="pritam github" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start gap-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="pritam python" />
                        <img className=" m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="pritam javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-HTML5-%23E34F26?style=flat&logo=html5&logoColor=white&labelColor=%23E34F26&color=%23E34F26" alt="pritam HTML" />
                        <img className="m-1" src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat&logo=css3&logoColor=white&labelColor=%231572B6&color=%231572B6" alt="pritam CSS" />
                        <img className="m-1" src="https://img.shields.io/badge/-Java-%23ED8B00?style=flat&logo=java&logoColor=white&labelColor=%23ED8B00&color=%23ED8B00" alt="pritam java" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="pritam linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "AI-Powered Web Application",
            date: "Oct 2024 - Present",
            link: "https://github.com/pritammodak",
            description: [
                "Developed a full-stack web application integrating machine learning models for predictive analytics and user personalization.",
            ],
            domains: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"]
        },
        {
            name: "E-Commerce Platform",
            date: "Aug 2024 - Sep 2024",
            link: "https://github.com/pritammodak",
            description: [
                "Built a complete e-commerce solution with user authentication, payment integration, and admin dashboard for inventory management.",
            ],
            domains: ["React", "Express.js", "MongoDB", "Stripe API", "JWT"]
        },
        {
            name: "Machine Learning Model Collection",
            date: "Jun 2024 - Present",
            link: "https://github.com/pritammodak",
            description: [
                "Developed multiple ML models including image classification, sentiment analysis, and recommendation systems with high accuracy rates.",
            ],
            domains: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
            name: "Portfolio Website",
            date: "Nov 2024",
            link: "https://github.com/pritammodak",
            description: [
                "Created this interactive portfolio website simulating a Linux desktop environment to showcase my projects and skills.",
            ],
            domains: ["Next.js", "React", "Tailwind CSS", "JavaScript"]
        },
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "react": "blue-400",
        "node.js": "green-500",
        "python": "green-200",
        "tensorflow": "orange-500",
        "mongodb": "green-600",
        "express.js": "gray-400",
        "next.js": "purple-600",
        "tailwind css": "blue-300",
        "jwt": "purple-400",
        "stripe api": "purple-500",
        "scikit-learn": "orange-400",
        "pandas": "blue-600",
        "numpy": "blue-500",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <div className="h-full w-full p-8 bg-gray-900 text-white overflow-y-auto">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">PRITAM KUMAR MODAK</h1>
                    <p className="text-xl text-blue-400 mb-4">Web Developer & AI/ML Researcher</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <span>📧 modakpritam06@gmail.com</span>
                        <span>📱 +919064662830</span>
                        <span>📍 Kalna, West Bengal, India</span>
                        <span>🎂 January 19, 2006</span>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Computer Applications Student at Supreme Institute of Management and Technology, hailing from Kalna, West Bengal. 
                        I am pursuing my Bachelor's degree with aspirations of becoming a software developer at Google. 
                        Committed to learning and growth in the tech field with 20+ completed projects.
                    </p>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Education</h2>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Bachelor in Computer Application</h3>
                        <p className="text-gray-400">Supreme Institute of Management and Technology | 2024 - Present</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Higher Secondary Education</h3>
                        <p className="text-gray-400">Science Stream - PCM with Computer Science | 2022 - 2024</p>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                            <p className="text-gray-300">Python, JavaScript, Java, HTML5, CSS3</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
                            <p className="text-gray-300">React, Node.js, Express.js, TensorFlow, Next.js</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Databases</h3>
                            <p className="text-gray-300">MongoDB, MySQL</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                            <p className="text-gray-300">Git, GitHub, Linux, VS Code</p>
                        </div>
                    </div>
                </div>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Projects</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">AI-Powered Web Application</h3>
                            <p className="text-gray-400">Full-stack application with ML integration</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">E-Commerce Platform</h3>
                            <p className="text-gray-400">Complete online shopping solution</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Machine Learning Models</h3>
                            <p className="text-gray-400">Image classification and recommendation systems</p>
                        </div>
                    </div>
                </div>
                
                <div className="text-center">
                    <p className="text-gray-400">🎯 Dream Goal: Software Developer at Google</p>
                    <p className="text-gray-400">💻 20+ Projects Completed</p>
                </div>
            </div>
        </div>
    )
}
