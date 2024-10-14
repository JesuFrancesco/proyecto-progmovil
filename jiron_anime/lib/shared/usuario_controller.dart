import 'package:flutter/material.dart';
import 'package:jiron_anime/main.dart';
import 'package:jiron_anime/utils/component_default.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class CurrentUser {
  static User? user = supabase.auth.currentUser;
  static String? profileImageUrl = user?.userMetadata?['avatar_url'];
  static String? fullName = user?.userMetadata?['full_name'];
  static String? provider = user?.appMetadata['provider'];

  static Future<void> reloadData() async {
    user = supabase.auth.currentUser;
    profileImageUrl = user?.userMetadata?['avatar_url'];
    fullName = user?.userMetadata?['full_name'];
    provider = user?.appMetadata['provider'];
  }

  static CircleAvatar getAvatarIcon(
          {DefaultUserIconSize size = DefaultUserIconSize.small}) =>
      CircleAvatar(
          child: CurrentUser.profileImageUrl != null
              ? Image.network(
                  CurrentUser.profileImageUrl!,
                  fit: BoxFit.cover,
                  // width: 100,
                  // height: 100,
                )
              : DefaultUserIcon(
                  size: size,
                ));

  static ClipOval getClipOvalAvatar(
          [DefaultUserIconSize size = DefaultUserIconSize.medium]) =>
      ClipOval(
          child: CurrentUser.profileImageUrl != null
              ? Image.network(
                  CurrentUser.profileImageUrl!,
                  width: 100,
                  height: 100,
                  fit: BoxFit.cover,
                )
              : DefaultUserIcon(
                  size: size,
                ));
}
