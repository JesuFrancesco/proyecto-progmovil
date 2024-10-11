import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

Future<Database> initializeDatabase() async {
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
