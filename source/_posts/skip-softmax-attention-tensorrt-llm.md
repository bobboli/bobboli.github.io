---
title: Accelerating Long-Context Inference with Skip Softmax Attention
date: 2026-07-13 00:02:00
permalink: tech-blogs/accelerating-long-context-inference-with-skip-softmax-attention/
categories:
  - Tech Blogs
tags:
  - TensorRT-LLM
  - sparse-attention
  - LLM-inference
  - BLASST
---

> [Skip Softmax Attention](https://nvidia.github.io/TensorRT-LLM/blogs/tech_blog/blog16_Accelerating_Long_Context_Inference_with_Skip_Softmax_Attention.html) is a drop-in post-training sparse attention method and the productized implementation of [BLASST](https://arxiv.org/abs/2512.12087) in NVIDIA TensorRT-LLM. It is available for accelerating both [LLM workloads](https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/features/sparse-attention.md#skip-softmax-attention) and [visual-generation workloads](https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/visual-gen/features/sparse-attention.md#skip-softmax-attention).

The full article below is rendered from the [TensorRT-LLM source](https://github.com/NVIDIA/TensorRT-LLM/blob/1a349cd7a37e25ea6b69a98d355a64419d101b25/docs/source/blogs/tech_blog/blog16_Accelerating_Long_Context_Inference_with_Skip_Softmax_Attention.md) at revision [`1a349cd`](https://github.com/NVIDIA/TensorRT-LLM/commit/1a349cd7a37e25ea6b69a98d355a64419d101b25) under the [Apache License 2.0](https://github.com/NVIDIA/TensorRT-LLM/blob/1a349cd7a37e25ea6b69a98d355a64419d101b25/LICENSE).

<!-- more -->

<!-- trtllm-blog:skip-softmax -->
