import React, { useEffect, useState } from "react";

import { getNextMovements } from "../../../api/chess.api";

const CraftingTool = ({ baseUrl, classes }) => {
  const [results, setResults] = useState([]);

  const fetchItemsCraftingProfit = async () => {
    const response = await getNextMovements();
    console.log("response", response);
  };

  return <div className={classes.root}>Teste</div>;
};

export default CraftingTool;
