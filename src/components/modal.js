import React from 'react';
import {Input} from "./input";


export default function Modal({hidden,addModal,closeModal}) {

    const [inputs, setInputs] = React.useState(
        {
            //id: props.depart.length + 2,
            name: '',
            level: '',
            bossName: '',
            bossSurName: '',
            bossMiddleName: '',
            cabinetNumber: '',
        }
    )

    const inputHandler = ({target}) => {
        setInputs({
            ...inputs, [target.name]: target.value,

        })
    }

    return (
        <div>
            {/*Модалка*/}
            <div hidden={hidden} className='modalWindow'>
                {/*инпуты */}

                <Input type="text"
                       label="Отдел"
                       value={inputs.name}
                       name='name'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Этаж"
                       value={inputs.level}
                       name='level'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Босс"
                       value={inputs.bossName}
                       name='bossName'
                       onChange={inputHandler}
                />

                <Input type="text"
                       label="Кабинет"
                       value={inputs.cabinetNumber}
                       name='cabinetNumber'
                       onChange={inputHandler}
                />




                <button onClick={()=>{addModal(inputs)}}>Добавить</button>
                <button onClick={closeModal}>Отменить</button>
            </div>
        </div>
    );
}

