import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const SignUp = async () => {
  const user = await getLoggedInUser();
  console.log(user)
  
  return (
    <section className="flex-center w-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
