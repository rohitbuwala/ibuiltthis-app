"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import { Button } from "../ui/button";
import { SparklesIcon } from "lucide-react";

export default function ProductSubmitForm() {
     
  return (
        <form className="space-y-6">
         <FormField
            label="Product Name"
            name="name"
            id="name"
            placeholder="My Awesome Product"
            required
            onChange={() => {}}
            error=""
         />
          <FormField
            label="Slug"
            name="slug"
            id="slug"
            placeholder="my-awesome-product"
            required
            onChange={() => {}}
            error=""
            helperText="URL-friendly version of your product Name"
         />
         <FormField
            label="Description"
            name="decription"
            id="decription"
            placeholder="A brief description of your product"
            required
            onChange={() => {}}
            error=""
            textarea
         />

          <FormField
            label="Tagline"
            name="tagline"
            id="tagline"
            placeholder="Tell us more about Your Product"
            required
            onChange={() => {}}
            error=""
         />

         <FormField
            label="Description"
            name="decription"
            id="decription"
            placeholder="A brief description of your product"
            required
            onChange={() => {}}
            error=""
            textarea
         />

          <FormField
            label="Website"
            name="website"
            id="website"
            placeholder="https://www.yourProduct.com"
            required
            onChange={() => {}}
            error=""
            helperText="Enter your product's Website or landing page"
         />
          <FormField
            label="Tag"
            name="tag"
            id="tag"
            placeholder="AI Poductivity, SaaS"
            required
            onChange={() => {}}
            error=""
            helperText="Comma-separated tag (e.g., AI, SaaS, Productivity)"
         />

         <Button type="submit" size="lg" className="w-full">
            <SparklesIcon className="size-4"/>
            Submit Product</Button>
        </form>
  );
}