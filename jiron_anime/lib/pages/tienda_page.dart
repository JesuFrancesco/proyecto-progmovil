// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';
import 'package:jiron_anime/pages/home/store/manga_controller.dart';
import 'package:jiron_anime/utils/extensions.dart';
import 'package:jiron_anime/widgets/bar_button.dart';
import 'package:jiron_anime/widgets/custom_padding.dart';
import 'package:jiron_anime/widgets/list_comic.dart';
import 'package:jiron_anime/widgets/slider_comic.dart';

MangaController mangacontrol = Get.put(MangaController());

class TiendaPage extends StatelessWidget {
  const TiendaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomPadding(
        child: SingleChildScrollView(
          child: Column(
            children: [
              kToolbarHeight.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: const [
                  Text(
                    "Jiron Anime",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 36),
                  ),
                  CircleAvatar(
                    child: Text("WA9"),
                  ),
                ],
              ),
              15.pv,
              Container(
                padding:
                    const EdgeInsets.symmetric(vertical: 0, horizontal: 10),
                decoration: BoxDecoration(
                  color: Colors.red, // Fondo rojo
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const BarButton(),
              ),
              15.pv,
              const SliderComic(),
              1.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: const [
                  Text(
                    "Novedades de la semana",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                  ),
                  Text(
                    "See all",
                    style: TextStyle(color: Colors.grey),
                  ),
                ],
              ),
              30.pv,
              SizedBox(
                height: 440,
                
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: mangacontrol.mangas
                        .toList()
                        .map((manga) => Row(
                          children: [
                            ListComic(manga: manga),
                            30.ph,
                          ],
                        ))
                        .toList().sublist(0,2)),
              ),
              SizedBox(
                height: 440,
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: mangacontrol.mangas
                        .toList()
                        .map((manga) => Row(
                          children: [
                            ListComic(manga: manga),
                            30.ph,
                          ],
                        ))
                        .toList().sublist(2,4)),
              ),
              SizedBox(
                height: 440,
                child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: mangacontrol.mangas
                        .toList()
                        .map((manga) => Row(
                          children: [
                            ListComic(manga: manga),
                            30.ph,
                          ],
                        ))
                        .toList().sublist(4,6)),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    "Tambien siguenos en ...",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
              15.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.sports_tennis),
                  SizedBox(width: 20),
                  Icon(Icons.youtube_searched_for),
                  SizedBox(width: 20),
                  Icon(Icons.person_4),
                ],
              ),
              15.pv,
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    "Jiron anime - Todos los derechos reservados",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
