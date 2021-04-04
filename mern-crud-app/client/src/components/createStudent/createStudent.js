import React, { useState } from 'react';

import { Button, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function CreateStudent() {
    const classes = useStyles();

    const [students, setStudent] = useState({
        name: "",
        grade: "",
        section: "",
        subjects: []
    });

    const addStudent = async () => {

        await axios.post('http://localhost:5000/api/student/add', students)
            .then((student) => {
                console.log(JSON.stringify(student));
            })
            .catch(err => {
                console.log(JSON.stringify(err));
            });


    }
    return (
        <>
            <h2>Create Student</h2>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    value={students.name}
                    onError="Name is required"
                    onChange={(e) => { setStudent({ ...students, name: e.target.value }) }} />



                <TextField
                    id="outlined-basic"
                    label="Grade"
                    variant="outlined"
                    value={students.grade}
                    onError="Grade is required"
                    onChange={(e) => { setStudent({ ...students, grade: e.target.value }) }}
                />

                <TextField
                    id="select"
                    label="Subjects"
                    value={students.subjects}
                    onError="Subjects is required"
                    onChange={(e) => { setStudent({ ...students, subjects: e.target.value }) }}
                    select
                >
                    <MenuItem value="Maths">Maths</MenuItem>
                    <MenuItem value="Science">Science</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Commerce">Commerce</MenuItem>
                </TextField>



                <TextField
                    id="select"
                    label="Section"
                    value={students.section}
                    onChange={(e) => { setStudent({ ...students, section: e.target.value }) }}
                    select
                >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                    <MenuItem value="D">D</MenuItem>
                </TextField>

                <Button variant="contained" color="primary" onClick={addStudent}>Create</Button>
            </form>
        </>

    );
}
