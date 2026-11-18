export type Project = {
  title: string;
  description: string;
  stack: string[];
  url: string;
};

export const projects: Project[] = [
  {
    title: 'pocket-tts-zh-train',
    description:
      '中文 / 中英混读 Pocket-TTS 训练与复现代码。权重在 HF：Lautriv/pocket-tts-zh、Lautriv/pocket-tts-zh-en。',
    stack: ['Python', 'PyTorch', 'TTS'],
    url: 'https://github.com/Laurtiv27/pocket-tts-zh-train',
  },
  {
    title: 'ondevice-inpaint-app-flutter',
    description: '端侧 LaMa 去水印 / 物体擦除，Flutter 跨 Android 与 iOS，数据不出设备。',
    stack: ['Flutter', 'Dart', 'ONNX'],
    url: 'https://github.com/Laurtiv27/ondevice-inpaint-app-flutter',
  },
  {
    title: 'ondevice-inpaint-app',
    description: 'Android 原生端侧 Inpaint，Java + ONNX Runtime。',
    stack: ['Android', 'Java', 'ONNX'],
    url: 'https://github.com/Laurtiv27/ondevice-inpaint-app',
  },
  {
    title: 'desktop-pet',
    description: '独立桌宠：坐姿守护、屏幕感知，可选 AI 能力。',
    stack: ['Electron'],
    url: 'https://github.com/Laurtiv27/desktop-pet',
  },
];

export const skills = [
  'Python',
  'PyTorch',
  'TTS',
  'Flutter',
  'Dart',
  'Java',
  'Android',
  'iOS',
  'ONNX Runtime',
  'Electron',
  'TypeScript',
  'Agent',
];
