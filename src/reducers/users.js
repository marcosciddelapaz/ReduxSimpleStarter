import { SHOW_USERS } from "../actions";

// Se considera que la lista de usuarios inicial es vacía
const initialState = {
  list: [],
};

// Recibe el estado y la acción
export function showUsers(state = initialState, action) {
  // Detectar si la cláusula es de tipo showUsers
  switch (action.type) {
    case SHOW_USERS:
      /* Se debe devolver un nuevo estado.
        Object.assign(nuevo estado, propiedades de state que se asignan. origen de la lista de usuarios)
        El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.
        Object.assign(objetivo, ...fuentes); */
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}
