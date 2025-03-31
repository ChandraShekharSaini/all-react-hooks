import React, { useState, useEffect, useOptimistic } from "react";

const App = () => {
  const [skills, setskills] = useState([]);
  const [name, setname] = useState("");
  const [optimisticSkills, addOptimisticSkill] = useOptimistic(skills, (state, newSkill) => [
    ...state,
    newSkill,
  ]);

  useEffect(() => {
    getSkills();
  }, []);

  // Fetch skills from the server
  const getSkills = async () => {
    try {
      const resp = await fetch("http://localhost:4500/getSkills");
      if (!resp.ok) {
        console.error("Error fetching skills:", resp.status);
        return;
      }
      const data = await resp.json();
      setskills(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const delay = (ms) =>{
    console.log(ms)
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Add a new skill
  const addSkills = async () => {
   
    if (!name.trim()) {
      console.error("Skill name cannot be empty");
      return;
    }
    const id = Math.floor(Math.random() * 10000);
    const newSkill = { name, id };

    // Optimistically update the UI immediately
    addOptimisticSkill(newSkill);

    // Send data to the server
    const res = await fetch("http://localhost:4500/addSkills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSkill),
    });

    if (!res.ok) {
      console.error("Error adding skill:", res.status);
      return;
    }
     
    await delay(3000)
    const data = await res.json();
    if (data) {
      console.log("Skill added successfully");
      getSkills(); // Refresh skills after confirmation
    }
  };

  return (
    <section>
      <h1>Add Skills</h1>
      <form action={addSkills}>
        <input
          onChange={(ev) => setname(ev.target.value)}
          type="text"
          name="skills"
          value={name}
          placeholder="Add Skills"
        />
        <button type="submit">Add Skills</button>
      </form>

      {/* Show optimistic skills */}
      {optimisticSkills.map((item, index) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </section>
  );
};

export default App;
