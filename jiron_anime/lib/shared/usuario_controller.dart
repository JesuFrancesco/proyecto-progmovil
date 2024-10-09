import 'package:flutter/material.dart';
import 'package:jiron_anime/main.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class CurrentUser {
  static User? user = supabase.auth.currentUser;
  static String? profileImageUrl = user?.userMetadata?['avatar_url'];
  static String? fullName = user?.userMetadata?['full_name'];
  static String? provider = user?.appMetadata['provider'];

  static CircleAvatar getCircleAvatar() => CircleAvatar(
        child: CurrentUser.profileImageUrl != null
            ? Image.network(
                CurrentUser.profileImageUrl!,
                width: 100,
                height: 100,
                fit: BoxFit.cover,
              )
            : Container(
                width: 100,
                height: 100,
                color: Colors.grey[300],
                child: Icon(
                  Icons.person,
                  size: 60,
                  color: Colors.grey[600],
                ),
              ),
      );

  static ClipOval getClipOvalPFP() => ClipOval(
        child: CurrentUser.profileImageUrl != null
            ? Image.network(
                CurrentUser.profileImageUrl!,
                width: 100,
                height: 100,
                fit: BoxFit.cover,
              )
            : Container(
                width: 100,
                height: 100,
                color: Colors.grey[300],
                child: Icon(Icons.person, size: 60, color: Colors.grey[600]),
              ),
      );
}
