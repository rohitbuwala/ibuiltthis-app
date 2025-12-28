"use client";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { addProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { FormState } from "@/types";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { useActionState } from "react";


const initialState: FormState = {
   success: false,
   errors: undefined,
   message: "",
}

export default function ProductSubmitForm() {
   const [state, formAction, isPending] = useActionState(addProductAction, initialState);
   
   const {errors, message, success} = state;
  return (
        <form className="space-y-6" action={formAction}
        >
          {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive"
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
         <FormField
            label="Product Name"
            name="name"
            id="name"
            placeholder="My Awesome Product"
            required
            onChange={() => {}}
            error={errors?.name ?? []}
         />
          <FormField
            label="Slug"
            name="slug"
            id="slug"
            placeholder="my-awesome-product"
            required
            onChange={() => {}}
            error={errors?.slug ?? []}
            helperText="URL-friendly version of your product Name"
         />

          <FormField
            label="Tagline"
            name="tagline"
            id="tagline"
            placeholder="Tell us more about Your Product"
            required
            onChange={() => {}}
            error={errors?.tagline ?? []}
         />

         <FormField
            label="Description"
            name="description"
            id="description"
            placeholder="A brief description of your product"
            required
            onChange={() => {}}
            error={errors?.description ?? []}
            textarea
         />

          <FormField
            label="Website URL"
            name="websiteUrl"
            id="websiteUrl"
            placeholder="https://www.yourProduct.com"
            required
            onChange={() => {}}
            error={errors?.websiteUrl ?? []}
            helperText="Enter your product's Website or landing page"
         />
          <FormField
            label="Tags"
            name="tags"
            id="tags"
            placeholder="AI Productivity, SaaS"
            required
            onChange={() => {}}
            error={errors?.tags ?? []}
            helperText="Comma-separated tag (e.g., AI, SaaS, Productivity)"
         />

         <Button type="submit" size="lg" className="w-full">
            {isPending ? (
               <Loader2Icon className="size-4 animate-spin"/>) 
               : (
               <>
               <SparklesIcon className="size-4"/>
               Submit Product
               </>
               )}
            </Button>
        </form>
  );
}