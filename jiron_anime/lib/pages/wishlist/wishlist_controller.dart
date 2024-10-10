import 'package:get/get.dart';
import 'wishlist_product.dart'; // Asegúrate de tener una clase Product en su propio archivo

class WishlistController extends GetxController {
  // Lista observable para almacenar los productos en la lista de deseos
  var wishlistItems = <Product>[].obs;

  // Constructor
  WishlistController() {
    // Inicializar algunos productos en la lista de deseos
    final product1 = Product(
      id: 1,
      name: "Sousou no Frieren",
      price: 41.00,
      imageUrl: "https://ramenparados.com/wp-content/uploads/2023/12/frieren-12-jp.jpg",
      description: 'Después de derrotar al Rey Demonio la paz regresó para el mundo gracias a los esfuerzos de cuatro Héroes: Himmel, el valiente paladín, el sacerdote Heiter, el guerrero enano Eisen y la heroína principal de esta historia: la hechicera Frieren.',
    );

    final product2 = Product(
      id: 2,
      name: "Kaguya-sama: Love Is War",
      price: 35.00,
      imageUrl: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/c/cc/Volumen1.png/revision/latest?cb=20230625165459&path-prefix=es",
      description: 'In the senior high school division of Shuchiin Academy, student council president Miyuki Shirogane and vice president Kaguya Shinomiya appear to be a perfect match.',
    );

    // Agregar productos a la lista de deseos
    wishlistItems.addAll([product1, product2]);
  }

  // Método para agregar un producto a la lista de deseos
  void addToWishlist(Product product) {
    if (!wishlistItems.contains(product)) {
      wishlistItems.add(product);
    }
  }

  // Método para eliminar un producto de la lista de deseos
  void removeFromWishlist(int productId) {
    wishlistItems.removeWhere((item) => item.id == productId);
  }

  // Obtener la cantidad total de productos en la lista de deseos
  int get totalProducts => wishlistItems.length;
}
