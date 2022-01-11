import React from "react";

function Dataresult(props) {
  const { loading, result } = props;
  return loading === true
    ? "Fetching results ..."
    : result && Object.keys(result).length > 0 && (
        <table>
          <thead>
            <tr>
              <th colSpan="2" className="resulthead">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(result).map(([key, value], index) => (
              <tr key={index}>
                <td> {key}</td>
                <td> {value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default Dataresult;
