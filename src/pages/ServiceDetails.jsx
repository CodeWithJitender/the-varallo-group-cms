import React from "react";
import { useParams } from "react-router-dom";
import ServiceOver from "../sections/service-details/ServiceOver";
import WhatWeProvide from "../sections/service-details/WhatWeProvide";
import TVGEffect from "../sections/service-details/TVGEffect";
import ServiceOverview from "../sections/service-details/ServiceOverview";
import ServiceDetailsHero from "../sections/service-details/serviceDetailsHero";
import Testimonials from "../sections/home/Testimonials";

function ServiceDetails() {
  const { serviceId } = useParams();

  const data = {
    "tvg-management": {
      hero: {
        name: "TVG Management",
        title: "Agency Management Services for Court Reporting Firms",
        pera: [
          "Running a court reporting firm involves more than just capturing the record.  It demands consistent administrative precision, strong client communication, and an eye on the bigger business picture. That’s where we come in. TVG Management acts as your operational backbone, helping you manage the day-to-day so you can focus on what matters most: your clients and your growth. Whether you're scaling up, facing staffing challenges, or need support during high-demand periods, our experienced team steps in.  We bring reliability, consistency, and confidence to your agency.",
        ],
        link: "link",
        images: [
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
          "/services/management/1.png",
          "/services/management/2.png",
          "/services/management/3.png",
          "/services/management/4.png",
        ],
      },
      Overview: {
        title: "Proven Experience Delivering the Efficiency You Need",
        pera: [
          "Managing a court reporting agency means balancing client expectations, reporter coordination, billing cycles, and deadlines, all while keeping your firm’s reputation. That’s where TVG Management comes in. We serve as your dependable operational partner, delivering customized administrative support designed specifically for court reporting firms.",
          "Whether you're scaling your business, dealing with staff shortages, or simply looking to free up time for strategic growth, our experienced team is here to help. We take care of the behind-the-scenes so you can stay focused on delivering exceptional service to your clients.",
        ],
        img: "/services/management-over.png",
      },
      Provide: {
        pera: "We manage your back office so you can focus on delivering top-tier client service. From scheduling to payroll, we streamline the chaos behind the scenes.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Branding & marketing help" },
          { icon: "/fruit-citrus.png", text: "Vendor coordination" },
          { icon: "/fruit-citrus.png", text: "Transcript & exhibit handling" },
          { icon: "/fruit-citrus.png", text: "Billing, collections & payroll" },
          { icon: "/fruit-citrus.png", text: "Client onboarding assistance" },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Scheduling and Calendar Support",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Operations reporting & performance",
          },
          { icon: "/fruit-citrus.png", text: "Vendor coordination" },
          { icon: "/fruit-citrus.png", text: "Branding & marketing help" },
          { icon: "/fruit-citrus.png", text: "Client onboarding assistance" },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every business needs structure and we’re here to build it with you. We streamline operations, reduce stress, and let you focus on what matters most the growth.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Attorneys Supported Annually" },
        ],
      },
      Overview2: [ 
        {
          icon: "/wwo-icon/m1.png",
          title: "End-to-End Scheduling & Communication Management",
          description:
            "We handle scheduling, resource calendar coordination, email monitoring, and phone answering, ensuring your agency runs smoothly and stays responsive.  We are more than an answering service. We have the skills needed to answer questions the first time they are asked. ",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/m2.png",
          title: "Meticulous Transcript & Exhibit Processing",
          description:
            "From accurate transcript formatting to exhibit marking, printing, binding, and final delivery, we manage it all with precision and speed.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/m3.png",
          title: "Streamlined Invoicing & Collections",
          description:
            "Get paid on time with professional invoice generation, client billing follow-ups, and efficient collections support.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/m4.png",
          title: "Accurate Payroll & Bookkeeping",
          description:
            "We process reporter payments and manage day-to-day bookkeeping, helping you maintain financial clarity and control.",
          classBorder: "",
        },
      ],
    },
    "tvg-reporting": {
      hero: {
        name: "TVG Reporting",
        title: "Court Reporting and Legal Videography Services",
        pera: [
          "We provide experienced court reporters and legal videographers who consistently deliver accurate and timely records, whether in person or remotely. Our team works seamlessly under your brand or as an extension of your operations, ensuring your clients receive top-tier service while you maintain control and confidence in every assignment. Let us handle the logistics so you can scale your services without sacrificing quality.",
        ],
        link: "link",
        images: [
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
          "/services/reporting/1.png",
          "/services/reporting/2.png",
          "/services/reporting/3.png",
        ],
      },
      Overview: {
        title: " Precision That Speaks for Itself",
        pera: [
          "At TVG Reporting, we understand what court reporting firm owners need: dependable professionals who deliver accurate, impartial, and timely records under your banner. That’s why we partner with court reporting agencies across Massachusetts, Rhode Island, Connecticut, and nationwide through our trusted network to expand your coverage and reinforce your reputation.",
          "Whether you're managing overflow, staffing a high-volume case, or seeking remote coverage across jurisdictions, our experienced team of certified reporters and legal videographers is here to support your operations so you can confidently meet client expectations without missing a beat.",
        ],
        img: "/services/reporting-over.png",
      },
      Provide: {
        pera: "We’re here to back you up with professionals reporters and videographers whenever you need an extra hand—or when a job takes you outside your usual coverage area. Wherever the work is, we’ll help you say yes to your clients with confidence.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Job assignment & coordination" },
          {
            icon: "/fruit-citrus.png",
            text: "Real-time & rough draft delivery",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Reporter Support & Management",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Exhibit processing & digital backups",
          },
        ],
        tagsRight: [
           {
            icon: "/fruit-citrus.png",
            text: "In-Person & Remote Coverage",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Transcript-to-Video Synchronization",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Exhibit Management",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Court reporter performance monitoring",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every transcript matters, and we make sure not a single word is missed. From deposition to delivery, we ensure accuracy, speed, and professionalism.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/r1.png",
          title: "In-Person & Remote Deposition Coverage",
          description:
            "Scalable solutions for on-site or virtual proceedings available when and where you need us.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/r2.png",
          title: "Realtime Reporting & Rough Drafts",
          description:
            " Live access and quick-turnaround drafts to keep your clients ahead of the curve.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/r3.png",
          title: "On-Time Transcript Production & Delivery",
          description:
            "Transcripts or videos delivered promptly, in your firm’s preferred formats and specifications.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/r4.png",
          title: "Experienced Reporters",
          description:
            "Our professionals maintain the highest standards of neutrality, accuracy, and discretion.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/r5.png",
          title: "Legal Videographers",
          description:
            "Our in-house videographers are experts in providing consistent, high-quality legal video services. ",
          classBorder: "",
        },
      ],
    },
    "tvg-stream": {
      hero: {
        name: "TVG Stream",
        title: "Legal Video, Trial Presentation and Conference A/V",
        pera: [
          "In today’s fast-evolving legal landscape, advanced technology is no longer optional; it’s indispensable. TVG Stream equips court reporting firms with comprehensive remote support, offering secure platforms, real-time technical assistance, and flawless execution. From multi-party depositions and last-minute bookings, to trial presentation services and equipment rentals, we support your firm in consistently delivering an exceptional client experience.",
        ],
        link: "link",
        images: [
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
          "/services/stream/1.png",
          "/services/stream/2.png",
          "/services/stream/3.png",
          "/services/stream/4.png",
        ],
      },
      Overview: {
        title: "Sophisticated Solutions for Critical Testimony",
        pera: [
          "Technology has become a fundamental necessity in today’s legal proceedings. TVG Stream provides professional virtual deposition services and in-trial technical support for law firms and court reporting agencies, ensuring every proceeding runs smoothly from start to finish. Whether remote, in your war room, or in the courtroom  , we expertly manage the technical details so your team can focus entirely on advocacy.",
          "From complex multi-party virtual depositions to high-stakes trials, we deliver the tools, expertise, and staffing required for a flawless experience both on screen and in person.",
        ],
        img: "/services/stream-over.png",
      },
      Provide: {
        pera: "We are your remote deposition and trial presentation experts. We manage the tech so your proceedings run smoothly, securely, and professionally.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Full remote deposition setup" },
          { icon: "/fruit-citrus.png", text: "Live tech monitoring & troubleshooting", },
          { icon: "/fruit-citrus.png", text: "Platform flexibility (Zoom, WebEx, etc.) ",},
          { icon: "/fruit-citrus.png", text: "End-to-end exhibit handling " },
          { icon: "/fruit-citrus.png", text: "A/V Technicians" },
          { icon: "/fruit-citrus.png", text: "Trial Equipment Rentals" },
        ],
        tagsRight: [
          { icon: "/fruit-citrus.png",text: "Participant coordination & scheduling", },
          { icon: "/fruit-citrus.png",text: "Secure breakout room facilitation",},
          { icon: "/fruit-citrus.png", text: "Screen-sharing & audio testing ",},
          { icon: "/fruit-citrus.png", text: "Session recording & storage" },
          { icon: "/fruit-citrus.png", text: "Trial Technicians" },
          { icon: "/fruit-citrus.png", text: "Hot-Seat Operators " },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every moment counts, and we help you capture it live. From remote depositions to secure streaming, we make virtual proceedings smooth.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/s1.png",
          title: "Remote Deposition Setup & Hosting",
          description:
            "We manage platform access, scheduling, permissions, and environment control so you don’t have to.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s2.png",
          title: "Participant Training & Onboarding",
          description:
            "Customized guidance for attorneys, clients, and witnesses to ensure confidence and preparedness before every session.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s3.png",
          title: "Live Technical Support",
          description:
            "Real-time troubleshooting during depositions and hearings to minimize disruptions and uphold professionalism.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s4.png",
          title: "Secure Exhibit Management",
          description:
            "Confidential document sharing, digital exhibit marking, and real-time presentation tools to keep proceedings efficient and organized.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s5.png",
          title: "Session Recording & Archiving",
          description:
            "Comprehensive video and audio capture with optional transcript syncing, securely stored, and easily accessible when needed.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s6.png",
          title: "Trial Technician & Hot-Seat Operator Services",
          description:
            "Skilled in-courtroom support for exhibit displays, video playback, and technology coordination, assuring flawless execution under pressure.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/s7.png",
          title: "Trial Equipment Rentals",
          description:
            "Access professional-grade courtroom equipment, including screens, projectors, and audio systems, with full setup and on-site support in your war room or in the courtroom.",
          classBorder: "",
        },
      ],
    },
    "tvg-books": {
      hero: {
        name: "TVG Books",
        title: "Bookkeeping Services for Court Reporting Firms",
        pera: [
          "Your business depends on more than exceptional service. It depends on strong financial health. Without transparent financial insights, even thriving agencies can face challenges with cash flow, tax preparation, and strategic planning. That’s why precise bookkeeping isn’t optional; it’s critical. At TVG Books, we recognize the unique financial pressures you encounter behind the scenes. Whether you’re managing client payments, maintaining compliance, or simply seeking better control over your finances, our team is here to make it easier. We offer specialized bookkeeping services tailored specifically for court reporting firms and industry professionals. With TVG Books, you can operate with confidence, clarity, and control.",
        ],
        link: "link",
        images: [
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
          "/services/books/1.png",
          "/services/books/2.png",
          "/services/books/3.png",
          "/services/books/4.png",
        ],
      },
      Overview: {
        title: "Precision You Can Count On",
        pera: [
          "Running a court reporting firm means wearing many hats, and finances shouldn’t be the one that keeps you up at night. At TVG Books, we specialize in taking the weight of bookkeeping and reporting off your shoulders with services built specifically for your industry. Whether you're managing monthly invoices or prepping for year-end filings, we ensure your numbers stay clean, compliant, and in control."
        ],
        img: "/services/books-over.png",
      },
      Provide: {
        pera: "We make your finances effortless. With organized bookkeeping, timely reporting, and tax-ready numbers, you're always audit-ready.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Bookkeeping & reconciliation" },
          { icon: "/fruit-citrus.png", text: "Payroll & contractor payments" },
          { icon: "/fruit-citrus.png", text: "Financial reporting & insights" },
          { icon: "/fruit-citrus.png", text: "Invoicing & collections" },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Budget tracking & cost analysis",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Expense categorization & management",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Vendor payments & account updates",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Tax document preparation support ",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every dollar tells a story, and we make sure your is clean and clear. We manage your books so you can manage your business better. ",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/b1.png",
          title: "Bookkeeping (QuickBooks Specialists)",
          description:
            "We handle the day-to-day financial entries so you don’t have to. From reconciling accounts to tracking income and expenses, our team of QuickBooks specialists ensures your books are accurate, organized, and up-to-date, giving you a real-time snapshot of your business health.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/b2.png",
          title: "Client Billing and Invoicing",
          description:
            "Never miss a payment. We streamline your client billing process by generating timely, accurate invoices, and tracking payments. We make it easy for your clients to pay, and for you to stay on top of your receivables, keeping your cash flow steady and predictable.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/b3.png",
          title: "Annual Filings and Basic Compliance Support",
          description:
            "Tax season doesn't have to be stressful. We prepare and manage annual financial documents, assist with 1099s, and help ensure your business meets the basic compliance requirements for filings on time, every time.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/b4.png",
          title: "Financial Reporting",
          description:
            "Make confident business decisions with reports that actually make sense. From profit and loss statements to customized financial summaries, we equip you with insights you can use for forecasting, budgeting, or just understanding where your business stands.",
          classBorder: "",
        },
      ],
    },
    "tvg-creative": {
      hero: {
        name: "TVG Creative",
        title: "Branding & Identity Kits for Legal and B2B Professionals",
        pera: [
          "Whether you’re launching a new venture or refreshing your digital presence, how you show up matters. In today’s fast-moving world, first impressions aren’t just visual, they're strategic. That’s where TVG Creative steps in. We provide full-spectrum branding and design services customized for the court reporting industry. We help you create identity kits that cut through the noise, attract the right audience, and communicate your value with clarity and style.",
        ],
        link: "link",
        images: [
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
          "/services/creative/1.png",
          "/services/creative/2.png",
          "/services/creative/3.png",
          "/services/creative/4.png",
        ],
      },
      Overview: {
        title: "Built to Stand Out. Designed to Perform.",
        pera: [
          "In a market where attention is currency, your brand’s presence needs to do more than just look good.  It needs to resonate, build trust, and drive action. At TVG Creative, we blend design with strategy to bring that vision to life. Whether you’re a reporting agency or solo practitioner, we help you build a brand that reflects your expertise and moves your business forward.",
          "From stunning, memorable branding to launch-ready identity kits, our creative solutions are built with purpose and customized to your niche, audience, and goals.",
        ],
        img: "/services/creative-over.png",
      },
      Provide: {
        pera: "To ensure you stand out in a crowded market. We craft branding and content that reflects your values and gets you noticed.",
        tagsLeft: [
          // { icon: "/fruit-citrus.png", text: "Website design & SEO" },
          { icon: "/fruit-citrus.png", text: "Logo & brand identity kits" },
          {
            icon: "/fruit-citrus.png",
            text: "Social media content & planning",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Brochures, emailers & digital assets",
          },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Video editing & animation support",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Ad creatives for digital campaigns",
          },
          { icon: "/fruit-citrus.png", text: "Style guide development" },
          {
            icon: "/fruit-citrus.png",
            text: "Event branding and signage design",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every brand deserves to stand out, we help you do it with purpose. We turn your values into visuals and ideas into impact.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/c1.png",
          title: "Branding and Content Marketing",
          description:
            "We help you create a brand identity that goes beyond just a logo. From messaging to visuals, we develop consistent, cohesive branding backed by strategic content that resonates with your audience and establishes you as a trusted authority.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/c2.png",
          title: "Business Identity Kits",
          description:
            "Everything you need to hit the ground running, whether you’re launching a startup or kicking off your next marketing campaign. Our startup kits include professionally designed logos, business cards, email signatures, social media profiles, brochures, and more. From day one, your business identity will be credible, consistent, and ready to make an impact.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/c3.png",
          title: "Marketing Materials",
          description:
            "We craft polished brochures, email templates, and digital assets to align perfectly with your company’s branding and messaging.",
          classBorder: "",
        },
      ],
    },
    "tvg-connect": {
      hero: {
        name: "TVG Connect",
        title: "Association Management for the Court Reporting Industry",
        pera: [
          "Professional organizations and trade associations thrive on connection, coordination, and clear leadership.  But managing all the moving parts can be overwhelming. From day-to-day operations to annual conferences, it takes more than passion to keep members engaged and everything running smoothly. That’s where TVG Connect steps in. We specialize in association management for professional, legal, and compliance-driven industries, offering customized solutions that keep your organization efficient, professional, and people-focused. Whether you're a growing association or a well-established group looking for scalable support, our experienced team brings structure, strategy, and heart to every detail.",
        ],
        link: "link",
        images: [
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
          "/services/connect/1.png",
          "/services/connect/2.png",
          "/services/connect/3.png",
          "/services/connect/4.png",
        ],
      },
      Overview: {
        title: "Stronger Communities. Smarter Management.",
        pera: [
          "Behind every thriving association is a team that manages, plans, and communicates with intention. At TVG Connect, we serve as an extension of your leadership, helping your organization grow with purpose while supporting your members with professionalism and care.",
          "From executive direction to event planning and member engagement, our services are built to meet the unique demands of associations in compliance-heavy and professional sectors. We provide the hands-on support and operational expertise needed to streamline your organization’s goals so you can focus on creating a lasting impact in your field.",
        ],
        img: "/services/connect-over.png",
      },
      Provide: {
        pera: "Our team helps associations streamline operations, strengthen member engagement, and plan annual conferences, all while providing the flexibility to grow as their needs evolve.",
        tagsLeft: [
          {
            icon: "/fruit-citrus.png",
            text: "Messaging & positioning strategy",
          },
          { icon: "/fruit-citrus.png", text: "Email & newsletter management" },
          {
            icon: "/fruit-citrus.png",
            text: "Social media planning & posting                    ",
          },
          { icon: "/fruit-citrus.png", text: "Website content & blog writing" },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Press release & media kit creation",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Reputation management & testimonials",
          },
          { icon: "/fruit-citrus.png", text: "Campaign planning & scheduling" },
          {
            icon: "/fruit-citrus.png",
            text: "Analytics & engagement tracking ",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every member deserves attention, and we help you deliver it consistently. We keep your communication sharp, timely and always member-first.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/co1.png",
          title: "Executive Director Placement and Leadership",
          description:
            "We place experienced leaders to manage day-to-day operations, drive strategic planning, support board governance, and act as the liaison between members, partners, and stakeholders.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/co2.png",
          title: "Event Planning and Coordination",
          description:
            "Conferences, webinars, workshops, we plan and manage it all. Our event experts handle timelines, vendors, promotion, registration, and execution with precision so you can focus on delivering value.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/co3.png",
          title: "Membership and Communications Management",
          description:
            "Engagement is everything. We manage member onboarding, renewals, and consistent communication such as email newsletters, event updates, and social content to keep your community informed and connected.",
          classBorder: "",
        },
      ],
    },
    "tvg-command": {
      hero: {
        name: "TVG Command",
        title: "Technology Solutions Built for Legal, Backed by Experts",
        pera: [
          "As the legal industry evolves, so too must your technology. In court reporting and case production, efficiency and accuracy are essential. That’s why forward-thinking firms are turning to AI-powered platform solutions that don’t just keep up but lead the way. TVG Command empowers you to embrace this transformation with confidence, offering sales support and hands-on training on the most advanced legal tech available. We help you modernize your transcription workflow and stay ahead of the curve. By connecting you with tools designed to scale your reporting business, reduce manual tasks, and accelerate turnaround times, we ensure you never have to compromise on accuracy.",
        ],
        link: "link",
        images: [
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
          "/services/command/1.png",
          "/services/command/2.png",
          "/services/command/3.png",
          "/services/command/4.png",
        ],
      },
      Overview: {
        title: "Powering the Future of Legal Transcription.",
        pera: [
          "Manual transcription workflows are time-consuming, costly, and hard to scale. With AI-enhanced tools, legal professionals can now automate the heavy lifting while maintaining the high-quality output their clients expect.",
          "TVG Command equips court reporting agencies with smart, scalable transcription platforms that are a best-in-class solution customized for legal use. Our technology partners help you streamline your capture and production pipeline, accelerate delivery times, and minimize editing without compromising precision.",
        ],
        img: "/services/command-over.png",
      },
      Provide: {
        pera: "We provide smart, scalable transcription solutions to improve efficiency and increase productivity for court reporting firms and individual transcriptionists.",
        tagsLeft: [
          { icon: "/fruit-citrus.png", text: "Document Analysis & Advanced Transcription Tools" },
          { icon: "/fruit-citrus.png", text: "Multilingual Support" },
          {
            icon: "/fruit-citrus.png",
            text: "Secure Delivery & File Backup",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Formatting Customization Per Jurisdiction",
          },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Confidentiality Compliance Checks",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Smart Formatting & Grammar Checks",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Quality Control for Final Transcripts",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Delivery Confirmation & File Handoff Logs",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Every team needs direction , we give you the tools to lead with ease. We centralize processes and reporting, giving you full operational control.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/comm1.png",
          title:
            "Claudio AI-Powered Transcription Built for Legal Professionals",
          description:
            "A purpose-built platform for court reporters and legal professionals, Claudio AI delivers speed, accuracy, and industry-focused intelligence.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/comm2.png",
          title: "Automated Transcription",
          description:
            "Upload audio or video files (100+ formats supported), and receive first-draft transcripts in minutes, powered by ~95–99% accurate speech models trained specifically for legal use.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/comm3.png",
          title: "Smart Formatting & Grammar-Ready Output",
          description:
            "Save up to 20% of editing time. The platform applies customizable formatting rules, grammar clean-up, and polish to deliver draft and near-final versions with minimal touch-ups.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/comm4.png",
          title: "Speaker Identification",
          description:
            "Accurately tag multiple speakers even in complex legal environments like depositions and hearings. Ideal for high-volume or multi-party sessions.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/comm5.png",
          title: "Enterprise Features & Custom Integrations",
          description:
            "Enjoy scalable infrastructure with open APIs, SFTP/Dropbox delivery, domain-specific vocabulary, and SLA-backed uptime, everything built for serious production environments.",
          classBorder: "",
        },
      ],
    },
    "tvg-verify": {
      hero: {
        name: "TVG Verify",
        title: "End-to-End Employment Screening & Background Checks",
        pera: [
          "Great hires start with great data. Whether you're an employer, association, or staffing agency, the cost of a bad hire can be high, not just financially, but reputationally. That’s why trusted, legally compliant screening is essential. TVG Verify partners with USAFact to deliver reliable background check solutions that meet today’s fast-paced hiring demands. From identity verification to global criminal checks, we make it easy to hire with confidence without slowing down your process.",
        ],
        link: "link",
        images: [
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
          "/services/verify/1.png",
          "/services/verify/2.png",
          "/services/verify/3.png",
          "/services/verify/4.png",
        ],
      },
      Overview: {
        title: "Screen with Confidence. Hire with Certainty.",
        pera: [
          "In today’s competitive talent market, your hiring process must be both swift and reliable. TVG Verify delivers comprehensive employment screening through the SmartHire Platform, seamlessly integrating real-time data, automated workflows, and regulatory compliance into one efficient system.",
          "Whether you’re onboarding talent in the U.S. or internationally, our scalable screening services adapt to your team’s needs, ensuring every step is legally compliant and hassle-free.",
        ],
        img: "/services/verify-over.png",
      },
      Provide: {
        pera: "We specialize in fast, secure, and thorough employee screenings.  TVG Verify provides you with the data you need to make the right hiring decisions.",
        tagsLeft: [
          {
            icon: "/fruit-citrus.png",
            text: "Identity Checks",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Driving Records",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Drug & Health Screenings",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Employment History",
          },
        ],
        tagsRight: [
          {
            icon: "/fruit-citrus.png",
            text: "Workforce Screening",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Criminal Background Checks",
          },
          {
            icon: "/fruit-citrus.png",
            text: "Credit Record & History",
          },
          {
            icon: "/fruit-citrus.png",
            text: "I-9 & E-Verify",
          },
        ],
      },
      TvgEffect: {
        title: "Service Metrics",
        pera: "Whether it’s verifying identity or running global criminal checks, we give you the confidence to hire the right people without slowing down your process.",
        impactStats: [
          { number: "24+", label: "Years of Industry Experience" },
          { number: "98%", label: "Positive Client Feedback" },
          { number: "1000+", label: "Clients Supported Annually" },
        ],
      },
      Overview2: [
        {
          icon: "/wwo-icon/v1.png",
          title: "Comprehensive Screening Packages",
          description:
            "Get full-spectrum background checks -- from criminal history and driving records, to drug screenings, credit checks, employment verification, and more -- all customized to your industry needs.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/v2.png",
          title: "SmartHire Platform",
          description:
            "A centralized client dashboard with live status updates, e-signatures, integrated workflows, and direct candidate communication, making screening faster and more transparent.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/v3.png",
          title: "Legal Compliance at Every Step",
          description:
            "Fully certified by the Professional Background Screening Association (PBSA), and 100% FCRA-compliant, with adherence to all relevant state and federal regulations.",
          classBorder: "border-b border-white",
        },
        {
          icon: "/wwo-icon/v4.png",
          title: "Global Screening Reach",
          description:
            "Conduct screenings in the U.S. and across most global markets. We offer customized solutions for each geography and job type, ideal for remote or international hiring.",
          classBorder: "",
        },
      ],
    },
  };

  const content = data[serviceId];

  if (!content) {
    return (
      <div className="text-center py-10 text-red-500 text-lg">
        Service not found
      </div>
    );
  }

  return (
    <div id="service-details" className=" overflow-x-hidden">
      <ServiceDetailsHero data={content.hero} />
      <ServiceOver data={content.Overview} />
      <WhatWeProvide data={content.Provide} />
      {/* <TVGEffect data={content.TvgEffect} /> */}
      <ServiceOverview data={content.Overview2} />

      <Testimonials />
    </div>
  );
}

export default ServiceDetails;
