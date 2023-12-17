import Card from "./Components/Card.jsx";

function App() {
  const cources = [
    {
      id: 1,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "newbie",
      title: "Introduction Basic Programming HTML & CSS",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe",
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      duration: 5400,
    },
    {
      id: 2,
      image:
        "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
      level: "Intermediate",
      title: "React",
      user: {
        avatar:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        name: "John Doe",
      },
      rating: 4.7,
      students: 3214,
      modules: 8,
      finishedModules: 3,
      duration: 5400,
      isMyCource: true,
    },
  ];
  return (
    <>
      <h1>My curses</h1>
      <Card items={cources} />;
    </>
  );
}

export default App;
