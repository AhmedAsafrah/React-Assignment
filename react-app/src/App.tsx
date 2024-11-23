import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NewYork", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const onSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  const [AlertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Citis" onSelectItem={onSelectItem} />

      {AlertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Some <b>ALERT</b> Message
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
