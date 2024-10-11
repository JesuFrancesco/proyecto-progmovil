import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/tags_controller.dart';
import 'package:jiron_anime/pages/home/search/busqueda_page.dart';
import 'package:jiron_anime/theme/colors.dart';

class TagsBarButton extends StatefulWidget {
  final VoidCallback onCatalogPressed;
  final VoidCallback onShonenPressed;
  final VoidCallback onSeinenPressed;

  const TagsBarButton({
    super.key,
    required this.onCatalogPressed,
    required this.onShonenPressed,
    required this.onSeinenPressed,
  });

  @override
  State<TagsBarButton> createState() => _TagsBarButtonState();
}

class _TagsBarButtonState extends State<TagsBarButton> {
  TagController controller = TagController();

  Future<void> cargarCarrito() async {
    await controller.obtenerTags();
  }

  @override
  void initState() {
    super.initState();
    cargarCarrito();
  }

  int selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Expanded(
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      selectedIndex = 0;
                    });
                    widget.onCatalogPressed();
                  },
                  style: TextButton.styleFrom(
                    backgroundColor: selectedIndex == 0
                        ? AppColors.primaryColor
                        : Colors.transparent,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                      side: const BorderSide(color: Colors.transparent),
                    ),
                  ),
                  child: const Text("Catalogo completo"),
                ),
                const SizedBox(width: 5),
                TextButton(
                  onPressed: () {
                    setState(() {
                      selectedIndex = 1;
                    });
                    widget.onShonenPressed();
                  },
                  style: TextButton.styleFrom(
                    backgroundColor: selectedIndex == 1
                        ? AppColors.primaryColor
                        : Colors.transparent,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                      side: const BorderSide(color: Colors.transparent),
                    ),
                  ),
                  child: const Text("Shonen"),
                ),
                const SizedBox(width: 5),
                TextButton(
                  onPressed: () {
                    setState(() {
                      selectedIndex = 2;
                    });
                    widget.onSeinenPressed();
                  },
                  style: TextButton.styleFrom(
                    backgroundColor: selectedIndex == 2
                        ? AppColors.primaryColor
                        : Colors.transparent,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                      side: const BorderSide(color: Colors.transparent),
                    ),
                  ),
                  child: const Text("Seinen"),
                ),
                const SizedBox(width: 5),
              ],
            ),
          ),
        ),
        TextButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => const BusquedaPage(),
              ),
            );
          },
          style: TextButton.styleFrom(
            backgroundColor: AppColors.primaryColor,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(15),
              side: const BorderSide(color: Colors.transparent),
            ),
          ),
          child: const Icon(Icons.search, color: Colors.white),
        ),
      ],
    );
  }
}
