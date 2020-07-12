import React from 'react';
import {useForm} from 'react-hook-form';


const EditUserForm = ({currentUser,updateUser}) => {

    const {register,errors,handleSubmit,setValue} = useForm({
        //Click en Editar y aparecen los datos del usuario en los inputs de editar
        defaultValues: currentUser
    });

    setValue('name', currentUser.name);
    setValue('username', currentUser.username);

    //Data es lo que viene de los inputs
    const onSubmit = (data,event) => {
        //console.log(data);
        data.id = currentUser.id
        
        updateUser(currentUser.id, data);
        event.target.reset();
    }
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                ref={
                    register({
                        required: {value: true, message: 'Campo requerido'}
                    })
                }
                >
            </input>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input
                type="text"
                name="username"
                ref={
                    register({
                        required: {value: true, message: 'Campo requerido'}
                    })
                }
                >
            </input>
            <div>
                {errors?.username?.message}
            </div>
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;