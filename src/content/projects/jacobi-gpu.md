---
title: "Jacobi GPU Solver — CUDA Linear Systems"
titleZh: "Jacobi GPU 求解器 — CUDA 线性系统"
description: "High-performance GPU-accelerated Jacobi iterative solver for large sparse linear systems implemented in CUDA C++, achieving 121× CPU speedup through CSR format optimization and inexact solver techniques."
descriptionZh: "基于 CUDA C++ 实现的高性能 GPU 加速 Jacobi 迭代线性方程组求解器，通过 CSR 稀疏格式优化与非精确求解技术，实现 121× CPU 加速，GPU 利用率达 97%。"
date: "2025-12"
tags: ["C++", "CUDA", "GPU", "Jacobi", "CSR", "Sparse Linear Algebra", "HPC"]
featured: false
github: "https://github.com/Michaelliu1017"
metric: "121×"
metricLabel: "CPU Speedup"
category: "systems"
---

## Overview

A high-performance implementation of the **Jacobi iterative method** for solving large sparse linear systems `Ax = b`, accelerated on NVIDIA GPUs using CUDA. The project benchmarks GPU parallelism against CPU baselines including Cholesky decomposition.

## Implementation Details

### Data Structures
- **CSR (Compressed Sparse Row)** format for memory-efficient sparse matrix storage
- Custom CUDA kernels for CSR-format SpMV (Sparse Matrix-Vector Multiplication)
- Pinned memory allocation for optimized host-device transfer

### Algorithms
- **Standard Jacobi** iteration: `x^(k+1) = D^(-1)(b - (L+U)x^k)`
- **Inexact Jacobi Solver** variant — relaxed convergence criteria for 30-50× additional speedup on certain problem classes
- GPU thread block configuration tuned for L2 cache occupancy maximization

### Benchmarks

| Method | Hardware | Speedup vs CPU Cholesky |
|--------|----------|------------------------|
| Jacobi GPU (CSR) | NVIDIA GPU | **92–97%** iteration efficiency |
| Inexact Jacobi GPU | NVIDIA GPU | **121×** vs CPU baseline |
| CPU Cholesky | Intel CPU | 1× (baseline) |

## Key Results

- **92–97%** GPU utilization efficiency for CSR-format Jacobi iterations
- **Inexact Solver** achieves **30–50× speedup** over standard Jacobi, and **121× total speedup** vs CPU
- Visualization GUI for convergence monitoring and residual analysis

## Applications

Large-scale Jacobi solvers are foundational in:
- Finite element analysis (structural mechanics, heat transfer)
- Image processing (Poisson equations for seamless cloning)
- Graph algorithms (PageRank, belief propagation)
