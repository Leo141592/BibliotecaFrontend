import BookCard from "../components/BookCard"

function HomePage() {

  const books = [
    {
      title: "1984",
      author: "George Orwell",
      year: "1949",
      description: "Una distopía sobre vigilancia y control."
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      year: "1965",
      description: "Política, religión y guerra en Arrakis."
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: "1937",
      description: "La aventura de Bilbo Bolsón."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Contenido principal */}
      <div className="flex-1 p-8">

        <h1 className="text-5xl font-bold mb-10">
          Biblioteca
        </h1>

        {/* Lecturas en proceso */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Lecturas en proceso
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-2">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                year={book.year}
                description={book.description}
              />
            ))}
          </div>

        </section>

        {/* Lecturas guardadas */}
        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-4">
            Lecturas guardadas
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-2">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                year={book.year}
                description={book.description}
              />
            ))}
          </div>

        </section>

        {/* Lecturas terminadas */}
        <section>

          <h2 className="text-2xl font-semibold mb-4">
            Lecturas terminadas
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-2">
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                author={book.author}
                year={book.year}
                description={book.description}
              />
            ))}
          </div>

        </section>

      </div>

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-8">
          Menú
        </h2>

        <div className="flex flex-col gap-4">

          <button className="text-left hover:text-blue-600 transition">
            Cuenta
          </button>

          <button className="text-left hover:text-blue-600 transition">
            Biblioteca
          </button>

          <button className="text-left hover:text-blue-600 transition">
            Explorar
          </button>

        </div>

      </div>

    </div>
  )
}

export default HomePage