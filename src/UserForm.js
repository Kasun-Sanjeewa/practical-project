import { Button, Grid, Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserForm = (props) => {

    const navigate = useNavigate();

    return (
        <Grid
            container
            spacing={4}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '50px',
                display: 'block',
            }}
        >

            <Grid item xs={12}>

                <Typography component={'h1'} sx={{ color: '#000000', fontSize: '30px', fontWeight: 'bold', marginTop: '10px', textAlign: 'center' }}> User Form</Typography>

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

                    ID

                </Typography>

                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={''}
                    onChange={e => { }}
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
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={''}
                    onChange={e => { }}
                />

            </Grid>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#000000',
                    marginLeft: '50px',
                    marginTop: '30px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                        color: '#ffffff'
                    }
                }}>
                Add

            </Button>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#000000',
                    marginLeft: '50px',
                    marginTop: '30px',
                    padding: '10px 35px',
                    display: 'grid',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                        color: '#ffffff'
                    }
                }} onClick={() => navigate(-1)}>
                Back

            </Button>






        </Grid >
    );
}

export default UserForm;