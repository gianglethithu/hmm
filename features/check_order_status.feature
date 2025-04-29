#Feature: Kiểm tra trạng thái đơn hàng SPX
#
#  Background:
#    Given tôi đã đăng nhập thành công
#
#  Scenario Outline: Truy cập và kiểm tra trạng thái của đơn hàng
#    When tôi truy cập vào trang đơn hàng "<orderId>"
#    Then tôi thấy trạng thái đơn hàng được hiển thị
#
#    Examples:
#    |orderId |
#    | SPXVN056800347964|

Feature: SPX Order Tracking

  Scenario Outline: Check delivery status of SPX order
    Given I open the SPX tracking page
    When I input the tracking code "<trackingCode>"
    Then I should see the delivery status

    Examples:
      | trackingCode           |
#      | SPXVN052019958744      |
#      | SPXVN054087617424      |
#      | SPXVN056307062664      |
#      | SPXVN052721791834      |
#      | SPXVN054171514874      |
#      | SPXVN052333759634      |
#      | SPXVN057411939594      |
#      | SPXVN055706984254      |
#      | SPXVN052142075474      |
#      | SPXVN052638578734      |
#      | SPXVN050089858744      |
#      | SPXVN055881525894      |
#      | SPXVN057674197664      |
#      | SPXVN054689785134      |
#      | SPXVN050921526034      |
#      | SPXVN059475400864      |
#      | SPXVN055798510474      |
#      | SPXVN056256891024      |
#      | SPXVN059306900364      |
#      | SPXVN051903562594      |
#      | SPXVN051145560624      |
#      | SPXVN053792053834      |
#      | SPXVN056223330154      |
#      | SPXVN057749895794      |
#      | SPXVN052854241594      |
#      | SPXVN059893640274      |
#      | SPXVN053611904154      |
#      | SPXVN056868805744      |
#      | SPXVN057972666694      |
#      | SPXVN055780360554      |
#      | SPXVN051092736764      |
#      | SPXVN051054346774      |
#      | SPXVN055043271714      |
#      | SPXVN057963399734      |
#      | SPXVN051821287904      |
#      | SPXVN059295067984      |
#      | SPXVN057771222694      |
#      | SPXVN055471123934      |
#      | SPXVN051180683894      |
#      | SPXVN054324431924      |
#      | SPXVN050025450344      |
#      | SPXVN058574342474      |
      | SPXVN059137302834      |
      | SPXVN056971192254      |
      | SPXVN054924897624      |
      | SPXVN057396571994      |
      | SPXVN055921404084      |
      | SPXVN051180015184      |
      | SPXVN053883910844      |
      | SPXVN059428281314      |
      | SPXVN050279644404      |
      | SPXVN058118826824      |
      | SPXVN054890323654      |
      | SPXVN052132708584      |
      | SPXVN052019664794      |
      | SPXVN050806996914      |
      | SPXVN058145569024      |
      | SPXVN059543421684      |