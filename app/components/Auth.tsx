import React from "react";
import { usePuterStore } from "../lib/puter";

const Auth: React.FC = () => {
  const { auth, isLoading, error } = usePuterStore();

  const handleSignIn = async () => {
    await auth.signIn();
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h2>Sign In / Create Account</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleSignIn} style={{ padding: "0.5rem 1rem" }}>
          Sign In / Create Account
        </button>
      )}
      {auth.isAuthenticated && auth.user && (
        <p>Welcome, {auth.user.name || auth.user.email || "User"}!</p>
      )}
    </div>
  );
};

export default Auth;
