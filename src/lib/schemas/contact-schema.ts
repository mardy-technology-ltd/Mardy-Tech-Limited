import { z } from "zod";

export const budgetRanges = ["<$5k", "$5k-$15k", "$15k-$30k", "$30k+"] as const;
export const projectTypes = ["Web App", "Mobile App", "SaaS", "Enterprise"] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters long"),
  email: z
    .string()
    .email("Please enter a valid email address (e.g. john@company.com)"),
  companyName: z.string().optional(),
  budgetRange: z.enum(budgetRanges, {
    required_error: "Please select a budget range",
    invalid_type_error: "Please select a valid budget range",
  }),
  projectType: z.enum(projectTypes, {
    required_error: "Please select a project type",
    invalid_type_error: "Please select a valid project type",
  }),
  projectScope: z
    .string()
    .min(10, "Project Scope must be at least 10 characters long")
    .max(2000, "Project Scope cannot exceed 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
