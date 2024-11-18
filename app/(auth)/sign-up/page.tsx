import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Đăng ký",
};

function SignUpPage() {
  return <AuthForm type="sign-up" />;
}

export default SignUpPage;
