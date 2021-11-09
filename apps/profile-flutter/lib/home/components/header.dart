import 'package:flutter/material.dart';
import 'package:profile_flutter/constants.dart';

class HeaderView extends StatelessWidget {
  const HeaderView({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Color(0xFFF0F2EC),
      ),
      padding: const EdgeInsets.symmetric(
        horizontal: kLargePadding,
        vertical: 14.0,
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text(
            'Posts by @93alan',
            style: TextStyle(color: Color(0xFF959595)),
          ),
          GestureDetector(
            onTap: () {},
            child: const Icon(
              Icons.filter_list,
              color: Color(0xFF959595),
              size: 20.0,
            ),
          ),
        ],
      ),
    );
  }
}
