import React from "react";

import { motion, AnimatePresence } from "framer-motion"

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class={`${this.props.wrapperClassName}`}>
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    className="p-6 bg-main2 focus:outline-none rounded-xl shadow-md space-y-4"
                >
                    <h1 className="text-xl md:text-2xl font-bold text-text1 mb-1">{this.props.title}</h1>
                    <p className="text-text2 text-sm md:text-base font-medium">{this.props.children}</p>
                </motion.div>
            </div>
        );
    }
}

export default Card;