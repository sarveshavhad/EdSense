import React from "react";

const ExhaustPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("payload");
    window.location.reload();
  };
  return (
    <div className="thankyou-container">
      {/* <h1 className="thankyou-title">Thank You!</h1> */}
      <p className="thankyou-text">
        Your test is stopped. All Questions are exhausted.
      </p>
      <h1>Test Ended !!!</h1>
      <button onClick={handleLogout}>
					Exit Test
				</button>
      {/* <p className="thankyou-text">Thank you for participating!</p> */}
      {/* Add any additional content or styling as needed */}
    </div>
  );
};

export default ExhaustPage;
