import React from 'react';

function DatePicker({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="date" value={value} onChange={onChange} />
    </div>
  );
}

export default DatePicker;
