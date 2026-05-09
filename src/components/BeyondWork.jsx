import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const hobbies = [
  {
    title: 'Travelling',
    description: 'Chasing new horizons, cultures and cuisines across the globe',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Painting',
    description: 'Finding patterns in colour the way I find them in data',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Cooking',
    description: 'Experimenting with flavours from every culture I discover',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: 'Arts & Crafts',
    description: 'From pottery workshops to glass painting — always creating',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function BeyondWork() {
  return (
    <section id="beyond-work" className="py-24 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-semibold tracking-widest uppercase mb-2">The person behind the analyst</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-light">Beyond Work</h2>
          <p className="text-slate-muted mt-3 text-base">When I'm not analysing data...</p>
        </motion.div>

        {/* Hobby cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-navy-light border border-navy-lighter rounded-2xl p-6 text-center hover:border-teal/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mx-auto mb-4 group-hover:bg-teal/20 transition-colors">
                {hobby.icon}
              </div>
              <h3 className="text-slate-light font-bold text-base mb-2">{hobby.title}</h3>
              <p className="text-slate-muted text-sm leading-relaxed">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
