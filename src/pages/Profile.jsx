function Profile() {
  return (
    <div className="container text-center mt-5">
      <h2>Mi Perfil</h2>
      <p>Bienvenido a Pizzería Mamma Mía 🍕</p>
      <p>
        <strong>Email:</strong> usuario@gmail.com
      </p>
      <button className="btn btn-danger">
        Cerrar sesión
      </button>
    </div>
  );
}

export default Profile;