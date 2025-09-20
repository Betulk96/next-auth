"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-color3 via-color2 to-color4">
      {/* Arka plan overlay */}
      <div className="absolute inset-0 " />

      {/* Login form */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-lg shadow-2xl p-10 text-center">
        <div className="flex justify-center mb-6 ">
          <div
            className="relative w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center shadow-2xl shadow-cyan-500/30"
          >
            {/* Bu div, dönen ışık efektini oluşturacak */}
            <div
              className="absolute inset-0 rounded-full animate-rotate-border z-0"
              style={{
                background: 'conic-gradient(transparent 0deg, transparent 180deg, #225757 200deg, #64997F 220deg, #A2D4BB 240deg, transparent 260deg)',
              }}
            />

            {/* Bu div, resmi ve diğer içeriği barındırır ve efektin üzerine yerleşir */}
            <div className="relative w-[95%] h-[95%] rounded-full bg-slate-800 flex items-center justify-center border-4 border-white/20 z-10">
              <Image
                src="/logo/logo1(2).jpeg"
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-10">
          Hoş Geldiniz
        </h1>
       

        <button
          onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 rounded-lg bg-color3  px-4 py-3 font-semibold text-white shadow-md hover:bg-color4 sahdow-lg shadow-color33 transition duration-300 ease-in-out cursor-pointer "
        >
          <Image
            src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png"
            alt="Auth0"
            width={24}
            height={24}
          />
          Auth0 ile Giriş Yap
        </button>

        <p className="mt-6 text-sm ">
          Giriş yaparak <a href="#" className=" hover:underline">Kullanım Koşullarını</a> kabul etmiş olursunuz.
        </p>
      </div>
      <style jsx>{`
  @keyframes rotate-border {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Bu animasyon Tailwind'in JIT motoru tarafından tanınmaz,
     bu nedenle bir <style> bloğunda veya global CSS dosyasında tanımlanmalıdır. */
  .animate-rotate-border {
    animation: rotate-border 4s linear infinite;
  }
`}</style>
    </div>
  );
}
