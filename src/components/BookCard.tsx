type BookCardProps = {
  title: string
  author: string
  year: string
  description: string
}

function BookCard({
  title,
  author,
  year,
  description,
}: BookCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 min-w-[250px]">

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
  )
}

export default BookCard