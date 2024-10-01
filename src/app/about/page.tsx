import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Giới Thiệu | Mẫu Next.js Miễn Phí cho Startup và SaaS",
  description: "Đây là Trang Giới Thiệu cho Mẫu Startup Nextjs",
  // các metadata khác
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Giới Thiệu"
        description="Chúng tôi là ai và chúng tôi làm gì"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
