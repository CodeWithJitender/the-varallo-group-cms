export const contactPageData = [
  {
    id: "hero",
    headline: "Start your journey with a conversation. Let’s Connect!",
    description:
      "Reach out today, we’ll map the way forward with clear strategies and reliable legal assistance.",
    // Primary Link
    cta_primary_text: "Request a call back for other services",
    cta_primary_link: "/contact",
    // Secondary Link
    cta_secondary_text: "Schedule a Deposition",
    cta_secondary_link: "https://external-link.com",
    // Multiple tilted images
    gallery_images: [
      { image: "img1.jpg", alt: "Team meeting" },
      { image: "img2.jpg", alt: "Business handshake" },
      { image: "img3.jpg", alt: "Colleagues talking" },
      { image: "img4.jpg", alt: "Legal professional" },
    ],
  },
  
  {
    id: "contact",
    headline: "Contact Us",
    description: "Reach out today, we’ll map the way forward with clear strategies and reliable assistance.",
    details: {
      title: "You tell us. We Listen.",
      text: "Rely on our team to help your business succeed.",
      items: [
        {
          icon: "example.png",
          title: "Office Address:",
          text: "34 Grafton Street, Suite 2\nMillbury, MA 01527",
        },
        {
          icon: "example.png",
          title: "Call us:",
          text: "508.753.9282",
        },
        {
          icon: "example.png",
          title: "People First",
          text: "We are dedicated to building long-term relationships through exceptional client service and support.",
          cta_text: null,
          cta_link: null,
        },
      ],
    },
  },
];
