import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import axios from "axios";

function App() {
  const name = "Prashant Varshney";

  // let count=0;
  // function Inc(){
  //   count++;
  //   console.log(count);
  // }

  let [count, setCount] = useState(0);

  const getUsers = async ()=>{

  }

  useEffect(()=>{
    console.log("useEffect is called");
    getUsers();
  },[count]);
  

  return (
    <div>
      <Navbar name={name} setter={setCount}/>
      hii from react {count}
      <button
      
        onClick={() => {
          setCount((cnt) => {
            return cnt + 1;
          });
        }}
        className=" mt-20 px-4 py-2 bg-indigo-700 rounded-md"
      >
       Press the Bell Icon
      </button>
    </div>
  );
}

export default App;
