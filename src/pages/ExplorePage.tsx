import BookCard from "../components/BookCard"
import MainLayout from "../layouts/MainLayout"
import { useState } from "react"

function ExplorePage() {

  const books = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      year: "1949",
      description: "Una distopía sobre vigilancia y control."
    },
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
      year: "1965",
      description: "Política, religión y guerra en Arrakis."
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: "1937",
      description: "La aventura de Bilbo Bolsón."
    },
    {
      id: 4,
      title: "Foundation",
      author: "Isaac Asimov",
      year: "1951",
      description: "La caída del Imperio Galáctico."
    },
    {
      id: 5,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: "1953",
      description: "Un mundo donde los libros están prohibidos."
    },
    {
      id: 6,
      title: "Neuromancer",
      author: "William Gibson",
      year: "1984",
      description: "Cyberpunk y hackers en el futuro."
    }
  ]

  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {

  if (favorites.includes(id)) {
    setFavorites(favorites.filter(bookId => bookId !== id))
  } else {
    setFavorites([...favorites, id])
  }

}

  return (

    <MainLayout>

      <h1 className="text-5xl font-bold mb-8">
        Explorar
      </h1>

      {/* Barra búsqueda */}
      <div className="mb-10">

        <input
          type="text"
          placeholder="Buscar libros..."
          className="w-full p-4 rounded-2xl shadow-md bg-white outline-none"
        />

      </div>

      {/* Grid libros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {books.map((book) => (

          <div
            key={book.id}
            className="relative"
          >

            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              description={book.description}
              isFavorite={favorites.includes(book.id)}
              onToggleFavorite={() => toggleFavorite(book.id)}
            />

            <button
              className="absolute top-3 right-3 bg-blue-600 text-white w-8 h-8 rounded-full hover:bg-blue-700 transition"
            >
              +
            </button>

          </div>

        ))}

      </div>

    </MainLayout>

  )
}

export default ExplorePage