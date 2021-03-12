import Checkbox from "@material-ui/core/checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Emailrow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="emailrow">
      <div className="emailrow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailrow__title">{title}</h3>
      <div className="emailrow__message">
        <h4>
          {subject}
          <span className="emailrow__description">{description}</span>
        </h4>
      </div>
      <p className="emailrow__time">{time}</p>
    </div>
  );
};

export default Emailrow;

/*
:O C==3
:OC===3
:O===3
*/
