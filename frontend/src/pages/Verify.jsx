import { useParams } from "react-router-dom";
import { useEffect } from "react";
import API from "../services/api";

function Verify() {
  const { token } = useParams();

  useEffect(() => {
    API.get(`verify/${token}/`)
      .then(() => alert("Email verified successfully"))
      .catch(() => alert("Invalid or expired token"));
  }, [token]);

  return <h2>Verifying your email...</h2>;
}

export default Verify;
