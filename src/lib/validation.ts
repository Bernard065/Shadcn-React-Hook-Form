import { z } from "zod";

export const authFormSchema = (type: string) =>
  z.object({
    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "First Name must be atleast 3 characters ",
          }),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string().min(3, {
            message: "Last Name must be atleast 3 characters ",
          }),
    address1:
      type === "sign-in"
        ? z.string().optional()
        : z.string().max(100, {
            message: "Address must be not more 100 characters",
          }),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z.string().max(50, {
            message: "Address must be not more 50 characters",
          }),
    state: type === "sign-in" ? z.string().optional() : z.string().max(50, {
      message: "State must be not more 50 characters",
    }),
    postalCode:
      type === "sign-in" ? z.string().optional() : z.string().min(3, {
        message: "Postal code must be atleast 3 characters",
      }).max(6, {
        message: "Postal code must be not more 6 characters",
      }),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
    ssn: type === "sign-in" ? z.string().optional() : z.string().min(3),

    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be more than 8 characters ",
    }),
  });
