import 'package:async/async.dart';
import 'package:flutter/material.dart';
import 'package:jiron_anime/controllers/pregunta_controller.dart';
import 'package:jiron_anime/controllers/rating_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/pages/home/store/product/widget/ui/add_to_cart_buttons.dart';
import 'package:jiron_anime/pages/home/store/product/widget/ui/product_slider.dart';
import 'package:jiron_anime/pages/home/store/product/widget/ui/question_button.dart';
import 'package:jiron_anime/pages/home/store/product/widget/ui/resenia_button.dart';
import 'package:jiron_anime/pages/home/store/product/widget/ui/wishlist_button.dart';
import 'package:jiron_anime/shared/error_placeholder.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class ProductoInfo extends StatefulWidget {
  final Product producto;
  final PreguntaController preguntasController;
  final RatingController ratingsController;

  const ProductoInfo({
    super.key,
    required this.producto,
    required this.preguntasController,
    required this.ratingsController,
  });

  @override
  State<ProductoInfo> createState() => _ProductoInfoState();
}

class _ProductoInfoState extends State<ProductoInfo> {
  final wishlistMemoizer = AsyncMemoizer();
  final cartMemoizer = AsyncMemoizer();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(widget.producto.name!,
            style: Theme.of(context).textTheme.headlineLarge),
        Text(
            widget.producto.market != null
                ? widget.producto.market!.name!
                : "NA",
            style: Theme.of(context).textTheme.headlineMedium),
        Text("S/. ${widget.producto.price.toString()}"),
        15.pv,
        getImagePreview(),
        15.pv,
        Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            AddToCartWidget(
              producto: widget.producto,
              cartMemoizer: cartMemoizer,
            ),
            15.pv,
            WishlistButton(
              producto: widget.producto,
              wishlistMemoizer: wishlistMemoizer,
            ),
            15.pv,
            ReseniaButton(
              producto: widget.producto,
              ratingsController: widget.ratingsController,
            ),
            15.pv,
            PreguntaButton(
              producto: widget.producto,
              preguntaController: widget.preguntasController,
            )
          ],
        ),
      ],
    );
  }

  Widget getImagePreview() {
    return (widget.producto.productAttachments != null &&
            widget.producto.productAttachments!.isNotEmpty)
        ? ImageSlider(
            producto: widget.producto,
          )
        : const ImageErrorPlaceholder();
  }
}
