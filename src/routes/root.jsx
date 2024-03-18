import { useEffect } from "react";
import ArrowNarrowDown from "../assets/icons/ArrowNarrowDown";
import ChevronDown from "../assets/icons/ChevronDown";
import FilterLines from "../assets/icons/FilterLines";
import GlobeIcon from "../assets/icons/GlobeIcon";
import IconSearch from "../assets/icons/Icon-search";
import SwitchVertical from "../assets/icons/SwitchVertical";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import TableRow from "../components/TableRow";
import axios from "axios";
import { useState } from "react";

export default function Root() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setData(res.data?.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <div className="main-wrapper">
        <div className="buttons-cont">
          <Button>
            Web app
            <GlobeIcon />
          </Button>
          <button className="secondary-button">
            Application Validation
            <ChevronDown />
          </button>
        </div>
        <div className="wrapper">
          <h1 className="title">Promotions</h1>
          <div className="breadcrumbs-cont">
            <span>Home</span>-<span>App Settings</span>-<span>Promotions</span>
          </div>
          <div className="table-cont">
            <div className="filters">
              <div className="filter-item">
                <IconSearch />
                <FilterLines />
              </div>
              <div className="filter-item">
                <SwitchVertical />
              </div>
            </div>
            <hr />
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      Name <ArrowNarrowDown />{" "}
                    </th>
                    <th>Discount Type</th>
                    <th>Discount Off </th>
                    <th>End Date</th>
                    <th>Products</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <TableRow key={index} {...item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="add-btn-wrapper">
            <Button classNames="subscription-btn">
              Add a subscription
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
