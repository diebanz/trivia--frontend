import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignInAlt } from "react-icons/fa";

import classes from "./../sass/common/LogInSquare.module.scss";

function LogInSquare() {
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ rotate: "0deg" }}
                    animate={{ rotate: "360deg" }}
                    transition={{ duration: 1 }}
                >
                    <div className={classes.login__square}>
                        <FaSignInAlt className={classes.login__icon} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default LogInSquare;
