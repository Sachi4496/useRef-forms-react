import { TableItem } from "./TableItem";
export const Table = ({ list }) => {
  return (
    <div>
      <table>
        <tr>
          <th><span style={{ marginLeft: "10px" }}>Name</span></th>
          <th><span style={{ marginLeft: "20px" }}>Age</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Address</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Department</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Salary</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Marital Status</span> </th>
          <th><span style={{ marginLeft: "20px" }}>Profile Pic</span> </th>
        </tr>
        {list.map((e, i) => (
          <TableItem {...e} key={i} />
        ))}
      </table>

    </div>
  );
};
