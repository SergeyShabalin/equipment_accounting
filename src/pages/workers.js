import React from 'react'
import $api from '../API/index'
import data from "bootstrap/js/src/dom/data";
import {NavLink} from "react-router-dom";

 function Workers() {

    const [users, setUsers] = React.useState([])

//     React.useEffect(() => {
// $api.get('http://localhost:1000/api/department').then(({data}) =>{
//     setUsers(data)
// })
//     }, [])


    function addDepartment(){
        const dataAdd = {
            "name": "fkfkfkkff",
            "roomNumber": "231",
            "level": "4",
            "boss": "61b8edcb693c2f2ccb96f637",
            "devices": [],
            "users": []
        }

        $api.post('http://localhost:1000/api/department', {
            dataAdd
        }).then(()=>{
          setUsers(
            [...users, dataAdd]
        )
        })
     }






    return (
        <div className="jumbotron">
            <div className="container">
                потрачено
                {/*{users.map(user =>*/}

                {/*         <tr align='center'*/}
                {/*            key={user._id}>*/}
                {/*            <th scope="row">{user.id}</th>*/}
                {/*            <td>{user.name}</td>*/}
                {/*            <td>{user.level}</td>*/}
                {/*             <td>{user.roomNumber}</td>*/}
                {/*            <td><button onClick={()=>deleteDepartment(user._id)}>Удалить</button></td></tr>*/}
                {/*)}*/}
                {/*<button onClick={addDepartment}>Добавить</button>*/}

            </div>
        </div>
    )


}

export default Workers