import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Đăng nhập",
};

function SignInPage() {
  return <AuthForm type="sign-in" />;
}

export default SignInPage;
