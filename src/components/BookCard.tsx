import { Link } from "react-router-dom"

type BookCardProps = {
  id: number
  title: string
  author: string
  year: string
  description: string
}

function BookCard({
  id,
  title,
  author,
  year,
  description,
}: BookCardProps) {

  return (

    <Link to={`/books/${id}`}>

      <div className="bg-white rounded-2xl shadow-md p-4 min-w-62.5 hover:scale-105 transition cursor-pointer">

        <div className="h-40 bg-gray-300 rounded-xl mb-4"></div>

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-600">
          {author}
        </p>

        <p className="text-gray-500 text-sm mb-2">
          {year}
        </p>

        <p className="text-sm text-gray-700">
          {description}
        </p>

      </div>

    </Link>

  )
}

export default BookCard