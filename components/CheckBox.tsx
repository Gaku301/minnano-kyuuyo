import React, { ReactElement } from "react";

interface Props {
  data: {
    id: string,
    label: string
  }
}

const CheckBox = ({ data }: Props): ReactElement => {
  return (
    <div className="flex items-center mr-4">
      <input 
        id={data.id} 
        type="checkbox" 
        value="" 
        className="bg-gray-50 border border-gray-300 rounded text-orange-400 focus:ring-orange-400 focus:border-orange-400 w-6 h-6 cursor-pointer" 
      />
      <label htmlFor={data.id} className="ml-2 mb-1 font-medium cursor-pointer">{data.label}</label>
    </div>
  );
}

export default CheckBox;