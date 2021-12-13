import { motion } from "framer-motion"

function Card(props) {
    return (
        <div className={props.className}>
            <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="p-6 bg-main2 focus:outline-none rounded-xl shadow-md space-y-4"
            >
                <h1 className="text-xl md:text-2xl font-bold text-text2 text-center mb-1">{props.title}</h1>
                <p className="text-text2 text-sm md:text-base font-medium">{props.children}</p>
            </motion.div>
        </div>
    );
}

export default Card;