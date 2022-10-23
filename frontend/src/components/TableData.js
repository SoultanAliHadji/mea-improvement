import "../App.css";

const TableData = () => {
  return (
    <tr className="align-middle">
      <th scope="row">10212</th>
      <td>BMO 2 - E Camera 3</td>
      <td>Fri, 07 Okt 2022 16:26:11 GMT</td>
      <td>HD</td>
      <td>
        <img
          className="data-img"
          src={require("../assets/mining_eyes.jpg")}
          alt=""
        />
      </td>
      <td>Tidak ada yang tidak menjaga jarak</td>
      <td>@mdo</td>
      <td>Admin</td>
      <td>Otto</td>
    </tr>
  );
};

export default TableData;
