import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:jiron_anime/controllers/rating_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/models/product.dart';
import 'package:jiron_anime/models/product_rating.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/service/file_upload_service.dart';
import 'package:jiron_anime/shared/small_circular_indicator.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class ReseniaButton extends StatelessWidget {
  final Product producto;
  final RatingController ratingsController;

  const ReseniaButton(
      {super.key, required this.producto, required this.ratingsController});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => showReseniaBottomSheet(context),
      child: Row(children: [
        const Icon(Icons.chat),
        15.ph,
        const Text("Dejar reseña"),
      ]),
    );
  }

  Future<void> showReseniaBottomSheet(BuildContext context) {
    final submitLoading = false.obs;
    final rating = 0.obs;
    final selectedImages = <File>[].obs;

    final TextEditingController comentarioController = TextEditingController();
    final ImagePicker imagePicker = ImagePicker();

    Future<void> pickImages() async {
      final pickedFiles = await imagePicker.pickMultiImage();
      selectedImages.addAll(pickedFiles.map((file) => File(file.path)));
    }

    return showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (BuildContext context) {
        return Padding(
          padding: EdgeInsets.only(
            bottom: MediaQuery.of(context).viewInsets.bottom,
          ),
          child: SizedBox(
            height: 400,
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Obx(
                  () => submitLoading.value
                      ? const SmallCircularIndicator()
                      : Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: <Widget>[
                            Text(
                              'Deja tu reseña',
                              style: Theme.of(context).textTheme.titleMedium,
                              textAlign: TextAlign.center,
                            ),
                            20.pv,
                            Text(
                              'Selecciona una calificación',
                              style: Theme.of(context).textTheme.bodyLarge,
                            ),
                            10.pv,
                            getStarRatingRowWidget(rating),
                            20.pv,
                            TextField(
                              controller: comentarioController,
                              minLines: 1,
                              maxLines: 3,
                              decoration: const InputDecoration(
                                labelText: 'Comentario',
                                border: OutlineInputBorder(),
                                contentPadding: EdgeInsets.symmetric(
                                  vertical: 10,
                                  horizontal: 15,
                                ),
                              ),
                            ),
                            20.pv,
                            ElevatedButton.icon(
                              onPressed: pickImages,
                              icon: const Icon(Icons.image),
                              label: const Text("Seleccionar imágenes"),
                            ),
                            10.pv,
                            Wrap(
                              spacing: 8,
                              runSpacing: 8,
                              children: selectedImages.map((image) {
                                return Stack(
                                  alignment: Alignment.topRight,
                                  children: [
                                    ClipRRect(
                                      borderRadius: BorderRadius.circular(10),
                                      child: Image.file(
                                        image,
                                        height: 100,
                                        width: 100,
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                    GestureDetector(
                                      onTap: () => selectedImages.remove(image),
                                      child: const Icon(
                                        Icons.close,
                                        color: Colors.red,
                                      ),
                                    ),
                                  ],
                                );
                              }).toList(),
                            ),
                            20.pv,
                            ElevatedButton(
                              child: const Text('Enviar'),
                              onPressed: () async {
                                if (rating.value == 0 ||
                                    comentarioController.text.isEmpty) {
                                  Get.dialog(const AlertDialog(
                                    title: Text("Alerta"),
                                    content: Text(
                                        "Debes agregar una calificación y un comentario para enviar tu reseña."),
                                  ));
                                  return;
                                }
                                submitLoading.value = true;

                                ProductRating resenia;

                                if (selectedImages.isNotEmpty) {
                                  final storageService =
                                      FileUploadService(context);

                                  final imagesUploaded = await storageService
                                      .uploadMultipleFiles(selectedImages);

                                  resenia = ProductRating(
                                      clientId: AuthService.getClientId(),
                                      productId: producto.id!,
                                      score: rating.value,
                                      text: comentarioController.text,
                                      ratingAttachments: List.from(
                                          imagesUploaded.map((e) =>
                                              RatingAttachment(
                                                  imageUrl: e.publicUrl))));
                                } else {
                                  resenia = ProductRating(
                                    clientId: AuthService.getClientId(),
                                    productId: producto.id!,
                                    score: rating.value,
                                    text: comentarioController.text,
                                  );
                                }

                                await ratingsController
                                    .crearRatingDeProducto(resenia);

                                comentarioController.clear();
                                selectedImages.clear();

                                submitLoading.value = false;
                                Get.back();
                              },
                            ),
                          ],
                        ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Row getStarRatingRowWidget(RxInt rating) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(5, (index) {
        return IconButton(
          onPressed: () => rating.value = index + 1,
          icon: Icon(
            Icons.star,
            color: rating.value > index ? Colors.yellow : Colors.grey,
          ),
        );
      }),
    );
  }
}
