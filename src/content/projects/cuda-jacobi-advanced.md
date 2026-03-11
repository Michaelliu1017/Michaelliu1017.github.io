---
title: "Concurrent & Distributed Systems — POSIX & OS Labs"
titleZh: "并发与分布式系统 — POSIX 与 OS 实验"
description: "Systems programming projects spanning POSIX multi-threading, concurrent data structures, OS kernel modules, and distributed coordination algorithms implemented in C/C++."
descriptionZh: "涵盖 POSIX 多线程、并发数据结构、操作系统内核模块与分布式协调算法的系统编程项目集合，全部使用 C/C++ 实现，深入探索低级并发原语与系统设计。"
date: "2025-05"
tags: ["C", "C++", "POSIX Threads", "Concurrency", "OS", "Mutex", "Semaphore", "Distributed Systems"]
featured: false
github: "https://github.com/Michaelliu1017"
category: "systems"
---

## Overview

A collection of systems programming projects covering low-level concurrency, operating systems concepts, and distributed algorithms. Implemented in C/C++ using POSIX interfaces.

## Projects

### POSIX Thread Pool
- Lock-free work queue using compare-and-swap primitives
- Dynamic thread scaling based on queue depth
- Graceful shutdown with in-flight task completion

### Producer-Consumer with Semaphores
- Classic bounded buffer problem with semaphore-based synchronization
- Zero busy-waiting via blocking semaphore operations
- Benchmarked against mutex-only implementations

### Concurrent Hash Map
- Bucket-level fine-grained locking for high read throughput
- Reader-writer lock variant for read-heavy workloads
- Memory reclamation using hazard pointers

### Distributed Consensus
- Simplified Raft leader election implementation
- Heartbeat-based failure detection with configurable timeout
- Log replication across simulated node cluster

## Key Concepts Applied

- **Critical sections** and mutual exclusion patterns
- **Deadlock prevention** via consistent lock ordering
- **Memory ordering** and cache coherence considerations
- **ABA problem** mitigations in lock-free structures
