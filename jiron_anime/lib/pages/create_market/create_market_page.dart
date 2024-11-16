import 'dart:io';

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:image_picker/image_picker.dart';
import 'package:jiron_anime/controllers/market_controller.dart';
import 'package:jiron_anime/models/models_library.dart';
import 'package:jiron_anime/service/auth_service.dart';
import 'package:jiron_anime/service/file_upload_service.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';
import 'package:jiron_anime/utils/sizedbox_entension.dart';

class CreateMarketPage extends StatefulWidget {
  const CreateMarketPage({super.key});

  @override
  State<CreateMarketPage> createState() => _CreateMarketPageState();
}

class _CreateMarketPageState extends State<CreateMarketPage> {
  final _llaveFormulario = GlobalKey<FormState>();

  final marketController = Get.put(MarketController());

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _contactEmailController = TextEditingController();
  final TextEditingController _contactPhoneController = TextEditingController();
  File? _selectedLogo;

  final _picker = ImagePicker();

  void _submitForm() async {
    if (_llaveFormulario.currentState!.validate()) {
      final service = FileUploadService(context);

      final uploadedFile = await service.uploadSingleFile(
        _selectedLogo!,
      );

      final logoUrl = uploadedFile!.publicUrl;
      final name = _nameController.text;
      final contactEmail = _contactEmailController.text;
      final contactPhone = _contactPhoneController.text;

      await marketController.crearNuevoMercado(Market(
          name: name,
          contactEmail: contactEmail,
          contactPhone: contactPhone,
          logoUrl: logoUrl,
          profileId: AuthService.getProfileId()));

      ScaffoldMessenger.of(context.mounted ? context : context).showSnackBar(
        const SnackBar(content: Text("¡Tu mercado fue creado exitosamente!")),
      );

      Get.offAllNamed("/my-markets");
    }
  }

  Future<void> _pickLogo() async {
    final pickedFile = await _picker.pickImage(source: ImageSource.gallery);

    if (pickedFile != null) {
      setState(() {
        _selectedLogo = File(pickedFile.path);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: CustomLayout(
        child: CustomScrollView(
          slivers: [
            SliverFillRemaining(
              child: Form(
                key: _llaveFormulario,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const CustomAppbar(
                      title: "Crear Mercado",
                    ),
                    30.pv,
                    getDetailsFormWidget(context),
                    30.pv,
                    getImageSelectorWidget(context),
                    30.pv,
                    Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Center(
                        child: ElevatedButton(
                          onPressed: _submitForm,
                          child: const Text('Crear'),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Column getDetailsFormWidget(BuildContext context) {
    return Column(
      children: [
        Text(
          "Completa tu información",
          style: Theme.of(context).textTheme.titleMedium,
        ),
        TextFormField(
          controller: _nameController,
          decoration: const InputDecoration(labelText: 'Nombre del mercado'),
          validator: (value) {
            if (value == null || value.isEmpty) {
              return 'Ingrese al menos un nombre';
            }
            return null;
          },
        ),
        20.pv,
        TextFormField(
          controller: _contactEmailController,
          decoration: const InputDecoration(labelText: 'Correo electronico'),
          keyboardType: TextInputType.emailAddress,
          validator: (value) {
            if (value == null || value.isEmpty) {
              return 'Ingrese al menos un correo';
            }
            return null;
          },
        ),
        16.pv,
        TextFormField(
          controller: _contactPhoneController,
          decoration: const InputDecoration(labelText: 'Telefono'),
          keyboardType: TextInputType.phone,
          validator: (value) {
            if (value == null || value.isEmpty) {
              return 'Ingrese al menos un telefono';
            }
            return null;
          },
        ),
      ],
    );
  }

  Column getImageSelectorWidget(BuildContext context) {
    return Column(
      children: [
        Text(
          "Selecciona tu logo",
          style: Theme.of(context).textTheme.titleMedium,
        ),
        GestureDetector(
          onTap: _pickLogo,
          child: Container(
            height: 150,
            width: double.infinity,
            decoration: BoxDecoration(
              color: Colors.grey[200],
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: Colors.black),
            ),
            child: _selectedLogo != null
                ? ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.file(
                      _selectedLogo!,
                      fit: BoxFit.contain,
                    ),
                  )
                : const Center(
                    child: Icon(
                      Icons.image,
                      size: 60,
                      color: Colors.black54,
                    ),
                  ),
          ),
        ),
      ],
    );
  }
}
