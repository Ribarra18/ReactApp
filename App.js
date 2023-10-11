import logo from "./logo.svg";
import ShoppingCart from "./ShoppingCart";
import items from "./items";
import "./App.css";

function App() {
  return (
    <div>
      <img src={logo} alt="" id="logo" />
      <ShoppingCart items={items} username="Carly" />
      <ShoppingCart items={items} username="Rusty" />
    </div>
  );
}

export default App;
