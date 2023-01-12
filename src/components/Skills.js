
const programmingSkills = [
    {
        name: "REACT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    },
    {
        name: "TAILWIND",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tailwind_CSS_logo_and_wordmark.svg/1200px-Tailwind_CSS_logo_and_wordmark.svg.png",
    },
    {
        name: "JAVASCRIPT",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    },
    {
        name: "MYSQL",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tailwind_CSS_logo_and_wordmark.svg/1200px-Tailwind_CSS_logo_and_wordmark.svg.png",
    },
    {
        name: "FIGMA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
    },
    {
        name: "WEBFLOW",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
    },
    {
        name: "WORDPRESS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
    },
    {
        name: "JAVA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    },
    {
        name: "EXPRESS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png",
    }
]

const softSkills = [
    {
        name: "ORGANIZED",
    },
    {
        name: "RESPONSIBLE",
    },
    {
        name: "HONEST",
    },
    {
        name: "METICULOUS",
    },
    {
        name: "UNDERSTANDING OF MY OWN STRENGTHS",
    },
]

const SKILLS = () => {
    return (
        <div>
            <p className="font-bold no-selection text-3xl">SKILLS</p>

            <p className="font-bold no-selection">PROGRAMMING & DESIGN</p>

            <div className="flex flex-wrap gap-x-3 gap-y-3">
                {
                    programmingSkills.map((skill, index) => {
                        return (
                            <div key={index} className="flex bg-gray-accent w-max px-2 py-1 rounded-md justify-center items-center gap-x-4">
                                <img src={skill.img} alt={skill.name} className="w-10 h-10 p-1"/>
                                <p className="font-bold text-xl">{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>

            <p className="font-bold no-selection">SOFT SKILLS</p>

            <div className="flex flex-wrap gap-x-3 gap-y-3">
                {
                    softSkills.map((skill, index) => {
                        return (
                            <div key={index} className="flex bg-gray-accent w-max px-2 py-1 rounded-md justify-center items-center gap-x-4">
                                <p className="font-bold text-xl">{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SKILLS