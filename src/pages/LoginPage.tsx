function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Iniciar Sesión
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>

        <p className="text-center mt-4">
          ¿No tienes cuenta?{" "}
          <span className="text-blue-600 cursor-pointer">
            Crear cuenta
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginPage