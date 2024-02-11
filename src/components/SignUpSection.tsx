import { useState } from "react";
import { Link } from "react-router-dom";
const SignUpSection = () => {
  const [Email, setEmail] = useState("")
  return (
    <>
      <h1>Sign Up Section</h1>
      <form action="">
        <input type="email" value="" />
        <input type="password" />
        <Link to="/">
          <button>Sign Up</button>
        </Link>
      </form>
    </>
  );
};

export default SignUpSection;
