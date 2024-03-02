import React from "react";

function Roundedbtn({ icon, onClick }) {
  return (
    <button
      className="text-[#8796a1] text-xl p-2 rounded-full hover:bg-[#dbd9d9]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default Roundedbtn;
