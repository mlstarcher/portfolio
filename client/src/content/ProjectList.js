const projectList = [
  {
    title: 'The Ethical Eatery',
    technologies: 'React | React Router | Bootstrap | Firebase | Stripe API',
    description: 'An online hub for restaurant owners to create listings and accept orders and credit card payments from their customers direct.',
    bulletPoints: [
      'Implemented Firebase user auth linked with custom database and React context to create persistent custom user settings',
      'Led four member team designing and building prototype five days',
      'Built dynamic checkout system with stripe api for credit card payments'
    ],
    videoUrl: 'https://www.youtube.com/embed/EoTr1pTm4ns',
  },
  {
    title: 'Champions',
    technologies: 'Node.js | React | PostGres | AWS | NGNX | K6 | Loader.io',
    description: 'Champions was an oppotunity to inherent and optimize a legacy codebase.  This process included testing and tuning database queries, deploying to EC2 and implementing load balancing and caching with NGINX',
    bulletPoints: [
      'Created and seeded 10M test entries to scaled database for testing',
      'Indexed database increasing search result times from 829ms to .6ms, increasing rps from 1.5/s to 0.601ms in local K6 stress testing',
      'Horizontally scaled EC2 instances employing NGINX load balancing to widen bottleneck of 530/rps with .6% error rate and 221ms average response time to 2000/rps with 0% error rate and 82ms average'
  ],
    videoUrl: 'https://www.youtube.com/embed/eIod4z1Qc3k',
  },
  {
    title: 'Just Do It',
    technologies: 'React | CSS3 | Node.js | MongoDB/Mongoose | Microservice Architecture',
    description: 'A full-stack replica of Nike\'s Lebron 18 product page with a focus on front end design',
    bulletPoints: [
      'Manually reproduced Nike’s dynamic header menus using CSS and React',
      'Designed client side render of search results on keystroke entry',
      'Built proxy to combine all services replicated from Lebron 18 product page '
    ],
    videoUrl: 'https://www.youtube.com/embed/hB2zOcGnC88',
  },
// {
//   title: 'Solenoid Drummer',
//   technologies: 'Ardunio | Solenoids | MIDI | Ableton',
//   description: 'This project combined some robotics, and an arduino to produce MIDI sequencable roboticized mallets.  **WARNING THIS VIDEO CONTAINS PEAK QUARANTINE HAIR!**',
//   bulletPoints: [
//     'Created robotic mallet controllers using solenoids and cabinet hardware',
//     'Built system to translate CPU/DAW based MIDI messages into electric control pulses',
//     'Deployed a configuration of piezo mics to capture and manipulate the sounds generated'
//   ],
//   videoUrl: 'https://www.youtube.com/embed/FGWivylNGuM',
// }
]

export default projectList;