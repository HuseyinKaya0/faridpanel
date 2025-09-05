"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-secondary p-4 text-center shadow-lg text-2xl font-bold tracking-widest"
    >
      Farid Logo 🚀
    </motion.header>
  );
}
