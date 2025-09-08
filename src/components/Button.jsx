import React from 'react'

const Button = ({text}) => {
  return (
    <div className='mx-auto'>
      <button className="rounded-2xl bg-[#07383B] px-10 py-3 text-white font-bold">{text}</button>
    </div>
  );
}

export default Button