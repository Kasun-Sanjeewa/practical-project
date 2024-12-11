import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        Id: 1,
        Name: "Kasun",
    },

    {
        Id: 2,
        Name: "Sanjeewa",
    }


];

// <> </> = This is fragment

const Users = () => {
    return (
        <>
            <UserForm />
            <UsersTable userProp={users} />
        </>
    )
}

export default Users;