import React,{useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import {v4 as uuidv4} from 'uuid';


function App() {

  const userData = [
    {id: uuidv4(), name: 'Rafa', username: 'rafarc97'},
    {id: uuidv4(), name: 'Fran', username: 'frangeek'},
    {id: uuidv4(), name: 'Amanda', username: 'alr99'}
  ]

  //state agregar/eliminar usuarios
  const [users,setUsers] = useState(userData);

  //agregar usuarios
  const addUser = (user) => { 

    user.id = uuidv4();

    setUsers([
      ...users,
      user
    ]);
  }

  //eliminar usuarios
  const deleteUser = (id) => {

    const arrayFiltrado = users.filter(user => user.id !== id);

    setUsers(arrayFiltrado);
  }

  //state editar usuarios
  const [editing,setEditing] = useState(false);

  const [currentUser,setcurrentUser] = useState({
    id: null, 
    name: '', 
    username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setcurrentUser({
      id:user.id,
      name:user.name,
      username: user.username
    });
  }

  const updateUser = (id,updateUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing
            ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm 
                  currentUser={currentUser}
                  updateUser = {updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm 
                  addUser={addUser}/>
              </div>
            )
          }  
        </div>  

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} 
          deleteUser={deleteUser} 
          editRow={editRow}/>
        </div>

      </div>
    </div>
  );
}

export default App;