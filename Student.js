import { RiChatDeleteLine } from 'react-icons/ri';
import { BiRename } from 'react-icons/bi';

export default function Student(props){
    return(
        <div className="student" >
            <h1>{props.student.name}</h1>
            <div className="icons">
                <BiRename/>
                <RiChatDeleteLine onClick={()=>{
                    props.deleteList(props.student.id)
                    console.log(props.student.id)
                    console.log(props)
                }}/>
            </div>
        </div>
    )
}