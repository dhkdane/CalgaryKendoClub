import React from "react";
import Table from "react-bootstrap/Table";

const tasks = [
  { id: 1, title: "Kendo", author: "Mark", date: "11-11-2023", views: 11 },
  { id: 2, title: "judo", author: "Tom", date: "11-11-2023", views: 12 },
];

const Board = () => {
  return (
    <div>
      <h1>Board Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "5%" }}>Author</th>
            <th style={{ width: "10%" }}>Date</th>
            <th style={{ width: "5%" }}>Views</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.date}</td>
              <td>{task.views}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Board;
