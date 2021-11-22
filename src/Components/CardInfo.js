import React from "react";

import { FaGithub, FaTwitter, FaDiscord, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion"

class CardInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isShowAbout: false};
        this.showAbout = this.showAbout.bind(this);
    }

    showAbout() {
        this.setState(prevState => ({
            isShowAbout: !prevState.isShowAbout
            
        }));

        console.log(this.state.isShowAbout);
    }

    render() {
        return (
            <div class={`${this.props.wrapperClassName}`}>
                <div className="p-6 bg-main2 backdrop-filter backdrop-blur-lg focus:outline-none rounded-t-xl shadow-md flex flex-col justify-between lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:space-x-16">
                    <motion.div whileHover={{rotate: 360}} transition={{duration: 2}} className="flex-shrink-0 border-2 border-second1 rounded-full">
                        <img class="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full" src="./avatar.jpg" alt={"avatar"}/> 
                    </motion.div>
                    <div>
                        <div className="text-xl md:text-2xl font-bold text-text1 mb-1">{this.props.title}</div>
                        <p className="text-text2 text-sm md:text-base font-medium">{this.props.children}</p>
                    </div>
                    <div className="flex justify-center items-center flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
                        <div>
                            <a href="https://github.com/zoxione" target="_blank"><FaGithub className="w-8 h-8 text-text2 hover:text-text1" /></a>
                        </div>
                        <div>
                            <a href="https://twitter.com/ZOXIONE" target="_blank"><FaTwitter className="w-8 h-8 text-text2 hover:text-text1" /></a>
                        </div>
                    </div>
                </div>
                <AnimatePresence initial={false}>
                    { this.state.isShowAbout &&
                        <motion.div
                            initial={{
                                height: 0,
                                //opacity: 0,
                            }}
                            animate={{
                                height: 'auto',
                                //opacity: 1,
                            }}
                            exit={{
                                height: 0,
                                //opacity: 0,
                            }}
                            transition={{
                                duration: 0.5
                            }} 
                            style={{
                                overflow: 'hidden'
                            }}
                            className="bg-main2 focus:outline-none shadow-md"
                        >
                            <div className="border-t-2 border-text2 mx-6" />
                            <div className="p-6">
                                <h1 className="text-xl md:text-2xl font-bold text-text1 mb-1">About</h1>
                                <p className="text-text2 text-sm md:text-base font-medium">Hello, my name is Bair and I am from Russia. I just started to do programming and I love it. Right now I'm just studying and learning something new. This is my first website! Thanks for reading it :3</p>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
                <div>
                    <button onClick={this.showAbout} className="h-5 min-w-full bg-second1 rounded-b-xl shadow-md flex justify-center">
                        { this.state.isShowAbout && 
                            <FaChevronUp className="w-5 h-5 text-main1 animate-pulse " />
                        }
                        { !this.state.isShowAbout && 
                            <FaChevronDown className="w-5 h-5 text-main1 animate-pulse " />
                        }
                    </button>
                </div>
                
            </div>
        );
    }
}

export default CardInfo;