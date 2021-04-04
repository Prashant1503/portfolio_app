import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




export default function ShowStudents() {

    const classes = useStyles();

    const [students, setStudentList] = useState([]);

    useEffect(async () => {

        await axios.get('http://localhost:5000/api/student/all')
            .then((result) => {

                let data = result.data.student;

                console.log(data);
                setStudentList(data);

                // console.log(students);
            })
            .catch(err => {
                console.log("Err :" + JSON.stringify(err));
            })
    }, []);


    return (
        <>
            <h2>Student List</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Registeration Number</TableCell>
                            <TableCell align="right">Name </TableCell>
                            <TableCell align="right">Section</TableCell>
                            <TableCell align="right">Grade</TableCell>
                            <TableCell align="right">Actions</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* table data */}
                        {students.map((std, key) => (
                            <TableRow key={key}>
                                <TableCell component="th" scope="row">
                                    {std._id}
                                </TableCell>
                                <TableCell align="right">{std.name}</TableCell>
                                <TableCell align="right">{std.section}</TableCell>
                                <TableCell align="right">{std.grade}</TableCell>
                                <TableRow>
                                    <TableCell align="right">Delete</TableCell>

                                    <TableCell align="right">Edit</TableCell>
                                </TableRow>
                                {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
