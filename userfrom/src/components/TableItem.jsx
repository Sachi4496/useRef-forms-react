export const TableItem = ({ name, age, address, department, salary, single, married, file }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{department}</td>
        <td>{salary}</td>
        <td>{single ? "Single" : "Married"}</td>
        <td><img src={file} style={{ width: "100px", height: '100px' }} alt="profile" /></td>
      </tr>
    </>
  );
}
