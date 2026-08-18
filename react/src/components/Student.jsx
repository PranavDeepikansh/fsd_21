import React from "react";
const Student = () => {
  return (
    <div style={{ border: "2px solid red", height: "400px", width: "300px" }}>
      <h3 style={{ color: "red" }}>Student Id Card</h3>
      <img
        src="https://imgs.search.brave.com/oGhRlOdWz8SUqqPOGZ5Gq2OyL0RIEwnCBnJx4Bcbt54/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MTIxMS9vdXJt/aWQvcG5ndHJlZS1j/YXJ0b29uLWNoYXJh/Y3Rlci1vZi1tYWxl/LXN0dWRlbnQtZ2l2/aW5nLXRodW1icy11/cC1wbmctaW1hZ2Vf/MTQ3MTA1ODIucG5n"
        alt="Student Image" height={'150px'} width={'150px'}
          />
          <h3>Mohan</h3>
          <h3>10th class</h3>
    </div>
  );
};
export default Student;
