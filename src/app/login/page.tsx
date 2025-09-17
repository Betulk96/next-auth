
import LoginPage from "@/components/login/LoginPage";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative w-full h-screen ">
      {/* Background image */}
     

      {/* Login Page content */}
      <div className="relative z-10">
        <LoginPage />
      </div>
    </div>
  );
}
