export default function EntrevistaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <span className="text-6xl mb-4 block">👧🧒</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Voces de la Infancia
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Una conversación sobre juegos tradicionales que nos invita a reflexionar
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Introducción */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-purple-500">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Conversamos con niños de educación inicial para conocer su relación con los juegos tradicionales. 
              Sus respuestas revelan una realidad que nos invita a actuar: <strong className="text-purple-600">la memoria 
              cultural de los juegos está desapareciendo</strong>, pero el interés de los niños por aprender sigue vivo.
            </p>
          </div>
        </div>

        {/* La Realidad Actual - Visualización con íconos */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            ¿Qué descubrimos?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Juegos Digitales</h3>
              <p className="text-gray-600">
                La mayoría prefiere celulares y tablets sobre juegos tradicionales
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">❓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Desconocimiento</h3>
              <p className="text-gray-600">
                Pocos niños conocen juegos como la rayuela, el trompo o las canicas
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hay Esperanza</h3>
              <p className="text-gray-600">
                Los niños muestran entusiasmo por aprender juegos nuevos
              </p>
            </div>
          </div>
        </div>

        {/* Comparación Visual */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Entonces vs. Ahora
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Antes */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <span className="text-5xl">🏃‍♂️</span>
                  <h3 className="text-2xl font-bold text-green-600 mt-3">Antes</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">Jugar en la calle con amigos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">Rayuela, trompo, canicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">Movimiento y ejercicio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">Transmisión cultural familiar</span>
                  </li>
                </ul>
              </div>

              {/* Ahora */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-center mb-4">
                  <span className="text-5xl">📱</span>
                  <h3 className="text-2xl font-bold text-orange-600 mt-3">Ahora</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 text-xl">•</span>
                    <span className="text-gray-700">Jugar en casa, individualmente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 text-xl">•</span>
                    <span className="text-gray-700">Videojuegos y aplicaciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 text-xl">•</span>
                    <span className="text-gray-700">Menos actividad física</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 text-xl">•</span>
                    <span className="text-gray-700">Pérdida de prácticas culturales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje Principal */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-6">
              <span className="text-6xl mb-4 block">💡</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué es importante rescatar los juegos tradicionales?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-xl mb-2">Interacción Social</h3>
                <p className="opacity-90">Promueven el juego en grupo, la comunicación y el trabajo en equipo</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🏃</div>
                <h3 className="font-bold text-xl mb-2">Actividad Física</h3>
                <p className="opacity-90">Desarrollan coordinación, equilibrio y movimiento corporal</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-bold text-xl mb-2">Identidad Cultural</h3>
                <p className="opacity-90">Conectan a los niños con sus raíces y tradiciones</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="font-bold text-xl mb-2">Valores</h3>
                <p className="opacity-90">Enseñan respeto, cooperación y convivencia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra Misión */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-500">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">🌟</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nuestra Misión
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Esta <strong className="text-purple-600">Revista Digital Intercultural</strong> nace como respuesta 
              a esta realidad. Queremos ser un puente entre generaciones, un espacio donde niños, familias y 
              docentes puedan <strong>redescubrir, aprender y valorar</strong> los juegos tradicionales.
            </p>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
              <p className="text-gray-700 italic text-lg">
                "Los niños mostraron entusiasmo cuando se les preguntó si querían aprender juegos nuevos. 
                Esto nos dice que <strong>el interés está ahí</strong>, solo necesitan acceso a estos conocimientos 
                de manera atractiva y divertida."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8 md:p-12 border-2 border-green-300">
            <span className="text-6xl mb-4 block">🎮</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              ¡Explora y Aprende!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Descubre juegos tradicionales del Ecuador y el mundo en nuestra sección de juegos
            </p>
            <a
              href="/juegos"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Ver Juegos Tradicionales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
