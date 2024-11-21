import SearchForm from "./SearchForm";

const Navbar = ()=>{

    return (
      <>
      <h1 className="w-screen text-3xl bg-black text-white fixed top-0 p-5">
        Github User Finder
      </h1>
      <SearchForm/>
      </>
    )
  }
  export default Navbar;