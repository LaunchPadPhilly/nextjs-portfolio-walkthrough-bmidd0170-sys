import Image from 'next/image'

export default function Projects() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1: Recipe Finder */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            {/* Project logo */}
            <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
              <div className="text-center">
                <Image 
                  src="/favicon.svg"
                  alt="Recipe Finder Logo"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Recipe Finder</h3>
              <p className="text-gray-600 mb-3 text-sm">
                A web application that helps users discover and search for recipes based on ingredients. Features include filtering by cuisine type, dietary restrictions, and detailed recipe instructions with ingredient lists.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">API</span>
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Search</span>
              </div>
              <a href="https://recipe-finder-gamma-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 text-sm rounded-lg hover:shadow-lg transition">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 2: Stratus Sphere */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            {/* Project logo */}
            <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <Image 
                  src="/stratussphere-logo.svg"
                  alt="Stratus Sphere Logo"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Stratus Sphere</h3>
              <p className="text-gray-600 mb-3 text-sm">
                A weather application that displays real-time weather information for any location worldwide. Includes current conditions, hourly forecasts, and a beautiful, responsive user interface with interactive maps.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">Weather API</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Geolocation</span>
              </div>
              <a href="https://stratus-sphere-flax.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 text-sm rounded-lg hover:shadow-lg transition">
                View Project →
              </a>
            </div>
          </div>

          {/* Project 3: Movie Database */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            {/* Project logo */}
            <div className="h-40 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl">🎬</p>
              </div>
            </div>
            
            {/* Project details */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Movie Database</h3>
              <p className="text-gray-600 mb-3 text-sm">
                A comprehensive movie database application where users can search for films, view detailed information including ratings, cast, and reviews. Features include favoriting movies and personalized recommendations based on viewing history.
              </p>
              <div className="flex gap-2 flex-wrap mb-3">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">TMDB API</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Search</span>
              </div>
              <a href="https://movie-database-react-bmidd0170-sys.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 text-sm rounded-lg hover:shadow-lg transition">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}