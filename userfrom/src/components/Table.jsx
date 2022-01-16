import { TableItem } from "./TableItem";
export const Table = ({ list }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Marital Status</th>
          <th>Profile Photo</th>
        </tr>
        {list.map((e, i) => (
          <TableItem {...e} key={i} />
        ))}
      </table>

    </div>
  );
};
