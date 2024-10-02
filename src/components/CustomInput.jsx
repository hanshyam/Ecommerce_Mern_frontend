import React from 'react'

const CustomInput = (props) => {
    const {type,placeholder,classname,name} = props;
  return (
    <div>
      <input name={name} type={type} placeholder={placeholder} className={`form-control ${classname}`}/>
    </div>
  )
}

export default CustomInput
