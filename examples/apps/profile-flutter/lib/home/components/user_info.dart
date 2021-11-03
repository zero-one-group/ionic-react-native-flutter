import 'package:flutter/material.dart';
import 'package:profile_flutter/components/avatar.dart';

class UserInfoView extends StatelessWidget {
  const UserInfoView({
    Key? key,
    required this.name,
    required this.role,
  }) : super(key: key);

  final String name, role;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          const Avatar(avatarURL: 'assets/images/avatar.jpg'),
          const SizedBox(height: 8),
          Text(
            name,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 21,
              fontWeight: FontWeight.normal,
            ),
          ),
          Text(
            role,
            style: const TextStyle(
              color: Color.fromRGBO(202, 211, 189, 1),
              fontSize: 14,
              fontWeight: FontWeight.normal,
            ),
          ),
        ],
      ),
    );
  }
}
