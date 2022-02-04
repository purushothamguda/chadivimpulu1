import React, { Fragment } from 'react';

function RowData(props) {

    

  return <Fragment>
      <tr><td>{props.ID}</td>
            <td>{props.Surname}</td>
            <td>{props.FullName}</td>
            <td>{props.City}</td>
            <td>{props.Amount}</td>
          </tr>
  </Fragment>;
}

export default RowData;
