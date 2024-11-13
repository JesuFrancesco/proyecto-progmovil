import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:jiron_anime/shared/custom_appbar.dart';
import 'package:jiron_anime/shared/custom_layout.dart';

class CreateMarketWidget extends StatefulWidget {
  @override
  _CreateMarketWidgetState createState() => _CreateMarketWidgetState();
}

class _CreateMarketWidgetState extends State<CreateMarketWidget> {
  final _formKey = GlobalKey<FormState>();

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _contactEmailController = TextEditingController();
  final TextEditingController _contactPhoneController = TextEditingController();
  final TextEditingController _profileIdController = TextEditingController();
  File? _selectedLogo;

  final ImagePicker _picker = ImagePicker();

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // Gather form data
      final String name = _nameController.text;
      final String? logoUrl = _selectedLogo != null ? _selectedLogo!.path : null;
      final String contactEmail = _contactEmailController.text;
      final String contactPhone = _contactPhoneController.text;
      final String profileId = _profileIdController.text;

      // Handle submission logic, e.g., save to database or API call
      print("Market Created:");
      print("Name: $name");
      print("Logo URL: $logoUrl");
      print("Contact Email: $contactEmail");
      print("Contact Phone: $contactPhone");
      print("Profile ID: $profileId");

      // Show success message or navigate to another page
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Market created successfully!")),
      );
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
      body: CustomLayout(
          
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                CustomAppbar(
                  title: "Crear Mercado",
                ),
                
                SizedBox(height: 16),
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
                              fit: BoxFit.cover,
                            ),
                          )
                        : Center(
                            child: Icon(
                              Icons.image,
                              size: 60,
                              color: Colors.black54,
                            ),
                          ),
                  ),
                ),
                SizedBox(height: 16),
                TextFormField(
                  controller: _nameController,
                  decoration: InputDecoration(labelText: 'Nombre del mercado'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Ingrese al menos un nombre';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 16),
                TextFormField(
                  controller: _contactEmailController,
                  decoration: InputDecoration(labelText: 'Correo electronico'),
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Ingrese al menos un correo';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 16),
                TextFormField(
                  controller: _contactPhoneController,
                  decoration: InputDecoration(labelText: 'Telefono'),
                  keyboardType: TextInputType.phone,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Ingrese al menos un telefono';
                    }
                    return null;
                  },
                ),
                
                SizedBox(height: 24),
                Center(
                  child: ElevatedButton(
                    onPressed: _submitForm,
                    child: Text('Crear'),
                  ),
                ),
              ],
            ),
          ),
        
      ),
    );
  }
}
