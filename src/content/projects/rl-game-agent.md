---
title: "Self-Evolving Wargame LLM Agent via Reflexion + RAG"
titleZh: "基于 Reflexion + RAG 的自主学习兵棋推演 Agent"
description: "LLM autonomous agent system enabling end-to-end perception, reasoning and action execution in complex multi-phase strategic wargame environments, with cross-game self-evolution via Reflexion reflection loops and RAG vector memory."
descriptionZh: "构建 LLM 自主 Agent 系统，在复杂多阶段策略对抗环境中实现态势感知、战略推理与行动执行，通过 Reflexion 反思机制与 RAG 向量记忆库实现跨局持续自我进化。"
date: "2026-03"
tags: ["Python", "Java", "OpenAI", "GPT-4o", "Function Calling", "LangChain", "FAISS", "RAG", "Reflexion", "LLM Agent"]
featured: true
github: "https://github.com/Michaelliu1017/triplea-llm"
metric: "Self-Evolving"
metricLabel: "LLM Agent"
category: "ml-ai"
---

## Overview

Built a fully autonomous LLM Agent system capable of independently performing situational awareness, strategic reasoning, and action execution in a complex multi-phase adversarial wargame environment. The system continuously improves across games through a Reflexion-based reflection loop and RAG-powered vector memory, without any model fine-tuning.

## Architecture

Designed a three-layer decoupled Agent architecture — Engine Perception Layer / API Bridge Layer / LLM Decision Layer — abstracting the internal state and action space of a closed game engine into a standardized REST API, forming a complete **Perception → Reasoning → Execution** loop. Function Calling enables the LLM to autonomously orchestrate its own tool-call chain, achieving end-to-end decision-making in unstructured, combinatorially complex game states.

```
Engine Perception Layer  (Java RPC)
            ↕
API Bridge Layer  (REST HTTP)
  GET /state · GET /legal_actions · POST /act
            ↕
LLM Decision Layer  (Python · GPT-4o · Function Calling)
            ↕
RAG Vector Knowledge Base  (FAISS · LangChain)
```

## Key Features

### Reflexion + RAG Continuous Learning

After each game, the LLM reflects on the full decision trajectory and distills structured tactical summaries, which are persisted to a FAISS vector store. At the start of each new game, semantically relevant historical experiences are retrieved and injected into the reasoning context — forming a **"Decide → Reflect → Remember → Enhance"** self-improvement loop that compounds across games.

### Evolutionary Optimization (AlphaEvolve-inspired)

Uses win rate as a fitness function to run selection-mutation-crossover iterations over a population of reasoning strategies (System Prompts and tactical rule sets). High-fitness strategies are automatically written back to the knowledge base, creating a three-stage auto-optimization pipeline: **Evolutionary Selection → Semantic Retrieval → Decision Augmentation**.

### Engineering Stability

Solved multiple engineering challenges for long-running unattended operation: multi-thread concurrency and synchronization between the RPC callback thread and HTTP service thread; sliding-window context management to prevent token overflow across long games; idempotent retry logic and safe fallbacks on critical paths — ensuring the Agent runs stably through complex failure scenarios rather than crashing.

## Tech Stack

- **LLM / AI**: OpenAI GPT-4o, Function Calling, LangChain, FAISS
- **Backend**: Python 3.11, Java 17, REST API (Javalin)
- **Architecture**: Reflexion, RAG, AlphaEvolve-style Evolutionary Optimization
