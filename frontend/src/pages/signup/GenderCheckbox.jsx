import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-5">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox checkbox-success" />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox checkbox-success" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
