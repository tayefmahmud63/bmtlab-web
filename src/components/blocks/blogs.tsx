"use client"
import { Blog7 } from "@/components/blocks/blog7"

const demoData = {
  tagline: "Latest Updates",
  heading: "Blog Posts",
  description:
    "Insights on mHealth, IoT, robotics, and cutting-edge innovations transforming healthcare",
  buttonUrl: "/blogs",
  posts: [
    {
      id: "post-1",
      title: "mHealth for Rural Healthcare",
      summary:
        "Mobile health tools help bring quality healthcare to remote areas through apps, remote monitoring, and telecon.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "#",
      image: "/images/blog-1.webp",
    },
    {
      id: "post-2",
      title: "Wearables Meet EHR",
      summary:
        "Integrating wearable health data with electronic health records improves patient monitoring and enhances care decisions.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "#",
      image: "/images/blog-2.webp",
    },
    {
      id: "post-3",
      title: "Privacy in mHealth Apps",
      summary:
        "Protecting user health data is essential for trust. Following key privacy and security practices is critical.",
      label: "Ut varius dolor turpis",
      author: "Jane Doe",
      published: "1 Jan 2024",
      url: "#",
      image: "/images/blog-3.webp",
    },
  ],
};

function Blog7Demo() {
  return <Blog7 {...demoData} />;
}

export default Blog7Demo;
