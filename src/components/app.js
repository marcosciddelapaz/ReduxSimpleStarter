import React, { Component } from "react";
import { connect } from "react-redux";
import { showUsers } from "../actions";

// Configurar el componente principal para que muestre el listado de usuarios
class App extends Component {
  //La función debe llamarse cuando el componente se cargue
  componentWillMount() {
    this.props.showUsers();
  }

  renderUsersList() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h2>Users List</h2>
        <ul>{this.renderUsersList()}</ul>
      </div>
    );
  }
}

// Función de mapeo del state a propiedades (del store general de redux)
function mapStateToProps(state) {
  return {
    users: state.user.list,
  };
}

// Se debe pasar una función con un mapeo y la aplicación. Pasar en el mapeo la acción como si fuese una función más que está en las propiedades del componente
export default connect(mapStateToProps, { showUsers })(App);
