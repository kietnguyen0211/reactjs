import { useState } from "react"
import Student from "./Student"
import FormAdd from "./FormAdd"
export default function Students() {
    const [list, setList] = useState([
        {
            id: 1,
            name: "Meo",
            isDelete: false,
        },
        {
            id: 2,
            name: "Heo",
            isDelete: false,
        }
    ])
    const addList = (textName) => {
        setList([...list, { id: 3, name: textName, isDelete: false }])
    }
    const deleteList=(id)=>{
        const newList=list.filter((stu) => stu.id!==id);
        setList(newList)
    }
    return (
        <div className="board">
            <FormAdd addList={addList} />
            {
                list.map((value, key) => {
                    return (
                        <Student student={value} deleteList={deleteList} key={key}/>
                    )
                })
            }
        </div>
    )
}