import { motion } from "framer-motion";

function Cell({ value, onClick, isWinner }) {
    return (
        <motion.button
            className={`cell ${isWinner ? "winner" : ""}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
        >
            {value}
        </motion.button>
    );
}

export default Cell;