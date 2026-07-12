---
title: Accelerating Long-Context Inference with Skip Softmax Attention
date: 2026-07-13 00:02:00
link: https://nvidia.github.io/TensorRT-LLM/blogs/tech_blog/blog16_Accelerating_Long_Context_Inference_with_Skip_Softmax_Attention.html
categories:
  - Tech Blogs
tags:
  - TensorRT-LLM
  - sparse-attention
  - LLM-inference
  - BLASST
---

> [Skip Softmax Attention](https://nvidia.github.io/TensorRT-LLM/blogs/tech_blog/blog16_Accelerating_Long_Context_Inference_with_Skip_Softmax_Attention.html) is a drop-in post-training sparse attention method and the productized implementation of [BLASST](https://arxiv.org/abs/2512.12087) in NVIDIA TensorRT-LLM. It is available for accelerating both [LLM workloads](https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/features/sparse-attention.md#skip-softmax-attention) and [visual-generation workloads](https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/visual-gen/features/sparse-attention.md#skip-softmax-attention).
