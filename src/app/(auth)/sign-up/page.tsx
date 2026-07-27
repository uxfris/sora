"use client";

import { useActionState } from "react";
import { signUpWithEmail } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-5 min-h-screen items-center justify-center"
    >
      <div className="w-sm">
        <h1 className="mt-10 text-center text-2xl/9 font-bold">
          Create new account
        </h1>
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-sm">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-100"
        >
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
        {isPending ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
