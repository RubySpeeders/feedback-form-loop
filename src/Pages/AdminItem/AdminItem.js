import React from 'react';

function AdminItem(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Feeling</th>
          <th>Understanding</th>
          <th>Support</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.item.feeling}</td>
          <td>{props.item.understanding}</td>
          <td>{props.item.support}</td>
          <td>{props.item.comments}</td>
        </tr>
      </tbody>
    </table>
    // <li>
    //   {props.item.support}, {props.item.comments}
    // </li>
  );
}

export default AdminItem;
