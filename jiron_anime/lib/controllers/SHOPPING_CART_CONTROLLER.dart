import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/tienda_page.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart' show join;

class ShoppingCartController {
  Database? _database;

  Future<Database> get database async {
    if (_database != null) return _database!;

    _database = await _initDB();
    return _database!;
  }

  Future<Database> _initDB() async {
    String path = join(await getDatabasesPath(), 'shopping_cart.db');
    return openDatabase(
      path,
      onCreate: (db, version) async {
        await db.execute('''
          CREATE TABLE shopping_carts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER
          );
        ''');
        await db.execute('''
          CREATE TABLE cart_items (
            cart_id INTEGER,
            product_id INTEGER,
            amount INTEGER,
            added_at TEXT,
            PRIMARY KEY (cart_id, product_id),
            FOREIGN KEY (cart_id) REFERENCES shopping_carts(id),
            FOREIGN KEY (product_id) REFERENCES products(id)
          );
        ''');
      },
      version: 1,
    );
  }

  Future<ShoppingCart> obtenerCarrito(int cartId) async {
    final db = await database;
    List<Map<String, Object?>> resultado = await db.query('cart_items',
        columns: ["product_id", "amount"], where: 'cart_id = $cartId');

    final itemsCarrito = resultado.map((e) {
      final p = productoController.productos
          .firstWhere((element) => element.id == e["product_id"]);

      return CartItem(
          product: p,
          productId: e["product_id"] as int,
          amount: e["amount"] as int);
    });

    return ShoppingCart(cartItems: itemsCarrito.toList());
  }

  Future<void> addProductToCart(int cartId, int productId, int amount) async {
    final db = await database;
    await db.insert(
        'cart_items',
        {
          'cart_id': cartId,
          'product_id': productId,
          'amount': amount,
          'added_at': DateTime.now().toIso8601String(),
        },
        conflictAlgorithm: ConflictAlgorithm.replace);

    final carrito = await obtenerCarrito(cartId);
    // ignore: avoid_print
    print("################ PEPEEE");
    // ignore: avoid_print
    print(carrito.toJson());
  }

  Future<void> deleteProductFromCart(int cartId, int productId) async {
    final db = await database;
    await db
        .delete('cart_items', where: "product_id = ?", whereArgs: [productId]);

    final carrito = await obtenerCarrito(cartId);
    // ignore: avoid_print
    print("################ PEPEEE");
    // ignore: avoid_print
    print(carrito.toJson());
  }
}
