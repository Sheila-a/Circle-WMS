import { useState, useEffect } from "react";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import design from "./style.module.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Hero from "../../assets/dash_hero.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const LeaderMain = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("general");

  useEffect(() => {
    // Simulate user data
    const data = [
      { name: "John", group: "abakpa", bottles: 10 },
      { name: "Jane", group: "enugu", bottles: 20 },
      { name: "Jack", group: "abakpa", bottles: 5 },
      { name: "Jill", group: "enugu", bottles: 15 },
      // ...
      { name: "Kate", group: "abakpa", bottles: 8 },
      { name: "Kevin", group: "enugu", bottles: 18 },
    ];

    setUsers(data);
  }, []);
  const groups = [
    { value: "general", label: "General" },
    { value: "enugu", label: "Enugu" },
    { value: "abakpa", label: "Abakpa" },
  ];

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const filteredUsers =
    selectedGroup === "general"
      ? users
      : users.filter((user) => user.group === selectedGroup);

  const sortedUsers = filteredUsers.sort((a, b) => b.bottles - a.bottles);

  const renderUser = (user, index) => (
    <tr key={user.name}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.bottles}</td>
    </tr>
  );

  return (
    <div
      className={design.LeaderMain_wrapper}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <DashNavbar title="Leaderboard" />
      <div className={design.LeaderMain_hero}>
        <div>
          <h2>Hello {auth?.user?.fullName}</h2>
          <p>
            Check out the leaderboard to see where you rank among other users.
          </p>
          <Link to="start-recycling">
            <Button
              content="Start recycling"
              style={{
                backgroundColor: "#8BC34A",
                border: "none",
                marginLeft: "0",
              }}
            />
          </Link>
        </div>
        <img src={Hero} />
      </div>
      <div>
        <h2>User Rankings</h2>
        <div>
          <label htmlFor="group-select">Select Group:</label>
          <select id="group-select" onChange={handleGroupChange}>
            {groups.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>
        </div>
        <table>
          <thead>
            {" "}
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Bottles Recycled</th>
            </tr>
          </thead>
          <tbody>{sortedUsers.map(renderUser)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderMain;
