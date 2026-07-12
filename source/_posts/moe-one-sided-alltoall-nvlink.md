---
title: Optimizing MoE Communication with One-Sided AlltoAll Over NVLink
date: 2026-07-13 00:01:00
permalink: tech-blogs/optimizing-moe-communication-with-one-sided-alltoall-over-nvlink/
categories:
  - Tech Blogs
tags:
  - TensorRT-LLM
  - MoE
  - NVLink
  - GPU-communication
---

> [This one-sided AlltoAll design](https://nvidia.github.io/TensorRT-LLM/blogs/tech_blog/blog18_Optimizing_MoE_Communication_with_One_Sided_AlltoAll_Over_NVLink.html) for MoE EP communication originated in [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/blogs/tech_blog/blog18_Optimizing_MoE_Communication_with_One_Sided_AlltoAll_Over_NVLink.md) and has since been ported to [FlashInfer](https://docs.flashinfer.ai/api/comm.html#flashinfer.comm.MoeAlltoAll). It is currently the fastest available MoE EP AlltoAll implementation on NVLink and has been integrated into [vLLM](https://docs.vllm.ai/en/latest/serving/expert_parallel_deployment/#backend-selection-guide) and [SGLang](https://sgl-project-sglang-93.mintlify.app/distributed/expert-parallelism#all-to-all-backends-moe-a2a-backend). A [presentation](https://www.bilibili.com/video/BV1NQGx6mELa/) (in Chinese) is also available.

The full article below is rendered from the [TensorRT-LLM source](https://github.com/NVIDIA/TensorRT-LLM/blob/944b7eb1e10e7b893d16144eeef91c73177172da/docs/source/blogs/tech_blog/blog18_Optimizing_MoE_Communication_with_One_Sided_AlltoAll_Over_NVLink.md) at revision [`944b7eb`](https://github.com/NVIDIA/TensorRT-LLM/commit/944b7eb1e10e7b893d16144eeef91c73177172da) under the [Apache License 2.0](https://github.com/NVIDIA/TensorRT-LLM/blob/944b7eb1e10e7b893d16144eeef91c73177172da/LICENSE).

<!-- more -->

<!-- trtllm-blog:moe-alltoall -->
