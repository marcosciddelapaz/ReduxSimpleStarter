// Definición del action creator
export const SHOW_USERS = "SHOW_USERS";

// Crear una acción que devuelve un objeto de tipo users y cuyo contenido es un listado de usuarios
export function showUsers() {
  // Antes de hacer la llamada API para obtener el listado de clientes hay que deefinir una constante con el listado en local.
  const users = [
    { id: 1, name: "Marcos" },
    { id: 2, name: "Fanny" },
    { id: 3, name: "Fernanda" },
    {
      id: 4,
      name: "Marcos",
    },
  ];
  return {
    //return de un objeto coyo tipo es SHOW_USERS y cuyo payload es un listado de usuarios
    type: SHOW_USERS,
    payload: [],
  };
}
