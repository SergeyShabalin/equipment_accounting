import React from 'react'
import '../styles/modalWindow.scss'
import '../components/modalWindow'


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
    const [inputs, setInputs] = React.useState(
        [{
            name: '',
            level: '',
            bossName: '',
            bossSurName: '',
            bossMiddleName: '',
            cabinetNumber: '',
        }]
    )


    const a = {
        id: depart.length + 1,
        name: 'fgsg',
        level: '6',
        bossName: 'jhf',
        bossSurName: 'Ковалёв',
        bossMiddleName: 'Вячеславович',
        cabinetNumber: '412'
    }

    //закрыть модалку
    const closeModal = () => {
        setHidden(true)

    }

    //открыть модалку
    const openModal = () => {
        setHidden(false)
    }

    //добавить новый отдел
    const addModal = (event) => {
       // setHidden(true)

        console.log(event.target.value)
     inputs = event.target.value
       setInputs([...inputs.name,s])
        console.log(inputs)
    }


    const inputHandler = (event) => {

        //

    }


    let res = depart.map(function (item) {
        return (
            //тело таблицы
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td>{item.bossName} {item.bossSurName} {item.bossMiddleName}</td>
                <td>{item.cabinetNumber}</td>
            </tr>)
    })

    //Заголовок таблицы
    return <div>
        <p>
            Отделы
            <table className="table-bordered ">
                <thead align='center' className="table-secondary">
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Отдел</th>
                    <th scope="col">Этаж</th>
                    <th scope="col">Начальник</th>
                    <th scope="col">Кабинет</th>
                </tr>
                </thead>
                {res}

            </table>
            <button hidden={!hidden} className="btn btn-success" onClick={openModal}>Добавить новый отдел</button>
        </p>
            {/*Модалка*/}
        <div hidden={hidden} className='modalWindow'>
            {/*инпуты */}
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Отдел</span>
                </div>
                <input type="text"
                       value={inputs.name}
                       onChange={addModal}
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Этаж</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Начальник</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Кабинет</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>


            <button onClick={addModal}>Добавить</button>
            <button onClick={closeModal}>Отменить</button>
        </div>
    </div>


}

export default Departments