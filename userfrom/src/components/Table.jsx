import { TableItem } from "./TableItem";
export const Table = ({ list }) => {
  return (
    <div>
      <table>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Marital Status</th>
        <th>Profile Photo</th>
        {list.map((e) => (
          <TableItem {...e} />
        ))}
      </table>
    </div>
  );
};
