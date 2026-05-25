import Button from "./components/Button";

function App() {
  var name = "Raunak";
  var age = 20;
  var isStudent = true;
  var hasfees = false;
  var city = "Nagpur";
  var marks = 90;
  return (
    <>
      <h2>My name is {name.toUpperCase()}</h2>
      <p>My age is {age}</p>
      <p>I am {isStudent ? "Currently Studying" : "Working professional"}.</p>
      <p>{hasfees ? <Button /> : "No fees to pay"}</p>
      <p>Hello {name}, from {city}</p>
      <p>Your marks are {marks},{marks >= 40 ? "Passed" :  "Failed"}</p>
    </>
  )
}

export default App
