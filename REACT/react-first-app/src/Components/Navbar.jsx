import "./Navbar.css"

const Navbar = ({name,setter})=>{
    return(
        <>
        <h1 className="w-screen bg-black text-white text-xl font-bold fixed top-0 p-5">This is Navbar {name}
            <button onClick={()=>{setter((count)=>count+1)}}>Up</button>
        </h1>
        </>
    );
}

export default Navbar;