import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Những thành phần UI tốt nhất cho các trang web hiện đại",
    paragraph:
      "Những thành phần UI tốt nhất không chỉ giúp nâng cao trải nghiệm người dùng mà còn tạo ra sự khác biệt cho trang web của bạn.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Phạm Thị Thu",
      image: "/images/blog/author-01.png",
      designation: "Nhà Thiết Kế Đồ Họa",
    },
    tags: ["sáng tạo"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 cách đơn giản để cải thiện kỹ năng thiết kế của bạn",
    paragraph:
      "Cải thiện kỹ năng thiết kế không khó, chỉ cần áp dụng một vài mẹo đơn giản và thực hành thường xuyên.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Lê Van Hồng",
      image: "/images/blog/author-02.png",
      designation: "Người Viết Nội Dung",
    },
    tags: ["máy tính"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Mẹo để nhanh chóng cải thiện tốc độ lập trình của bạn.",
    paragraph:
      "Tốc độ lập trình có thể được cải thiện đáng kể bằng cách thực hành các kỹ thuật và chiến lược lập trình hiệu quả.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Nguyễn Van An",
      image: "/images/blog/author-03.png",
      designation: "Nhà Thiết Kế Đồ Họa",
    },
    tags: ["thiết kế"],
    publishDate: "2025",
  },
];

export default blogData;
