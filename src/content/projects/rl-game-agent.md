---
title: "Reflexion Based Self-Learning Wargame Agent"
titleZh: "基于 Reflexion 的自主学习兵棋 Agent"
description: "Reflexion Based Self-Learning Wargame Agent | Python, GPT-4o, LangChain, FAISS · Dec. 2025 – Present"
descriptionZh: "基于 Reflexion 的自主学习兵棋 Agent | Python、GPT-4o、LangChain、FAISS · 2025年12月 – 至今"
date: "2026-04"
tags: ["Python", "GPT-4o", "LangChain", "FAISS", "RAG", "Reflexion", "OpenAI", "Function Calling", "LLM Agent"]
featured: true
github: "https://github.com/Michaelliu1017/Reflexion-Wargame-Agent"
metric: "Self-Learning"
metricLabel: "Wargame Agent"
category: "ml-ai"
---

## Overview

- Designed a three-layer decoupled Agent architecture — Engine Perception, API Bridge, LLM Decision — abstracting the closed game engine into a standardized REST API via Function Calling, forming a Perception, Reasoning, and Execution loop.

- Implemented Reflexion + RAG continuous learning where the LLM reflects on decision trajectories and distills tactical summaries into FAISS; relevant experiences are retrieved and injected at each game start, driving cross-game self-improvement.

- Built hierarchical metadata filtering over the long-term memory database by unit type, phase, and outcome, combined with FAISS ANN retrieval to optimize semantic recall; applied RAG citation constraints and evidence-based refusal to suppress hallucinations at scale.

## Architecture

```
Engine Perception  ↔  API Bridge (REST / Function Calling)  ↔  LLM Decision
                                    ↕
                         FAISS · LangChain · long-term memory
```

## Tech Stack

- **LLM / AI**: OpenAI GPT-4o, Function Calling, LangChain, FAISS, Reflexion, RAG
- **Integration**: REST API, game engine bridge, structured tool orchestration

Repository: [Reflexion-Wargame-Agent on GitHub](https://github.com/Michaelliu1017/Reflexion-Wargame-Agent)
