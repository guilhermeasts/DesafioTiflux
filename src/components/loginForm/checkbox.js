import React, {useState} from "react";

function Checkbox() {

    const [checked, setChecked] = useState(false);

    const checkboxChange = () => {
    setChecked(!checked);  // Mudar o input através do input ou da label para checked 
    };

    return (
      <div className='checkbox'>
        <input type='checkbox'
        id='checkremember'
        checked={checked}
        onChange={checkboxChange} />
        <label htmlFor='checkremember' className='roboto-regular'>Lembre-me</label>
        <p id='forget' className='poppins-semibold'>Esqueci minha senha</p>
      </div>
    );
  }

export default Checkbox  