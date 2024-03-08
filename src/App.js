import React, { useEffect, useState } from "react";
// import './App.css';
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar.js";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  //intial all category
  const [category, setCategory] = useState(filterData[0].title); 

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      // console.log(data);
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []); //will run at first only

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

    <div className="bg-bgDark2">
      <FilterBar 
      filterData={filterData} 
      category={category}
      setCategory={setCategory}
      />

      <div
        className="w-11/12 max-w-[1200px] mx-auto flex 
        justify-center items-center min-h-[50vh]"
      >
        {loading ? 
        <Spinner /> : 
        <Cards courses={courses} category={category} />}
      </div>
          </div>
    </div>
  );
}

export default App;
