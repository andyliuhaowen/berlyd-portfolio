import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Another () {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/todo">The main page.</Link>
      </motion.div>
      <motion.figure layoutId="image">
        <Image src="/image.jpg" alt="logo" width="300" height="600" />
      </motion.figure>
      <motion.h1 layoutId="title" className="text-4xl">
        The only Todo app youll ever need.
      </motion.h1>
    </main>
  )
}
