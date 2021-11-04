import 'package:flutter/material.dart';
import 'package:profile_flutter/constants.dart';
import 'package:profile_flutter/home/components/card.dart';
import 'package:profile_flutter/home/components/header.dart';
import 'package:profile_flutter/home/components/statistics.dart';
import 'package:profile_flutter/home/components/user_info.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  static const String routeName = '/home';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kPrimaryColor,
      appBar: AppBar(
        backgroundColor: kPrimaryColor,
        elevation: 0.0,
        actions: [
          Container(
            padding: const EdgeInsets.all(kLargePadding),
            child: GestureDetector(
              onTap: () {},
              child: const Icon(
                Icons.menu,
                color: Colors.white,
                size: 20.0,
              ),
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const UserInfoView(
                name: 'Alan Montgomery',
                role: 'Mobile Team Lead',
              ),
              const SizedBox(height: 16),
              const StatisticsView(),
              const HeaderView(),
              const CardView(
                date: 'Mar 30',
                commentCount: 13,
                favoriteCount: 49,
              ),
              _divider(),
              const CardView(
                date: 'Mar 28',
                commentCount: 1,
                favoriteCount: 9,
              ),
              _divider(),
              const CardView(
                date: 'Mar 25',
                commentCount: 119,
                favoriteCount: 483,
              ),
              _divider(),
              const CardView(
                date: 'Mar 23',
                commentCount: 27,
                favoriteCount: 78,
              ),
            ],
          ),
        ),
      ),
    );
  }

  Divider _divider() {
    return const Divider(
      color: Color(0xFFDBDBDB),
      thickness: 1.0,
      height: 1.0,
    );
  }
}
