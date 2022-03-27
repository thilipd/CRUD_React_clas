import { useState, useEffect } from 'react';
import axios from 'axios';

function CrudComponent() {

    let [state, setState] = useState({
        user: [],
        id: '',
        name: '',
        age: '',
        email: '',
    })


    useEffect(async () => {
        var response = await axios.get(
            'https://623bfad68e9af5878949efc3.mockapi.io/users'
        );
        await setState({ user: response.data });
    }, []);


    const handleReset = () => {
        setState({
            name: '',
            age: '',
            email: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.id) {
            // Update
            handleUpdate();
        } else {
            // Create
            handleCreate();
        }
    };

    const handleUpdate = async () => {
        var response = await axios.put(
            `https://623bfad68e9af5878949efc3.mockapi.io/users/${state.id}`,
            {
                name: state.name,
                age: state.age,
                email: state.email,
            }
        );
        var index = state.user.findIndex(
            (user) => user.id === response.data.id
        );
        var user = [...state.user];
        user[index] = response.data;
        setState({ user, name: '', age: '', email: '', id: '' });
        // console.log(state.user);
    };

    const handleCreate = async () => {
        var response = await axios.post(
            'https://623bfad68e9af5878949efc3.mockapi.io/users',
            {
                name: state.name,
                age: state.age,
                email: state.email,
            }
        );
        var user = [...state.user];
        user.push(response.data);
        setState({ user, name: '', age: '', email: '' });
    };

    const onPopulateData = (id) => {
        var selectedData = state.user.filter((user) => user.id === id)[0];
        setState({
            id: selectedData.id,
            name: selectedData.name,
            age: selectedData.age,
            email: selectedData.email,
        });
    };

    const handleDelete = async (id) => {
        await axios.delete(
            `https://623bfad68e9af5878949efc3.mockapi.io/users/${id}`
        );
        var user = state.user.filter((user) => user.id !== id);
        setState({ user });

        // 1. axios.get and update in state variable
        // 2. remove the deleted obj from array in the state variable
    };


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    return (
        <>
            <h3> Crud Component </h3>
            <h3> User Form </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name </label>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <br />
                <div>
                    <label> Age </label>
                    <input
                        type="number"
                        name="age"
                        value={state.age}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <br />
                <div>
                    <label> Email </label>
                    <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>
                <br />
                <button type="submit">Submit </button> &nbsp; &nbsp;
                <button type="button" onClick={handleReset}>
                    {' '}
                    Reset{' '}
                </button>
            </form>
            <h3> User Data </h3>
            <table border={1}>
                <thead>
                    <tr>
                        <td> Id </td>
                        <td> Name </td>
                        <td> Age </td>
                        <td> Email </td>
                        <td> Actions </td>
                    </tr>
                </thead>
                <tbody>
                    {state.user.map((data) => (
                        <tr key={data.id}>
                            <td> {data.id} </td>
                            <td> {data.name} </td>
                            <td> {data.age} </td>
                            <td> {data.email} </td>
                            <td>
                                <button onClick={() => onPopulateData(data.id)}>
                                    {' '}
                                    Update{' '}
                                </button>{' '}
                                &nbsp;
                                <button onClick={() => handleDelete(data.id)}>
                                    {' '}
                                    Delete{' '}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}


export default CrudComponent;
