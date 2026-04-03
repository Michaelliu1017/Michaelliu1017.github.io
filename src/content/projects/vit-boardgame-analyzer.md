---
title: "Board Game Decision Assistant via ViT + BLR"
titleZh: "基于 ViT + BLR 的桌游决策辅助系统"
description: "Board Game Decision Assistant via ViT + BLR | PyTorch, Flask, PostgreSQL, ViT · Jan. 2026 – Present"
descriptionZh: "基于 ViT 与贝叶斯线性回归（BLR）的桌游决策辅助 | PyTorch、Flask、PostgreSQL、ViT · 2026年1月 – 至今"
date: "2026-01"
tags: ["PyTorch", "Flask", "PostgreSQL", "ViT", "Bayesian Linear Regression", "Computer Vision", "REST API"]
featured: true
github: "https://github.com/Michaelliu1017/vit-boardgame-analyzer"
metric: "ViT + BLR"
metricLabel: "Decision stack"
category: "ml-ai"
---

## Overview

- Built a unit composition simulator to generate large-scale win-rate datasets; trained a fully-connected surrogate model to approximate simulator mappings and distilled it via Bayesian linear regression to output optimal force compositions and posterior confidence intervals.

- Integrated ViT for automated unit recognition and segmentation from live camera streams, converting visual input into standardized feature vectors and feeding the inference pipeline in real time for tactical recommendation.

- Deployed model inference as REST API endpoints via Flask; PostgreSQL persists match records with multi-dimensional querying, providing a data feedback loop for model iteration and retrospective analysis.

## Links

- [vit-boardgame-analyzer on GitHub](https://github.com/Michaelliu1017/vit-boardgame-analyzer)
