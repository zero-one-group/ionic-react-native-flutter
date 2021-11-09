import 'package:flutter/material.dart';

class Avatar extends StatelessWidget {
  const Avatar({
    Key? key,
    required this.avatarURL,
    this.size = 102.0,
  }) : super(key: key);

  final String avatarURL;
  final double? size;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(
          Radius.circular(100.0),
        ),
        border: Border.all(
          color: Colors.white.withOpacity(0.09),
          width: 5.0,
          style: BorderStyle.solid,
        ),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(size!),
        child: Image.asset(
          avatarURL,
          height: size,
          width: size,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
