import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "Sign In",
  description: "Marefa4u is a website offering high-quality free courses in various fields, providing everyone the opportunity to learn and access knowledge easily. Join us today and start your educational journey!",
};
export default function Page() {

  return (
 

<section class="">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718241322/Default_Create_a_professional_logo_for_a_website_called_Marefa_0_ctv1gv.jpg"
        class="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div class="hidden lg:relative lg:block lg:p-12">
        <Link class="block text-white" href="#">
          <span class="sr-only">Home</span>
          <img src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718217199/Logo-website-Marefa4u_nennrj.png" alt="" />
        </Link>

        <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Marefa4U
        </h2>

        <p class="mt-4 leading-relaxed text-white/90">
        Welcome to the "Marefa4u" sign-in page! From here, you can access your account and take advantage of all the free courses we offer.
        </p>
      </div>
    </section>

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl">
        <div class="relative -mt-16 block lg:hidden">
          <Link 
            class="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="/"
          >
            <span class="sr-only">Home</span>
            <img src="https://res.cloudinary.com/dixyny2zj/image/upload/v1718217199/Logo-website-Marefa4u_nennrj.png" alt="" />

          </Link>

          <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Marefa4U
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
          Welcome to the "Marefa4u" sign-in page! From here, you can access your account and take advantage of all the free courses we offer.
          </p>
        </div>

        <SignUp />
      </div>
    </main>
  </div>
</section>
  )
  
  
  
}