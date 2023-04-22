import { useState } from "react"
function App() {
  const vd=[{name:"Meo",old:1},
            {name:"Heo",old:2}];
  const [list,setList]=useState(()=>{
    let listLocal;
    if(localStorage.getItem("list")){
      listLocal=JSON.parse(localStorage.getItem("list"));
    }
    else{
      listLocal=vd;
    }
    return listLocal;
  })
    
//  localStorage.removeItem("list")
  const [ten,setTen]=useState("")
  const getTen=(e)=>{
    setTen(e.target.value);
  }
  const [tuoi,setTuoi]=useState("");
  const getTuoi=(e)=>{
    setTuoi(e.target.value);
  }
  let change=()=>{
    setList((pre)=>{
      const newList=[...pre,{name:ten,old:tuoi}];
      localStorage.setItem("list",JSON.stringify(newList));
      return newList;
    })
  }
  const [List,setList1]=useState(() =>{
    
    const listLocal=JSON.parse(localStorage.getItem(list));
    console.log(listLocal)
    return listLocal;
  })
  
  return (

    <div>
      <input type="text" placeholder="username" onChange={getTen}></input>
      <input type="text" placeholder="old" onChange={getTuoi}></input>
      <button type="submit"  onClick={change}>add</button>
      <ul>
        {
          list.map((st, key) => {
            return (<li>{st.name} {st.old}</li>)
          }
          )}

      </ul>
      {/* dâsdasd */}
      {/* <h1>{ten}</h1> */}
       
    </div>
    // <div></div>
  );
}

export default App;
