function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-6">
        Bienvenido a BibliotecaFrontend
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Recomendaciones
        </h2>

        <p>
          Aquí aparecerán los libros recomendados.
        </p>
      </div>

    </div>
  )
}

export default HomePage