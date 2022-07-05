import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ExhibitorList = () => {
  const [exhibitorList, setExhibitorList] = useState();
  const columns = [
    { field: "name", header: "Name" },
    { field: "email", header: "Email" },
    { field: "mobile", header: "Mobile No" },
    { field: "companyName", header: "Company Name" },
    { field: "exhibitionFee", header: "Exhibition Fee" },
  ];

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column key={col.field} field={col.field} header={col.header} sortable />
    );
  });

  useEffect(() => {
    getExhibitorFormData();
  }, []);

  let getExhibitorFormData = async () => {
    //setLoading(true)
    let url = `http://144.91.110.221:4801/api/getexhibitor`;
    try {
      let response = await axios.get(url);
      setExhibitorList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card">
        <DataTable
          //loading={isLoading}
          paginator
          rows={10}
          dataKey="id"
          //filters={filters1}
          filterDisplay="menu"
          value={exhibitorList}
          responsiveLayout="scroll"
          //globalFilterFields={["name"]}
          //header={header1}
        >
          {dynamicColumns}
          {/* <Column
              field="Actions"
              header="Actions"
              body={actionBodyTemplate}
            ></Column> */}
        </DataTable>
      </div>
    </>
  );
};

export default ExhibitorList;
