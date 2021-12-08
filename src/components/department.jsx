import React from 'react'
import '../styles/modalWindow.scss'
import '../components/modalWindow'
import Modal from "../components/modal"


const Departments = () => {
    //главный стейт отдела
    const [depart, setDepart] = React.useState(
        [{
            id: 1,
            name: 'отдел информационного обеспечения',
            level: '4',
            bossName: 'Василий',
            bossSurName: 'Ковалёв',
            bossMiddleName: 'Вячеславович',
            cabinetNumber: '412',

        },
            {
                id: 2,
                name: 'отдел хозяйственного обеспечеия',
                level: '3',
                bossName: 'Кузнецов',
                bossSurName: 'Андрей',
                bossMiddleName: 'Иванович',
                cabinetNumber: '212',

            }
        ]
    )


    //стэйт модалки
    const [hidden, setHidden] = React.useState(true)

    //стэйт инпутов


    //закрыть модалку
    const closeModal = () => {
        setHidden(true)
    }

    //открыть модалку
    const openModal = () => {
        setHidden(false)
    }

    //добавить новый отдел
    const addModal = (inputs) => {
        const idNumber = {...inputs, id: depart.length + 2}

        setHidden(true)
        setDepart([...depart, idNumber])

    }

     let res = depart.map(function (item) {
        return (
            //тело таблицы
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td>{item.bossSurName} {item.bossName} {item.bossMiddleName}</td>
                <td>{item.cabinetNumber}</td>
            </tr>)
    })

    //Заголовок таблицы
    return <div>

        Отделы
        <table className="table table-hover">
            <thead align='center' className="table-primary">
            <tr>
                <th scope="col">№</th>
                <th scope="col">Отдел</th>
                <th scope="col">Этаж</th>
                <th scope="col">Начальник</th>
                <th scope="col">Кабинет</th>
            </tr>

            {/*Содержимое таблицы*/}
            </thead>
            <tbody >
            {res}
            </tbody>
        </table>
        <button hidden={!hidden} className="btn btn-success" onClick={openModal}>Добавить новый отдел</button>

        <Modal
            hidden={hidden}
            addModal={addModal}
            closeModal={closeModal}

        />
    </div>


}

export default Departments