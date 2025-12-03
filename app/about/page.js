import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <style>{`
        .skill-card {
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-blue:hover {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-green:hover {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-purple:hover {
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-red:hover {
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-yellow:hover {
          box-shadow: 0 0 30px rgba(234, 179, 8, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-indigo:hover {
          box-shadow: 0 0 30px rgba(129, 140, 248, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-pink:hover {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
        .skill-card-cyan:hover {
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        
        <div className="flex gap-8 items-center mb-8">
          {/* Profile photo */}
          <Image 
            src="/DSC_0940.jpg"
            alt="My photo"
            width={300}
            height={300}
            className="rounded-full"
          />
          
          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Brayden Middlebrooks</h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm a passionate developer from Philadelphia with a strong foundation in web development. Currently, I'm a program participant at LaunchPad Philly, where I'm honing my skills in modern web technologies and building practical full-stack applications.
            </p>
            <p className="text-lg text-gray-700">
              I'm dedicated to creating responsive, user-friendly web experiences using React, Next.js, and Tailwind CSS. I'm always eager to learn new technologies and collaborate with other developers to build innovative solutions.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="skill-card skill-card-blue bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">🏗️</p>
              <p className="font-semibold text-sm">HTML & CSS</p>
            </div>
            <div className="skill-card skill-card-green bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">⚡</p>
              <p className="font-semibold text-sm">JavaScript</p>
            </div>
            <div className="skill-card skill-card-purple bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">▲</p>
              <p className="font-semibold text-sm">Next.js</p>
            </div>
            <div className="skill-card skill-card-red bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">⚛️</p>
              <p className="font-semibold text-sm">React</p>
            </div>
            <div className="skill-card skill-card-yellow bg-gradient-to-br from-yellow-500 via-amber-400 to-orange-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">🎨</p>
              <p className="font-semibold text-sm">Tailwind CSS</p>
            </div>
            <div className="skill-card skill-card-indigo bg-gradient-to-br from-indigo-600 via-purple-500 to-blue-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">🔧</p>
              <p className="font-semibold text-sm">Node.js</p>
            </div>
            <div className="skill-card skill-card-pink bg-gradient-to-br from-pink-500 via-rose-400 to-red-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">🐙</p>
              <p className="font-semibold text-sm">Git & GitHub</p>
            </div>
            <div className="skill-card skill-card-cyan bg-gradient-to-br from-cyan-500 via-teal-400 to-blue-500 text-white p-3 rounded-2xl text-center cursor-pointer transform hover:scale-105">
              <p className="text-xl mb-1">📱</p>
              <p className="font-semibold text-sm">Responsive Design</p>
            </div>
          </div>
        </div>

        {/* Education and Experience Side by Side */}
        <div className="flex gap-8 mb-8">
          {/* Education - Left */}
          <div className="flex-1 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  High School Diploma
                </h3>
                <p className="text-gray-600">Science Leadership Academy at Beeber</p>
                <p className="text-sm text-gray-500">Class of 2025</p>
                <p className="text-gray-700 mt-2">
                  Graduated from Science Leadership Academy at Beeber with focus on STEM education and leadership development.
                </p>
              </div>
            </div>
          </div>

          {/* Experience - Right */}
          <div className="flex-1 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Program Participant / Developer
                </h3>
                <p className="text-gray-600">LaunchPad Philly</p>
                <p className="text-sm text-gray-500">May 2024 - Present</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Building modern web applications with React and Next.js</li>
                  <li>Developing full-stack projects and learning industry best practices</li>
                  <li>Collaborating with mentors and peers in the tech community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}