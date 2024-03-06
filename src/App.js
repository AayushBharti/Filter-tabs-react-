import React, { useEffect, useState } from "react";
// import './App.css';
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar.js";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(data);
        setCourses(output.data);

      } 
      catch (error) {
        toast.error("Something went wrong");
      }
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />

      <FilterBar filterData={filterData} />

      <Cards courses={courses}/>
    </div>
  );
}

export default App;
