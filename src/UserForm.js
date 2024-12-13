import { Button, Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserForm = ({ addUserProp, submitProp, data, isEditProp, updateUserProp }) => {

    const navigate = useNavigate();

    const [Id, setId] = useState();
    const [Name, setName] = useState('');

    useEffect(() => {
        if (!submitProp) {
            setId('')
            setName('')
        }
    }, [submitProp])


    useEffect(() => {
        if (data && data.id && data.id !== 0) {
            setId(data.id)
            setName(data.name)
        }
    }, [data]);

    const handleUser = () => {
        isEditProp ? updateUserProp({
            id: Id,
            name: Name
        })

            : addUserProp({
                id: Id,
                name: Name
            })
    }

    return (
        <>
            <Grid display={"flex"}>
                <Button item
                    sx={{
                        backgroundColor: '#028391',
                        marginLeft: '10px',
                        marginTop: '10px',
                        padding: '10px 35px',
                        display: 'flex',
                        color: '#000000',

                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                            color: '#ffffff'
                        }
                    }} onClick={() => navigate(-1)} >
                    Back

                </Button>
            </Grid>
            <Grid
                container
                spacing={4}
                marginTop={'-60px'}
                sx={{
                    backgroundColor: '#ffffff',
                    marginBottom: '50px',
                    display: 'block',
                }}
            >

                <Grid item xs={12}>

                    <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}> User Form</Typography>

                </Grid>

                <Grid marginLeft={'35%'} marginTop={'50px'}>

                    <Grid item xs={12} sm={6} sx={{ display: 'flex' }} marginLeft={'20px'}>
                        <Typography
                            component={'label'}
                            htmlFor="id"
                            sx={{
                                color: '#000000',
                                marginRight: '20px',
                                fontSize: '16px',
                                width: '100px',
                                display: 'block',

                            }}
                        >

                            ID

                        </Typography>

                        <Input
                            type="number"
                            id="Id"
                            name="Id"
                            sx={{ width: '400px', marginBottom: '20px' }}
                            value={Id}
                            onChange={(e) => { setId(e.target.value) }}
                        />

                    </Grid>


                    <Grid item xs={12} sm={6} sx={{ display: 'flex' }} marginLeft={'20px'}>
                        <Typography
                            component={'label'}
                            htmlFor="id"
                            sx={{
                                color: '#000000',
                                marginRight: '20px',
                                fontSize: '16px',
                                width: '100px',
                                display: 'block',


                            }}
                        >

                            Name

                        </Typography>

                        <Input
                            type="text"
                            id="name"
                            name="name"
                            sx={{ width: '400px' }}
                            value={Name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                    </Grid>

                </Grid>

                <Button
                    sx={{
                        margin: 'auto',
                        marginBottom: '20px',
                        backgroundColor: '#000000',
                        marginLeft: '50%',
                        marginTop: '30px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                            color: '#ffffff'
                        }
                    }} onClick={handleUser}>
                    {
                        isEditProp ? "Update" : "Add"
                    }

                </Button>


            </Grid >
        </>
    );
}

export default UserForm;