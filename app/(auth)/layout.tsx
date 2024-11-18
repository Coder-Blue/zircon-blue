import Image from "next/image";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="mb-2 flex flex-row items-center gap-4">
            <Image
              src={"/favicon.png"}
              alt="ZirconLogo"
              width={82}
              height={82}
              className="h-auto"
            />
            <h2 className="text-5xl font-bold text-white">Zircon Blue</h2>
          </div>
          <div className="space-y-5 text-white">
            <h1 className="h1">Quản lý tệp theo cách hiệu quả nhất</h1>
            <p className="body-1">
              Đây là nơi mà bạn có thể quản lý, lưu trữ dữ liệu của bạn
            </p>
          </div>
          <Image
            src={"/assets/images/files.png"}
            alt="Illustration"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <div className="mb-4 flex flex-row items-center gap-4">
            <Image
              src={"/favicon.png"}
              alt="ZirconLogo"
              width={82}
              height={82}
            />
            <h2 className="text-4xl font-bold text-brand">Zircon Blue</h2>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
}
