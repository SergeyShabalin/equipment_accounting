import React from 'react'


const Departments = () => {
    const [numbers, setNumbers] = React.useState(
        [{
            id: 1,
            name: 'отдел информационного обеспечения',
            level: '4',
            bossName: 'Василий',
            bossSurName: 'Ковалёв',
            bossMiddleName: 'Вячеславович',
            cabinetNumber: '412'
        },
            {
                id: 2,
                name: 'отдел хозяйственного обеспечеия',
                level: '3',
                bossName: 'Кузнецов',
                bossSurName: 'Андрей',
                bossMiddleName: 'Иванович',
                cabinetNumber: '212'
            }
        ]
    )

    const addDepartment = ()=>{

    }

    let res = numbers.map(function(item) {
        return (
            <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.level}</td>
                    <td>{item.bossName} {item.bossSurName} {item.bossMiddleName}</td>
                    <td>{item.cabinetNumber}</td>
                </tr>)
    })

    return <div>
        <p>
            Отделы
            <table className="table-bordered ">
                <thead className="table-secondary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">level</th>
                    <th scope="col">boss</th>
                    <th scope="col">cabinet</th>
                </tr>
                </thead>
                {res}
                <button className="btn btn-success" onClick={addDepartment}>Добавить новый отдел</button>
            </table>
        </p>

    </div>


}

export default Departments