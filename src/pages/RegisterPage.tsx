function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Crear Cuenta
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Crear Cuenta
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage