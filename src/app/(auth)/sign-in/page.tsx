"use client";

import { useActionState } from "react";
import { signInWithEmail } from "./actions";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 min-h-screen items-center justify-center"
    >
      <div className="w-sm">
        <h1 className="mt-10 text-center text-2xl/9 font-bold">
          Sign in to your account
        </h1>
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label htmlFor="email" className="block text-sm font-medium">
          Email address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@my-company.com"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-100"
        >
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          placeholder="*****"
        />
      </div>

      {state?.error && (
        <div className="rounded-md px-3 py-2 text-sm text-red-500">
          {state.error}
        </div>
      )}

      <Button type="submit" disabled={isPending} className="w-sm">
        {isPending ? "Loading" : "Sign in"}
      </Button>

      <div>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link href={"/sign-up"} className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
