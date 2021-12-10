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
                name: 'отдел хозяйственного обеспечения',
                level: '3',
                bossName: 'Андрей',
                bossSurName: 'Кузнецов',
                bossMiddleName: 'Иванович',
                cabinetNumber: '212',

            }
        ]
    )


    //стэйт модалки
    const [hidden, setHidden] = React.useState(true)

    //стэйт класснейм
    const [className, setClassName] = React.useState({
        name: 'modalWindow',
        title: 'Добавление отдела',
        btnAddHidden: 'visibleButton',
        btnSaveHidden: 'visibleButton',
        item: {
            name: '',
            level: '',
            bossName: '',
            bossSurName: '',
            bossMiddleName: '',
            cabinetNumber: '',
            isEdit: false
        }
    })

    //закрыть модалку
    const closeModal = () => {
        setHidden(true)
    }

    //открыть модалку добавления
    const openModalAdd = () => {
        setHidden(false)
        setClassName({
            name: 'modalWindow',
            title: 'Добавление отдела',
            btnAddHidden: 'visibleButton',
            btnSaveHidden: 'hiddenButton',
            item: {},
            isEdit: false
        })
    }

    //функционал кнопки сохранить
    const saveModal = (inputs) => {
      let newDepart =  depart.map(function (item) {
          console.log(item)
        if (inputs.id === item.id ){
           return inputs
        }
        else return item
        })

          setDepart(
              newDepart
          )
        closeModal()
    }

    const deleteModal = ()=> {

    }

    //добавить новый отдел
    const addModal = (inputs) => {
        const idNumber = {...inputs, id: depart.length + 2}

        setHidden(true)
        setDepart([...depart, idNumber])

    }

    let res = depart.map(function (item) {
        //открыть модалку изменения
        const openModalChange = () => {
            setHidden(false)
            setClassName({
                name: 'modalWindowChange',
                title: 'Изменить данные',
                btnAddHidden: 'hiddenButton',
                btnSaveHidden: 'visibleButton',
                item: item,
                isEdit: true
            })
        }

        return (
            //тело таблицы
            <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.level}</td>
                <td>{item.bossSurName} {item.bossName} {item.bossMiddleName}</td>
                <td>{item.cabinetNumber}</td>
                <td> <button hidden={!hidden} type="button" className="btn btn-info" onClick={openModalChange}>Изменить</button></td>
                <td> <button hidden={!hidden} type="button" className="btn btn-warning" onClick={deleteModal}>Удалить</button></td>
            </tr>)
    })

    //Заголовок таблицы
    return <div>

        Отделы
        <table className="table table-hover">
            <thead
                align='center' className="table-primary">
            <tr>
                <th scope="col">№</th>
                <th scope="col">Отдел</th>
                <th scope="col">Этаж</th>
                <th scope="col">Начальник</th>
                <th scope="col">Кабинет</th>
                <th scope="col">Изменить</th>
                <th scope="col">Удалить</th>
            </tr>

            {/*Содержимое таблицы*/}
            </thead>
            <tbody>
            {res}
            </tbody>
        </table>
        <div>
            <button hidden={!hidden} className="btn btn-success" onClick={openModalAdd}>Добавить новый отдел</button>

        </div>
        <Modal
            hidden={hidden}
            addModal={addModal}
            closeModal={closeModal}
            className={className}
            saveModal = {saveModal}
        />
    </div>


}

export default Departments