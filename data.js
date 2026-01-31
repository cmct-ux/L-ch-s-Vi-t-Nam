const historicalEvents = [
  {
    id: 1,
    title: "Cách mạng tháng Tám năm 1945",
    period: "Tháng 8 năm 1945",
    causes: {
      main: [
        "Mâu thuẫn sâu sắc giữa toàn thể nhân dân Việt Nam với ách thống trị của thực dân Pháp và phát xít Nhật",
        "Yêu cầu cấp thiết phải giành độc lập dân tộc"
      ],
      secondary: [
        "Phong trào cách mạng phát triển mạnh",
        "Đảng Cộng sản Đông Dương có đường lối đúng đắn"
      ],
      conditions: [
        "Phát xít Nhật đầu hàng Đồng minh",
        "Chính quyền tay sai tan rã"
      ]
    },
    mainEvent:
      "Nhân dân cả nước tổng khởi nghĩa, giành chính quyền trong cả nước.",
    consequences: {
      summary: [
        "Chính quyền về tay nhân dân",
        "Nước Việt Nam Dân chủ Cộng hòa ra đời"
      ],
      detailedAnalysis: [
        "Chấm dứt hơn 80 năm thống trị của thực dân và chế độ phong kiến",
        "Mở ra kỷ nguyên độc lập, tự do cho dân tộc Việt Nam",
        "Khẳng định vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
        "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới"
      ]
    }
  },

  {
    id: 2,
    title: "Chiến thắng Điện Biên Phủ",
    period: "Năm 1954",
    causes: {
      main: [
        "Thực dân Pháp quyết tâm xâm lược Việt Nam",
        "Nhân dân Việt Nam kiên quyết kháng chiến"
      ],
      secondary: [
        "Quân đội Việt Nam ngày càng trưởng thành",
        "Hậu phương vững chắc"
      ],
      conditions: [
        "Pháp xây dựng tập đoàn cứ điểm Điện Biên Phủ",
        "Việt Nam có chiến lược quân sự đúng đắn"
      ]
    },
    mainEvent:
      "Quân đội Việt Nam tiêu diệt hoàn toàn tập đoàn cứ điểm Điện Biên Phủ.",
    consequences: {
      summary: [
        "Pháp buộc ký Hiệp định Giơ-ne-vơ",
        "Chiến tranh xâm lược chấm dứt"
      ],
      detailedAnalysis: [
        "Giáng đòn quyết định vào chủ nghĩa thực dân cũ",
        "Miền Bắc Việt Nam được giải phóng hoàn toàn",
        "Nâng cao vị thế của Việt Nam trên trường quốc tế"
      ]
    }
  },

  {
    id: 3,
    title: "Phong trào Cần Vương",
    period: "1885 – 1896",
    causes: {
      main: [
        "Thực dân Pháp xâm lược Việt Nam",
        "Triều đình phong kiến đầu hàng"
      ],
      secondary: [
        "Tinh thần yêu nước của sĩ phu và nhân dân"
      ],
      conditions: [
        "Chiếu Cần Vương được ban bố"
      ]
    },
    mainEvent:
      "Nhiều cuộc khởi nghĩa chống Pháp nổ ra trên cả nước.",
    consequences: {
      summary: [
        "Phong trào thất bại"
      ],
      detailedAnalysis: [
        "Thể hiện tinh thần yêu nước mãnh liệt của dân tộc",
        "Bộc lộ hạn chế của con đường cứu nước phong kiến",
        "Tạo tiền đề cho các khuynh hướng cứu nước mới"
      ]
    }
  },

  {
    id: 4,
    title: "Khởi nghĩa Yên Thế",
    period: "1884 – 1913",
    causes: {
      main: [
        "Thực dân Pháp cướp đoạt đất đai của nông dân"
      ],
      secondary: [
        "Tinh thần đấu tranh của nông dân Yên Thế"
      ],
      conditions: [
        "Địa hình rừng núi hiểm trở",
        "Sự lãnh đạo của Hoàng Hoa Thám"
      ]
    },
    mainEvent:
      "Nông dân Yên Thế tiến hành khởi nghĩa vũ trang chống Pháp.",
    consequences: {
      summary: [
        "Khởi nghĩa thất bại"
      ],
      detailedAnalysis: [
        "Gây nhiều khó khăn cho chính quyền thực dân Pháp",
        "Thể hiện tinh thần quật cường của nông dân Việt Nam"
      ]
    }
  },

  {
    id: 5,
    title: "Thành lập Đảng Cộng sản Việt Nam",
    period: "Năm 1930",
    causes: {
      main: [
        "Khủng hoảng về đường lối cứu nước"
      ],
      secondary: [
        "Phong trào công nhân phát triển mạnh"
      ],
      conditions: [
        "Vai trò của Nguyễn Ái Quốc"
      ]
    },
    mainEvent:
      "Đảng Cộng sản Việt Nam chính thức ra đời.",
    consequences: {
      summary: [
        "Cách mạng Việt Nam có tổ chức lãnh đạo thống nhất"
      ],
      detailedAnalysis: [
        "Chấm dứt tình trạng khủng hoảng đường lối",
        "Đưa cách mạng Việt Nam đi theo con đường đúng đắn"
      ]
    }
  },

  {
    id: 6,
    title: "Xô viết Nghệ – Tĩnh",
    period: "1930 – 1931",
    causes: {
      main: [
        "Áp bức bóc lột nặng nề của thực dân phong kiến"
      ],
      secondary: [
        "Sự lãnh đạo của Đảng"
      ],
      conditions: [
        "Quần chúng công – nông được giác ngộ"
      ]
    },
    mainEvent:
      "Nhân dân Nghệ An – Hà Tĩnh lập chính quyền Xô viết.",
    consequences: {
      summary: [
        "Phong trào bị đàn áp"
      ],
      detailedAnalysis: [
        "Là cuộc tập dượt đầu tiên cho Cách mạng tháng Tám",
        "Khẳng định vai trò của quần chúng nhân dân"
      ]
    }
  },

  {
    id: 7,
    title: "Toàn quốc kháng chiến chống Pháp",
    period: "Năm 1946",
    causes: {
      main: [
        "Thực dân Pháp quay lại xâm lược Việt Nam"
      ],
      secondary: [
        "Nhân dân quyết tâm bảo vệ nền độc lập"
      ],
      conditions: [
        "Lực lượng kháng chiến được chuẩn bị"
      ]
    },
    mainEvent:
      "Lời kêu gọi toàn quốc kháng chiến được phát động.",
    consequences: {
      summary: [
        "Cả nước bước vào cuộc kháng chiến lâu dài"
      ],
      detailedAnalysis: [
        "Thể hiện ý chí kiên cường của dân tộc Việt Nam",
        "Đặt nền móng cho thắng lợi sau này"
      ]
    }
  },

  {
    id: 8,
    title: "Hiệp định Giơ-ne-vơ năm 1954",
    period: "Năm 1954",
    causes: {
      main: [
        "Chiến thắng Điện Biên Phủ vang dội"
      ],
      secondary: [
        "Áp lực từ dư luận quốc tế"
      ],
      conditions: [
        "Hội nghị quốc tế được triệu tập"
      ]
    },
    mainEvent:
      "Hiệp định Giơ-ne-vơ về Đông Dương được ký kết.",
    consequences: {
      summary: [
        "Miền Bắc được hoàn toàn giải phóng"
      ],
      detailedAnalysis: [
        "Chiến tranh xâm lược của Pháp chấm dứt",
        "Miền Bắc tiến lên xây dựng chủ nghĩa xã hội"
      ]
    }
  },

  {
    id: 9,
    title: "Phong trào Đồng khởi",
    period: "1959 – 1960",
    causes: {
      main: [
        "Mỹ – Diệm tăng cường đàn áp phong trào cách mạng"
      ],
      secondary: [
        "Tinh thần đấu tranh của nhân dân miền Nam"
      ],
      conditions: [
        "Cơ sở cách mạng được xây dựng"
      ]
    },
    mainEvent:
      "Nhân dân miền Nam nổi dậy đấu tranh chính trị kết hợp vũ trang.",
    consequences: {
      summary: [
        "Phong trào cách mạng miền Nam phát triển mạnh"
      ],
      detailedAnalysis: [
        "Làm lung lay chính quyền Mỹ – Diệm",
        "Mở ra thời kỳ đấu tranh cách mạng mới"
      ]
    }
  },

  {
    id: 10,
    title: "Chiến dịch Hồ Chí Minh",
    period: "Năm 1975",
    causes: {
      main: [
        "So sánh lực lượng có lợi cho cách mạng"
      ],
      secondary: [
        "Chính quyền Sài Gòn suy yếu nghiêm trọng"
      ],
      conditions: [
        "Thời cơ chiến lược chín muồi"
      ]
    },
    mainEvent:
      "Quân giải phóng tiến vào Sài Gòn, giải phóng hoàn toàn miền Nam.",
    consequences: {
      summary: [
        "Đất nước thống nhất"
      ],
      detailedAnalysis: [
        "Chấm dứt chiến tranh kéo dài hơn 30 năm",
        "Mở ra kỷ nguyên độc lập, thống nhất và phát triển"
      ]
    }
  }
];
