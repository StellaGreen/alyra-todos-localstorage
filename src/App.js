import Todos from "./components/Todos"
import React from "react"

function App() {
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const handleButtonClick = () => {
    setDarkMode(!darkMode);
  };
  const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";

  React.useEffect(() => {
    window.localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <section className={modeClasses}>
    <div className="container my-4">
        <button onClick={handleButtonClick} className="btn btn-secondary mb-4">
          Dark Mode
        </button>
      <h1 className="text-center">To Do Application</h1>
      <p>be better</p>
      <Todos />
    </div>
    </section>
  )
}

export default App
