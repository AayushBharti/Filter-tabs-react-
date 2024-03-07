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
      <div>
        <Navbar />
      </div>

      <div>
        <FilterBar filterData={filterData} />
      </div>

      <div
        className="w-11/12 max-w-[1200px] mx-auto flex 
      justify-center items-center min-h-[50vh]"
      >
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
}

export default App;
