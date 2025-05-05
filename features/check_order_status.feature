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
#      | SPXVN055403962294    |
#      | SPXVN058666082884    |
#      | SPXVN054439054454    |
#      | SPXVN050700257884    |
#      | SPXVN059789930434    |
#      | SPXVN056938439504    |
#      | SPXVN055928274984    |
#      | SPXVN055032053534    |
#      | SPXVN055528149514    |
#      | SPXVN057427827624    |
#      | SPXVN056534494224    |
#      | SPXVN059346210214    |
#      | SPXVN059138368944    |
#      | SPXVN056263200224    |
#      | SPXVN057556769664    |
#      | SPXVN052668644834    |
#      | SPXVN058685858004    |
#      | SPXVN052984412544    |
#      | SPXVN054575817114    |
#      | SPXVN052803720204    |
#      | SPXVN058672893474    |
#      | SPXVN057030119274    |
#      | SPXVN051079134024    |
#      | SPXVN051374250184    |
#      | SPXVN054605690954    |
#      | SPXVN052827857384    |
#      | SPXVN052019958744    |
#      | SPXVN054087617424    |
#      | SPXVN056307062664    |
#      | SPXVN052721791834    |
#      | SPXVN054171514874    |
#      | SPXVN052333759634    |
#      | SPXVN057411939594    |
#      | SPXVN055706984254    |
#      | SPXVN052142075474    |
#      | SPXVN052638578734    |
#      | SPXVN050089858744    |
#      | SPXVN055881525894    |
#      | SPXVN057674197664    |
#      | SPXVN054689785134    |
#      | SPXVN050921526034    |
#      | SPXVN059475400864    |
#      | SPXVN056256891024    |
#      | SPXVN051145560624    |
#      | SPXVN053792053834    |
#      | SPXVN056223330154    |
#      | SPXVN057749895794    |
#      | SPXVN053611904154    |
#      | SPXVN056868805744    |
#      | SPXVN057972666694    |
#      | SPXVN055780360554    |
#      | SPXVN051092736764    |
#      | SPXVN051054346774    |
#      | SPXVN055043271714    |
#      | SPXVN051821287904    |
#      | SPXVN059295067984    |
#      | SPXVN057771222694    |
#      | SPXVN051180683894    |
#      | SPXVN054324431924    |
#      | SPXVN058574342474    |
#      | SPXVN059137302834    |
#      | SPXVN056971192254    |
#      | SPXVN054924897624    |
#      | SPXVN057396571994    |
#      | SPXVN055921404084    |
#      | SPXVN051180015184    |
#      | SPXVN059428281314    |
#      | SPXVN050279644404    |
#      | SPXVN058118826824    |
#      | SPXVN052019664794    |
#      | SPXVN050806996914    |
#      | SPXVN053812751584    |
#      | SPXVN058733645784    |
#      | SPXVN056102354574    |
#      | SPXVN056073118704    |
#      | SPXVN058367440614    |
#      | SPXVN058147905314    |
#      | SPXVN056454740584    |
#      | SPXVN053178360404    |
#      | SPXVN057885170754    |
#      | SPXVN055124633974    |
#      | SPXVN058002173814    |
#      | SPXVN052045327404    |
#      | SPXVN050441461974    |
#      | SPXVN057505672744    |
#      | SPXVN051464282094    |
#      | SPXVN056157685034    |
#      | SPXVN053144781784    |
#      | SPXVN055148605334    |
#      | SPXVN050411306044    |
#      | SPXVN055506757634    |
#      | SPXVN056243052494    |
#      | SPXVN057023242234    |
#      | SPXVN053369193824    |
#      | SPXVN055758279674    |
#      | SPXVN056770085274    |
#      | SPXVN051412919524    |
#      | SPXVN052375559944    |
#      | SPXVN056891503654    |
#      | SPXVN051856522124    |
#      | SPXVN050918514814    |
#      | SPXVN050211879294    |
#      | SPXVN052728737914    |
#      | SPXVN050400279734    |
#      | SPXVN059546766164    |
#      | SPXVN057422609164    |
#      | SPXVN051211196044    |
#      | SPXVN056953582364    |
#      | SPXVN053169329654    |
#      | SPXVN056897944974    |
#      | SPXVN051852225564    |
#      | SPXVN053656119554    |
#      | SPXVN051353372954    |
#      | SPXVN053448103054    |
#      | SPXVN055883122034    |
#      | SPXVN052649812764    |
#      | SPXVN050379743314    |
#      | SPXVN050736149304    |
#      | SPXVN052180736804    |
#      | SPXVN051681739654    |
      | SPXVN054572539625    |
      | SPXVN055783996775    |
      | SPXVN053012138475    |
      | SPXVN051465094015    |
      | SPXVN052448614915    |
      | SPXVN058176910005    |
#      | SPXVN059639631785    |
#      | SPXVN051700999545    |
#      | SPXVN053432070005    |
#      | SPXVN054792674515    |
#      | SPXVN055926202405    |
#      | SPXVN054330592015    |
#      | SPXVN051758874595    |
#      | SPXVN055474933665    |