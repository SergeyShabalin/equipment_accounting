import React from 'react'
import '../styles/modalWindow.scss'


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
    const [hidden, setHidden] = React.useState(true)


const a ={
    id: numbers.length +1,
    name: 'отдеjhg',
    level: '6',
    bossName: 'jhf',
    bossSurName: 'Ковалёв',
    bossMiddleName: 'Вячеславович',
    cabinetNumber: '412'
}
    const closeModal =()=>{
        setHidden(true)
        setNumbers([...numbers, a])
            }

    const openModal =()=>{
        setHidden(false)
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

            </table>
            <button hidden={!hidden} className="btn btn-success" onClick={openModal}>Добавить новый отдел</button>
        </p>
            <div hidden={hidden} className='modalWindow'>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Отдел</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <button onClick={closeModal}>Добавить</button>
                <button onClick={closeModal}>Отменить</button>
                модалка
            </div>
    </div>


}

export default Departments