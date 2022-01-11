import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";

function LogInSquare() {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 1, repeat: 2 }}
                >
                    <div className="login__square rotating">
                        <FaSignInAlt className="login__icon" />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default LogInSquare;
