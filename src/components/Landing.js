import Experience from "./Experience"
import DividerLine from "./DividerLine"
import Skills from "./Skills"

const Landing = () => {
    return (
        <div>
            <div className="flex items-center justify-evenly h-auto">
                <h1 className="font-bold flex-col no-selection"><p>AGUSTIN</p> <p>DELL' AQUILA.</p></h1>
            </div>

            <DividerLine mt={10} mb={10}/>

            <Experience/>

            <DividerLine mt={10} mb={10}/>

            <Skills/>

            <DividerLine mt={10} mb={10}/>

        </div>
    )
}

export default Landing