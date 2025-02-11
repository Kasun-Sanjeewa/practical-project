import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from "axios";
import { useEffect, useState } from "react";


// <> </> = This is fragment


const Users = () => {
    const [users, setUsers] = useState([]);
    const [submit, setSubmit] = useState(false)
    const [isEdit, setIsEdit] = useState(false);
    const [selectData, setSelectData] = useState({})

    //Get User
    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        axios.get(process.env.REACT_APP_ENDPOINT + '/api/getUsers')
            .then(Response => {
                setUsers(Response.data.response);
            })
            .catch(err => {
                console.error("Axios Error : ", err);
            })
    }


    //Add User

    const addUser = (data) => {

        setSubmit(true)

        const payload = {
            id: data.id,
            name: data.name
        }

        axios.post(process.env.REACT_APP_ENDPOINT + '/api//addUser', payload)
            .then(() => {
                getUser();
                setSubmit(false);
                setIsEdit(false)

            })
            .catch(err => {
                console.error("Axios Error : ", err);
            })
    }


    //Update USer

    const update = (data) => {

        setSubmit(true);
        setIsEdit(true);

        const payload = {
            id: data.id,
            name: data.name
        }

        axios.put(process.env.REACT_APP_ENDPOINT + '/api/updateUser', payload)
            .then(() => {
                getUser();
                setSubmit(false);
                setIsEdit(false)

            })
            .catch(err => {
                console.error("Axios Error : ", err);
            })
    }


    //Delete USer
    const deleteUser = (data) => {
        axios.delete(process.env.REACT_APP_ENDPOINT + '/api/deleteUser', { data: data })
            .then(() => {
                getUser();


            })
            .catch(err => {
                console.error("Axios Error : ", err);
            });
    }





    return (
        <>
            <UserForm addUserProp={addUser} submitProp={submit} updateUserProp={update} isEditProp={isEdit} data={selectData} />
            <UsersTable userProp={users} selecteDataProp={data => {
                setSelectData(data)
                setIsEdit(true)
            }}
                deleteUser={data => window.confirm('Are you sure?') && deleteUser(data)}
            />
        </>
    )
}

export default Users;