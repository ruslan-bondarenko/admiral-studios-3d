"use client";

import React, { useState } from "react";

import { useSession } from "next-auth/react";

const History = () => {
  // const session = useSession();
  const [history, setHistory] = useState([]);

  return (
    <div>
      <h3 className="text-xl font-normal mb-3">Orders history:</h3>
      {history.length ? (
        <div>List of orders</div>
      ) : (
        <div className="px-8 py-6 bg-warn rounded-xl flex flex-col border">
          <h2 className="font-bold text-gray-800">No Orders Found!</h2>
          <p className="text-gray-400">
            Sorry, but it seems there are currently no orders to display.
          </p>
          <p className="text-gray-400">
            Please check back later or explore other sections of our website.
          </p>
        </div>
      )}
    </div>
  );
};

export default History;
