import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ToDo () {
  return (
    <main>
      <motion.h1 layoutId="title" className="text-4xl">
        The only Todo app youll ever need.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="another_page">Another page.</Link>
      </motion.div>
      <motion.figure layoutId="image">
        <Image src="/image.jpg" alt="logo" width="400" height="600"/>
      </motion.figure>
    </main>
  )
}
