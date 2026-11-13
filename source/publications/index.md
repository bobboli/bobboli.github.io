---
title: Publications
date: 2026-07-12
updated: 2026-11-13
layout: page
comment: false
---

<style>
.article-licensing { display: none !important; }
.publication-list { margin-top: 1.5rem; }
.publication-item {
  display: grid;
  grid-template-columns: minmax(160px, 32%) minmax(0, 1fr);
  gap: 1.25rem;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid #e8e8e8;
}
.publication-item:first-child { border-top: 0; padding-top: 0; }
.publication-teaser {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 130px;
  padding: .5rem;
  overflow: hidden;
  background: #fafafa;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  cursor: zoom-in;
}
.publication-teaser img {
  display: block;
  width: 100%;
  max-height: 165px;
  object-fit: contain;
}
.publication-title { margin-bottom: .45rem !important; line-height: 1.35 !important; }
.publication-authors { margin-bottom: .3rem !important; font-size: .92rem; line-height: 1.55; }
.publication-venue { margin-bottom: .7rem !important; color: #555; }
.publication-award { margin-top: .35rem; font-weight: 600; text-decoration: none; }
.publication-actions { margin-top: .8rem; margin-bottom: 0 !important; }
.publication-actions .button { text-decoration: none; }
@media screen and (max-width: 768px) {
  .publication-item { grid-template-columns: 1fr; }
  .publication-teaser img { max-height: 220px; }
}
</style>

\* denotes equal contribution.

<div class="publication-list">

  <div class="publication-item">
    <a class="publication-teaser gallery-item" href="/publications/teasers/one-sided-a2a.png" aria-label="Enlarge teaser: One-sided all-to-all paper">
      <img src="/publications/teasers/one-sided-a2a.png" alt="Data path of one-sided dispatch and combine across two ranks" loading="lazy">
    </a>
    <div>
      <h3 class="title is-5 publication-title"><a href="https://arxiv.org/abs/2611.13188">One-Sided Expert-Parallel All-to-All for Mixture-of-Experts Inference over NVLink</a></h3>
      <p class="publication-authors"><strong>Bo Li</strong>, Chulian Zhang, Or Biri, Anthony Chang, Anton Korzh, Noam Duvdevani, XingFei Xi, Daniel Stokes, Zhenhuan Chen, Ludwig Schneider, Artem Y. Polyakov, Julien Demouth, Chandler Zhou</p>
      <p class="publication-venue"><em>arXiv preprint, 2026</em></p>
      <div class="buttons are-small publication-actions">
        <a class="button is-primary is-light" href="https://arxiv.org/abs/2611.13188"><span class="icon is-small"><i class="fas fa-file-pdf"></i></span><span>Paper</span></a>
        <a class="button is-light" href="https://github.com/NVIDIA/TensorRT-LLM/blob/main/docs/source/blogs/tech_blog/blog18_Optimizing_MoE_Communication_with_One_Sided_AlltoAll_Over_NVLink.md"><span class="icon is-small"><i class="fas fa-book-open"></i></span><span>Blog</span></a>
        <a class="button is-light" href="https://www.bilibili.com/video/BV1NQGx6mELa/"><span class="icon is-small"><i class="fas fa-video"></i></span><span>Talk</span></a>
        <a class="button is-light" href="/publications/bib/one-sided-a2a.bib"><span class="icon is-small"><i class="fas fa-quote-right"></i></span><span>BibTeX</span></a>
      </div>
    </div>
  </div>

  <div class="publication-item">
    <a class="publication-teaser gallery-item" href="/publications/teasers/blasst.png" aria-label="Enlarge teaser: BLASST paper">
      <img src="/publications/teasers/blasst.png" alt="BLASST dynamically skips low-impact attention blocks" loading="lazy">
    </a>
    <div>
      <h3 class="title is-5 publication-title"><a href="https://arxiv.org/abs/2512.12087">BLASST: Dynamic BLocked Attention Sparsity via Softmax Thresholding</a></h3>
      <p class="publication-authors">Jiayi Yuan*, Cameron Shinn*, Kai Xu, Jingze Cui, George Klimiashvili, Guangxuan Xiao, Perkz Zheng, <strong>Bo Li</strong>, Yuxin Zhou, Zhouhai Ye, Weijie You, Tian Zheng, Dominic Brown, Pengbo Wang, Markus Hoehnerbach, Richard Cai, Julien Demouth, John D. Owens, Xia Hu, Song Han, Timmy Liu, Huizi Mao</p>
      <p class="publication-venue">
        <em>Proceedings of Machine Learning and Systems (MLSys), 2026</em><br>
        <a class="tag is-warning publication-award" href="https://mlsys.org/media/mlsys-2026/best-papers/Best-Research-Paper-BLASST.pdf"><span class="icon is-small"><i class="fas fa-trophy"></i></span><span>Best Research Paper Award</span></a>
      </p>
      <div class="buttons are-small publication-actions">
        <a class="button is-primary is-light" href="https://arxiv.org/abs/2512.12087"><span class="icon is-small"><i class="fas fa-file-pdf"></i></span><span>Paper</span></a>
        <a class="button is-light" href="https://developer.nvidia.com/blog/accelerating-long-context-inference-with-skip-softmax-in-nvidia-tensorrt-llm/"><span class="icon is-small"><i class="fas fa-book-open"></i></span><span>Blog</span></a>
        <a class="button is-light" href="/publications/bib/blasst.bib"><span class="icon is-small"><i class="fas fa-quote-right"></i></span><span>BibTeX</span></a>
      </div>
    </div>
  </div>

  <div class="publication-item">
    <a class="publication-teaser gallery-item" href="/publications/teasers/marigold.png" aria-label="Enlarge teaser: Marigold project page">
      <img src="/publications/teasers/marigold.png" alt="Marigold diffusion fine-tuning protocol" loading="lazy">
    </a>
    <div>
      <h3 class="title is-5 publication-title"><a href="https://arxiv.org/abs/2505.09358">Marigold: Affordable Adaptation of Diffusion-Based Image Generators for Image Analysis</a></h3>
      <p class="publication-authors">Bingxin Ke*, Kevin Qu*, Tianfu Wang*, Nando Metzger*, Shengyu Huang, <strong>Bo Li</strong>, Anton Obukhov, Konrad Schindler</p>
      <p class="publication-venue"><em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2025</em></p>
      <div class="buttons are-small publication-actions">
        <a class="button is-primary is-light" href="https://arxiv.org/abs/2505.09358"><span class="icon is-small"><i class="fas fa-file-pdf"></i></span><span>Paper</span></a>
        <a class="button is-light" href="https://github.com/prs-eth/marigold"><span class="icon is-small"><i class="fab fa-github"></i></span><span>Code</span></a>
        <a class="button is-light" href="https://marigoldcomputervision.github.io/"><span class="icon is-small"><i class="fas fa-globe"></i></span><span>Project</span></a>
        <a class="button is-light" href="/publications/bib/marigold.bib"><span class="icon is-small"><i class="fas fa-quote-right"></i></span><span>BibTeX</span></a>
      </div>
    </div>
  </div>

  <div class="publication-item">
    <a class="publication-teaser gallery-item" href="/publications/teasers/quarot.png" aria-label="Enlarge teaser: QuaRot paper">
      <img src="/publications/teasers/quarot.png" alt="Activation distributions before and after QuaRot" loading="lazy">
    </a>
    <div>
      <h3 class="title is-5 publication-title"><a href="https://arxiv.org/abs/2404.00456">QuaRot: Outlier-Free 4-Bit Inference in Rotated LLMs</a></h3>
      <p class="publication-authors">Saleh Ashkboos, Amirkeivan Mohtashami, Maximilian L. Croci, <strong>Bo Li</strong>, Pashmina Cameron, Martin Jaggi, Dan Alistarh, Torsten Hoefler, James Hensman</p>
      <p class="publication-venue"><em>Advances in Neural Information Processing Systems (NeurIPS), 2024</em></p>
      <div class="buttons are-small publication-actions">
        <a class="button is-primary is-light" href="https://arxiv.org/abs/2404.00456"><span class="icon is-small"><i class="fas fa-file-pdf"></i></span><span>Paper</span></a>
        <a class="button is-light" href="https://github.com/spcl/QuaRot"><span class="icon is-small"><i class="fab fa-github"></i></span><span>Code</span></a>
        <a class="button is-light" href="/publications/bib/quarot.bib"><span class="icon is-small"><i class="fas fa-quote-right"></i></span><span>BibTeX</span></a>
      </div>
    </div>
  </div>

  <div class="publication-item">
    <a class="publication-teaser gallery-item" href="/publications/teasers/face-ipc.png" aria-label="Enlarge teaser: Actuated face simulation paper">
      <img src="/publications/teasers/face-ipc.png" alt="Collision-aware actuated face simulation results" loading="lazy">
    </a>
    <div>
      <h3 class="title is-5 publication-title"><a href="https://arxiv.org/abs/2312.02999">Efficient Incremental Potential Contact for Actuated Face Simulation</a></h3>
      <p class="publication-authors"><strong>Bo Li*</strong>, Lingchen Yang*, Barbara Solenthaler</p>
      <p class="publication-venue"><em>SIGGRAPH Asia Technical Communications, 2023</em></p>
      <div class="buttons are-small publication-actions">
        <a class="button is-primary is-light" href="https://arxiv.org/abs/2312.02999"><span class="icon is-small"><i class="fas fa-file-pdf"></i></span><span>Paper</span></a>
        <a class="button is-light" href="https://cgl.ethz.ch/Downloads/Publications/PaperVideos/2023/Yan23b.mp4"><span class="icon is-small"><i class="fas fa-play"></i></span><span>Video</span></a>
        <a class="button is-light" href="https://cgl.ethz.ch/publications/papers/paperYan23b.php"><span class="icon is-small"><i class="fas fa-globe"></i></span><span>Project</span></a>
        <a class="button is-light" href="/publications/bib/face-ipc.bib"><span class="icon is-small"><i class="fas fa-quote-right"></i></span><span>BibTeX</span></a>
      </div>
    </div>
  </div>

</div>

<!-- <p class="is-size-7 has-text-grey">Last edited: July 13, 2026</p> -->
