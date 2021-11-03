import 'package:flutter/material.dart';
import 'package:profile_flutter/components/avatar.dart';
import 'package:profile_flutter/constants.dart';

class CardView extends StatelessWidget {
  const CardView({
    Key? key,
    required this.date,
    required this.commentCount,
    required this.favoriteCount,
  }) : super(key: key);

  final String date;
  final int commentCount, favoriteCount;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(0),
      decoration: const BoxDecoration(color: Colors.white),
      padding: const EdgeInsets.symmetric(
        horizontal: 16.0,
        vertical: 20.0,
      ),
      child: Row(
        children: [
          const Avatar(
            avatarURL: 'assets/images/avatar.jpg',
            size: 50.0,
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      date,
                      style: const TextStyle(
                        color: Color(0xFF959595),
                        fontSize: 15,
                        fontWeight: FontWeight.normal,
                      ),
                    ),
                    const Text(
                      '@93alan',
                      style: TextStyle(
                        color: Color(0xFF959595),
                        fontSize: 15,
                        fontWeight: FontWeight.normal,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 4.0),
                const Text(
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                  style: TextStyle(fontSize: 14.0, height: 1.4),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: kLargePadding),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    SizedBox(
                      width: 50.0,
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          const Icon(
                            Icons.chat_bubble_outline,
                            size: 18.0,
                            color: Color(0xFF74786B),
                          ),
                          const SizedBox(width: 8.0),
                          Text(
                            '$commentCount',
                            style: const TextStyle(fontSize: 14.0),
                          )
                        ],
                      ),
                    ),
                    SizedBox(
                      width: 50.0,
                      child: Row(
                        children: [
                          const Icon(
                            Icons.favorite,
                            size: 18.0,
                            color: Color(0xFF74786B),
                          ),
                          const SizedBox(width: 8.0),
                          Text(
                            '$favoriteCount',
                            style: const TextStyle(fontSize: 14.0),
                          )
                        ],
                      ),
                    ),
                    const Icon(
                      Icons.share,
                      size: 18.0,
                      color: Color(0xFF74786B),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
