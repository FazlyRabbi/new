import React from "react";

const HomeTable = () => {
  return (
    <div className="mt-10 ">
      <h1 className="text-center bg-primary w-full py-3 rounded-md shadow-sm text-xl text-white capitalize">
        Notice Board
      </h1>

      <table>
        <tr>
          <th style={{ width: "20%" }}>Sl-No</th>
          <th style={{ width: "60%" }}>Subject</th>
          <th>Date</th>
        </tr>
        <tr>
          <td># 01</td>
          <td>Hello Today school off</td>
          <td>{new Date(Date.now()).toLocaleDateString()}</td>
        </tr>
        <tr>
          <td># 02</td>
          <td>Hello Today school off</td>
          <td>{new Date(Date.now()).toLocaleDateString()}</td>
        </tr>
      </table>
    </div>
  );
};

export default HomeTable;
