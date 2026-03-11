---
title: "Spring AI RAG Knowledge Assistant"
titleZh: "Spring AI RAG 知识助手"
description: "Enterprise-grade Retrieval-Augmented Generation system built with Java and Spring AI, enabling intelligent document Q&A over PDF, DOCX, and Markdown files using local LLMs."
descriptionZh: "基于 Java 和 Spring AI 构建的企业级检索增强生成（RAG）系统，支持 PDF、DOCX、Markdown 文件的自然语言问答，使用本地大语言模型推理，数据全程不出域。"
date: "2026-03"
tags: ["Java", "Spring Boot", "Spring AI", "Ollama", "pgvector", "Milvus", "RAG", "qwen2.5"]
featured: true
github: "https://github.com/Michaelliu1017"
metric: "1000+"
metricLabel: "Documents Indexed"
category: "ml-ai"
---

## Overview

A production-ready Retrieval-Augmented Generation (RAG) system that allows users to query their document collections in natural language. Built using the Spring AI framework and Ollama for local LLM inference, keeping all data on-premise.

## Architecture

The system follows a clean pipeline architecture:

1. **Document Ingestion** — PDF, DOCX, and Markdown files are parsed and chunked into segments
2. **Embedding Generation** — `nomic-embed-text` model converts text chunks into dense vectors
3. **Vector Storage** — Embeddings stored in `pgvector` (PostgreSQL) or `Milvus` for similarity search
4. **Query Processing** — User queries are embedded and matched against stored vectors via TopK retrieval
5. **LLM Generation** — Retrieved context + query are fed to `qwen2.5` for final answer generation

## Key Technical Decisions

- **Spring AI VectorStore** abstraction allows switching between `pgvector` and `Milvus` without code changes
- **nomic-embed-text** embedding model chosen for its strong multilingual performance and small footprint
- **qwen2.5** as the generation model — excellent Chinese/English bilingual support
- Chunking strategy: 1000-token windows with 200-token overlap to preserve context across boundaries

## Results

- Successfully indexed **1000+** document chunks across multiple file formats
- Achieved consistent **sub-2-second** retrieval latency on local hardware
- **TopK + Prompt engineering** significantly reduced hallucination compared to naive generation
- Token efficiency improved by ~30% through dynamic context compression
