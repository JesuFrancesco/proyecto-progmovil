import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/wishlist_service.dart';

class WishlistController extends GetxController {
  WishlistService service = WishlistService();

  final wishlist = Wishlist().obs;

  Future<void> obtenerMiWishlist() async {
    wishlist.value = await service.fetchMyWishlist();
  }

  Future<void> agregarItemAWishlist(int productId) async {
    await service.agregarItemAWishlist(productId);
  }

  Future<void> removerItemDeWishlist(int productId) async {
    await service.removeItemFromWishlist(productId);
  }
}