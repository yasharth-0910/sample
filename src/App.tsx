import { useState } from 'react'
import {  Github, Linkedin, Mail, Menu } from 'lucide-react'

export default function Component() {
  const [activeCategory, setActiveCategory] = useState('AI')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: 'AI', icon: '🧠', description: 'Pushing the boundaries of artificial intelligence in robotics.' },
    { name: 'Drones', icon: '🚁', description: 'Developing autonomous aerial vehicles for various applications.' },
    { name: 'Humanoids', icon: '🤖', description: 'Creating human-like robots to assist and interact with people.' },
    { name: 'IoT', icon: '🌐', description: 'Connecting robots to the Internet of Things for smarter systems.' },
  ]

  const teamMembers = [
    { name: 'Tushar Singhal', role: 'Head', image: '/placeholder.svg?height=400&width=400' },
    { name: 'Archit Jain', role: 'Teachnical Head', image: '/placeholder.svg?height=400&width=400' },
    { name: 'Saransh Agarwal', role: 'Management Head', image: '/placeholder.svg?height=400&width=400' },
    { name: 'Vanisha Agarawal', role: 'Technical Head', image: '/placeholder.svg?height=400&width=400' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white font-sans">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div id="stars" className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <header className="fixed w-full bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                CICR Robotics
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  <Menu />
                </button>
              </div>
              <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                {['About', 'Projects', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-300 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Welcome to CICR 
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-300">Innovating the future of robotics at JIIT 128</p>
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <button className="px-8 py-3 bg-gray-900 rounded-full hover:bg-opacity-80 transition-colors text-lg">
                  Explore Our Projects
                </button>
              </div>
            </div>
          </section>

          <section id="about" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                About Us
              </h2>
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-2xl">
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  The Center for Intelligent and Cognitive Robotics (CICR) Robotics Society at JIIT 128 is a hub for innovation and technological advancement in the field of robotics. Our mission is to foster creativity, critical thinking, and practical skills among students passionate about robotics and artificial intelligence.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Through hands-on projects, workshops, and competitions, we provide a platform for students to explore cutting-edge technologies and contribute to the ever-evolving world of robotics.
                </p>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20 bg-gray-900 bg-opacity-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Our Projects
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`p-4 rounded-lg text-lg font-semibold transition-colors ${
                      activeCategory === category.name
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-lg shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeCategory} Projects</h3>
                <p className="text-lg md:text-xl">
                  {categories.find(c => c.name === activeCategory)?.description}
                </p>
              </div>
            </div>
          </section>

          <section id="team" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-center group">
                    <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-lg transform transition-transform group-hover:scale-105">
                      <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-purple-300">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-gray-900 bg-opacity-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Get in Touch
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-2xl">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                {[Mail, Github, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-purple-300 transition-colors p-2 bg-gray-800 rounded-full"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="py-10 bg-gray-900 bg-opacity-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  CICR 
                </h3>
                <p>JIIT 128, Noida, Uttar Pradesh</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p>&copy; 2023 CICR Robotics Society. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}