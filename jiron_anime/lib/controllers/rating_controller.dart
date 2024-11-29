import 'package:get/get.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/rating_service.dart';
import 'package:jiron_anime/shared/auth_controller.dart';

class RatingController extends GetxController {
  final service = RatingService();

  final ratings = <ProductRating>[].obs;

  Future<void> obtenerRatingsDeProducto(int productId) async {
    ratings.value = await service.fetchProductRatings(productId);
  }

  Future<void> crearRatingDeProducto(ProductRating resenia) async {
    await service.postProductReview(resenia);
    final successfulRating =
        resenia.copyWith(client: Client(username: AuthController.fullName));

    ratings.add(successfulRating);
  }
}
