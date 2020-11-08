import React from 'react';

function AdminItem(props) {
  return (
    <tr>
      <td>{props.item.feeling}</td>
      <td>{props.item.understanding}</td>
      <td>{props.item.support}</td>
      <td>{props.item.comments}</td>
    </tr>
  );
}

export default AdminItem;
