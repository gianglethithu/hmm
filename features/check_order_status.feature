Feature: Kiểm tra trạng thái đơn hàng SPX

  Scenario Outline: Xem trạng thái đơn hàng
    Given tôi đăng nhập với tài khoản "0869960144" và mật khẩu "Trung2112"
    When tôi truy cập vào trang đơn hàng "<orderId>"
    Then tôi thấy trạng thái đơn hàng được hiển thị

    Examples:
    |orderId |
    | SPXVN056800347964|
