"use client";
import React, { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Environment variables (avoid redefining on every render)
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATES_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

const ContactForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
        toast.success("Message sent successfully.");
        form.reset();
      } catch (error) {
        console.error("Failed to send message:", error);
        toast.error("Something went wrong. Please try again.");
      }
    },
    [form]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {(["name", "email", "message"] as const).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</FormLabel>
                <FormControl>
                  {field.name === "message" ? (
                    <Textarea placeholder="Tell me about your requirements" {...field} className="min-h-[120px]" />
                  ) : (
                    <Input placeholder={field.name === "email" ? "john@example.com" : "John Doe"} {...field} />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
