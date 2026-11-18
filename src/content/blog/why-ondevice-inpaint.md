---
title: 为什么做端侧 Inpaint
description: 去水印不必上传原图——端侧推理的取舍与体验。
pubDate: 2026-11-10
---

做图像修复 / 去水印时，很多人第一反应是调云端 API。对个人与隐私敏感场景，**原图不出设备**往往更合适。

## 端侧的好处

- **隐私**：照片留在本地
- **时延**：省掉上传下载
- **离线**：弱网也能用

代价是模型体积、机型差异与耗电。我们用 LaMa 的 ONNX 模型，在 Flutter / Android 上跑通完整涂抹 → 推理 → 保存流程。

## 相关仓库

- [ondevice-inpaint-app-flutter](https://github.com/Laurtiv27/ondevice-inpaint-app-flutter)
- [ondevice-inpaint-app](https://github.com/Laurtiv27/ondevice-inpaint-app)

后续会继续写部署、侧载与性能笔记。
