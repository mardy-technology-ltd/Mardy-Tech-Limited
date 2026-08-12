"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Building, Mail, User, FileText, DollarSign, Layers } from "lucide-react";
import { contactFormSchema, ContactFormValues, budgetRanges, projectTypes } from "@/lib/schemas/contact-schema";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      budgetRange: "$15k-$30k",
      projectType: "Web App",
      projectScope: "",
    },
    mode: "onTouched",
  });

  const selectedBudget = watch("budgetRange");
  const selectedType = watch("projectType");
  const projectScopeValue = watch("projectScope") || "";

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionStatus("submitting");

    try {
      // Simulate API submission latency (1.5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmissionStatus("success");
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-card border border-primary/40 shadow-xl rounded-2xl pointer-events-auto flex ring-1 ring-black ring-opacity-5 p-4`}
          >
            <div className="flex-1 w-0 flex items-center">
              <div className="flex-shrink-0 pt-0.5">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-bold text-foreground">
                  Inquiry Submitted Successfully!
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Thank you, {data.fullName}. Our team will review your project scope and respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        ),
        { duration: 5000 }
      );

      reset();
    } catch {
      setSubmissionStatus("error");
      toast.error("Failed to submit inquiry. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      <Toaster position="top-right" />
      <Navbar />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Start a Project</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Fill out the form below for a technical consultation. Rigorous Zod validation ensures prompt analysis of your project requirements.
          </p>
        </div>

        {/* Contact Form Card Container */}
        <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-10 shadow-xl backdrop-blur-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
            {/* Grid 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-primary" />
                  <span>Full Name *</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="e.g. Sarah Jenkins"
                  {...register("fullName")}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground shadow-xs placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 disabled:opacity-50 ${
                    errors.fullName
                      ? "border-destructive focus-visible:ring-destructive"
                      : "border-input focus-visible:ring-ring"
                  }`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-destructive font-medium flex items-center gap-1 mt-1" aria-live="polite">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.fullName.message}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  <span>Email Address *</span>
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={isSubmitting}
                  placeholder="e.g. sarah@company.com"
                  {...register("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground shadow-xs placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 disabled:opacity-50 ${
                    errors.email
                      ? "border-destructive focus-visible:ring-destructive"
                      : "border-input focus-visible:ring-ring"
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive font-medium flex items-center gap-1 mt-1" aria-live="polite">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.email.message}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Company Name (Optional) */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5 text-primary" />
                <span>Company Name (Optional)</span>
              </label>
              <input
                id="companyName"
                type="text"
                disabled={isSubmitting}
                placeholder="e.g. Acme Innovations Corp"
                {...register("companyName")}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground shadow-xs placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
            </div>

            {/* Project Type Radio Pill Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-primary" />
                <span>Project Type *</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setValue("projectType", type, { shouldValidate: true })}
                      aria-pressed={isSelected}
                      className={`rounded-xl border py-3 px-4 text-xs font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary shadow-xs"
                          : "border-border bg-background text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
              {errors.projectType && (
                <p className="text-xs text-destructive font-medium flex items-center gap-1 mt-1" aria-live="polite">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.projectType.message}</span>
                </p>
              )}
            </div>

            {/* Budget Range Radio Pill Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-primary" />
                <span>Target Budget *</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgetRanges.map((range) => {
                  const isSelected = selectedBudget === range;
                  return (
                    <button
                      key={range}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setValue("budgetRange", range, { shouldValidate: true })}
                      aria-pressed={isSelected}
                      className={`rounded-xl border py-3 px-4 text-xs font-semibold transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary shadow-xs"
                          : "border-border bg-background text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {range}
                    </button>
                  );
                })}
              </div>
              {errors.budgetRange && (
                <p className="text-xs text-destructive font-medium flex items-center gap-1 mt-1" aria-live="polite">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.budgetRange.message}</span>
                </p>
              )}
            </div>

            {/* Project Scope Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="projectScope" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-primary" />
                  <span>Project Scope & Goals *</span>
                </label>
                <span className={`text-[11px] font-mono ${projectScopeValue.length < 10 ? "text-destructive" : "text-muted-foreground"}`}>
                  {projectScopeValue.length} / 2000 chars
                </span>
              </div>
              <textarea
                id="projectScope"
                rows={5}
                disabled={isSubmitting}
                placeholder="Describe your technical requirements, goals, deadline expectations, or specific features..."
                {...register("projectScope")}
                aria-invalid={Boolean(errors.projectScope)}
                aria-describedby={errors.projectScope ? "projectScope-error" : undefined}
                className={`w-full rounded-xl border bg-background p-4 text-sm text-foreground shadow-xs placeholder:text-muted-foreground/60 transition-colors focus-visible:outline-hidden focus-visible:ring-2 disabled:opacity-50 ${
                  errors.projectScope
                    ? "border-destructive focus-visible:ring-destructive"
                    : "border-input focus-visible:ring-ring"
                }`}
              />
              {errors.projectScope && (
                <p id="projectScope-error" className="text-xs text-destructive font-medium flex items-center gap-1 mt-1" aria-live="polite">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  <span>{errors.projectScope.message}</span>
                </p>
              )}
            </div>

            {/* Submission Action Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-primary py-4 px-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Validating & Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Technical Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
