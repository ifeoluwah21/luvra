"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});

const ExampleForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You've submitted the values:", {
        description: JSON.stringify(value, null, 2),
      });
      console.log("submitted", value);
    },
  });

  return (
    <Card className="sm: mb-10 w-full rounded-none border-0 shadow-none sm:mx-auto sm:grid sm:w-17/20 sm:grid-cols-2 sm:border sm:border-black">
      <CardHeader className="sm:col-[1/3] sm:text-center">
        <CardTitle className="text-2xl">Newsletter</CardTitle>
        <CardContent className="px-0">
          Subscribe to our daily updates and newsletter
        </CardContent>
      </CardHeader>
      <CardContent className="sm:col-[1/3]">
        <form
          id="example-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="sm:mx-auto sm:flex sm:w-[480px] sm:flex-row sm:justify-center">
            <form.Field name="email">
              {(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel className="sr-only" htmlFor={field.name}>
                      Email address
                    </FieldLabel>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      name={field.name}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your email here"
                      autoComplete="off"
                      className="text-base placeholder:uppercase"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
            <Button
              className="hidden sm:block"
              type="submit"
              form="example-form"
            >
              Subscribe
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="sm:hidden">
        <Button type="submit" form="example-form">
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExampleForm;
