import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

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

  Future<void> addProductToCart(int cartId, int productId, int amount) async {
    final db = await database;
    await db.insert('cart_items', {
      'cart_id': cartId,
      'product_id': productId,
      'amount': amount,
      'added_at': DateTime.now().toIso8601String(),
    }, conflictAlgorithm: ConflictAlgorithm.replace);
  }

  // Otros métodos como eliminar, obtener productos, etc.
}
