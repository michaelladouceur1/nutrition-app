import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Select from "react-select";

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

const BasicInfo = (props) => {
  return (
    <div>
      <ButtonGroup color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Select
        options={options}
        isMulti
        onChange={(value) => {
          const vals = value.map((val) => val.value);
          console.log(vals);
        }}
      />
    </div>
  );
};

export default BasicInfo;
