function isPhoneNumber(input) {
    // Kiểm tra xem chuỗi có phải là số không và có đúng định dạng số điện thoại không
    return !isNaN(input) && /^\d{10}$/.test(input); // Giả sử số điện thoại có 10 chữ số
}
function getBotResponse(input) {
      // Các câu trả lời cho việc mua giày
      if (input.toLowerCase().includes("lv")) {
        return "Chúng tôi có nhiều mẫu giày LV đẹp và sang trọng. Số điện thoại của bạn là gi? ";
    } else if (input.toLowerCase().includes("vans")) {
        return "Dòng giày Vans của chúng tôi phong phú và đa dạng về kiểu dáng. Số điện thoại của bạn là gi? ";
    } else if (input.toLowerCase().includes("gucci")) {
        return "Chúng tôi có một số mẫu giày Gucci cao cấp và thời trang. Số điện thoại của bạn là gi? ";
    } else if (input.toLowerCase().includes("converse")) {
        return "Giày Converse luôn là sự lựa chọn phổ biến với nhiều kiểu dáng và màu sắc. Số điện thoại của bạn là gi? ";
    }

if (isPhoneNumber(input)) {
        return "Cảm ơn bạn đã cung cấp số điện thoại. Chúng tôi sẽ liên hệ lại sớm!";
    }

    // Câu trả lời cho việc hỏi về kích cỡ và giá của giày
    if (input.toLowerCase().includes("kích cỡ")) {
        return "Kích cỡ giày của chúng tôi thường từ size 35 đến size 45, tuy nhiên một số mẫu có sẵn các size đặc biệt. Bạn cần size nào?";
    } else if (input.toLowerCase().includes("giá")) {
        return "Giá của giày tùy thuộc vào thương hiệu và kiểu dáng. Chúng tôi có giày phù hợp với mọi túi tiền. Bạn có mức giá cụ thể nào trong tâm trí?";
    }

    // Gợi ý cho người dùng nhập đúng
    return "Xin lỗi, tôi không hiểu loại giày bạn muốn. Bạn có thể chọn giày LV, Vans, Gucci hoặc Converse.";
Ư
}

