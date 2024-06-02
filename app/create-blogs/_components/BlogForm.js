"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const router = useRouter();
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  async function onSubmit(event) {
    event.preventDefault();
    // console.log("Form Submitted:", title, content);
    try {
      const response = await fetch("/api/getblogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response Status:", response.status);

      if (!response.ok) {
        console.error("Network response was not ok");
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);

      setFormData({
        title: "",
        content: "",
      });

      router.push("/blogs");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        method="POST"
        className="flex flex-col justify-center gap-4"
      >
        <Input
          placeholder="Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <Textarea
          placeholder="Content"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Create Post</Button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
