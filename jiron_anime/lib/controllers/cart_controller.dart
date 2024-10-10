// import 'package:get/get.dart';
// import 'product.dart';

// class ShoppingCartController extends GetxController {
//   // Lista de productos en el carrito
//   var cartItems = <Product>[].obs;

//   @override
//   void onInit() {
//     super.onInit();
//     // Inicializando con productos estáticos
//     cartItems.addAll([
//       Product(
//         name: "Sousou no Frieren",
//         price: 41.00,
//         quantity: 2,
//         imageUrl: "https://ramenparados.com/wp-content/uploads/2023/12/frieren-12-jp.jpg",
//       ),
//       Product(
//         name: "Kaguya-sama: Love Is War",
//         price: 35.00,
//         quantity: 1,
//         imageUrl: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/c/cc/Volumen1.png/revision/latest?cb=20230625165459&path-prefix=es",
//       ),
//       Product(
//         name: "Chainsaw Man",
//         price: 30.00,
//         quantity: 1,
//         imageUrl: "https://static-ppimages.freetls.fastly.net/product/9781974709939.jpg?canvas=600,600&fit=bounds&height=600&mode=max&width=600&404=default.jpg",
//       ),
//     ]);
//   }

//   // Calcular la cantidad total de productos
//   int get totalProducts => cartItems.fold(0, (sum, item) => sum + item.quantity);

//   // Calcular el total del monto
//   double get totalAmount => cartItems.fold(0, (sum, item) => sum + (item.price * item.quantity));
// }
