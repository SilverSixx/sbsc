import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[470px]">
  <div className="mb-9">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Mã không lỗi
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      Chúng tôi đảm bảo rằng mã nguồn được viết sạch sẽ và không có lỗi, mang đến trải nghiệm tốt nhất cho khách hàng.
    </p>
  </div>
  <div className="mb-9">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Hỗ trợ cao cấp
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ với thời gian phản hồi nhanh và giải quyết các vấn đề phức tạp.
    </p>
  </div>
  <div className="mb-1">
    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Next.js
    </h3>
    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
      Next.js giúp xây dựng các ứng dụng web mạnh mẽ với hiệu suất cao, tối ưu hóa SEO và thời gian tải nhanh.
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
