import React from "react";

import data from "../../data.json";

export default function Table() {
  console.log(data);
  return (
    <table border={1}>
      <thread>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Nationality</th>
        </tr>
      </thread>
      <tbody>
        {data.map(({ name, email, phone, nat }) => (
          <tr key={id.value}
          >
            <td>{`${name.first} ${name.last}`}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{nat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
