/* eslint-disable react/prop-types */
import ChevronSelectorVertical from "../assets/icons/ChevronSelectorVertical";
import Dot from "../assets/icons/Dot";
import TreeDots from "../assets/icons/TreeDots";

export default function TableRow({
  name,
  type,
  off,
  end_date,
  product,
  status,
}) {
  return (
    <tr>
      <td>
        <ChevronSelectorVertical />
      </td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{off} </td>
      <td>{end_date}</td>
      <td>
        <span className="productTag">{product}</span>
      </td>
      <td>
        <span className="status">
          <Dot />
          {status}
        </span>
      </td>
      <td>
        <TreeDots />
      </td>
    </tr>
  );
}
