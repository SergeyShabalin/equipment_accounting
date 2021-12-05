import React from 'react'


const Departments = () => {
    const [numbers, setNumbers] = React.useState(
        [{
            name: 'отдел информационного обеспечения',
            level: 4,
            boss: 'Ковалёв Василий Николаевич',
            cabinetNumber: 412
        },
            {
                name: 'отдел хозяйственного обеспечеия',
                level: 4,
                boss: 'Кузнецов Андрей Иванович',
                cabinetNumber: 412
            }
        ]
    )

    const [count, setCount] = React.useState(0)


    return (
        <div>
            {numbers}
            <ul>
                {
                    numbers.map((name,cabinetNumber,level) => <li key={cabinetNumber}>{numbers}</li>)
                }
            </ul>
             {/*<button onClick={addNumbers}>новое число</button>*/}
             {/*<button onClick={addCount}>прибавить</button>*/}
        </div>
    )
}

export default Departments