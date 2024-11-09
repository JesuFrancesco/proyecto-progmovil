import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/controllers/tags_controller.dart';
import 'package:jiron_anime/models/tag.dart';
import 'package:jiron_anime/pages/home/search/busqueda_page.dart';
import 'package:jiron_anime/shared/custom_padding.dart';
import 'package:jiron_anime/theme/colors.dart';

class TagsBarButton extends StatefulWidget {
  final Function onTagPressed;

  const TagsBarButton({
    super.key,
    required this.onTagPressed,
  });

  @override
  State<TagsBarButton> createState() => _TagsBarButtonState();
}

class _TagsBarButtonState extends State<TagsBarButton> {
  TagController controller = TagController();

  Future<void> cargarTags() async {
    await controller.obtenerTags();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 0, horizontal: 10),
      decoration: BoxDecoration(
        color: AppColors.primaryColor,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          FutureBuilder(
              future: cargarTags(),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return const Expanded(
                      child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        TextButton(
                          onPressed: null,
                          child: Text(
                            "Cargando...",
                            style: TextStyle(color: Colors.white),
                          ),
                        )
                      ],
                    ),
                  ));
                } else if (snapshot.hasError) {
                  return Center(child: Text('Error: ${snapshot.error}'));
                } else {
                  return Expanded(
                      child: SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        TextButton(
                          onPressed: () {
                            // setState(() {
                            //   selectedIndex = 0;
                            // });
                            widget.onTagPressed(<Tag>[]);
                          },
                          style: TextButton.styleFrom(
                            // backgroundColor: selectedIndex == 0
                            //     ? AppColors.primaryColor
                            //     : Colors.transparent,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(horizontal: 20),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(20),
                              side: const BorderSide(color: Colors.transparent),
                            ),
                          ),
                          child: const Text("Catálogo completo"),
                        ),
                        ...controller.tags
                            .map((tag) => {
                                  TextButton(
                                    onPressed: () {
                                      // setState(() {
                                      //   selectedIndex = 0;
                                      // });
                                      widget.onTagPressed([tag]);
                                    },
                                    style: TextButton.styleFrom(
                                      // backgroundColor: selectedIndex == 0
                                      //     ? AppColors.primaryColor
                                      //     : Colors.transparent,
                                      foregroundColor: Colors.white,
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 20),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(20),
                                        side: const BorderSide(
                                            color: Colors.transparent),
                                      ),
                                    ),
                                    child: Text(tag.name!),
                                  ),
                                  const SizedBox(width: 5),
                                })
                            .expand((set) => set)
                      ],
                    ),
                  ));
                }
              }),
          TextButton(
            onPressed: () {
              Get.to(
                const CustomLayout(child: BusquedaPage()),
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
      ),
    );
  }
}
