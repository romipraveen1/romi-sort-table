import React from "react";

import "./App.css";
import Table from "./TableSort";

function App() {
  return (
    <>
      <div>
        <Table
          columns={[{ label: "Name", key: "name" }]}
          data={[{ name: "romi" }]}
        />
      </div>
    </>
  );
}

export default App;
