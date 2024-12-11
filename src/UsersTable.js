import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({ userProp }) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {

                        userProp.length > 0 ? userProp.map((user) => {

                            return (
                                <TableRow key={user.Id}>
                                    <TableCell component='th' scope="row">{user.Id}</TableCell>
                                    <TableCell component='th' scope="row">{user.Name}</TableCell>

                                    <TableCell>
                                        <Button
                                            sx={{ margin: '0px 10px' }}
                                            onClick={() => { }}
                                        >

                                            Upgrate

                                        </Button>

                                        <Button
                                            sx={{ margin: '0px 10px' }}
                                            onClick={() => { }}
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