import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Hire Date</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

// Using props to pass exiting data to a React component

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row.hireDate}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
