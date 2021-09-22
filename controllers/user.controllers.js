const ctrlHome = {};
const { request, response } = require("express");
const User = require("../models/Products");

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
  const users = await User.find({ activo: true }); // consulta para todos los documentos

  // Respuesta del servidor
  res.json(users);
};

// Controlador que almacena un nuevo producto
ctrlHome.rutaPost = async (req, res) => {

  const { nombre, precio, categoria } = req.body;

  try {
    const product = new User({ nombre, precio, categoria});
    await product.save();
    res.json({
      product
    });
  } catch (error) {
    console.log("Error al crear el nuevo prodcuto: ", error);
    res.status(500).json({ msg: "Error al crear nuevo producto" });
  }
};

// Controlador que actualiza información de los usuarios
ctrlHome.rutaPut = async (req = request, res = response) => {

  // const id = req.params.id;
  const { id } = req.params;
  const { username, password, role, ...restoDeDatos } = req.body

  try {
    const user = await User.findByIdAndUpdate(id, { username, password, role }, { new: true});
    
    return res.json(user);
  } catch (error) {
    console.log("Error al actualizar usuario: ", error);
    res.status(500).json({ msg: "Error al actualizar usuario" });
  }
};


// Controlador para eliminar un usuario de la BD físicamente
ctrlHome.rutaDelete = async (req, res) => {
  const { id } = req.body;

  try {
    // Ejecución normal del programa
    await User.findByIdAndDelete(id);

    return res.json({
      msg: "Usuario eliminado correctamente",
    });
  } catch (error) {
    // Si ocurre un error
    console.log("Error al eliminar usuario: ", error);
  }
};

// Cambiar el estado activo de un usuario (Eliminación lógica)
ctrlHome.deleteUser = async (req, res) => {
  const { id } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { activo: false },
    { new: true }
  );

  // Respuesta del servidor
  res.json({
    msg: "Usuario eliminado correctamente",
    user,
  });
};

module.exports = ctrlHome;
