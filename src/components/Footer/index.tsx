"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
          <div className="">
  <div className="mb-12 max-w-[240px] lg:mb-16">
    <Link href="/" className="mb-8 inline-block">
      <Image
        src="/images/logo/logo-2.svg"
        alt="SBSC Solutions"
        className="w-full dark:hidden"
        width={140}
        height={30}
      />
      <Image
        src="/images/logo/logo.svg"
        alt="SBSC Solutions"
        className="hidden w-full dark:block"
        width={140}
        height={30}
      />
    </Link>
    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
      Chào mừng bạn đến với dịch vụ của chúng tôi! Chúng tôi cung cấp giải pháp tốt nhất cho nhu cầu của bạn.
    </p>
    <div className="flex items-center">
      <a
        href="https://www.facebook.com"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://www.instagram.com"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          className="fill-current"
        >
          <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
        </svg>
      </a>
      <a
        href="https://www.youtube.com"
        aria-label="social-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          className="fill-current"
        >
          <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
        </svg>
      </a>
    </div>
  </div>
</div>

<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
      Liên kết hữu ích
    </h2>
    <ul>
      <li>
        <Link
          href="/blog"
          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          Về chúng tôi
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          Liên hệ
        </Link>
      </li>
      <li>
        <Link
          href="/terms"
          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          Điều khoản
        </Link>
      </li>
      <li>
        <Link
          href="/privacy"
          className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          Chính sách bảo mật
        </Link>
      </li>
    </ul>
  </div>
</div>

<div className="">
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
      Thông tin liên hệ
    </h2>
    <ul>
      <li className="mb-5 flex items-center text-base text-body-color dark:text-body-color-dark">
        <span className="mr-4 inline-block rounded-full border border-[#e6e6e6] bg-[#f9f9f9] p-2 text-[#db2777] dark:border-body-color-dark dark:bg-body-color-dark dark:text-[#db2777]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="fill-current"
          >
            <path d="M3 0C1.343 0 0 1.343 0 3v10c0 1.657 1.343 3 3 3h10c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3H3zm7.536 2.121l2.121 2.121-6.757 6.757-2.121-2.121 6.757-6.757zm4.243 10.606c0 .553-.447 1-1 1H3c-.553 0-1-.447-1-1V3c0-.553.447-1 1-1h10c.553 0 1 .447 1 1v10z" />
          </svg>
        </span>
        <span className="text-black dark:text-white">Hr: david@sbsc.asia</span>
      </li>
      <li className="mb-5 flex items-center text-base text-body-color dark:text-body-color-dark">
        <span className="mr-4 inline-block rounded-full border border-[#e6e6e6] bg-[#f9f9f9] p-2 text-[#db2777] dark:border-body-color-dark dark:bg-body-color-dark dark:text-[#db2777]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="fill-current"
          >
            <path d="M8 0C3.581 0 0 3.582 0 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm0 14C4.135 14 1 10.865 1 8S4.135 2 8 2s7 3.135 7 7-3.135 7-7 7zM7 4h2v6H7V4zm1 8a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </span>
        <span className="text-black dark:text-white">+(84) 0246 329 5589</span>
      </li>
      <li className="mb-5 flex items-center text-base text-body-color dark:text-body-color-dark">
        <span className="mr-4 inline-block rounded-full border border-[#e6e6e6] bg-[#f9f9f9] p-2 text-[#db2777] dark:border-body-color-dark dark:bg-body-color-dark dark:text-[#db2777]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="fill-current"
          >
            <path d="M8 0C3.581 0 0 3.582 0 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm0 14C4.135 14 1 10.865 1 8S4.135 2 8 2s7 3.135 7 7-3.135 7-7 7zM4 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
          </svg>
        </span>
        <span className="text-black dark:text-white">Địa chỉ: Tầng 4, Tòa nhà Ellipse, 110 Trần Phú, Hà Đông, Hà Nội</span>
      </li>
    </ul>
  </div>
</div>


  <div className="mb-12 lg:mb-16">
    <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
      Vị trí của chúng tôi
    </h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.491077199849!2d106.62901851411768!3d10.774746062825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b4efb8c1a37%3A0x540c57c2b4b13604!2sFPT%20University!5e0!3m2!1sen!2s!4v1630374212251!5m2!1sen!2s"
      width="100%"
      height="150"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>

          
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
