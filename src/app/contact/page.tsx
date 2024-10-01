import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Liên Hệ | Mẫu Next.js miễn phí cho Startup và SaaS",
  description: "Đây là Trang Liên Hệ dành cho Mẫu Startup Nextjs",
  // các metadata khác
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Trang Liên Hệ"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
