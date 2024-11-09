import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:jiron_anime/pages/signin/signin_page.dart';

import '../../main.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final user = supabase.auth.currentUser;
    final profileImageUrl = user?.userMetadata?['avatar_url'];
    final fullName = user?.userMetadata?['full_name'];
    return Scaffold(
      appBar: AppBar(
        title: const Text('Perfil Demo'),
        actions: [
          TextButton(
            onPressed: () async {
              await supabase.auth.signOut();
              if (context.mounted) {
                Get.offAll(
                  MaterialPageRoute(builder: (context) => const SignInPage()),
                );
              }
            },
            child: const Text('Cerrar sesión'),
          )
        ],
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (profileImageUrl != null)
              ClipOval(
                child: Image.network(
                  profileImageUrl,
                  width: 100,
                  height: 100,
                  fit: BoxFit.cover,
                ),
              ),
            const SizedBox(height: 16),
            Text(
              fullName ?? '',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 32),
          ],
        ),
      ),
    );
  }
}
