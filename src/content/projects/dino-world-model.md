---
title: "DINO World Model — Zero-Shot Visual Planning"
titleZh: "DINO 世界模型 — 零样本视觉规划"
description: "Planner-to-Policy system leveraging DINOv2/v3 visual features for zero-shot model predictive control, combining MPC, CEM, and Diffusion Policy for segment-level planning without task-specific training."
descriptionZh: "利用 DINOv2/v3 视觉特征实现零样本模型预测控制（MPC），融合 CEM 与扩散策略（Diffusion Policy）进行分段级规划，无需任务特定训练数据，相似度得分 0.92。"
date: "2025-12"
tags: ["Python", "DINOv3", "DINOv2", "MPC", "CEM", "Diffusion Policy", "Colab", "PyTorch"]
featured: true
github: "https://github.com/Michaelliu1017"
metric: "0.92"
metricLabel: "DINOv2 Similarity"
category: "research"
---

## Overview

A zero-shot visual planning system that uses **DINOv2/v3** pretrained features as a world model backbone, enabling model predictive control without task-specific training data. The system bridges high-level planning with low-level policy execution through a Planner-to-Policy architecture.

## Architecture

### Visual Backbone
- **DINOv3** patch features serve as the universal state representation
- Vision Transformer (ViT) encoder extracts rich spatial and semantic features
- Custom MLP decoder maps DINOv2 features to MPC/CEM-compatible state spaces

### Planning Stack
1. **Segment-level Planning** — MPC operates at coarse temporal segments, reducing planning horizon complexity
2. **CEM (Cross-Entropy Method)** — Stochastic optimization over action sequences within each segment
3. **Diffusion Policy** — Fine-grained action refinement within segment boundaries

### Zero-Shot Transfer
The key insight: DINOv2/v3's rich visual representations generalize across environments without task-specific fine-tuning. We exploit this by using DINO features directly as observation embeddings for downstream planners.

## Results

- Achieved **0.92 DINOv2 similarity** score between planned and executed trajectories
- Demonstrated zero-shot transfer across multiple manipulation tasks
- Segment-level MPC + CEM reduces compute vs. frame-level planning by 4×

## Infrastructure

- Training and evaluation on **Google Colab** with A100 GPU access
- Efficient batch rollout generation using vectorized environment wrappers
