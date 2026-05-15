import { useState } from "react";

function App() {

  // STEP 2.1 & 2.2
  // Initial Data Array + useState

  const [items, setItems] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
  ]);

  const [newItem, setNewItem] = useState("");



  // STEP 4.1
  // Add Item Function

  const addItem = () => {

    // STEP 5.2
    // Input Validation

    if (newItem.trim() === "") {
      alert("Please enter an item.");
      return;
    }

    const item = {
      id: Date.now(),
      name: newItem
    };

    setItems([...items, item]);

    setNewItem("");
  };



  // STEP 4.2
  // Remove Item Function

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  };



  return (
    <div style={{ padding: "20px" }}>

      <h1>Dynamic List Rendering</h1>


      {/* Input Section */}
      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={addItem}>
        Add Item
      </button>



      {/* STEP 5.1 */}
      {/* Empty List Scenario */}

      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (

        // STEP 3.1 & 3.2
        // map() Rendering + key Prop

        <ul>
          {items.map((item) => (
            <li key={item.id}>

              {item.name}

              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>

            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;