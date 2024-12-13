import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ userProp, selecteDataProp, deleteUser }) => {

    return (
        <TableContainer component={Paper} >
            <Table>
                <TableHead >
                    <TableRow >
                        <TableCell >ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {

                        userProp.length > 0 ? userProp.map((user) => {

                            return (
                                <TableRow key={user.id} >
                                    <TableCell component='th' scope="row">{user.id}</TableCell>
                                    <TableCell component='th' scope="row">{user.name}</TableCell>

                                    <TableCell>
                                        <Button
                                            sx={{ margin: '0px 10px', backgroundColor: '#00c6e6' }}
                                            onClick={() => selecteDataProp(
                                                {
                                                    id: user.id,
                                                    name: user.name,
                                                }
                                            )}
                                        >

                                            Upgrate

                                        </Button>

                                        <Button
                                            sx={{ margin: '0px 10px', backgroundColor: 'red', color: '#000000' }}
                                            onClick={() => deleteUser({ id: user.id })}
                                        >

                                            Delete

                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )

                        }) : (
                            <TableRow>

                                <TableCell component='th' scope="row">No Data</TableCell>

                            </TableRow>
                        )

                    }

                </TableBody>
            </Table>

        </TableContainer >
    )
}

export default UsersTable;


