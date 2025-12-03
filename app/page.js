export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Hi, I'm Brayden!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          I am a software engineer. I feel confident in my abilities to create solutions that are both efficient and effective. I am passionate about learning new technologies and continuously improving my skills.
        </p>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            📝 TODO: Customize Your Homepage
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li>✏️ Change the heading to include your name</li>
            <li>✏️ Write a brief introduction about yourself</li>
            <li>✏️ Add navigation links to your other pages</li>
            <li>✏️ Choose your own color scheme</li>
            <li>✏️ Make it responsive for mobile devices</li>
          </ul>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <p className="text-yellow-900 font-semibold">
            💡 Tip: Check the README.md for detailed instructions and examples!
          </p>
        </div>
      </div>
    </div>
  )
}
