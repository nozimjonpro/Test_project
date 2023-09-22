export function fadeFromBottom(
  delay: number = 0,
  duration: number = 0,
  initialY: number = 0
) {
  const sentence = {
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: [0, 1],
      y: 0,
      transition: {
        duration: duration,
        type: "tween",
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return sentence;
}

export function fadeFromBottomGroup(
  duration: number = 0,
  initialY: number = 0,
  child: boolean = false
) {
  const sentence = {
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: [0, 1],
      y: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: initialY },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return !child ? sentence : item;
}
