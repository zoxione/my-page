import React from "react";

import CardInfo from "./Components/CardInfo";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Progress from "./Components/Progress";

//import { motion, AnimatePresence } from "framer-motion"
import { SiCplusplus, SiCsharp, SiJavascript, SiPython, SiKotlin, SiNodedotjs, SiReact, SiVuedotjs, SiVisualstudio } from "react-icons/si";

function App() {
    return (
        <>
            <div className="my-20 md:my-36">
                <CardInfo className="w-3/6 mx-auto shadow-md" />
                
                <Header title="skills" />

                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-8 md:space-y-0">
                    <Card title="Languages">
                        <ul className="space-y-4">
                            <li>
                                • C++
                                <div className="flex flex-row items-center space-x-4">
                                    <SiCplusplus className="w-10 h-10 text-second3"/> 
                                    <Progress percent="70"/>
                                </div>
                            </li>
                            <li>
                                • C#
                                <div className="flex flex-row items-center space-x-4">
                                    <SiCsharp className="w-10 h-10 text-second3"/> 
                                    <Progress percent="20" />
                                </div>
                            </li>
                            <li>
                                • JavaScript
                                <div className="flex flex-row items-center space-x-4">
                                    <SiJavascript className="w-10 h-10 text-second3"/> 
                                    <Progress percent="50" />
                                </div>
                            </li>
                            <li>
                                • Python
                                <div className="flex flex-row items-center space-x-4">
                                    <SiPython className="w-10 h-10 text-second3"/> 
                                    <Progress percent="30" />
                                </div>
                            </li>
                            <li>
                                • Kotlin
                                <div className="flex flex-row items-center space-x-4">
                                    <SiKotlin className="w-10 h-10 text-second3"/> 
                                    <Progress percent="5" />
                                </div>
                            </li>
                        </ul>
                    </Card>
                    <Card title="Technologies">
                        <ul className="space-y-4">
                            <li>
                                • Visual Studio 
                                <div className="flex flex-row items-center space-x-4">
                                    <SiVisualstudio className="w-10 h-10 text-second3"/> 
                                    <Progress percent="70" />
                                </div>
                            </li>
                            <li>
                                • NodeJS
                                <div className="flex flex-row items-center space-x-4">
                                    <SiNodedotjs className="w-10 h-10 text-second3"/> 
                                    <Progress percent="20"/>
                                </div>
                            </li>
                            <li>
                                • React
                                <div className="flex flex-row items-center space-x-4">
                                    <SiReact className="w-10 h-10 text-second3"/> 
                                    <Progress percent="40" />
                                </div>
                            </li>
                            <li>
                                • Vue
                                <div className="flex flex-row items-center space-x-4">
                                    <SiVuedotjs className="w-10 h-10 text-second3"/> 
                                    <Progress percent="40" />
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>
            

            

            {/* 
            <Header title="projects" />
            <div className="space-y-6">
                <Card wrapperClassName="w-3/6 mx-auto" title="Waifuston">
                <motion.img whileTap={{scale: 1.5}} className="rounded-md" src="./waifuston.png" alt={"waifuston"}/>
                <p>
                    https://waifuston.com
                </p>
                </Card>

                <Card wrapperClassName="w-3/6 mx-auto" title="Waifuverse">
                <motion.img whileTap={{scale: 1.5}} className="rounded-md" src="./waifuverse-waitlist.png" alt={"waifuverse"}/> 
                <p>
                    https://waifuverse.com
                </p>
                </Card>
            </div>
            */}
            

            </div>
        </>
    )
}

export default App;
