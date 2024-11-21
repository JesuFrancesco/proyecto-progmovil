import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:get/get.dart';
import 'package:latlong2/latlong.dart';
import 'package:location/location.dart';

class LocationController extends GetxController {
  final locacionGPS = Location();
  final isLoading = false.obs;

  final latitud = (-12.083979).obs;
  final longitud = (-76.971385).obs;
  final focused = false.obs;

  final Key mapKey = UniqueKey();

  Future<void> checkLocationPermission() async {
    try {
      isLoading.value = true;
      final hasPermission = await locacionGPS.hasPermission();
      bool tienePermisoGPS;

      if (hasPermission == PermissionStatus.denied) {
        final resultado = await locacionGPS.requestPermission();
        tienePermisoGPS = resultado == PermissionStatus.granted;
      } else {
        tienePermisoGPS = hasPermission == PermissionStatus.granted;
      }

      if (tienePermisoGPS) {
        await obtenerUbicacion();
      }
    } catch (e) {
      // handle errors
    } finally {
      isLoading.value = false;
    }
  }

  Future<void> obtenerUbicacion() async {
    try {
      final currentLocationData = await locacionGPS.getLocation();

      latitud.value = currentLocationData.latitude!;
      longitud.value = currentLocationData.longitude!;
      // print('++++++++++++++++++++++++++++');
      // print(latitud.value);
      // print(longitud.value);
    } catch (e) {
      // print("error al obtener la ubiación $e");
    }
  }

  Future<void> moverMapController(MapController mapController) async {
    try {
      mapController.move(LatLng(latitud.value, longitud.value), 5.0);
    } catch (e) {
      // print("error al mover el mapController $e");
    }
  }

  @override
  Future<void> onInit() async {
    super.onInit();
    await checkLocationPermission();
  }
}
